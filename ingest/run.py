#!/usr/bin/env python3
"""OpenAlt — ingestion pipeline.

Discovers open-source, self-hostable projects (GitHub Search + awesome-selfhosted),
fetches each repo's README, uses Claude to determine what it `replaces`, its
self-host difficulty, deploy options, managed-hosting availability and feature
gap, detects archived/dead repos, dedupes by repo URL, and upserts into Postgres.

Usage:
    python ingest/run.py                          # all sources, enrich, status=pending
    python ingest/run.py --source github --limit 40
    python ingest/run.py --status live --limit 60
    python ingest/run.py --dry-run                # discover only, write nothing

Env: DATABASE_URL (required), GITHUB_TOKEN (recommended), ANTHROPIC_API_KEY
     (optional — enables Claude; heuristic fallback otherwise).
"""
from __future__ import annotations

import argparse
import sys

from config import CATEGORIES, load_config
from crawl import fetch_readme
from db import (
    connect,
    count_listings,
    ensure_categories,
    ensure_proprietary,
    insert_listing,
    load_existing,
    touch_listing,
    unique_slug,
)
from extract import enrich
from normalize import is_stale, parse_dt
from sources import Candidate, awesome_selfhosted, github


def gather(cfg, source: str) -> list[Candidate]:
    candidates: list[Candidate] = []
    if source in ("all", "github"):
        candidates += github.fetch_candidates(cfg)
    if source in ("all", "awesome"):
        awesome = awesome_selfhosted.fetch_candidates(cfg)
        # Enrich awesome candidates (repo URL only) with GitHub metadata.
        for c in awesome[: cfg.max_per_source]:
            github.enrich_candidate(cfg, c)
        candidates += awesome

    # Dedupe by repo URL across sources, preserving order; keep richer entries.
    seen: dict[str, Candidate] = {}
    for c in candidates:
        if not c.repo_url:
            continue
        if c.repo_url not in seen or (c.stars and not seen[c.repo_url].stars):
            seen[c.repo_url] = c
    return list(seen.values())[: cfg.max_per_source]


def main() -> int:
    parser = argparse.ArgumentParser(description="OpenAlt ingester")
    parser.add_argument("--source", choices=["all", "github", "awesome"], default="all")
    parser.add_argument("--limit", type=int, default=None, help="max candidates this run")
    parser.add_argument("--status", choices=["pending", "live"], default="pending", help="status for new projects")
    parser.add_argument("--no-enrich", action="store_true", help="disable Claude extraction")
    parser.add_argument("--no-crawl", action="store_true", help="skip README fetch")
    parser.add_argument("--dry-run", action="store_true", help="discover only; write nothing")
    args = parser.parse_args()

    cfg = load_config(default_status=args.status, enrich=not args.no_enrich, max_per_source=args.limit)
    if not cfg.database_url:
        print("✗ DATABASE_URL is not set.", file=sys.stderr)
        return 1

    print("OpenAlt — ingest")
    print(f"  github auth     : {'token' if cfg.github_token else 'anonymous (low rate limit)'}")
    print(f"  extraction      : {'Claude (' + cfg.anthropic_model + ')' if (cfg.enrich and cfg.has_claude) else 'heuristic'}")
    print(f"  new-project status: {args.status}")
    print(f"  min stars       : {cfg.min_stars}")
    print(f"  max per source  : {cfg.max_per_source}\n")

    print("Discovering candidates…")
    candidates = gather(cfg, args.source)
    print(f"→ {len(candidates)} unique candidate repos after dedupe\n")

    if args.dry_run:
        for c in candidates[:30]:
            flag = " [archived]" if c.archived else ""
            print(f"  [{c.source}] {c.name} ★{c.stars} — {c.repo_url}{flag}")
        if len(candidates) > 30:
            print(f"  … and {len(candidates) - 30} more")
        print("\n(dry run — nothing written)")
        return 0

    conn = connect(cfg.database_url)
    try:
        cat_map = ensure_categories(conn, CATEGORIES)
        ensure_proprietary(conn, cat_map)
        by_repo, slugs = load_existing(conn)
        print(f"Existing listings: {len(slugs)}\n")

        inserted = updated = archived = failed = 0
        for i, c in enumerate(candidates, 1):
            stale = bool(c.archived) or is_stale(parse_dt(c.pushed_at))
            try:
                if c.repo_url in by_repo:
                    ex = by_repo[c.repo_url]
                    touch_listing(conn, ex["id"], stars=c.stars, last_commit_at=c.pushed_at,
                                  stale=stale, current_status=ex["status"])
                    updated += 1
                    if stale and ex["status"] == "live":
                        archived += 1
                    print(f"  [{i}/{len(candidates)}] ~ {c.name} (refreshed{' → archived' if stale else ''})")
                    continue

                readme = "" if args.no_crawl else fetch_readme(cfg, c.repo_url)
                enriched = enrich(cfg, {
                    "name": c.name,
                    "repo_url": c.repo_url,
                    "description": c.description,
                    "language": c.language,
                    "license": c.license,
                    "topics": c.topics,
                    "readme": readme,
                })

                slug = unique_slug(c.name or c.repo_url, slugs)
                status = "archived" if stale else args.status
                listing = {
                    "slug": slug,
                    "name": c.name,
                    "repo_url": c.repo_url,
                    "website_url": c.homepage,
                    "demo_url": enriched.get("demo_url"),
                    "license": c.license,
                    "language": c.language,
                    "github_stars": c.stars,
                    "last_commit_at": c.pushed_at,
                    "source": f"ingest:{c.source}",
                    "tagline": enriched["tagline"],
                    "description_md": enriched["description_md"],
                    "category_slug": enriched["category_slug"],
                    "replaces": enriched["replaces"],
                    "self_host_difficulty": enriched["self_host_difficulty"],
                    "deploy_options": enriched["deploy_options"],
                    "has_managed_hosting": enriched["has_managed_hosting"],
                    "feature_gap_md": enriched["feature_gap_md"],
                    "tags": enriched["tags"],
                }
                new_id = insert_listing(conn, listing, cat_map, status)
                by_repo[c.repo_url] = {"id": new_id, "slug": slug, "status": status}
                inserted += 1
                if status == "archived":
                    archived += 1
                rep = ("→ " + ",".join(enriched["replaces"])) if enriched["replaces"] else ""
                print(f"  [{i}/{len(candidates)}] + {c.name} [{enriched['category_slug']}] D{enriched['self_host_difficulty']} {rep}")
            except Exception as e:  # noqa: BLE001
                failed += 1
                print(f"  [{i}/{len(candidates)}] ✗ {c.name}: {e}")

        conn.commit()
        total = count_listings(conn)
        print(f"\n✓ Done. inserted={inserted} updated={updated} archived={archived} failed={failed}")
        print(f"  Total listings in DB: {total}")
        return 0
    finally:
        conn.close()


if __name__ == "__main__":
    raise SystemExit(main())
