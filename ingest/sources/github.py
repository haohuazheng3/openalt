"""Source: the GitHub Search API.

Discovers open-source, self-hostable projects via:
  * per-proprietary "<x>-alternative" topics (notion-alternative, airtable-alternative, …)
  * the broad self-hosted topics (selfhosted, self-hosted)
  * per-category keyword searches

Each repository result already carries the metadata we need (stars, language,
license, pushed_at, archived, homepage), so no extra per-repo call is needed at
discovery time. A GITHUB_TOKEN raises the rate limit from 10 to 30 req/min.
"""
from __future__ import annotations

import time

import httpx

from config import CATEGORIES, PROPRIETARY, Config
from normalize import normalize_repo_url
from sources import Candidate

_API = "https://api.github.com/search/repositories"
_UA = "OpenAltIngestBot/1.0 (+https://github.com)"


def _headers(cfg: Config) -> dict:
    h = {"Accept": "application/vnd.github+json", "User-Agent": _UA, "X-GitHub-Api-Version": "2022-11-28"}
    if cfg.github_token:
        h["Authorization"] = f"Bearer {cfg.github_token}"
    return h


def _search(cfg: Config, query: str, per_page: int = 30) -> list[dict]:
    try:
        r = httpx.get(
            _API,
            params={"q": query, "sort": "stars", "order": "desc", "per_page": per_page},
            headers=_headers(cfg),
            timeout=30.0,
        )
        if r.status_code == 403 and "rate limit" in r.text.lower():
            print("  · github: rate-limited; pausing 20s")
            time.sleep(20)
            r = httpx.get(_API, params={"q": query, "sort": "stars", "order": "desc", "per_page": per_page},
                          headers=_headers(cfg), timeout=30.0)
        r.raise_for_status()
        return r.json().get("items", [])
    except Exception as e:  # noqa: BLE001
        print(f"  · github search failed ({query[:48]}…): {e}")
        return []


def _build_queries(cfg: Config) -> list[str]:
    qs: list[str] = []
    stars = f"stars:>={cfg.min_stars}"
    # 1) Per-proprietary alternative topics — the strongest signal.
    for p in PROPRIETARY:
        if p.get("topic"):
            qs.append(f"topic:{p['topic']} {stars}")
    # 2) Broad self-hosted topics.
    qs.append(f"topic:selfhosted {stars}")
    qs.append(f"topic:self-hosted {stars}")
    qs.append(f"topic:open-source-alternative {stars}")
    # 3) Per-category keyword nudges (top keyword each).
    for c in CATEGORIES:
        kw = c["keywords"][0].replace(" ", "-")
        qs.append(f"topic:{kw} topic:self-hosted {stars}")
    return qs


def fetch_repo_meta(cfg: Config, owner: str, repo: str) -> dict | None:
    """Fetch a single repo's metadata (for candidates from other sources)."""
    try:
        r = httpx.get(
            f"https://api.github.com/repos/{owner}/{repo}",
            headers=_headers(cfg),
            timeout=30.0,
        )
        if r.status_code == 404:
            return None
        if r.status_code == 403 and "rate limit" in r.text.lower():
            time.sleep(20)
            r = httpx.get(f"https://api.github.com/repos/{owner}/{repo}", headers=_headers(cfg), timeout=30.0)
        r.raise_for_status()
        return r.json()
    except Exception as e:  # noqa: BLE001
        print(f"  · github repo meta failed ({owner}/{repo}): {e}")
        return None


def enrich_candidate(cfg: Config, c: Candidate) -> Candidate:
    """Fill in GitHub metadata for a candidate that only has a repo URL."""
    from normalize import parse_repo

    parsed = parse_repo(c.repo_url)
    if not parsed or c.stars:  # already has metadata or not a github repo
        return c
    meta = fetch_repo_meta(cfg, *parsed)
    if not meta:
        return c
    lic = (meta.get("license") or {})
    spdx = lic.get("spdx_id")
    c.description = c.description or (meta.get("description") or "").strip()
    c.stars = int(meta.get("stargazers_count") or 0)
    c.language = c.language or meta.get("language")
    c.license = c.license or (None if spdx in (None, "NOASSERTION") else spdx)
    c.pushed_at = meta.get("pushed_at")
    c.archived = bool(meta.get("archived"))
    c.homepage = c.homepage or (meta.get("homepage") or None)
    c.topics = c.topics or (meta.get("topics") or [])
    return c


def fetch_candidates(cfg: Config) -> list[Candidate]:
    out: list[Candidate] = []
    seen: set[str] = set()
    for query in _build_queries(cfg):
        for item in _search(cfg, query, per_page=30):
            url = normalize_repo_url(item.get("html_url") or "")
            if not url or url in seen:
                continue
            if item.get("fork") or item.get("is_template"):
                continue
            seen.add(url)
            lic = (item.get("license") or {})
            spdx = lic.get("spdx_id")
            out.append(
                Candidate(
                    name=item.get("name") or "",
                    repo_url=url,
                    source="github",
                    description=(item.get("description") or "").strip(),
                    stars=int(item.get("stargazers_count") or 0),
                    language=item.get("language"),
                    license=None if spdx in (None, "NOASSERTION") else spdx,
                    pushed_at=item.get("pushed_at"),
                    archived=bool(item.get("archived")),
                    homepage=(item.get("homepage") or None),
                    topics=item.get("topics") or [],
                )
            )
            if len(out) >= cfg.max_per_source:
                return out
        time.sleep(2.0)  # stay under the search rate limit
    return out
