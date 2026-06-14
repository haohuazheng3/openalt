"""Configuration + canonical taxonomy for the ingestion pipeline.

Kept in sync with src/data/categories.ts and src/data/proprietary-tools.ts.
"""
from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

try:
    from dotenv import load_dotenv

    ROOT = Path(__file__).resolve().parent.parent
    load_dotenv(ROOT / ".env.local")
    load_dotenv(ROOT / ".env")
except Exception:  # dotenv is optional
    pass


@dataclass
class Config:
    database_url: str
    github_token: str | None
    anthropic_api_key: str | None
    anthropic_model: str
    max_per_source: int
    default_status: str  # "pending" | "live"
    enrich: bool
    min_stars: int

    @property
    def has_claude(self) -> bool:
        return bool(self.anthropic_api_key)


def load_config(
    *, default_status: str = "pending", enrich: bool = True, max_per_source: int | None = None
) -> Config:
    return Config(
        database_url=os.environ.get("DATABASE_URL", ""),
        github_token=os.environ.get("GITHUB_TOKEN") or None,
        anthropic_api_key=os.environ.get("ANTHROPIC_API_KEY") or None,
        anthropic_model=os.environ.get("ANTHROPIC_MODEL", "claude-opus-4-8"),
        max_per_source=max_per_source or int(os.environ.get("INGEST_MAX_PER_SOURCE", "80")),
        default_status=os.environ.get("INGEST_DEFAULT_STATUS", default_status),
        enrich=enrich,
        min_stars=int(os.environ.get("INGEST_MIN_STARS", "200")),
    )


# Canonical categories — kept in sync with src/data/categories.ts.
# `keywords` drive the heuristic classifier used when Claude enrichment is off.
CATEGORIES: list[dict] = [
    {"slug": "notes-docs", "name": "Notes & Knowledge Base",
     "keywords": ["note", "notes", "wiki", "knowledge base", "docs", "documentation", "markdown", "outliner"]},
    {"slug": "database-spreadsheet", "name": "Databases & Spreadsheets",
     "keywords": ["database", "spreadsheet", "no-code", "nocode", "airtable", "table", "baserow", "internal tool"]},
    {"slug": "automation", "name": "Automation & iPaaS",
     "keywords": ["automation", "workflow", "ipaas", "integration", "zapier", "no-code automation", "webhook"]},
    {"slug": "crm", "name": "CRM & Sales",
     "keywords": ["crm", "sales", "pipeline", "contacts", "leads", "customer relationship"]},
    {"slug": "analytics", "name": "Product & Web Analytics",
     "keywords": ["analytics", "web analytics", "product analytics", "events", "tracking", "metrics", "privacy"]},
    {"slug": "password-manager", "name": "Password Managers & Secrets",
     "keywords": ["password", "passwords", "secrets", "vault", "credentials", "2fa", "totp"]},
    {"slug": "email-newsletter", "name": "Email & Newsletters",
     "keywords": ["email", "newsletter", "mail server", "smtp", "mailing list", "campaign", "transactional"]},
    {"slug": "project-management", "name": "Project Management & Kanban",
     "keywords": ["project management", "kanban", "issue", "tasks", "agile", "scrum", "board", "tracker"]},
    {"slug": "file-storage", "name": "File Storage & Sync",
     "keywords": ["file", "storage", "sync", "cloud storage", "dropbox", "nextcloud", "files", "share"]},
    {"slug": "team-chat", "name": "Team Chat & Collaboration",
     "keywords": ["chat", "messaging", "team chat", "slack", "im", "collaboration", "communication"]},
    {"slug": "forms-surveys", "name": "Forms & Surveys",
     "keywords": ["form", "forms", "survey", "questionnaire", "typeform", "poll"]},
    {"slug": "helpdesk", "name": "Helpdesk & Support",
     "keywords": ["helpdesk", "support", "ticket", "ticketing", "live chat", "customer support"]},
    {"slug": "bi-dashboards", "name": "BI & Dashboards",
     "keywords": ["business intelligence", "bi", "dashboard", "dashboards", "data visualization", "metabase", "reporting"]},
    {"slug": "monitoring", "name": "Monitoring & Status Pages",
     "keywords": ["monitoring", "uptime", "status page", "observability", "alerting", "metrics", "incident"]},
    {"slug": "scheduling", "name": "Scheduling & Booking",
     "keywords": ["scheduling", "booking", "calendar", "appointments", "calendly", "meetings"]},
    {"slug": "paas-deploy", "name": "Self-Hosting Platforms & PaaS",
     "keywords": ["paas", "deploy", "deployment", "self-hosting platform", "heroku", "docker", "hosting", "panel"]},
]

