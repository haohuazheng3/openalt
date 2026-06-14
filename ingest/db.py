"""Postgres I/O for the ingester (psycopg 3).

Idempotent by design:
  * categories and proprietary_tools are upserted by slug,
  * an existing project (matched by repo_url) gets its stars / last-commit /
    last-checked refreshed and is flipped between live <-> archived based on
    repo freshness — never clobbering curated content or admin/Stripe state,
  * new projects are inserted with a unique slug and the configured status
    (archived if the repo is archived or long-dead).
"""
from __future__ import annotations

import psycopg

from config import PROPRIETARY
from normalize import slugify


def connect(dsn: str) -> psycopg.Connection:
    return psycopg.connect(dsn, autocommit=False)


def ensure_categories(conn: psycopg.Connection, categories: list[dict]) -> dict[str, int]:
    with conn.cursor() as cur:
        for c in categories:
            cur.execute(
                "INSERT INTO categories (slug, name) VALUES (%s, %s) "
                "ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name",
                (c["slug"], c["name"]),
            )
        cur.execute("SELECT slug, id FROM categories")
        return {row[0]: row[1] for row in cur.fetchall()}


def ensure_proprietary(conn: psycopg.Connection, cat_map: dict[str, int]) -> None:
    """Keep the proprietary_tools table populated so /[x]-alternatives pages resolve."""
    with conn.cursor() as cur:
        for p in PROPRIETARY:
            cur.execute(
                "INSERT INTO proprietary_tools (slug, name, category_id) VALUES (%s, %s, %s) "
                "ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, category_id = EXCLUDED.category_id",
                (p["slug"], p["name"], cat_map.get(p["category"])),
            )


def load_existing(conn: psycopg.Connection) -> tuple[dict[str, dict], set[str]]:
    """Return (repo_url -> {id, slug, status}) and the set of all slugs."""
    by_repo: dict[str, dict] = {}
    slugs: set[str] = set()
    with conn.cursor() as cur:
        cur.execute("SELECT id, slug, repo_url, status FROM listings")
        for lid, slug, repo, status in cur.fetchall():
            slugs.add(slug)
            if repo:
                by_repo[repo] = {"id": lid, "slug": slug, "status": status}
    return by_repo, slugs


def unique_slug(base: str, taken: set[str]) -> str:
    base = slugify(base)
    slug = base
    n = 2
    while slug in taken:
        slug = f"{base}-{n}"
        n += 1
    taken.add(slug)
    return slug


def touch_listing(conn: psycopg.Connection, listing_id: int, *, stars: int, last_commit_at: str | None, stale: bool, current_status: str) -> None:
    """Refresh repo stats; flip live<->archived on freshness (preserve pending/rejected)."""
    new_status = None
    if stale and current_status == "live":
        new_status = "archived"
    elif not stale and current_status == "archived":
        new_status = "live"
    with conn.cursor() as cur:
        cur.execute(
            """
            UPDATE listings SET
                github_stars    = %s,
                last_commit_at  = COALESCE(%s::timestamptz, last_commit_at),
                last_checked_at = now(),
                updated_at      = now(),
                status          = COALESCE(%s::listing_status, status)
            WHERE id = %s
            """,
            (stars, last_commit_at, new_status, listing_id),
        )


def insert_listing(conn: psycopg.Connection, listing: dict, cat_map: dict[str, int], status: str) -> int:
    category_id = cat_map.get(listing.get("category_slug"))
    with conn.cursor() as cur:
        cur.execute(
            """
            INSERT INTO listings (
                slug, name, tagline, description_md, repo_url, website_url, demo_url,
                category_id, replaces, license, language, github_stars, last_commit_at,
                self_host_difficulty, deploy_options, has_managed_hosting, feature_gap_md,
                tags, status, source, last_checked_at
            ) VALUES (
                %s, %s, %s, %s, %s, %s, %s,
                %s, %s, %s, %s, %s, %s::timestamptz,
                %s, %s, %s, %s,
                %s, %s::listing_status, %s, now()
            )
            ON CONFLICT (repo_url) DO UPDATE SET
                github_stars = EXCLUDED.github_stars,
                last_commit_at = EXCLUDED.last_commit_at,
                last_checked_at = now()
            RETURNING id
            """,
            (
                listing["slug"],
                listing["name"],
                listing.get("tagline") or None,
                listing.get("description_md") or None,
                listing["repo_url"],
                listing.get("website_url") or None,
                listing.get("demo_url") or None,
                category_id,
                listing.get("replaces") or [],
                listing.get("license") or None,
                listing.get("language") or None,
                int(listing.get("github_stars") or 0),
                listing.get("last_commit_at") or None,
                listing.get("self_host_difficulty"),
                listing.get("deploy_options") or [],
                bool(listing.get("has_managed_hosting")),
                listing.get("feature_gap_md") or None,
                listing.get("tags") or [],
                status,
                listing.get("source") or "ingest",
            ),
        )
        return cur.fetchone()[0]


def count_listings(conn: psycopg.Connection) -> int:
    with conn.cursor() as cur:
        cur.execute("SELECT count(*) FROM listings")
        return int(cur.fetchone()[0])
