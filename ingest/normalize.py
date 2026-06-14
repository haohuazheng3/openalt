"""URL / name normalization, slug helpers, and freshness logic."""
from __future__ import annotations

import re
from datetime import datetime, timezone
from urllib.parse import urlparse


def normalize_repo_url(url: str) -> str:
    """Canonical GitHub repo URL: https://github.com/owner/repo (no .git, no trailing slash)."""
    if not url:
        return ""
    url = url.strip()
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    p = urlparse(url)
    host = (p.netloc or "").lower().removeprefix("www.")
    parts = [s for s in p.path.split("/") if s]
    if host == "github.com" and len(parts) >= 2:
        owner, repo = parts[0], parts[1].removesuffix(".git")
        return f"https://github.com/{owner}/{repo}"
    # Non-GitHub (e.g. GitLab) — normalize scheme/host/path only.
    path = "/".join(parts)
    return f"https://{host}/{path}".rstrip("/")


def parse_repo(url: str) -> tuple[str, str] | None:
    """Return (owner, repo) for a GitHub URL, else None."""
    p = urlparse(url if url.startswith("http") else "https://" + url)
    if p.netloc.lower().removeprefix("www.") != "github.com":
        return None
    parts = [s for s in p.path.split("/") if s]
    if len(parts) < 2:
        return None
    return parts[0], parts[1].removesuffix(".git")


def domain_of(url: str) -> str:
    if not url:
        return ""
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    return (urlparse(url).netloc or "").lower().removeprefix("www.")


def slugify(value: str) -> str:
    value = (value or "").lower().strip()
    value = value.replace("&", " and ")
    value = re.sub(r"['’`]", "", value)
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "project"


def parse_dt(value: str | None) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except Exception:
        return None


def is_stale(last_commit: datetime | None, *, days: int = 365) -> bool:
    """A repo not pushed to in over `days` counts as stale/abandoned."""
    if not last_commit:
        return False
    if last_commit.tzinfo is None:
        last_commit = last_commit.replace(tzinfo=timezone.utc)
    return (datetime.now(timezone.utc) - last_commit).days > days
