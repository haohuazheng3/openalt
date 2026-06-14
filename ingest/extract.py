"""Structured extraction + classification for an open-source project.

With ANTHROPIC_API_KEY set, Claude reads the repo's README + metadata and emits
the directory fields — including which proprietary products it `replaces`, the
self-host difficulty (per the rubric), deploy options, and an honest feature gap.
Without a key, a deterministic heuristic fills sensible defaults so the pipeline
still runs end-to-end.
"""
from __future__ import annotations

import json
import re

from config import (
    CATEGORIES,
    DEFAULT_CATEGORY,
    DEPLOY_OPTIONS,
    DIFFICULTY_RUBRIC,
    PROPRIETARY,
    PROPRIETARY_SLUGS,
    Config,
)

_EXTRACT_SCHEMA = {
    "type": "object",
    "properties": {
        "tagline": {"type": "string", "description": "Punchy one-liner, <= 90 chars, no trailing period."},
        "description_md": {"type": "string", "description": "2-4 sentence markdown description of the project."},
        "category_slug": {"type": "string", "enum": [c["slug"] for c in CATEGORIES]},
        "replaces": {
            "type": "array",
            "items": {"type": "string", "enum": PROPRIETARY_SLUGS},
            "description": "Which proprietary products this replaces. Usually 1-3.",
        },
        "self_host_difficulty": {
            "type": "integer",
            "minimum": 1,
            "maximum": 5,
            "description": f"Apply STRICTLY: {DIFFICULTY_RUBRIC}",
        },
        "deploy_options": {
            "type": "array",
            "items": {"type": "string", "enum": DEPLOY_OPTIONS},
        },
        "has_managed_hosting": {"type": "boolean", "description": "Does the project offer an official paid managed/cloud version?"},
        "feature_gap_md": {"type": "string", "description": "HONEST markdown bullet list of where it falls short of the proprietary original."},
        "tags": {"type": "array", "items": {"type": "string"}},
        "demo_url": {"type": ["string", "null"], "description": "Live demo URL if one is documented, else null."},
    },
    "required": ["tagline", "description_md", "category_slug", "replaces", "self_host_difficulty", "deploy_options", "has_managed_hosting"],
}


def _first_sentences(text: str, n: int = 2) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    parts = re.split(r"(?<=[.!?])\s+", text)
    return " ".join(parts[:n]).strip()


def classify_category(text: str) -> str:
    blob = (text or "").lower()
    best, best_score = DEFAULT_CATEGORY, 0
    for c in CATEGORIES:
        score = sum(blob.count(k) for k in c["keywords"])
        if score > best_score:
            best, best_score = c["slug"], score
    return best


def _guess_replaces(text: str, topics: list[str]) -> list[str]:
    blob = (text or "").lower()
    topicset = {t.lower() for t in (topics or [])}
    out: list[str] = []
    for p in PROPRIETARY:
        name = p["name"].split(" ")[0].lower()
        if (p.get("topic") and p["topic"] in topicset) or re.search(rf"\b{re.escape(name)}\b", blob):
            out.append(p["slug"])
    return out[:3]


def _guess_deploy(text: str) -> list[str]:
    blob = (text or "").lower()
    opts: list[str] = []
    if "docker-compose" in blob or "docker compose" in blob or "compose.y" in blob:
        opts.append("Docker Compose")
    if "docker run" in blob or "docker pull" in blob or ("docker" in blob and not opts):
        opts.append("Docker")
    if "kubernetes" in blob or "helm" in blob or "k8s" in blob:
        opts.append("Kubernetes")
    if "deploy to" in blob or "one-click" in blob or "one click" in blob or "railway" in blob or "render.com" in blob:
        opts.append("One-Click")
    return opts or ["Manual"]


