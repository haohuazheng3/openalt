"""Candidate discovery sources for the ingester."""
from __future__ import annotations

import re
from dataclasses import dataclass, field


@dataclass
class Candidate:
    name: str
    repo_url: str
    source: str
    description: str = ""
    stars: int = 0
    language: str | None = None
    license: str | None = None
    pushed_at: str | None = None  # ISO timestamp of last push
    archived: bool = False
    homepage: str | None = None
    # GitHub topics — used as a hint for `replaces` in the heuristic fallback.
    topics: list[str] = field(default_factory=list)


_MD_LINK = re.compile(r"!?\[([^\]]*)\]\([^)]*\)")
_MD_TOKENS = re.compile(r"[`*_~]+")


def clean_markdown(text: str) -> str:
    if not text:
        return ""
    text = _MD_LINK.sub(r"\1", text)
    text = _MD_TOKENS.sub("", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip(" -–—:·.")
