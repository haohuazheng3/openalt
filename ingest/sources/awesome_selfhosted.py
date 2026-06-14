"""Source: the awesome-selfhosted community list.

Parses GitHub repo links out of the awesome-selfhosted README. Candidates here
carry only a repo URL + blurb; run.py enriches them with GitHub metadata via
`github.enrich_candidate`. No API key required to read the list itself.
"""
from __future__ import annotations

import re

import httpx

from config import Config
from normalize import normalize_repo_url, parse_repo
from sources import Candidate, clean_markdown

LISTS = [
    "https://raw.githubusercontent.com/awesome-selfhosted/awesome-selfhosted/master/README.md",
]

# - [Name](https://github.com/owner/repo) - description.
_LINK_RE = re.compile(r"^\s*[-*]\s*\[([^\]]+)\]\((https?://github\.com/[^)\s]+)\)\s*[-—:]*\s*(.*)$")


def fetch_candidates(cfg: Config) -> list[Candidate]:
    out: list[Candidate] = []
    seen: set[str] = set()
    for list_url in LISTS:
        try:
            resp = httpx.get(list_url, timeout=30.0, follow_redirects=True)
            resp.raise_for_status()
            text = resp.text
        except Exception as e:  # noqa: BLE001
            print(f"  · awesome-selfhosted list failed: {e}")
            continue

        for line in text.splitlines():
            m = _LINK_RE.match(line)
            if not m:
                continue
            name = clean_markdown(m.group(1))
            url = normalize_repo_url(m.group(2))
            desc = clean_markdown(m.group(3))
            if not parse_repo(url) or url in seen:
                continue
            seen.add(url)
            out.append(Candidate(name=name, repo_url=url, source="awesome-selfhosted", description=desc))
            if len(out) >= cfg.max_per_source:
                break
    print(f"  · awesome-selfhosted: {len(out)} candidate repos")
    return out