def _heuristic(raw: dict) -> dict:
    blob = " ".join(str(raw.get(k, "")) for k in ("name", "description", "readme"))
    topics = raw.get("topics") or []
    deploy = _guess_deploy(blob)
    has_compose = "Docker Compose" in deploy
    difficulty = 2 if "Docker" in deploy and not has_compose else (3 if has_compose else 4)
    managed = bool(re.search(r"\b(managed|cloud|hosted|saas)\b", blob, re.I))
    return {
        "tagline": _first_sentences(raw.get("description") or "", 1)[:90] or raw.get("name", ""),
        "description_md": _first_sentences(raw.get("description") or raw.get("readme", ""), 3) or f"{raw.get('name','')} is an open-source, self-hostable project.",
        "category_slug": classify_category(blob + " " + " ".join(topics)),
        "replaces": _guess_replaces(blob, topics),
        "self_host_difficulty": difficulty,
        "deploy_options": deploy,
        "has_managed_hosting": managed,
        "feature_gap_md": "",
        "tags": topics[:6],
        "demo_url": None,
    }


def _via_claude(cfg: Config, raw: dict) -> dict | None:
    try:
        import anthropic
    except Exception:
        return None
    try:
        client = anthropic.Anthropic(api_key=cfg.anthropic_api_key)
        prompt = (
            "You are cataloguing an OPEN-SOURCE, self-hostable project for a directory of alternatives to commercial "
            "SaaS. Read the repo metadata and README, then emit accurate structured fields. Do not invent facts.\n\n"
            f"Project: {raw.get('name','')}\n"
            f"Repo: {raw.get('repo_url','')}\n"
            f"GitHub description: {raw.get('description','')}\n"
            f"Primary language: {raw.get('language','')}\n"
            f"License: {raw.get('license','')}\n"
            f"GitHub topics: {', '.join(raw.get('topics') or [])}\n\n"
            "Decide which proprietary products it replaces (only from the allowed slug list), classify it into one "
            "category, and score self-host difficulty STRICTLY by this rubric:\n"
            f"{DIFFICULTY_RUBRIC}\n\n"
            "For feature_gap_md, write an HONEST short markdown bullet list of where it falls short of the "
            "proprietary original — no marketing fluff.\n\n"
            f"README (truncated):\n{(raw.get('readme','') or '')[:9000]}\n"
        )
        msg = client.messages.create(
            model=cfg.anthropic_model,
            max_tokens=1200,
            tools=[{"name": "emit_listing", "description": "Emit the structured listing fields.", "input_schema": _EXTRACT_SCHEMA}],
            tool_choice={"type": "tool", "name": "emit_listing"},
            messages=[{"role": "user", "content": prompt}],
        )
        for block in msg.content:
            if getattr(block, "type", None) == "tool_use":
                data = block.input
                if isinstance(data, str):
                    data = json.loads(data)
                return data
    except Exception as e:  # noqa: BLE001
        print(f"    · Claude extraction failed: {e}; using heuristic")
    return None


def enrich(cfg: Config, raw: dict) -> dict:
    result = _via_claude(cfg, raw) if (cfg.enrich and cfg.has_claude) else None
    if not result:
        result = _heuristic(raw)

    # Normalize / guard.
    if result.get("category_slug") not in {c["slug"] for c in CATEGORIES}:
        result["category_slug"] = classify_category(
            " ".join(str(raw.get(k, "")) for k in ("name", "description", "readme"))
        )
    result["replaces"] = [s for s in (result.get("replaces") or []) if s in PROPRIETARY_SLUGS]
    result["deploy_options"] = [d for d in (result.get("deploy_options") or []) if d in DEPLOY_OPTIONS] or ["Manual"]
    diff = result.get("self_host_difficulty") or 3
    result["self_host_difficulty"] = max(1, min(5, int(diff)))
    result["has_managed_hosting"] = bool(result.get("has_managed_hosting"))
    result.setdefault("feature_gap_md", "")
    result.setdefault("tags", [])
    result.setdefault("demo_url", None)
    result["tagline"] = (result.get("tagline") or raw.get("name", ""))[:120]
    result.setdefault("description_md", f"{raw.get('name','')} is an open-source project.")
    return result