CATEGORY_SLUGS = [c["slug"] for c in CATEGORIES]
DEFAULT_CATEGORY = "notes-docs"

# Canonical proprietary tools — kept in sync with src/data/proprietary-tools.ts.
# `topic` is the GitHub topic used to discover alternatives (when one exists).
PROPRIETARY: list[dict] = [
    {"slug": "notion", "name": "Notion", "category": "notes-docs", "topic": "notion-alternative"},
    {"slug": "confluence", "name": "Confluence", "category": "notes-docs", "topic": "confluence-alternative"},
    {"slug": "evernote", "name": "Evernote", "category": "notes-docs", "topic": "evernote-alternative"},
    {"slug": "obsidian", "name": "Obsidian", "category": "notes-docs", "topic": None},
    {"slug": "airtable", "name": "Airtable", "category": "database-spreadsheet", "topic": "airtable-alternative"},
    {"slug": "google-sheets", "name": "Google Sheets", "category": "database-spreadsheet", "topic": None},
    {"slug": "smartsheet", "name": "Smartsheet", "category": "database-spreadsheet", "topic": None},
    {"slug": "retool", "name": "Retool", "category": "database-spreadsheet", "topic": "retool-alternative"},
    {"slug": "zapier", "name": "Zapier", "category": "automation", "topic": "zapier-alternative"},
    {"slug": "make", "name": "Make", "category": "automation", "topic": None},
    {"slug": "tray-io", "name": "Tray.io", "category": "automation", "topic": None},
    {"slug": "workato", "name": "Workato", "category": "automation", "topic": None},
    {"slug": "salesforce", "name": "Salesforce", "category": "crm", "topic": "salesforce-alternative"},
    {"slug": "hubspot", "name": "HubSpot", "category": "crm", "topic": "hubspot-alternative"},
    {"slug": "pipedrive", "name": "Pipedrive", "category": "crm", "topic": None},
    {"slug": "google-analytics", "name": "Google Analytics", "category": "analytics", "topic": "google-analytics-alternative"},
    {"slug": "mixpanel", "name": "Mixpanel", "category": "analytics", "topic": "mixpanel-alternative"},
    {"slug": "amplitude", "name": "Amplitude", "category": "analytics", "topic": None},
    {"slug": "hotjar", "name": "Hotjar", "category": "analytics", "topic": "hotjar-alternative"},
    {"slug": "1password", "name": "1Password", "category": "password-manager", "topic": None},
    {"slug": "lastpass", "name": "LastPass", "category": "password-manager", "topic": "lastpass-alternative"},
    {"slug": "dashlane", "name": "Dashlane", "category": "password-manager", "topic": None},
    {"slug": "hashicorp-vault", "name": "HashiCorp Vault", "category": "password-manager", "topic": None},
    {"slug": "mailchimp", "name": "Mailchimp", "category": "email-newsletter", "topic": "mailchimp-alternative"},
    {"slug": "sendgrid", "name": "SendGrid", "category": "email-newsletter", "topic": "sendgrid-alternative"},
    {"slug": "gmail", "name": "Gmail / Google Workspace", "category": "email-newsletter", "topic": None},
    {"slug": "convertkit", "name": "ConvertKit (Kit)", "category": "email-newsletter", "topic": None},
    {"slug": "trello", "name": "Trello", "category": "project-management", "topic": "trello-alternative"},
    {"slug": "asana", "name": "Asana", "category": "project-management", "topic": "asana-alternative"},
    {"slug": "jira", "name": "Jira", "category": "project-management", "topic": "jira-alternative"},
    {"slug": "monday", "name": "monday.com", "category": "project-management", "topic": None},
    {"slug": "linear", "name": "Linear", "category": "project-management", "topic": "linear-alternative"},
    {"slug": "basecamp", "name": "Basecamp", "category": "project-management", "topic": None},
    {"slug": "dropbox", "name": "Dropbox", "category": "file-storage", "topic": "dropbox-alternative"},
    {"slug": "google-drive", "name": "Google Drive", "category": "file-storage", "topic": None},
    {"slug": "box", "name": "Box", "category": "file-storage", "topic": None},
    {"slug": "slack", "name": "Slack", "category": "team-chat", "topic": "slack-alternative"},
    {"slug": "discord", "name": "Discord", "category": "team-chat", "topic": "discord-alternative"},
    {"slug": "microsoft-teams", "name": "Microsoft Teams", "category": "team-chat", "topic": None},
    {"slug": "typeform", "name": "Typeform", "category": "forms-surveys", "topic": "typeform-alternative"},
    {"slug": "google-forms", "name": "Google Forms", "category": "forms-surveys", "topic": "google-forms-alternative"},
    {"slug": "surveymonkey", "name": "SurveyMonkey", "category": "forms-surveys", "topic": None},
    {"slug": "jotform", "name": "Jotform", "category": "forms-surveys", "topic": None},
    {"slug": "zendesk", "name": "Zendesk", "category": "helpdesk", "topic": "zendesk-alternative"},
    {"slug": "intercom", "name": "Intercom", "category": "helpdesk", "topic": "intercom-alternative"},
    {"slug": "freshdesk", "name": "Freshdesk", "category": "helpdesk", "topic": None},
    {"slug": "tableau", "name": "Tableau", "category": "bi-dashboards", "topic": "tableau-alternative"},
    {"slug": "looker", "name": "Looker", "category": "bi-dashboards", "topic": None},
    {"slug": "power-bi", "name": "Power BI", "category": "bi-dashboards", "topic": None},
    {"slug": "datadog", "name": "Datadog", "category": "monitoring", "topic": "datadog-alternative"},
    {"slug": "pingdom", "name": "Pingdom", "category": "monitoring", "topic": None},
    {"slug": "statuspage", "name": "Statuspage", "category": "monitoring", "topic": "statuspage-alternative"},
    {"slug": "uptimerobot", "name": "UptimeRobot", "category": "monitoring", "topic": "uptimerobot-alternative"},
    {"slug": "calendly", "name": "Calendly", "category": "scheduling", "topic": "calendly-alternative"},
    {"slug": "acuity", "name": "Acuity Scheduling", "category": "scheduling", "topic": None},
    {"slug": "heroku", "name": "Heroku", "category": "paas-deploy", "topic": "heroku-alternative"},
    {"slug": "vercel", "name": "Vercel", "category": "paas-deploy", "topic": "vercel-alternative"},
    {"slug": "netlify", "name": "Netlify", "category": "paas-deploy", "topic": "netlify-alternative"},
    {"slug": "render", "name": "Render", "category": "paas-deploy", "topic": None},
]

PROPRIETARY_SLUGS = [p["slug"] for p in PROPRIETARY]

# Self-host difficulty rubric — Claude must apply this STRICTLY.
DIFFICULTY_RUBRIC = (
    "1 = a free one-click deploy template or official managed hosting exists (just sign up / click deploy); "
    "2 = a single `docker run` gets it working; "
    "3 = docker-compose with multiple services (app + db + cache); "
    "4 = manual setup: configure a database, reverse proxy, env and dependencies by hand; "
    "5 = complex multi-component architecture and/or poor documentation."
)

DEPLOY_OPTIONS = ["One-Click", "Docker", "Docker Compose", "Kubernetes", "Manual"]
