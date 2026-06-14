"""Fetch a repository's README for Claude context.

Uses the GitHub README API (which returns the default README regardless of name
or branch). Falls back to the raw main/master README. Returns plain-ish markdown,
truncated, or "" on failure.
"""
from __future__ import annotations

import base64

import httpx

from config import Config
from normalize import parse_repo

_UA = "OpenAltIngestBot/1.0"
_MAX = 12000


def _headers(cfg: Config) -> dict:
    h = {"Accept": "application/vnd.github+json", "User-Agent": _UA}
    if cfg.github_token:
        h["Authorization"] = f"Bearer {cfg.github_token}"
    return h


def fetch_readme(cfg: Config, repo_url: str) -> str:
    parsed = parse_repo(repo_url)
    if not parsed:
        return ""
    owner, repo = parsed
    # 1) README API
    try:
        r = httpx.get(f"https://api.github.com/repos/{owner}/{repo}/readme", headers=_headers(cfg), timeout=30.0)
        if r.status_code == 200:
            data = r.json()
            if data.get("encoding") == "base64" and data.get("content"):
                text = base64.b64decode(data["content"]).decode("utf-8", "replace")
                return text[:_MAX]
    except Exception:
        pass
    # 2) Raw fallback
    for branch in ("HEAD", "main", "master"):
        try:
            r = httpx.get(
                f"https://raw.githubusercontent.com/{owner}/{repo}/{branch}/README.md",
                headers={"User-Agent": _UA},
                timeout=20.0,
                follow_redirects=True,
            )
            if r.status_code == 200 and r.text.strip():
                return r.text[:_MAX]
        except Exception:
            continue
    return ""
