/**
 * AUTO-GENERATED seed dataset of real open-source / self-hostable projects.
 *
 * Produced by the `curate-selfhosted-alternatives` multi-agent workflow (16
 * category agents -> adversarial repo/replaces verification). Star counts and
 * last-commit dates are snapshots; the weekly Python ingester (/ingest) refreshes
 * them live from the GitHub API and flips long-dead repos to `archived`.
 * Do not hand-edit entries here; manage live data through /admin.
 *
 * 159 projects across 16 categories.
 */

export type SeedListing = {
  slug: string
  name: string
  tagline: string
  descriptionMd: string
  repoUrl: string
  websiteUrl: string | null
  demoUrl: string | null
  logoUrl: string | null
  categorySlug: string
  /** proprietary_tools slugs this project replaces. */
  replaces: string[]
  license: string
  language: string
  githubStars: number
  /** ISO date string of last known repo activity. */
  lastCommitAt: string
  selfHostDifficulty: number
  deployOptions: string[]
  hasManagedHosting: boolean
  featureGapMd: string
  tags: string[]
  affiliateUrl: string | null
  affiliateNetwork: string | null
  featured: boolean
  featuredRank: number | null
  status?: "live" | "pending" | "rejected" | "archived"
  source: string
}

export const SEED_LISTINGS: SeedListing[] = [
  {
    "slug": "appflowy",
    "name": "AppFlowy",
    "tagline": "Open-source Notion alternative built on Flutter and Rust",
    "descriptionMd": "AppFlowy is an open-source alternative to Notion offering docs, wikis, kanban boards, and databases with a focus on data ownership and privacy. The core is built in Rust with a Flutter UI, giving native desktop and mobile apps. It can run fully offline/local or be self-hosted with AppFlowy Cloud for collaboration.",
    "repoUrl": "https://github.com/AppFlowy-IO/AppFlowy",
    "websiteUrl": "https://appflowy.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence"
    ],
    "license": "AGPL-3.0",
    "language": "Dart",
    "githubStars": 72816,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosted AppFlowy Cloud setup is involved and less polished than the local desktop app.\n- Fewer database view types and formula capabilities than Notion.\n- Limited third-party integrations and public API.\n- Real-time multiplayer collaboration is newer and less battle-tested.",
    "tags": [
      "notion-alternative",
      "docs",
      "kanban",
      "database",
      "flutter"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": true,
    "featuredRank": 1,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "affine",
    "name": "AFFiNE",
    "tagline": "Privacy-first, local-first workspace combining docs, whiteboards, and databases",
    "descriptionMd": "AFFiNE is an open-source knowledge base that merges documents, whiteboards, and databases into a single canvas, positioned as a Notion + Miro alternative. It is local-first and privacy-focused, letting you edit blocks as both pages and edgeless whiteboard elements. Built on the BlockSuite editor framework, it supports real-time collaboration and self-hosting via Docker.",
    "repoUrl": "https://github.com/toeverything/AFFiNE",
    "websiteUrl": "https://affine.pro",
    "demoUrl": "https://app.affine.pro",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence",
      "obsidian"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 69661,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosted real-time sync (AFFiNE Cloud) has historically lagged the desktop/local experience and can be fiddly to configure.\n- Smaller third-party integration and plugin ecosystem than Notion.\n- Mobile apps are less mature than the desktop client.\n- Some advanced AI and collaboration features are gated to the paid cloud tier.",
    "tags": [
      "docs",
      "whiteboard",
      "database",
      "local-first",
      "collaboration"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "joplin",
    "name": "Joplin",
    "tagline": "Open-source note-taking app with end-to-end encrypted sync",
    "descriptionMd": "Joplin is an open-source note-taking and to-do application with Markdown support, attachments, and a web clipper, designed as an Evernote alternative. Notes sync across desktop, mobile, and CLI with optional end-to-end encryption. You can self-host sync via the Joplin Server (Docker) or use Nextcloud, S3, or WebDAV backends.",
    "repoUrl": "https://github.com/laurent22/joplin",
    "websiteUrl": "https://joplinapp.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "evernote",
      "obsidian"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 55306,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- The note editor is more basic than Notion-style block editors.\n- No real-time collaborative editing; sync is eventual.\n- No relational database or board views.\n- Self-hosted Joplin Server setup and multi-user management is less polished than the apps.",
    "tags": [
      "evernote-alternative",
      "notes",
      "markdown",
      "encryption",
      "sync"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "memos",
    "name": "Memos",
    "tagline": "Lightweight, self-hosted note-taking and memo hub",
    "descriptionMd": "Memos is a lightweight, privacy-first, open-source note-taking service for quick notes, thoughts, and memos with Markdown support. It is written in Go with a single-binary or Docker deployment and a clean, fast UI. It works well as a self-hosted, microblog-style alternative for capturing knowledge.",
    "repoUrl": "https://github.com/usememos/memos",
    "websiteUrl": "https://www.usememos.com",
    "demoUrl": "https://demo.usememos.com",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "evernote",
      "notion"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 60981,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Designed for short notes/memos, not long structured documents or wikis.\n- No nested page hierarchy, databases, or board views.\n- No real-time collaboration.\n- Limited rich formatting compared to block editors.",
    "tags": [
      "notes",
      "memo",
      "markdown",
      "self-hosted",
      "lightweight"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "logseq",
    "name": "Logseq",
    "tagline": "Privacy-first, local-first outliner for networked notes",
    "descriptionMd": "Logseq is a privacy-first, open-source knowledge management and note-taking tool based on outlining and bidirectional linking. It stores notes as local Markdown/Org files, supports a graph view, block references, and queries, making it a strong Obsidian/Roam alternative. It runs as a desktop app and can sync via your own Git repo or storage.",
    "repoUrl": "https://github.com/logseq/logseq",
    "websiteUrl": "https://logseq.com",
    "demoUrl": "https://demo.logseq.com",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "obsidian",
      "notion",
      "evernote"
    ],
    "license": "AGPL-3.0",
    "language": "Clojure",
    "githubStars": 43500,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Primarily a local desktop app; there is no official self-hosted web server, only file sync via Git/cloud storage.\n- Official sync service is paid and separate from the open-source core.\n- The database-backed rewrite has had a long, disruptive transition.\n- Mobile apps are less polished and sync can be tricky.",
    "tags": [
      "outliner",
      "notes",
      "local-first",
      "graph",
      "markdown"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "siyuan",
    "name": "SiYuan",
    "tagline": "Privacy-first personal knowledge management with block-level editing",
    "descriptionMd": "SiYuan is a privacy-first, local-first personal knowledge management system with block-level references, bidirectional links, and a Notion-like block editor. It stores data locally as a graph of blocks and supports Markdown, databases, flashcards, and end-to-end encrypted sync. It can be self-hosted via Docker for browser access.",
    "repoUrl": "https://github.com/siyuan-note/siyuan",
    "websiteUrl": "https://b3log.org/siyuan",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "obsidian",
      "evernote"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 44551,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Primarily single-user; no real-time team collaboration.\n- Official cloud sync and some features require a paid subscription.\n- Documentation and UI are translated from Chinese and can be uneven.\n- Smaller English-language community and plugin ecosystem.",
    "tags": [
      "notes",
      "block-editor",
      "local-first",
      "knowledge-base",
      "markdown"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "outline",
    "name": "Outline",
    "tagline": "Fast, collaborative team knowledge base and wiki",
    "descriptionMd": "Outline is a team knowledge base and wiki with a clean, fast Markdown-based editor and real-time collaboration. It offers nested document structures, full-text search, and deep integrations with Slack and other tools, making it a strong Confluence/Notion alternative for teams. Self-hosting requires Postgres, Redis, and an SSO/auth provider.",
    "repoUrl": "https://github.com/outline/outline",
    "websiteUrl": "https://www.getoutline.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "confluence",
      "notion"
    ],
    "license": "BSL-1.1",
    "language": "TypeScript",
    "githubStars": 39022,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Requires an external SSO/OAuth provider for authentication, adding setup friction.\n- No database/table views or relational data like Notion.\n- Licensed under BSL (not fully open source / has usage restrictions).\n- Fewer block types and no whiteboard/canvas features.",
    "tags": [
      "wiki",
      "knowledge-base",
      "team",
      "markdown",
      "collaboration"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "wikijs",
    "name": "Wiki.js",
    "tagline": "Modern, powerful, self-hosted wiki built on Node.js",
    "descriptionMd": "Wiki.js is a modern open-source wiki engine running on Node.js with Markdown and visual editors, full-text search, and a flexible page hierarchy. It supports many authentication providers, storage backends, and Git-based syncing. It is a flexible Confluence/Notion alternative for documentation-heavy teams.",
    "repoUrl": "https://github.com/requarks/wiki",
    "websiteUrl": "https://js.wiki",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "confluence",
      "notion"
    ],
    "license": "AGPL-3.0",
    "language": "JavaScript",
    "githubStars": 28478,
    "lastCommitAt": "2026-06-14",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No real-time collaborative editing.\n- No database/table views or relational content.\n- The long-awaited 3.x rewrite has been slow and partly unstable.\n- Requires a separate database (Postgres/MySQL) to be configured.",
    "tags": [
      "wiki",
      "documentation",
      "nodejs",
      "markdown",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "bookstack",
    "name": "BookStack",
    "tagline": "Simple, self-hosted documentation and wiki platform",
    "descriptionMd": "BookStack is a self-hosted platform for organizing and storing documentation using a Books, Chapters, and Pages hierarchy. It is built on Laravel/PHP with a WYSIWYG editor, full-text search, roles/permissions, and optional Markdown editing. It is well-documented and easy to deploy, making it a popular Confluence alternative for teams.",
    "repoUrl": "https://github.com/BookStackApp/BookStack",
    "websiteUrl": "https://www.bookstackapp.com",
    "demoUrl": "https://demo.bookstackapp.com",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "confluence",
      "notion"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 18845,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Fixed Books/Chapters/Pages hierarchy is rigid versus Notion's free-form structure.\n- No real-time collaborative editing.\n- No database/table views or relational content.\n- Plugin/extension ecosystem is minimal.",
    "tags": [
      "wiki",
      "documentation",
      "laravel",
      "self-hosted",
      "confluence-alternative"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "docmost",
    "name": "Docmost",
    "tagline": "Open-source collaborative wiki and documentation software",
    "descriptionMd": "Docmost is an open-source collaborative documentation and wiki tool positioned as a Confluence and Notion alternative. It features real-time collaborative editing, nested pages/spaces, permissions, comments, and diagramming support. It self-hosts cleanly with Docker Compose using Postgres and Redis.",
    "repoUrl": "https://github.com/docmost/docmost",
    "websiteUrl": "https://docmost.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "confluence",
      "notion"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 20690,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Younger project with a smaller feature set than Confluence.\n- No database/table views or relational content like Notion.\n- Some enterprise features (SSO/SAML) are gated to a paid edition.\n- Smaller integration and extension ecosystem.",
    "tags": [
      "wiki",
      "documentation",
      "collaboration",
      "confluence-alternative",
      "real-time"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "trilium",
    "name": "Trilium Notes",
    "tagline": "Hierarchical note-taking app for building personal knowledge bases",
    "descriptionMd": "Trilium Notes is a hierarchical note-taking application focused on building large personal knowledge bases. It supports rich text and code notes, scripting, note attributes/relations, encryption, and a graph map view. It runs as a desktop app or can be self-hosted as a server via Docker for web access and sync. The original repo is archived; the actively maintained fork is TriliumNext.",
    "repoUrl": "https://github.com/TriliumNext/Trilium",
    "websiteUrl": "https://triliumnext.github.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "evernote",
      "obsidian",
      "notion"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 36540,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Single-user oriented; no real-time multi-user collaboration.\n- UI is dense and has a steep learning curve.\n- No relational database/board views like Notion.\n- Original Trilium is archived; users must migrate to the community TriliumNext fork.",
    "tags": [
      "notes",
      "knowledge-base",
      "hierarchical",
      "self-hosted",
      "personal"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "standard-notes",
    "name": "Standard Notes",
    "tagline": "End-to-end encrypted notes app with self-hostable sync server",
    "descriptionMd": "Standard Notes is a privacy-focused, end-to-end encrypted note-taking app available across desktop, web, and mobile. The sync server is open source and self-hostable via Docker, giving you full control over your encrypted notes. It is a strong Evernote alternative for users who prioritize security and longevity.",
    "repoUrl": "https://github.com/standardnotes/app",
    "websiteUrl": "https://standardnotes.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "evernote",
      "obsidian"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 6518,
    "lastCommitAt": "2026-06-08",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Advanced editors and features require a paid (or self-hosted Pro) subscription.\n- No relational database or board views.\n- No real-time collaboration.\n- Minimalist by design, so power-user organization features are limited.",
    "tags": [
      "evernote-alternative",
      "encryption",
      "notes",
      "privacy",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "dokuwiki",
    "name": "DokuWiki",
    "tagline": "Simple, database-free wiki that stores pages as plain text files",
    "descriptionMd": "DokuWiki is a lightweight, easy-to-use open-source wiki that requires no database, storing all content as plain text files. It has strong access controls, a large plugin and template ecosystem, and is widely used for documentation and intranets. Its simplicity makes it a low-maintenance Confluence alternative.",
    "repoUrl": "https://github.com/dokuwiki/dokuwiki",
    "websiteUrl": "https://www.dokuwiki.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "confluence"
    ],
    "license": "GPL-2.0",
    "language": "PHP",
    "githubStars": 4651,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Dated wiki-syntax editing experience versus modern block editors.\n- No real-time collaboration.\n- No database/table or relational content.\n- Relies on plugins for many features that are built-in elsewhere.",
    "tags": [
      "wiki",
      "documentation",
      "php",
      "flat-file",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "nocodb",
    "name": "NocoDB",
    "tagline": "Free and self-hostable no-code database that turns any SQL DB into a smart spreadsheet",
    "descriptionMd": "NocoDB is the most popular open-source Airtable alternative. It wraps any MySQL, PostgreSQL, SQLite, or SQL Server database in a spreadsheet-like grid UI with views (grid, gallery, kanban, form, calendar), relations, automations, and a REST/GraphQL API. It can connect to existing databases or create new ones, making it equally useful as a no-code app builder and a friendly DB front-end.",
    "repoUrl": "https://github.com/nocodb/nocodb",
    "websiteUrl": "https://nocodb.com",
    "demoUrl": "https://app.nocodb.com",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "google-sheets"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 63523,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Automations and scripting are less mature than Airtable's automation/extension ecosystem.\n- No equivalent of Airtable's large marketplace of apps/extensions and Interfaces builder.\n- Real-time collaboration is weaker than Airtable; concurrent editing can feel laggy on large bases.\n- Advanced field types (e.g. AI fields, rich sync integrations) lag behind the commercial product.",
    "tags": [
      "no-code",
      "airtable-alternative",
      "spreadsheet",
      "database",
      "rest-api",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "appsmith",
    "name": "Appsmith",
    "tagline": "Open-source low-code platform to build internal apps and admin panels fast",
    "descriptionMd": "Appsmith is a low-code platform for building custom internal applications such as dashboards, admin panels, and CRUD tools by binding UI widgets to databases and APIs with JavaScript. It supports 25+ database integrations, any REST/GraphQL API, granular access control, and Git-based version control. The core is Apache-2.0 licensed and self-hostable, making it a strong Retool alternative.",
    "repoUrl": "https://github.com/appsmithorg/appsmith",
    "websiteUrl": "https://www.appsmith.com",
    "demoUrl": "https://app.appsmith.com",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "retool"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 40121,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosted stack is resource-heavy (MongoDB, Redis) and can be memory-hungry.\n- Some advanced features (SSO, audit logs, custom branding) require a paid plan.\n- Editor can feel sluggish on very large or complex apps.\n- Mobile/responsive layout support is weaker than desktop app building.",
    "tags": [
      "retool-alternative",
      "low-code",
      "internal-tools",
      "admin-panel",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "tooljet",
    "name": "ToolJet",
    "tagline": "Open-source low-code platform for building internal tools and dashboards",
    "descriptionMd": "ToolJet is a low-code platform for building internal tools, admin panels, dashboards, and workflows by connecting to databases, APIs, and SaaS apps. It offers a drag-and-drop UI builder with 60+ components and 80+ data-source connectors, plus workflow automation. It is AGPL-licensed and self-hostable, serving as a direct Retool alternative.",
    "repoUrl": "https://github.com/ToolJet/ToolJet",
    "websiteUrl": "https://www.tooljet.com",
    "demoUrl": "https://app.tooljet.com",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "retool"
    ],
    "license": "AGPL-3.0",
    "language": "JavaScript",
    "githubStars": 38051,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Some enterprise features (SSO, audit logs, advanced RBAC) are paid-only.\n- Fewer polished, battle-tested connectors than Retool's large catalog.\n- Complex apps can hit performance and editor-ergonomics limits.\n- Documentation gaps around advanced/custom component scenarios.",
    "tags": [
      "retool-alternative",
      "low-code",
      "internal-tools",
      "dashboards",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "budibase",
    "name": "Budibase",
    "tagline": "Open-source low-code platform for internal apps, automations, and its own database",
    "descriptionMd": "Budibase is a low-code platform for building internal tools and business apps, with a built-in database (BudibaseDB) plus connectors to external SQL/NoSQL sources and REST APIs. It pairs a drag-and-drop app designer with automation workflows, making it both a Retool-style tool builder and a lightweight Airtable-like database. The core is GPL-3.0 licensed and self-hostable.",
    "repoUrl": "https://github.com/Budibase/budibase",
    "websiteUrl": "https://budibase.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "retool",
      "airtable"
    ],
    "license": "GPL-3.0",
    "language": "TypeScript",
    "githubStars": 28050,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Some enterprise features (SSO, enforced RBAC, audit) are behind paid Business Source License tiers.\n- Built-in database is more limited than a dedicated Airtable for complex relations.\n- Fewer connectors and a smaller ecosystem than Retool.\n- Custom-component and theming flexibility is more constrained than hand-built apps.",
    "tags": [
      "retool-alternative",
      "low-code",
      "internal-tools",
      "database",
      "automation",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "teable",
    "name": "Teable",
    "tagline": "No-code Postgres database with an Airtable-like UI and spreadsheet performance",
    "descriptionMd": "Teable is a next-gen Airtable alternative built directly on PostgreSQL, combining a fast spreadsheet-style grid with the power of a real relational database. It supports multiple views (grid, form, kanban, gallery, calendar), real-time collaboration, scales to millions of rows, and exposes your data via a database connection and API. The community edition is AGPL-licensed and self-hostable.",
    "repoUrl": "https://github.com/teableio/teable",
    "websiteUrl": "https://teable.io",
    "demoUrl": "https://template.teable.io",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "google-sheets"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 21369,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Younger project; some automation and integration features are still maturing.\n- Smaller template and extension ecosystem than Airtable.\n- Enterprise features (advanced auth, audit) are reserved for paid editions.\n- Fewer third-party sync connectors than the commercial original.",
    "tags": [
      "no-code",
      "airtable-alternative",
      "postgresql",
      "spreadsheet",
      "real-time",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "apitable",
    "name": "APITable",
    "tagline": "API-oriented low-code database and Airtable alternative with real-time collaboration",
    "descriptionMd": "APITable is an open-source, API-first low-code platform for building collaborative apps on top of a visual database. It provides Airtable-style grid, kanban, gallery, gantt, and form views, real-time collaboration, embeddable widgets, and an automation engine. The project is AGPL-licensed and self-hostable, though active development has slowed.",
    "repoUrl": "https://github.com/apitable/apitable",
    "websiteUrl": "https://apitable.com",
    "demoUrl": "https://apitable.com",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "smartsheet"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 15388,
    "lastCommitAt": "2025-10-30",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Development has slowed significantly; commits and releases are infrequent.\n- Self-hosting is heavy (Java backend, multiple services) and resource-hungry.\n- Documentation for self-hosting is uneven and can be hard to follow.\n- Smaller integration ecosystem than Airtable, and some features are cloud-only.",
    "tags": [
      "airtable-alternative",
      "low-code",
      "api-first",
      "real-time",
      "database",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "illa-builder",
    "name": "ILLA Builder",
    "tagline": "Open-source low-code builder for internal tools, a self-hostable Retool alternative",
    "descriptionMd": "ILLA Builder is an open-source low-code platform for rapidly building internal tools by connecting components to databases, APIs, and third-party services with real-time collaboration. It positions itself explicitly as an open-source Retool, with a drag-and-drop UI and many built-in integrations. It is Apache-2.0 licensed and self-hostable, though active development has slowed.",
    "repoUrl": "https://github.com/illacloud/illa-builder",
    "websiteUrl": "https://illacloud.com",
    "demoUrl": "https://cloud.illacloud.com",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "retool"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 12275,
    "lastCommitAt": "2026-05-27",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Development has slowed; releases and commits are infrequent.\n- Smaller connector catalog and ecosystem than Retool.\n- Fewer advanced governance/enterprise features.\n- Documentation and community support lag behind larger alternatives.",
    "tags": [
      "retool-alternative",
      "low-code",
      "internal-tools",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "baserow",
    "name": "Baserow",
    "tagline": "No-code open-source database and Airtable alternative",
    "descriptionMd": "Baserow is an open-source no-code database tool and Airtable alternative. It lets non-technical users create their own databases with a spreadsheet-like UI, while developers get a REST API and a plugin architecture. It self-hosts with a single Docker image or docker-compose (Postgres + Redis).",
    "repoUrl": "https://gitlab.com/baserow/baserow",
    "websiteUrl": "https://baserow.io",
    "demoUrl": "https://baserow.io",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "google-sheets",
      "smartsheet"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 9000,
    "lastCommitAt": "2026-06-01",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Fewer prebuilt templates and integrations than Airtable.\n- Automations and interface designer are newer and less powerful.\n- Smaller third-party app ecosystem.\n- Some features are gated to the paid/enterprise tier.",
    "tags": [
      "airtable-alternative",
      "no-code",
      "database",
      "spreadsheet"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "grist",
    "name": "Grist",
    "tagline": "Modern relational spreadsheet combining the flexibility of a grid with a real database",
    "descriptionMd": "Grist is an open-source spreadsheet-database hybrid where each document is a small SQLite database you manipulate through a familiar grid, with Python formulas powering cells and columns. It excels at structured data with strong typing, relations, access-control rules, and embeddable widgets. grist-core is Apache-licensed and self-hostable, maintained by Grist Labs with significant public-sector adoption.",
    "repoUrl": "https://github.com/gristlabs/grist-core",
    "websiteUrl": "https://www.getgrist.com",
    "demoUrl": "https://templates.getgrist.com",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "google-sheets",
      "smartsheet"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 11174,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- UI is more spreadsheet-centric and less polished than Airtable for app-style use.\n- Fewer pre-built view types (no native kanban/gallery as rich as Airtable).\n- Real-time multi-user collaboration is less fluid than Google Sheets.\n- Smaller ecosystem of integrations and marketplace widgets.",
    "tags": [
      "spreadsheet",
      "relational",
      "python-formulas",
      "sqlite",
      "database",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "undb",
    "name": "undb",
    "tagline": "Private-first, self-hosted no-code database and backend-as-a-service on SQLite",
    "descriptionMd": "undb is a lightweight, privacy-focused no-code database and BaaS that runs on SQLite and can be deployed as a single binary or Docker container. It offers tables, multiple views, forms, a REST API, and webhooks with minimal infrastructure requirements, making it well suited for personal projects and small teams. It is AGPL-licensed and fully self-hostable.",
    "repoUrl": "https://github.com/undb-io/undb",
    "websiteUrl": "https://undb.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 2948,
    "lastCommitAt": "2025-07-13",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Far fewer features than Airtable; no automations marketplace or advanced views.\n- Single-author project with a smaller community and less battle-testing.\n- Real-time collaboration and permissions are basic.\n- SQLite backend limits very large or high-concurrency workloads.",
    "tags": [
      "no-code",
      "airtable-alternative",
      "sqlite",
      "baas",
      "self-hosted",
      "lightweight"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "seatable",
    "name": "SeaTable",
    "tagline": "Spreadsheet-database for teams with unlimited rows and no API call limits",
    "descriptionMd": "SeaTable is an Airtable-like collaborative spreadsheet-database from the makers of Seafile. It offers grid, kanban, gallery, calendar, and form views, automations, plugins, and a rich API, with self-hosting that imposes no API-call limits. The codebase is a mix of Apache-2.0, AGPL, and proprietary components, and a free self-hosted Developer Edition is available.",
    "repoUrl": "https://github.com/seatable/seatable",
    "websiteUrl": "https://seatable.io",
    "demoUrl": "https://cloud.seatable.io",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "google-sheets",
      "smartsheet"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 700,
    "lastCommitAt": "2025-11-12",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Core dtable-server component is proprietary, so it is not fully open-source.\n- The public GitHub repo is mostly docs/installer rather than full source code.\n- Smaller community and ecosystem than Airtable or NocoDB.\n- Advanced features and higher row limits require paid Enterprise licensing.",
    "tags": [
      "airtable-alternative",
      "spreadsheet",
      "database",
      "no-code",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "n8n",
    "name": "n8n",
    "tagline": "Fair-code workflow automation with 400+ integrations and native AI nodes",
    "descriptionMd": "n8n is a workflow automation tool that lets you connect apps and services through a visual node-based editor or custom code. It ships with 400+ integrations, native AI/LangChain nodes for building agents, and supports self-hosting via Docker. It is the most popular open Zapier/Make alternative and pairs no-code building with the ability to drop into JavaScript when needed.",
    "repoUrl": "https://github.com/n8n-io/n8n",
    "websiteUrl": "https://n8n.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make",
      "workato"
    ],
    "license": "Sustainable Use License",
    "language": "TypeScript",
    "githubStars": 193594,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Source-available (Sustainable Use License), not true OSI open source; some enterprise features (SSO, log streaming, external secrets) are gated behind paid tiers.\n- Self-hosted instances require you to manage your own queue/Redis and Postgres for scaling and reliability.\n- Far fewer pre-built app connectors than Zapier's 6,000+ catalog.\n- Concurrency and execution throughput on the free self-hosted tier require manual queue-mode tuning.",
    "tags": [
      "workflow",
      "no-code",
      "low-code",
      "ai-agents",
      "integrations",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": true,
    "featuredRank": 2,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "huginn",
    "name": "Huginn",
    "tagline": "Self-hosted agents that monitor and act on your behalf, an IFTTT/Zapier alternative",
    "descriptionMd": "Huginn is a system for building agents that perform automated tasks online: they watch for events, scrape and parse the web, and take actions on your behalf. It is a long-standing, fully open-source, self-hosted alternative to IFTTT and Zapier, with data kept entirely on your own server. Configuration is more technical than modern no-code tools, but it is highly flexible.",
    "repoUrl": "https://github.com/huginn/huginn",
    "websiteUrl": null,
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier"
    ],
    "license": "MIT",
    "language": "Ruby",
    "githubStars": 49499,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No visual drag-and-drop builder; agents are configured via JSON forms, which is far less approachable than Zapier.\n- Development has slowed considerably; releases are infrequent.\n- Few first-class SaaS connectors compared to commercial iPaaS catalogs.\n- Rails plus MySQL/Postgres setup makes self-hosting more involved than newer tools.",
    "tags": [
      "agents",
      "web-scraping",
      "monitoring",
      "ruby",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "apache-airflow",
    "name": "Apache Airflow",
    "tagline": "Programmatically author, schedule, and monitor workflows as Python DAGs",
    "descriptionMd": "Apache Airflow is a platform to programmatically author, schedule, and monitor workflows defined as directed acyclic graphs (DAGs) in Python. It is the de facto open-source standard for data and process orchestration, with a huge provider ecosystem for connecting databases, cloud services, and APIs. While primarily a data-pipeline tool, it serves as a robust engine for scheduled and dependency-driven automation.",
    "repoUrl": "https://github.com/apache/airflow",
    "websiteUrl": "https://airflow.apache.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "workato"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 45886,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Fully code-first (Python DAGs); there is no no-code builder for non-developers.\n- Heavyweight to operate: scheduler, webserver, metadata DB, and executor/workers must be configured and maintained.\n- Not built around consumer SaaS app triggers; it targets data orchestration rather than iPaaS connectors.\n- Real-time/event triggering is weaker than purpose-built automation tools, which favor scheduling.",
    "tags": [
      "orchestration",
      "scheduling",
      "data-pipelines",
      "python",
      "dag"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "kestra",
    "name": "Kestra",
    "tagline": "Event-driven orchestration platform for scheduled and API-triggered workflows",
    "descriptionMd": "Kestra is an open-source, event-driven orchestration and scheduling platform where workflows are defined declaratively in YAML and managed through a web UI. It handles data pipelines, automation, and microservice orchestration with a rich plugin ecosystem, retries, and a built-in scheduler. It overlaps with iPaaS for API-triggered and scheduled automation while scaling to data-engineering workloads.",
    "repoUrl": "https://github.com/kestra-io/kestra",
    "websiteUrl": "https://kestra.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "workato"
    ],
    "license": "Apache-2.0",
    "language": "Java",
    "githubStars": 27121,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- YAML-declarative workflows are more engineering-oriented than no-code Zapier flows.\n- Enterprise edition gates SSO, RBAC, multi-tenancy, audit logs, and worker isolation.\n- Connectors are plugins focused on data/infra systems rather than consumer SaaS apps.\n- Production self-hosting benefits from Postgres plus a queue, raising operational overhead.",
    "tags": [
      "orchestration",
      "scheduling",
      "data-pipelines",
      "yaml",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "node-red",
    "name": "Node-RED",
    "tagline": "Flow-based low-code programming for wiring together APIs, services, and devices",
    "descriptionMd": "Node-RED is a flow-based, low-code programming tool from the OpenJS Foundation for wiring together hardware devices, APIs, and online services. Its browser-based editor uses a palette of nodes you drag and connect, and thousands of community nodes extend it to almost any service. It is hugely popular in IoT and home automation but works as a general-purpose integration and automation engine.",
    "repoUrl": "https://github.com/node-red/node-red",
    "websiteUrl": "https://nodered.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make"
    ],
    "license": "Apache-2.0",
    "language": "JavaScript",
    "githubStars": 23336,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Not a polished SaaS-connector product; you assemble flows from lower-level nodes rather than pre-built app triggers.\n- No built-in multi-tenant team management, SSO, or audit logging out of the box.\n- Authentication and HTTPS for production exposure must be configured manually.\n- Geared toward IoT/event wiring, so common SaaS app integrations often need community nodes of varying quality.",
    "tags": [
      "low-code",
      "flow-based",
      "iot",
      "integrations",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "activepieces",
    "name": "Activepieces",
    "tagline": "MIT-licensed no-code automation and AI agents builder, an open Zapier alternative",
    "descriptionMd": "Activepieces is an open-source, no-code automation tool with a visual flow builder and a growing library of community-contributed \"pieces\" (connectors) written in TypeScript. It positions itself as an MIT-licensed Zapier alternative with strong AI/MCP support for building agents. The community edition is genuinely open source, with enterprise features available separately.",
    "repoUrl": "https://github.com/activepieces/activepieces",
    "websiteUrl": "https://www.activepieces.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make",
      "tray-io"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 22920,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Smaller connector catalog than Zapier/Make; many niche apps still missing.\n- Enterprise features (SSO, audit logs, projects/RBAC, embedding) require the paid edition.\n- Self-hosting needs Postgres and Redis, so it is not a single-container setup.\n- Younger ecosystem means fewer pre-built templates and community examples.",
    "tags": [
      "no-code",
      "workflow",
      "ai-agents",
      "mcp",
      "integrations",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "windmill",
    "name": "Windmill",
    "tagline": "Developer platform to turn scripts into workflows and internal apps",
    "descriptionMd": "Windmill is a fast, open-source developer platform that turns scripts (Python, TypeScript, Go, Bash, SQL) into workflows, internal tools, and scheduled jobs. It combines a flow editor, an app/UI builder, and a job runner with a Rust execution backend for performance. It overlaps with both iPaaS automation and internal-tool builders like Retool.",
    "repoUrl": "https://github.com/windmill-labs/windmill",
    "websiteUrl": "https://www.windmill.dev",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make",
      "retool"
    ],
    "license": "AGPL-3.0",
    "language": "Rust",
    "githubStars": 16846,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Code-first approach is more developer-oriented than Zapier's pure no-code experience.\n- AGPL plus a separate enterprise edition; some features (distributed workers at scale, SSO, audit) are gated.\n- Fewer turnkey SaaS connectors; you often write the integration glue yourself.\n- Self-hosting requires Postgres and worker configuration for real workloads.",
    "tags": [
      "developer-platform",
      "workflow",
      "scripts",
      "internal-tools",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "automatisch",
    "name": "Automatisch",
    "tagline": "Open-source business automation, a self-hostable Zapier alternative",
    "descriptionMd": "Automatisch is an open-source business automation tool that lets you connect services like Twitter, email, and many APIs to build automated workflows without code. It is explicitly built as a self-hostable Zapier alternative, with data staying on your own servers for privacy and compliance. The community edition is AGPL-licensed with a separate enterprise option.",
    "repoUrl": "https://github.com/automatisch/automatisch",
    "websiteUrl": "https://automatisch.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make"
    ],
    "license": "AGPL-3.0",
    "language": "JavaScript",
    "githubStars": 13881,
    "lastCommitAt": "2026-02-11",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Significantly fewer integrations than Zapier or even n8n.\n- Slower release cadence; development activity is lighter than the larger competitors.\n- No native code/function step comparable to n8n or Windmill for custom logic.\n- Self-hosting needs Postgres and Redis; not a single-container deploy.",
    "tags": [
      "no-code",
      "workflow",
      "integrations",
      "self-hosted",
      "privacy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "stackstorm",
    "name": "StackStorm",
    "tagline": "Event-driven automation and auto-remediation platform (IFTTT for ops)",
    "descriptionMd": "StackStorm is an open-source, event-driven automation platform often described as \"IFTTT for operations.\" It connects sensors, triggers, rules, and actions to automate incident response, auto-remediation, and complex DevOps workflows, with workflows authored using Orquesta. It integrates with a wide range of infra and SaaS tools via packs and is well suited to ops-centric automation rather than marketing/business flows.",
    "repoUrl": "https://github.com/StackStorm/st2",
    "websiteUrl": "https://stackstorm.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "workato"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 6490,
    "lastCommitAt": "2026-02-19",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Complex multi-component architecture (RabbitMQ, MongoDB, multiple services); steep to install and operate.\n- Ops-focused rather than a business-friendly no-code iPaaS; not aimed at marketing/sales automations.\n- Workflow authoring uses YAML/Orquesta, which is more technical than visual builders.\n- Smaller community and slower momentum than n8n or modern alternatives.",
    "tags": [
      "event-driven",
      "devops",
      "auto-remediation",
      "ops",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "odoo",
    "name": "Odoo (CRM)",
    "tagline": "Open-source ERP suite whose CRM app rivals Salesforce and HubSpot",
    "descriptionMd": "Odoo is a comprehensive suite of open-source business apps; its CRM module handles leads, opportunities, pipelines, activities, and sales forecasting. The Community Edition is LGPL-licensed and self-hostable, and the CRM integrates tightly with Sales, Marketing, Invoicing, and other Odoo apps. It is one of the most popular open-source business platforms overall.",
    "repoUrl": "https://github.com/odoo/odoo",
    "websiteUrl": "https://www.odoo.com",
    "demoUrl": "https://www.odoo.com/trial",
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "salesforce",
      "hubspot",
      "pipedrive"
    ],
    "license": "LGPL-3.0",
    "language": "Python",
    "githubStars": 52554,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Many polished features (advanced CRM tooling) push you toward the paid Enterprise edition\n- Community Edition UI and modules are deliberately limited\n- Self-hosting the full stack is heavy and complex\n- Upgrades between major versions can be painful",
    "tags": [
      "crm",
      "erp",
      "sales",
      "python",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": true,
    "featuredRank": 3,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "twenty",
    "name": "Twenty",
    "tagline": "Modern open-source CRM built as an alternative to Salesforce",
    "descriptionMd": "Twenty is a modern, open-source CRM designed for technical teams as an alternative to Salesforce. It offers a flexible, customizable data model with rich relations, Kanban and table views, and a clean React-based UI. The project moves fast and is one of the most popular new CRM tools on GitHub.",
    "repoUrl": "https://github.com/twentyhq/twenty",
    "websiteUrl": "https://twenty.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "salesforce",
      "pipedrive",
      "airtable"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 51094,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Smaller ecosystem of integrations and marketplace apps versus Salesforce/AppExchange\n- Workflow automation, reporting, and analytics are still maturing\n- No mature mobile apps\n- Younger product, so APIs and data model still evolve between releases",
    "tags": [
      "crm",
      "sales",
      "salesforce-alternative",
      "typescript",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "krayin",
    "name": "Krayin CRM",
    "tagline": "Free and open-source Laravel CRM for the full customer lifecycle",
    "descriptionMd": "Krayin is a free, MIT-licensed CRM built on Laravel and Vue.js for SMEs and enterprises. It provides lead and pipeline management, activities, email integration, quotes, and a modular package architecture for extension. It targets developers who want a customizable, modern PHP CRM.",
    "repoUrl": "https://github.com/krayin/laravel-crm",
    "websiteUrl": "https://krayincrm.com",
    "demoUrl": "https://demo.krayincrm.com",
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "pipedrive",
      "hubspot",
      "salesforce"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 23060,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Feature set is narrower than HubSpot/Salesforce (limited marketing automation)\n- Reporting and analytics are basic\n- Smaller plugin/marketplace ecosystem\n- Some advanced modules are sold separately as commercial add-ons",
    "tags": [
      "crm",
      "sales",
      "laravel",
      "php",
      "mit"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "dolibarr",
    "name": "Dolibarr ERP & CRM",
    "tagline": "All-in-one open-source ERP and CRM for small businesses",
    "descriptionMd": "Dolibarr is a modular open-source ERP and CRM suite for small and medium businesses and freelancers. The CRM side covers contacts, prospects, leads, opportunities, proposals, and commercial follow-up, alongside invoicing, orders, and stock. It is easy to install and known for its low learning curve.",
    "repoUrl": "https://github.com/Dolibarr/dolibarr",
    "websiteUrl": "https://www.dolibarr.org",
    "demoUrl": "https://www.dolibarr.org/onlinedemo.php",
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "salesforce",
      "pipedrive",
      "hubspot"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 7333,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- UI is dated and dense compared to modern CRMs\n- CRM is just one part of a broad ERP, so dedicated sales features are shallower\n- Marketing automation is minimal\n- Heavy reliance on community modules for advanced needs",
    "tags": [
      "crm",
      "erp",
      "php",
      "self-hosted",
      "smb"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "suitecrm",
    "name": "SuiteCRM",
    "tagline": "Enterprise-ready open-source CRM, a SugarCRM Community Edition fork",
    "descriptionMd": "SuiteCRM is a mature, enterprise-grade open-source CRM that originated as a fork of SugarCRM Community Edition. It covers sales, marketing, and service with accounts, leads, opportunities, quotes, workflow automation, and reporting. It is a long-established option for organizations wanting a full-featured self-hosted Salesforce alternative.",
    "repoUrl": "https://github.com/salesagility/SuiteCRM",
    "websiteUrl": "https://suitecrm.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "salesforce",
      "hubspot",
      "pipedrive"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 5526,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Legacy codebase and dated UI compared to modern CRMs\n- Setup and upgrades can be fiddly and resource-heavy\n- Native integrations are limited versus Salesforce/HubSpot ecosystems\n- AI and modern automation features lag behind commercial leaders",
    "tags": [
      "crm",
      "sales",
      "php",
      "sugarcrm-fork",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "erxes",
    "name": "erxes",
    "tagline": "Open-source experience operating system unifying sales, marketing and support",
    "descriptionMd": "erxes is an open-source Experience Operating System (XOS) that unifies marketing, sales, support, and operations in a modular, plugin-based platform. Its CRM capabilities include contacts, deals, sales pipelines, and team inboxes, positioning it as a self-hosted alternative to HubSpot and similar suites. It is built almost entirely in TypeScript.",
    "repoUrl": "https://github.com/erxes/erxes",
    "websiteUrl": "https://erxes.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "hubspot",
      "salesforce",
      "intercom"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 4005,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Microservice/plugin architecture makes self-hosting complex and resource-heavy\n- Broad scope means individual modules are less deep than specialized tools\n- Documentation can lag the fast-moving codebase\n- Smaller integration ecosystem than HubSpot",
    "tags": [
      "crm",
      "marketing",
      "support",
      "typescript",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "espocrm",
    "name": "EspoCRM",
    "tagline": "Lightweight, fast open-source CRM with a flexible entity manager",
    "descriptionMd": "EspoCRM is a free, open-source CRM platform with a single-page frontend and a PHP REST API backend. It ships with sales automation, contact and account management, calendars, and a powerful no-code Entity Manager for customizing the data model. It is lightweight, well documented, and runs comfortably on modest hardware.",
    "repoUrl": "https://github.com/espocrm/espocrm",
    "websiteUrl": "https://www.espocrm.com",
    "demoUrl": "https://demo.espocrm.com",
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "salesforce",
      "hubspot",
      "pipedrive"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 3070,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Marketing automation and email campaigns require paid extensions\n- Built-in reporting and BI is more basic than HubSpot/Salesforce\n- UI feels more utilitarian and dated\n- Advanced features (BPM, advanced pack) are behind a commercial license",
    "tags": [
      "crm",
      "sales",
      "php",
      "self-hosted",
      "hubspot-alternative"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "frappe-crm",
    "name": "Frappe CRM",
    "tagline": "Simple, modern open-source CRM on the Frappe framework",
    "descriptionMd": "Frappe CRM is a simple, open-source CRM for modern sales teams, built on the Frappe framework with a Vue frontend. It offers leads and deals with Kanban views, customizable layouts, built-in telephony and email, and unlimited users. It integrates cleanly with the broader Frappe/ERPNext ecosystem.",
    "repoUrl": "https://github.com/frappe/crm",
    "websiteUrl": "https://frappe.io/crm",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "pipedrive",
      "hubspot",
      "salesforce"
    ],
    "license": "AGPL-3.0",
    "language": "Python",
    "githubStars": 2862,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Younger product with fewer integrations than HubSpot/Pipedrive\n- Self-hosting depends on the Frappe bench stack, which adds operational overhead\n- Marketing automation and advanced reporting are limited\n- Smaller community than the established CRMs",
    "tags": [
      "crm",
      "sales",
      "frappe",
      "python",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "atomic-crm",
    "name": "Atomic CRM",
    "tagline": "Full-featured CRM built with React and Supabase",
    "descriptionMd": "Atomic CRM is an MIT-licensed, full-featured CRM built with React, shadcn-admin-kit, and Supabase by Marmelab. It lets teams organize contacts, manage tasks, track deals, and integrate with external systems, and is designed to be a customizable starter you can extend. It is lightweight and developer-friendly.",
    "repoUrl": "https://github.com/marmelab/atomic-crm",
    "websiteUrl": "https://marmelab.com/atomic-crm/",
    "demoUrl": "https://marmelab.com/atomic-crm-demo/",
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "pipedrive",
      "salesforce"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 1108,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Positioned as a customizable starter, not a turnkey product\n- Depends on Supabase, adding an external dependency\n- Lacks marketing automation, telephony, and advanced reporting\n- Small community and limited out-of-the-box integrations",
    "tags": [
      "crm",
      "react",
      "supabase",
      "typescript",
      "mit"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "civicrm",
    "name": "CiviCRM",
    "tagline": "Open-source constituent relationship management for nonprofits",
    "descriptionMd": "CiviCRM is a mature open-source constituent relationship management system built for nonprofits, advocacy groups, and NGOs. It manages contacts, contributions, memberships, events, and email, and integrates with WordPress, Drupal, and Backdrop or runs standalone. It is a long-standing, specialized alternative to commercial CRMs for the nonprofit sector.",
    "repoUrl": "https://github.com/civicrm/civicrm-core",
    "websiteUrl": "https://civicrm.org",
    "demoUrl": "https://www.civicrm.org/demo",
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "salesforce",
      "hubspot"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 749,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Typically requires a host CMS (WordPress/Drupal), adding setup complexity\n- UI is dated and the learning curve is steep\n- Oriented to nonprofits, so general sales-pipeline features are weaker\n- Limited native integrations versus mainstream commercial CRMs",
    "tags": [
      "crm",
      "nonprofit",
      "php",
      "self-hosted",
      "fundraising"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "orocrm",
    "name": "OroCRM",
    "tagline": "Open-source CRM for B2B and commerce with a 360 customer view",
    "descriptionMd": "OroCRM is an open-source CRM built on OroPlatform and Symfony, aimed at B2B, commerce, and mid-market companies. It provides a 360-degree customer view across channels, sales pipeline management, segmentation, and marketing campaign tracking. It is highly customizable and integrates with OroCommerce.",
    "repoUrl": "https://github.com/oroinc/crm",
    "websiteUrl": "https://oroinc.com/orocrm/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "crm",
    "replaces": [
      "salesforce",
      "hubspot"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 680,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Heavy Symfony stack makes installation and operation complex\n- Steeper learning curve and slower to set up than lightweight CRMs\n- Smaller community and fewer ready-made integrations\n- Best value comes from the broader Oro ecosystem, which adds overhead",
    "tags": [
      "crm",
      "b2b",
      "php",
      "symfony",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "umami",
    "name": "Umami",
    "tagline": "Simple, fast, privacy-focused web analytics in a single lightweight dashboard",
    "descriptionMd": "Umami is a modern, privacy-focused web analytics tool that serves as a simple, cookie-free alternative to Google Analytics. It collects only the metrics that matter in a clean single-page dashboard and stores data in PostgreSQL or MySQL. Lightweight to run and easy to self-host, with an optional hosted cloud.",
    "repoUrl": "https://github.com/umami-software/umami",
    "websiteUrl": "https://umami.is",
    "demoUrl": "https://app.umami.is/share/LGazGOecbDtaIwDr/umami.is",
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 37267,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Deliberately minimal: no heatmaps, session replay, or deep product-analytics like funnels/retention found in Mixpanel/Amplitude.\n- Event/custom-property analytics are basic compared to dedicated product-analytics tools.\n- No built-in alerting or anomaly detection.",
    "tags": [
      "web-analytics",
      "privacy",
      "cookie-free",
      "nextjs",
      "google-analytics-alternative"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": true,
    "featuredRank": 4,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "posthog",
    "name": "PostHog",
    "tagline": "All-in-one product analytics, session replay, feature flags, and A/B testing",
    "descriptionMd": "PostHog is an all-in-one product analytics platform combining event-based product analytics, web analytics, session replay, feature flags, surveys, and experiments. It is the most complete open-source alternative to Mixpanel and Amplitude, with a generous open-source self-hosted option and a hosted cloud. Built on ClickHouse for fast analytical queries over large event volumes.",
    "repoUrl": "https://github.com/PostHog/posthog",
    "websiteUrl": "https://posthog.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "mixpanel",
      "amplitude",
      "hotjar",
      "google-analytics"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 35133,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosting the full ClickHouse + Kafka + Postgres + Redis stack is heavy; the project actively steers smaller users toward PostHog Cloud.\n- Some enterprise features live under a separate proprietary `ee` license, not pure MIT.\n- The all-in-one breadth means it is more complex to operate than a focused tool like Mixpanel.",
    "tags": [
      "product-analytics",
      "session-replay",
      "feature-flags",
      "clickhouse",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "plausible",
    "name": "Plausible Analytics",
    "tagline": "Lightweight, privacy-first web analytics without cookies",
    "descriptionMd": "Plausible is a lightweight, open-source, privacy-first web analytics alternative to Google Analytics. It runs without cookies, is GDPR/CCPA compliant by default, and presents all key metrics on a single simple dashboard. The self-hosted Community Edition uses Elixir/Phoenix with PostgreSQL and ClickHouse.",
    "repoUrl": "https://github.com/plausible/analytics",
    "websiteUrl": "https://plausible.io",
    "demoUrl": "https://plausible.io/plausible.io",
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics"
    ],
    "license": "AGPL-3.0",
    "language": "Elixir",
    "githubStars": 27305,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Intentionally simple: no heatmaps, session recordings, or user-level product analytics.\n- The self-hosted Community Edition lags behind the paid cloud on some features and updates.\n- ClickHouse dependency makes the stack heavier than a single-binary tool despite the simple feature set.",
    "tags": [
      "web-analytics",
      "privacy",
      "cookie-free",
      "elixir",
      "clickhouse"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "matomo",
    "name": "Matomo",
    "tagline": "The leading open-source, privacy-friendly web analytics platform",
    "descriptionMd": "Matomo (formerly Piwik) is the most established open-source alternative to Google Analytics, with 100% data ownership, GDPR compliance, and no data sampling. It offers full web analytics plus optional heatmaps, session recordings, A/B testing, and funnels via premium plugins. Runs on a standard PHP + MySQL/MariaDB stack, making it easy to self-host on commodity hosting.",
    "repoUrl": "https://github.com/matomo-org/matomo",
    "websiteUrl": "https://matomo.org",
    "demoUrl": "https://demo.matomo.cloud",
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "hotjar"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 21624,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Heatmaps, session recordings, funnels, and A/B testing are paid premium plugins, not in the free core.\n- The PHP codebase feels dated and the UI is heavier/slower than modern lightweight tools.\n- Real-time reporting and advanced product-analytics (cohorts, retention) are weaker than Mixpanel/Amplitude.",
    "tags": [
      "web-analytics",
      "privacy",
      "gdpr",
      "php",
      "google-analytics-alternative"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "rybbit",
    "name": "Rybbit",
    "tagline": "Open-source, privacy-friendly Google Analytics alternative built for clarity",
    "descriptionMd": "Rybbit is an open-source, privacy-friendly web and product analytics platform positioned as a more intuitive alternative to Google Analytics. It offers cookieless tracking, real-time dashboards, funnels, user journeys, and session replay, backed by ClickHouse for performance. A fast-growing modern entrant in the self-hosted analytics space.",
    "repoUrl": "https://github.com/rybbit-io/rybbit",
    "websiteUrl": "https://rybbit.io",
    "demoUrl": "https://demo.rybbit.io",
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel",
      "hotjar"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 12314,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Young project; feature depth and stability still trail established tools.\n- Product-analytics capabilities (cohorts, retention) are less mature than Mixpanel/Amplitude.\n- Smaller ecosystem and fewer integrations than Google Analytics.",
    "tags": [
      "web-analytics",
      "product-analytics",
      "privacy",
      "clickhouse",
      "session-replay"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "openreplay",
    "name": "OpenReplay",
    "tagline": "Self-hosted session replay and product analytics for web apps",
    "descriptionMd": "OpenReplay is a self-hostable session replay suite with co-browsing, performance monitoring, and product analytics. It records user sessions like Hotjar/FullStory while keeping all data on your own infrastructure, and adds devtools, network and console capture, and error tracking for debugging. The most credible open-source alternative to Hotjar for session replay.",
    "repoUrl": "https://github.com/openreplay/openreplay",
    "websiteUrl": "https://openreplay.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "hotjar",
      "amplitude"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 12117,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Kubernetes",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosting requires a Kubernetes-based multi-service stack; resource-hungry and complex to operate.\n- Product-analytics features (funnels, cohorts) are less mature than Amplitude/Mixpanel.\n- No traditional aggregate web-analytics dashboard; it is session-centric.",
    "tags": [
      "session-replay",
      "heatmaps",
      "co-browsing",
      "devtools",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "countly",
    "name": "Countly",
    "tagline": "Privacy-first product analytics for web, mobile, and desktop apps",
    "descriptionMd": "Countly is a product analytics and engagement platform covering web, mobile, and desktop, with a strong focus on data ownership and privacy. The Community Edition (server side) provides event analytics, funnels, retention, cohorts, user profiles, and crash reporting on a Node.js + MongoDB stack. A good open-source alternative to Mixpanel and Amplitude, especially for mobile apps.",
    "repoUrl": "https://github.com/Countly/countly-server",
    "websiteUrl": "https://countly.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "mixpanel",
      "amplitude"
    ],
    "license": "AGPL-3.0",
    "language": "JavaScript",
    "githubStars": 5875,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Many advanced features (push notifications, A/B testing, some drill plugins) are reserved for the paid Enterprise Edition.\n- The Community Edition documentation and upgrade path can be rough.\n- UI and query speed lag behind ClickHouse-backed competitors at large scale.",
    "tags": [
      "product-analytics",
      "mobile-analytics",
      "crash-reporting",
      "nodejs",
      "mongodb"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "goatcounter",
    "name": "GoatCounter",
    "tagline": "Easy, privacy-friendly web analytics with no tracking of personal data",
    "descriptionMd": "GoatCounter is a lightweight, privacy-aware web analytics tool that ships as a single Go binary with SQLite or PostgreSQL. It tracks no personal data, requires no cookies or consent banners, and adds only a tiny tracking script. Ideal for individuals and small sites that want simple, ethical stats without operational overhead.",
    "repoUrl": "https://github.com/arp242/goatcounter",
    "websiteUrl": "https://www.goatcounter.com",
    "demoUrl": "https://stats.arp242.net",
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics"
    ],
    "license": "EUPL-1.2",
    "language": "Go",
    "githubStars": 5769,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Minimal by design: no funnels, cohorts, heatmaps, or session replay.\n- Event/custom-property tracking is limited compared to product-analytics tools.\n- Single-maintainer project, so release cadence can be slow.",
    "tags": [
      "web-analytics",
      "privacy",
      "single-binary",
      "go",
      "lightweight"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "ackee",
    "name": "Ackee",
    "tagline": "Self-hosted, privacy-focused Node.js analytics with a minimal interface",
    "descriptionMd": "Ackee is a self-hosted, Node.js-based analytics tool focused on privacy and simplicity. It anonymizes tracked data while still surfacing useful per-site statistics in a clean, minimal interface, storing data in MongoDB. A good fit for developers who want a small, no-frills Google Analytics alternative with a GraphQL API.",
    "repoUrl": "https://github.com/electerious/Ackee",
    "websiteUrl": "https://ackee.electerious.com",
    "demoUrl": "https://demo.ackee.electerious.com",
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics"
    ],
    "license": "MIT",
    "language": "JavaScript",
    "githubStars": 4674,
    "lastCommitAt": "2026-04-08",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Very limited feature set: no funnels, cohorts, heatmaps, or session replay.\n- Aggressive anonymization means less granular insight than commercial tools.\n- Requires MongoDB, which is heavier than a SQLite single-binary option for such a simple tool.",
    "tags": [
      "web-analytics",
      "privacy",
      "nodejs",
      "mongodb",
      "graphql"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "litlyx",
    "name": "Litlyx",
    "tagline": "Lightweight all-in-one analytics with a one-line setup and AI assistant",
    "descriptionMd": "Litlyx is an open-source, GDPR-compliant analytics platform that aims for a 30-second, single-line-of-code setup. It covers web and product analytics with real-time dashboards, custom events, and an AI data assistant for querying your metrics in natural language. A newer, developer-friendly alternative to Google Analytics and Mixpanel.",
    "repoUrl": "https://github.com/Litlyx/litlyx",
    "websiteUrl": "https://litlyx.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 1734,
    "lastCommitAt": "2025-12-03",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Early-stage project; feature depth and long-term stability are unproven.\n- No session replay or heatmaps; product-analytics depth trails Mixpanel/Amplitude.\n- Smaller community and fewer integrations than incumbents.",
    "tags": [
      "web-analytics",
      "product-analytics",
      "ai",
      "gdpr",
      "nuxt"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "medama",
    "name": "Medama",
    "tagline": "Privacy-focused, cookie-free website analytics in a single fast binary",
    "descriptionMd": "Medama is a lightweight, privacy-focused website analytics tool that runs without cookies and requires no consent banner. It ships as a single Go binary backed by DuckDB, making it extremely cheap and simple to self-host while still surfacing the core metrics most site owners need. A minimal alternative to Google Analytics.",
    "repoUrl": "https://github.com/medama-io/medama",
    "websiteUrl": "https://medama.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 630,
    "lastCommitAt": "2026-06-13",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Bare-bones feature set: no funnels, cohorts, events depth, heatmaps, or session replay.\n- Small, young project with a limited maintainer base.\n- DuckDB backend is great for single-node but not built for very high-traffic multi-node scaling.",
    "tags": [
      "web-analytics",
      "privacy",
      "cookie-free",
      "go",
      "duckdb"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "vaultwarden",
    "name": "Vaultwarden",
    "tagline": "Lightweight Bitwarden-compatible server written in Rust, perfect for self-hosting",
    "descriptionMd": "Vaultwarden (formerly bitwarden_rs) is an unofficial, lightweight implementation of the Bitwarden server API written in Rust. It is fully compatible with the official Bitwarden clients (browser, desktop, mobile, CLI) and unlocks paid Bitwarden features like organizations and 2FA for free. It runs comfortably on low-resource hardware like a Raspberry Pi.",
    "repoUrl": "https://github.com/dani-garcia/vaultwarden",
    "websiteUrl": "https://github.com/dani-garcia/vaultwarden",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "1password",
      "lastpass",
      "dashlane"
    ],
    "license": "AGPL-3.0",
    "language": "Rust",
    "githubStars": 62710,
    "lastCommitAt": "2026-06-05",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Unofficial reimplementation; not supported or endorsed by Bitwarden, so API changes can break compatibility\n- No official mobile/desktop apps of its own; depends entirely on Bitwarden's clients\n- Some enterprise/SSO and event-logging features of paid Bitwarden are absent or only partially implemented\n- You own all security hardening, backups, and TLS termination yourself",
    "tags": [
      "bitwarden",
      "rust",
      "self-hosted",
      "vault",
      "2fa",
      "lightweight"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "sops",
    "name": "SOPS",
    "tagline": "Encrypt files in Git with KMS/age/PGP — secrets management without a server",
    "descriptionMd": "SOPS (Secrets OPerationS) is a CNCF tool for managing secrets by encrypting individual values inside YAML, JSON, ENV, and other files, so secrets can live safely in Git. It integrates with AWS/GCP/Azure KMS, age, and PGP for key management and is widely used in GitOps and infrastructure-as-code workflows. There is no server to run — it is a CLI/library.",
    "repoUrl": "https://github.com/getsops/sops",
    "websiteUrl": "https://getsops.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "hashicorp-vault"
    ],
    "license": "MPL-2.0",
    "language": "Go",
    "githubStars": 22165,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 1,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Not a centralized secrets server: no dynamic secrets, leasing, revocation, or audit log like Vault\n- Requires an external key provider (KMS/age/PGP) and disciplined key management\n- No UI, access policies, or web dashboard\n- Suited to config-file secrets in Git, not runtime secret brokering",
    "tags": [
      "secrets",
      "gitops",
      "encryption",
      "kms",
      "age",
      "cncf"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "infisical",
    "name": "Infisical",
    "tagline": "Open-source secrets management platform for developers and teams",
    "descriptionMd": "Infisical is an open-source secrets-management platform for syncing secrets across teams, infrastructure, and CI/CD. It provides a slick dashboard, secret versioning and rotation, dynamic secrets, PKI, an SDK, CLI, and Kubernetes operator. It positions itself as a developer-friendly alternative to HashiCorp Vault.",
    "repoUrl": "https://github.com/Infisical/infisical",
    "websiteUrl": "https://infisical.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "hashicorp-vault"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 27462,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Core is MIT but a number of features live under an enterprise (ee) license requiring a paid plan\n- Less battle-tested than Vault for low-level cryptographic/dynamic-secret workloads\n- Self-hosted instances do not include all features available in the paid cloud tier\n- Smaller plugin/integration catalog than HashiCorp Vault",
    "tags": [
      "secrets",
      "developer-tools",
      "typescript",
      "secret-rotation",
      "kubernetes",
      "ci-cd"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "bitwarden-server",
    "name": "Bitwarden Server",
    "tagline": "Official open-source server for the Bitwarden password manager",
    "descriptionMd": "Bitwarden is a full-featured, open-source password manager with official self-hosted server software. It offers end-to-end encrypted vaults, password sharing, organizations, secrets management, and clients for every major platform. The official server is heavier than Vaultwarden but is first-party and enterprise-ready.",
    "repoUrl": "https://github.com/bitwarden/server",
    "websiteUrl": "https://bitwarden.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "1password",
      "lastpass",
      "dashlane"
    ],
    "license": "AGPL-3.0",
    "language": "C#",
    "githubStars": 19258,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- The official self-host stack is resource-heavy (many containers including SQL Server/MSSQL) compared to Vaultwarden\n- Some enterprise features (SSO/SCIM, advanced policies) require a paid license even when self-hosting\n- Self-hosting requires a Bitwarden installation ID/key obtained from their website\n- Heavier maintenance burden than lightweight alternatives",
    "tags": [
      "bitwarden",
      "official",
      "self-hosted",
      "vault",
      "2fa",
      "enterprise"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "keeweb",
    "name": "KeeWeb",
    "tagline": "Web and desktop KeePass-compatible password manager you can host yourself",
    "descriptionMd": "KeeWeb is a free, cross-platform password manager compatible with the KeePass database format (.kdbx). It runs as a web app or desktop app and can be self-hosted, syncing databases via WebDAV, Dropbox, Google Drive, or OneDrive. It offers a polished UI on top of the proven KeePass encryption format.",
    "repoUrl": "https://github.com/keeweb/keeweb",
    "websiteUrl": "https://keeweb.info",
    "demoUrl": "https://app.keeweb.info",
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "lastpass",
      "1password",
      "dashlane"
    ],
    "license": "MIT",
    "language": "JavaScript",
    "githubStars": 12941,
    "lastCommitAt": "2026-05-08",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Project activity has slowed significantly; few recent releases\n- No built-in multi-user/team server — syncing relies on external storage (WebDAV/cloud) with no central access control\n- Browser autofill and mobile support are weaker than commercial managers\n- It is a client over KeePass files, not a true server platform with sharing/policies",
    "tags": [
      "keepass",
      "javascript",
      "web-app",
      "kdbx",
      "webdav",
      "cross-platform"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "openbao",
    "name": "OpenBao",
    "tagline": "Open-source secrets management forked from HashiCorp Vault under the Linux Foundation",
    "descriptionMd": "OpenBao is an open-source, community-driven fork of HashiCorp Vault, created after Vault moved to the BSL license. Hosted under the Linux Foundation, it manages, stores, and distributes secrets, certificates, and encryption keys with dynamic secrets, leasing/renewal, and a rich plugin ecosystem. It remains API-compatible with much of Vault's tooling.",
    "repoUrl": "https://github.com/openbao/openbao",
    "websiteUrl": "https://openbao.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "hashicorp-vault"
    ],
    "license": "MPL-2.0",
    "language": "Go",
    "githubStars": 6414,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Younger project with a smaller ecosystem than HashiCorp Vault; some Vault Enterprise features and integrations are missing\n- No first-party managed/cloud offering equivalent to HCP Vault\n- Operating a production HA cluster (storage backend, unsealing, auto-unseal) requires real expertise\n- Documentation and third-party tutorials still maturing relative to Vault's",
    "tags": [
      "secrets",
      "vault-fork",
      "go",
      "dynamic-secrets",
      "pki",
      "linux-foundation"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "passbolt",
    "name": "Passbolt",
    "tagline": "Open-source password manager for teams with granular sharing and PGP encryption",
    "descriptionMd": "Passbolt is a self-hosted, open-source password manager designed for teams and collaboration. It uses OpenPGP for end-to-end encryption, offers fine-grained sharing permissions, browser extensions, a CLI, and a REST API. It targets organizations that want to self-host shared credential management.",
    "repoUrl": "https://github.com/passbolt/passbolt_api",
    "websiteUrl": "https://www.passbolt.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "1password",
      "lastpass",
      "dashlane"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 5985,
    "lastCommitAt": "2026-06-11",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Several features (SSO, directory sync, MFA policies, tags) are gated behind paid Pro/Cloud editions\n- Relies on browser extensions; mobile app maturity lags 1Password/Dashlane\n- Initial setup (GPG server keys, SMTP, HTTPS) is fiddly compared to consumer apps\n- No personal/consumer focus — geared toward team credential sharing",
    "tags": [
      "team",
      "pgp",
      "php",
      "self-hosted",
      "sharing",
      "collaboration"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "padloc",
    "name": "Padloc",
    "tagline": "Open-source, end-to-end encrypted password manager for individuals and teams",
    "descriptionMd": "Padloc is an open-source, end-to-end encrypted password manager with a clean, modern UI. It supports cross-platform apps (web, desktop, mobile), organizations, and self-hosting of its server component. It aims to be a friendly, design-forward alternative to commercial managers.",
    "repoUrl": "https://github.com/padloc/padloc",
    "websiteUrl": "https://padloc.app",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "1password",
      "lastpass",
      "dashlane"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 2923,
    "lastCommitAt": "2025-03-29",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Development has slowed; releases are infrequent relative to active competitors\n- Self-hosting documentation is thin and the monorepo build is non-trivial\n- Fewer integrations, no extensive browser-autofill ecosystem like 1Password\n- Smaller community means slower security review and feature growth",
    "tags": [
      "e2e-encryption",
      "typescript",
      "cross-platform",
      "teams",
      "self-hosted",
      "modern-ui"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "teampass",
    "name": "Teampass",
    "tagline": "On-premise collaborative password manager for teams",
    "descriptionMd": "Teampass is a free, on-premise collaborative password manager built in PHP. It organizes shared credentials into folders with role-based access control, encryption, and a web interface. It is a long-standing option for organizations wanting fully on-prem, no-cloud credential sharing.",
    "repoUrl": "https://github.com/nilsteampassnet/TeamPass",
    "websiteUrl": "https://teampass.net",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "lastpass",
      "1password",
      "dashlane"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 1790,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Dated UI and UX compared to modern commercial managers\n- Manual setup (LAMP stack, MySQL, PHP extensions) can be error-prone; security depends on correct server hardening\n- No first-party mobile apps; browser/web focused\n- Historically has had security-audit concerns; requires careful, up-to-date deployment",
    "tags": [
      "team",
      "on-premise",
      "php",
      "rbac",
      "collaboration",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "psono",
    "name": "Psono",
    "tagline": "Self-hosted password manager for teams and enterprises with client-side encryption",
    "descriptionMd": "Psono is a self-hosted, open-source password manager focused on team and enterprise use, with client-side end-to-end encryption. It supports secret sharing, granular access rights, file storage, SAML/OIDC SSO, and offers browser extensions and a CLI. The community edition is free while advanced enterprise features are paid.",
    "repoUrl": "https://github.com/psono/psono-server",
    "websiteUrl": "https://psono.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "1password",
      "lastpass",
      "dashlane"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 102,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Many enterprise features (LDAP sync, advanced policies) require a paid Enterprise license\n- Split into multiple repos (server, client, admin, fileserver) making full deployment more involved\n- Smaller community and fewer integrations than mainstream commercial managers\n- Mobile experience is weaker than 1Password/Dashlane",
    "tags": [
      "team",
      "enterprise",
      "python",
      "self-hosted",
      "sso",
      "e2e-encryption"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "docker-mailserver",
    "name": "docker-mailserver",
    "tagline": "Production-ready, config-driven mail server in a single container",
    "descriptionMd": "docker-mailserver is a production-ready full-stack mail server (Postfix, Dovecot, Rspamd, ClamAV, Fail2ban) configured via files instead of a database. It runs as a single container with no external dependencies, making it lightweight to operate. It is a popular self-hosted alternative to Gmail / Google Workspace for hosting mailboxes. Configuration is done through plain-text files and env vars.",
    "repoUrl": "https://github.com/docker-mailserver/docker-mailserver",
    "websiteUrl": "https://docker-mailserver.github.io/docker-mailserver/latest/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail"
    ],
    "license": "MIT",
    "language": "Shell",
    "githubStars": 18415,
    "lastCommitAt": "2026-06-10",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No admin web UI — all config is via files and the CLI\n- No bundled webmail or groupware (calendar/contacts)\n- Deliverability, DNS, and TLS setup are entirely your responsibility\n- Not a newsletter/marketing tool — mailboxes only",
    "tags": [
      "mail-server",
      "smtp",
      "imap",
      "docker",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "postal",
    "name": "Postal",
    "tagline": "Self-hosted mail delivery platform, a SendGrid/Mailgun alternative",
    "descriptionMd": "Postal is a fully featured open-source mail delivery platform for sending and receiving large volumes of transactional and bulk email. It provides a web UI, HTTP API, SMTP relay, message tracking, webhooks, and per-domain DKIM. Written in Ruby, it is designed as a self-hosted alternative to SendGrid, Mailgun, and Postmark. It is widely used to run your own outbound email infrastructure.",
    "repoUrl": "https://github.com/postalserver/postal",
    "websiteUrl": "https://docs.postalserver.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "sendgrid"
    ],
    "license": "MIT",
    "language": "Ruby",
    "githubStars": 16615,
    "lastCommitAt": "2026-06-09",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- You are responsible for IP reputation, warmup, and deliverability\n- Requires MariaDB, RabbitMQ, and DNS/DKIM configuration to run\n- No marketing-campaign UI — it is a delivery engine, not a newsletter builder\n- Less hand-holding than managed providers for spam/blocklist issues",
    "tags": [
      "smtp",
      "transactional-email",
      "mail-server",
      "ruby",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "listmonk",
    "name": "listmonk",
    "tagline": "High-performance self-hosted newsletter and mailing list manager",
    "descriptionMd": "listmonk is a standalone, self-hosted newsletter and mailing list manager built as a single Go binary backed by PostgreSQL. It offers a modern dashboard, granular subscriber management, multi-list campaigns, templating, and a fast bulk-sending engine. It supports transactional email APIs and connects to any SMTP provider or services like SES. It is one of the most popular open-source Mailchimp alternatives.",
    "repoUrl": "https://github.com/knadh/listmonk",
    "websiteUrl": "https://listmonk.app",
    "demoUrl": "https://demo.listmonk.app",
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "mailchimp",
      "convertkit",
      "sendgrid"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 21697,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in marketing automation/journey builder like Mailchimp\n- No bundled deliverability/IP reputation management — you supply your own SMTP/SES\n- No native landing page or e-commerce/CRM integrations\n- Reporting and analytics are basic compared to commercial suites",
    "tags": [
      "newsletter",
      "mailing-list",
      "self-hosted",
      "golang",
      "smtp"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "mailcow",
    "name": "mailcow: dockerized",
    "tagline": "Dockerized full-stack mail server, a self-hosted Gmail alternative",
    "descriptionMd": "mailcow is a complete dockerized mail server suite bundling Postfix, Dovecot, Rspamd, ClamAV, and SOGo groupware with a polished admin UI. It provides webmail, calendars, contacts, multi-domain support, and antispam/antivirus out of the box. It is a leading self-hosted alternative to Gmail / Google Workspace for running your own mailboxes. Setup is via Docker Compose.",
    "repoUrl": "https://github.com/mailcow/mailcow-dockerized",
    "websiteUrl": "https://mailcow.email",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 12984,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires a dedicated server with proper DNS/PTR and good IP reputation\n- Not a bulk-newsletter tool — focused on mailboxes, not campaigns\n- Ongoing maintenance, updates, and spam tuning are on you\n- Resource-hungry; needs a few GB of RAM minimum",
    "tags": [
      "mail-server",
      "groupware",
      "self-hosted",
      "docker",
      "webmail"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "mautic",
    "name": "Mautic",
    "tagline": "Open-source marketing automation and email campaigns at scale",
    "descriptionMd": "Mautic is the largest open-source marketing automation platform, covering email campaigns, contact segmentation, drip workflows, landing pages, forms, and multi-channel journeys. It rivals high-end marketing suites with visual campaign builders and lead scoring. Written in PHP/Symfony, it self-hosts on a standard LAMP stack. It is a common replacement for Mailchimp's automation and HubSpot's marketing features.",
    "repoUrl": "https://github.com/mautic/mautic",
    "websiteUrl": "https://www.mautic.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "mailchimp",
      "hubspot",
      "convertkit"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 9867,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Heavyweight setup with cron jobs and queue workers; not beginner-friendly\n- UI feels dated compared to modern SaaS tools\n- Deliverability depends entirely on your own mail infrastructure\n- Performance tuning required for large lists; upgrades can be fragile",
    "tags": [
      "marketing-automation",
      "email",
      "self-hosted",
      "php",
      "crm"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "mailu",
    "name": "Mailu",
    "tagline": "Simple yet full-featured mail server as a set of Docker images",
    "descriptionMd": "Mailu is a simple but full-featured mail server delivered as a set of Docker images, including IMAP/SMTP, webmail, antispam, antivirus, and an admin interface. It supports multiple domains, aliases, and user management with a clean web admin. It is a self-hosted alternative to Gmail / Google Workspace for running personal or organizational mailboxes. Deployment is via Docker Compose with a config generator.",
    "repoUrl": "https://github.com/Mailu/Mailu",
    "websiteUrl": "https://mailu.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 7326,
    "lastCommitAt": "2026-05-31",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No calendar/contacts groupware bundled by default\n- Requires correct DNS, PTR, and IP reputation to deliver reliably\n- Focused on mailboxes, not newsletters or marketing campaigns\n- Upgrades occasionally require manual migration steps",
    "tags": [
      "mail-server",
      "webmail",
      "docker",
      "self-hosted",
      "antispam"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "maildev",
    "name": "MailDev",
    "tagline": "Local SMTP server with a web UI to test app-generated email",
    "descriptionMd": "MailDev is a developer tool that runs a local SMTP server and a web interface to catch and inspect emails your application sends during development. It lets you preview HTML, view headers, and test transactional templates without sending real mail. It is a self-hosted alternative to the testing/sandbox features of services like SendGrid and Mailtrap. It runs trivially via a single Docker container or npm.",
    "repoUrl": "https://github.com/maildev/maildev",
    "websiteUrl": "https://maildev.github.io/maildev/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "sendgrid"
    ],
    "license": "MIT",
    "language": "JavaScript",
    "githubStars": 5931,
    "lastCommitAt": "2026-03-05",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- A development/testing catcher only — not for sending real production email\n- No deliverability, analytics, or campaign features\n- Not intended as a long-running production mail service\n- Limited storage/persistence for captured messages",
    "tags": [
      "smtp",
      "email-testing",
      "development",
      "nodejs",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "haraka",
    "name": "Haraka",
    "tagline": "Fast, highly extensible event-driven SMTP server in Node.js",
    "descriptionMd": "Haraka is a fast, highly extensible, event-driven SMTP server built on Node.js with a modular plugin architecture. It handles thousands of concurrent connections and is commonly deployed as a filtering MTA or message submission agent with auth and DKIM. It serves as a self-hostable building block for outbound and inbound email infrastructure, an alternative to SendGrid-style SMTP relays. It is highly customizable via JavaScript plugins.",
    "repoUrl": "https://github.com/haraka/Haraka",
    "websiteUrl": "https://haraka.github.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "sendgrid"
    ],
    "license": "MIT",
    "language": "JavaScript",
    "githubStars": 5587,
    "lastCommitAt": "2026-06-12",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Low-level MTA — no web UI, dashboards, or campaign tooling\n- Requires writing/configuring plugins for real-world setups\n- No built-in analytics, tracking, or template management\n- Deliverability and reputation management are entirely on you",
    "tags": [
      "smtp",
      "mta",
      "nodejs",
      "self-hosted",
      "email-delivery"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "keila",
    "name": "Keila",
    "tagline": "Open-source newsletter tool, an easy Mailchimp alternative in Elixir",
    "descriptionMd": "Keila is an open-source newsletter tool written in Elixir/Phoenix for managing contacts, building sign-up forms, and sending campaigns. It supports SMTP plus AWS SES, Sendgrid, Mailgun, and Postmark as sending backends. It focuses on simplicity and privacy as a self-hosted Mailchimp alternative. An official hosted version is available at app.keila.io.",
    "repoUrl": "https://github.com/pentacent/keila",
    "websiteUrl": "https://www.keila.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "mailchimp",
      "convertkit"
    ],
    "license": "AGPL-3.0",
    "language": "Elixir",
    "githubStars": 2120,
    "lastCommitAt": "2026-06-16",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Smaller feature set than Mailchimp — limited automation/journeys\n- Fewer template and design tools out of the box\n- Smaller community and ecosystem of integrations\n- No built-in deliverability/IP warmup; relies on external senders",
    "tags": [
      "newsletter",
      "elixir",
      "self-hosted",
      "privacy",
      "email-marketing"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "forward-email",
    "name": "Forward Email",
    "tagline": "Privacy-focused email service, an all-in-one Gmail and SaaS alternative",
    "descriptionMd": "Forward Email is a privacy-focused, encrypted email platform offering email forwarding, full mailboxes (IMAP/POP3/SMTP/CalDAV/CardDAV), and a sending API. It positions itself as an all-in-one open-source alternative to Gmail plus Mailchimp and Sendgrid. The entire stack is open source and self-hostable, written in Node.js. It also runs as a paid hosted service.",
    "repoUrl": "https://github.com/forwardemail/forwardemail.net",
    "websiteUrl": "https://forwardemail.net",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "sendgrid",
      "mailchimp"
    ],
    "license": "BUSL-1.1",
    "language": "JavaScript",
    "githubStars": 1602,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosting is complex and far less documented than the hosted service\n- Newsletter/campaign tooling is thin compared to Mailchimp\n- BUSL-1.1 license is source-available, not fully OSI-open\n- Running production email requires significant infra and DNS expertise",
    "tags": [
      "email",
      "privacy",
      "forwarding",
      "nodejs",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "plane",
    "name": "Plane",
    "tagline": "Open-source issue tracking, sprints, and roadmaps - a Jira and Linear alternative",
    "descriptionMd": "Plane is an open-source project management tool for tracking issues, running sprint cycles, and managing product roadmaps. It offers issues, cycles, modules, a spreadsheet view, kanban boards, and a wiki-style pages feature. It targets teams that want a Jira/Linear-style experience they can self-host.",
    "repoUrl": "https://github.com/makeplane/plane",
    "websiteUrl": "https://plane.so",
    "demoUrl": "https://app.plane.so",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "linear",
      "asana"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 52486,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Some advanced features (e.g. certain enterprise workflows, intake, advanced analytics) are gated behind the paid Pro/Enterprise tiers\n- Self-hosted community edition lags behind the cloud version on newer features\n- Automation rules are far less mature than Jira's\n- Mobile apps are less polished than Linear's",
    "tags": [
      "kanban",
      "agile",
      "sprints",
      "issue-tracking",
      "roadmaps",
      "docker"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": true,
    "featuredRank": 5,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "huly",
    "name": "Huly",
    "tagline": "All-in-one project management, tracker, and team collaboration - a Linear/Jira alternative",
    "descriptionMd": "Huly is an open-source, all-in-one platform combining project management, issue tracking, virtual office, chat, and documents. Its Tracker module is a direct Linear-style issue tracker, and it bundles team planning, HR, and CRM modules. It is built on a TypeScript/Svelte framework and positioned as a self-hosted alternative to Linear, Jira, and Slack.",
    "repoUrl": "https://github.com/hcengineering/platform",
    "websiteUrl": "https://huly.io",
    "demoUrl": "https://app.huly.io",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "linear",
      "jira",
      "slack"
    ],
    "license": "EPL-2.0",
    "language": "TypeScript",
    "githubStars": 26272,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosting the full multi-service architecture (MongoDB, MinIO, Elastic, transactors) is complex\n- Documentation for self-hosting is sparse relative to its breadth\n- Breadth over depth: individual modules are less mature than dedicated tools like Linear or Slack\n- Self-hosted edition trails the managed cloud on some features",
    "tags": [
      "issue-tracking",
      "linear-alternative",
      "all-in-one",
      "collaboration",
      "svelte"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "focalboard",
    "name": "Focalboard",
    "tagline": "Self-hosted project management boards (Trello/Notion alternative)",
    "descriptionMd": "Focalboard is an open-source, self-hosted alternative to Trello, Notion, and Asana for project and task management with kanban, table, and calendar views. It was developed by Mattermost as both a standalone app and a Mattermost plugin. The standalone repository is now archived as development moved into Mattermost Boards.",
    "repoUrl": "https://github.com/mattermost/focalboard",
    "websiteUrl": "https://www.focalboard.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello",
      "asana",
      "notion"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 26251,
    "lastCommitAt": "2026-05-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- The standalone project is archived; active development moved into Mattermost Boards.\n- Fewer power-ups/automations than Trello.\n- No relational databases like Notion.\n- Limited integrations.",
    "tags": [
      "trello-alternative",
      "kanban",
      "project-management",
      "mattermost"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "wekan",
    "name": "WeKan",
    "tagline": "Open-source kanban board, the long-standing Trello alternative",
    "descriptionMd": "WeKan is an open-source kanban board that closely mirrors Trello's card-and-list model. It supports swimlanes, checklists, due dates, custom fields, and rules/automation. It runs on Meteor/MongoDB and is one of the oldest and most widely deployed self-hosted Trello replacements.",
    "repoUrl": "https://github.com/wekan/wekan",
    "websiteUrl": "https://wekan.github.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello",
      "asana"
    ],
    "license": "MIT",
    "language": "JavaScript",
    "githubStars": 20968,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- UI is dated compared to Trello's polish\n- Meteor/MongoDB stack can be memory-heavy and occasionally slow on large boards\n- No official managed cloud hosting\n- Power-up/integration ecosystem is minimal versus Trello",
    "tags": [
      "kanban",
      "trello-alternative",
      "swimlanes",
      "meteor",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "openproject",
    "name": "OpenProject",
    "tagline": "Enterprise-grade open-source project management with Gantt, agile boards, and budgeting",
    "descriptionMd": "OpenProject is a mature, full-featured open-source project management application covering classic and agile methodologies. It includes Gantt charts, work packages, boards, time and cost tracking, wikis, and budgets. It is a strong self-hosted alternative to Jira and Microsoft Project for organizations needing on-premise control.",
    "repoUrl": "https://github.com/opf/openproject",
    "websiteUrl": "https://www.openproject.org",
    "demoUrl": "https://www.openproject.org/demo/",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "asana",
      "basecamp"
    ],
    "license": "GPL-3.0",
    "language": "Ruby",
    "githubStars": 15374,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Many premium modules (team planner, baselines, SSO, custom fields beyond limits) require the paid Enterprise edition\n- UI feels heavier and less modern than Linear or Notion\n- Ruby/PostgreSQL stack is resource-hungry for small teams\n- No native mobile apps",
    "tags": [
      "gantt",
      "agile",
      "work-packages",
      "enterprise",
      "self-hosted",
      "ruby"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "planka",
    "name": "PLANKA",
    "tagline": "Elegant real-time kanban board built for teams, a clean Trello alternative",
    "descriptionMd": "PLANKA is a real-time kanban board for teams with a clean, modern interface heavily inspired by Trello. It supports boards, lists, cards, labels, due dates, attachments, and real-time collaboration via WebSockets. It is lightweight and easy to deploy with Docker.",
    "repoUrl": "https://github.com/plankanban/planka",
    "websiteUrl": "https://planka.app",
    "demoUrl": "https://demo.planka.cloud",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello"
    ],
    "license": "AGPL-3.0",
    "language": "JavaScript",
    "githubStars": 12122,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Newer versions moved to a fair-use license with Pro/Enterprise tiers for some features\n- Fewer features than Trello (no power-ups, limited automation)\n- No official mobile apps\n- No managed cloud offering from the core project",
    "tags": [
      "kanban",
      "trello-alternative",
      "realtime",
      "react",
      "docker"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "leantime",
    "name": "Leantime",
    "tagline": "Goal-oriented open-source project management built with neurodiversity in mind",
    "descriptionMd": "Leantime is an open-source project management system that combines strategy, planning, and execution with a focus on usability for people with ADHD, autism, and dyslexia. It includes Gantt-style timelines, kanban boards, idea/blueprint boards, goals (OKRs), and time tracking. It is a PHP/MySQL app aimed at small teams and startups.",
    "repoUrl": "https://github.com/Leantime/leantime",
    "websiteUrl": "https://leantime.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "asana",
      "monday",
      "basecamp"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 10075,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Some integrations and advanced features are reserved for the paid cloud/enterprise plans\n- Reporting and automation are limited versus monday.com\n- No native mobile apps\n- Smaller plugin ecosystem",
    "tags": [
      "okr",
      "gantt",
      "kanban",
      "neurodiversity",
      "php",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "kanboard",
    "name": "Kanboard",
    "tagline": "Minimalist, fast kanban project management focused on the Kanban methodology",
    "descriptionMd": "Kanboard is a lightweight, open-source kanban application focused on simplicity and visual task management with work-in-progress limits. It is written in PHP with minimal dependencies, making it trivial to self-host on cheap shared hosting or a small server. It supports subtasks, automated actions, and a plugin system.",
    "repoUrl": "https://github.com/kanboard/kanboard",
    "websiteUrl": "https://kanboard.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 9658,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Intentionally minimal; lacks rich card content, comments threading, and modern UI of Trello\n- No native mobile apps\n- Automation is rule-based and basic\n- No official cloud hosting",
    "tags": [
      "kanban",
      "php",
      "lightweight",
      "wip-limits",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "redmine",
    "name": "Redmine",
    "tagline": "Veteran open-source project management and issue tracking with Gantt and wiki",
    "descriptionMd": "Redmine is a long-established, flexible open-source project management web application. It provides issue tracking, Gantt charts, calendars, wikis, forums, time tracking, and per-project roles, with multi-project support and a large plugin ecosystem. It is a classic self-hosted Jira/Basecamp alternative widely used in enterprises.",
    "repoUrl": "https://github.com/redmine/redmine",
    "websiteUrl": "https://www.redmine.org",
    "demoUrl": "https://www.redmine.org/projects/redmine/wiki/demo",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "basecamp"
    ],
    "license": "GPL-2.0",
    "language": "Ruby",
    "githubStars": 5961,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Dated UI compared to modern tools like Linear or Jira\n- Many capabilities require third-party plugins of varying quality\n- Manual setup (Ruby, database, web server) is non-trivial\n- No official mobile apps or managed hosting",
    "tags": [
      "issue-tracking",
      "gantt",
      "wiki",
      "ruby",
      "enterprise",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "vikunja",
    "name": "Vikunja",
    "tagline": "Self-hosted to-do and task management app with list, kanban, table, and Gantt views",
    "descriptionMd": "Vikunja is a self-hosted, open-source to-do and task management application with multiple views including list, kanban, table, and Gantt. It supports projects, subtasks, reminders, labels, filters, and sharing, with a fast Go backend and Vue frontend. It works well for both personal productivity and small-team project tracking.",
    "repoUrl": "https://github.com/go-vikunja/vikunja",
    "websiteUrl": "https://vikunja.io",
    "demoUrl": "https://try.vikunja.io",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "asana",
      "trello"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 4559,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- More of a task/to-do manager than a full team PM suite; lacks deep agile/sprint tooling\n- Limited reporting and dashboards\n- Mobile app is community-driven and less polished\n- Fewer third-party integrations than Asana",
    "tags": [
      "todo",
      "kanban",
      "gantt",
      "tasks",
      "go",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "restyaboard",
    "name": "Restyaboard",
    "tagline": "Trello-like open-source kanban board on the Restya platform",
    "descriptionMd": "Restyaboard is an open-source, self-hosted kanban board modeled after Trello, built on the Restya platform. It offers boards, lists, cards, drag-and-drop, offline sync, REST API, and an extension/plugin system. It targets teams wanting a Trello-style experience with full data ownership.",
    "repoUrl": "https://github.com/RestyaPlatform/board",
    "websiteUrl": "https://restya.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello"
    ],
    "license": "OSL-3.0",
    "language": "JavaScript",
    "githubStars": 2083,
    "lastCommitAt": "2023-10-26",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Many add-ons and integrations require purchasing commercial extensions\n- Development pace is slower than newer tools like Plane or PLANKA\n- UI is somewhat dated\n- Manual installation (PostgreSQL, PHP, nginx) can be fiddly",
    "tags": [
      "kanban",
      "trello-alternative",
      "restya",
      "self-hosted",
      "rest-api"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "nextcloud-deck",
    "name": "Nextcloud Deck",
    "tagline": "Kanban-style task boards integrated into your Nextcloud instance",
    "descriptionMd": "Nextcloud Deck is a kanban-style organization tool that runs as an app inside Nextcloud. It provides boards, stacks, and cards with labels, due dates, attachments, comments, and assignment, tightly integrated with Nextcloud files, contacts, and calendar. It is ideal for teams already running Nextcloud who want lightweight Trello-style boards.",
    "repoUrl": "https://github.com/nextcloud/deck",
    "websiteUrl": "https://apps.nextcloud.com/apps/deck",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello"
    ],
    "license": "AGPL-3.0",
    "language": "JavaScript",
    "githubStars": 1395,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires a full Nextcloud installation; not a standalone app\n- Fewer board features and no power-ups versus Trello\n- Automation is minimal\n- Performance depends on the underlying Nextcloud setup",
    "tags": [
      "kanban",
      "nextcloud",
      "trello-alternative",
      "self-hosted",
      "tasks"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "taiga",
    "name": "Taiga",
    "tagline": "Agile project management for cross-functional teams with Scrum and Kanban",
    "descriptionMd": "Taiga is an open-source agile project management platform supporting both Scrum and Kanban workflows. It offers backlogs, sprints, user stories, tasks, issues, and a wiki, aimed at cross-functional agile teams. The current generation is maintained by Kaleidos and integrates with tools like Penpot.",
    "repoUrl": "https://github.com/kaleidos-ventures/taiga",
    "websiteUrl": "https://taiga.io",
    "demoUrl": "https://tree.taiga.io",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "trello",
      "asana"
    ],
    "license": "MPL-2.0",
    "language": "Python",
    "githubStars": 563,
    "lastCommitAt": "2023-12-13",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosting the full stack (Django backend, Angular frontend, events, async) is fairly involved\n- Newer rewrite has fewer features than the legacy taiga-back/front it replaces\n- Smaller community and slower releases than Plane or Jira\n- Limited reporting/dashboards compared to Jira",
    "tags": [
      "agile",
      "scrum",
      "kanban",
      "backlog",
      "django",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "syncthing",
    "name": "Syncthing",
    "tagline": "Continuous peer-to-peer file synchronization between your own devices",
    "descriptionMd": "Syncthing is a decentralized, peer-to-peer file synchronization tool that keeps files in sync across your devices without any central server or cloud. All traffic is encrypted and devices authenticate directly, so your data never touches a third party. It is a privacy-first alternative to Dropbox for keeping folders mirrored across machines.",
    "repoUrl": "https://github.com/syncthing/syncthing",
    "websiteUrl": "https://syncthing.net",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "MPL-2.0",
    "language": "Go",
    "githubStars": 85671,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Pure peer-to-peer sync: no cloud copy, so files only exist where a device is online (no always-available server unless you run one)\n- No web file browser, sharing links, or per-file access control like Dropbox\n- No built-in versioning UI beyond simple file versioning options\n- Not designed for multi-user team sharing; it's device-to-device for one owner",
    "tags": [
      "file-sync",
      "p2p",
      "decentralized",
      "privacy",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "minio",
    "name": "MinIO",
    "tagline": "High-performance S3-compatible object storage (now archived/commercialized)",
    "descriptionMd": "MinIO is a high-performance, S3-compatible object storage server widely used to self-host the backing store behind file apps and as an AWS S3 replacement. The AGPL community repository was archived in April 2026 as the project pivoted to its commercial AIStor offering, but existing releases remain widely deployed. It serves as object-storage infrastructure rather than an end-user file UI.",
    "repoUrl": "https://github.com/minio/minio",
    "websiteUrl": "https://min.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 61201,
    "lastCommitAt": "2026-04-24",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Community open-source repo was archived in April 2026; development moved to the commercial AIStor product\n- Object storage only — no end-user file sync clients, sharing UI, or document collaboration\n- Recent releases stripped the admin web console features, pushing users toward paid offerings\n- Requires building app layers on top to behave like Dropbox/Drive",
    "tags": [
      "object-storage",
      "s3-compatible",
      "infrastructure",
      "go",
      "archived"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "rclone",
    "name": "Rclone",
    "tagline": "Command-line program to sync files across 70+ cloud storage providers",
    "descriptionMd": "Rclone is a powerful command-line tool for managing and syncing files across more than 70 cloud storage backends including S3, Google Drive, Dropbox, and self-hosted targets. It supports encryption, mounting remotes as local filesystems, bidirectional sync, and serving over WebDAV/HTTP/SFTP. It's the go-to swiss-army-knife for self-hosted file movement and backup workflows.",
    "repoUrl": "https://github.com/rclone/rclone",
    "websiteUrl": "https://rclone.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 57967,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Primarily a CLI tool; no polished consumer GUI or always-on sync daemon out of the box (the web GUI is experimental)\n- No multi-user accounts, sharing links, or collaboration features\n- Real-time continuous sync requires scripting or third-party scheduling\n- Steep learning curve for non-technical users compared to a Dropbox app",
    "tags": [
      "cli",
      "cloud-storage",
      "sync",
      "backup",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "alist",
    "name": "AList",
    "tagline": "File list program supporting multiple storages, with WebDAV and web UI",
    "descriptionMd": "AList is a lightweight Go program that aggregates files from dozens of storage backends (local, S3, OneDrive, Google Drive, and many more) behind a single web interface and WebDAV endpoint. It excels at unifying and re-sharing cloud and local storage with previews, direct links, and multi-user support. It is popular for self-hosting a personal file portal across heterogeneous storage.",
    "repoUrl": "https://github.com/AlistGo/alist",
    "websiteUrl": "https://alist.nn.ci",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "google-drive",
      "dropbox"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 49702,
    "lastCommitAt": "2026-06-05",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Primarily a read/list and aggregation layer; not a true two-way sync engine like Dropbox\n- No native desktop/mobile sync clients (relies on WebDAV)\n- Limited collaboration, versioning, and team permission features\n- Documentation is partly Chinese-first and can lag for some backends",
    "tags": [
      "file-list",
      "webdav",
      "multi-storage",
      "aggregator",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "spacedrive",
    "name": "Spacedrive",
    "tagline": "Cross-platform file explorer powered by a virtual distributed filesystem",
    "descriptionMd": "Spacedrive is an open-source, cross-platform file manager built on a virtual distributed filesystem (VDFS) that indexes and unifies files across all your devices and cloud accounts into one explorer. Written in Rust with a Tauri/React UI, it lets you organize, tag, and locate files regardless of where they physically live. It aims to be a privacy-respecting layer over your scattered storage rather than a cloud locker.",
    "repoUrl": "https://github.com/spacedriveapp/spacedrive",
    "websiteUrl": "https://spacedrive.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "Apache-2.0",
    "language": "Rust",
    "githubStars": 38370,
    "lastCommitAt": "2026-04-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Still pre-1.0 / beta; features and stability are evolving and some are incomplete\n- Cloud sync and peer-to-peer sync are not yet as mature as Dropbox's reliable sync\n- Primarily a desktop indexer/explorer rather than a server you self-host with web access\n- Licensed under FSL initially (converts to Apache-2.0 after two years), which some consider not fully OSI-open at release",
    "tags": [
      "file-explorer",
      "vdfs",
      "cross-platform",
      "rust",
      "tauri"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "seaweedfs",
    "name": "SeaweedFS",
    "tagline": "Fast distributed storage system for blobs, objects, files and a data lake",
    "descriptionMd": "SeaweedFS is a simple and highly scalable distributed file and object storage system that can store and serve billions of files quickly. It provides an S3-compatible API, a POSIX-like filer, tiered cloud storage, and WebDAV/FUSE mounts, making it suitable as the storage backend for self-hosted file platforms. It is infrastructure-grade rather than a consumer file UI.",
    "repoUrl": "https://github.com/seaweedfs/seaweedfs",
    "websiteUrl": "https://seaweedfs.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 33066,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Storage infrastructure, not an end-user product: no consumer sync app, sharing UI, or collaboration\n- Requires assembling master/volume/filer components and a frontend to behave like Dropbox\n- Steeper operational knowledge needed for distributed deployment and tuning\n- Documentation assumes infrastructure familiarity",
    "tags": [
      "distributed-storage",
      "object-storage",
      "s3-compatible",
      "filer",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "nextcloud",
    "name": "Nextcloud",
    "tagline": "Self-hosted content collaboration platform for files, calendars, contacts and more",
    "descriptionMd": "Nextcloud is the most popular self-hosted file sync and share platform, a full-featured replacement for Dropbox and Google Drive. It offers desktop, mobile, and web clients with file versioning, sharing, and end-to-end encryption, plus an extensive app ecosystem (Office, Talk, Calendar, Mail). It runs on your own server giving you complete control over your data.",
    "repoUrl": "https://github.com/nextcloud/server",
    "websiteUrl": "https://nextcloud.com",
    "demoUrl": "https://try.nextcloud.com",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 35887,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- PHP-based core can be resource-heavy and slower than native Dropbox sync at large scale\n- Desktop sync client historically less reliable than Dropbox for very large file trees or millions of files\n- Real-time collaborative editing requires a separate heavy component (Collabora/OnlyOffice)\n- Requires server maintenance, updates, and tuning that managed SaaS handles for you",
    "tags": [
      "file-sync",
      "self-hosted",
      "collaboration",
      "php",
      "webdav"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "filebrowser",
    "name": "File Browser",
    "tagline": "Lightweight web file manager for a single directory on your server",
    "descriptionMd": "File Browser is a single-binary web application that provides a clean interface to manage, upload, share, and edit files in a specified directory on your server. It supports multiple users with permissions, shareable links, and a built-in editor, making it a simple self-hosted alternative for accessing your files anywhere. It is extremely easy to deploy with no external dependencies.",
    "repoUrl": "https://github.com/filebrowser/filebrowser",
    "websiteUrl": "https://filebrowser.org",
    "demoUrl": "https://demo.filebrowser.org",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 35182,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No automatic desktop or mobile sync client; it's a web file manager, not a sync engine\n- No file versioning or trash/restore comparable to Dropbox\n- Single-directory scope; not built for large multi-tenant deployments\n- Sharing and collaboration features are basic compared to Google Drive",
    "tags": [
      "file-manager",
      "web-ui",
      "self-hosted",
      "go",
      "single-binary"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "seafile",
    "name": "Seafile",
    "tagline": "High-performance file sync and share with client-side encryption",
    "descriptionMd": "Seafile is a self-hosted file sync and share platform built for performance and reliability, using a Git-like block-based storage model. It offers fast, reliable desktop and mobile sync, client-side encrypted libraries, and selective sync, making it a strong Dropbox alternative. The community edition is open source while the professional edition adds enterprise features.",
    "repoUrl": "https://github.com/haiwen/seafile",
    "websiteUrl": "https://www.seafile.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "GPL-3.0",
    "language": "C",
    "githubStars": 14881,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Community edition lacks features (file roles, full-text search, advanced audit) reserved for the paid Pro edition\n- Document/office collaboration is weaker than Google Drive without add-on integrations\n- Block-based storage is efficient but makes direct filesystem access to stored data non-trivial\n- Initial setup with database, memcached, and reverse proxy is fairly involved",
    "tags": [
      "file-sync",
      "self-hosted",
      "encryption",
      "block-storage",
      "c"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "zfile",
    "name": "ZFile",
    "tagline": "Online file directory program that mounts cloud and local storage as a web drive",
    "descriptionMd": "ZFile is a Java-based online file directory application that mounts storage backends like OneDrive, Google Drive, S3, and local disks and presents them through a clean web interface. It supports file previews, direct download links, password-protected folders, and multi-user access. It is a simple way to self-host a browsable, shareable file portal over existing storage.",
    "repoUrl": "https://github.com/zfile-dev/zfile",
    "websiteUrl": "https://www.zfile.vip",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "google-drive",
      "dropbox"
    ],
    "license": "MIT",
    "language": "Java",
    "githubStars": 10769,
    "lastCommitAt": "2026-05-16",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Focused on browsing and direct-linking files, not bidirectional sync\n- No native desktop/mobile sync clients\n- Limited collaboration and versioning features versus Google Drive\n- Java runtime makes it heavier than Go-based alternatives for small servers",
    "tags": [
      "file-list",
      "web-drive",
      "multi-storage",
      "java",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "owncloud",
    "name": "ownCloud",
    "tagline": "Self-hosted file sync and share server, the original fork parent of Nextcloud",
    "descriptionMd": "ownCloud is a long-established self-hosted file hosting and sync platform that competes directly with Dropbox and Google Drive. It provides file syncing, sharing, versioning, and access control with desktop and mobile clients. The classic PHP core (this repo) is in maintenance, while the team focuses on the newer Go-based ownCloud Infinite Scale (OCIS).",
    "repoUrl": "https://github.com/owncloud/core",
    "websiteUrl": "https://owncloud.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 8793,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Classic PHP core is in maintenance mode; active development has shifted to the separate OCIS (Infinite Scale) project\n- Smaller app ecosystem and community momentum than Nextcloud after the fork\n- No native real-time collaborative editing without third-party integrations\n- Setup and tuning more involved than a managed Dropbox/Drive account",
    "tags": [
      "file-sync",
      "self-hosted",
      "php",
      "webdav",
      "enterprise"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "backrest",
    "name": "Backrest",
    "tagline": "Web UI and orchestrator for restic backups across local and cloud storage",
    "descriptionMd": "Backrest is a web-based UI and scheduler built on top of restic, providing a friendly interface to configure, run, and monitor encrypted, deduplicated backups to local disks, S3, B2, and many cloud targets. It handles scheduling, retention policies, notifications, and browsing/restoring snapshots. It's an easy self-hosted way to back up data instead of relying on Dropbox/Drive for safekeeping.",
    "repoUrl": "https://github.com/garethgeorge/backrest",
    "websiteUrl": "https://garethgeorge.github.io/backrest",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "GPL-3.0",
    "language": "Go",
    "githubStars": 6764,
    "lastCommitAt": "2026-06-10",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- It's a backup tool, not a live sync/share platform like Dropbox\n- No real-time file syncing across devices or shareable links\n- No multi-user collaboration or document editing\n- Restore is snapshot-based rather than continuous file availability",
    "tags": [
      "backup",
      "restic",
      "web-ui",
      "scheduler",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "pydio-cells",
    "name": "Pydio Cells",
    "tagline": "Self-hosted document sharing and collaboration platform for the enterprise",
    "descriptionMd": "Pydio Cells is a self-hosted file sharing and collaboration platform written in Go, designed as a modern document management alternative to Dropbox and Box for organizations. It offers fine-grained permissions, workspaces, in-app messaging, and an admin console, with sync clients for desktop. It targets teams that need secure, on-premise file collaboration.",
    "repoUrl": "https://github.com/pydio/cells",
    "websiteUrl": "https://pydio.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "box",
      "google-drive"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 2220,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Smaller community and ecosystem than Nextcloud/Seafile\n- Some enterprise capabilities are gated behind the paid Cells Enterprise edition\n- Microservices architecture makes setup and troubleshooting more complex than simpler apps\n- Office/document co-editing relies on external integrations",
    "tags": [
      "file-sharing",
      "collaboration",
      "enterprise",
      "self-hosted",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "rocket-chat",
    "name": "Rocket.Chat",
    "tagline": "Fully customizable open-source communications platform and Slack alternative",
    "descriptionMd": "Rocket.Chat is a feature-rich team communication platform supporting channels, direct messages, audio/video conferencing, omnichannel customer support, and federation via Matrix. It targets organizations needing high data sovereignty and extensive customization. Available self-hosted or as a managed cloud offering.",
    "repoUrl": "https://github.com/RocketChat/Rocket.Chat",
    "websiteUrl": "https://rocket.chat",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 45688,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Resource-heavy (Node.js + MongoDB) and can be slow at scale on modest hardware\n- Some enterprise features (engagement dashboard, scalability, advanced auth) require a paid plan\n- UI can feel cluttered compared to Slack\n- Mobile apps have historically lagged the web client in polish",
    "tags": [
      "messaging",
      "omnichannel",
      "video",
      "federation",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "mattermost",
    "name": "Mattermost",
    "tagline": "Open-source, self-hostable Slack alternative for secure team messaging and collaboration",
    "descriptionMd": "Mattermost is a mature, enterprise-grade messaging platform built for developer and ops teams that need data control and on-prem deployment. It offers channels, threads, file sharing, voice/screen sharing, integrations, and a plugin ecosystem. Widely adopted by organizations with strict security and compliance requirements.",
    "repoUrl": "https://github.com/mattermost/mattermost",
    "websiteUrl": "https://mattermost.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 38124,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Many advanced features (LDAP/AD, SAML/SSO, compliance exports, high availability) are gated behind paid Enterprise tiers\n- Search and message UX feel less polished than Slack\n- Voice/video calling is more limited than Teams' full meetings stack\n- Smaller third-party app/integration marketplace than Slack",
    "tags": [
      "messaging",
      "channels",
      "enterprise",
      "devops",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "jitsi-meet",
    "name": "Jitsi Meet",
    "tagline": "Self-hostable open-source video conferencing alternative to Teams meetings",
    "descriptionMd": "Jitsi Meet is a secure, fully open-source video conferencing platform supporting browser-based meetings with no account required, screen sharing, recording, and live streaming. It can be self-hosted for complete control over meeting data. Widely used as an open replacement for Teams/Zoom-style meetings and integrated by many other open-source tools.",
    "repoUrl": "https://github.com/jitsi/jitsi-meet",
    "websiteUrl": "https://jitsi.org",
    "demoUrl": "https://meet.jit.si",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "microsoft-teams"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 29469,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Primarily video meetings; it is not a persistent team-chat workspace with channels\n- Self-hosting the full stack (Jicofo, JVB, Prosody, TURN) for scale is non-trivial\n- Large meetings require careful videobridge tuning and bandwidth provisioning\n- Lacks the broader collaboration suite (files, tabs, apps) of Microsoft Teams",
    "tags": [
      "video-conferencing",
      "webrtc",
      "meetings",
      "screen-sharing",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "zulip",
    "name": "Zulip",
    "tagline": "Open-source team chat with a unique topic-based threading model",
    "descriptionMd": "Zulip is a team chat application distinguished by its topic-based threading, which organizes conversations within streams into named topics for asynchronous, focused discussion. It is popular with open-source communities, research groups, and distributed teams. Fully open-source and self-hostable, with an official cloud option.",
    "repoUrl": "https://github.com/zulip/zulip",
    "websiteUrl": "https://zulip.com",
    "demoUrl": "https://chat.zulip.org",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 25387,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Native voice/video calling is limited and usually relies on third-party integrations (Jitsi, Zoom)\n- The topic-threading model has a learning curve and can feel unfamiliar to Slack users\n- Production installs effectively want a dedicated server; multi-host scaling is involved\n- Smaller app/integration ecosystem than Slack",
    "tags": [
      "messaging",
      "threading",
      "async",
      "open-source",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "tinode",
    "name": "Tinode",
    "tagline": "Open-source instant messaging server with a Go backend and multi-platform clients",
    "descriptionMd": "Tinode is an open-source instant messaging platform with a high-performance Go backend and clients for web, Android, iOS, and command line. It positions itself as a modern alternative to XMPP and a self-hostable base for building chat into products. Suitable for teams and developers wanting an embeddable messaging server.",
    "repoUrl": "https://github.com/tinode/chat",
    "websiteUrl": "https://tinode.co",
    "demoUrl": "https://web.tinode.co",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack"
    ],
    "license": "GPL-3.0",
    "language": "Go",
    "githubStars": 13389,
    "lastCommitAt": "2026-06-16",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- More of a messaging backend/SDK than a turnkey Slack workspace experience\n- Lacks built-in app marketplace, workflows, and rich integrations of Slack\n- Voice/video is limited compared to Teams\n- Admin and team-management UI is minimal",
    "tags": [
      "messaging",
      "go",
      "im-server",
      "multi-platform",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "element-web",
    "name": "Element (Web)",
    "tagline": "Matrix-based secure messenger and Slack alternative with end-to-end encryption",
    "descriptionMd": "Element is the flagship web client for the Matrix protocol, offering end-to-end encrypted messaging, voice/video calls, and decentralized federation across homeservers. It is well suited for privacy-focused teams and governments. Paired with a Matrix homeserver like Synapse, it forms a complete self-hosted communication stack.",
    "repoUrl": "https://github.com/element-hq/element-web",
    "websiteUrl": "https://element.io",
    "demoUrl": "https://app.element.io",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 13231,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Requires running and maintaining a separate Matrix homeserver (e.g. Synapse) for a full deployment\n- End-to-end encryption key management and device verification can confuse non-technical users\n- Performance and load times lag native Slack/Teams clients in large rooms\n- Threads and search are less refined than Slack",
    "tags": [
      "matrix",
      "encryption",
      "federation",
      "messaging",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "thelounge",
    "name": "The Lounge",
    "tagline": "Modern, self-hosted web IRC client for always-on team chat",
    "descriptionMd": "The Lounge is a self-hosted, web-based IRC client that stays connected so you never miss messages, with push notifications, link previews, and multi-user support. It modernizes the IRC experience for teams and communities that prefer the open IRC ecosystem. Lightweight and easy to deploy.",
    "repoUrl": "https://github.com/thelounge/thelounge",
    "websiteUrl": "https://thelounge.chat",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 6273,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- It is an IRC client, so you still need IRC servers/networks for actual chat\n- IRC lacks native threads, rich file sharing, and message editing that Slack offers\n- No built-in voice/video or app integrations\n- Persistence and history depend on a connected bouncer/IRC setup",
    "tags": [
      "irc",
      "web-client",
      "messaging",
      "lightweight",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "synapse",
    "name": "Synapse (Matrix Homeserver)",
    "tagline": "Reference Matrix homeserver powering decentralized, federated team chat",
    "descriptionMd": "Synapse is the most widely deployed Matrix homeserver, providing the backend for federated, end-to-end encrypted messaging used by clients like Element. It enables organizations to run their own communication infrastructure with full data ownership and interoperability across the Matrix network. Maintained by Element under a dual AGPL/commercial license.",
    "repoUrl": "https://github.com/element-hq/synapse",
    "websiteUrl": "https://matrix.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "AGPL-3.0",
    "language": "Python",
    "githubStars": 4310,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- It is a backend only; you must pair it with a client (Element) for a usable product\n- Federation and database (PostgreSQL) tuning is required for scale and can be resource-intensive\n- Setup involves reverse proxy, TLS, well-known config, and federation ports\n- AGPL license and commercial relicensing have caused community friction",
    "tags": [
      "matrix",
      "homeserver",
      "federation",
      "backend",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "spacebar",
    "name": "Spacebar",
    "tagline": "Open-source, Discord-compatible chat backend you can self-host",
    "descriptionMd": "Spacebar (formerly Fosscord) is a free, open-source, self-hostable reimplementation of the Discord backend that remains compatible with existing Discord clients, bots, and applications. It lets communities run their own Discord-like servers with full data ownership. Still in active development and aimed at hobbyists and self-hosting enthusiasts.",
    "repoUrl": "https://github.com/spacebarchat/server",
    "websiteUrl": "https://spacebar.chat",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "discord"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 2176,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Still alpha/beta quality; not feature-complete or stable for production communities\n- Voice/video support is incomplete or experimental\n- Documentation and setup are rough and aimed at technical users\n- No official polished first-party client; relies on Discord-compatible clients",
    "tags": [
      "discord-alternative",
      "communities",
      "self-hosted",
      "chat",
      "voice"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "nextcloud-talk",
    "name": "Nextcloud Talk",
    "tagline": "Self-hosted chat, video calls, and conferencing integrated into Nextcloud",
    "descriptionMd": "Nextcloud Talk (the spreed app) adds private audio/video calls, screen sharing, and group chat directly into a Nextcloud instance, keeping communication alongside files and collaboration tools. It uses WebRTC and runs fully on-premises for maximum data control. A good fit for teams already on the Nextcloud ecosystem.",
    "repoUrl": "https://github.com/nextcloud/spreed",
    "websiteUrl": "https://nextcloud.com/talk",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "AGPL-3.0",
    "language": "JavaScript",
    "githubStars": 2146,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires a running Nextcloud installation as a prerequisite\n- Larger group video calls need a separate High Performance Backend (Janus/signaling server) to scale\n- Chat features are less rich than dedicated platforms like Slack\n- Fewer third-party app integrations focused on messaging",
    "tags": [
      "video-calls",
      "webrtc",
      "nextcloud",
      "messaging",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "formbricks",
    "name": "Formbricks",
    "tagline": "Open-source survey and experience management platform with in-app and link surveys",
    "descriptionMd": "Formbricks is an AGPL-licensed survey and experience-management platform for building link surveys, website surveys, and targeted in-app micro-surveys. It includes targeting, multi-language surveys, conditional logic, an integrations layer, and a no-code builder. A generous free cloud tier exists, but it is fully self-hostable via Docker.",
    "repoUrl": "https://github.com/formbricks/formbricks",
    "websiteUrl": "https://formbricks.com",
    "demoUrl": "https://app.formbricks.com",
    "logoUrl": null,
    "categorySlug": "forms-surveys",
    "replaces": [
      "typeform",
      "surveymonkey",
      "google-forms"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 12415,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 1,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Some advanced targeting, SSO/SAML, and access roles are gated behind a paid Enterprise Edition license\n- In-app/website survey focus means it is less of a pure pixel-perfect form builder than Typeform\n- Conversational/one-question-at-a-time UX is less polished than Typeform's signature flow\n- Fewer prebuilt third-party integrations than mature SaaS competitors",
    "tags": [
      "surveys",
      "experience-management",
      "in-app-surveys",
      "nextjs",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "heyform",
    "name": "HeyForm",
    "tagline": "Open-source conversational form builder for creating beautiful interactive forms",
    "descriptionMd": "HeyForm is an open-source form builder for creating conversational, multi-step forms with logic jumps, custom themes, and rich question types. It supports file uploads, payments, and integrations, and ships with multiple one-click deploy templates. It is a close self-hosted analog to Typeform.",
    "repoUrl": "https://github.com/heyform/heyform",
    "websiteUrl": "https://heyform.net",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "forms-surveys",
    "replaces": [
      "typeform",
      "google-forms",
      "jotform"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 8846,
    "lastCommitAt": "2026-06-03",
    "selfHostDifficulty": 1,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Smaller integration catalog than Typeform/Jotform\n- Analytics and reporting are basic compared to commercial tools\n- Requires MongoDB plus Redis, adding operational overhead\n- Fewer prebuilt templates and form themes than the proprietary originals",
    "tags": [
      "forms",
      "conversational-forms",
      "form-builder",
      "self-hosted",
      "mongodb"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "limesurvey",
    "name": "LimeSurvey",
    "tagline": "Mature open-source survey tool with advanced question types and quotas",
    "descriptionMd": "LimeSurvey is a long-established, feature-rich open-source survey application supporting dozens of question types, complex branching, quotas, multilingual surveys, and extensive export options. It is widely used in academia and enterprise for serious survey research. It self-hosts on a standard PHP/MySQL stack.",
    "repoUrl": "https://github.com/LimeSurvey/LimeSurvey",
    "websiteUrl": "https://www.limesurvey.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "forms-surveys",
    "replaces": [
      "surveymonkey",
      "google-forms",
      "typeform"
    ],
    "license": "GPL-2.0",
    "language": "PHP",
    "githubStars": 3646,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Dated UI/admin experience compared to modern SaaS form builders\n- Steeper learning curve due to the sheer breadth of options\n- Manual installation requires configuring PHP, a database, and a web server\n- Form aesthetics are less polished than Typeform out of the box",
    "tags": [
      "surveys",
      "research",
      "php",
      "questionnaire",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "opnform",
    "name": "OpnForm",
    "tagline": "Open-source form builder to create forms and surveys without code",
    "descriptionMd": "OpnForm is an open-source form builder built with Laravel and Vue/Nuxt that lets you create forms and surveys with a no-code interface, conditional logic, custom branding, and integrations. It supports file uploads, webhooks, and embedding. It is fully self-hostable via Docker and also offers a hosted cloud version.",
    "repoUrl": "https://github.com/OpnForm/OpnForm",
    "websiteUrl": "https://opnform.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "forms-surveys",
    "replaces": [
      "typeform",
      "google-forms",
      "jotform"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 3471,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Some features (e.g. advanced branding removal, certain integrations) are reserved for the paid/cloud tier\n- Fewer templates and question types than Jotform\n- Analytics and reporting are lighter than commercial offerings\n- Self-hosting requires a Laravel/PHP + database stack to maintain",
    "tags": [
      "forms",
      "form-builder",
      "laravel",
      "vue",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "ohmyform",
    "name": "OhMyForm",
    "tagline": "Open-source form and survey builder (now archived, succeeded by Formbricks)",
    "descriptionMd": "OhMyForm is an open-source tool for creating embeddable forms and surveys with analytics, logic, and multiple field types. It was an early FOSS Typeform/Google Forms alternative. The project is now archived and read-only, with maintainers recommending Formbricks going forward.",
    "repoUrl": "https://github.com/ohmyform/ohmyform",
    "websiteUrl": "https://ohmyform.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "forms-surveys",
    "replaces": [
      "typeform",
      "google-forms",
      "jotform"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 2892,
    "lastCommitAt": "2024-10-31",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Project is archived and no longer maintained, so there are no new features or security fixes\n- Lacks the polish, integrations, and template library of commercial tools\n- Multi-component setup (app, GraphQL API, database) for limited ongoing value\n- Maintainers themselves now point users to Formbricks",
    "tags": [
      "forms",
      "surveys",
      "archived",
      "self-hosted",
      "graphql"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "chatwoot",
    "name": "Chatwoot",
    "tagline": "Open-source omnichannel live-chat and support desk, an Intercom/Zendesk alternative",
    "descriptionMd": "Chatwoot is an open-source customer engagement and support platform that unifies live chat, email, social messaging (WhatsApp, Facebook, Instagram, Twitter), and an agent inbox into one place. It includes canned responses, automations, agent assignment, CSAT surveys, and a help center/knowledge base. It is one of the most popular and actively developed self-hosted alternatives to Intercom and Zendesk.",
    "repoUrl": "https://github.com/chatwoot/chatwoot",
    "websiteUrl": "https://www.chatwoot.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "intercom",
      "zendesk",
      "freshdesk"
    ],
    "license": "MIT",
    "language": "Ruby",
    "githubStars": 33218,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Newer/advanced features (AI agents, advanced reporting) are gated behind paid Enterprise/cloud tiers\n- Reporting and analytics are less deep than Zendesk Explore\n- No native ITSM/ticketing workflow engine as mature as Zendesk's\n- Telephony/voice support is weaker than the proprietary incumbents",
    "tags": [
      "live-chat",
      "omnichannel",
      "customer-support",
      "shared-inbox",
      "ruby-on-rails"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "uvdesk",
    "name": "UVdesk",
    "tagline": "Open-source Symfony-based helpdesk ticketing system with e-commerce integrations",
    "descriptionMd": "UVdesk is an open-source helpdesk and ticketing system built on Symfony, geared toward e-commerce and SaaS support teams. It provides email piping, ticket workflows/automations, a knowledge base, agent/customer panels, and integrations with platforms like Shopify, Magento, and WooCommerce. It serves as a self-hosted alternative to Zendesk and Freshdesk.",
    "repoUrl": "https://github.com/uvdesk/community-skeleton",
    "websiteUrl": "https://www.uvdesk.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "freshdesk"
    ],
    "license": "OSL-3.0",
    "language": "PHP",
    "githubStars": 19082,
    "lastCommitAt": "2025-10-01",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No native live chat in the core community edition (offered separately)\n- Smaller community and slower release cadence than top alternatives\n- Documentation can be sparse for advanced configuration\n- Reporting and AI capabilities lag the proprietary incumbents",
    "tags": [
      "ticketing",
      "helpdesk",
      "symfony",
      "ecommerce-support",
      "knowledge-base"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "zammad",
    "name": "Zammad",
    "tagline": "Web-based open-source helpdesk and customer support ticketing system",
    "descriptionMd": "Zammad is a feature-rich, web-based open-source helpdesk/ticketing system supporting email, chat, telephone, Twitter, and Facebook channels in one place. It offers SLAs, escalation rules, a knowledge base, full-text search, reporting, and granular role permissions. It is a credible self-hosted alternative to Zendesk and Freshdesk for support teams.",
    "repoUrl": "https://github.com/zammad/zammad",
    "websiteUrl": "https://zammad.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "freshdesk"
    ],
    "license": "AGPL-3.0",
    "language": "Ruby",
    "githubStars": 5708,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Resource-heavy: needs Elasticsearch plus a database, making setup and ops more demanding\n- UI feels dated compared to Zendesk/Intercom\n- No native modern live-chat widget on par with Intercom\n- Smaller marketplace/integration ecosystem than the incumbents",
    "tags": [
      "ticketing",
      "customer-support",
      "knowledge-base",
      "sla",
      "multichannel"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "freescout",
    "name": "FreeScout",
    "tagline": "Free self-hosted shared inbox and help desk, a Help Scout/Zendesk alternative",
    "descriptionMd": "FreeScout is a lightweight, free, self-hosted help desk and shared mailbox built on Laravel. It turns shared email inboxes into collaborative support queues with assignments, notes, tags, and saved replies, and extends via paid modules (live chat, knowledge base, telephony, etc.). It runs on modest shared hosting, making it accessible to small teams replacing Zendesk or Help Scout.",
    "repoUrl": "https://github.com/freescout-help-desk/freescout",
    "websiteUrl": "https://freescout.net",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "freshdesk"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 4358,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Many key capabilities (live chat, knowledge base, automations) require paid first-party modules\n- Core is email/shared-inbox focused, not truly omnichannel out of the box\n- Reporting/analytics are basic compared to Zendesk\n- No official managed cloud hosting from the project",
    "tags": [
      "shared-inbox",
      "help-desk",
      "email-support",
      "laravel",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "osticket",
    "name": "osTicket",
    "tagline": "Widely-deployed open-source support ticketing system",
    "descriptionMd": "osTicket is one of the oldest and most widely deployed open-source support ticketing systems. It routes inquiries from email, web forms, and an API into a unified queue with custom fields, ticket filters, SLAs, canned responses, and agent/department routing. It is a mature, no-frills self-hosted alternative to Zendesk and Freshdesk for ticket-based support.",
    "repoUrl": "https://github.com/osTicket/osTicket",
    "websiteUrl": "https://osticket.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "freshdesk"
    ],
    "license": "GPL-2.0",
    "language": "PHP",
    "githubStars": 3801,
    "lastCommitAt": "2026-06-17",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Dated UI/UX compared to modern incumbents\n- No built-in live chat or modern messaging channels\n- Limited automation and no native AI features\n- Reporting is basic relative to Zendesk Explore",
    "tags": [
      "ticketing",
      "customer-support",
      "email-support",
      "php",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "peppermint",
    "name": "Peppermint",
    "tagline": "Open-source ticket management and helpdesk, a Zendesk/Jira alternative",
    "descriptionMd": "Peppermint is a modern open-source ticket management and help desk solution built with Next.js and a Node backend. It focuses on a clean UI for managing support tickets, internal notes, a client portal, email integration, and a documentation/notebook feature. It positions itself as a self-hosted alternative to Zendesk and Jira Service Management for smaller teams.",
    "repoUrl": "https://github.com/Peppermint-Lab/peppermint",
    "websiteUrl": "https://peppermint.sh",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "jira",
      "freshdesk"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 3133,
    "lastCommitAt": "2025-09-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Younger project; feature set is narrower than mature incumbents\n- No native live chat or full omnichannel messaging\n- Limited automation, SLA, and reporting depth vs Zendesk\n- Smaller integration ecosystem and no official managed cloud",
    "tags": [
      "ticketing",
      "helpdesk",
      "nextjs",
      "self-hosted",
      "client-portal"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "helpy",
    "name": "Helpy",
    "tagline": "Open-source customer support and community knowledge base platform",
    "descriptionMd": "Helpy is an open-source customer support platform built in Ruby on Rails that combines a multilingual knowledge base, community Q&A forums, and an email-based ticketing system. It emphasizes self-service deflection alongside agent support. It is a self-hosted alternative to Zendesk for teams wanting a knowledge-base-first support experience, though development has slowed significantly.",
    "repoUrl": "https://github.com/helpyio/helpy",
    "websiteUrl": "https://helpy.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "freshdesk"
    ],
    "license": "MIT",
    "language": "Ruby",
    "githubStars": 2483,
    "lastCommitAt": "2023-03-08",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Effectively stale: very little recent maintenance or new releases\n- No modern live chat or omnichannel messaging\n- Limited automation, SLAs, and reporting vs Zendesk\n- Dated UI and small/inactive community",
    "tags": [
      "knowledge-base",
      "community-forum",
      "ticketing",
      "ruby-on-rails",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "grafana",
    "name": "Grafana",
    "tagline": "Observability and analytics dashboards for metrics, logs, and time series",
    "descriptionMd": "Grafana is the leading open-source platform for visualizing metrics, logs, and traces across many data sources. While best known for observability, it is widely used for general BI-style dashboards and real-time monitoring. It offers powerful alerting, a huge plugin ecosystem, and flexible dashboard composition.",
    "repoUrl": "https://github.com/grafana/grafana",
    "websiteUrl": "https://grafana.com",
    "demoUrl": "https://play.grafana.org",
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "power-bi",
      "datadog"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 74594,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Oriented toward time-series and observability, not ad-hoc business analytics or pivot-style exploration\n- No business-friendly visual query builder; dashboards assume knowledge of data sources and query languages\n- Weak at relational/tabular BI reporting compared to Tableau or Power BI\n- No semantic modeling layer; data modeling lives in the underlying sources",
    "tags": [
      "dashboards",
      "observability",
      "metrics",
      "monitoring",
      "time-series"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "apache-superset",
    "name": "Apache Superset",
    "tagline": "Enterprise-ready BI web app for data exploration and dashboards",
    "descriptionMd": "Apache Superset is a modern, enterprise-grade business intelligence platform for exploring and visualizing data. It offers a no-code chart builder, a powerful SQL Lab IDE, and rich interactive dashboards backed by a wide range of SQL databases. Originally built at Airbnb, it is now a top-level Apache project with a large community.",
    "repoUrl": "https://github.com/apache/superset",
    "websiteUrl": "https://superset.apache.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 73435,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No native desktop authoring app like Tableau Desktop; all work happens in the browser\n- Visualization customization is less polished and flexible than Tableau's drag-and-drop canvas\n- No built-in semantic/modeling layer comparable to Looker's LookML (relies on external tools)\n- Steeper learning curve and heavier infrastructure (Celery, Redis, metadata DB) for production",
    "tags": [
      "dashboards",
      "sql",
      "data-visualization",
      "analytics",
      "apache"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "metabase",
    "name": "Metabase",
    "tagline": "Easy-to-use open-source BI and embedded analytics for everyone",
    "descriptionMd": "Metabase is an open-source business intelligence tool designed so non-technical users can ask questions about data and build dashboards without writing SQL. It supports a visual query builder, native SQL, alerts, and embedding. It is one of the easiest BI tools to self-host and get value from quickly.",
    "repoUrl": "https://github.com/metabase/metabase",
    "websiteUrl": "https://www.metabase.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "power-bi",
      "looker"
    ],
    "license": "AGPL-3.0",
    "language": "Clojure",
    "githubStars": 47804,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Advanced data modeling, row-level security, and SSO are gated behind the paid Pro/Enterprise editions\n- Charting and visualization depth is more limited than Tableau or Power BI\n- No deep semantic modeling layer like Looker's LookML\n- Performance can degrade on very large datasets without careful tuning or caching",
    "tags": [
      "dashboards",
      "no-code",
      "embedded-analytics",
      "sql",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "redash",
    "name": "Redash",
    "tagline": "Connect, query, visualize, and share data from any SQL or NoSQL source",
    "descriptionMd": "Redash is an open-source tool for querying data sources, building visualizations, and assembling dashboards. It centers on a browser-based SQL editor with support for 35+ data sources, scheduled query refreshes, and alerting. It is a lightweight choice for SQL-first teams that want shareable dashboards.",
    "repoUrl": "https://github.com/getredash/redash",
    "websiteUrl": "https://redash.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "BSD-2-Clause",
    "language": "Python",
    "githubStars": 28652,
    "lastCommitAt": "2026-06-14",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- SQL-centric: limited value for non-technical users versus Tableau/Power BI drag-and-drop\n- Visualization variety and interactivity are basic compared to leading commercial BI\n- No semantic modeling layer and limited governance/RBAC features\n- Development pace slowed for a period after the Databricks acquisition; community-driven releases",
    "tags": [
      "sql",
      "dashboards",
      "query-tool",
      "data-visualization",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "evidence",
    "name": "Evidence",
    "tagline": "Code-based BI: build data reports and dashboards with SQL and Markdown",
    "descriptionMd": "Evidence is an open-source, code-based BI tool that lets you write reports as Markdown files mixed with SQL queries and chart components. It compiles to a fast static web app, making analytics version-controllable and reviewable like code. It suits engineering-minded teams who want reproducible, polished data products instead of click-built dashboards.",
    "repoUrl": "https://github.com/evidence-dev/evidence",
    "websiteUrl": "https://evidence.dev",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "MIT",
    "language": "JavaScript",
    "githubStars": 6486,
    "lastCommitAt": "2026-02-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual",
      "One-Click"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Code-first workflow excludes non-technical, point-and-click business users\n- Not designed for interactive ad-hoc exploration; reports are authored, not browsed freely\n- No drag-and-drop visual builder or pivot-table exploration like Tableau/Power BI\n- Limited governance, permissions, and live-querying features compared to enterprise BI",
    "tags": [
      "code-based-bi",
      "sql",
      "markdown",
      "static-site",
      "reports"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "lightdash",
    "name": "Lightdash",
    "tagline": "BI layer on top of your dbt project with a built-in semantic layer",
    "descriptionMd": "Lightdash is an open-source BI tool that connects directly to your dbt project, turning dbt metrics and dimensions into a governed, self-serve analytics layer. It gives non-technical users a point-and-click explorer while keeping all definitions version-controlled in dbt. It is a strong Looker alternative for teams already using dbt.",
    "repoUrl": "https://github.com/lightdash/lightdash",
    "websiteUrl": "https://www.lightdash.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "looker",
      "tableau",
      "power-bi"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 5906,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Requires a dbt project; not usable as a standalone BI tool without dbt modeling\n- Smaller chart/visualization library than Tableau or Power BI\n- Some governance, embedding, and enterprise features are reserved for the paid cloud tiers\n- Younger ecosystem with fewer connectors and a smaller community than the incumbents",
    "tags": [
      "dbt",
      "semantic-layer",
      "self-serve-bi",
      "dashboards",
      "analytics"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "rill",
    "name": "Rill",
    "tagline": "Fast operational BI with embedded OLAP for interactive dashboards",
    "descriptionMd": "Rill is an open-source BI tool focused on speed, pairing embedded OLAP engines like DuckDB and ClickHouse with explore and canvas dashboards. It emphasizes a local-first developer experience where dashboards are defined as code and rendered with sub-second interactivity. It targets operational analytics where query latency matters.",
    "repoUrl": "https://github.com/rilldata/rill",
    "websiteUrl": "https://www.rilldata.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 2670,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual",
      "Kubernetes"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Narrower visualization set than Tableau/Power BI, focused on time-series and metrics dashboards\n- Dashboards are defined in code/YAML, less approachable for non-technical authors\n- Smaller connector ecosystem; centered on OLAP engines like DuckDB and ClickHouse\n- Younger project with a smaller community and fewer enterprise governance features",
    "tags": [
      "olap",
      "duckdb",
      "clickhouse",
      "dashboards",
      "operational-analytics"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "datalens",
    "name": "DataLens",
    "tagline": "Yandex's open-source BI and data visualization system",
    "descriptionMd": "DataLens is a modern, scalable BI and data visualization system open-sourced by Yandex, where it served as the primary internal BI tool. It provides connectors, datasets, a charting engine, and interactive dashboards through a no-code interface. It targets teams wanting a self-hosted, full-featured BI alternative.",
    "repoUrl": "https://github.com/datalens-tech/datalens",
    "websiteUrl": "https://datalens.tech",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "power-bi",
      "looker"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 1688,
    "lastCommitAt": "2026-06-14",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Ships with a limited set of connectors (ClickHouse, PostgreSQL) compared to commercial BI\n- Documentation and community are smaller and partly Russian-language oriented\n- Multi-service architecture makes self-hosting more involved than lightweight alternatives\n- Fewer advanced governance, modeling, and enterprise integrations than Tableau/Power BI",
    "tags": [
      "dashboards",
      "data-visualization",
      "yandex",
      "no-code",
      "analytics"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "uptime-kuma",
    "name": "Uptime Kuma",
    "tagline": "Fancy self-hosted uptime monitoring with a beautiful dashboard and status pages",
    "descriptionMd": "Uptime Kuma is a self-hosted monitoring tool that watches HTTP(s), TCP, ping, DNS, and more, with a polished real-time dashboard. It supports 90+ notification channels (Slack, Telegram, email, Discord, webhooks) and can publish public status pages. It is by far the most popular open-source replacement for UptimeRobot.",
    "repoUrl": "https://github.com/louislam/uptime-kuma",
    "websiteUrl": "https://uptime.kuma.pet",
    "demoUrl": "https://demo.uptime.kuma.pet",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "uptimerobot",
      "pingdom",
      "statuspage"
    ],
    "license": "MIT",
    "language": "JavaScript",
    "githubStars": 88301,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Single-node by design; no built-in multi-region / global probe network like Pingdom or UptimeRobot Pro\n- Status pages are simpler than Statuspage.io (limited custom domains UX, no subscriber-tier management, fewer branding controls)\n- No SLA reporting/analytics depth or team RBAC found in commercial offerings\n- Scaling to thousands of monitors can strain the single SQLite/MariaDB backend",
    "tags": [
      "uptime",
      "status-page",
      "self-hosted",
      "notifications",
      "monitoring"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "netdata",
    "name": "Netdata",
    "tagline": "Real-time, high-resolution infrastructure monitoring with per-second metrics",
    "descriptionMd": "Netdata is a real-time performance and health monitoring system for systems, containers, and applications, collecting thousands of per-second metrics with zero configuration. It auto-discovers metrics, builds dashboards instantly, and includes ML-based anomaly detection and alerting. It is a strong self-hosted alternative to Datadog for infrastructure observability.",
    "repoUrl": "https://github.com/netdata/netdata",
    "websiteUrl": "https://www.netdata.cloud",
    "demoUrl": "https://app.netdata.cloud/spaces/netdata-demo",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "datadog"
    ],
    "license": "GPL-3.0",
    "language": "C",
    "githubStars": 79349,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Long-term retention and cross-node correlation push you toward Netdata Cloud (the free local agent keeps short history by default)\n- APM/distributed tracing and log management are weaker than Datadog's full suite\n- No public status page feature\n- Centralized multi-node management of many agents is easiest via the cloud offering",
    "tags": [
      "observability",
      "metrics",
      "real-time",
      "infrastructure",
      "anomaly-detection"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "prometheus",
    "name": "Prometheus",
    "tagline": "Industry-standard metrics monitoring and alerting toolkit with PromQL",
    "descriptionMd": "Prometheus is the de facto open-source standard for metrics-based monitoring and alerting, pulling time-series data from instrumented targets and querying it with PromQL. It includes Alertmanager for routing alerts and integrates with countless exporters. Paired with Grafana, it forms the most common self-hosted alternative to Datadog metrics.",
    "repoUrl": "https://github.com/prometheus/prometheus",
    "websiteUrl": "https://prometheus.io",
    "demoUrl": "https://demo.promlabs.com",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "datadog"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 64695,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in dashboards UI; you must pair it with Grafana\n- Long-term storage and horizontal scale need add-ons (Thanos, Cortex, Mimir)\n- No logs, traces, or APM out of the box (metrics only)\n- Steeper operational learning curve than turnkey Datadog",
    "tags": [
      "metrics",
      "time-series",
      "alerting",
      "promql",
      "cncf"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "signoz",
    "name": "SigNoz",
    "tagline": "Open-source APM and observability for metrics, traces, and logs in one app",
    "descriptionMd": "SigNoz is an open-source observability platform built on OpenTelemetry that unifies application performance monitoring, distributed tracing, metrics, and logs in a single tool. It offers out-of-the-box APM charts, service maps, and exceptions tracking backed by ClickHouse. It is one of the most direct full-stack open-source alternatives to Datadog.",
    "repoUrl": "https://github.com/SigNoz/signoz",
    "websiteUrl": "https://signoz.io",
    "demoUrl": "https://signoz.io",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "datadog"
    ],
    "license": "MIT",
    "language": "TypeScript",
    "githubStars": 27414,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Runs a heavier stack (ClickHouse + OTel collector + multiple services), needing more resources than lightweight monitors\n- Some advanced features and SSO are reserved for the cloud/enterprise tier\n- No public status page or simple uptime checks like UptimeRobot\n- Younger ecosystem than Datadog; fewer turnkey integrations",
    "tags": [
      "apm",
      "opentelemetry",
      "tracing",
      "logs",
      "observability"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "victoriametrics",
    "name": "VictoriaMetrics",
    "tagline": "Fast, cost-efficient time-series database and monitoring drop-in for Prometheus",
    "descriptionMd": "VictoriaMetrics is a fast, resource-efficient open-source time-series database and monitoring solution that is a drop-in replacement for Prometheus. It supports PromQL/MetricsQL, long-term storage, clustering, and high-cardinality workloads at lower cost. It is commonly used as the scalable metrics backend in a self-hosted Datadog-style stack.",
    "repoUrl": "https://github.com/VictoriaMetrics/VictoriaMetrics",
    "websiteUrl": "https://victoriametrics.com",
    "demoUrl": "https://play.victoriametrics.com",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "datadog"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 17195,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Primarily a metrics backend; needs Grafana for dashboards and vmalert for alerting\n- No logs/traces/APM in the core product (separate VictoriaLogs project for logs)\n- No public status page or synthetic uptime checks\n- Assembling a full observability suite requires multiple components",
    "tags": [
      "time-series",
      "metrics",
      "prometheus-compatible",
      "tsdb",
      "scalable"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "cachet",
    "name": "Cachet",
    "tagline": "Open-source, self-hosted status page system for communicating incidents",
    "descriptionMd": "Cachet is a self-hosted status page system written in PHP (Laravel) focused purely on communicating system status and incidents to users. It supports components, incidents, scheduled maintenance, metrics, and subscriber notifications. It is the closest open-source equivalent to Atlassian Statuspage.",
    "repoUrl": "https://github.com/cachethq/cachet",
    "websiteUrl": "https://cachethq.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "statuspage"
    ],
    "license": "BSD-3-Clause",
    "language": "PHP",
    "githubStars": 15101,
    "lastCommitAt": "2026-06-01",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Status page only; it does NOT actively monitor your services (you must push incidents via API or integrate a monitor)\n- No built-in synthetic checks like Pingdom/UptimeRobot\n- The v3 rewrite went through long periods of slow development and reorganization\n- Fewer polished integrations and subscriber-tier features than Atlassian Statuspage",
    "tags": [
      "status-page",
      "incidents",
      "laravel",
      "php",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "gatus",
    "name": "Gatus",
    "tagline": "Developer-oriented health dashboard with declarative YAML config and status pages",
    "descriptionMd": "Gatus is a lightweight, developer-focused health dashboard that monitors HTTP, TCP, ICMP, DNS, and more using declarative YAML conditions. It generates a status page out of the box and integrates alerting with Slack, Teams, PagerDuty, Discord, and others. It is a single Go binary, making it trivial to deploy in Kubernetes or Docker.",
    "repoUrl": "https://github.com/TwiN/gatus",
    "websiteUrl": "https://gatus.io",
    "demoUrl": "https://status.twin.sh",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "uptimerobot",
      "statuspage",
      "pingdom"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 11309,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Configuration is YAML-only; no UI to add/edit monitors (less friendly than UptimeRobot's dashboard)\n- Status pages are basic compared to Statuspage.io (no incident timeline workflow, subscriber management, or component grouping UX)\n- No built-in multi-region probing without running multiple instances\n- Limited historical analytics / long-term reporting",
    "tags": [
      "health-check",
      "status-page",
      "yaml",
      "kubernetes",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "healthchecks",
    "name": "Healthchecks",
    "tagline": "Cron job and scheduled task monitoring with dead man's switch alerting",
    "descriptionMd": "Healthchecks is a self-hosted monitoring service for cron jobs and scheduled tasks. Your jobs send HTTP or email pings; if a ping does not arrive on time, Healthchecks alerts you across 25+ integrations. It complements uptime monitoring by catching background jobs that silently fail, an area UptimeRobot does not cover well.",
    "repoUrl": "https://github.com/healthchecks/healthchecks",
    "websiteUrl": "https://healthchecks.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "uptimerobot",
      "pingdom"
    ],
    "license": "BSD-3-Clause",
    "language": "Python",
    "githubStars": 10110,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Focused on cron/heartbeat monitoring; it does NOT actively poll URLs for uptime like Pingdom/UptimeRobot\n- No status page feature\n- Manual setup requires configuring PostgreSQL/MySQL, SMTP, and a worker; Docker images are community-driven\n- No synthetic transaction or multi-region checks",
    "tags": [
      "cron-monitoring",
      "heartbeat",
      "dead-mans-switch",
      "python",
      "alerting"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "openstatus",
    "name": "OpenStatus",
    "tagline": "Open-source uptime monitoring and status page platform with global probes",
    "descriptionMd": "OpenStatus is a modern open-source synthetic monitoring and status page platform built with TypeScript. It monitors servers, websites, and APIs from multiple global regions and publishes status pages with incident management, maintenance windows, and subscriber notifications. It directly targets both Pingdom-style monitoring and Statuspage-style communication.",
    "repoUrl": "https://github.com/openstatusHQ/openstatus",
    "websiteUrl": "https://www.openstatus.dev",
    "demoUrl": "https://www.openstatus.dev",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "pingdom",
      "uptimerobot",
      "statuspage"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 8764,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosting is non-trivial: depends on services like Turso/SQLite, Tinybird, and serverless checkers; the OSS path is less documented than the cloud product\n- Global multi-region probing is most seamless on their hosted cloud, not self-host\n- Younger project; fewer integrations than mature commercial tools\n- Some advanced features are gated toward the managed offering",
    "tags": [
      "uptime",
      "status-page",
      "synthetic-monitoring",
      "typescript",
      "global"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "zabbix",
    "name": "Zabbix",
    "tagline": "Enterprise-grade real-time monitoring for networks, servers, and applications",
    "descriptionMd": "Zabbix is a mature, enterprise-grade open-source monitoring solution for networks, servers, VMs, applications, and cloud services. It offers agent-based and agentless collection, flexible triggers, templating, distributed proxies, and rich alerting. It is a long-standing self-hosted alternative to Datadog for infrastructure and network monitoring.",
    "repoUrl": "https://github.com/zabbix/zabbix",
    "websiteUrl": "https://www.zabbix.com",
    "demoUrl": "https://www.zabbix.com/zabbix_demo",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "datadog"
    ],
    "license": "AGPL-3.0",
    "language": "C",
    "githubStars": 5998,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Setup and configuration are complex; steep learning curve (database, server, frontend, proxies)\n- Dated UI compared to modern SaaS dashboards\n- No SaaS/managed tier from the project itself\n- APM/tracing and modern log analytics are weaker than Datadog's offering",
    "tags": [
      "network-monitoring",
      "infrastructure",
      "alerting",
      "enterprise",
      "agents"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "cabot",
    "name": "Cabot",
    "tagline": "Self-hosted monitoring and alerting, a free PagerDuty/Pingdom alternative",
    "descriptionMd": "Cabot is a self-hosted monitoring and alerting server built with Django that watches services via Graphite metrics, Jenkins, and HTTP checks, then alerts via SMS, phone, email, and Slack. It was created as a free alternative to PagerDuty and Pingdom for small teams. Note that the project is stable but no longer actively maintained.",
    "repoUrl": "https://github.com/arachnys/cabot",
    "websiteUrl": "https://cabotapp.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "pingdom",
      "uptimerobot"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 5666,
    "lastCommitAt": "2023-09-10",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Not actively maintained; the maintainers are seeking new owners and releases stopped years ago\n- Older Django/Python stack with dated dependencies\n- No public status page feature\n- No multi-region probing; limited to single-instance checks",
    "tags": [
      "alerting",
      "monitoring",
      "django",
      "self-hosted",
      "stale"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "statping-ng",
    "name": "Statping-NG",
    "tagline": "Status page and service monitoring with a self-contained binary, drop-in for Statping",
    "descriptionMd": "Statping-NG is a community-maintained continuation of Statping, a status page and service monitoring tool. It checks HTTP, TCP, and gRPC endpoints, records response times, and renders a customizable status page with charts. It ships as a single binary or Docker image and can send alerts to many notifier channels.",
    "repoUrl": "https://github.com/statping-ng/statping-ng",
    "websiteUrl": "https://statping-ng.github.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "uptimerobot",
      "statuspage",
      "pingdom"
    ],
    "license": "GPL-3.0",
    "language": "Go",
    "githubStars": 1981,
    "lastCommitAt": "2025-06-04",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Development pace is slow and community-driven; releases are infrequent\n- Single-region checks only; no global probe network\n- Status page customization is more limited than Statuspage.io\n- Smaller ecosystem and fewer integrations than commercial alternatives",
    "tags": [
      "status-page",
      "uptime",
      "go",
      "self-hosted",
      "monitoring"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "vigil",
    "name": "Vigil",
    "tagline": "Microservices status page in Rust that monitors infrastructure and alerts",
    "descriptionMd": "Vigil is a lightweight microservices status page written in Rust. It monitors distributed infrastructure (HTTP, TCP, ICMP, and local push-based reporters) and sends alerts via Slack, SMS (Twilio), email, and more. It produces a clean public status page and is designed to be resource-efficient.",
    "repoUrl": "https://github.com/valeriansaliou/vigil",
    "websiteUrl": "https://github.com/valeriansaliou/vigil",
    "demoUrl": "https://status.crisp.chat",
    "logoUrl": null,
    "categorySlug": "monitoring",
    "replaces": [
      "statuspage",
      "uptimerobot"
    ],
    "license": "MPL-2.0",
    "language": "Rust",
    "githubStars": 1930,
    "lastCommitAt": "2026-05-03",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Configuration is TOML-file based with no admin UI\n- Status page and incident workflow are simpler than Statuspage.io (no subscriber management or incident history UX)\n- Single-region probing\n- Smaller community and fewer integrations than commercial products",
    "tags": [
      "status-page",
      "rust",
      "microservices",
      "alerting",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "cal-com",
    "name": "Cal.com",
    "tagline": "Scheduling infrastructure for everyone, the open-source Calendly alternative",
    "descriptionMd": "Cal.com (formerly Calendso) is the leading open-source scheduling platform. It supports event types, team scheduling, round-robin, collective availability, calendar sync (Google, Outlook, CalDAV), payments via Stripe, and an extensive app/integration ecosystem. It can be self-hosted or used via its managed cloud, and offers a full API and white-labeling.",
    "repoUrl": "https://github.com/calcom/cal.com",
    "websiteUrl": "https://cal.com",
    "demoUrl": "https://app.cal.com",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 45737,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Some enterprise features (e.g. SAML SSO, advanced admin/insights, certain platform features) are gated behind a commercial/EE license even when self-hosting.\n- Self-hosting requires PostgreSQL plus configuring numerous environment variables and OAuth credentials for calendar integrations.\n- The core code is AGPL-3.0, which imposes copyleft obligations on modified network deployments.\n- Upgrades between major versions occasionally require manual database migration work.",
    "tags": [
      "scheduling",
      "booking",
      "calendar",
      "appointments",
      "meetings",
      "calendly-alternative"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "rallly",
    "name": "Rallly",
    "tagline": "Self-hosted scheduling polls to find the best time for a group to meet",
    "descriptionMd": "Rallly is an open-source group scheduling and meeting-poll tool. Instead of fixed booking pages, it lets an organizer propose multiple dates/times and have participants vote on their availability, Doodle-style, to converge on the best slot. It is built with Next.js, Prisma and PostgreSQL, and offers both self-hosting and a managed cloud.",
    "repoUrl": "https://github.com/lukevella/rallly",
    "websiteUrl": "https://rallly.co",
    "demoUrl": "https://app.rallly.co",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly"
    ],
    "license": "AGPL-3.0",
    "language": "TypeScript",
    "githubStars": 5132,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Focused on group availability polling rather than one-on-one booking pages, so it does not replace Calendly's personal booking links.\n- No direct calendar-availability checking or two-way calendar sync to auto-block busy times.\n- No built-in payment collection or paid-appointment support.\n- Requires PostgreSQL and SMTP configuration to self-host; not a single-binary deploy.",
    "tags": [
      "scheduling",
      "meeting-poll",
      "doodle-alternative",
      "group-scheduling",
      "availability"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "easy-appointments",
    "name": "Easy!Appointments",
    "tagline": "Self-hosted appointment scheduler for service businesses with provider and service management",
    "descriptionMd": "Easy!Appointments is a lightweight, self-hosted web application that lets customers book appointments online. It is geared toward service businesses, with multi-provider and multi-service scheduling, working plans, booking rules, customer management, email notifications, and two-way Google Calendar sync. It runs on a simple PHP/MySQL stack.",
    "repoUrl": "https://github.com/alextselegidis/easyappointments",
    "websiteUrl": "https://easyappointments.org",
    "demoUrl": "https://easyappointments.org/demo",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "acuity",
      "calendly"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 4228,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in payment collection at booking time, unlike Acuity/Calendly paid tiers.\n- Calendar sync is limited to Google Calendar; no native Outlook/Office 365 or CalDAV support.\n- The UI and admin experience feel dated compared to commercial products.\n- Lacks advanced features like automated reminder workflows, packages/memberships, and intake form logic found in Acuity.",
    "tags": [
      "appointments",
      "booking",
      "scheduling",
      "php",
      "acuity-alternative",
      "service-business"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "tymeslot",
    "name": "Tymeslot",
    "tagline": "Elixir/Phoenix meeting scheduling platform you can self-host",
    "descriptionMd": "Tymeslot is an open-source meeting scheduling platform built with Elixir, Phoenix and LiveView. It provides Calendly-style booking pages with calendar integration, automatic video room creation, and multi-timezone support, and can be self-hosted or used via its managed cloud. It runs on the BEAM/OTP runtime with PostgreSQL.",
    "repoUrl": "https://github.com/Tymeslot/tymeslot",
    "websiteUrl": "https://tymeslot.app",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly"
    ],
    "license": "Elastic-2.0",
    "language": "Elixir",
    "githubStars": 102,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Younger and smaller project than Cal.com, with a more limited integration and app ecosystem.\n- Licensed under the Elastic License 2.0, which is source-available rather than OSI-approved open source and restricts offering it as a competing managed service.\n- Fewer calendar providers and payment options than mature commercial tools.\n- Self-hosting requires an Elixir/OTP and PostgreSQL setup, which is less familiar to many ops teams.",
    "tags": [
      "scheduling",
      "booking",
      "elixir",
      "phoenix",
      "calendly-alternative",
      "meetings"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "croodle",
    "name": "Croodle",
    "tagline": "End-to-end encrypted scheduling and polling tool with no database required",
    "descriptionMd": "Croodle is a privacy-focused, self-hosted scheduling and polling web app similar to Doodle. Organizers create a poll to find a meeting date or to vote on any topic, and all data is encrypted client-side with AES before being stored, so the server never sees plaintext. It is a small Ember.js front end backed by a minimal PHP API and needs no database server.",
    "repoUrl": "https://github.com/jelhan/croodle",
    "websiteUrl": "https://croodle.org",
    "demoUrl": "https://demo.croodle.org",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly"
    ],
    "license": "MIT",
    "language": "JavaScript",
    "githubStars": 210,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Development is largely stalled (last release in 2023), so it is effectively in maintenance mode.\n- Poll/date-finding only; it is not a personal booking system and has no calendar sync.\n- No payments, reminders, or team features.\n- Setup requires deploying the static front end plus the PHP backend and writable storage; documentation is sparse.",
    "tags": [
      "polling",
      "scheduling",
      "encrypted",
      "doodle-alternative",
      "privacy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "archived",
    "source": "curated:initial"
  },
  {
    "slug": "coolify",
    "name": "Coolify",
    "tagline": "Self-hostable Heroku/Netlify alternative for apps, databases, and services",
    "descriptionMd": "Coolify is an open-source, self-hostable PaaS that lets you deploy applications, databases, and services to your own servers with a friendly UI. It supports Git-based deploys, automatic SSL, Docker/Nixpacks builds, preview deployments, and one-click services. It is one of the most popular self-hosted alternatives to Heroku, Vercel, and Netlify.",
    "repoUrl": "https://github.com/coollabsio/coolify",
    "websiteUrl": "https://coolify.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "vercel",
      "netlify",
      "render"
    ],
    "license": "Apache-2.0",
    "language": "PHP",
    "githubStars": 57284,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "One-Click",
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No managed global edge/CDN network; you run on your own VPS so global latency and DDoS protection are your responsibility.\n- Scaling is largely single-server by default; multi-node clustering is less mature than cloud autoscalers.\n- Built-in observability (logs/metrics/tracing) is basic compared to Heroku/Render dashboards.\n- Some advanced features and polish still in flux; occasional breaking changes between releases.",
    "tags": [
      "paas",
      "self-hosted",
      "docker",
      "deployment",
      "git-deploy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "1panel",
    "name": "1Panel",
    "tagline": "Modern Linux server and web-app management panel with app store deploys",
    "descriptionMd": "1Panel is a modern, open-source web-based server management panel for Linux. It provides a graphical UI for hosting websites, managing Docker containers, databases, files, and SSL certificates, plus an app store for one-click deployment of popular software. It serves as a self-hosted alternative for running and managing apps the way you would on Heroku or Render.",
    "repoUrl": "https://github.com/1Panel-dev/1Panel",
    "websiteUrl": "https://1panel.cn",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render"
    ],
    "license": "GPL-3.0",
    "language": "Go",
    "githubStars": 35950,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- More of a server/hosting control panel than a git-push PaaS; no native buildpack or git-deploy pipeline.\n- No horizontal autoscaling or clustering across nodes.\n- Documentation and community are strongest in Chinese; English resources lag.\n- No managed cloud option or edge/CDN.",
    "tags": [
      "control-panel",
      "self-hosted",
      "docker",
      "app-store",
      "linux"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "dokploy",
    "name": "Dokploy",
    "tagline": "Self-hosted PaaS to deploy apps and databases with Docker and Traefik",
    "descriptionMd": "Dokploy is an open-source platform-as-a-service that positions itself as an alternative to Vercel, Netlify, and Heroku. It uses Docker Swarm and Traefik under the hood, offering Git-based deployments, Docker Compose support, databases, automatic SSL, and a clean dashboard. It also supports multi-server deployments.",
    "repoUrl": "https://github.com/Dokploy/dokploy",
    "websiteUrl": "https://dokploy.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "vercel",
      "netlify",
      "render"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 35027,
    "lastCommitAt": "2026-06-17",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Licensing has proprietary portions (not fully permissive for all uses), unlike a pure OSS PaaS.\n- No managed edge CDN or global anycast network; you supply the infrastructure.\n- Relies on Docker Swarm, which is less actively developed than Kubernetes for large-scale orchestration.\n- Observability and team/RBAC features are thinner than commercial platforms.",
    "tags": [
      "paas",
      "self-hosted",
      "docker-swarm",
      "traefik",
      "deployment"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "dokku",
    "name": "Dokku",
    "tagline": "Docker-powered mini-Heroku you run on a single server",
    "descriptionMd": "Dokku is a lightweight, extensible, Docker-powered PaaS that helps you build and manage the lifecycle of applications on a single host. It supports Heroku buildpacks, Dockerfiles, and git push deploys, making it the classic open-source mini-Heroku. A rich plugin ecosystem adds databases, SSL, and more.",
    "repoUrl": "https://github.com/dokku/dokku",
    "websiteUrl": "https://dokku.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render"
    ],
    "license": "MIT",
    "language": "Shell",
    "githubStars": 31951,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Primarily single-server; no built-in horizontal scaling or clustering like cloud PaaS.\n- CLI-first with no official web UI (community UIs exist but are unofficial).\n- No managed CDN/edge, autoscaling, or integrated team management.\n- Initial setup and plugin configuration require comfort with the Linux command line.",
    "tags": [
      "paas",
      "self-hosted",
      "buildpacks",
      "docker",
      "git-deploy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "caprover",
    "name": "CapRover",
    "tagline": "Scalable PaaS with automated Docker and nginx for one-click app deploys",
    "descriptionMd": "CapRover is a free and open-source PaaS that automates Docker and nginx to deploy apps without deep DevOps knowledge. It offers a web dashboard, one-click app templates (databases, WordPress, etc.), automatic HTTPS via Let's Encrypt, and Docker Swarm-based clustering for scaling across nodes.",
    "repoUrl": "https://github.com/caprover/caprover",
    "websiteUrl": "https://caprover.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "render"
    ],
    "license": "Apache-2.0",
    "language": "TypeScript",
    "githubStars": 15066,
    "lastCommitAt": "2026-05-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No official managed cloud offering; you operate everything yourself.\n- Relies on Docker Swarm, whose ecosystem momentum has slowed versus Kubernetes.\n- Logging/metrics and preview-deploy workflows are more limited than Heroku/Vercel.\n- UI and one-click catalog feel dated compared to newer PaaS tools.",
    "tags": [
      "paas",
      "self-hosted",
      "docker-swarm",
      "nginx",
      "one-click"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "devtron",
    "name": "Devtron",
    "tagline": "Kubernetes-native software delivery platform with app dashboards and CI/CD",
    "descriptionMd": "Devtron is an open-source, Kubernetes-native delivery platform that unifies CI/CD, GitOps, security scanning, observability, and a no-code app management dashboard. It gives teams a Heroku/Render-like deployment experience on top of Kubernetes with fine-grained RBAC and multi-cluster support.",
    "repoUrl": "https://github.com/devtron-labs/devtron",
    "websiteUrl": "https://devtron.ai",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 5515,
    "lastCommitAt": "2026-06-10",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Heavy, multi-component architecture aimed at platform teams; overkill for a simple single-app deploy.\n- Requires Kubernetes plus Helm expertise to install and operate.\n- Steeper learning curve and more moving parts than lightweight PaaS tools.\n- Resource-hungry; not suited to a small single VPS.",
    "tags": [
      "kubernetes",
      "cicd",
      "gitops",
      "self-hosted",
      "platform"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "kubero",
    "name": "Kubero",
    "tagline": "Self-service, Heroku-like PaaS that runs on your Kubernetes cluster",
    "descriptionMd": "Kubero is an open-source PaaS that brings a Heroku-style developer experience to Kubernetes. It provides a web UI and CLI for git-based deployments, buildpacks/Dockerfiles, pipelines with review apps, add-on databases, and one-click app templates, all backed by your own Kubernetes cluster.",
    "repoUrl": "https://github.com/kubero-dev/kubero",
    "websiteUrl": "https://www.kubero.dev",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "GPL-3.0",
    "language": "TypeScript",
    "githubStars": 4320,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires an existing, properly configured Kubernetes cluster, which raises the operational bar significantly.\n- Smaller community and ecosystem than the leading PaaS projects.\n- Fewer one-click add-ons and integrations than Heroku's marketplace.\n- No managed hosting or edge/CDN; everything depends on your cluster.",
    "tags": [
      "paas",
      "kubernetes",
      "self-hosted",
      "review-apps",
      "git-deploy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "aapanel",
    "name": "aaPanel",
    "tagline": "Web-based hosting control panel for deploying and managing web apps",
    "descriptionMd": "aaPanel is an open-source, web-based control panel that simplifies running web servers and applications on Linux. It offers one-click LNMP/LAMP stack setup, website and database management, SSL, a web terminal, and an app store, giving a self-hosted way to deploy and host sites and apps without manual server configuration.",
    "repoUrl": "https://github.com/aaPanel/aaPanel",
    "websiteUrl": "https://www.aapanel.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render"
    ],
    "license": "Other",
    "language": "Python",
    "githubStars": 3001,
    "lastCommitAt": "2026-05-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Custom (non-OSI) license rather than a standard permissive/copyleft license.\n- Traditional hosting panel model; no git-push or buildpack-based deploy pipeline.\n- No clustering, autoscaling, or managed edge network.\n- Some advanced features are gated behind a paid/pro tier.",
    "tags": [
      "control-panel",
      "self-hosted",
      "lnmp",
      "hosting",
      "linux"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "qovery-engine",
    "name": "Qovery Engine",
    "tagline": "Open-source engine to deploy apps on your own cloud like a managed PaaS",
    "descriptionMd": "Qovery Engine is the open-source abstraction layer that powers Qovery's deployment platform. Written in Rust, it lets you deploy applications and databases onto your own AWS, GCP, Azure, or Scaleway accounts with a Heroku-like workflow, handling Kubernetes, networking, and infrastructure provisioning under the hood.",
    "repoUrl": "https://github.com/Qovery/engine",
    "websiteUrl": "https://www.qovery.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render"
    ],
    "license": "GPL-3.0",
    "language": "Rust",
    "githubStars": 2446,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- It is the engine/library, not a turnkey product; the full UX is tied to Qovery's (paid) control plane.\n- Designed to provision cloud infrastructure, so it expects an AWS/GCP/Azure/Scaleway account rather than a single box.\n- Standalone self-hosting without the Qovery platform is poorly documented.\n- Smaller community and narrower scope than full PaaS dashboards.",
    "tags": [
      "paas",
      "rust",
      "kubernetes",
      "byoc",
      "deployment"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "zaneops",
    "name": "ZaneOps",
    "tagline": "Fast self-hosted PaaS for apps, databases, and static sites",
    "descriptionMd": "ZaneOps is an open-source, self-hosted PaaS focused on a clean, fast experience for deploying web apps, databases, and static websites. Built on Docker Swarm and Caddy, it offers zero-downtime deploys, automatic HTTPS, environments, and a polished UI as an alternative to Heroku and Render.",
    "repoUrl": "https://github.com/zane-ops/zane-ops",
    "websiteUrl": "https://zaneops.dev",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 1339,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Younger project with a smaller community and less battle-testing than mature PaaS tools.\n- Feature set is still expanding; fewer one-click templates and integrations.\n- No managed hosting or global edge network.\n- Built on Docker Swarm, limiting very large-scale orchestration.",
    "tags": [
      "paas",
      "self-hosted",
      "docker-swarm",
      "caddy",
      "deployment"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "curated:initial"
  },
  {
    "slug": "jellyfin",
    "name": "Jellyfin",
    "tagline": "Free open-source media server — a self-hosted Plex alternative",
    "descriptionMd": "Jellyfin is a fully free, open-source media server that lets you organize and stream your personal collection of movies, TV shows, music, books, photos, and live TV. It supports hardware-accelerated transcoding on most platforms and ships native clients for iOS, Android, Android TV, Roku, Kodi, and all major browsers. Deployment is straightforward via Docker or Docker Compose, and a thriving plugin ecosystem extends functionality. Unlike Plex, there are no paywalls, no telemetry, and no required accounts.",
    "repoUrl": "https://github.com/jellyfin/jellyfin",
    "websiteUrl": "https://jellyfin.org",
    "demoUrl": "https://demo.jellyfin.org/stable",
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "plex",
      "netflix"
    ],
    "license": "GPL-2.0",
    "language": "C#",
    "githubStars": 53546,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No official cloud/managed hosting option; you must run and maintain your own server.\n- Hardware transcoding setup can be complex, requiring manual GPU passthrough configuration.\n- Plugin ecosystem is smaller and less polished than Plex's mature marketplace.\n- Lacks Plex's global CDN-backed streaming relay for remote access without port forwarding.",
    "tags": [
      "media-server",
      "streaming",
      "plex-alternative",
      "transcoding",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "srs",
    "name": "SRS",
    "tagline": "High-efficiency real-time video server supporting RTMP, WebRTC, HLS, and SRT",
    "descriptionMd": "SRS (Simple Realtime Server) is a high-performance, low-latency streaming media server written in C++. It supports RTMP, WebRTC, HLS, HTTP-FLV, and SRT protocols, making it suitable for live broadcasting, video conferencing, and CDN edge nodes. The project ships as a Docker image and includes a web console for stream management. It is widely used in China for production live-streaming infrastructure.",
    "repoUrl": "https://github.com/ossrs/srs",
    "websiteUrl": "https://ossrs.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "plex"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 28992,
    "lastCommitAt": "2026-05-29",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in media library or VOD management; primarily focused on live ingest and relay.\n- English documentation is limited compared to the Chinese-language docs.\n- Lacks a polished end-user playback UI; requires pairing with a separate frontend.\n- No DRM or subscription/paywall features for commercial content delivery.",
    "tags": [
      "live-streaming",
      "rtmp",
      "webrtc",
      "hls",
      "video-server"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "navidrome",
    "name": "Navidrome Music Server",
    "tagline": "Modern self-hosted music server compatible with Subsonic/Airsonic clients",
    "descriptionMd": "Navidrome is a lightweight, fast music server and streamer written in Go. It exposes the Subsonic/OpenSubsonic API, making it compatible with dozens of existing mobile and desktop clients such as DSub, Symfonium, and Sonixd. It runs as a single binary or Docker container with minimal resource usage, automatically scans your music library, and supports multi-user setups with per-user playlists and ratings. A built-in web UI is included for browser-based playback.",
    "repoUrl": "https://github.com/navidrome/navidrome",
    "websiteUrl": "https://www.navidrome.org",
    "demoUrl": "https://www.navidrome.org/demo",
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "spotify"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 21872,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No music discovery, algorithmic recommendations, or social features like Spotify's.\n- Cannot stream music you don't already own; requires your own audio files.\n- Podcast support is absent; audio files only.\n- No official mobile app; relies on third-party Subsonic-compatible clients.",
    "tags": [
      "music-server",
      "audio-streaming",
      "subsonic",
      "self-hosted",
      "media"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "kodi",
    "name": "Kodi",
    "tagline": "Open-source home theater media center for local and network playback",
    "descriptionMd": "Kodi (formerly XBMC) is a full-featured, cross-platform media center application that runs on Android, iOS, Linux, macOS, and Windows. It plays virtually every audio and video format, organizes local and network (NFS/SMB/UPnP) libraries with rich metadata, and supports live TV via PVR backends. An extensive addon ecosystem adds streaming services, EPG guides, and skinning options. Kodi is a client application, not a server — it runs on the playback device itself.",
    "repoUrl": "https://github.com/xbmc/xbmc",
    "websiteUrl": "https://kodi.tv/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "plex",
      "netflix"
    ],
    "license": "GPL-2.0",
    "language": "C++",
    "githubStars": 20883,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Kodi is a local client, not a server; remote streaming to other devices requires additional setup (e.g., Kodi's built-in UPnP or a separate server).\n- No native mobile apps with full feature parity; mobile clients are limited.\n- Addon quality is highly variable and addons can break without notice.\n- Modern UI/UX is dated compared to Plex or Netflix-style interfaces.",
    "tags": [
      "media-center",
      "home-theater",
      "htpc",
      "streaming",
      "media"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "invidious",
    "name": "Invidious",
    "tagline": "Privacy-respecting alternative front-end for YouTube",
    "descriptionMd": "Invidious is a self-hosted, lightweight front-end for YouTube that strips tracking, ads, and Google account requirements. Users can browse, search, and watch YouTube videos through a clean interface, subscribe to channels without a Google account, and export subscriptions. It can be deployed via Docker and supports multiple public instances. Invidious does not host any video files itself; it proxies or redirects requests to YouTube's CDN.",
    "repoUrl": "https://github.com/iv-org/invidious",
    "websiteUrl": "https://github.com/iv-org/invidious",
    "demoUrl": "https://docs.invidious.io/instances/",
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "netflix"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 20446,
    "lastCommitAt": "2026-06-15",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Relies entirely on YouTube's infrastructure; Google can and does throttle or break the API at any time.\n- No support for YouTube Shorts, YouTube Music, or YouTube Premium content.\n- Comment loading and search quality degrade as Google tightens API restrictions.\n- No upload capability; purely a viewing front-end.",
    "tags": [
      "youtube",
      "privacy",
      "front-end",
      "video",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "mediamtx",
    "name": "MediaMTX",
    "tagline": "Zero-dependency real-time media server and proxy for SRT, WebRTC, RTSP, RTMP, and HLS",
    "descriptionMd": "MediaMTX (formerly rtsp-simple-server) is a ready-to-use, dependency-free media server and proxy written in Go. It can publish, read, record, play back, and route video/audio streams over SRT, WebRTC, RTSP, RTMP, HLS, MPEG-TS, and RTP. A single binary requires no external database or runtime dependencies. It is popular for IP camera integration, low-latency WebRTC broadcasting, and protocol conversion between streaming formats.",
    "repoUrl": "https://github.com/bluenviron/mediamtx",
    "websiteUrl": "https://mediamtx.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "plex"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 19214,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No media library, metadata scraping, or user-facing web UI for browsing content.\n- Recording and playback features are basic compared to dedicated DVR/NVR solutions.\n- No authentication or multi-user access control beyond simple path-based credentials.\n- Lacks transcoding; it routes streams but does not re-encode on the fly.",
    "tags": [
      "media-server",
      "rtsp",
      "webrtc",
      "live-streaming",
      "protocol-proxy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "koel",
    "name": "koel",
    "tagline": "Personal music streaming server with a sleek web player",
    "descriptionMd": "Koel is a personal music streaming application with a PHP/Laravel backend and a Vue.js single-page frontend. It scans a directory of audio files, builds a library with last.fm metadata, and streams them through a polished browser-based player supporting playlists, favorites, and search. It also exposes a Subsonic-compatible API for use with mobile clients. Deployment requires a web server, PHP, and a database (MySQL/PostgreSQL/SQLite).",
    "repoUrl": "https://github.com/koel/koel",
    "websiteUrl": "https://koel.dev/",
    "demoUrl": "https://demo.koel.dev/",
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "spotify"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 17173,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires PHP runtime and a relational database, adding operational overhead vs. single-binary alternatives.\n- No native mobile apps; mobile access relies on third-party Subsonic clients.\n- No algorithmic recommendations or social/collaborative features like Spotify.\n- Podcast support is absent; music library files only.",
    "tags": [
      "music-server",
      "audio-streaming",
      "self-hosted",
      "php",
      "web-player"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "beets",
    "name": "Beets",
    "tagline": "Powerful CLI music library manager and MusicBrainz auto-tagger",
    "descriptionMd": "Beets is a command-line music library manager and MusicBrainz-based tagger for Python. It imports audio files, automatically matches them against the MusicBrainz database, corrects tags and filenames, and maintains a queryable SQLite library. A plugin system adds features including a lightweight web interface, ReplayGain analysis, lyrics fetching, and integration with Last.fm and Discogs. It is primarily a library organization tool rather than a streaming server.",
    "repoUrl": "https://github.com/beetbox/beets",
    "websiteUrl": "https://beets.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "spotify"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 15302,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- CLI-first; the built-in web UI is minimal and not suitable as a primary music player.\n- Not a streaming server; must be paired with Navidrome, Koel, or similar for remote playback.\n- No mobile app or client ecosystem of its own.\n- Initial library import and tagging can be slow and require manual review for edge cases.",
    "tags": [
      "music-library",
      "tagger",
      "musicbrainz",
      "cli",
      "audio"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "peertube",
    "name": "PeerTube",
    "tagline": "Federated, P2P-powered open-source video hosting platform",
    "descriptionMd": "PeerTube is a decentralized, federated video hosting platform built with Node.js and ActivityPub. Videos are served peer-to-peer via WebTorrent directly in the browser, reducing server bandwidth. Instances can federate with each other and with Mastodon, allowing cross-instance following and discovery. It supports video upload, live streaming, playlists, subtitles, and channel management. Server setup requires Node.js, PostgreSQL, Redis, and a reverse proxy.",
    "repoUrl": "https://github.com/Chocobozzz/PeerTube",
    "websiteUrl": "https://joinpeertube.org/en/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "netflix"
    ],
    "license": "AGPL-3.0",
    "language": "Nodejs",
    "githubStars": 14770,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Server setup is complex, requiring PostgreSQL, Redis, Node.js, and nginx; no official Docker Compose for production.\n- P2P seeding can expose viewer IP addresses unless a proxy mode is enabled.\n- No recommendation algorithm; content discovery is limited across the federated network.\n- Monetization and subscription/paywall features are absent or rudimentary.",
    "tags": [
      "video-hosting",
      "federated",
      "p2p",
      "activitypub",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "sonarr",
    "name": "Sonarr",
    "tagline": "Automatic TV show download manager for Usenet and BitTorrent",
    "descriptionMd": "Sonarr is an automated TV series management tool that monitors RSS feeds from Usenet indexers and torrent trackers, grabs new episodes as they release, and renames/sorts them into your library. It integrates with download clients like SABnzbd, NZBGet, qBittorrent, and Deluge. A calendar view tracks upcoming episodes, and quality profiles allow automatic upgrade when better releases appear. It is the de-facto standard in the *arr media automation stack.",
    "repoUrl": "https://github.com/Sonarr/Sonarr",
    "websiteUrl": "https://sonarr.tv/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "netflix"
    ],
    "license": "GPL-3.0",
    "language": "C#",
    "githubStars": 14007,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires separate download client, indexer, and media server; not a standalone solution.\n- No built-in content streaming or playback; purely a download manager.\n- Initial configuration of indexers, profiles, and download paths has a steep learning curve.\n- Dependent on availability of content on Usenet or torrent trackers, which is not guaranteed.",
    "tags": [
      "tv-shows",
      "automation",
      "usenet",
      "bittorrent",
      "media-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "metube",
    "name": "MeTube",
    "tagline": "Web GUI for yt-dlp — download videos from YouTube and hundreds of other sites",
    "descriptionMd": "MeTube is a self-hosted web interface for yt-dlp (the youtube-dl fork) that lets you queue and download videos from YouTube, Vimeo, Twitter, and hundreds of other platforms via a browser UI. It supports playlist downloads, format and quality selection, and audio-only extraction. Deployment is a single Docker container; downloads are saved to a mounted volume on the host.",
    "repoUrl": "https://github.com/alexta69/metube",
    "websiteUrl": "https://github.com/alexta69/metube",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "netflix"
    ],
    "license": "AGPL-3.0",
    "language": "Python",
    "githubStars": 13937,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Downloads files locally; does not stream or manage a media library.\n- No scheduling or automatic monitoring of channels/playlists for new content.\n- No user authentication by default; must be secured behind a reverse proxy.\n- Subject to yt-dlp breakage whenever platforms change their APIs.",
    "tags": [
      "youtube-dl",
      "yt-dlp",
      "video-download",
      "self-hosted",
      "media"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "radarr",
    "name": "Radarr",
    "tagline": "Automatic movie download manager for Usenet and BitTorrent",
    "descriptionMd": "Radarr is a fork of Sonarr adapted for movies. It monitors release groups, grabs wanted movies from Usenet and torrent indexers, and renames/organizes them into your library. Quality profiles allow automatic upgrades to better encodes when available. Radarr integrates with download clients such as qBittorrent, Deluge, SABnzbd, and NZBGet, and fits naturally into the *arr stack alongside Sonarr, Prowlarr, and Bazarr.",
    "repoUrl": "https://github.com/Radarr/Radarr",
    "websiteUrl": "https://radarr.video/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "netflix"
    ],
    "license": "GPL-3.0",
    "language": "C#",
    "githubStars": 13839,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires a separate download client and indexer; not a standalone media solution.\n- No built-in playback; must be paired with Jellyfin, Plex, or Kodi.\n- Content availability depends entirely on third-party indexers and trackers.\n- Initial setup and fine-tuning of quality profiles requires significant manual effort.",
    "tags": [
      "movies",
      "automation",
      "usenet",
      "bittorrent",
      "media-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "audiobookshelf",
    "name": "Audiobookshelf",
    "tagline": "Self-hosted audiobook and podcast server with cross-device progress sync",
    "descriptionMd": "Audiobookshelf is an open-source audiobook and podcast server that streams all common audio formats and keeps per-user listening progress synced across devices. It ships native apps for Android and iOS and a fully featured web UI. The server scans your audiobook and podcast directories, fetches metadata from Audible and other sources, and supports multiple library types. Deployment is a single Docker container.",
    "repoUrl": "https://github.com/advplyr/audiobookshelf",
    "websiteUrl": "https://www.audiobookshelf.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "spotify"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 13260,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No content store or marketplace; you must supply your own DRM-free audiobook files.\n- Podcast discovery is limited to direct RSS URLs; no curated podcast directory.\n- Lacks social features like shared shelves, ratings, or friend activity.\n- Text ebook reading is not supported; audiobooks only (plus podcasts).",
    "tags": [
      "audiobooks",
      "podcasts",
      "audio-streaming",
      "self-hosted",
      "media"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "stash",
    "name": "Stash",
    "tagline": "Self-hosted adult media library organizer with auto-tagging and metadata scraping",
    "descriptionMd": "Stash is a web-based library organizer and video player for personal adult media collections. It automatically scans and fingerprints video files, scrapes metadata from StashDB and other community sources, and supports tagging, performer management, and studio organization. The interface provides a Netflix-style grid view with filtering and search. It is deployed via Docker or a single binary and stores metadata in a SQLite or PostgreSQL database.",
    "repoUrl": "https://github.com/stashapp/stash",
    "websiteUrl": "https://stashapp.cc",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "plex"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 12518,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Highly niche scope; not suitable for general-purpose media libraries.\n- Mobile apps are community-made and not officially supported.\n- Metadata scraping depends on community-maintained StashDB, which can have gaps.\n- No hardware transcoding support; playback quality is limited by server CPU.",
    "tags": [
      "media-library",
      "video-organizer",
      "metadata",
      "self-hosted",
      "media"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "seerr",
    "name": "Seerr",
    "tagline": "Media request manager for Plex, Jellyfin, and Emby — fork of Overseerr",
    "descriptionMd": "Seerr is a fork of Overseerr that lets users browse and request movies and TV shows for their self-hosted media libraries. It integrates with Plex, Jellyfin, and Emby media servers and connects to Radarr and Sonarr to automate downloads. Requests go through an approval workflow, and users get notified when content becomes available. Deployed via Docker with a straightforward environment-variable configuration.",
    "repoUrl": "https://github.com/seerr-team/seerr",
    "websiteUrl": "https://github.com/seerr-team/seerr",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "plex"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 11644,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in media discovery beyond request management; requires a separate Radarr/Sonarr/media-server stack.\n- Mobile apps are unofficial third-party clients only.\n- Less battle-tested than the upstream Overseerr project given its fork status.\n- No native transcoding or playback — purely a request layer.",
    "tags": [
      "media",
      "requests",
      "plex",
      "jellyfin",
      "sonarr"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "owncast",
    "name": "Owncast",
    "tagline": "Decentralized self-hosted live video streaming and chat server",
    "descriptionMd": "Owncast is a single-user live streaming server that lets you broadcast video and host a real-time chat, similar to Twitch or YouTube Live. It supports RTMP ingest from OBS or similar software and delivers HLS output to viewers through a built-in web player. The server is a single Go binary with no external database dependency, making it easy to run on any Linux VPS. A directory at directory.owncast.online lets viewers discover public Owncast streams.",
    "repoUrl": "https://github.com/owncast/owncast",
    "websiteUrl": "https://owncast.online/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "plex"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 11364,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Single-user only; no multi-channel or multi-streamer support.\n- No built-in VOD/recording management — streams are live only unless you configure external storage.\n- Chat moderation tooling is minimal compared to Twitch.\n- No built-in CDN; high viewer counts require self-managed edge infrastructure.",
    "tags": [
      "live-streaming",
      "video",
      "chat",
      "self-hosted",
      "rtmp"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "mopidy",
    "name": "Mopidy",
    "tagline": "Extensible music server with MPD API and third-party service integrations",
    "descriptionMd": "Mopidy is a Python-based music server that exposes a superset of the Music Player Daemon (MPD) API, making it compatible with a wide range of MPD clients. Its extension system allows integration with streaming services like Spotify and SoundCloud, local file libraries, internet radio, and podcast feeds. It runs as a background service on Linux or Raspberry Pi and can be controlled via MPD clients, a web UI extension, or its own JSON-RPC API. Configuration is file-based with a plugin-per-service model.",
    "repoUrl": "https://github.com/mopidy/mopidy",
    "websiteUrl": "https://docs.mopidy.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "spotify"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 8523,
    "lastCommitAt": "2026-06-02",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Manual",
      "Docker"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No native web UI — requires installing a separate Mopidy-Iris or Mopidy-MusicBox-Webclient extension.\n- Spotify and SoundCloud extensions depend on unofficial APIs that break periodically.\n- No mobile app; relies on third-party MPD clients.\n- Multi-room audio (e.g., Snapcast) requires additional manual setup.",
    "tags": [
      "music",
      "audio",
      "mpd",
      "streaming",
      "python"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "tube-archivist",
    "name": "Tube Archivist",
    "tagline": "Self-hosted YouTube archive with search, metadata indexing, and a clean UI",
    "descriptionMd": "Tube Archivist lets you subscribe to YouTube channels, download videos with yt-dlp, and browse your collection through a polished web interface. It indexes video metadata — titles, descriptions, thumbnails, subtitles — into Elasticsearch for full-text search. Watch progress is tracked per user, and the interface resembles a private YouTube clone. Deployment requires Docker Compose with Elasticsearch and Redis as companion services.",
    "repoUrl": "https://github.com/tubearchivist/tubearchivist",
    "websiteUrl": "https://tubearchivist.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "media-server",
    "replaces": [
      "plex",
      "netflix"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 8142,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires Elasticsearch, which is memory-intensive (1 GB+ RAM minimum).\n- No transcoding; playback quality depends on the downloaded file format.\n- Cannot stream live YouTube content; archive-only.\n- No multi-user access control beyond a basic admin/user split.",
    "tags": [
      "youtube",
      "archiving",
      "video",
      "self-hosted",
      "yt-dlp"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "stirling-pdf",
    "name": "Stirling-PDF",
    "tagline": "Locally hosted web app for merging, splitting, converting, and OCR-ing PDFs",
    "descriptionMd": "Stirling-PDF is a self-hosted web application that provides over 50 PDF operations — merge, split, rotate, compress, watermark, OCR, convert to/from various formats, and more — all processed locally without sending files to any external service. It uses Apache PDFBox, LibreOffice, and Tesseract under the hood and exposes a clean browser UI plus a REST API. Deployed as a single Docker container with optional LibreOffice sidecar for Office conversions. Authentication and user management are supported in the premium tier.",
    "repoUrl": "https://github.com/Stirling-Tools/Stirling-PDF",
    "websiteUrl": "https://github.com/Stirling-Tools/Stirling-PDF",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 82383,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Not a document-management or collaboration tool — purely a PDF processing utility.\n- Advanced features like user auth and SSO require the paid Stirling-PDF Pro license.\n- No document storage or versioning; files must be uploaded and downloaded manually each session.\n- OCR accuracy depends on Tesseract language packs installed in the container.",
    "tags": [
      "pdf",
      "document",
      "ocr",
      "conversion",
      "privacy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "paperless-ngx",
    "name": "Paperless-ngx",
    "tagline": "Scan, index, and archive paper documents with full-text search and AI tagging",
    "descriptionMd": "Paperless-ngx is a document management system that ingests scanned documents and PDFs, runs OCR via Tesseract, extracts text, and makes everything searchable through a modern web UI. It auto-classifies documents by assigning correspondents, document types, and tags using a built-in machine learning model trained on your archive. Storage backends include local disk and S3-compatible object storage. It is a community-maintained fork of the original Paperless project and deploys via Docker Compose with PostgreSQL and Redis.",
    "repoUrl": "https://github.com/paperless-ngx/paperless-ngx",
    "websiteUrl": "https://docs.paperless-ngx.com/",
    "demoUrl": "https://demo.paperless-ngx.com/",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "evernote",
      "notion"
    ],
    "license": "GPL-3.0",
    "language": "Python",
    "githubStars": 42341,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Primarily a document archive, not a note-taking or collaboration tool.\n- Mobile scanning requires a third-party app (e.g., Scanbot) pointing at the consume folder.\n- No real-time collaboration or shared editing of documents.\n- Initial OCR processing of large backlogs can be slow and CPU-intensive.",
    "tags": [
      "document-management",
      "ocr",
      "archiving",
      "search",
      "paperless"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "overleaf",
    "name": "Overleaf",
    "tagline": "Self-hosted collaborative LaTeX editor for academic writing and publishing",
    "descriptionMd": "Overleaf Community Edition is the open-source version of the popular cloud LaTeX editor that lets teams write, compile, and review LaTeX documents in the browser. It supports real-time collaboration, version history, rich comment threads, and thousands of journal templates. The self-hosted instance runs via Docker Compose with MongoDB and Redis. The commercial Overleaf Cloud adds features like Git integration, track-changes, and institutional SSO that are not included in the community build.",
    "repoUrl": "https://github.com/overleaf/overleaf",
    "websiteUrl": "https://www.overleaf.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence"
    ],
    "license": "AGPL-3.0",
    "language": "Ruby",
    "githubStars": 17849,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Track changes and full Git integration are cloud-only (paid) features not available in the Community Edition.\n- No built-in reference manager; requires manual BibTeX or integration with Zotero/Mendeley.\n- Admin panel is minimal; user and quota management requires direct database access.\n- Requires a non-trivial server (2+ CPU, 4 GB RAM) for a comfortable multi-user compile experience.",
    "tags": [
      "latex",
      "collaboration",
      "academic",
      "writing",
      "documents"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "docuseal",
    "name": "Docuseal",
    "tagline": "Self-hosted digital document signing platform — open-source DocuSign alternative",
    "descriptionMd": "Docuseal allows you to create fillable PDF templates with signature, initials, text, checkbox, and date fields, then send them to signers via email or an embedded link. Signers complete documents in the browser with no account required. The platform tracks completion status, stores signed documents, and sends automated notifications. It deploys as a single Docker container backed by SQLite or PostgreSQL and supports SMTP configuration for email delivery.",
    "repoUrl": "https://github.com/docusealco/docuseal",
    "websiteUrl": "https://www.docuseal.co",
    "demoUrl": "https://demo.docuseal.tech/",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 17252,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "One-Click"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Advanced workflow automations (conditional fields, branching) are limited compared to DocuSign.\n- No built-in identity verification (ID check, knowledge-based auth) for high-assurance signing.\n- Bulk-send to large lists and advanced reporting are cloud-plan features only.\n- Audit trail is basic; lacks the legally certified audit certificates that DocuSign provides.",
    "tags": [
      "e-signature",
      "documents",
      "pdf",
      "signing",
      "contracts"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "docs-numerique",
    "name": "Docs",
    "tagline": "Scalable collaborative wiki and documentation platform by La Suite Numérique",
    "descriptionMd": "Docs is a collaborative note-taking, wiki, and documentation platform developed by the French government's La Suite Numérique program. It offers a block-based rich-text editor, workspace organization, and real-time multi-user editing designed to scale to large organizations. The project is built with Django and React, uses PostgreSQL and Redis, and is designed for Kubernetes deployment, though Docker Compose configurations are also available. It aims to be a sovereign, privacy-respecting alternative to Notion and Confluence.",
    "repoUrl": "https://github.com/suitenumerique/docs",
    "websiteUrl": "https://docs.numerique.gouv.fr/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence"
    ],
    "license": "MIT",
    "language": "K8S",
    "githubStars": 16602,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Kubernetes",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Relatively young project; ecosystem of integrations (plugins, API clients) is still maturing.\n- Database and storage setup requires external PostgreSQL and object-storage configuration.\n- No native mobile app; browser-only.\n- Feature parity with Notion (databases, kanban, formulas) is not yet reached.",
    "tags": [
      "wiki",
      "collaboration",
      "notes",
      "documentation",
      "open-source"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "gollum",
    "name": "Gollum",
    "tagline": "Simple Git-backed wiki with Markdown support and a local web frontend",
    "descriptionMd": "Gollum is a wiki system built on top of a Git repository, treating every wiki page as a plain-text file (Markdown, AsciiDoc, Org-mode, and others) tracked by Git. It provides a lightweight web frontend for browsing, searching, and editing pages without needing to know Git. Because the wiki is a plain Git repo, you get full version history, branching, and the ability to edit locally with any text editor. It runs as a Ruby process and is easy to launch with a single command pointing at a repository directory.",
    "repoUrl": "https://github.com/gollum/gollum",
    "websiteUrl": "https://github.com/gollum/gollum",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence"
    ],
    "license": "MIT",
    "language": "Ruby",
    "githubStars": 14281,
    "lastCommitAt": "2025-11-24",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No real-time collaboration; concurrent edits require Git merge conflict resolution.\n- Access control is all-or-nothing unless fronted by a reverse proxy with auth.\n- No rich media embeds, databases, or kanban views that modern note tools offer.\n- Search is basic file-content grep; no full-text index for large wikis.",
    "tags": [
      "wiki",
      "git",
      "markdown",
      "knowledge-base",
      "ruby"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "bento-pdf",
    "name": "BentoPDF",
    "tagline": "Privacy-first client-side PDF toolkit — edit, merge, and process in the browser",
    "descriptionMd": "BentoPDF is a client-side PDF toolkit that runs entirely in the browser using WebAssembly, meaning uploaded files never leave the user's device. It supports merging, splitting, rotating, compressing, reordering pages, adding watermarks, and basic form filling. The interface is a bento-grid-style layout where users drag and drop PDF operations. It can be self-hosted as a static Node.js web application with no server-side processing required.",
    "repoUrl": "https://github.com/alam00000/bentopdf",
    "websiteUrl": "https://bentopdf.com",
    "demoUrl": "https://bentopdf.com",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion"
    ],
    "license": "AGPL-3.0",
    "language": "Nodejs",
    "githubStars": 13815,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Client-side WASM processing is slower than server-side tools for very large PDFs.\n- No OCR or text extraction capabilities.\n- No user accounts, history, or saved workflows between sessions.\n- Feature set is narrower than server-side tools like Stirling-PDF for batch or automated use.",
    "tags": [
      "pdf",
      "browser",
      "privacy",
      "wasm",
      "document"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "documenso",
    "name": "Documenso",
    "tagline": "Open-source digital document signing platform — self-hosted DocuSign alternative",
    "descriptionMd": "Documenso is an open-source document signing platform that enables legally binding electronic signatures on PDF documents. It supports template creation, multi-party signing workflows, email-based signer invitations, and a signing certificate. The platform is built with Next.js and Prisma, backed by PostgreSQL, and can be self-hosted via Docker Compose. A managed cloud offering is available at documenso.com for teams that prefer not to self-host.",
    "repoUrl": "https://github.com/documenso/documenso",
    "websiteUrl": "https://documenso.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion"
    ],
    "license": "AGPL-3.0",
    "language": "Nodejs",
    "githubStars": 13506,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "One-Click"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No built-in identity verification (KBA, ID scan) for high-assurance regulated industries.\n- API and webhook support is still maturing compared to DocuSign's enterprise integrations.\n- Bulk send and advanced reporting are limited in the self-hosted Community edition.\n- Mobile signing experience is browser-only; no dedicated native app.",
    "tags": [
      "e-signature",
      "documents",
      "contracts",
      "pdf",
      "signing"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "gotenberg",
    "name": "Gotenberg",
    "tagline": "Developer API to convert HTML, Markdown, Word, and Excel files into PDFs",
    "descriptionMd": "Gotenberg is a Docker-based microservice that wraps Chromium and LibreOffice behind a clean HTTP API for document conversion. It converts HTML, Markdown, and URLs to PDF using headless Chromium, and converts Office documents (Word, Excel, PowerPoint) to PDF via LibreOffice. The API supports page ranges, headers/footers, PDF/A output, and merging. It is designed as a stateless sidecar service for web applications that need server-side PDF generation without bundling a rendering engine.",
    "repoUrl": "https://github.com/gotenberg/gotenberg",
    "websiteUrl": "https://gotenberg.dev",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 12444,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Conversion-only API; no storage, user interface, or document management.\n- Complex CSS layouts and JavaScript-heavy pages may render inconsistently with headless Chromium.\n- LibreOffice fidelity for intricate Word/Excel formatting can differ from native Office rendering.\n- No built-in rate limiting or authentication — must be secured at the reverse proxy level.",
    "tags": [
      "pdf",
      "conversion",
      "api",
      "chromium",
      "libreoffice"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "blinko",
    "name": "Blinko",
    "tagline": "AI-powered personal note-taking tool with fast capture and semantic search",
    "descriptionMd": "Blinko is a personal note-taking application that emphasizes quick capture of fleeting thoughts and integrates AI features for summarization and semantic search. Notes are stored in a local database and surfaced through a clean card-based UI. It supports Markdown formatting, tagging, and connecting an OpenAI-compatible LLM endpoint for AI-assisted features. The application deploys as a single Docker container with minimal configuration.",
    "repoUrl": "https://github.com/blinkospace/blinko",
    "websiteUrl": "https://blinko.space/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "evernote"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 10594,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- AI features require a separately configured LLM API key; no bundled model.\n- No real-time collaboration or multi-user workspace sharing.\n- Limited rich content types — no databases, kanban boards, or spreadsheet views.\n- Mobile experience is a PWA only; no native iOS or Android app.",
    "tags": [
      "notes",
      "ai",
      "personal",
      "markdown",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "tiddlywiki",
    "name": "TiddlyWiki",
    "tagline": "Reusable non-linear personal web notebook for capturing and organizing ideas",
    "descriptionMd": "TiddlyWiki is a unique non-linear notebook that stores all content in a single HTML file, making it portable and requiring no server. It organizes information into small reusable units called 'tiddlers' that can be linked, tagged, and transcluded to build complex knowledge structures. It can run as a standalone file in a browser or be served via Node.js for multi-user or persistent storage scenarios. The ecosystem includes hundreds of community plugins for extended functionality.",
    "repoUrl": "https://github.com/TiddlyWiki/TiddlyWiki5",
    "websiteUrl": "https://tiddlywiki.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "evernote",
      "obsidian"
    ],
    "license": "BSD-3-Clause",
    "language": "Nodejs",
    "githubStars": 8599,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual",
      "Docker"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in real-time collaboration; multi-user editing requires workarounds\n- UI feels dated compared to modern tools like Notion; steeper learning curve for non-technical users\n- Mobile editing experience is limited and not optimized\n- No built-in database views (kanban, gallery, table) found in Notion",
    "tags": [
      "wiki",
      "notes",
      "knowledge-base",
      "personal",
      "offline"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "hedgedoc",
    "name": "HedgeDoc",
    "tagline": "Realtime collaborative Markdown editor and notes platform for teams",
    "descriptionMd": "HedgeDoc (formerly CodiMD / HackMD CE) is a self-hosted, real-time collaborative Markdown editor that works in any modern browser. Multiple users can edit the same document simultaneously with live previews, and documents can be published or shared with fine-grained permissions. It supports a wide set of Markdown extensions including diagrams (Mermaid, PlantUML), math (MathJax), and presentation slides. Deployment is straightforward via Docker Compose with PostgreSQL or MySQL.",
    "repoUrl": "https://github.com/hedgedoc/hedgedoc",
    "websiteUrl": "https://hedgedoc.org/",
    "demoUrl": "https://demo.hedgedoc.org/",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence",
      "evernote"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 7263,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Limited to Markdown; no rich block-based editing (tables, databases) like Notion\n- No built-in task management, kanban boards, or project organization features\n- Lacks a hierarchical page tree or wiki-style organization found in Confluence\n- No native mobile apps; browser-only experience on mobile",
    "tags": [
      "markdown",
      "collaboration",
      "notes",
      "real-time",
      "editor"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "opensign",
    "name": "OpenSign",
    "tagline": "Open-source document e-signing platform, a self-hosted DocuSign alternative",
    "descriptionMd": "OpenSign is a free, open-source electronic document signing solution built as a direct alternative to DocuSign and similar proprietary e-signature services. It allows users to upload documents, add signature fields, and send them to signers via email with audit trails. The platform supports multiple signers, signing order workflows, and PDF certificate generation upon completion. It can be self-hosted using Docker with a MongoDB backend or accessed via the managed cloud offering.",
    "repoUrl": "https://github.com/opensignlabs/opensign",
    "websiteUrl": "https://www.opensignlabs.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence"
    ],
    "license": "AGPL-3.0",
    "language": "Nodejs",
    "githubStars": 6544,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Advanced workflow automation and conditional routing (found in DocuSign) is limited\n- No built-in bulk-send or template library as comprehensive as DocuSign's\n- In-person signing kiosk mode is absent\n- Integrations ecosystem (Salesforce, HubSpot, etc.) is much smaller than DocuSign",
    "tags": [
      "e-signature",
      "document-signing",
      "pdf",
      "workflows",
      "legal"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "drawio",
    "name": "draw.io",
    "tagline": "Powerful open-source diagramming tool for flowcharts, UML, ER, and network diagrams",
    "descriptionMd": "draw.io (also known as diagrams.net) is a full-featured, browser-based diagramming application that supports flowcharts, UML, BPMN, ER diagrams, network topology, org charts, and more. Diagrams are stored as XML and can be embedded in Confluence, Jira, Google Workspace, or saved locally. It can be self-hosted as a simple static web app served from any HTTP server. The codebase is actively maintained by JGraph and offers a desktop Electron app as well.",
    "repoUrl": "https://github.com/jgraph/drawio",
    "websiteUrl": "https://draw.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "confluence",
      "notion"
    ],
    "license": "Apache-2.0",
    "language": "Javascript",
    "githubStars": 6263,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No real-time multi-cursor collaboration in the self-hosted version (available only on draw.io cloud)\n- Version history and branching are not built-in; rely on external storage integration\n- Limited commenting and review workflow compared to Lucidchart or Miro\n- No presentation mode or interactive slideshow features",
    "tags": [
      "diagrams",
      "flowcharts",
      "uml",
      "visualization",
      "drawing"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "livebook",
    "name": "Livebook",
    "tagline": "Collaborative Elixir notebooks with live code execution, Mermaid diagrams, and TeX",
    "descriptionMd": "Livebook is a real-time collaborative notebook application for Elixir that combines Markdown documentation, executable Elixir code cells, TeX math, and Mermaid diagrams in a single interface. Notebooks can be shared and co-edited live, and Livebook ships with Smart Cells that auto-generate boilerplate for database connections, charts, and ML model deployment. It deploys easily via a single Docker image or the Elixir Mix toolchain, and includes a managed hosting option on Hugging Face.",
    "repoUrl": "https://github.com/livebook-dev/livebook",
    "websiteUrl": "https://livebook.dev",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion"
    ],
    "license": "Apache-2.0",
    "language": "Elixir",
    "githubStars": 5804,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Exclusively supports Elixir; no Python, R, or Julia kernels unlike Jupyter\n- Not a general-purpose note-taking tool — unsuitable as a Notion replacement for non-developers\n- No persistent database-style pages, kanban boards, or project management views\n- Community plugin ecosystem is smaller than Jupyter's",
    "tags": [
      "notebooks",
      "elixir",
      "data-science",
      "collaboration",
      "code"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "silverbullet",
    "name": "SilverBullet",
    "tagline": "Extensible hacker-friendly Markdown knowledge base with offline-first sync",
    "descriptionMd": "SilverBullet is a self-hosted, offline-capable Markdown note-taking app designed for power users who want a programmable personal knowledge base. It features a slash-command-driven interface, Live Queries that pull data dynamically from your notes, and a Plug system for extending functionality with JavaScript. Notes are plain Markdown files on disk, making them portable and git-friendly. Deployment is a single Docker image or a Deno binary with no external database required.",
    "repoUrl": "https://github.com/silverbulletmd/silverbullet",
    "websiteUrl": "https://silverbullet.md/",
    "demoUrl": "https://play.silverbullet.md/",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "obsidian",
      "notion",
      "evernote"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 5507,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No native mobile apps; mobile use relies on the web interface\n- Real-time multi-user collaboration is limited compared to cloud-first tools\n- Plugin ecosystem is much smaller than Obsidian's community plugin library\n- No built-in rich media embedding or database views comparable to Notion",
    "tags": [
      "notes",
      "markdown",
      "knowledge-base",
      "offline",
      "extensible"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "colanode",
    "name": "Colanode",
    "tagline": "Offline-first team collaboration suite combining chat, rich pages, files, and databases",
    "descriptionMd": "Colanode is a self-hosted collaboration platform that combines real-time messaging channels, rich text wiki pages, file management, and spreadsheet-style dynamic databases in a single unified workspace. It is built with an offline-first architecture using CRDTs, ensuring that teams can work without internet connectivity and sync seamlessly when reconnected. The server component is packaged for Docker and Kubernetes, while native desktop clients are provided for macOS, Windows, and Linux.",
    "repoUrl": "https://github.com/colanode/colanode",
    "websiteUrl": "https://colanode.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "confluence"
    ],
    "license": "Apache-2.0",
    "language": "K8S",
    "githubStars": 4921,
    "lastCommitAt": "2026-04-03",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Project is relatively young; some enterprise features (SSO, audit logs) are incomplete\n- No mobile apps yet; desktop-only client availability limits on-the-go access\n- Smaller plugin/integration ecosystem than Notion or Slack\n- Documentation and community support are still maturing",
    "tags": [
      "collaboration",
      "team-chat",
      "wiki",
      "offline-first",
      "databases"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "papra",
    "name": "Papra",
    "tagline": "Minimalist document archiving and management platform, simple and accessible",
    "descriptionMd": "Papra is a lightweight self-hosted document management and archiving system focused on simplicity and ease of use. It allows users to upload, organize, tag, and search documents with a clean interface designed to be accessible to non-technical users. The platform supports automatic ingestion via watch folders and email, making it easy to build a digital paperless archive. It deploys via Docker with minimal configuration required.",
    "repoUrl": "https://github.com/papra-hq/papra/",
    "websiteUrl": "https://papra.app",
    "demoUrl": "https://demo.papra.app/",
    "logoUrl": null,
    "categorySlug": "notes-docs",
    "replaces": [
      "notion",
      "evernote"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 4834,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No OCR or full-text search within scanned PDFs out of the box\n- Lacks workflow automation, approval chains, or document versioning found in Confluence\n- No collaborative editing or commenting on documents\n- Limited role/permission system; not suited for large enterprise teams",
    "tags": [
      "document-management",
      "archiving",
      "paperless",
      "storage",
      "tagging"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "copyparty",
    "name": "copyparty",
    "tagline": "Portable all-in-one file server with resumable uploads, WebDAV, FTP, and media indexing",
    "descriptionMd": "copyparty is a feature-packed self-hosted file server distributed as a single Python file with no mandatory dependencies. It supports accelerated resumable uploads (via a custom protocol and the TUS standard), deduplication, WebDAV, FTP, and zeroconf service discovery. Additional capabilities include a media indexer with audio transcoding, video thumbnail generation, and configurable write-only drop folders. It can run directly with Python or inside Docker, making it extremely portable across platforms.",
    "repoUrl": "https://github.com/9001/copyparty",
    "websiteUrl": "https://github.com/9001/copyparty",
    "demoUrl": "https://a.ocv.me/pub/demo/",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 45304,
    "lastCommitAt": "2026-06-16",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No selective sync desktop client; files must be managed via web UI, CLI, or WebDAV\n- User management and access control are basic compared to Dropbox Teams or Google Drive Shared Drives\n- No online document editing (Docs/Sheets equivalent)\n- Mobile apps are absent; mobile access is browser or WebDAV only",
    "tags": [
      "file-server",
      "uploads",
      "webdav",
      "ftp",
      "media"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "puter",
    "name": "Puter",
    "tagline": "Web-based cloud OS with file storage, apps, and remote desktop in the browser",
    "descriptionMd": "Puter is a self-hosted web operating system that provides a full desktop environment accessible via any browser. It includes a cloud file system, a built-in app platform (text editor, code editor, terminal, games), and APIs that allow developers to build web apps on top of the Puter platform. The system is designed to be highly extensible and fast, with a Node.js backend and a React-based frontend. It can replace cloud storage and lightweight SaaS tools for personal or team use.",
    "repoUrl": "https://github.com/heyputer/puter",
    "websiteUrl": "https://puter.com/",
    "demoUrl": "https://puter.com/",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "google-drive",
      "dropbox",
      "box"
    ],
    "license": "AGPL-3.0",
    "language": "Nodejs",
    "githubStars": 42379,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosted setup is more complex than advertised; production hardening requires significant effort\n- No native desktop sync client; all access is browser-based\n- Third-party app ecosystem is nascent and lacks the breadth of Google Workspace or Office 365\n- Enterprise features (SSO, audit logs, compliance) are not yet available in the self-hosted version",
    "tags": [
      "cloud-os",
      "file-storage",
      "web-desktop",
      "platform",
      "remote-access"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "harbor",
    "name": "Harbor",
    "tagline": "Cloud native container image registry with vulnerability scanning and access control",
    "descriptionMd": "Harbor is a CNCF-graduated open-source container image registry that adds enterprise features on top of the standard Docker Registry. It provides role-based access control, vulnerability scanning via integrations with Trivy or Clair, image signing with Notary, replication between registry instances, and a web UI for managing projects and users. Harbor is typically deployed using Docker Compose for smaller setups or Helm charts for Kubernetes environments in production.",
    "repoUrl": "https://github.com/goharbor/harbor",
    "websiteUrl": "https://goharbor.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "box"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 28756,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Scoped to container/OCI artifacts only; not a general-purpose file storage solution\n- High operational overhead; requires PostgreSQL, Redis, and careful networking configuration\n- Upgrade process between major versions can be complex and error-prone\n- Managed cloud registries (ECR, GCR, ACR) offer tighter CI/CD integrations out of the box",
    "tags": [
      "container-registry",
      "docker",
      "kubernetes",
      "security",
      "devops"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "cloudreve",
    "name": "Cloudreve",
    "tagline": "Multi-storage cloud file management system with sharing, sync, and a web UI",
    "descriptionMd": "Cloudreve is a self-hosted cloud storage platform that supports multiple backend storage providers including local disk, Qiniu, Aliyun OSS, Tencent COS, OneDrive, S3-compatible stores, and remote instances. It offers a polished web file manager with drag-and-drop uploads, folder sharing with password protection, WebDAV access, and a built-in user management system. Cloudreve is distributed as a single binary or Docker image, making initial deployment simple.",
    "repoUrl": "https://github.com/cloudreve/cloudreve",
    "websiteUrl": "https://cloudreve.org/",
    "demoUrl": "https://demo.cloudreve.org",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 28153,
    "lastCommitAt": "2026-06-13",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No native desktop sync client; relies on WebDAV or manual uploads\n- Collaborative document editing (Google Docs equivalent) is absent\n- Mobile apps are community-maintained and not officially supported\n- Advanced team/enterprise features like audit logs and granular permissions are limited",
    "tags": [
      "file-storage",
      "cloud-drive",
      "sharing",
      "webdav",
      "multi-storage"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "transfer-sh",
    "name": "transfer.sh",
    "tagline": "Simple command-line file sharing with URL-based access and optional encryption",
    "descriptionMd": "transfer.sh is a minimalist self-hosted file sharing server that allows users to upload files from the command line with a single `curl` command and receive a shareable URL. It supports multiple storage backends (local filesystem, S3, Google Cloud Storage, Storj) and offers optional client-side encryption via GPG. Files are stored temporarily with configurable TTLs. The server is written in Go and deploys as a single binary or Docker container with virtually no configuration.",
    "repoUrl": "https://github.com/dutchcoders/transfer.sh",
    "websiteUrl": "https://github.com/dutchcoders/transfer.sh",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 15857,
    "lastCommitAt": "2026-06-13",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No web UI for browsing or managing stored files; purely CLI/API-driven\n- No user accounts, access control, or per-user storage quotas\n- Files are temporary by design; not suitable for persistent storage or file organization\n- No sync client, versioning, or folder hierarchy support",
    "tags": [
      "file-sharing",
      "cli",
      "uploads",
      "ephemeral",
      "s3"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "filestash",
    "name": "Filestash",
    "tagline": "Web file manager connecting to FTP, SFTP, WebDAV, S3, Git, Dropbox, and Google Drive",
    "descriptionMd": "Filestash is a self-hosted web file manager that acts as a universal frontend for a wide variety of storage backends including FTP, SFTP, WebDAV, Git repositories, Amazon S3, Minio, Dropbox, and Google Drive. It provides a unified browser-based interface for navigating, uploading, downloading, and editing files regardless of where they are stored. Filestash includes a built-in text/code editor and media viewer. It deploys via Docker with minimal configuration and supports plugin-based authentication.",
    "repoUrl": "https://github.com/mickael-kerjean/filestash",
    "websiteUrl": "https://www.filestash.app/",
    "demoUrl": "https://demo.filestash.app/",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 14325,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Advanced features (video transcoding, full-text search) are locked behind a commercial license\n- No real-time collaborative editing; file editing is single-user\n- No desktop sync client; all interaction is through the web interface\n- User and permission management is basic; not suitable as a primary cloud storage replacement for teams",
    "tags": [
      "file-manager",
      "ftp",
      "sftp",
      "s3",
      "webdav"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "sftpgo-community-edition",
    "name": "sftpgo Community Edition",
    "tagline": "Fully-featured SFTP server with FTP/S and WebDAV support",
    "descriptionMd": "SFTPGo is a highly configurable SFTP server written in Go that also supports FTP/S and WebDAV protocols. It provides a web-based admin UI, user management with virtual folders, per-user storage quotas, and event-driven actions. The server can store files locally, on S3-compatible storage, Google Cloud Storage, or Azure Blob. Deployment is straightforward via a single binary, Docker, or system packages.",
    "repoUrl": "https://github.com/drakkan/sftpgo",
    "websiteUrl": "https://github.com/drakkan/sftpgo",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "box",
      "google-drive"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 12180,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in collaborative document editing; files are raw storage only\n- Web UI is admin-focused, lacks a polished end-user sharing experience compared to Dropbox\n- Mobile sync clients are not provided natively; third-party clients needed\n- Real-time collaboration and commenting features absent",
    "tags": [
      "sftp",
      "file-server",
      "ftp",
      "webdav",
      "storage"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "miniserve",
    "name": "miniserve",
    "tagline": "Single-binary CLI tool to serve files and directories over HTTP",
    "descriptionMd": "miniserve is a lightweight Rust CLI tool that instantly serves a local directory over HTTP with a clean web interface. It supports file uploads, directory listing with sorting, authentication via HTTP Basic Auth, archive downloads (zip/tar), and QR code generation for mobile access. No config file is required; simply run the binary pointing at a path.",
    "repoUrl": "https://github.com/svenstaro/miniserve",
    "websiteUrl": "https://github.com/svenstaro/miniserve",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "MIT",
    "language": "Rust",
    "githubStars": 7676,
    "lastCommitAt": "2026-06-01",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No user accounts or per-user permissions; authentication is a single shared password\n- No persistent file management, versioning, or trash/restore\n- Not designed for multi-user concurrent collaboration\n- No sync client; purely a temporary HTTP-based share mechanism",
    "tags": [
      "file-sharing",
      "http",
      "cli",
      "lightweight",
      "upload"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "onionshare",
    "name": "OnionShare",
    "tagline": "Securely and anonymously share files of any size over Tor",
    "descriptionMd": "OnionShare lets you share files, host websites, and chat anonymously by creating temporary Tor onion services directly from your desktop or CLI. The recipient only needs the Tor Browser to access the share with no accounts or central servers involved. It supports both sending and receiving files, anonymous drop boxes, and ephemeral chat rooms. Designed for journalists, activists, and anyone requiring strong anonymity.",
    "repoUrl": "https://github.com/onionshare/onionshare",
    "websiteUrl": "https://github.com/onionshare/onionshare",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "GPL-3.0",
    "language": "Python",
    "githubStars": 6994,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires Tor; recipients need Tor Browser, creating friction for non-technical users\n- Shares are typically ephemeral and one-time by default; not suited for persistent storage\n- No folder sync, versioning, or long-term file organisation\n- Transfer speeds are slow due to Tor network routing",
    "tags": [
      "tor",
      "anonymous",
      "file-sharing",
      "privacy",
      "secure"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "tiny-file-manager",
    "name": "Tiny File Manager",
    "tagline": "Single-file PHP web file manager that's fast and lightweight",
    "descriptionMd": "Tiny File Manager is a self-contained single PHP file that provides a full web-based file manager accessible via any browser. It supports multi-user access with configurable roles, file upload/download/rename/delete, inline text editing, archive extraction, and image preview. Deployment requires only dropping one file onto an existing PHP web server with no database.",
    "repoUrl": "https://github.com/prasathmani/tinyfilemanager",
    "websiteUrl": "https://tinyfilemanager.github.io",
    "demoUrl": "https://tinyfilemanager.github.io/demo/",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 5922,
    "lastCommitAt": "2026-05-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No file versioning or change history\n- No desktop or mobile sync clients; purely browser-based access\n- User management is flat config-file based; no LDAP or SSO integration\n- No real-time collaboration or file commenting",
    "tags": [
      "file-manager",
      "php",
      "web-ui",
      "single-file",
      "lightweight"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "opencloud",
    "name": "OpenCloud",
    "tagline": "Open-source file sharing and collaboration platform built on ownCloud Infinite Scale",
    "descriptionMd": "OpenCloud is a modern file sharing and collaboration platform forked from ownCloud Infinite Scale, written as microservices in Go with a Vue.js frontend. It offers file sync, sharing with fine-grained permissions, WebDAV/CalDAV/CardDAV, Spaces (team drives), and a plugin ecosystem. The platform is designed for horizontal scalability and uses S3-compatible object storage as backend.",
    "repoUrl": "https://github.com/opencloud-eu/opencloud",
    "websiteUrl": "https://docs.opencloud.eu/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 5612,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Built-in office document co-editing requires a separately deployed Collabora or ONLYOFFICE instance\n- Mobile clients still maturing compared to Dropbox or Google Drive polish\n- Admin complexity is higher than simpler alternatives; microservices require more ops knowledge\n- Third-party integrations (Google Workspace-style apps) are limited",
    "tags": [
      "file-sharing",
      "collaboration",
      "sync",
      "webdav",
      "cloud-storage"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "unison",
    "name": "Unison",
    "tagline": "Bidirectional file synchronisation tool for Linux, macOS, and Windows",
    "descriptionMd": "Unison is a mature bidirectional file synchroniser that detects and reconciles changes made on both ends of a sync pair, even when offline. It uses an rsync-like algorithm for efficient delta transfers over SSH or direct socket connections and handles conflicts by prompting the user. Available as both a CLI and a GTK GUI, it supports multiple sync profiles and incremental state tracking.",
    "repoUrl": "https://github.com/bcpierce00/unison",
    "websiteUrl": "https://www.cis.upenn.edu/~bcpierce/unison/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "GPL-3.0",
    "language": "deb",
    "githubStars": 5374,
    "lastCommitAt": "2026-06-08",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No web UI; requires CLI or basic GTK client, not suitable for non-technical users\n- No mobile clients for iOS or Android\n- Conflict resolution is interactive and not automated; requires user intervention\n- No file versioning or history; deleted files cannot be recovered from the tool itself",
    "tags": [
      "sync",
      "file-sync",
      "bidirectional",
      "cli",
      "ssh"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "tagspaces",
    "name": "TagSpaces",
    "tagline": "Offline-first file manager and organiser with tagging and note-taking",
    "descriptionMd": "TagSpaces is a cross-platform, privacy-focused file manager that uses tags stored in the file system (sidecar files or filenames) rather than a central database, keeping you independent of any vendor. It provides a rich web-based UI, full-text search, markdown notes, Kanban boards, and integrates with WebDAV servers like Nextcloud. A Pro edition adds geo-tagging and additional perspectives.",
    "repoUrl": "https://github.com/tagspaces/tagspaces",
    "websiteUrl": "https://www.tagspaces.org/",
    "demoUrl": "https://demo.tagspaces.com",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "AGPL-3.0",
    "language": "Nodejs",
    "githubStars": 5179,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No native real-time sync daemon; relies on WebDAV or manual folder pointing\n- Collaborative multi-user editing not supported in the community edition\n- Mobile apps are limited in functionality compared to the desktop version\n- Full-text search across large libraries can be slow without prior indexing",
    "tags": [
      "file-manager",
      "tagging",
      "notes",
      "offline",
      "webdav"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "kinto",
    "name": "Kinto",
    "tagline": "Minimalist JSON storage service with sync, sharing, and permissions",
    "descriptionMd": "Kinto is a lightweight Python backend providing a generic JSON storage REST API with offline synchronisation, conflict resolution, and fine-grained permissions. It is designed as a self-hostable Firebase/Sync alternative for web and mobile applications. Kinto supports PostgreSQL or in-memory backends, bucket/collection data organization, and a plugin system for auth, caching, and notifications.",
    "repoUrl": "https://github.com/Kinto/kinto",
    "websiteUrl": "https://kinto.readthedocs.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 4415,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Focused on JSON data sync, not binary file storage or large media uploads\n- No out-of-the-box web UI for end users; requires building a frontend or using kinto-admin\n- Community activity has slowed significantly; long-term maintenance uncertain\n- Less ecosystem tooling compared to more established alternatives like PocketBase",
    "tags": [
      "json",
      "sync",
      "rest-api",
      "storage",
      "offline"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "zipline",
    "name": "Zipline",
    "tagline": "Fast file sharing server with ShareX support and a React web UI",
    "descriptionMd": "Zipline is a lightweight file sharing and upload server commonly used as a ShareX custom uploader backend. It provides a React-based web dashboard for managing uploads, supports image, video, and arbitrary file sharing with short URLs, and offers per-user invite codes and upload quotas. Deployment uses Docker with a PostgreSQL or SQLite database backend.",
    "repoUrl": "https://github.com/diced/zipline",
    "websiteUrl": "https://github.com/diced/zipline",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 3233,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No desktop or mobile sync clients; upload is via browser or ShareX only\n- No folder hierarchy or file organisation beyond a flat uploads list\n- Limited collaboration features; designed as a personal uploader tool\n- No versioning or deleted-file recovery",
    "tags": [
      "file-sharing",
      "upload",
      "sharex",
      "images",
      "url-shortener"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "filegator",
    "name": "FileGator",
    "tagline": "Multi-user PHP file manager with a modern single-page frontend",
    "descriptionMd": "FileGator is a multi-user web-based file manager built with PHP and Vue.js. It supports local filesystem, FTP, and S3 backends, with per-user and per-group permissions, file previews, bulk operations, and drag-and-drop uploads. The admin can create user accounts with home directories and quota limits. Deployment requires only a PHP web server — no database needed.",
    "repoUrl": "https://github.com/filegator/filegator",
    "websiteUrl": "https://filegator.io/",
    "demoUrl": "https://demo.filegator.io",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive",
      "box"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 3016,
    "lastCommitAt": "2026-05-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No sync clients for desktop or mobile; purely web-based access\n- No file versioning or trash with recovery\n- No real-time collaborative editing or commenting on files\n- LDAP/SSO integration is not built-in; custom auth requires code changes",
    "tags": [
      "file-manager",
      "php",
      "multi-user",
      "web-ui",
      "s3"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "picoshare",
    "name": "PicoShare",
    "tagline": "Minimalist self-hosted service for sharing images and files",
    "descriptionMd": "PicoShare is a dead-simple file sharing server written in Go that stores files in SQLite, requiring no external database or object storage. It generates direct-download links without any third-party trackers, ads, or compression. The web UI allows setting expiry dates and download limits per share. Ideal for self-hosters who want a frictionless drop-and-share workflow.",
    "repoUrl": "https://github.com/mtlynch/picoshare",
    "websiteUrl": "https://github.com/mtlynch/picoshare",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 2949,
    "lastCommitAt": "2026-05-26",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Single-user only; no multi-user accounts or team sharing features\n- No file browsing, folder structures, or persistent storage management\n- No mobile or desktop sync client; shares are one-directional links\n- SQLite storage may not scale to large file volumes or high concurrency",
    "tags": [
      "file-sharing",
      "upload",
      "links",
      "minimalist",
      "sqlite"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "yopass",
    "name": "Yopass",
    "tagline": "Secure one-time sharing of secrets, passwords, and small files",
    "descriptionMd": "Yopass is a secret-sharing service that encrypts secrets client-side before storing them with a TTL in Memcached or Redis, then destroys them after the first read. It supports passwords, text secrets, and small file attachments. The Go server and React frontend can be deployed via Docker; a public instance at yopass.se is also available.",
    "repoUrl": "https://github.com/jhaals/yopass",
    "websiteUrl": "https://github.com/jhaals/yopass",
    "demoUrl": "https://yopass.se/",
    "logoUrl": null,
    "categorySlug": "file-storage",
    "replaces": [
      "dropbox",
      "google-drive"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 2866,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Not a general-purpose file storage tool; limited to small secret payloads\n- No persistent file storage; every secret auto-deletes after first access or TTL\n- No user accounts, history, or file browsing capabilities\n- Requires Memcached or Redis as an external dependency",
    "tags": [
      "secrets",
      "password-sharing",
      "one-time-link",
      "encryption",
      "privacy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "caddy",
    "name": "Caddy",
    "tagline": "Automatic HTTPS web server and reverse proxy with zero config TLS",
    "descriptionMd": "Caddy is a powerful, production-ready open source web server and reverse proxy written in Go. Its defining feature is automatic TLS certificate provisioning and renewal via Let's Encrypt and ZeroSSL, requiring zero manual certificate management. It supports HTTP/1.1, HTTP/2, HTTP/3, static file serving, PHP FastCGI, load balancing, and a JSON or Caddyfile configuration syntax. Plugins extend it to a full application delivery platform.",
    "repoUrl": "https://github.com/caddyserver/caddy",
    "websiteUrl": "https://caddyserver.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "render"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 73491,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Not a full PaaS; no git push deploy, build pipelines, or app lifecycle management\n- No built-in CI/CD integration; needs to be combined with other tools for deployments\n- Dashboard and metrics require third-party tools (Prometheus, Grafana) — none built-in\n- No managed database provisioning or environment variable secrets management",
    "tags": [
      "web-server",
      "reverse-proxy",
      "https",
      "tls",
      "load-balancer"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "traefik",
    "name": "Traefik",
    "tagline": "Cloud-native HTTP reverse proxy and load balancer for microservices",
    "descriptionMd": "Traefik is a modern reverse proxy and load balancer written in Go, designed for dynamic microservice environments. It automatically discovers service configurations from Docker, Kubernetes, Consul, and other providers, generates Let's Encrypt TLS certificates automatically, and exposes a real-time dashboard and metrics. It supports HTTP, TCP, and UDP, with middleware for rate limiting, authentication, circuit breaking, and tracing.",
    "repoUrl": "https://github.com/traefik/traefik",
    "websiteUrl": "https://traefik.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "vercel",
      "render"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 63715,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Ingress/routing layer only; does not provide git-based deployments, build systems, or app management\n- Configuration via labels and providers has a steep learning curve compared to Heroku's zero-config UX\n- No built-in secrets management or environment variable injection for deployed apps\n- Enterprise features (clustering, advanced WAF, SSO) require the commercial Traefik Enterprise edition",
    "tags": [
      "reverse-proxy",
      "load-balancer",
      "kubernetes",
      "docker",
      "microservices"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "casaos",
    "name": "CasaOS",
    "tagline": "Simple, elegant home cloud OS for personal servers and NAS devices",
    "descriptionMd": "CasaOS is a lightweight personal cloud operating system built on top of Docker, designed to make self-hosting approachable for non-technical users. It provides a clean web-based dashboard for managing apps, files, and system resources. One-click app installation via its app store covers dozens of popular self-hosted applications. Deploys via a single shell script on Debian/Ubuntu-based systems or Raspberry Pi.",
    "repoUrl": "https://github.com/IceWhaleTech/CasaOS",
    "websiteUrl": "https://casaos.zimaspace.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 34124,
    "lastCommitAt": "2025-08-06",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in CI/CD pipelines or Git-based deploy workflows like Heroku/Render\n- App store limited to curated Docker images; no support for custom buildpacks\n- No auto-scaling, horizontal scaling, or load balancing across multiple hosts\n- SSL/TLS certificate management is basic compared to managed PaaS offerings",
    "tags": [
      "home-server",
      "self-hosting",
      "docker",
      "dashboard",
      "nas"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "nginx-proxy-manager",
    "name": "Nginx Proxy Manager",
    "tagline": "Web UI for managing Nginx reverse proxy hosts with automatic SSL",
    "descriptionMd": "Nginx Proxy Manager is a Docker-based tool that provides a simple web interface for managing Nginx reverse proxy configurations. It supports automatic Let's Encrypt SSL certificate provisioning, access lists, redirections, and custom Nginx configurations. The interface allows non-technical users to expose local services over the internet without writing raw Nginx config files. Deploys as a Docker Compose stack with a bundled SQLite or MySQL database.",
    "repoUrl": "https://github.com/NginxProxyManager/nginx-proxy-manager",
    "websiteUrl": "https://nginxproxymanager.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "vercel"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 33356,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in application deployment or build pipelines\n- Lacks advanced traffic management features like rate limiting, circuit breaking, or canary deployments\n- No native support for multi-node clustering or high availability\n- Monitoring and logging capabilities are minimal compared to managed platforms",
    "tags": [
      "reverse-proxy",
      "nginx",
      "ssl",
      "docker",
      "web-server"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "nginx",
    "name": "NGINX",
    "tagline": "High-performance HTTP server, reverse proxy, and TCP/UDP proxy",
    "descriptionMd": "NGINX is a battle-tested, high-performance web server and reverse proxy used to serve millions of sites worldwide. It excels at handling concurrent connections with low memory footprint via its event-driven, asynchronous architecture. Capabilities include static file serving, reverse proxying with load balancing, SSL/TLS termination, HTTP/2 and HTTP/3 support, and TCP/UDP proxying. Deploys natively on Linux via package manager or from source; Docker images are also widely available.",
    "repoUrl": "https://github.com/nginx/nginx",
    "websiteUrl": "https://nginx.org/en/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "vercel"
    ],
    "license": "BSD-2-Clause",
    "language": "C",
    "githubStars": 30975,
    "lastCommitAt": "2026-06-17",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Configuration is entirely file-based with no built-in web UI for management\n- No application deployment, build, or CI/CD capabilities out of the box\n- SSL certificate management requires manual setup or external tools (e.g., Certbot)\n- Lacks application-level observability dashboards; requires third-party tools for metrics",
    "tags": [
      "web-server",
      "reverse-proxy",
      "load-balancer",
      "ssl",
      "proxy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "safeline",
    "name": "SafeLine",
    "tagline": "Web application firewall and reverse proxy to block attacks and exploits",
    "descriptionMd": "SafeLine is a modern Web Application Firewall (WAF) that sits in front of your web services as a reverse proxy and inspects traffic to block common attacks such as SQL injection, XSS, and OWASP Top 10 threats. It features a web-based dashboard for configuring protection rules, viewing attack logs, and managing upstream services. Built by Chaitin Technology, it uses semantic analysis for detection rather than simple pattern matching. Deploys via Docker Compose with a live demo available.",
    "repoUrl": "https://github.com/chaitin/SafeLine",
    "websiteUrl": "https://waf.chaitin.com/",
    "demoUrl": "https://demo.waf.chaitin.com/",
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "render"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 21545,
    "lastCommitAt": "2026-06-17",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Not a PaaS replacement in the traditional sense; focused solely on WAF/security, not app deployment\n- Bot management and advanced DDoS protection lag behind commercial WAF offerings like Cloudflare\n- No built-in CDN or global edge network for performance benefits\n- API security coverage (GraphQL, gRPC) is more limited than enterprise WAF solutions",
    "tags": [
      "waf",
      "security",
      "reverse-proxy",
      "firewall",
      "docker"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "pangolin",
    "name": "Pangolin",
    "tagline": "Identity-aware tunneled reverse proxy with WireGuard and access control",
    "descriptionMd": "Pangolin is a self-hosted tunneling reverse proxy that uses WireGuard under the hood to securely expose internal services without opening firewall ports. It includes an identity-aware access control layer, a web dashboard for managing tunnels and users, and serves as an open-source alternative to Cloudflare Tunnel and Tailscale. Services can be made accessible via subdomains with granular per-service authentication policies. Deploys via Docker Compose.",
    "repoUrl": "https://github.com/fosrl/pangolin",
    "websiteUrl": "https://digpangolin.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "render"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 21347,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires a publicly accessible VPS to act as the tunnel endpoint, adding infrastructure overhead\n- No managed global edge network; latency depends on your VPS location\n- Ecosystem and third-party integrations are much smaller than Cloudflare Tunnel or Tailscale\n- Mobile client support and device management are limited compared to Tailscale",
    "tags": [
      "tunnel",
      "wireguard",
      "reverse-proxy",
      "access-control",
      "vpn"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "umbrel",
    "name": "Umbrel",
    "tagline": "Beautiful personal server OS with one-click app installs for home servers",
    "descriptionMd": "Umbrel is a personal server operating system that makes self-hosting approachable with a polished, app-store-driven UI. It runs on Raspberry Pi 4 or Ubuntu/Debian machines and provides one-click installation for apps spanning media, finance, productivity, and developer tools. Originally built for Bitcoin and Lightning nodes, it has evolved into a general-purpose home server platform. Note: the core OS shell is proprietary, though many bundled apps are open source.",
    "repoUrl": "https://github.com/getumbrel/umbrel",
    "websiteUrl": "https://umbrel.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "⊘ Proprietary",
    "language": "Nodejs",
    "githubStars": 11504,
    "lastCommitAt": "2026-05-12",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Core OS is proprietary, limiting customization and community extensibility\n- No CI/CD pipelines or Git-based deployment workflows\n- App store is curated and closed; adding custom apps requires workarounds\n- Not suitable for multi-user or enterprise deployments; designed for single personal use",
    "tags": [
      "home-server",
      "self-hosting",
      "app-store",
      "raspberry-pi",
      "personal-cloud"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "bunkerweb",
    "name": "BunkerWeb",
    "tagline": "Next-generation open-source Web Application Firewall for protecting web services",
    "descriptionMd": "BunkerWeb is a security-focused web server and WAF built on NGINX that automatically hardens your web services against common threats. It integrates OWASP CRS rules, bot detection, rate limiting, and security headers out of the box, with a plugin system for extensibility. Configuration can be done via environment variables, files, or its web UI (BunkerWeb UI). Deploys as a deb/rpm package, Docker container, or Docker Compose stack.",
    "repoUrl": "https://github.com/bunkerity/bunkerweb",
    "websiteUrl": "https://www.bunkerweb.io",
    "demoUrl": "https://demo.bunkerweb.io",
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "render"
    ],
    "license": "AGPL-3.0",
    "language": "deb",
    "githubStars": 10640,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- WAF/security-focused; lacks any application deployment or build pipeline capabilities\n- No global CDN or edge network; all traffic routes through self-hosted nodes\n- Advanced bot management and behavioral analytics are less mature than commercial WAFs\n- Multi-node clustering and high-availability configurations require significant manual setup",
    "tags": [
      "waf",
      "security",
      "nginx",
      "firewall",
      "web-server"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "tipi",
    "name": "Tipi",
    "tagline": "Homeserver manager with one-command setup and one-click app installs",
    "descriptionMd": "Tipi (runtipi) is a self-hosted homeserver management platform that simplifies deploying and managing dozens of popular open-source applications. A single setup command installs the platform, and apps can then be installed with one click from a curated app store of 200+ apps. Each app runs in its own Docker container, and Tipi manages networking, storage, and updates automatically. It targets Debian/Ubuntu hosts and requires minimal Docker knowledge.",
    "repoUrl": "https://github.com/runtipi/runtipi",
    "websiteUrl": "https://runtipi.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "GPL-3.0",
    "language": "Shell",
    "githubStars": 9494,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No Git-based or CI/CD deployment pipeline for custom applications\n- App store is curated; deploying arbitrary custom Docker apps requires manual configuration\n- No support for multi-server or distributed deployments\n- Limited monitoring and observability tooling built in",
    "tags": [
      "home-server",
      "self-hosting",
      "docker",
      "app-store",
      "personal-cloud"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "sandstorm",
    "name": "Sandstorm",
    "tagline": "Personal server platform for running self-hosted web apps with strong sandboxing",
    "descriptionMd": "Sandstorm is a self-hosting platform that packages web applications as \"grains\" — isolated, capability-based sandboxes built on Linux namespaces. Each app instance is strongly isolated from others, making security breaches harder to propagate. It features a marketplace-style app catalog, fine-grained sharing controls, and a unified authentication system. Primarily targets C++ and server-side web application developers willing to package their apps for the Sandstorm format.",
    "repoUrl": "https://github.com/sandstorm-io/sandstorm",
    "websiteUrl": "https://sandstorm.io/",
    "demoUrl": "https://demo.sandstorm.io/",
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "Apache-2.0",
    "language": "C++",
    "githubStars": 7036,
    "lastCommitAt": "2026-06-17",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- App ecosystem is very small; most popular self-hosted apps are not packaged for Sandstorm\n- Project has limited active development; community and update cadence have slowed significantly\n- No Docker support; apps must be specially packaged in Sandstorm's proprietary SPK format\n- No horizontal scaling, load balancing, or modern cloud-native deployment patterns",
    "tags": [
      "self-hosting",
      "sandboxing",
      "security",
      "personal-server",
      "isolation"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "openmediavault",
    "name": "OpenMediaVault",
    "tagline": "Debian-based NAS OS with web UI for managing file sharing and media services",
    "descriptionMd": "OpenMediaVault (OMV) is a network-attached storage solution built on Debian Linux, providing a comprehensive web-based administration interface for managing storage, file sharing protocols, and services. It supports SMB/CIFS, NFS, FTP, SFTP, SSH, rsync, and a plugin system that extends it with Docker, ZFS, and more. OMV is designed to be installed as the primary OS on a dedicated machine. Ideal for home NAS builds and small office storage servers.",
    "repoUrl": "https://github.com/openmediavault/openmediavault",
    "websiteUrl": "https://www.openmediavault.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 6800,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- NAS/storage focused; lacks any application deployment pipeline or build system\n- Web UI is functional but dated compared to modern hosting dashboards\n- Plugin ecosystem requires manual installation and can have compatibility issues across major versions\n- Not designed for hosting arbitrary web applications; app deployment requires separate tooling",
    "tags": [
      "nas",
      "storage",
      "file-sharing",
      "smb",
      "debian"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "dietpi",
    "name": "DietPi",
    "tagline": "Ultra-minimal Debian OS for SBCs with easy service installation scripts",
    "descriptionMd": "DietPi is a highly optimized, minimal Debian-based Linux OS targeting single-board computers (Raspberry Pi, Orange Pi, Rock Pi, etc.) and x86 VMs/bare metal. It strips out unnecessary packages to minimize resource usage, then provides `dietpi-software` — an interactive menu-driven installer for 200+ self-hosted services including media servers, VPNs, databases, and web servers. DietPi-specific tools handle automated updates, backups, and system configuration. No Docker dependency required for most apps.",
    "repoUrl": "https://github.com/MichaIng/DietPi",
    "websiteUrl": "https://dietpi.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "GPL-2.0",
    "language": "Shell",
    "githubStars": 6128,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- OS-level tool; no web-based deployment dashboard or CI/CD integration\n- Software installs are opinionated scripts; customizing or composing services requires Linux knowledge\n- No built-in container orchestration; Docker is available but not the primary deployment model\n- No multi-server management; designed for single-node personal use",
    "tags": [
      "raspberry-pi",
      "sbc",
      "minimal-os",
      "self-hosting",
      "debian"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "cosmos-server",
    "name": "Cosmos",
    "tagline": "Secure self-hosting gateway and server manager with built-in privacy features",
    "descriptionMd": "Cosmos is a self-hosted server management platform that acts as a secure reverse proxy gateway combined with an app manager. It provides authentication, authorization, OAuth2/SSO, and automatic HTTPS for all proxied apps via a unified web UI. Apps can be deployed from a marketplace as Docker containers, with Cosmos handling networking and certificate provisioning automatically. Designed to be the single entry point and control plane for a personal or small-team server.",
    "repoUrl": "https://github.com/azukaar/cosmos-Server",
    "websiteUrl": "https://cosmos-cloud.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "render",
      "netlify"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 5980,
    "lastCommitAt": "2026-05-26",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No Git-based or CI/CD deployment pipeline for custom code\n- App marketplace is smaller and less mature than CasaOS or Umbrel\n- Multi-server and horizontal scaling are not supported\n- Documentation and community support are limited compared to more established platforms",
    "tags": [
      "reverse-proxy",
      "self-hosting",
      "docker",
      "sso",
      "server-manager"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "zoraxy",
    "name": "Zoraxy",
    "tagline": "General-purpose HTTP reverse proxy and forwarding tool with web UI",
    "descriptionMd": "Zoraxy is a lightweight, Go-based HTTP reverse proxy with a built-in web management interface. It supports virtual hosting, subdomain routing, TLS certificate management with Let's Encrypt, WebSocket proxying, and basic access control. It is designed to be a simpler alternative to Nginx Proxy Manager for users who want a single binary with a clean UI rather than a Docker Compose stack. Deploys as a single Go binary or via Docker.",
    "repoUrl": "https://github.com/tobychui/zoraxy",
    "websiteUrl": "https://zoraxy.aroz.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "render"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 5267,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No application deployment or build pipeline capabilities\n- Advanced load balancing algorithms (least-connections, consistent hashing) are absent\n- Plugin and extensibility ecosystem is minimal compared to NGINX or Caddy\n- High-availability and clustering configurations are not officially supported",
    "tags": [
      "reverse-proxy",
      "http",
      "web-server",
      "ssl",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "pomerium",
    "name": "Pomerium",
    "tagline": "Identity-aware reverse proxy with OAuth2 SSO for securely exposing internal apps",
    "descriptionMd": "Pomerium is an open-source identity-aware access proxy that adds authentication and authorization in front of any internal web application. It integrates with identity providers (Google, Okta, Azure AD, GitHub, etc.) via OAuth2/OIDC and enforces policy-based access control before traffic reaches upstream services. Originally a successor to the deprecated oauth2_proxy, it supports context-aware policies based on user identity, groups, and device state. Deploys as a single Go binary or via Docker/Kubernetes with official Helm charts.",
    "repoUrl": "https://github.com/pomerium/pomerium",
    "websiteUrl": "https://www.pomerium.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "heroku",
      "netlify",
      "render"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 4858,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No application deployment or hosting capabilities; purely an access proxy layer\n- Policy configuration via YAML can be complex; lacks a full-featured web UI in the open-source edition\n- Device posture checking and some enterprise features require the commercial Pomerium Zero/Enterprise tier\n- Setup complexity is significantly higher than simpler tools like Nginx Proxy Manager for basic use cases",
    "tags": [
      "identity-aware-proxy",
      "sso",
      "oauth2",
      "access-control",
      "reverse-proxy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "swag-secure-web-application-gateway",
    "name": "SWAG (Secure Web Application Gateway)",
    "tagline": "Nginx reverse proxy with built-in Let's Encrypt SSL and fail2ban protection",
    "descriptionMd": "SWAG is a Docker image from LinuxServer.io that bundles Nginx, PHP, Certbot for automatic Let's Encrypt certificate provisioning, and fail2ban for intrusion prevention. It is designed as a turnkey reverse proxy for self-hosted services, featuring pre-configured proxy samples for hundreds of popular applications. Deployment is a single `docker run` command or Docker Compose, and the container auto-renews TLS certificates on schedule.",
    "repoUrl": "https://github.com/linuxserver/docker-swag",
    "websiteUrl": "https://github.com/linuxserver/docker-swag",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "netlify",
      "vercel",
      "render"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 3679,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No CI/CD pipeline or git-push-to-deploy workflow like Netlify/Vercel.\n- No edge CDN or global distribution; traffic is served from a single host.\n- No serverless functions or build system; it is purely a reverse proxy and SSL terminator.\n- Dashboard and observability are minimal compared to managed PaaS platforms.",
    "tags": [
      "reverse-proxy",
      "nginx",
      "ssl",
      "docker",
      "security"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "go-doxy",
    "name": "go-doxy",
    "tagline": "Lightweight Go reverse proxy with WebUI, Docker integration, and auto container sleep",
    "descriptionMd": "go-doxy (godoxy) is a lightweight, performant reverse proxy written in Go with a built-in web UI for configuration and monitoring. It integrates natively with Docker to automatically detect containers and route traffic, and can automatically stop idle containers and start them on incoming requests to save resources. Configuration is managed via a clean web interface or YAML files, and it supports Let's Encrypt for automatic TLS.",
    "repoUrl": "https://github.com/yusing/godoxy",
    "websiteUrl": "https://github.com/yusing/godoxy",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "paas-deploy",
    "replaces": [
      "netlify",
      "vercel",
      "render"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 3357,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No CI/CD or git integration; purely a runtime reverse proxy, not a deployment platform.\n- No build pipeline, static site hosting, or serverless function support.\n- Ecosystem maturity and documentation are much thinner than Traefik or managed alternatives.\n- No global CDN or multi-region routing.",
    "tags": [
      "reverse-proxy",
      "docker",
      "webui",
      "go",
      "auto-start"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "novu",
    "name": "Novu",
    "tagline": "Open-source notification infrastructure for multi-channel developer alerts",
    "descriptionMd": "Novu is a full-stack notification infrastructure platform that gives developers a unified API to send notifications across email, SMS, push, chat, and in-app channels. It provides a visual workflow editor to design multi-step notification sequences, subscriber management, and provider integrations for services like Sendgrid, Twilio, FCM, and Slack. It deploys via Docker Compose and exposes a REST API plus SDKs for major languages.",
    "repoUrl": "https://github.com/novuhq/novu/",
    "websiteUrl": "https://novu.co/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 39174,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Not a real-time team chat; it is a notification delivery layer, not a conversation platform.\n- Self-hosted setup requires Postgres, MongoDB, Redis, and S3-compatible storage, adding operational burden.\n- Managed cloud features (advanced analytics, SLA guarantees) are not available in the open-source edition.\n- Mobile SDK for in-app notifications has fewer features than commercial equivalents like OneSignal.",
    "tags": [
      "notifications",
      "multi-channel",
      "email",
      "push",
      "sms"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ntfy",
    "name": "ntfy",
    "tagline": "Simple HTTP-based push notifications to phone and desktop, no account needed",
    "descriptionMd": "ntfy is a simple, open-source pub/sub notification service that lets you send push notifications to Android, iOS, and desktop via plain HTTP PUT or POST requests. It requires no account or API key by default and supports Android and iOS native apps, a progressive web app, and a CLI. The server is a single Go binary that supports SQLite or a PostgreSQL backend and can be secured with access control lists and TLS.",
    "repoUrl": "https://github.com/binwiederhier/ntfy",
    "websiteUrl": "https://ntfy.sh/",
    "demoUrl": "https://ntfy.sh/app",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 30898,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No team chat, threading, or message history browsing; designed for one-way push alerts only.\n- No rich message formatting, file sharing, or reactions.\n- Rate limiting and attachment storage on the free public server are intentionally restrictive.\n- iOS push requires routing through ntfy's own APNs proxy unless you self-compile the app.",
    "tags": [
      "push-notifications",
      "http",
      "pub-sub",
      "go",
      "mobile"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "apprise",
    "name": "Apprise",
    "tagline": "Python library and CLI to send notifications to 70+ services via one unified API",
    "descriptionMd": "Apprise is a Python library and CLI tool that provides a single interface to send notifications to over 70 services including Telegram, Discord, Slack, PagerDuty, Amazon SNS, Gotify, Pushover, and many others. Applications integrate it as a library or call the optional REST microservice (apprise-api) to decouple notification dispatch from application logic. It supports plain text, Markdown, and HTML message formats and can fan out to multiple targets simultaneously.",
    "repoUrl": "https://github.com/caronc/apprise",
    "websiteUrl": "https://github.com/caronc/apprise",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 16772,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Not a chat platform; Apprise only dispatches notifications, it has no UI for reading or replying to messages.\n- The optional apprise-api REST service is minimal and not production-hardened with auth by default.\n- No scheduling, retry queuing, or delivery tracking beyond what the target service provides.\n- Configuration is URL-string based, which can be verbose and error-prone for complex setups.",
    "tags": [
      "notifications",
      "multi-service",
      "python",
      "cli",
      "library"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "gotify",
    "name": "Gotify",
    "tagline": "Self-hosted push notification server with Android app and REST API",
    "descriptionMd": "Gotify is a simple self-hosted server for sending and receiving messages via REST API, with an official Android client and a web UI for reading messages. Applications push notifications by POSTing to the Gotify server, and users receive them in real time on their Android device or browser. The server is a single Go binary backed by SQLite, making it easy to run on minimal hardware.",
    "repoUrl": "https://github.com/gotify/server",
    "websiteUrl": "https://gotify.net/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 15160,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Android-only official mobile client; no native iOS app.\n- No team or group channels, threading, or conversation history beyond a simple message list.\n- No file attachments, rich formatting, or reactions.\n- Development has slowed; the project receives infrequent updates compared to alternatives like ntfy.",
    "tags": [
      "push-notifications",
      "android",
      "rest-api",
      "go",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "simplex-chat",
    "name": "SimpleX Chat",
    "tagline": "The most private chat platform — no user IDs, double ratchet E2E encryption",
    "descriptionMd": "SimpleX Chat is a privacy-first messaging platform that uniquely avoids assigning any permanent user identifiers, making it impossible to correlate a user's identity even with access to the server. It uses double ratchet end-to-end encryption for messages and supports text, voice, files, and video calls. Users can self-host their own SMP relay servers, and the mobile apps for iOS and Android are available on official app stores.",
    "repoUrl": "https://github.com/simplex-chat/simplex-chat",
    "websiteUrl": "https://github.com/simplex-chat/simplex-chat",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord",
      "microsoft-teams"
    ],
    "license": "AGPL-3.0",
    "language": "Haskell",
    "githubStars": 11314,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No web client; primarily mobile-focused with a desktop CLI and early-stage desktop app.\n- Self-hosting the SMP server requires manual Haskell build or Docker and knowledge of relay configuration.\n- No workspace/org structure, channels, or administrative tooling suitable for business teams.\n- Integrations and bots ecosystem is minimal compared to Slack or Discord.",
    "tags": [
      "privacy",
      "e2e-encryption",
      "messaging",
      "haskell",
      "no-user-id"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "screego",
    "name": "Screego",
    "tagline": "Browser-based screen sharing for one or many viewers using WebRTC",
    "descriptionMd": "Screego is a lightweight, self-hosted screen sharing tool that runs entirely in the browser using WebRTC. Users create a room and share a link; viewers join without installing any software. It includes a built-in TURN server to handle NAT traversal and supports multiple simultaneous viewers. The server is a single Go binary, making deployment trivial.",
    "repoUrl": "https://github.com/screego/server",
    "websiteUrl": "https://screego.net",
    "demoUrl": "https://app.screego.net/",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 10420,
    "lastCommitAt": "2026-05-13",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Screen sharing only; no video/audio conferencing, chat, or file transfer features.\n- No persistent rooms, user accounts, or scheduling; sessions are ephemeral.\n- No recording capability.\n- TURN server must be open to the internet for external users, requiring firewall configuration.",
    "tags": [
      "screen-sharing",
      "webrtc",
      "browser",
      "go",
      "real-time"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "centrifugo",
    "name": "Centrifugo",
    "tagline": "Language-agnostic real-time messaging server over WebSocket and SSE",
    "descriptionMd": "Centrifugo is a scalable, self-hosted real-time messaging server that supports WebSocket, SSE, SockJS, and HTTP-streaming transports. It is language-agnostic: any backend can publish messages to channels via a REST or gRPC API, and frontend SDKs are available for JavaScript, Swift, Dart, and more. It supports channel history, presence tracking, JWT authentication, and horizontal scaling via Redis or Nats.",
    "repoUrl": "https://github.com/centrifugal/centrifugo",
    "websiteUrl": "https://centrifugal.dev/",
    "demoUrl": "https://github.com/centrifugal/centrifugo#demo",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 10427,
    "lastCommitAt": "2026-06-16",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Developer-facing infrastructure component, not an end-user chat application; requires custom UI.\n- Managed hosting (Centrifugal Cloud) is still early and not yet a full Pusher replacement in pricing.\n- Persistent message storage requires an external database; Centrifugo only provides a short-term history buffer.\n- No built-in admin UI for channel management or user monitoring beyond basic metrics.",
    "tags": [
      "websocket",
      "real-time",
      "pub-sub",
      "go",
      "sse"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "typebot",
    "name": "Typebot",
    "tagline": "Drag-and-drop conversational form builder embeddable in any website or app",
    "descriptionMd": "Typebot is an open-source conversational app builder that lets you create interactive chat-based forms, surveys, and lead capture flows with a visual drag-and-drop editor. It supports conditional logic, native integrations with Webhook, Google Sheets, Notion, Mailchimp, and more, and embeds as a bubble, popup, or inline widget on any site. It deploys via Docker Compose and includes a hosted viewer and result analytics dashboard.",
    "repoUrl": "https://github.com/baptisteArno/typebot.io",
    "websiteUrl": "https://typebot.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 10057,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Focused on conversational forms/chatbots, not team messaging; does not replace Slack for internal communication.\n- Self-hosted version lacks some cloud-only integrations and the AI block that requires an OpenAI key.\n- No native payment processing; requires Stripe integration setup separately.\n- Result export and advanced analytics are more limited than Typeform's paid tiers.",
    "tags": [
      "chatbot",
      "forms",
      "no-code",
      "conversational",
      "embed"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "mumble",
    "name": "Mumble",
    "tagline": "Low-latency, high-quality open-source voice and text chat for gaming and teams",
    "descriptionMd": "Mumble is a mature, low-latency voice over IP and text chat application optimized for real-time group voice communication. It features strong end-to-end encryption via TLS/DTLS, hierarchical channel structures, permission management, and a plugin system for positional audio in games. The server component (Murmur) is cross-platform and deployable as a standalone binary with minimal dependencies.",
    "repoUrl": "https://github.com/mumble-voip/mumble",
    "websiteUrl": "https://wiki.mumble.info/wiki/Main_Page",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord",
      "microsoft-teams"
    ],
    "license": "BSD-3-Clause",
    "language": "C++",
    "githubStars": 8070,
    "lastCommitAt": "2026-06-09",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Desktop client only; no official mobile apps with full feature parity (third-party clients exist but are limited).\n- No text channel persistence, message history search, or file sharing beyond basic in-channel text.\n- UI is dated and less polished compared to Discord or Teams.\n- No video calling, screen sharing, or integrations with productivity tools.",
    "tags": [
      "voip",
      "voice-chat",
      "low-latency",
      "gaming",
      "cpp"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "workadventure",
    "name": "WorkAdventure",
    "tagline": "Virtual office and conference as an interactive 16-bit RPG world in the browser",
    "descriptionMd": "WorkAdventure is an open-source virtual office and event platform where participants navigate a 2D retro RPG map in their browser, triggering video/audio conversations when avatars approach each other using Jitsi Meet. It supports custom Tiled-editor maps, integrated web applications via iframes, and persistent rooms, making it suitable for remote teams, online events, and virtual conferences. Deployment requires Docker Compose with multiple services.",
    "repoUrl": "https://github.com/workadventure/workadventure",
    "websiteUrl": "https://workadventu.re",
    "demoUrl": "https://play.staging.workadventu.re/@/tcm/workadventure/wa-village",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 5533,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosting requires managing 6+ Docker services (pusher, back, front, map-storage, Jitsi, etc.) with non-trivial coordination.\n- Not a general-purpose team chat tool; lacks threaded messaging, async communication, and integrations found in Slack.\n- Video quality and reliability depend on the separately self-hosted Jitsi instance.\n- Map creation requires proficiency with the Tiled map editor; onboarding is steep for non-technical teams.",
    "tags": [
      "virtual-office",
      "rpg",
      "webrtc",
      "remote-work",
      "events"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "weechat",
    "name": "Weechat",
    "tagline": "Fast, extensible terminal IRC and chat client with a rich plugin ecosystem",
    "descriptionMd": "WeeChat is a lightweight, highly extensible terminal-based chat client that supports IRC, Matrix (via plugin), Slack (via plugin), XMPP, and more through its plugin architecture. It features a powerful scripting API in Python, Perl, Ruby, and Lua, a built-in relay protocol that lets web frontends connect, and can run persistently in a terminal multiplexer like tmux or screen. Configuration is done via text files or in-client commands.",
    "repoUrl": "https://github.com/weechat/weechat",
    "websiteUrl": "https://weechat.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord"
    ],
    "license": "GPL-3.0",
    "language": "C",
    "githubStars": 3342,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Terminal-only; no native graphical UI, making onboarding difficult for non-technical users.\n- Third-party plugins are required for any non-IRC protocol, and plugin quality and maintenance vary.\n- No file sharing, image preview, video calls, or rich message formatting out of the box.\n- Configuration is fully text-based with a steep learning curve for advanced setups.",
    "tags": [
      "irc",
      "terminal",
      "chat-client",
      "extensible",
      "c"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ergo",
    "name": "Ergo",
    "tagline": "Modern IRCv3 server in Go combining ircd, services framework, and bouncer",
    "descriptionMd": "Ergo (formerly Oragono) is a modern IRC server written in Go that implements the latest IRCv3 specifications and bundles services (NickServ, ChanServ), a built-in bouncer for persistent connections, message history storage, and optional LDAP or Tor support. It is configured via a single YAML file and ships as a single binary with no external database dependency, using an embedded bbolt store for persistence.",
    "repoUrl": "https://github.com/ergochat/ergo",
    "websiteUrl": "https://ergo.chat/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 3250,
    "lastCommitAt": "2026-06-11",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- IRC protocol only; no voice, video, reactions, or rich embeds expected by modern chat users.\n- No web client included; users need a separate IRC client (WeeChat, HexChat, etc.) or an IRC-to-web bridge.\n- Message history is limited and not searchable at scale compared to Slack's enterprise search.\n- No integrations with productivity tools (calendars, task managers, CI/CD) without external bridges.",
    "tags": [
      "irc",
      "ircd",
      "go",
      "bouncer",
      "ircv3"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "one-time-secret",
    "name": "One Time Secret",
    "tagline": "Share sensitive data via self-destructing links viewable only once",
    "descriptionMd": "One Time Secret lets you share passwords, API keys, or any sensitive text through a single-use link that is permanently destroyed after it is read once. It is written in Ruby and ships with a Docker image, making deployment straightforward. The hosted version at onetimesecret.com is the public demo; self-hosting keeps your secrets entirely on your own infrastructure. Secrets are encrypted at rest and can be given a passphrase and a configurable TTL.",
    "repoUrl": "https://github.com/onetimesecret/onetimesecret",
    "websiteUrl": "https://docs.onetimesecret.com",
    "demoUrl": "https://onetimesecret.com",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 2843,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No real-time team chat; purpose-built only for one-shot secret sharing, not general messaging\n- No user accounts or team management UI out of the box\n- Lacks audit logs, access controls, or an admin dashboard found in enterprise chat platforms\n- No integrations with CI/CD or ticketing systems without custom development",
    "tags": [
      "secrets",
      "security",
      "ephemeral",
      "self-destructing",
      "privacy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "tox",
    "name": "Tox",
    "tagline": "Distributed, serverless messenger with encrypted audio and video calls",
    "descriptionMd": "Tox is a peer-to-peer communication protocol and reference implementation (c-toxcore) that provides end-to-end encrypted text chat, file transfers, audio calls, and video calls without any central server. Identities are cryptographic key pairs, so there is no account registration. Multiple client apps (Toxic, qTox, µTox) build on the core library. Self-hosting means running your own bootstrap node to help peers find each other on the DHT network.",
    "repoUrl": "https://github.com/TokTok/c-toxcore",
    "websiteUrl": "https://tox.chat/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord",
      "microsoft-teams"
    ],
    "license": "GPL-3.0",
    "language": "C",
    "githubStars": 2650,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No web or mobile app; all official clients are desktop-only with varying levels of polish\n- No persistent message history server-side; messages are lost if the recipient is offline at delivery time\n- No team workspaces, channels, or role-based permissions\n- Bootstrap node setup and NAT traversal can be unreliable behind strict firewalls",
    "tags": [
      "p2p",
      "encrypted",
      "decentralized",
      "messaging",
      "voip"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "wbo",
    "name": "WBO",
    "tagline": "Real-time collaborative whiteboard for drawings, diagrams, and notes",
    "descriptionMd": "WBO (Whitebophir) is a Node.js web whiteboard that lets multiple users draw, annotate, and collaborate on an infinite canvas in real time via WebSockets. Boards persist on the server and can be shared by URL. It is lightweight, requires no database, and deploys with a single Docker command or a plain `npm start`. The tool supports freehand drawing, shapes, text, and sticky notes.",
    "repoUrl": "https://github.com/lovasoa/whitebophir",
    "websiteUrl": "https://github.com/lovasoa/whitebophir",
    "demoUrl": "https://wbo.ophir.dev/",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "microsoft-teams"
    ],
    "license": "AGPL-3.0",
    "language": "Nodejs",
    "githubStars": 2611,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No authentication or access control; any board URL is publicly accessible by default\n- No user management, versioning, or export to common vector formats (SVG/PDF)\n- No sticky-note templates, voting, or structured retrospective tooling\n- Boards stored as flat JSON files; no database means limited scalability for large teams",
    "tags": [
      "whiteboard",
      "collaboration",
      "real-time",
      "drawing",
      "canvas"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "stoat",
    "name": "Stoat",
    "tagline": "User-first self-hosted team chat platform built with Rust",
    "descriptionMd": "Stoat is a modern self-hosted chat platform designed for privacy-conscious teams, with a Rust backend for performance and safety. It supports channels, direct messages, and file sharing through a contemporary web UI. The platform is designed for easy self-hosting and emphasises user data ownership. Being relatively new, it targets teams wanting a Slack-like experience without vendor lock-in.",
    "repoUrl": "https://github.com/stoatchat/self-hosted",
    "websiteUrl": "https://stoat.chat/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord",
      "microsoft-teams"
    ],
    "license": "AGPL-3.0",
    "language": "Rust",
    "githubStars": 2494,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Relatively new project; ecosystem of integrations and bots is minimal compared to Slack\n- No voice or video calling built in\n- Mobile apps not yet as mature as established competitors\n- Plugin/app marketplace does not exist yet",
    "tags": [
      "chat",
      "messaging",
      "team",
      "rust",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "anycable",
    "name": "AnyCable",
    "tagline": "High-performance realtime server for WebSockets and Server-Sent Events",
    "descriptionMd": "AnyCable is a Go-based server that handles persistent realtime connections (WebSockets, SSE, long polling) and delegates business logic to a backend application via gRPC, making it language-agnostic. It is designed as a drop-in replacement for Action Cable in Rails apps but works with any backend. It supports horizontal scaling, pub/sub via Redis or NATS, and delivers significantly higher throughput than a pure Ruby server. A demo chat app illustrates full-stack integration.",
    "repoUrl": "https://github.com/anycable/anycable",
    "websiteUrl": "https://anycable.io/",
    "demoUrl": "https://demo.anycable.io",
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 2340,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- It is a realtime transport layer, not a full chat product; requires significant custom development to build a user-facing app\n- gRPC configuration and tuning adds operational complexity\n- No built-in UI, user management, or message persistence — all delegated to the application layer\n- Managed AnyCable Cloud only available for certain plans",
    "tags": [
      "websockets",
      "realtime",
      "sse",
      "pub-sub",
      "rails"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "chitchatter",
    "name": "Chitchatter",
    "tagline": "Serverless peer-to-peer ephemeral chat with no accounts required",
    "descriptionMd": "Chitchatter is a fully serverless, decentralised chat application that runs entirely in the browser using WebRTC for peer-to-peer connections. There is no backend server to host; it can be deployed as a static site on any CDN or served from a simple file server. Messages are never stored anywhere and vanish when the session ends. No account registration is required — users join rooms by sharing a URL.",
    "repoUrl": "https://github.com/jeremyckahn/chitchatter",
    "websiteUrl": "https://chitchatter.im/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "team-chat",
    "replaces": [
      "slack",
      "discord",
      "microsoft-teams"
    ],
    "license": "GPL-2.0",
    "language": "Nodejs",
    "githubStars": 2290,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 1,
    "deployOptions": [
      "One-Click",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No message history; all chats are ephemeral and disappear on page close\n- No file sharing, threads, reactions, or integrations\n- WebRTC NAT traversal can fail on restrictive corporate networks\n- No moderation, authentication, or access control features",
    "tags": [
      "p2p",
      "webrtc",
      "ephemeral",
      "serverless",
      "privacy"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "hyperswitch",
    "name": "HyperSwitch",
    "tagline": "Open payment switch — route traffic across 50+ processors with one API",
    "descriptionMd": "HyperSwitch is an open-source payment orchestration platform written in Rust that lets businesses integrate once and then route, retry, and load-balance transactions across more than 50 payment processors globally. It provides a unified API, smart routing rules, a no-code payment flows builder, and advanced analytics on authorisation rates. Deployment is via Docker Compose for self-hosted setups; a managed cloud tier is also available.",
    "repoUrl": "https://github.com/juspay/hyperswitch",
    "websiteUrl": "https://hyperswitch.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks",
      "mint"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 43033,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Focused on payment routing, not personal or business accounting/budgeting\n- Self-hosted setup requires PostgreSQL, Redis, and Kafka; operational overhead is high\n- PCI-DSS compliance responsibility shifts entirely to the operator\n- No built-in invoicing, expense tracking, or financial reporting beyond payment analytics",
    "tags": [
      "payments",
      "fintech",
      "payment-orchestration",
      "routing",
      "api"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "actual",
    "name": "Actual",
    "tagline": "Local-first zero-sum budgeting app with optional cross-device sync",
    "descriptionMd": "Actual is a local-first personal finance application that implements envelope (zero-sum) budgeting. All data is stored locally in an SQLite database that syncs across devices through an optional self-hosted server using CRDTs for conflict resolution. It supports manual transaction entry, bulk import from QIF/OFX/QFX files, automatic bank sync via Nordigen/SimpleFIN, and a rule engine for auto-categorisation. The web UI is clean and fast.",
    "repoUrl": "https://github.com/actualbudget/actual",
    "websiteUrl": "https://actualbudget.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "ynab",
      "mint"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 27128,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Bank sync coverage is narrower than YNAB's direct connections, especially outside the US/EU\n- No mobile native app; the web app is mobile-responsive but not fully optimised for touch\n- Investment tracking and net-worth projections are basic compared to Mint/Quicken\n- Multi-currency support is limited and requires manual workarounds",
    "tags": [
      "budgeting",
      "personal-finance",
      "zero-sum",
      "local-first",
      "sync"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "firefly-iii",
    "name": "Firefly III",
    "tagline": "Self-hosted personal finance manager with budgets, rules, and bank import",
    "descriptionMd": "Firefly III is a PHP-based web application for personal and household financial management. It tracks income, expenses, transfers, and debts across multiple accounts and currencies, supports credit cards, offers an advanced rule engine for transaction categorisation, and can import data from banks via various importers. It ships with a REST API and companion apps. Deployment is via Docker Compose (app + MySQL/PostgreSQL).",
    "repoUrl": "https://github.com/firefly-iii/firefly-iii",
    "websiteUrl": "https://firefly-iii.org/",
    "demoUrl": "https://demo.firefly-iii.org/",
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "mint",
      "ynab",
      "quickbooks"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 23779,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Bank import requires a separate importer container and CSV/OFX manipulation; no one-click bank sync\n- UI can feel complex and verbose for casual users compared to Mint's simplicity\n- No built-in mobile app; third-party apps exist but vary in quality\n- Investment and brokerage account tracking is limited compared to dedicated wealth tools",
    "tags": [
      "personal-finance",
      "budgeting",
      "accounting",
      "expense-tracking",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "lago",
    "name": "Lago",
    "tagline": "Open-source metering and usage-based billing API for SaaS products",
    "descriptionMd": "Lago is an open-source billing infrastructure for usage-based and hybrid pricing models. It provides metering, aggregation, subscription management, and invoice generation via a REST API and webhooks. Companies embed it to replace Stripe Billing or Chargebee for complex, event-driven pricing. The stack is Ruby on Rails + PostgreSQL + Redis, deployed via Docker Compose, with a managed cloud option available.",
    "repoUrl": "https://github.com/getlago/lago",
    "websiteUrl": "https://www.getlago.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks",
      "mint"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 10058,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Developer-oriented billing API, not a personal finance or budgeting tool for end-users\n- No AR/AP or general-ledger accounting; revenue recognition requires integration with an ERP\n- Tax calculation engine is basic; real-world tax compliance needs third-party integration (e.g. Avalara)\n- Dunning workflows and payment retries are less mature than Chargebee or Stripe Billing",
    "tags": [
      "billing",
      "usage-based",
      "metering",
      "subscriptions",
      "api"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "akaunting",
    "name": "Akaunting",
    "tagline": "Double-entry accounting software for small businesses and freelancers",
    "descriptionMd": "Akaunting is a PHP/Laravel web accounting application offering invoicing, expense tracking, double-entry bookkeeping, bank reconciliation, and multi-currency support. It supports multiple companies, tax management, and a marketplace of paid and free modules (payroll, inventory, etc.). It deploys on any LAMP stack or via Docker. The core is free; advanced modules are commercial.",
    "repoUrl": "https://github.com/akaunting/akaunting",
    "websiteUrl": "https://akaunting.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks",
      "mint"
    ],
    "license": "BUSL-1.1",
    "language": "PHP",
    "githubStars": 9903,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Many useful features (payroll, advanced inventory) locked behind paid marketplace modules\n- BUSL-1.1 license restricts SaaS redistribution without a commercial agreement\n- Bank sync and open-banking connections require paid add-ons or manual CSV import\n- Reporting and dashboard customisation is less flexible than QuickBooks Online",
    "tags": [
      "accounting",
      "invoicing",
      "small-business",
      "bookkeeping",
      "php"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "invoice-ninja",
    "name": "Invoice Ninja",
    "tagline": "Full-featured invoicing, quotes, and payment platform for freelancers",
    "descriptionMd": "Invoice Ninja is a PHP/Laravel invoicing and billing platform covering invoices, quotes, recurring billing, expense tracking, time-tracking, client portals, and payment gateway integrations (Stripe, PayPal, and many more). It has native mobile apps for iOS and Android and a Flutter-based desktop client. Self-hosting is via Docker Compose or a standard LAMP stack; a managed cloud SaaS tier is available.",
    "repoUrl": "https://github.com/invoiceninja/invoiceninja",
    "websiteUrl": "https://www.invoiceninja.org/",
    "demoUrl": "https://app.invoiceninja.com/invoices/create",
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks",
      "mint"
    ],
    "license": "Elastic-2.0",
    "language": "PHP",
    "githubStars": 9839,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Elastic-2.0 license prohibits competing SaaS offerings; not truly open-source\n- Full accounting (P&L, balance sheet, general ledger) is not available; it is invoicing-focused\n- Advanced inventory management absent compared to QuickBooks\n- Some enterprise features (white-labelling, advanced reports) require a paid plan even self-hosted",
    "tags": [
      "invoicing",
      "billing",
      "freelance",
      "payments",
      "crm"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ghostfolio",
    "name": "Ghostfolio",
    "tagline": "Wealth dashboard tracking stocks, ETFs, and crypto with privacy in mind",
    "descriptionMd": "Ghostfolio is a Node.js + Angular wealth management web app for tracking investment portfolios across stocks, ETFs, cryptocurrencies, and other assets. It aggregates performance, dividends, and allocation with charts and summaries, pulling market data from Yahoo Finance and other providers. Data stays on your own server. It deploys via Docker Compose (app + PostgreSQL + Redis) and offers a managed cloud tier for users who don't want to self-host.",
    "repoUrl": "https://github.com/ghostfolio/ghostfolio",
    "websiteUrl": "https://ghostfol.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "mint",
      "ynab"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 8793,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No budgeting or expense tracking; purely an investment portfolio tool\n- Market data depends on free Yahoo Finance tier, which can be rate-limited or return stale data\n- Tax-lot accounting and tax reporting are limited; not a replacement for dedicated tax software\n- Import from brokers is manual (CSV) unless you write a custom scraper",
    "tags": [
      "portfolio",
      "investing",
      "stocks",
      "crypto",
      "wealth-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "sure",
    "name": "Sure",
    "tagline": "Personal finance app for everyone — a maintained fork of Maybe",
    "descriptionMd": "Sure is a community-maintained fork of the Maybe personal finance application, built with Ruby on Rails and React. It covers net-worth tracking, account aggregation, investment monitoring, and goal-setting in a clean, modern UI. The project continues Maybe's mission after its original open-sourcing, keeping the codebase active and accepting community improvements. It deploys via Docker Compose.",
    "repoUrl": "https://github.com/we-promise/sure",
    "websiteUrl": "https://github.com/we-promise/sure",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "mint",
      "ynab"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 8757,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Community fork with a smaller contributor base; long-term maintenance cadence is uncertain\n- Bank connection / Plaid integration requires API credentials and is US-centric\n- No mobile native app; web-only interface\n- Budgeting and envelope features less developed compared to YNAB or Actual",
    "tags": [
      "personal-finance",
      "net-worth",
      "investing",
      "budgeting",
      "rails"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "wallos",
    "name": "Wallos",
    "tagline": "Lightweight self-hosted personal subscription tracker with statistics",
    "descriptionMd": "Wallos is a lightweight PHP web app for tracking personal subscriptions and recurring expenses. It provides a clean dashboard with spending statistics, multi-currency support, and optional notifications when bills are due. The app stores data in SQLite and deploys via Docker with a single container. It focuses purely on subscription visibility rather than full budgeting.",
    "repoUrl": "https://github.com/ellite/wallos",
    "websiteUrl": "https://wallosapp.com",
    "demoUrl": "https://github.com/ellite/wallos?tab=readme-ov-file#demo",
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "mint",
      "ynab"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 8091,
    "lastCommitAt": "2026-06-13",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No bank/account sync; subscriptions must be entered manually\n- No general budgeting categories or spending envelopes like YNAB\n- Reporting is limited to subscription totals — no net-worth or cash-flow views\n- No mobile native app; mobile access is browser-only",
    "tags": [
      "subscriptions",
      "personal-finance",
      "budgeting",
      "expense-tracking"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "btcpay-server",
    "name": "BTCPay Server",
    "tagline": "Self-hosted Bitcoin and cryptocurrency payment processor with full node support",
    "descriptionMd": "BTCPay Server is an open-source, self-hosted cryptocurrency payment processor that lets merchants accept Bitcoin and other coins without intermediaries or fees. It supports Lightning Network, on-chain payments, point-of-sale, payment buttons, and invoicing. Deployment requires a full or pruned Bitcoin node and is typically done via Docker Compose on a VPS. It integrates with WooCommerce, Shopify, and other e-commerce platforms.",
    "repoUrl": "https://github.com/btcpayserver/btcpayserver",
    "websiteUrl": "https://btcpayserver.org/",
    "demoUrl": "https://mainnet.demo.btcpayserver.org/",
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks"
    ],
    "license": "MIT",
    "language": "C#",
    "githubStars": 7614,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Crypto-only; no fiat payment rails or bank integrations\n- Running a full Bitcoin node requires significant disk space (600 GB+) and sync time\n- No built-in accounting or double-entry bookkeeping\n- Lightning Network setup adds considerable operational complexity",
    "tags": [
      "bitcoin",
      "payments",
      "cryptocurrency",
      "invoicing",
      "lightning-network"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "octobot",
    "name": "OctoBot",
    "tagline": "Open-source cryptocurrency trading bot with strategy customization",
    "descriptionMd": "OctoBot is a Python-based cryptocurrency trading bot that connects to major exchanges via ccxt and executes configurable trading strategies. It supports technical analysis indicators, backtesting, paper trading, and a web UI for monitoring. Users can write custom strategies in Python or install community tentacles. It can be self-hosted via Docker or run from source, and the OctoBot Cloud offers a managed option.",
    "repoUrl": "https://github.com/Drakkar-Software/OctoBot",
    "websiteUrl": "https://www.octobot.cloud/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "mint"
    ],
    "license": "GPL-3.0",
    "language": "Python",
    "githubStars": 6094,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Strategy creation requires Python coding knowledge; no drag-and-drop strategy builder\n- Backtesting quality depends heavily on available exchange data quality\n- Does not replace personal-finance budgeting tools — it is a trading automation tool\n- Advanced features (cloud sync, some strategies) are locked behind OctoBot Cloud subscription",
    "tags": [
      "trading-bot",
      "cryptocurrency",
      "automation",
      "backtesting"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "kill-bill",
    "name": "Kill Bill",
    "tagline": "Open-source subscription billing and payments platform with real-time analytics",
    "descriptionMd": "Kill Bill is a Java-based open-source billing and payments platform designed for SaaS and subscription businesses. It handles recurring billing, invoicing, dunning, tax calculations, and integrates with payment gateways like Stripe and Braintree. The platform exposes a full REST API and supports plugins for extensibility. Deployment involves a Java app server and a MySQL or PostgreSQL database, making it moderately complex to operate.",
    "repoUrl": "https://github.com/killbill/killbill",
    "websiteUrl": "https://killbill.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks"
    ],
    "license": "Apache-2.0",
    "language": "Java",
    "githubStars": 5591,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in UI for end users; requires integrating or building a customer portal\n- Documentation is comprehensive but can be complex for teams without Java expertise\n- Does not include general ledger or bookkeeping — only billing and payments\n- Limited built-in reporting compared to QuickBooks; requires external BI tooling",
    "tags": [
      "billing",
      "subscriptions",
      "payments",
      "invoicing",
      "saas"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ezbookkeeping",
    "name": "ezbookkeeping",
    "tagline": "Lightweight self-hosted personal bookkeeping app with multi-currency support",
    "descriptionMd": "ezbookkeeping is a Go-based personal finance app focused on transaction tracking and account management. It supports multiple accounts, multi-currency with automatic exchange rates, transaction tagging, and statistical charts. It ships as a single binary or Docker image backed by SQLite, MySQL, or PostgreSQL. A companion mobile app is available for iOS and Android.",
    "repoUrl": "https://github.com/mayswind/ezbookkeeping",
    "websiteUrl": "https://ezbookkeeping.mayswind.net/",
    "demoUrl": "https://ezbookkeeping-demo.mayswind.net/",
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "mint",
      "ynab"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 5097,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No automatic bank/account import; transactions must be entered or imported via CSV\n- Budgeting is basic; no envelope or zero-based budgeting like YNAB\n- No bill reminders or subscription tracking\n- Reporting is limited to basic charts; no advanced financial planning features",
    "tags": [
      "bookkeeping",
      "personal-finance",
      "multi-currency",
      "expense-tracking"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "bigcapital",
    "name": "Bigcapital",
    "tagline": "Financial accounting and inventory management for small to medium businesses",
    "descriptionMd": "Bigcapital is an open-source accounting platform targeting SMBs, offering double-entry bookkeeping, invoicing, bill management, inventory tracking, and financial reports. It is built as a multi-tenant web application with a React frontend and Node.js backend, deployed via Docker Compose. It aims to provide a full alternative to QuickBooks Online with real-time financial dashboards.",
    "repoUrl": "https://github.com/bigcapitalhq/bigcapital",
    "websiteUrl": "https://bigcapital.app/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks",
      "mint"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 3702,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Payroll processing is not yet included\n- Bank reconciliation and automatic bank feed import are limited compared to QuickBooks\n- Ecosystem of third-party integrations (payment gateways, e-commerce) is still maturing\n- Tax filing and jurisdiction-specific compliance features are minimal",
    "tags": [
      "accounting",
      "invoicing",
      "inventory",
      "double-entry",
      "smb"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "invoiceplane",
    "name": "InvoicePlane",
    "tagline": "Self-hosted invoicing, quoting, and payment tracking for small businesses",
    "descriptionMd": "InvoicePlane is a PHP web application for small businesses to manage quotes, invoices, payments, and clients. It supports multiple currencies, tax rates, recurring invoices, and PDF generation. The app uses MySQL as its database and can be deployed manually on any PHP-capable host. It is a mature project with a straightforward setup.",
    "repoUrl": "https://github.com/InvoicePlane/InvoicePlane",
    "websiteUrl": "https://www.invoiceplane.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 3063,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No double-entry accounting or general ledger\n- Client portal for online payment acceptance is not built-in\n- Limited financial reporting; no P&L or balance sheet\n- Development pace has slowed; some modern UX polish is lacking",
    "tags": [
      "invoicing",
      "quotes",
      "payments",
      "small-business"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "fava",
    "name": "Fava",
    "tagline": "Web frontend for Beancount text-based double-entry accounting",
    "descriptionMd": "Fava is a Python web interface for Beancount, a plain-text double-entry accounting system. It provides interactive balance sheets, income statements, portfolio tracking, budgets, and transaction editing in the browser while the underlying data lives in plain-text files. It is installed via pip and started with a single command, requiring no database server. It is well-suited for developers and power users comfortable with text-file accounting.",
    "repoUrl": "https://github.com/beancount/fava",
    "websiteUrl": "https://beancount.github.io/fava/",
    "demoUrl": "https://fava.pythonanywhere.com/example-with-budgets/income_statement/",
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "mint",
      "quickbooks"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 2500,
    "lastCommitAt": "2026-06-16",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- All data entry is in plain-text Beancount syntax; no GUI transaction entry out of the box\n- No automatic bank import; requires manual or third-party import scripts\n- Steep learning curve for Beancount format and double-entry concepts\n- No mobile app; purely browser-based",
    "tags": [
      "accounting",
      "beancount",
      "double-entry",
      "plain-text",
      "personal-finance"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "invoiceshelf",
    "name": "InvoiceShelf",
    "tagline": "Track expenses, payments, and create professional invoices and estimates",
    "descriptionMd": "InvoiceShelf is a PHP/Laravel fork of Crater that handles invoicing, expense tracking, estimates, and payments for freelancers and small businesses. It includes a customer portal, multi-currency support, tax management, and PDF generation. Deployment is via Docker or a standard LAMP stack, and companion iOS/Android apps are available for mobile access.",
    "repoUrl": "https://github.com/InvoiceShelf/InvoiceShelf",
    "websiteUrl": "https://invoiceshelf.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 1729,
    "lastCommitAt": "2026-06-14",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No double-entry bookkeeping or chart of accounts\n- Payment gateway integrations are limited compared to QuickBooks\n- No payroll or HR functionality\n- Recurring invoices exist but automation rules are less flexible than QuickBooks",
    "tags": [
      "invoicing",
      "expenses",
      "estimates",
      "small-business",
      "payments"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "fossbilling",
    "name": "FOSSBilling",
    "tagline": "Open-source hosting billing and automation with WHM, cPanel, and HestiaCP support",
    "descriptionMd": "FOSSBilling is a PHP-based hosting billing and automation platform that integrates with control panels like WHM, cPanel, CWP, and HestiaCP to automate account provisioning. It handles invoicing, recurring billing, client management, support tickets, and domain reselling. The system ships with a full REST API and a module system for extensions. Deployment is on a PHP/MySQL stack, typically manually or via Docker.",
    "repoUrl": "https://github.com/FOSSBilling/FOSSBilling",
    "websiteUrl": "https://fossbilling.org/",
    "demoUrl": "https://fossbilling.org/demo",
    "logoUrl": null,
    "categorySlug": "finance-budget",
    "replaces": [
      "quickbooks"
    ],
    "license": "Apache-2.0",
    "language": "PHP",
    "githubStars": 1606,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Primarily designed for web hosting businesses; general-purpose billing is secondary\n- No double-entry accounting or financial statements\n- Payment gateway selection is narrower than commercial billing platforms\n- Support ticket system is basic compared to dedicated helpdesk tools",
    "tags": [
      "billing",
      "hosting",
      "invoicing",
      "automation",
      "cpanel"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "strapi",
    "name": "Strapi",
    "tagline": "Leading open-source headless CMS with flexible API and content type builder",
    "descriptionMd": "Strapi is a Node.js headless CMS that lets developers define custom content types through a visual builder and exposes them via auto-generated REST or GraphQL APIs. It supports roles and permissions, media management, webhooks, and an extensive plugin ecosystem. Deployment options include Docker, cloud platforms, and bare metal with PostgreSQL, MySQL, or SQLite. Strapi Cloud offers a managed hosting tier.",
    "repoUrl": "https://github.com/strapi/strapi",
    "websiteUrl": "https://strapi.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "contentful",
      "wordpress-com"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 72423,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No built-in front-end rendering; requires a separate frontend framework\n- Media asset transformation (image resizing, CDN) requires third-party providers\n- Workflow and editorial approval features are less mature than Contentful\n- Self-hosted upgrades between major versions can require manual migration steps",
    "tags": [
      "headless-cms",
      "api",
      "content-management",
      "graphql",
      "rest"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ghost",
    "name": "Ghost",
    "tagline": "Modern open-source publishing platform for blogs and newsletters",
    "descriptionMd": "Ghost is a Node.js publishing platform built for professional content creators, supporting posts, pages, memberships, and paid newsletter subscriptions. It includes a rich editor, SEO tools, built-in email newsletters via Mailgun, and a theme marketplace. Ghost can be self-hosted via Docker or its official CLI, and Ghost(Pro) provides fully managed hosting. It is one of the most polished self-hostable blogging platforms available.",
    "repoUrl": "https://github.com/TryGhost/Ghost",
    "websiteUrl": "https://ghost.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "substack",
      "medium",
      "wordpress-com"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 54077,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Membership and newsletter features require Stripe integration for paid tiers\n- Plugin/theme ecosystem is much smaller than WordPress\n- No built-in e-commerce beyond memberships and paid newsletters\n- Self-hosted email delivery needs a transactional email provider (Mailgun, Postmark) configured separately",
    "tags": [
      "blogging",
      "newsletter",
      "publishing",
      "membership",
      "cms"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "payload-cms",
    "name": "Payload CMS",
    "tagline": "Developer-first headless CMS and application framework built with TypeScript",
    "descriptionMd": "Payload CMS is a TypeScript-first headless CMS and application framework for Node.js. It uses a code-first approach where developers define collections, globals, and access control in config files, auto-generating a REST and GraphQL API and an admin UI. It supports PostgreSQL and MongoDB, rich text with Lexical or Slate, file uploads, and full local API access for server-side code. Deployment is via Docker or any Node.js host.",
    "repoUrl": "https://github.com/payloadcms/payload",
    "websiteUrl": "https://payloadcms.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "contentful",
      "wordpress-com"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 43151,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Entirely code-first; non-technical editors cannot modify content schema without developer help\n- No built-in CDN or image optimization; requires external services\n- Plugin and integration marketplace is smaller than Contentful or Strapi\n- Real-time collaborative editing is not natively supported",
    "tags": [
      "headless-cms",
      "typescript",
      "graphql",
      "rest",
      "developer-tools"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "wordpress",
    "name": "WordPress",
    "tagline": "World's most widely used open-source CMS and blogging engine",
    "descriptionMd": "WordPress is the most widely deployed open-source CMS, powering over 40% of the web. It features a block-based editor (Gutenberg), a massive plugin ecosystem (60,000+), theme customization, and built-in SEO tooling. It runs on PHP with MySQL/MariaDB and can be deployed on virtually any shared or VPS host, via Docker, or through managed WordPress hosting providers. It supports everything from simple blogs to complex e-commerce sites via WooCommerce.",
    "repoUrl": "https://github.com/WordPress/WordPress",
    "websiteUrl": "https://wordpress.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "wordpress-com",
      "squarespace",
      "medium"
    ],
    "license": "GPL-2.0",
    "language": "PHP",
    "githubStars": 21212,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Plugin-heavy setups can become slow without caching layers and optimization expertise\n- Security surface area is large; requires regular plugin/core updates and hardening\n- The block editor (Gutenberg) has a steeper learning curve than Squarespace's drag-and-drop builder\n- Default multisite and headless configurations require significant additional configuration",
    "tags": [
      "cms",
      "blogging",
      "php",
      "ecommerce",
      "woocommerce"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "wagtail",
    "name": "Wagtail",
    "tagline": "Flexible Django CMS built for developers and editors",
    "descriptionMd": "Wagtail is a powerful open-source CMS built on Django, designed to balance developer flexibility with a clean, user-friendly editing interface. It features a StreamField content model that lets editors compose rich page layouts from reusable blocks, plus a robust image library, document management, and snippets system. Wagtail supports multi-site setups, search backends (Elasticsearch, PostgreSQL full-text), and a rich API for headless deployments. Deploy by adding it to any Django project or using Docker; managed cloud hosting is available via Torchbox's Wagtail Cloud.",
    "repoUrl": "https://github.com/wagtail/wagtail",
    "websiteUrl": "https://wagtail.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "wordpress-com",
      "contentful",
      "squarespace"
    ],
    "license": "BSD-3-Clause",
    "language": "Python",
    "githubStars": 20365,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No built-in e-commerce or subscription/paywall features out of the box\n- Plugin/extension ecosystem is smaller than WordPress; fewer third-party integrations\n- Requires Python/Django knowledge to set up and customize; not suitable for non-technical users\n- Multitenancy and role-based access controls are limited compared to enterprise CMSes like Contentful",
    "tags": [
      "cms",
      "django",
      "python",
      "headless",
      "content-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "october-cms",
    "name": "october",
    "tagline": "Laravel-based CMS with a clean plugin marketplace",
    "descriptionMd": "October CMS is a content management platform built on top of the Laravel PHP framework, offering a clean backend UI, a plugin marketplace, and a component-based theming system. It supports flat-file and database-driven content and provides a drag-and-drop page builder. Plugins extend it with forms, blogs, e-commerce, and more. Self-hosting requires a PHP/MySQL stack; the project moved to a commercial license in later versions, so the free open-source edition is the older v1 branch.",
    "repoUrl": "https://github.com/octobercms/october",
    "websiteUrl": "https://octobercms.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "wordpress-com",
      "squarespace",
      "contentful"
    ],
    "license": "⊘ Proprietary",
    "language": "PHP",
    "githubStars": 11140,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Core product switched to a paid commercial license; the open-source v1 branch receives limited updates\n- Plugin ecosystem has shrunk since the license change, with fewer actively maintained free plugins\n- No official managed hosting; users must provision their own PHP/MySQL server\n- Headless/API mode is less mature than dedicated headless CMSes like Contentful",
    "tags": [
      "cms",
      "laravel",
      "php",
      "plugin-based",
      "content-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "keystonejs",
    "name": "KeystoneJS",
    "tagline": "Headless CMS and GraphQL API platform for Node.js",
    "descriptionMd": "KeystoneJS is a headless CMS and application framework for Node.js that auto-generates a GraphQL API from a schema definition, with an admin UI included. It supports PostgreSQL and SQLite via Prisma, offers fine-grained access control, rich field types, and custom hooks. KeystoneJS v6 is a ground-up rewrite optimized for modern JAMstack and serverless deployments. Self-host with a single Node process backed by a PostgreSQL database.",
    "repoUrl": "https://github.com/keystonejs/keystone",
    "websiteUrl": "https://keystonejs.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "contentful",
      "wordpress-com",
      "squarespace"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 9901,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in media CDN or image optimization pipeline; users must wire up external storage (S3, Cloudinary)\n- Admin UI is functional but lacks the polished editorial experience of Contentful or Sanity\n- No official one-click deploy or managed hosting option\n- REST API support requires custom setup; only GraphQL is generated automatically",
    "tags": [
      "headless-cms",
      "graphql",
      "nodejs",
      "api",
      "content-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "umbraco",
    "name": "Umbraco",
    "tagline": "Friendly open-source .NET CMS with a strong community",
    "descriptionMd": "Umbraco is a mature open-source CMS built on ASP.NET Core, known for its flexibility and developer-friendly architecture. Content is modeled using document types and can be delivered via both traditional MVC views and a Delivery API for headless use cases. It ships with a polished backoffice editor, media management, and multi-lingual support. Deploy on any server running .NET; managed cloud hosting is available through Umbraco Cloud.",
    "repoUrl": "https://github.com/umbraco/Umbraco-CMS",
    "websiteUrl": "https://umbraco.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "wordpress-com",
      "contentful",
      "squarespace"
    ],
    "license": "MIT",
    "language": ".NET",
    "githubStars": 5209,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Requires .NET hosting environment, which is less common and often more expensive than PHP/Node stacks\n- The Marketplace for packages is smaller than WordPress's plugin ecosystem\n- Headless Delivery API is relatively new and lacks the maturity of dedicated headless platforms\n- Commercial packages (e.g., Forms, Deploy) are required for some common workflows and add cost",
    "tags": [
      "cms",
      "dotnet",
      "aspnet",
      "headless",
      "content-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "writefreely",
    "name": "WriteFreely",
    "tagline": "Minimalist federated blogging platform built on ActivityPub",
    "descriptionMd": "WriteFreely is a clean, distraction-free writing platform that federates via ActivityPub, letting blogs connect to Mastodon and other fediverse services. It supports multi-user instances, custom domains, and a reader feed for following other WriteFreely blogs. The interface is intentionally minimal: no comments, no like counts, just writing. Deploy as a single Go binary backed by MySQL or SQLite.",
    "repoUrl": "https://github.com/writefreely/writefreely",
    "websiteUrl": "https://writefreely.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "medium",
      "substack",
      "wordpress-com"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 5187,
    "lastCommitAt": "2026-06-03",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No paid subscription or paywall support for monetizing writing (unlike Substack)\n- Very limited customization: no themes, plugins, or sidebar widgets\n- No built-in email newsletter delivery to subscriber inboxes\n- No analytics, comments system, or social engagement features",
    "tags": [
      "blogging",
      "activitypub",
      "fediverse",
      "minimalist",
      "federated"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "joomla",
    "name": "Joomla!",
    "tagline": "Battle-tested open-source CMS powering millions of websites",
    "descriptionMd": "Joomla! is one of the world's most widely deployed open-source CMSes, written in PHP and running on MySQL/MariaDB. It provides a sophisticated access control system, multilingual support out of the box, a template manager, and a large ecosystem of extensions for e-commerce, forums, calendars, and more. Joomla supports both traditional and headless (API) content delivery. Self-host on any LAMP stack.",
    "repoUrl": "https://github.com/joomla/joomla-cms",
    "websiteUrl": "https://www.joomla.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "wordpress-com",
      "squarespace",
      "contentful"
    ],
    "license": "GPL-2.0",
    "language": "PHP",
    "githubStars": 5094,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Admin UI is complex and dated compared to modern CMSes; steep learning curve for new users\n- Extension quality is inconsistent; vetting third-party plugins for security requires effort\n- Headless/API capabilities were added late and are less polished than dedicated headless CMSes\n- Page builder and WYSIWYG experience falls behind Squarespace or WordPress.com in ease of use",
    "tags": [
      "cms",
      "php",
      "open-source",
      "multilingual",
      "extensions"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "apostrophe-cms",
    "name": "Apostrophe",
    "tagline": "Node.js CMS with powerful in-context page editing",
    "descriptionMd": "Apostrophe is an open-source CMS built with Node.js and MongoDB that emphasizes in-context editing — editors click directly on page elements to modify them without switching to a separate admin panel. It supports a widget-based layout system, piece types for structured content, and a workflow/localization module. Apostrophe 3 is a major rewrite with REST APIs and Vue-based admin UI. Deploy with Docker Compose backed by MongoDB.",
    "repoUrl": "https://github.com/apostrophecms/apostrophe",
    "websiteUrl": "https://apostrophecms.com/",
    "demoUrl": "https://apostrophecms.com/demo",
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "wordpress-com",
      "squarespace",
      "contentful"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 4575,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- MongoDB dependency adds operational overhead compared to SQL-backed CMSes\n- Smaller plugin/module ecosystem than WordPress or Joomla\n- Enterprise features (workflow, localization) require a paid Apostrophe Pro license\n- Less familiar to developers outside the Node.js ecosystem",
    "tags": [
      "cms",
      "nodejs",
      "mongodb",
      "in-context-editing",
      "content-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "pimcore",
    "name": "Pimcore",
    "tagline": "Open-source platform for PIM, CMS, DAM, and e-commerce",
    "descriptionMd": "Pimcore is an enterprise-grade open-source platform combining Product Information Management (PIM), Digital Asset Management (DAM), a CMS, and an e-commerce framework in a single PHP application. It uses a flexible object model to manage any data structure, provides multi-channel publishing, and exposes REST/GraphQL APIs. Pimcore targets mid-to-large companies needing a unified commerce and content hub. Self-host on a LAMP stack with Docker Compose.",
    "repoUrl": "https://github.com/pimcore/pimcore",
    "websiteUrl": "http://www.pimcore.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "contentful",
      "squarespace",
      "wordpress-com"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 3788,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Very steep learning curve; configuration and customization require substantial PHP expertise\n- Core is open-source but many enterprise modules (e-commerce, portals) are commercially licensed\n- Hosting requirements are heavy: Redis, Elasticsearch, and MySQL all needed for production\n- Documentation can lag behind releases, especially for newer headless API features",
    "tags": [
      "pim",
      "dam",
      "cms",
      "e-commerce",
      "enterprise"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "craftcms",
    "name": "CraftCMS",
    "tagline": "Content-first CMS crafted for developers and editors",
    "descriptionMd": "Craft CMS is a proprietary-licensed PHP CMS known for its flexible field layout system, clean control panel, and developer-friendly Twig templating. It supports multi-site management, robust image transforms, Matrix fields for complex content structures, and a GraphQL API for headless use. A free Solo license is available for single-user sites; Pro and Team licenses are paid. Deploy on PHP with MySQL/PostgreSQL.",
    "repoUrl": "https://github.com/craftcms/cms",
    "websiteUrl": "https://craftcms.com/",
    "demoUrl": "https://craftcms.com/demo",
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "contentful",
      "wordpress-com",
      "squarespace"
    ],
    "license": "⊘ Proprietary",
    "language": "PHP",
    "githubStars": 3583,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Commercial license required for multi-user and team workflows; cost can exceed SaaS alternatives\n- Plugin ecosystem is strong but most premium plugins are paid\n- No built-in e-commerce; requires the separate paid Craft Commerce plugin\n- Headless GraphQL API is behind a Pro license paywall",
    "tags": [
      "cms",
      "php",
      "twig",
      "headless",
      "content-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "microweber",
    "name": "Microweber",
    "tagline": "Drag-and-drop CMS and online shop builder",
    "descriptionMd": "Microweber is an open-source PHP CMS and e-commerce platform featuring a live drag-and-drop page builder that lets editors visually compose pages without coding. It includes a built-in online shop, product catalog, order management, and a module system for extending functionality. Microweber runs on Laravel and supports MySQL and other SQL databases. Self-host on a LAMP stack or with Docker.",
    "repoUrl": "https://github.com/microweber/microweber",
    "websiteUrl": "https://microweber.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "squarespace",
      "wordpress-com",
      "medium"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 3419,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- E-commerce features are basic compared to dedicated platforms like Shopify or WooCommerce\n- Relatively small community and plugin ecosystem limits third-party integrations\n- Performance at scale is less proven than mature CMSes like WordPress or Joomla\n- SEO tooling and built-in marketing features lag behind Squarespace",
    "tags": [
      "cms",
      "drag-and-drop",
      "e-commerce",
      "php",
      "page-builder"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "squidex",
    "name": "Squidex",
    "tagline": "Headless CMS built on MongoDB with CQRS event sourcing",
    "descriptionMd": "Squidex is an open-source headless CMS written in .NET that uses MongoDB as its storage backend and implements CQRS with event sourcing for a full audit history. It provides a schema editor, REST and GraphQL APIs, asset management, role-based access control, and multi-language content. A cloud-hosted version is available. Deploy via Docker Compose with MongoDB.",
    "repoUrl": "https://github.com/Squidex/squidex",
    "websiteUrl": "https://squidex.io",
    "demoUrl": "https://cloud.squidex.io",
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "contentful",
      "wordpress-com",
      "medium"
    ],
    "license": "MIT",
    "language": ".NET",
    "githubStars": 2500,
    "lastCommitAt": "2026-06-16",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- MongoDB dependency increases operational complexity vs. SQL-based headless CMSes\n- .NET stack means fewer hosting providers with native support compared to Node/PHP tools\n- UI and developer experience are less polished than Contentful or Sanity\n- Plugin/extension ecosystem is minimal; most customization requires code changes",
    "tags": [
      "headless-cms",
      "dotnet",
      "mongodb",
      "graphql",
      "cqrs"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ech0",
    "name": "Ech0",
    "tagline": "Lightweight federated micro-blog for personal idea sharing",
    "descriptionMd": "Ech0 is a lightweight, federated publishing platform focused on sharing short personal notes and ideas, similar in spirit to a micro-blog. It supports ActivityPub federation, allowing posts to be followed from other fediverse clients. The project is primarily documented in Chinese and is distributed as a Docker image for easy deployment. It targets individuals who want a minimal, self-hosted alternative to social micro-blogging services.",
    "repoUrl": "https://github.com/lin-snow/Ech0",
    "websiteUrl": "https://echo.soopy.cn/",
    "demoUrl": "https://memo.vaaat.com/",
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "medium",
      "substack",
      "wordpress-com"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 2006,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Documentation is almost entirely in Chinese, limiting adoption by non-Chinese-speaking users\n- Very early-stage project with limited features compared to established platforms like WriteFreely\n- No email newsletter, paid subscriptions, or monetization features\n- No themes, plugins, or extensibility; feature set is intentionally minimal",
    "tags": [
      "micro-blog",
      "activitypub",
      "fediverse",
      "federated",
      "blogging"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "publify",
    "name": "Publify",
    "tagline": "Simple full-featured blogging platform built on Ruby on Rails",
    "descriptionMd": "Publify (formerly Typo) is one of the oldest open-source blogging engines, built with Ruby on Rails. It provides article and page management, comment and spam filtering via Akismet, a sidebars/widgets system, multiple themes, and basic statistics. It supports OpenID login and AtomPub. Self-host on any Ruby/PostgreSQL or MySQL environment.",
    "repoUrl": "https://github.com/publify/publify",
    "websiteUrl": "https://publify.github.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "wordpress-com",
      "medium",
      "substack"
    ],
    "license": "MIT",
    "language": "Ruby",
    "githubStars": 1855,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Development activity is slow; fewer updates compared to actively maintained blogging platforms\n- No built-in newsletter or email subscriber functionality\n- Themes and plugin ecosystem are very limited compared to WordPress\n- Ruby on Rails stack is less common for hosting, increasing deployment friction",
    "tags": [
      "blogging",
      "ruby-on-rails",
      "cms",
      "open-source",
      "publishing"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "kirby-cms",
    "name": "Kirby",
    "tagline": "File-based CMS with no database required",
    "descriptionMd": "Kirby is a file-based PHP CMS that stores all content as plain text files in a folder structure, eliminating the need for a database. It provides a clean panel admin UI, a flexible content model with custom fields, image processing, multi-language support, and a REST API for headless use. Kirby uses a commercial per-site license while the source code is publicly available. Deploy on any PHP-capable web host.",
    "repoUrl": "https://github.com/getkirby/kirby",
    "websiteUrl": "https://getkirby.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "blog-cms",
    "replaces": [
      "squarespace",
      "wordpress-com",
      "contentful"
    ],
    "license": "⊘ Proprietary",
    "language": "PHP",
    "githubStars": 1516,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Commercial per-site license required; cost adds up for agencies managing many sites\n- File-based storage does not scale well for high-traffic sites with many content editors writing simultaneously\n- No built-in e-commerce, memberships, or newsletter functionality\n- Plugin ecosystem is smaller than WordPress; fewer pre-built integrations available",
    "tags": [
      "cms",
      "file-based",
      "php",
      "no-database",
      "content-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "rsshub",
    "name": "RSSHub",
    "tagline": "Extensible RSS feed generator for virtually any website or service",
    "descriptionMd": "RSSHub is an open-source RSS feed aggregator that can generate valid RSS/Atom feeds from hundreds of sources including social media platforms, news sites, and university portals. It ships with a vast collection of community-contributed routes and a plugin system to add new sources. Deployment is straightforward via Docker or Node.js, and an official public instance is available at rsshub.app.",
    "repoUrl": "https://github.com/DIYgod/RSSHub",
    "websiteUrl": "https://docs.rsshub.app",
    "demoUrl": "https://rsshub.app",
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "pocket",
      "instapaper"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 44868,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in read-later or article-saving functionality; it only generates feeds\n- No user authentication or per-user personalization out of the box\n- Relies on scraping, so routes break when upstream sites change structure\n- No offline reading or sync across devices",
    "tags": [
      "rss",
      "feed-aggregator",
      "self-hosted",
      "open-source"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "karakeep",
    "name": "Karakeep",
    "tagline": "AI-powered bookmark manager for collecting and organizing everything",
    "descriptionMd": "Karakeep is a bookmark-everything application designed for data hoarders who want to save links, notes, images, and full-page snapshots in one place. It incorporates AI features such as automatic tagging and content summarization to help organize large collections. The application is distributed primarily as a Docker image and supports web, iOS, and Android clients. A live demo instance is available for evaluation.",
    "repoUrl": "https://github.com/karakeep-app/karakeep",
    "websiteUrl": "https://karakeep.app/",
    "demoUrl": "https://try.karakeep.app/signin",
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "raindrop",
      "pocket",
      "instapaper"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 26182,
    "lastCommitAt": "2026-06-14",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- AI tagging quality depends on the local/hosted LLM configured — requires additional setup\n- No collaborative or team sharing features comparable to Raindrop's public collections\n- Mobile apps are in active development and may lag behind web feature parity\n- AGPL license may restrict proprietary integrations",
    "tags": [
      "bookmarks",
      "read-later",
      "ai",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "linkwarden",
    "name": "LinkWarden",
    "tagline": "Collaborative bookmark and web-archive manager with full-page snapshots",
    "descriptionMd": "LinkWarden is a self-hosted bookmark and link archiving tool that saves full-page screenshots and readable versions of bookmarked URLs to prevent link rot. It supports team collaboration with shared collections, tagging, and search. The application is packaged as a Docker image and uses PostgreSQL for storage. An official managed cloud offering is also available for users who prefer not to self-host.",
    "repoUrl": "https://github.com/linkwarden/linkwarden",
    "websiteUrl": "https://linkwarden.app/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "raindrop",
      "pocket",
      "instapaper"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 18692,
    "lastCommitAt": "2026-06-09",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No mobile native apps; browser extensions are the primary capture method\n- Full-page archiving can be resource-intensive and slow on low-spec servers\n- Collaboration features lack granular permission roles available in premium SaaS tools\n- No built-in RSS reader or feed subscription management",
    "tags": [
      "bookmarks",
      "archiving",
      "collaboration",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "freshrss",
    "name": "FreshRSS",
    "tagline": "Self-hostable RSS aggregator with a clean multi-user web interface",
    "descriptionMd": "FreshRSS is a mature, feature-rich RSS and Atom feed aggregator written in PHP. It supports multiple users, OPML import/export, keyboard shortcuts, and a Fever-compatible API so clients like Reeder and NetNewsWire can connect to it. Installation can be done via Docker or a traditional LAMP stack, and a live demo is publicly accessible.",
    "repoUrl": "https://github.com/FreshRSS/FreshRSS",
    "websiteUrl": "https://freshrss.org/",
    "demoUrl": "https://demo.freshrss.org/i/",
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "instapaper",
      "pocket"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 15372,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No AI-driven article recommendations or smart filtering like Feedly Pro\n- Read-later queue is basic; no article annotation or highlight export\n- Mobile experience relies on third-party apps via the API rather than first-party apps\n- Newsletter-to-RSS and email digest features absent",
    "tags": [
      "rss",
      "feed-reader",
      "multi-user",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "shiori",
    "name": "Shiori",
    "tagline": "Simple Go-based bookmark manager with CLI and web interface",
    "descriptionMd": "Shiori is a straightforward bookmark manager built in Go, offering both a command-line interface and a minimal web UI. It can archive page content offline, supports tagging and search, and uses a single SQLite or PostgreSQL database with no external dependencies. A single compiled binary makes deployment very simple on any platform.",
    "repoUrl": "https://github.com/go-shiori/shiori",
    "websiteUrl": "https://github.com/go-shiori/shiori",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "pocket",
      "instapaper",
      "raindrop"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 11511,
    "lastCommitAt": "2026-02-01",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No multi-user support; designed as a single-user personal tool\n- Web UI is minimal with no rich text or annotation capabilities\n- No browser extension for one-click saving; relies on CLI or bookmarklet\n- No RSS feed subscription or reader functionality",
    "tags": [
      "bookmarks",
      "cli",
      "archiving",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "linkding",
    "name": "linkding",
    "tagline": "Minimal self-hosted bookmark manager optimized for speed and simplicity",
    "descriptionMd": "linkding is a lean bookmark manager with a fast, clean web UI built for personal use and deployable on a Raspberry Pi. It supports tagging, search, OPML/Netscape import-export, and optional background archiving via Wayback Machine or local snapshots. Docker installation takes minutes, and the app requires minimal resources.",
    "repoUrl": "https://github.com/sissbruecker/linkding",
    "websiteUrl": "https://linkding.link/",
    "demoUrl": "https://demo.linkding.link/login/",
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "pocket",
      "raindrop",
      "instapaper"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 10748,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in article view or reader mode; links open in the original source\n- Multi-user support is limited; no team sharing or collaborative collections\n- No mobile native apps; browser extension and bookmarklet only\n- No AI tagging, smart recommendations, or content analysis",
    "tags": [
      "bookmarks",
      "minimal",
      "self-hosted",
      "raspberry-pi"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "miniflux",
    "name": "Miniflux",
    "tagline": "Minimalist, opinionated RSS reader built for speed and privacy",
    "descriptionMd": "Miniflux is an opinionated RSS and Atom feed reader written in Go, emphasizing simplicity, speed, and privacy. It ships as a single binary backed by PostgreSQL and exposes a Fever and Google Reader-compatible API for third-party client apps. It supports fetch rules, content rewriting, and read-later integrations with Wallabag, Pocket, and Pinboard.",
    "repoUrl": "https://github.com/miniflux/v2",
    "websiteUrl": "https://miniflux.app/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "instapaper",
      "pocket"
    ],
    "license": "Apache-2.0",
    "language": "Go",
    "githubStars": 9385,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Deliberately minimal UI with no customizable themes or layout options\n- No native mobile apps; third-party apps required via API\n- No AI or ML-based article recommendations or smart prioritization\n- Requires PostgreSQL — cannot run on SQLite for simpler setups",
    "tags": [
      "rss",
      "feed-reader",
      "minimalist",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "rss-bridge",
    "name": "RSS-Bridge",
    "tagline": "Generate RSS and Atom feeds for sites that don't provide them",
    "descriptionMd": "RSS-Bridge is a PHP application that creates RSS and Atom feeds for websites that lack native feed support, including many social networks and news aggregators. It provides a large library of community-maintained bridges for sites like Twitter, Reddit, and YouTube. Self-hosting is possible via PHP or Docker, and the project requires no database.",
    "repoUrl": "https://github.com/RSS-Bridge/rss-bridge",
    "websiteUrl": "https://github.com/RSS-Bridge/rss-bridge",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "pocket",
      "instapaper"
    ],
    "license": "Unlicense",
    "language": "PHP",
    "githubStars": 9023,
    "lastCommitAt": "2026-06-05",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Generates feeds only; no reading interface, saved articles, or annotations\n- Bridges break frequently when upstream sites change their HTML structure\n- No authentication layer by default — publicly exposed instances are open to abuse\n- No mobile apps or browser extensions for capturing pages",
    "tags": [
      "rss",
      "feed-generator",
      "scraping",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "newsblur",
    "name": "NewsBlur",
    "tagline": "Social RSS reader with story training and discussion features",
    "descriptionMd": "NewsBlur is a personal and social news reader that lets users subscribe to RSS feeds and train it with likes/dislikes to surface relevant stories. It supports social features such as shared blurblog stories and commenting, and provides native iOS and Android apps. The full stack can be self-hosted using Docker Compose, though it involves multiple services including MongoDB, PostgreSQL, Redis, and Elasticsearch.",
    "repoUrl": "https://github.com/samuelclay/NewsBlur",
    "websiteUrl": "https://www.newsblur.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "pocket",
      "instapaper"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 7515,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosting is complex: requires MongoDB, PostgreSQL, Redis, Elasticsearch, and Celery workers\n- Documentation for self-hosted setup is sparse compared to the hosted version\n- Social blurblog network only active on the official hosted instance\n- Story training model is less sophisticated than modern ML-based feed ranking in Feedly Pro",
    "tags": [
      "rss",
      "feed-reader",
      "social",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "buku",
    "name": "Buku",
    "tagline": "Powerful command-line bookmark manager with a personal mini-web",
    "descriptionMd": "Buku is a terminal-centric bookmark manager written in Python that stores bookmarks in a local SQLite database. It supports tags, full-text search, encryption, and can auto-fetch page titles and descriptions. A companion web UI (Bukuserver) is available for browser-based access, and the project ships a browser extension for one-click saving.",
    "repoUrl": "https://github.com/jarun/Buku",
    "websiteUrl": "https://github.com/jarun/Buku",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "pocket",
      "raindrop",
      "instapaper"
    ],
    "license": "GPL-3.0",
    "language": "Python",
    "githubStars": 7146,
    "lastCommitAt": "2026-06-14",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Primarily a CLI tool; web UI (Bukuserver) is functional but not polished\n- No article archiving, reader mode, or offline content snapshots\n- No native mobile apps; sync between devices is manual\n- No RSS subscription or feed reading functionality",
    "tags": [
      "bookmarks",
      "cli",
      "sqlite",
      "python"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "stringer",
    "name": "Stringer",
    "tagline": "Self-hosted anti-social RSS reader built with Ruby on Rails",
    "descriptionMd": "Stringer is a deliberately simple self-hosted RSS reader built with Ruby on Rails, designed as a focused reading tool without social features. It supports feed management, article starring, and a minimal keyboard-driven interface. The application deploys on any Rails-compatible host or via Docker and uses PostgreSQL.",
    "repoUrl": "https://github.com/stringer-rss/stringer",
    "websiteUrl": "https://github.com/stringer-rss/stringer",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "instapaper",
      "pocket"
    ],
    "license": "MIT",
    "language": "Ruby",
    "githubStars": 4115,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Marked as work-in-progress; lacks some features expected of a production reader\n- No multi-user support; single-user only\n- No mobile native app or official API for third-party clients\n- No content archiving, annotations, or read-later queue with offline sync",
    "tags": [
      "rss",
      "feed-reader",
      "ruby",
      "minimalist"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "shaarli",
    "name": "Shaarli",
    "tagline": "Fast, database-free personal bookmarking and link-sharing platform",
    "descriptionMd": "Shaarli is a minimalist personal bookmarking service written in PHP that requires no database, storing all data in flat files. It supports tagging, full-text search, RSS feed output, link annotations, and thumbnail generation. The application is lightweight enough to run on shared hosting or a low-end VPS with a live demo available for testing.",
    "repoUrl": "https://github.com/shaarli/Shaarli",
    "websiteUrl": "https://github.com/shaarli/Shaarli",
    "demoUrl": "https://demo.shaarli.org",
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "raindrop",
      "pocket",
      "instapaper"
    ],
    "license": "Zlib",
    "language": "PHP",
    "githubStars": 3873,
    "lastCommitAt": "2026-05-28",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No multi-user account system; single-user personal tool only\n- Flat-file storage limits scalability for very large bookmark collections\n- No article archiving, reader mode, or offline content snapshots\n- No native mobile apps; relies on browser bookmarklet for capture",
    "tags": [
      "bookmarks",
      "flat-file",
      "php",
      "minimalist"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "yarr",
    "name": "Yarr",
    "tagline": "Lightweight web-based RSS reader usable as desktop app or personal server",
    "descriptionMd": "Yarr (yet another rss reader) is a compact Go application that doubles as both a local desktop RSS client and a self-hosted server. It bundles the entire UI into a single binary with no external dependencies, stores data in SQLite, and provides a clean reading interface with keyboard shortcuts and dark mode. The binary can be launched directly or served behind a reverse proxy.",
    "repoUrl": "https://github.com/nkanaev/yarr",
    "websiteUrl": "https://github.com/nkanaev/yarr",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "instapaper",
      "pocket"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 3860,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 1,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No user accounts; designed for single-user personal use only\n- No API for third-party mobile clients or integrations\n- Minimal configuration options; no plugins or extension support\n- No content archiving, offline snapshots, or annotations",
    "tags": [
      "rss",
      "feed-reader",
      "go",
      "single-binary"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "commafeed",
    "name": "CommaFeed",
    "tagline": "Google Reader-inspired self-hosted RSS reader with a familiar interface",
    "descriptionMd": "CommaFeed is a Java-based self-hosted RSS reader modeled after the defunct Google Reader, offering a familiar three-panel layout with keyboard shortcuts. It supports multi-user accounts, OPML import/export, a REST API for third-party clients, and can scale to large numbers of feeds with its background fetching engine. Deployment options include a standalone JAR or Docker.",
    "repoUrl": "https://github.com/Athou/commafeed",
    "websiteUrl": "https://www.commafeed.com/",
    "demoUrl": "https://www.commafeed.com/#/app/category/all",
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "instapaper",
      "pocket"
    ],
    "license": "Apache-2.0",
    "language": "Java",
    "githubStars": 3555,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No AI-based article recommendations or smart prioritization\n- No native mobile apps; third-party clients connect via the REST API\n- Java runtime increases memory footprint compared to Go/PHP alternatives\n- No built-in read-later queue or archiving; depends on external integrations",
    "tags": [
      "rss",
      "feed-reader",
      "java",
      "google-reader"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "linkace",
    "name": "LinkAce",
    "tagline": "Self-hosted bookmark archive with Internet Archive backups and link monitoring",
    "descriptionMd": "LinkAce is a self-hosted bookmark manager that automatically backs up saved links to the Internet Archive's Wayback Machine, ensuring links are preserved even if the original page disappears. It offers link monitoring to detect broken or changed URLs, tag-based organization, lists, full-text search, and a complete REST API. Deployment is supported via Docker or as a standard PHP application on any web server with MySQL/MariaDB.",
    "repoUrl": "https://github.com/Kovah/LinkAce/",
    "websiteUrl": "https://www.linkace.org/",
    "demoUrl": "https://demo.linkace.org/guest/links",
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "raindrop",
      "pocket",
      "instapaper"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 3302,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in article text extraction or read-later offline reading mode like Pocket or Instapaper\n- No browser extension for one-click saving on all major browsers (relies on bookmarklets or manual entry)\n- Lacks AI-powered content recommendations or smart tagging compared to Raindrop\n- No native mobile app; mobile access is web-only",
    "tags": [
      "bookmarks",
      "link-archiving",
      "self-hosted",
      "rest-api"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "slash-bookmarks",
    "name": "Slash",
    "tagline": "Open-source self-hosted bookmarks and short-link sharing platform",
    "descriptionMd": "Slash is a self-hosted bookmarks and link sharing platform that also doubles as a URL shortener, letting teams and individuals save, organize, and share links under custom short slugs. It provides collections, tags, and a clean web UI alongside a browser extension for quick saves. Deployment is via Docker with a single-container setup backed by SQLite.",
    "repoUrl": "https://github.com/yourselfhosted/slash",
    "websiteUrl": null,
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "raindrop",
      "pocket"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 3164,
    "lastCommitAt": "2026-03-01",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No full-text article extraction or offline reading capability\n- URL shortener focus means read-later and annotation features are minimal\n- No Internet Archive integration or broken-link monitoring\n- Limited import/export from popular bookmark services like Pocket or Raindrop",
    "tags": [
      "bookmarks",
      "url-shortener",
      "link-sharing",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "selfoss",
    "name": "Selfoss",
    "tagline": "Multipurpose self-hosted RSS reader and live stream aggregator",
    "descriptionMd": "Selfoss is a web-based RSS/Atom feed reader and content aggregator that can pull in live streams from social networks, news sites, and custom sources via plugins. It features a responsive UI, tagging, search, read/unread tracking, and a REST API for third-party clients. Deployed as a PHP application, it requires only a web server with PHP and a supported database (SQLite, MySQL, or PostgreSQL).",
    "repoUrl": "https://github.com/fossar/selfoss",
    "websiteUrl": "https://selfoss.aditu.de/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "pocket"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 2463,
    "lastCommitAt": "2026-06-01",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in article text extraction or offline read-later saving\n- UI is dated compared to modern readers like Feedly; mobile experience is limited\n- No native mobile apps; relies on third-party clients via API\n- Social source plugins (Twitter/X, etc.) are fragile due to API changes",
    "tags": [
      "rss",
      "feed-reader",
      "aggregator",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "fusion-rss",
    "name": "Fusion",
    "tagline": "Lightweight self-hosted RSS aggregator and reader written in Go",
    "descriptionMd": "Fusion is a minimal, fast RSS feed aggregator and reader built with Go, designed to run efficiently on low-resource servers. It provides a clean reading interface, feed management, and article search with a focus on simplicity and low memory footprint. Deployment is a single Go binary or Docker container backed by SQLite, requiring minimal configuration.",
    "repoUrl": "https://github.com/0x2E/fusion",
    "websiteUrl": null,
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "read-later-feeds",
    "replaces": [
      "feedly",
      "pocket"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 2117,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Very minimal feature set; lacks tagging, folders, and advanced filtering found in Feedly\n- No read-later or article archiving functionality\n- No third-party client API or mobile app support\n- Fewer integrations and plugin ecosystem compared to mature readers",
    "tags": [
      "rss",
      "feed-reader",
      "lightweight",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "immich",
    "name": "Immich",
    "tagline": "High-performance self-hosted photo and video backup, a Google Photos alternative",
    "descriptionMd": "Immich is a self-hosted photo and video management solution with native mobile apps for iOS and Android that perform automatic background backup. It offers face recognition, object detection, map view, albums, shared libraries, and a web UI that closely mirrors the Google Photos experience. Deployment is via Docker Compose with multiple services including machine-learning inference.",
    "repoUrl": "https://github.com/immich-app/immich",
    "websiteUrl": "https://immich.app/",
    "demoUrl": "https://github.com/immich-app/immich#demo",
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 104132,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires multi-container Docker Compose setup with GPU/CPU for ML; more resource-intensive than cloud alternatives\n- Project is still pre-1.0 and explicitly warns against using as the sole backup solution\n- No built-in CDN or geo-redundant storage; relies on local disk or manually configured object storage\n- Collaborative shared albums lack the polish and third-party integrations of Google Photos",
    "tags": [
      "photos",
      "backup",
      "face-recognition",
      "mobile-sync"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "photoprism",
    "name": "PhotoPrism",
    "tagline": "AI-powered personal photo management with TensorFlow tagging and browsing",
    "descriptionMd": "PhotoPrism is a self-hosted photo and video library powered by Go and Google TensorFlow for automatic subject and scene classification. It provides a browsable web gallery, face recognition, location maps, duplicate detection, RAW file support, and multi-user access. It can be deployed as a single Docker container or via Docker Compose, with an optional managed hosting plan available.",
    "repoUrl": "https://github.com/photoprism/photoprism",
    "websiteUrl": "https://photoprism.org",
    "demoUrl": "https://demo.photoprism.app/library/browse",
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 39886,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Mobile auto-backup requires a third-party app (no official mobile client); Google Photos has seamless native sync\n- Advanced features (multi-user, private mode) locked behind a paid Plus license\n- Initial indexing and AI classification can be very slow on CPU-only hardware\n- Face recognition accuracy is lower than Google Photos' cloud-scale models",
    "tags": [
      "photos",
      "ai-tagging",
      "face-recognition",
      "gallery"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ente-photos",
    "name": "Ente",
    "tagline": "End-to-end encrypted self-hosted photo backup with native mobile apps",
    "descriptionMd": "Ente is an end-to-end encrypted photo and video storage platform with native iOS and Android apps that perform automatic backup. All data is encrypted client-side, meaning even the server operator cannot view your media. The full server stack including the Go backend and web app can be self-hosted via Docker Compose, and Ente also offers a paid managed cloud service.",
    "repoUrl": "https://github.com/ente-io/ente",
    "websiteUrl": "https://ente.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 27256,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No AI-based automatic photo tagging, scene recognition, or search by content due to E2E encryption\n- Self-hosted setup requires configuring S3-compatible object storage separately\n- Smaller ecosystem of third-party integrations compared to Google Photos\n- Collaborative album features are less mature than Google Photos shared libraries",
    "tags": [
      "photos",
      "end-to-end-encryption",
      "backup",
      "mobile-sync"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "thumbor",
    "name": "Thumbor",
    "tagline": "On-demand smart image cropping, resizing, and optimization service",
    "descriptionMd": "Thumbor is a smart imaging service that performs on-demand image processing including intelligent cropping (detecting faces and focal points), resizing, filtering, and format optimization. It exposes a URL-based API where transformation parameters are embedded in the URL, making it easy to integrate with web applications and CDNs. Deployable via Docker or as a Python application with Redis for queuing.",
    "repoUrl": "https://github.com/thumbor/thumbor",
    "websiteUrl": "http://thumbor.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 10500,
    "lastCommitAt": "2026-06-06",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Not a photo gallery or backup tool; serves only image transformation/CDN use cases\n- Requires a reverse proxy and optional object storage for production-grade deployments\n- No web UI for photo browsing, albums, or user management\n- Documentation and ecosystem are less active compared to commercial image CDNs like Cloudinary",
    "tags": [
      "image-processing",
      "resizing",
      "cdn",
      "on-demand"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "librephotos",
    "name": "LibrePhotos",
    "tagline": "Self-hosted Google Photos alternative with AI tagging and usage graphs",
    "descriptionMd": "LibrePhotos is a self-hosted photo management service with automatic face recognition, object detection via machine learning, location maps, and distinctive usage-graph visualizations of your photo library. It supports multi-user setups, album sharing, and full-text search. Deployment is via Docker Compose with separate containers for backend, frontend, and the ML worker.",
    "repoUrl": "https://github.com/LibrePhotos/librephotos",
    "websiteUrl": null,
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 7999,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No native mobile app for automatic photo backup; requires manual upload or third-party tools\n- ML indexing is CPU-intensive and slow on modest hardware compared to cloud-scale recognition\n- Less actively maintained than Immich or PhotoPrism; some features feel unpolished\n- No built-in video transcoding or live photo support",
    "tags": [
      "photos",
      "face-recognition",
      "ai-tagging",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "photoview",
    "name": "Photoview",
    "tagline": "Simple directory-first photo gallery for personal servers with EXIF and RAW support",
    "descriptionMd": "Photoview is a clean, fast photo gallery that indexes existing directory structures on disk, making it ideal for photographers who organize files in folders. It supports RAW image formats, EXIF metadata display, video playback, face recognition, and shared albums. Built with Go and React, it deploys via Docker Compose with a MariaDB/MySQL backend.",
    "repoUrl": "https://github.com/photoview/photoview",
    "websiteUrl": "https://photoview.github.io/",
    "demoUrl": "https://photoview.github.io/",
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "GPL-3.0",
    "language": "Go",
    "githubStars": 6459,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No mobile app for automatic photo backup; gallery is view-only from mobile browsers\n- Limited AI-powered search; object and scene recognition are basic compared to Google Photos\n- No two-way sync; adding photos requires filesystem access on the server\n- Development activity has slowed; some reported issues with large libraries",
    "tags": [
      "photos",
      "gallery",
      "raw-support",
      "directory-based"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "lychee",
    "name": "Lychee",
    "tagline": "Grid and album-based self-hosted photo management system",
    "descriptionMd": "Lychee is a polished, self-hosted photo management application offering grid and album views, drag-and-drop uploads, public/private sharing links, EXIF data display, and multi-user support. It supports a wide range of image and video formats and provides a clean, modern web interface. Deployable as a PHP/Laravel application with Docker support.",
    "repoUrl": "https://github.com/LycheeOrg/Lychee",
    "websiteUrl": "https://lycheeorg.github.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 4200,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No automatic mobile backup; photos must be uploaded manually via the web interface\n- No AI-based tagging, face recognition, or semantic search\n- Some advanced features (smart albums, U2F login) require the paid Supporter Edition\n- No video transcoding; video support is limited to direct playback of uploaded files",
    "tags": [
      "photos",
      "gallery",
      "albums",
      "sharing"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "piwigo",
    "name": "Piwigo",
    "tagline": "Community-driven PHP photo gallery software with extensive plugin ecosystem",
    "descriptionMd": "Piwigo is a mature, community-driven photo gallery platform built in PHP with a long history dating back to 2002. It supports multi-user access, albums, tags, batch management, metadata handling, and features over 200 plugins extending its functionality. Piwigo can be self-hosted on any PHP/MySQL web server or used via the Piwigo.com managed hosting service.",
    "repoUrl": "https://github.com/Piwigo/Piwigo",
    "websiteUrl": "https://piwigo.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "GPL-2.0",
    "language": "PHP",
    "githubStars": 3802,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual",
      "Docker"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- UI feels dated compared to modern photo management apps like Google Photos or Immich\n- No native mobile app for automatic backup; mobile sync requires third-party plugins\n- AI-powered features like face recognition and object tagging require third-party plugins with variable quality\n- Initial setup requires manual PHP/MySQL web server configuration without Docker Compose",
    "tags": [
      "photos",
      "gallery",
      "plugins",
      "community"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "nextcloud-memories",
    "name": "Nextcloud Memories",
    "tagline": "Fast modern photo management suite running as a Nextcloud app",
    "descriptionMd": "Nextcloud Memories is a high-performance photo and video management application that runs as a plugin within a Nextcloud instance. It provides a Google Photos-like timeline UI, face recognition, EXIF-based maps, albums, people clustering, and hardware-accelerated video transcoding. Requires an existing Nextcloud deployment and benefits from a high-performance backend (HPOP) for large libraries.",
    "repoUrl": "https://github.com/pulsejet/memories",
    "websiteUrl": "https://memories.gallery/",
    "demoUrl": "https://demo.memories.gallery/apps/memories/",
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 3791,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual",
      "Docker"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires a full Nextcloud installation as a prerequisite; cannot be deployed standalone\n- Face recognition depends on the separate Recognize or Face Recognition Nextcloud apps, adding complexity\n- Hardware video transcoding requires manual ffmpeg and VA-API/NVENC configuration\n- Performance at scale depends heavily on Nextcloud database tuning and the optional HPOP binary",
    "tags": [
      "photos",
      "nextcloud",
      "timeline",
      "face-recognition"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "pigallery2",
    "name": "PiGallery 2",
    "tagline": "Directory-first photo gallery optimised for low-resource Raspberry Pi servers",
    "descriptionMd": "PiGallery 2 is a fast, directory-based photo gallery application designed to run on low-power hardware like a Raspberry Pi. It indexes an existing photo directory structure on disk without moving or duplicating files, provides a rich responsive web UI with map view, search, metadata display, and supports photos and videos. Deployment is a single Docker container requiring no external database.",
    "repoUrl": "https://github.com/bpatrik/pigallery2",
    "websiteUrl": "https://bpatrik.github.io/pigallery2/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 2216,
    "lastCommitAt": "2026-06-07",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No automatic mobile backup functionality; read-only gallery view only\n- No AI-based face recognition or object tagging\n- Multi-user support with per-user permissions is limited\n- No photo editing, sharing links with expiry, or album collaboration features",
    "tags": [
      "photos",
      "gallery",
      "raspberry-pi",
      "lightweight"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "chronoframe",
    "name": "ChronoFrame",
    "tagline": "Personal photo gallery with Live Photos support and an interactive explore map",
    "descriptionMd": "ChronoFrame is a self-hosted personal gallery application built with Node.js that lets you manage and browse your photo collection online. It supports Apple Live Photos and Motion Photos, giving animated previews in the browser. An interactive explore map lets you visualise where photos were taken by GPS metadata. It is designed for personal use and deploys as a Node.js application.",
    "repoUrl": "https://github.com/HoshinoSuzumi/chronoframe",
    "websiteUrl": "https://chronoframe.bh8.ga/",
    "demoUrl": "https://lens.bh8.ga/",
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 1844,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in face recognition or AI-powered search found in Google Photos\n- Sharing albums with external users is limited compared to Google Photos or iCloud\n- No automatic cloud backup or redundancy — you manage storage yourself\n- Mobile app or PWA upload support is absent; uploading relies on manual file placement",
    "tags": [
      "photo-gallery",
      "live-photos",
      "geo-map",
      "self-hosted",
      "nodejs"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "damselfly",
    "name": "Damselfly",
    "tagline": "Fast server-side photo manager with face recognition and powerful EXIF search",
    "descriptionMd": "Damselfly is a server-based photo management system built for large image collections, running on Linux, macOS, and Windows via Docker. It offers face detection and recognition, object recognition, and EXIF keyword tagging alongside a powerful full-text search. The system indexes images in place and exposes a web UI for browsing and organising your library without duplicating files.",
    "repoUrl": "https://github.com/webreaper/damselfly",
    "websiteUrl": "https://damselfly.info",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 1770,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Face recognition quality lags behind Google Photos' ML-backed clustering\n- No mobile companion app for automatic camera-roll upload\n- Video management and playback support is minimal\n- No sharing links or collaborative album features comparable to Google Photos shared albums",
    "tags": [
      "photo-management",
      "face-recognition",
      "exif",
      "search",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "immich-kiosk",
    "name": "Immich Kiosk",
    "tagline": "Lightweight Immich-powered photo slideshow for kiosk displays and browsers",
    "descriptionMd": "Immich Kiosk is a lightweight slideshow add-on that uses an existing Immich instance as its photo data source, making it easy to turn any screen or browser into a digital photo frame. It ships as a single Docker container and is configured through environment variables or a simple YAML file. Display options include random albums, people, memories, and custom filters.",
    "repoUrl": "https://github.com/damongolding/immich-kiosk",
    "websiteUrl": "https://github.com/damongolding/immich-kiosk",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "photos",
    "replaces": [
      "google-photos",
      "icloud-photos"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 1556,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires a running Immich server — not a standalone photo solution\n- No built-in photo management, editing, or upload capabilities\n- Slideshow customisation is limited to what Immich exposes via its API\n- No offline mode; depends entirely on network access to the Immich backend",
    "tags": [
      "slideshow",
      "kiosk",
      "immich",
      "photo-frame",
      "docker"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "gitea",
    "name": "Gitea",
    "tagline": "Painless self-hosted Git service with code review, CI/CD, and package registry",
    "descriptionMd": "Gitea is a lightweight, self-hosted all-in-one DevOps platform written in Go that covers Git hosting, pull-request code review, issue tracking, wiki, team management, package registry, and a built-in CI/CD system (Gitea Actions). It is distributed as a single binary or Docker image, making it easy to run on modest hardware. A managed cloud option is available at gitea.com.",
    "repoUrl": "https://github.com/go-gitea/gitea",
    "websiteUrl": "https://gitea.com",
    "demoUrl": "https://demo.gitea.com",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "linear",
      "trello"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 56439,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Advanced Jira-style sprint planning, roadmaps, and velocity charts are absent\n- No native real-time pair-programming or live collaboration tools\n- Gitea Actions ecosystem is smaller than GitHub Actions; fewer third-party action integrations\n- Enterprise SSO (SAML, advanced LDAP group sync) requires extra configuration effort",
    "tags": [
      "git",
      "devops",
      "ci-cd",
      "code-review",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "gogs",
    "name": "Gogs",
    "tagline": "Minimal painless self-hosted Git service written in Go",
    "descriptionMd": "Gogs is a lightweight self-hosted Git service written in Go, designed to run on low-power hardware including Raspberry Pi. It provides repositories, issues, wikis, milestones, and a simple web interface for managing code. Gogs uses SQLite by default, making setup a single binary download. It is the upstream from which Gitea was forked.",
    "repoUrl": "https://github.com/gogs/gogs",
    "websiteUrl": "https://gogs.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "linear",
      "trello"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 47616,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in CI/CD pipeline; relies on webhooks to external systems\n- Code review and pull-request functionality is basic compared to GitHub or Gitea\n- Plugin/extension ecosystem is very limited\n- Development pace is slower than Gitea; some features lag behind by years",
    "tags": [
      "git",
      "code-hosting",
      "lightweight",
      "self-hosted",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "super-productivity",
    "name": "Super Productivity",
    "tagline": "Advanced to-do app with timeboxing, time tracking, and Jira/GitHub integrations",
    "descriptionMd": "Super Productivity is an advanced to-do and time management application with built-in timeboxing, Pomodoro timer, and time tracking. It integrates natively with Jira, GitHub, GitLab, Redmine, and OpenProject, syncing tasks bidirectionally. The app runs as a web app, desktop Electron application, or can be self-hosted via Docker, with local-first data storage and optional sync.",
    "repoUrl": "https://github.com/super-productivity/super-productivity",
    "websiteUrl": "https://super-productivity.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "asana",
      "trello",
      "monday"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 20209,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No multi-user collaboration or team workspace; primarily single-user\n- Board/Gantt chart views common in Asana or Monday.com are absent\n- Reporting and analytics are limited to personal time logs\n- No built-in file attachments or rich document editing on tasks",
    "tags": [
      "todo",
      "time-tracking",
      "timeboxing",
      "pomodoro",
      "productivity"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "gitbucket",
    "name": "gitbucket",
    "tagline": "GitHub-compatible self-hosted Git platform with easy install and high extensibility",
    "descriptionMd": "GitBucket is a Git platform built with Scala that aims for GitHub API compatibility, allowing existing GitHub-compatible tools and webhooks to work out of the box. It provides repositories, pull requests, issues, wikis, and a plugin system for extensibility. It runs on the JVM as a single WAR file, deployable to any servlet container or as a standalone JAR.",
    "repoUrl": "https://github.com/gitbucket/gitbucket",
    "websiteUrl": "https://gitbucket.github.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "linear",
      "trello"
    ],
    "license": "Apache-2.0",
    "language": "Scala",
    "githubStars": 9372,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No native CI/CD system; requires external integration\n- JVM runtime adds memory overhead compared to Go-based alternatives\n- Package/container registry is not built in\n- Advanced project management views (kanban, roadmaps) require plugins",
    "tags": [
      "git",
      "github-compatible",
      "scala",
      "self-hosted",
      "code-review"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "octobox",
    "name": "Octobox",
    "tagline": "Take back control of your GitHub notifications with a self-hosted inbox",
    "descriptionMd": "Octobox is a self-hosted GitHub notification management application that gives you a triage-friendly inbox view of all your GitHub notifications. It lets you archive, mute, label, and filter notifications across repositories and organisations, and marks items as read after you act on them. It is built with Ruby on Rails and can be deployed via Docker or manually.",
    "repoUrl": "https://github.com/octobox/octobox",
    "websiteUrl": "https://octobox.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "linear",
      "asana"
    ],
    "license": "AGPL-3.0",
    "language": "Ruby",
    "githubStars": 4468,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Scoped exclusively to GitHub notifications; no GitLab or Bitbucket support\n- Not a full project management tool — no task creation, boards, or planning views\n- Requires a GitHub OAuth app setup; adding team members requires individual GitHub auth\n- Development activity has slowed; some GitHub API changes may not be promptly reflected",
    "tags": [
      "github",
      "notifications",
      "inbox",
      "triage",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "nullboard",
    "name": "Nullboard",
    "tagline": "Single-page minimalist kanban board — compact, readable, and fast",
    "descriptionMd": "Nullboard is a minimalist single-page kanban board that runs entirely in the browser with no server required. All data is stored in localStorage, making it instantly usable with zero setup. The UI is intentionally dense and compact to keep as many cards visible as possible. An optional Node.js backup agent can periodically export boards to disk.",
    "repoUrl": "https://github.com/apankrat/nullboard",
    "websiteUrl": "https://github.com/apankrat/nullboard",
    "demoUrl": "https://nullboard.io/preview",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello",
      "asana",
      "monday"
    ],
    "license": "BSD-2-Clause",
    "language": "Javascript",
    "githubStars": 4142,
    "lastCommitAt": "2023-11-05",
    "selfHostDifficulty": 1,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No multi-user support; data lives in a single browser's localStorage\n- No attachments, comments, due dates, or rich task metadata\n- No server-side persistence by default — data is lost if localStorage is cleared\n- No integrations with issue trackers, calendars, or external services",
    "tags": [
      "kanban",
      "minimalist",
      "browser-only",
      "no-backend",
      "todo"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ever-gauzy",
    "name": "Ever Gauzy",
    "tagline": "Open business management platform: ERP, CRM, HRM, ATS, and project management",
    "descriptionMd": "Ever Gauzy is a comprehensive open business management platform covering ERP, CRM, HRM, applicant tracking (ATS), and project management in a single system. It targets collaborative, on-demand, and sharing-economy businesses with features including time tracking, invoicing, inventory, and resource planning. The platform is built on Angular and NestJS and deploys via Docker Compose.",
    "repoUrl": "https://github.com/ever-co/ever-gauzy",
    "websiteUrl": "https://gauzy.co",
    "demoUrl": "https://demo.gauzy.co",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "asana",
      "monday"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 3738,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- High setup complexity; the full stack requires multiple services and significant configuration\n- Documentation and onboarding guides are incomplete in areas\n- UI polish and UX refinement lag behind mature SaaS tools like Jira or Monday\n- Community and plugin ecosystem are small relative to the breadth of features promised",
    "tags": [
      "erp",
      "crm",
      "hrm",
      "time-tracking",
      "project-management"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "kaneo",
    "name": "Kaneo",
    "tagline": "Simple and efficient project management platform focused on clean UX",
    "descriptionMd": "Kaneo is a straightforward project management platform that prioritises simplicity and speed over feature bloat. It provides boards, tasks, and team collaboration in a clean interface. The project ships with Kubernetes manifests as its primary deployment target and also offers a live demo for quick evaluation.",
    "repoUrl": "https://github.com/usekaneo/kaneo",
    "websiteUrl": "https://kaneo.app/",
    "demoUrl": "https://demo.kaneo.app/",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello",
      "asana",
      "linear"
    ],
    "license": "MIT",
    "language": "K8S",
    "githubStars": 3708,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Feature set is early-stage; lacks advanced views like Gantt, timeline, or calendar\n- No native integrations with developer tools (GitHub, GitLab, Jira)\n- Time tracking and reporting capabilities are not present\n- Primary deployment target is Kubernetes, which raises the barrier for smaller teams",
    "tags": [
      "project-management",
      "kanban",
      "kubernetes",
      "team",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "tududi",
    "name": "tududi",
    "tagline": "Hierarchical task manager with smart recurring tasks and Telegram integration",
    "descriptionMd": "Tududi is a self-hosted task management tool that supports hierarchical task structures — projects, areas, and tasks — alongside smart recurring task scheduling. It integrates with Telegram so you can capture and manage tasks directly from a chat bot. The application is built with Ruby and ships as a Docker image for straightforward deployment.",
    "repoUrl": "https://github.com/chrisvel/tududi",
    "websiteUrl": "https://tududi.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "asana",
      "trello",
      "monday"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 3013,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Single-user focused; no team collaboration or permission management\n- No board or Gantt views; primarily a list-based task interface\n- Integrations are limited to Telegram; no native sync with GitHub, Jira, or calendars\n- Mobile app is absent; Telegram bot is the primary mobile interaction method",
    "tags": [
      "tasks",
      "recurring-tasks",
      "telegram",
      "hierarchical",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "donetick",
    "name": "Donetick",
    "tagline": "Task and chore manager for personal and family use with advanced scheduling",
    "descriptionMd": "Donetick is a task and chore management application designed for personal and family use, featuring advanced scheduling options, flexible task assignment across group members, and detailed completion history. It supports automation via a REST API, provides a simple and modern design, and allows group sharing so households can coordinate chores. It is written in Go and deploys as a single binary or container.",
    "repoUrl": "https://github.com/donetick/donetick",
    "websiteUrl": "https://donetick.com",
    "demoUrl": "https://app.donetick.com/",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "asana",
      "trello",
      "monday"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 2270,
    "lastCommitAt": "2026-06-15",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Optimised for household chores rather than professional project management\n- No Gantt charts, sprints, or developer-tool integrations\n- Reporting is limited to basic history logs rather than burndown or velocity charts\n- Small community; fewer integrations and third-party plugins compared to established tools",
    "tags": [
      "chores",
      "task-management",
      "family",
      "scheduling",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "tasks-md",
    "name": "Tasks.md",
    "tagline": "Self-hosted file-based task board with full Markdown syntax support",
    "descriptionMd": "Tasks.md is a self-hosted kanban task management board where each card's content is stored as a Markdown file on disk. This file-based approach means tasks are plain text, version-controllable with Git, and portable without a database. The web interface provides drag-and-drop board management and ships as a Docker image for easy deployment.",
    "repoUrl": "https://github.com/BaldissaraMatheus/Tasks.md",
    "websiteUrl": "https://github.com/BaldissaraMatheus/Tasks.md",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "trello",
      "asana",
      "linear"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 2134,
    "lastCommitAt": "2026-03-08",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No multi-user support or access controls; single-user by design\n- No due dates, labels, priorities, or rich task metadata beyond Markdown content\n- No integrations with external services or developer tools\n- Lacks swimlanes, filters, and search capabilities found in Trello or Linear",
    "tags": [
      "kanban",
      "markdown",
      "file-based",
      "todo",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "review-board",
    "name": "Review Board",
    "tagline": "Extensible code review tool for teams and open-source projects",
    "descriptionMd": "Review Board is a web-based code review system that supports Git, Mercurial, Subversion, and Perforce repositories. It offers diff viewing, inline commenting, review groups, and an extensive API. Teams can integrate it with CI systems and extend it through a plugin ecosystem. Deployed via pip or Docker, it requires a database (MySQL/PostgreSQL) and a web server.",
    "repoUrl": "https://github.com/reviewboard/reviewboard",
    "websiteUrl": "https://www.reviewboard.org/",
    "demoUrl": "https://demo.reviewboard.org/",
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "linear"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 1715,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in issue/ticket tracker; must pair with a separate project-management tool\n- UI feels dated compared to GitHub PRs or modern code-review SaaS products\n- Limited built-in CI/CD pipeline integration vs. Jira's deep Atlassian ecosystem\n- Mobile experience is minimal",
    "tags": [
      "code-review",
      "developer-tools",
      "version-control",
      "collaboration"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "zentao",
    "name": "ZenTao",
    "tagline": "Open-source Agile/Scrum project management with built-in bug tracking",
    "descriptionMd": "ZenTao is a full-featured agile project management system built on PHP that combines Scrum boards, task management, bug tracking, test case management, and document management in a single application. It supports sprint planning, product roadmaps, and team collaboration with role-based permissions. Deployment is straightforward via Docker or a LAMP stack installer.",
    "repoUrl": "https://github.com/easysoft/zentaopms",
    "websiteUrl": "https://www.zentao.pm/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "project-management",
    "replaces": [
      "jira",
      "asana",
      "trello"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 1628,
    "lastCommitAt": "2026-06-03",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- UI/UX is noticeably less polished than Jira or Linear, with a steeper learning curve for Western users\n- English documentation is incomplete; the product is primarily Chinese-market focused\n- Integrations with third-party tools (Slack, GitHub, CI systems) are limited without the paid edition\n- Reporting and analytics are basic compared to Jira's advanced query language",
    "tags": [
      "agile",
      "scrum",
      "project-management",
      "bug-tracking"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ollama",
    "name": "Ollama",
    "tagline": "Run large language models locally with a simple CLI and REST API",
    "descriptionMd": "Ollama lets you download and run LLMs such as Llama 3.3, DeepSeek-R1, Phi-4, and Gemma 3 on your own hardware with a single command. It exposes an OpenAI-compatible REST API so existing tools integrate without modification. GPU acceleration is supported on NVIDIA, AMD, and Apple Silicon. Distributed as a native binary and Docker image, setup requires no manual dependency management.",
    "repoUrl": "https://github.com/ollama/ollama",
    "websiteUrl": "https://ollama.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "openai-api",
      "chatgpt"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 174719,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in chat UI; requires a separate front-end like Open-WebUI\n- Fine-tuning and model training are not supported; inference only\n- Multi-GPU distributed inference is limited compared to commercial inference APIs\n- No built-in authentication, rate-limiting, or multi-tenant access control",
    "tags": [
      "llm",
      "local-ai",
      "inference",
      "openai-compatible"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "open-webui",
    "name": "Open-WebUI",
    "tagline": "Feature-rich self-hosted chat UI for Ollama and OpenAI-compatible APIs",
    "descriptionMd": "Open-WebUI is a polished browser-based interface for interacting with LLMs through Ollama or any OpenAI-compatible backend. It supports multi-user accounts, conversation history, document RAG, image generation, web search, and plugin tools. The interface closely mirrors ChatGPT's UX, making migration straightforward. It ships as a single Docker image and can be deployed with one command.",
    "repoUrl": "https://github.com/open-webui/open-webui",
    "websiteUrl": "https://openwebui.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "chatgpt",
      "openai-api"
    ],
    "license": "BSD-3-Clause",
    "language": "Docker",
    "githubStars": 142599,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Advanced reasoning models and GPT-4o-level capabilities depend entirely on the underlying model quality\n- No native mobile app; browser-only experience\n- Enterprise SSO/SAML and audit logging require additional configuration\n- Plugin/tool ecosystem is smaller and less mature than ChatGPT's GPT store",
    "tags": [
      "chat-ui",
      "llm",
      "ollama",
      "rag"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "lobehub",
    "name": "LobeHub",
    "tagline": "Modern AI chat framework with multi-provider support and MCP marketplace",
    "descriptionMd": "LobeHub is a design-forward AI chat application that aggregates multiple LLM providers (OpenAI, Claude, Gemini, Ollama, and more) into a single interface. It features one-click MCP (Model Context Protocol) marketplace installation, Artifacts rendering, thinking-mode display, and a polished UI inspired by modern design systems. It can be deployed as a Docker container or on serverless platforms.",
    "repoUrl": "https://github.com/lobehub/lobehub",
    "websiteUrl": "https://www.lobehub.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "chatgpt",
      "openai-api"
    ],
    "license": "⊘ Proprietary",
    "language": "Nodejs",
    "githubStars": 78955,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Core codebase is proprietary; community can contribute but cannot freely fork for commercial use\n- Multi-user/team account management is limited in the self-hosted version compared to the cloud offering\n- RAG and knowledge-base features are less mature than dedicated tools like AnythingLLM or Onyx\n- Persistent conversation sync across devices requires the cloud service or custom backend setup",
    "tags": [
      "chat-ui",
      "llm",
      "multi-provider",
      "mcp"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "anythingllm",
    "name": "AnythingLLM",
    "tagline": "All-in-one local AI app with RAG, agents, and no-code agent builder",
    "descriptionMd": "AnythingLLM is a desktop and Docker application that combines document-based RAG, AI agents, a no-code agent workflow builder, and MCP compatibility in a single package. It supports dozens of LLM backends (Ollama, OpenAI, Claude, etc.) and vector databases (ChromaDB, Pinecone, etc.). Users can create workspaces, upload documents, and build automated agent pipelines without writing code.",
    "repoUrl": "https://github.com/Mintplex-Labs/anything-llm",
    "websiteUrl": "https://anythingllm.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "chatgpt",
      "openai-api"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 61923,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Multi-user team collaboration features are gated behind the paid cloud/enterprise tier\n- Web search integration is basic compared to dedicated AI search tools\n- No native mobile client; desktop app only for native installs\n- Large document ingestion can be slow without GPU-accelerated embedding",
    "tags": [
      "rag",
      "ai-agents",
      "llm",
      "document-chat"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "localai",
    "name": "LocalAI",
    "tagline": "Drop-in OpenAI-compatible API for running AI models fully offline",
    "descriptionMd": "LocalAI provides a self-hosted REST API that mirrors the OpenAI specification, enabling existing applications to switch to local models without code changes. It supports text generation, image generation (Stable Diffusion), text-to-speech, and speech-to-text across a wide range of model formats (GGUF, GPTQ, ONNX). It runs on CPU or GPU and ships as a Docker image with optional GPU variants.",
    "repoUrl": "https://github.com/mudler/LocalAI",
    "websiteUrl": "https://localai.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "openai-api",
      "chatgpt"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 47060,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in chat UI; purely an API server requiring a separate front-end\n- Performance on CPU is significantly slower than GPU-accelerated commercial APIs\n- Configuration of models requires manual YAML files; not beginner-friendly\n- Multimodal vision capabilities lag behind GPT-4o and Claude in quality",
    "tags": [
      "openai-compatible",
      "local-ai",
      "inference",
      "image-generation"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "librechat",
    "name": "LibreChat",
    "tagline": "Enhanced multi-provider AI chat platform with auth, search, and plugins",
    "descriptionMd": "LibreChat is a ChatGPT-compatible chat interface that aggregates OpenAI, Claude, Gemini, Ollama, and other LLM providers under one roof. It adds multi-user registration and OAuth authentication, full conversation search, image generation, code execution via artifacts, and an extensible plugin system. The project ships with a Docker Compose stack that includes MongoDB and optional Meilisearch for fast search.",
    "repoUrl": "https://github.com/danny-avila/LibreChat",
    "websiteUrl": "https://www.librechat.ai",
    "demoUrl": "https://chat.librechat.ai",
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "chatgpt",
      "openai-api"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 39623,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Docker Compose stack requires MongoDB and optionally Meilisearch, adding operational overhead\n- No native mobile app; web-only\n- Plugin marketplace is community-driven with uneven quality control\n- Advanced team/enterprise features (SSO, role-based billing) are absent",
    "tags": [
      "chat-ui",
      "multi-provider",
      "llm",
      "rag"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "vane",
    "name": "Vane",
    "tagline": "Self-hosted AI-powered search engine, an open-source Perplexity alternative",
    "descriptionMd": "Vane is an AI-powered search engine that combines web search with LLM synthesis to produce cited, conversational answers similar to Perplexity AI. It runs as a Docker container and supports multiple search backends and LLM providers. Users can ask follow-up questions and receive source-grounded responses with inline citations.",
    "repoUrl": "https://github.com/ItzCrazyKns/Vane",
    "websiteUrl": null,
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "chatgpt",
      "openai-api"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 35408,
    "lastCommitAt": "2026-04-11",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No user account system or conversation persistence across sessions\n- Image and video search capabilities are absent\n- Answer quality is heavily dependent on the LLM and search API keys you supply\n- No mobile app or browser extension for quick lookups",
    "tags": [
      "ai-search",
      "llm",
      "web-search",
      "perplexity-alternative"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "khoj",
    "name": "Khoj",
    "tagline": "Personal AI second brain: search your docs, schedule automations, do deep research",
    "descriptionMd": "Khoj is an autonomous AI assistant that indexes your personal documents, notes, and web content to answer questions with grounded citations. It supports custom agents, scheduled automations, deep research workflows, and integrates with Obsidian, Emacs, and browser extensions. Any local or cloud LLM can power it, and it ships as a Python package or Docker image.",
    "repoUrl": "https://github.com/khoj-ai/khoj",
    "websiteUrl": "https://khoj.dev/",
    "demoUrl": "https://app.khoj.dev/",
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "chatgpt",
      "openai-api"
    ],
    "license": "AGPL-3.0",
    "language": "Python",
    "githubStars": 35248,
    "lastCommitAt": "2026-03-26",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Real-time web search index is shallower than Perplexity or Bing-backed tools\n- Team/multi-user collaboration features are limited in self-hosted mode\n- Scheduled automations require careful setup and may drift without monitoring\n- Mobile apps are basic compared to consumer AI assistants",
    "tags": [
      "personal-ai",
      "rag",
      "document-search",
      "ai-agents"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "onyx-community-edition",
    "name": "Onyx Community Edition",
    "tagline": "Enterprise-grade AI chat with 40+ connectors, agents, and deep research",
    "descriptionMd": "Onyx (formerly Danswer) is an enterprise AI chat platform that connects to over 40 knowledge sources including Confluence, Notion, Slack, GitHub, and Google Drive to power RAG-based Q&A. It includes agent workflows, web search, MCP support, deep research, and role-based access control. The full stack is Docker Compose–based with Postgres, Vespa, and Redis.",
    "repoUrl": "https://github.com/onyx-dot-app/onyx",
    "websiteUrl": "https://onyx.app",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "chatgpt",
      "openai-api"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 30475,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosted stack is resource-heavy (Postgres + Vespa + Redis + multiple services)\n- Some enterprise connectors and features are gated behind the paid cloud tier\n- Initial connector sync for large knowledge bases can take hours\n- SAML/SSO configuration requires manual setup and is not well-documented for self-hosters",
    "tags": [
      "enterprise-ai",
      "rag",
      "knowledge-base",
      "connectors"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "local-deep-research",
    "name": "Local Deep Research",
    "tagline": "AI deep research tool with multi-source search, PDF extraction, and local storage",
    "descriptionMd": "Local Deep Research is a self-hosted research assistant that orchestrates multi-source searches across the web, arXiv, PubMed, Wikipedia, and local documents to produce comprehensive, cited research reports. It uses local LLMs via Ollama or remote APIs for synthesis, extracts text from PDFs, and stores all data in encrypted local storage to preserve privacy. It runs as a Docker container or Python package.",
    "repoUrl": "https://github.com/LearningCircuit/local-deep-research",
    "websiteUrl": null,
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "chatgpt",
      "openai-api"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 8562,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Project is relatively new with limited community testing and potentially rough edges\n- No real-time collaboration or sharing of research reports\n- Search quality depends heavily on the LLM and API keys configured\n- No web UI beyond the basic interface; limited customization options",
    "tags": [
      "deep-research",
      "rag",
      "pdf-extraction",
      "local-ai"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "agenta",
    "name": "Agenta",
    "tagline": "LLMOps platform for prompt management, evaluation, and LLM observability",
    "descriptionMd": "Agenta is an open-source LLMOps platform that provides collaborative prompt engineering, systematic LLM evaluation (including human and automated evaluators), and production observability with traces and metrics. Teams can version prompts, run A/B experiments, and monitor deployed LLM applications through a unified dashboard. It ships as a Docker Compose stack.",
    "repoUrl": "https://github.com/agenta-ai/agenta",
    "websiteUrl": "https://agenta.ai/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "openai-api",
      "chatgpt"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 4227,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Observability depth is shallower than dedicated tools like LangSmith or Arize for large-scale production\n- No built-in model fine-tuning or training pipelines\n- Evaluation framework requires custom code for complex domain-specific metrics\n- Self-hosted deployment documentation is less polished than the cloud onboarding",
    "tags": [
      "llmops",
      "prompt-management",
      "evaluation",
      "observability"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "llm-harbor",
    "name": "LLM Harbor",
    "tagline": "Containerized LLM toolkit: manage backends, APIs, and frontends via one CLI",
    "descriptionMd": "LLM Harbor is a Docker-based orchestration toolkit that lets you spin up any combination of LLM backends (Ollama, LocalAI, vLLM), API proxies, chat front-ends, and auxiliary services with a concise CLI. It abstracts docker-compose complexity behind simple commands like `harbor up ollama open-webui`, enabling rapid switching between LLM stacks for experimentation. All configuration is file-based and version-controllable.",
    "repoUrl": "https://github.com/av/harbor",
    "websiteUrl": null,
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "ai-llm",
    "replaces": [
      "openai-api",
      "chatgpt"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 3096,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Niche tool primarily aimed at power users; limited documentation for beginners\n- No built-in UI beyond what the composed services provide\n- Community is small; issues may go unanswered compared to larger projects\n- Not suitable for production multi-user deployments without significant additional hardening",
    "tags": [
      "llm",
      "docker",
      "orchestration",
      "local-ai"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "glance",
    "name": "Glance",
    "tagline": "Highly customizable dashboard that puts all your feeds in one place",
    "descriptionMd": "Glance is a self-hosted personal dashboard written in Go that aggregates RSS feeds, Reddit posts, Hacker News, weather, stocks, bookmarks, and more into a single configurable page. It is configured via YAML and served as a single static binary, making deployment extremely lightweight. The UI is clean and responsive, with multiple widget types and layout options. Deploy with a single Docker run command or a compose file.",
    "repoUrl": "https://github.com/glanceapp/glance",
    "websiteUrl": "https://github.com/glanceapp/glance",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 35312,
    "lastCommitAt": "2026-05-30",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in database or persistent data store; purely a read/aggregation layer\n- No multi-user support or access control\n- No data source connectors for business databases or warehouses (unlike Tableau/Power BI)\n- No interactive charts, pivot tables, or drill-down analytics",
    "tags": [
      "dashboard",
      "personal",
      "feeds",
      "homelab",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "homepage-gethomepage",
    "name": "Homepage by gethomepage",
    "tagline": "Highly customizable application dashboard with Docker and service API integrations",
    "descriptionMd": "Homepage is a modern, static application dashboard configured entirely through YAML files. It features deep Docker integration, displaying running containers and their status automatically, plus dozens of built-in service widgets for tools like Sonarr, Plex, Pi-hole, and more. It runs as a single Docker container with minimal resource usage. Configuration lives in mounted config files, making it easy to version-control your setup.",
    "repoUrl": "https://github.com/gethomepage/homepage",
    "websiteUrl": "https://github.com/gethomepage/homepage",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 31058,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No analytics, charting, or data visualization beyond service status widgets\n- No multi-user authentication or role-based access control\n- Configuration is file-only; no web-based GUI for editing\n- No alerting or notification system for service downtime",
    "tags": [
      "dashboard",
      "homelab",
      "docker",
      "startpage",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "dashy",
    "name": "Dashy",
    "tagline": "Feature-rich homelab homepage with easy YAML configuration and a polished UI",
    "descriptionMd": "Dashy is a highly customizable self-hosted dashboard for homelab and personal use, configured via YAML with an optional built-in web editor. It supports hundreds of icons, themes, widgets, status checks, and search providers. Authentication is optional and built-in. Dashy is built with Vue.js and can be deployed via Docker or served as a static site. It includes a live status checking system that pings configured services.",
    "repoUrl": "https://github.com/lissy93/dashy",
    "websiteUrl": "https://dashy.to/",
    "demoUrl": "https://demo.dashy.to/",
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 25500,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No analytical data visualization, BI queries, or database connectivity\n- Multi-user support is basic; no proper RBAC or team workspaces\n- Service auto-discovery requires manual YAML entries; no Docker auto-detection like Homepage\n- Not suitable for business reporting or data-driven dashboards",
    "tags": [
      "dashboard",
      "homelab",
      "startpage",
      "self-hosted",
      "vue"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "homer",
    "name": "Homer",
    "tagline": "Dead simple static homepage to expose your server services via YAML config",
    "descriptionMd": "Homer is a minimal, static web page served from a single Docker container that displays links to your self-hosted services with optional connectivity status checks. All configuration is done through a single YAML file with no database required. It is intentionally feature-light and fast, loading almost instantly in any browser. Perfect for users who want a clean service launchpad without complexity.",
    "repoUrl": "https://github.com/bastienwirtz/homer",
    "websiteUrl": "https://github.com/bastienwirtz/homer",
    "demoUrl": "https://homer-demo.netlify.app",
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 11418,
    "lastCommitAt": "2026-06-16",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Extremely minimal: no service widgets, no data pulled from APIs beyond ping checks\n- No built-in authentication or user management\n- No analytics, charts, or data visualization features\n- Configuration is file-only with no web UI editor",
    "tags": [
      "dashboard",
      "startpage",
      "homelab",
      "static",
      "minimal"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "heimdall",
    "name": "Heimdall",
    "tagline": "Elegant PHP application dashboard to organise all your web applications",
    "descriptionMd": "Heimdall is a PHP-based application dashboard that provides a visually appealing launchpad for your self-hosted services. It supports Enhanced Apps — pre-built integrations that pull live data (e.g., download stats, API counts) directly into the tile. It stores data in a SQLite database and can be deployed via Docker or a traditional LAMP stack. LinuxServer.io maintains the Docker image with regular updates.",
    "repoUrl": "https://github.com/linuxserver/Heimdall",
    "websiteUrl": "https://heimdall.site/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 9220,
    "lastCommitAt": "2025-11-11",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No business analytics, charts, or data visualization\n- No native multi-user support with role-based access\n- Enhanced App integrations limited to a pre-defined list with no custom plugin API\n- No alerting or on-call escalation for service outages",
    "tags": [
      "dashboard",
      "homelab",
      "php",
      "startpage",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "your-spotify",
    "name": "Your Spotify",
    "tagline": "Record your Spotify listening history and explore personal statistics via a web app",
    "descriptionMd": "Your Spotify is a self-hosted web application that connects to the Spotify API to continuously record your listening history and presents it through a rich analytics dashboard. It tracks per-song, per-artist, and per-album play counts, listening time, and trends over time. The stack is Node.js (API) + React (frontend) + MongoDB, deployed via Docker Compose. A Spotify developer app registration is required to authorize data access.",
    "repoUrl": "https://github.com/Yooooomi/your_spotify",
    "websiteUrl": "https://github.com/Yooooomi/your_spotify",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 4464,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Limited to Spotify data only; no support for other music services\n- Requires setting up a Spotify developer app and OAuth credentials\n- No custom alerting, reports, or data export features\n- MongoDB dependency adds operational overhead compared to simpler dashboards",
    "tags": [
      "spotify",
      "music",
      "analytics",
      "personal",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "homarr",
    "name": "Homarr",
    "tagline": "Sleek, modern homelab dashboard with rich integrations and drag-and-drop web config",
    "descriptionMd": "Homarr is a modern self-hosted dashboard designed for homelab users, featuring a fully web-based drag-and-drop editor, dozens of built-in service integrations (arr suite, Pi-hole, Proxmox, etc.), and a polished UI with dark mode and customizable widgets. Version 1.x introduced multi-user authentication and a PostgreSQL-backed architecture. It deploys via Docker or Docker Compose with optional persistent volumes.",
    "repoUrl": "https://github.com/homarr-labs/homarr",
    "websiteUrl": "https://homarr.dev",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 4154,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No BI-style data visualization, SQL queries, or chart-building features\n- v1.x migration from v0.x requires manual data migration steps\n- Integration library narrower than proprietary enterprise dashboards\n- No alerting or on-call notification system built in",
    "tags": [
      "dashboard",
      "homelab",
      "self-hosted",
      "widgets",
      "integrations"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "personal-management-system",
    "name": "Personal Management System",
    "tagline": "All-in-one personal organizer: to-dos, notes, finances, goals, and schedules",
    "descriptionMd": "Personal Management System (PMS) is a self-hosted PHP/Symfony web application for organizing everyday life. It combines to-do lists, notes, contact management, goal tracking, payment schedules, travel planning, and a personal image gallery into a single interface. It uses MySQL as its database and is deployed via Docker. The project targets individuals seeking a private, all-in-one personal productivity hub without cloud dependencies.",
    "repoUrl": "https://github.com/Volmarg/personal-management-system",
    "websiteUrl": "https://volmarg.github.io/",
    "demoUrl": "https://github.com/Volmarg/personal-management-system#documentation--demo",
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 4034,
    "lastCommitAt": "2026-06-17",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No multi-user or team collaboration features; strictly single-user\n- No mobile-native app; web UI is not optimized for small screens\n- Limited data visualization; no charts or analytics beyond basic lists\n- Maintenance is community-driven with infrequent releases",
    "tags": [
      "personal",
      "productivity",
      "organizer",
      "self-hosted",
      "php"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "linkstack",
    "name": "LinkStack",
    "tagline": "Self-hosted Linktree alternative: customizable link-in-bio pages with admin UI",
    "descriptionMd": "LinkStack is an open-source, self-hosted alternative to Linktree and similar link-in-bio services. Built with PHP/Laravel, it lets users create fully customizable profile pages with links to their social profiles, websites, and content. It includes an admin panel for managing users, themes, and page blocks. Deployment is straightforward via Docker or traditional web hosting. Multiple user accounts are supported, making it suitable for small communities or agencies.",
    "repoUrl": "https://github.com/LinkStackOrg/LinkStack",
    "websiteUrl": "https://linkstack.org/",
    "demoUrl": "https://linksta.cc/",
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "AGPL-3.0",
    "language": "PHP",
    "githubStars": 3632,
    "lastCommitAt": "2026-06-08",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Focused solely on link-in-bio pages; no analytics, BI, or data dashboard features\n- Link click analytics are basic; no funnel analysis or cohort tracking\n- No built-in email notifications or scheduling\n- Custom domain per-user requires additional reverse-proxy configuration",
    "tags": [
      "linktree",
      "link-in-bio",
      "social",
      "self-hosted",
      "php"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "ryot",
    "name": "ryot",
    "tagline": "Track your media, fitness, and life facets in one self-hosted application",
    "descriptionMd": "Ryot (Roll Your Own Tracker) is a self-hosted personal tracking platform that covers media consumption (books, movies, shows, games, podcasts, anime), fitness workouts, and measurements. It provides a unified web UI and GraphQL API, supports metadata import from TMDB, Anilist, OpenLibrary, and other sources, and stores data in PostgreSQL. Deployment is via Docker or Docker Compose. It is actively maintained with regular feature additions.",
    "repoUrl": "https://github.com/ignisda/ryot",
    "websiteUrl": "https://github.com/ignisda/ryot",
    "demoUrl": "https://github.com/IgnisDa/ryot?tab=readme-ov-file#-demo",
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 3359,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No business analytics or arbitrary data source connectivity\n- No mobile native app; relies on Progressive Web App\n- Social/sharing features are limited compared to Goodreads or Letterboxd\n- No collaborative or multi-household tracking support",
    "tags": [
      "tracker",
      "media",
      "fitness",
      "personal",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "littlelink",
    "name": "LittleLink",
    "tagline": "Simplistic static link-in-bio page with 100+ branded social buttons",
    "descriptionMd": "LittleLink is a lightweight, static HTML/CSS alternative to Linktree that provides a clean, mobile-friendly link page with over 100 pre-designed branded buttons for popular platforms. It requires no server-side logic and can be hosted on any static hosting provider or self-hosted web server. Customization is done by editing a single HTML file. It is intentionally minimal, prioritizing simplicity and fast load times over feature breadth.",
    "repoUrl": "https://github.com/sethcottle/littlelink",
    "websiteUrl": "https://littlelink.io/",
    "demoUrl": "https://littlelink.io/",
    "logoUrl": null,
    "categorySlug": "bi-dashboards",
    "replaces": [
      "tableau",
      "looker",
      "power-bi"
    ],
    "license": "MIT",
    "language": "Javascript",
    "githubStars": 2994,
    "lastCommitAt": "2026-01-28",
    "selfHostDifficulty": 1,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No admin UI; all edits require direct HTML file editing\n- No click analytics or visit tracking built in\n- Single-user only; no multi-user or CMS capabilities\n- No dynamic content, forms, or integrations",
    "tags": [
      "linktree",
      "link-in-bio",
      "static",
      "minimal",
      "social"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "mindsdb",
    "name": "MindsDB",
    "tagline": "AI layer for existing databases: train and query ML models with standard SQL",
    "descriptionMd": "MindsDB is an open-source AI layer that sits between your data sources and applications, allowing you to create, train, and query machine learning models using familiar SQL syntax. It integrates with dozens of databases and data platforms as a virtual database, enabling predictive queries, LLM-powered transformations, and automated forecasting without moving data. It can be self-hosted via Docker or used as a managed cloud service. The project targets data engineers and analysts who want ML without leaving SQL.",
    "repoUrl": "https://github.com/mindsdb/minds",
    "websiteUrl": "https://mindsdb.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "google-sheets",
      "retool"
    ],
    "license": "Elastic-2.0",
    "language": "Docker",
    "githubStars": 39323,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Elastic-2.0 license restricts commercial competing use cases\n- Self-hosted ML training is resource-intensive; GPU support requires additional setup\n- Not a full spreadsheet or no-code database replacement; primarily targets developers and data engineers\n- Fewer pre-built connectors than enterprise ETL platforms like dbt or Fivetran",
    "tags": [
      "ai",
      "machine-learning",
      "sql",
      "database",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "directus",
    "name": "Directus",
    "tagline": "Instant REST and GraphQL API for any SQL database with an intuitive admin app",
    "descriptionMd": "Directus is an open-source data platform that wraps any new or existing SQL database (PostgreSQL, MySQL, SQLite, etc.) with an auto-generated REST and GraphQL API, plus a no-code web app for managing content and data. It supports role-based access control, file management, real-time subscriptions, webhooks, and a flows automation engine. Directus is used as a headless CMS, backend-as-a-service, and internal data tool. Self-hosting is via Docker Compose; a managed cloud is also available.",
    "repoUrl": "https://github.com/directus/directus",
    "websiteUrl": "https://directus.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "retool",
      "smartsheet"
    ],
    "license": "BUSL-1.1",
    "language": "Nodejs",
    "githubStars": 36045,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- BUSL-1.1 license prohibits competing managed-hosting products without a commercial license\n- No built-in spreadsheet-style formula or pivot table UI like Airtable\n- Automations (Flows) are less mature than dedicated workflow tools like Zapier\n- Advanced data visualization requires an external BI tool; Directus provides data, not charts",
    "tags": [
      "cms",
      "headless",
      "api",
      "database",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "chartdb",
    "name": "ChartDB",
    "tagline": "Browser-based database diagram editor that visualizes your schema with a single query",
    "descriptionMd": "ChartDB is an open-source, browser-based database diagram tool that imports your existing schema with a single SQL query and renders it as an interactive entity-relationship diagram. It supports PostgreSQL, MySQL, SQLite, Microsoft SQL Server, and MariaDB. Diagrams can be edited visually, exported as images or SQL DDL, and shared. It runs entirely in the browser with no backend required, or can be self-hosted as a Docker container for team use.",
    "repoUrl": "https://github.com/chartdb/chartdb",
    "websiteUrl": "https://chartdb.io/",
    "demoUrl": "https://app.chartdb.io",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "retool",
      "smartsheet"
    ],
    "license": "AGPL-3.0",
    "language": "Nodejs",
    "githubStars": 22442,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Diagramming and visualization only; no data editing, querying, or CRUD interface\n- No team collaboration features (comments, live multiplayer editing) in self-hosted version\n- No support for NoSQL or non-relational database schemas\n- No migration generation or schema diffing workflow tools",
    "tags": [
      "database",
      "erd",
      "diagrams",
      "schema",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "bytebase",
    "name": "Bytebase",
    "tagline": "Database schema change and version control for DevOps teams",
    "descriptionMd": "Bytebase is a web-based database DevOps platform that brings GitOps-style workflows to schema migrations and SQL reviews. It supports MySQL, PostgreSQL, TiDB, ClickHouse, Snowflake, and more, with role-based access controls and approval workflows. Teams can manage migrations via a UI or integrate with CI/CD pipelines. It ships as a single Docker image with an embedded SQLite for small setups and external PostgreSQL for production.",
    "repoUrl": "https://github.com/bytebase/bytebase",
    "websiteUrl": "https://www.bytebase.com/",
    "demoUrl": "https://demo.bytebase.com",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "retool"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 14173,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No built-in data editing UI comparable to Airtable's spreadsheet-like interface\n- Managed cloud tier is limited; on-prem enterprise features require a paid license\n- Lacks no-code query builder; SQL knowledge still required for most tasks\n- Snowflake and some enterprise connectors gated behind paid plans",
    "tags": [
      "database",
      "schema-migration",
      "devops",
      "sql",
      "version-control"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "datasette",
    "name": "Datasette",
    "tagline": "Explore and publish data from SQLite databases via a web UI",
    "descriptionMd": "Datasette is a Python tool for exploring, publishing, and sharing SQLite databases through an auto-generated web interface. It supports faceted search, CSV/JSON export, and a rich plugin ecosystem for charting and authentication. Databases can be published as static sites or served live. Deploy with a single `pip install` or a Docker container, optionally pushing to cloud providers with `datasette publish`.",
    "repoUrl": "https://github.com/simonw/datasette",
    "websiteUrl": "https://datasette.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "google-sheets"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 11216,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- SQLite-only; no native support for PostgreSQL or MySQL without third-party plugins\n- Read-oriented by default; data editing requires plugins and extra configuration\n- No spreadsheet-style formula engine or pivot tables like Google Sheets\n- Multi-user collaboration and permissions are minimal without plugins",
    "tags": [
      "sqlite",
      "data-exploration",
      "publishing",
      "open-data"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "adminer",
    "name": "Adminer",
    "tagline": "Full-featured database management in a single PHP file",
    "descriptionMd": "Adminer is a lightweight database administration tool packaged as a single PHP file. It supports MySQL, MariaDB, PostgreSQL, SQLite, MS SQL, Oracle, Elasticsearch, and MongoDB through a pluggable driver system. It provides table browsing, query execution, import/export, and schema editing. Deployment is as simple as copying one file to a PHP-enabled server or pulling the official Docker image.",
    "repoUrl": "https://github.com/vrana/adminer",
    "websiteUrl": "https://www.adminer.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "retool",
      "airtable"
    ],
    "license": "Apache-2.0",
    "language": "PHP",
    "githubStars": 7441,
    "lastCommitAt": "2026-03-18",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in access control beyond HTTP auth; unsuitable as a team-facing data portal\n- No chart or dashboard visualisation; purely a raw data management tool\n- No audit logging or change approval workflows\n- UI is functional but dated compared to modern alternatives",
    "tags": [
      "database",
      "admin",
      "mysql",
      "postgresql",
      "php"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "mathesar",
    "name": "Mathesar",
    "tagline": "Spreadsheet-like UI for collaborative PostgreSQL data management",
    "descriptionMd": "Mathesar is a self-hosted web application that gives non-technical users a familiar spreadsheet interface over a live PostgreSQL database. It supports multiple data types, relationships, filtering, and grouping without requiring SQL knowledge. Teams can connect an existing Postgres database or provision a new one. It deploys via Docker Compose and ships with a guided setup wizard.",
    "repoUrl": "https://github.com/mathesar-foundation/mathesar",
    "websiteUrl": "https://mathesar.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "google-sheets",
      "smartsheet"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 5010,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- PostgreSQL only; no support for MySQL, SQLite, or other databases\n- No formula engine comparable to Airtable's or Google Sheets' calculated fields\n- Automations and integrations with external services are not yet implemented\n- Relatively young project; some UI rough edges and missing power-user features",
    "tags": [
      "postgresql",
      "spreadsheet",
      "database",
      "collaboration",
      "no-code"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "cloudbeaver",
    "name": "CloudBeaver",
    "tagline": "Web-based database manager — the browser edition of DBeaver",
    "descriptionMd": "CloudBeaver is the web/server edition of DBeaver Community, offering a browser-based SQL editor and database explorer for PostgreSQL, MySQL, SQLite, Oracle, MS SQL, and many others. It supports multi-user access with role-based permissions, saved connections, and an ER diagram viewer. Deploy via Docker; a Community Edition is free while the Enterprise Edition adds SSO and advanced features.",
    "repoUrl": "https://github.com/dbeaver/cloudbeaver",
    "websiteUrl": "https://dbeaver.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "retool",
      "airtable"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 4961,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No-code data editing and app-building features (à la Retool) are absent\n- SSO, LDAP, and team-management features require the paid Enterprise Edition\n- No built-in charting or dashboard layer\n- Performance can lag on very large result sets in the browser",
    "tags": [
      "database",
      "sql",
      "admin",
      "dbeaver",
      "web"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "chartbrew",
    "name": "Chartbrew",
    "tagline": "Connect databases and APIs to build and share live charts",
    "descriptionMd": "Chartbrew is a Node.js-based open-source charting platform that connects directly to MySQL, PostgreSQL, MongoDB, APIs, and more to render live dashboards. It features a no-code query builder, scheduled data refreshes, and shareable public dashboards. Teams can embed charts in external sites. Deploy with Docker Compose using the provided configuration.",
    "repoUrl": "https://github.com/chartbrew/chartbrew",
    "websiteUrl": "https://chartbrew.com",
    "demoUrl": "https://app.chartbrew.com/live-demo",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "retool",
      "google-sheets"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 3947,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No full-featured app builder; purely a charting and dashboard tool, not a Retool replacement for forms or CRUD\n- Data transformation is limited compared to Retool's JavaScript transformer\n- Alerts and anomaly detection are absent\n- Team/SSO features require the paid cloud tier",
    "tags": [
      "charts",
      "dashboards",
      "database",
      "visualization",
      "no-code"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "azimutt",
    "name": "Azimutt",
    "tagline": "Visual database schema explorer built for large, complex schemas",
    "descriptionMd": "Azimutt is an Elixir-based database schema exploration tool designed to make sense of large and messy real-world databases. It renders interactive ER-diagram layouts, lets users annotate tables and columns, query data in context, and receive automated schema analysis hints. It supports PostgreSQL, MySQL, MongoDB, and more via direct connection or schema import. Self-host with Docker or deploy to Fly.io.",
    "repoUrl": "https://github.com/azimuttapp/azimutt",
    "websiteUrl": "https://azimutt.app",
    "demoUrl": "https://azimutt.app/gallery/gospeak",
    "logoUrl": null,
    "categorySlug": "database-spreadsheet",
    "replaces": [
      "airtable",
      "retool"
    ],
    "license": "MIT",
    "language": "Elixir",
    "githubStars": 2134,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Focused on schema exploration and documentation, not data editing or app building\n- No spreadsheet or pivot-table interface\n- Collaboration features are basic on the self-hosted edition\n- Elixir stack is less familiar to most ops teams",
    "tags": [
      "database",
      "schema",
      "erd",
      "documentation",
      "visualization"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "cal-diy",
    "name": "Cal.diy",
    "tagline": "Open-source online appointment scheduling built on Cal.com",
    "descriptionMd": "Cal.diy is the MIT-licensed, self-hostable scheduling platform powering Cal.com. It enables individuals and teams to create shareable booking links, manage availability, sync with Google/Outlook calendars, and automate reminder workflows. It supports round-robin and collective event types. Deploy via Docker Compose or Vercel with environment configuration for a database and email provider.",
    "repoUrl": "https://github.com/calcom/cal.diy",
    "websiteUrl": "https://cal.diy/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 45737,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosted setup requires configuring PostgreSQL, email/SMTP, and OAuth providers\n- Enterprise features (SAML SSO, workflows at scale, analytics) are cloud-only or require an enterprise license\n- Payment collection integrations need additional third-party setup\n- Admin UI for multi-tenant management is less polished than Calendly's hosted offering",
    "tags": [
      "scheduling",
      "booking",
      "calendar",
      "appointments",
      "open-source"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "qloapps",
    "name": "QloApps",
    "tagline": "Open-source hotel reservation and channel management system",
    "descriptionMd": "QloApps is a PHP-based hotel management and online booking platform built on PrestaShop. It provides a front-end booking engine, back-office room and rate management, channel manager integration, and reporting. Hotels can customise the look, add taxes, set seasonal pricing, and manage reservations end-to-end. Deploy on a standard LAMP/LEMP stack or use the provided Docker-based setup.",
    "repoUrl": "https://github.com/Qloapps/QloApps",
    "websiteUrl": "https://qloapps.com/",
    "demoUrl": "https://demo.qloapps.com/",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "acuity",
      "calendly"
    ],
    "license": "OSL-3.0",
    "language": "PHP",
    "githubStars": 13729,
    "lastCommitAt": "2026-06-12",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Scope is hotel-specific; not a general-purpose appointment scheduler\n- Channel manager integrations (OTA sync) are limited compared to commercial PMS solutions\n- Mobile app for guests/staff is absent out of the box\n- PrestaShop heritage makes theming and customisation non-trivial",
    "tags": [
      "hotel",
      "booking",
      "reservation",
      "hospitality",
      "php"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "radicale",
    "name": "Radicale",
    "tagline": "Lightweight CalDAV and CardDAV server with minimal configuration",
    "descriptionMd": "Radicale is a tiny Python CalDAV and CardDAV server designed for personal or small-team use. It stores calendars and contacts in plain files, requires no database, and runs with near-zero administrative overhead. Authentication is handled via htpasswd or LDAP; access rules are configurable per-user. Install via pip or deploy with the official Docker image.",
    "repoUrl": "https://github.com/Kozea/Radicale",
    "websiteUrl": "https://radicale.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "GPL-3.0",
    "language": "Python",
    "githubStars": 4763,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No web-based calendar UI; clients must use a CalDAV-compatible app (Thunderbird, Apple Calendar, etc.)\n- Not a booking/scheduling tool; no public booking pages or availability sharing like Calendly\n- Scaling beyond a handful of users is not a design goal\n- Lacks push notifications; relies on client polling",
    "tags": [
      "caldav",
      "carddav",
      "calendar",
      "contacts",
      "sync"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "fider",
    "name": "Fider",
    "tagline": "Open platform to collect, vote on, and prioritise user feedback",
    "descriptionMd": "Fider is a Go and React-based feedback board where users submit ideas and vote, helping product teams prioritise what to build next. It supports OAuth2 login, email notifications, status updates per post, and a public API. It is commonly used as a self-hosted alternative to UserVoice or Canny. Deploy with Docker using the provided compose file alongside a PostgreSQL instance.",
    "repoUrl": "https://github.com/getfider/fider",
    "websiteUrl": "https://fider.io",
    "demoUrl": "https://demo.fider.io",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 4373,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- categorySlug is 'scheduling' but Fider is a feedback/voting tool; replaces options are limited to scheduling slugs in the ref\n- No roadmap visualisation or timeline planning built in\n- Integrations with Jira, Linear, or Slack require custom webhooks\n- No in-app surveys or NPS measurement",
    "tags": [
      "feedback",
      "voting",
      "product-management",
      "user-voice",
      "community"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "hi-events",
    "name": "Hi.Events",
    "tagline": "Self-hosted event management and ticketing for any scale",
    "descriptionMd": "Hi.Events is an AGPL-licensed, Docker-first event management platform supporting conferences, concerts, and meetups. It offers customisable event pages, embeddable ticket widgets, attendee management, promo codes, and Stripe-based payments. Organisers get a dashboard with real-time sales analytics. Deploy via Docker Compose with the provided configuration.",
    "repoUrl": "https://github.com/HiEventsDev/hi.events",
    "websiteUrl": "https://hi.events",
    "demoUrl": "https://demo.hi.events/event/1/dog-conf-2030",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 3877,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Payment gateway support is limited to Stripe; no PayPal or regional gateways out of the box\n- No recurring event / subscription ticketing support\n- Email marketing and attendee re-engagement tools are minimal\n- Mobile check-in app is not available; badge printing requires third-party tools",
    "tags": [
      "events",
      "ticketing",
      "conference",
      "booking",
      "payments"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "baikal",
    "name": "Baïkal",
    "tagline": "Lightweight CalDAV and CardDAV server based on sabre/dav",
    "descriptionMd": "Baïkal is a PHP CalDAV and CardDAV server built on the sabre/dav framework. It provides a browser-based admin interface for managing users and calendars, making it friendlier to set up than raw sabre/dav. It stores data in SQLite or MySQL and requires only a PHP-capable web server. Deploy manually on shared hosting or via Docker.",
    "repoUrl": "https://github.com/sabre-io/Baikal",
    "websiteUrl": "https://sabre.io/baikal/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "GPL-3.0",
    "language": "PHP",
    "githubStars": 3215,
    "lastCommitAt": "2026-06-13",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No web-based calendar or scheduling UI for end users; requires a CalDAV client app\n- No public booking page or availability-sharing feature comparable to Calendly\n- Development activity has slowed; some sabre/dav edge cases may go unpatched\n- HTTPS and reverse-proxy setup is manual and not guided",
    "tags": [
      "caldav",
      "carddav",
      "calendar",
      "contacts",
      "php"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "sabredav",
    "name": "SabreDAV",
    "tagline": "Open-source CardDAV, CalDAV, and WebDAV framework for PHP",
    "descriptionMd": "SabreDAV is the foundational PHP library and server for WebDAV, CalDAV, and CardDAV protocols. It powers projects like Baïkal and Nextcloud's DAV stack. Developers implement custom backends by extending its class hierarchy. It ships as a Composer library with example server scripts; deployment requires building a custom PHP application around it.",
    "repoUrl": "https://github.com/sabre-io/dav",
    "websiteUrl": "https://sabre.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 1711,
    "lastCommitAt": "2026-06-15",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- A developer framework, not an end-user product; requires significant custom PHP development\n- No admin UI, booking pages, or user-facing features out of the box\n- Documentation assumes solid PHP and WebDAV protocol knowledge\n- Not a drop-in replacement for any SaaS scheduling tool without substantial build effort",
    "tags": [
      "caldav",
      "carddav",
      "webdav",
      "php",
      "framework"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "bracket",
    "name": "Bracket",
    "tagline": "Flexible self-hosted tournament management with live public rankings",
    "descriptionMd": "Bracket is a self-hosted tournament system that lets organizers build tournament brackets, register teams, schedule matches, and track scores in real time. It supports multiple tournament formats and exposes a live public view so audiences can follow standings without logging in. The application is distributed as a Docker image with a FastAPI backend and a Next.js frontend, making deployment straightforward with Docker Compose.",
    "repoUrl": "https://github.com/evroon/bracket",
    "websiteUrl": "https://docs.bracketapp.nl/",
    "demoUrl": "https://www.bracketapp.nl/demo",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 1691,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in calendar integration or iCal/Google Calendar sync for match schedules\n- Payment collection for entry fees is absent\n- Email or SMS notifications to participants are not supported out of the box\n- Limited reporting and export options compared to dedicated event-management SaaS",
    "tags": [
      "tournament",
      "bracket",
      "scheduling",
      "sports",
      "events"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "alf-io",
    "name": "Alf.io",
    "tagline": "Open-source ticket reservation platform for events of any size",
    "descriptionMd": "Alf.io is a full-featured, open-source event ticketing and reservation system written in Java. It supports paid and free events, multiple ticket categories, promo codes, check-in via QR code, and integrations with Stripe, PayPal, and Mollie for payments. Organizations can self-host it on any server running Java or deploy it via Docker, and a web-based admin panel handles the entire event lifecycle from creation to attendee check-in.",
    "repoUrl": "https://github.com/alfio-event/alf.io",
    "websiteUrl": "https://alf.io/",
    "demoUrl": "https://demo.alf.io/authentication",
    "logoUrl": null,
    "categorySlug": "scheduling",
    "replaces": [
      "calendly",
      "acuity"
    ],
    "license": "GPL-3.0",
    "language": "Java",
    "githubStars": 1586,
    "lastCommitAt": "2026-06-14",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in recurring appointment booking (1:1 scheduling like Calendly)\n- Mobile app for attendees is not provided; check-in relies on a separate web view\n- Analytics and post-event reporting are basic compared to Eventbrite or Cvent\n- Initial Java/PostgreSQL setup is heavier than typical SaaS onboarding",
    "tags": [
      "ticketing",
      "events",
      "reservations",
      "scheduling",
      "payments"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "mail-in-a-box",
    "name": "Mail-in-a-Box",
    "tagline": "Turn any Ubuntu VPS into a complete, self-hosted mail server in one command",
    "descriptionMd": "Mail-in-a-Box automates the setup of a full email stack on a fresh Ubuntu server, installing and configuring Postfix, Dovecot, Roundcube webmail, SpamAssassin, and DNS records in a single script. It aims to make email self-hosting as close to a one-click experience as possible while maintaining SMTP, IMAP, and HTTPS out of the box. Automatic TLS via Let's Encrypt and built-in backups are included. It is designed for personal or small-organization use rather than high-volume deployments.",
    "repoUrl": "https://github.com/mail-in-a-box/mailinabox",
    "websiteUrl": "https://mailinabox.email/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "mailchimp",
      "sendgrid"
    ],
    "license": "CC0-1.0",
    "language": "Shell",
    "githubStars": 15343,
    "lastCommitAt": "2026-05-24",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Requires a dedicated Ubuntu VPS with a clean IP reputation; shared hosting is not supported\n- No built-in bulk mailing or newsletter campaign tools\n- Limited horizontal scalability; single-server architecture only\n- Webmail (Roundcube) is functional but far less polished than Gmail's UI",
    "tags": [
      "email",
      "mail-server",
      "smtp",
      "imap",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "stalwart-mail-server",
    "name": "Stalwart Mail Server",
    "tagline": "Modern all-in-one mail server with JMAP, IMAP4, and SMTP in a single Rust binary",
    "descriptionMd": "Stalwart is a high-performance, all-in-one mail server written in Rust that supports JMAP, IMAP4, and SMTP in a single binary. It provides built-in spam and phishing filtering, anti-virus integration, full-text search, and a web-based admin interface. Stalwart handles SPF, DKIM, DMARC, ARC, and MTA-STS natively, and can store mail in common backends including RocksDB, PostgreSQL, MySQL, and S3-compatible object storage. Docker images are available for quick deployment.",
    "repoUrl": "https://github.com/stalwartlabs/stalwart",
    "websiteUrl": "https://stalw.art",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "sendgrid",
      "mailchimp"
    ],
    "license": "AGPL-3.0",
    "language": "Rust",
    "githubStars": 13269,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No built-in newsletter/broadcast campaign tooling\n- Web admin UI is functional but less refined than commercial email service dashboards\n- Third-party anti-virus (ClamAV) integration requires additional setup\n- Community support only on the free tier; paid support plans are limited",
    "tags": [
      "email",
      "mail-server",
      "imap",
      "jmap",
      "smtp"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "simplelogin",
    "name": "SimpleLogin",
    "tagline": "Self-hostable email alias service to protect your real address from spam and tracking",
    "descriptionMd": "SimpleLogin is an open-source email alias and forwarding service that lets users create disposable email addresses that forward to their real inbox. It ships with browser extensions and mobile apps, and supports custom domains, catch-all aliases, and PGP encryption. The server component is written in Python and can be self-hosted via Docker Compose, with PostgreSQL and Redis as dependencies.",
    "repoUrl": "https://github.com/simple-login/app",
    "websiteUrl": "https://simplelogin.io",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "mailchimp",
      "convertkit"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 6743,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Self-hosted instance requires managing its own MX record and email reputation\n- No bulk sending or newsletter features; purely an alias/forwarding tool\n- Mobile apps connect to SimpleLogin's cloud by default; redirecting to self-hosted requires manual app configuration\n- Spam filtering is inherited from the destination mailbox, not provided independently",
    "tags": [
      "email",
      "alias",
      "privacy",
      "forwarding",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "maddy-mail-server",
    "name": "Maddy Mail Server",
    "tagline": "Single-binary Go mail server replacing Postfix, Dovecot, OpenDKIM, and OpenDMARC",
    "descriptionMd": "Maddy is a composable, all-in-one mail server daemon written in Go that replaces the traditional multi-component stack (Postfix, Dovecot, OpenDKIM, OpenSPF, OpenDMARC) with a single binary. It implements SMTP (MTA and MX roles), IMAP, DKIM signing, SPF, and DMARC enforcement. Configuration is done via a single structured config file, and storage backends include local filesystem and optional external databases.",
    "repoUrl": "https://github.com/foxcpp/maddy",
    "websiteUrl": "https://maddy.email/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "sendgrid",
      "mailchimp"
    ],
    "license": "GPL-3.0",
    "language": "Go",
    "githubStars": 6012,
    "lastCommitAt": "2026-05-26",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No webmail interface; users need a separate IMAP client\n- Documentation is less comprehensive than established stacks like Postfix + Dovecot\n- No built-in web admin panel for managing accounts\n- Smaller ecosystem and community compared to traditional mail server components",
    "tags": [
      "email",
      "mail-server",
      "smtp",
      "imap",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "mox",
    "name": "Mox",
    "tagline": "Complete, modern self-hosted email server with JMAP, DANE, and built-in junk filtering",
    "descriptionMd": "Mox is a full-featured, modern email server written in Go that bundles IMAP4, SMTP, JMAP, SPF, DKIM, DMARC, MTA-STS, DANE, and DNSSEC support in a single binary. It includes reputation-based and content-based junk filtering, automatic TLS via ACME/Let's Encrypt, internationalized email (IDNA), and a built-in webmail client. The project targets security and standards compliance and is suitable for personal or small-organization deployments.",
    "repoUrl": "https://github.com/mjl-/mox",
    "websiteUrl": "https://www.xmox.nl/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "sendgrid",
      "mailchimp"
    ],
    "license": "MIT",
    "language": "Go",
    "githubStars": 5723,
    "lastCommitAt": "2026-06-07",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No Docker image provided officially; manual binary deployment only\n- Not designed for high-volume transactional or bulk email sending\n- Admin UI and webmail are functional but lack polish compared to hosted solutions\n- Relatively young project; some edge-case RFC compliance gaps may exist",
    "tags": [
      "email",
      "mail-server",
      "jmap",
      "imap",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "anonaddy",
    "name": "AnonAddy",
    "tagline": "Self-hosted anonymous email forwarding with unlimited disposable aliases",
    "descriptionMd": "AnonAddy is an open-source email alias and forwarding service written in PHP (Laravel) that enables users to create unlimited disposable email addresses that forward to their real inbox without revealing it. It supports custom domains, catch-all aliases, GPG/OpenPGP encryption of forwarded emails, and reply-from-alias functionality. Deployment requires PHP, MySQL/MariaDB, Redis, and a working MTA such as Postfix.",
    "repoUrl": "https://github.com/anonaddy/anonaddy",
    "websiteUrl": "https://anonaddy.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "mailchimp",
      "convertkit"
    ],
    "license": "MIT",
    "language": "PHP",
    "githubStars": 4703,
    "lastCommitAt": "2026-05-28",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Requires a properly configured Postfix MTA alongside the application, increasing setup complexity\n- No newsletter or campaign functionality; alias forwarding only\n- Mobile apps point to anonaddy.com by default; self-hosted URL must be configured manually\n- No built-in spam filtering beyond what the upstream MTA provides",
    "tags": [
      "email",
      "alias",
      "privacy",
      "forwarding",
      "php"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "modoboa",
    "name": "Modoboa",
    "tagline": "Web-based mail hosting platform with modern UI for managing domains and accounts",
    "descriptionMd": "Modoboa is a Python/Django-based mail hosting and administration platform that provides a clean web interface for managing email domains, mailboxes, aliases, and quotas on top of Postfix and Dovecot. It supports multi-domain and multi-admin setups, a user self-service portal, and optional plugins for webmail, statistics, and DKIM management. Installation is via pip or Docker, and it integrates with PostgreSQL or MySQL as the backend database.",
    "repoUrl": "https://github.com/modoboa/modoboa",
    "websiteUrl": "https://modoboa.org/en/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "mailchimp",
      "sendgrid",
      "gmail"
    ],
    "license": "ISC",
    "language": "Python",
    "githubStars": 3508,
    "lastCommitAt": "2026-06-17",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Still depends on external Postfix and Dovecot daemons; not truly all-in-one\n- Webmail plugin (Rainloop/SOGo) requires separate configuration\n- No bulk mailing or newsletter campaign features\n- Documentation can be incomplete for advanced plugin setups",
    "tags": [
      "email",
      "mail-hosting",
      "postfix",
      "dovecot",
      "python"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "wildduck",
    "name": "wildduck",
    "tagline": "Scalable, horizontally distributed IMAP/POP3 mail server with no single point of failure",
    "descriptionMd": "WildDuck is a scalable, SPOF-free IMAP and POP3 mail server built on Node.js, MongoDB, and Redis. It is designed to run as a distributed cluster where multiple server nodes share state through MongoDB, allowing horizontal scaling and high availability. The project includes an HTTP API for account management and integrates with Haraka or Nodemailer for SMTP handling.",
    "repoUrl": "https://github.com/zone-eu/wildduck",
    "websiteUrl": "https://wildduck.email/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "sendgrid",
      "mailchimp"
    ],
    "license": "EUPL-1.2",
    "language": "Nodejs",
    "githubStars": 2099,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in web admin UI; management is done through a JSON HTTP API only\n- SMTP is a separate component (Haraka/ZoneMTA) requiring additional setup\n- MongoDB dependency adds operational overhead compared to simpler SQL-backed servers\n- Documentation assumes strong Node.js and MongoDB expertise",
    "tags": [
      "email",
      "imap",
      "pop3",
      "scalable",
      "nodejs"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "iredmail",
    "name": "iRedMail",
    "tagline": "Full-featured open-source mail server built on Postfix and Dovecot, installable in minutes",
    "descriptionMd": "iRedMail is a shell-script-based installer that deploys a complete, production-ready mail server stack (Postfix, Dovecot, Amavisd, SpamAssassin, ClamAV, Roundcube or SOGo webmail, and a web admin panel) on Linux and BSD servers. It supports multiple storage backends including OpenLDAP, MySQL/MariaDB, and PostgreSQL. The community edition is free; an iRedAdmin-Pro commercial panel is available for enhanced management features.",
    "repoUrl": "https://github.com/iredmail/iRedMail",
    "websiteUrl": "https://www.iredmail.org/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "email-newsletter",
    "replaces": [
      "gmail",
      "sendgrid",
      "mailchimp"
    ],
    "license": "GPL-3.0",
    "language": "Shell",
    "githubStars": 1809,
    "lastCommitAt": "2026-05-25",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Full admin panel (iRedAdmin-Pro) requires a paid license; free admin panel is limited\n- Designed for dedicated servers only; Docker or container-based installs are unofficial\n- No built-in newsletter or bulk email campaign features\n- Upgrades between major versions require careful manual steps",
    "tags": [
      "email",
      "mail-server",
      "postfix",
      "dovecot",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "netron",
    "name": "Netron",
    "tagline": "Interactive visualizer for neural network and machine learning model graphs",
    "descriptionMd": "Netron is a viewer for neural network, deep learning, and machine learning models that renders the computation graph interactively in the browser or as a desktop app. It supports over 30 model formats including ONNX, TensorFlow, Keras, PyTorch, Core ML, and many more. The tool is available as a web app, an Electron desktop application, or a Python package that can be embedded in notebooks, making model inspection accessible without additional infrastructure.",
    "repoUrl": "https://github.com/lutzroeder/netron",
    "websiteUrl": "https://netron.app/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel",
      "amplitude"
    ],
    "license": "MIT",
    "language": "Python",
    "githubStars": 33111,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 1,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Purely a model visualization tool; no runtime analytics, dashboards, or event tracking\n- Does not replace web or product analytics SaaS in any meaningful way\n- No team collaboration or sharing features beyond exporting images\n- No support for real-time or streaming model inference monitoring",
    "tags": [
      "machine-learning",
      "neural-network",
      "visualization",
      "onnx",
      "model-viewer"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "postiz",
    "name": "Postiz",
    "tagline": "Self-hosted social media scheduling and analytics platform for all major networks",
    "descriptionMd": "Postiz is an open-source social media management platform that lets teams schedule posts, analyze content performance, and manage multiple social media accounts from a single interface. It supports major platforms including X/Twitter, LinkedIn, Instagram, Facebook, YouTube, TikTok, and more. The application is built with Next.js and NestJS, ships with Docker Compose for self-hosted deployment, and offers a managed cloud version for teams that prefer not to self-host.",
    "repoUrl": "https://github.com/gitroomhq/postiz-app",
    "websiteUrl": "https://postiz.com",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel",
      "amplitude"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 32236,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Inbox/engagement management (replying to comments and DMs) is limited compared to Hootsuite or Sprout Social\n- Social listening and brand mention monitoring are not included\n- Detailed competitor analysis and benchmarking features are absent\n- Some platform integrations require individual developer app approvals",
    "tags": [
      "social-media",
      "scheduling",
      "analytics",
      "content",
      "marketing"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "goaccess",
    "name": "GoAccess",
    "tagline": "Real-time web log analyzer with terminal and browser-based interactive dashboards",
    "descriptionMd": "GoAccess is a fast, open-source web log analyzer and viewer written in C that parses Apache, Nginx, and other common server log formats in real time. It runs directly in a terminal as an ncurses dashboard or can output a self-contained HTML report with live WebSocket updates for browser-based viewing. No database is required; it processes logs on the fly, making it extremely lightweight and easy to deploy on any server.",
    "repoUrl": "https://github.com/allinurl/goaccess",
    "websiteUrl": "http://goaccess.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel",
      "amplitude"
    ],
    "license": "GPL-2.0",
    "language": "C",
    "githubStars": 20654,
    "lastCommitAt": "2026-06-11",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Analyzes server logs only; no JavaScript snippet for client-side event or user-behavior tracking\n- No user session recording, heatmaps, or funnel analysis\n- No retention, cohort, or A/B test reporting\n- Historical trend analysis is limited to what the log files contain",
    "tags": [
      "analytics",
      "log-analysis",
      "web-server",
      "real-time",
      "dashboard"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "apache-druid",
    "name": "Druid",
    "tagline": "Distributed, column-oriented real-time analytics data store for high-throughput queries",
    "descriptionMd": "Apache Druid is a high-performance, distributed OLAP data store designed for real-time analytics on large datasets. It ingests streaming and batch data and enables sub-second queries across billions of rows using columnar storage, pre-aggregation, and bitmap indexing. Druid is commonly deployed on Kubernetes or bare metal clusters with ZooKeeper, a metadata store, and object storage for segments. It powers dashboards, ad-hoc exploration, and operational analytics at companies like Netflix, Airbnb, and Twitter.",
    "repoUrl": "https://github.com/apache/druid",
    "websiteUrl": "https://druid.apache.org",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel",
      "amplitude"
    ],
    "license": "Apache-2.0",
    "language": "Java",
    "githubStars": 14017,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 5,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in session analytics, funnel analysis, or retention cohorts compared to Mixpanel/Amplitude\n- Requires significant infrastructure knowledge (ZooKeeper, deep-storage, coordinator/broker/historical nodes)\n- No out-of-the-box user-facing dashboarding — must pair with Superset or Grafana\n- Operational cost and cluster management overhead is very high for small teams",
    "tags": [
      "analytics",
      "olap",
      "real-time",
      "distributed",
      "data-store"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "rudderstack",
    "name": "RudderStack",
    "tagline": "Open-source customer data platform to collect, route, and transform event data",
    "descriptionMd": "RudderStack is a warehouse-first customer data platform that collects events from web, mobile, and server sources and routes them to 150+ destinations including data warehouses, analytics tools, and marketing platforms. It provides an SDK-based ingestion pipeline, transformation layer, and an ETL engine that syncs reverse-ETL data back into destinations. Self-hosted deployment is Docker-based and requires PostgreSQL and a message queue (Kafka or BadgerDB). It is a direct open-source alternative to Segment.",
    "repoUrl": "https://github.com/rudderlabs/rudder-server/",
    "websiteUrl": "https://rudderstack.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel",
      "amplitude"
    ],
    "license": "Elastic-2.0",
    "language": "Docker",
    "githubStars": 4440,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Kubernetes"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Elastic-2.0 license prohibits offering RudderStack as a managed service to third parties\n- The self-hosted control plane UI is limited; some advanced audience and reverse-ETL features require cloud tier\n- Requires Postgres + message queue to be provisioned and managed separately\n- Documentation for self-hosting advanced features (transformations, live events debugger) is sparse",
    "tags": [
      "analytics",
      "cdp",
      "etl",
      "event-tracking",
      "data-pipeline"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "vince",
    "name": "Vince",
    "tagline": "Lightweight, privacy-first web analytics dashboard — single binary, no external deps",
    "descriptionMd": "Vince is a privacy-respecting web analytics tool written in Go that ships as a single binary with no external database required. It provides real-time traffic dashboards, referrer tracking, UTM campaign support, and goal conversion funnels. Like Plausible, it is cookieless and GDPR-friendly by design. Because it embeds its own storage engine it can be run with a simple `docker run` or bare binary, making it one of the easiest self-hosted analytics options available.",
    "repoUrl": "https://github.com/vinceanalytics/vince",
    "websiteUrl": "https://www.vinceanalytics.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel",
      "amplitude"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 2012,
    "lastCommitAt": "2025-09-01",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No heatmaps, session recordings, or user-level event streams\n- Smaller destination ecosystem — no built-in integrations with ad platforms or CRMs\n- Community is small; plugin/extension ecosystem is essentially nonexistent\n- No multi-site team management or SSO in the self-hosted build",
    "tags": [
      "analytics",
      "privacy",
      "web-analytics",
      "cookieless",
      "go"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "statistics-for-strava",
    "name": "Statistics for Strava",
    "tagline": "Self-hosted statistics dashboard for your personal Strava activity data",
    "descriptionMd": "Statistics for Strava is a PHP/Docker application that connects to the Strava API and generates a rich personal statistics dashboard including yearly overviews, gear mileage, segment analysis, and activity heatmaps. It runs entirely on your own server and stores no data in any third-party cloud. Deployment is a straightforward Docker Compose setup; a live demo is available to explore the interface before self-hosting.",
    "repoUrl": "https://github.com/robiningelbrecht/statistics-for-strava",
    "websiteUrl": "https://github.com/robiningelbrecht/statistics-for-strava",
    "demoUrl": "https://statistics-for-strava.robiningelbrecht.be/",
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "hotjar"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 1805,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Limited to Strava as a data source; no support for Garmin, Wahoo, or other fitness platforms\n- Read-only analytics — no goal setting, training plans, or social features\n- No mobile app; dashboard is web-only\n- Requires a valid Strava API OAuth application to be configured before first run",
    "tags": [
      "analytics",
      "fitness",
      "strava",
      "dashboard",
      "health"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "aptabase",
    "name": "Aptabase",
    "tagline": "Privacy-first, open-source analytics for mobile and desktop apps",
    "descriptionMd": "Aptabase is a lightweight analytics platform built for mobile (iOS, Android, Flutter, React Native) and desktop (Electron, Tauri, .NET) applications. It offers an SDK for event tracking, a clean real-time dashboard, and stores all data on your own infrastructure with no cookies or PII collected by default. The self-hosted version is deployed via Docker and backed by ClickHouse for fast aggregations.",
    "repoUrl": "https://github.com/aptabase/aptabase",
    "websiteUrl": "https://aptabase.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "mixpanel",
      "amplitude",
      "google-analytics"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 1721,
    "lastCommitAt": "2026-02-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No funnel, retention, or cohort analysis out of the box\n- Limited to event-based tracking; no session replay or heatmaps\n- Smaller SDK ecosystem compared to Firebase Analytics or Mixpanel\n- Self-hosted version may lag behind the cloud product in features",
    "tags": [
      "analytics",
      "mobile",
      "desktop",
      "privacy",
      "sdk"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "middleware",
    "name": "Middleware",
    "tagline": "Engineering analytics platform that measures team effectiveness via DORA metrics",
    "descriptionMd": "Middleware is an open-source engineering analytics platform that connects to GitHub, GitLab, and Jira to compute DORA metrics (deployment frequency, lead time, change failure rate, time to restore). It surfaces cycle time breakdowns, PR review bottlenecks, and sprint velocity to help engineering leaders make data-driven decisions. Deployment is Docker-based and the platform is designed for on-premise use in security-conscious organizations.",
    "repoUrl": "https://github.com/middlewarehq/middleware",
    "websiteUrl": "https://middlewarehq.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "analytics",
    "replaces": [
      "google-analytics",
      "mixpanel",
      "amplitude"
    ],
    "license": "Apache-2.0",
    "language": "Docker",
    "githubStars": 1607,
    "lastCommitAt": "2026-06-08",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- Focused exclusively on engineering metrics; not a general-purpose product or user analytics tool\n- Integration list is limited to Git hosting platforms and Jira — no PagerDuty or incident-management connectors yet\n- Trend and benchmark data requires a sufficiently long history of merged PRs to be meaningful\n- No alerting or notification system for metric regressions",
    "tags": [
      "analytics",
      "dora-metrics",
      "engineering",
      "devops",
      "team-productivity"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "changedetection-io",
    "name": "changedetection.io",
    "tagline": "Monitor any website for changes and get notified instantly",
    "descriptionMd": "changedetection.io is a self-hosted web-page change detection and notification service. It watches URLs on a configurable schedule, diffs the content using visual, text, or JSON/XPath selectors, and fires alerts via 80+ notification channels (email, Slack, Telegram, webhooks, etc.). It supports JavaScript-rendered pages via Playwright/Selenium browsers, and can monitor price changes, stock availability, or any structured data on a page. Deployment is a single Docker container or Docker Compose.",
    "repoUrl": "https://github.com/dgtlmoon/changedetection.io",
    "websiteUrl": "https://changedetection.io/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make"
    ],
    "license": "Apache-2.0",
    "language": "Python",
    "githubStars": 32090,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No multi-step workflow automation — it only watches and notifies, not acts on changes\n- JavaScript-heavy sites require a separately configured Playwright browser container\n- No native API for programmatic watch management (REST API is limited)\n- Cannot extract and transform data into downstream systems without additional tools",
    "tags": [
      "automation",
      "monitoring",
      "web-scraping",
      "notifications",
      "change-detection"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "leon",
    "name": "Leon",
    "tagline": "Open-source personal assistant server you fully control and run on your own machine",
    "descriptionMd": "Leon is a Node.js personal assistant that runs on your server and responds to text or voice commands to execute skills (tasks). Skills are self-contained Node.js modules covering productivity, information retrieval, IoT control, and more. Leon exposes a web-based chat UI, supports speech recognition via an optional Python bridge, and is fully offline-capable with appropriate NLU models. It is designed as a privacy-first Siri/Alexa alternative with an open plugin system.",
    "repoUrl": "https://github.com/leon-ai/leon",
    "websiteUrl": "https://getleon.ai",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 17333,
    "lastCommitAt": "2026-06-18",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Skill catalog is far smaller than Alexa's or Google Assistant's third-party ecosystem\n- No official Docker image; setup involves Node.js, Python, and optional model downloads\n- Voice accuracy depends on local NLU models that require additional setup and tuning\n- Not designed for multi-user household scenarios — user accounts and permissions are limited",
    "tags": [
      "automation",
      "personal-assistant",
      "voice",
      "ai",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "cronicle",
    "name": "Cronicle",
    "tagline": "Distributed task scheduler with a web UI — cron for teams with history and retries",
    "descriptionMd": "Cronicle is a multi-server task scheduler and runner built in Node.js with a full-featured web dashboard. It supports cron-like scheduling, one-time events, chained jobs, and shell/script execution across multiple worker nodes. The UI provides live log streaming, run history, resource graphs, and retry policies. It uses its own embedded key-value store (Cronicle Data Layer) and requires no external database for simple deployments.",
    "repoUrl": "https://github.com/jhuckaby/Cronicle",
    "websiteUrl": "https://cronicle.net/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make",
      "tray-io"
    ],
    "license": "MIT",
    "language": "Nodejs",
    "githubStars": 5751,
    "lastCommitAt": "2026-06-19",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No DAG / dependency graph between jobs; pipeline orchestration is limited to linear chains\n- No built-in secrets management — credentials passed as environment variables or shell scripts\n- High-availability multi-master setup is complex and not well documented\n- UI and architecture feel dated compared to newer alternatives like Temporal or Windmill",
    "tags": [
      "automation",
      "scheduler",
      "cron",
      "task-runner",
      "distributed"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "pyload",
    "name": "pyLoad",
    "tagline": "Web-controlled download manager for one-click hosters, torrents, and direct links",
    "descriptionMd": "pyLoad is a Python-based download manager with a web UI that handles direct HTTP links, one-click hosters (Rapidshare-style), and YouTube-dl-compatible sources. It supports parallel downloads, queuing, plugin-based hoster support, and scheduled download windows. A REST API allows remote management from scripts or mobile apps. It can be deployed via Docker or installed directly on Linux/Windows with Python.",
    "repoUrl": "https://github.com/pyload/pyload",
    "websiteUrl": "https://pyload.net/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make"
    ],
    "license": "AGPL-3.0",
    "language": "Python",
    "githubStars": 3797,
    "lastCommitAt": "2026-06-06",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Plugin ecosystem for one-click hosters is aging; many premium hoster plugins are broken or unmaintained\n- No built-in torrent client — only handles direct and hoster-based downloads\n- Web UI is functional but dated compared to modern download manager frontends\n- Python 3 migration improved stability but the codebase has accumulated technical debt",
    "tags": [
      "automation",
      "download-manager",
      "web-ui",
      "python",
      "file-download"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "olivetin",
    "name": "OliveTin",
    "tagline": "Expose predefined Linux shell commands as a safe, simple web interface for non-techies",
    "descriptionMd": "OliveTin is a lightweight Go web server that presents a configurable set of shell commands as clickable buttons in a browser UI. It is designed for giving family members, colleagues, or clients a safe way to trigger specific server actions (restart a service, run a backup, toggle a container) without SSH access. Commands, icons, and access permissions are defined in a YAML config file. It runs as a single binary or Docker container.",
    "repoUrl": "https://github.com/OliveTin/OliveTin",
    "websiteUrl": "https://www.olivetin.app/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make"
    ],
    "license": "AGPL-3.0",
    "language": "Go",
    "githubStars": 3654,
    "lastCommitAt": "2026-06-20",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No conditional logic, branching, or multi-step workflows — each button maps to a single command\n- No scheduling or trigger-based execution; only manual button presses\n- Authentication is basic (single shared password or reverse-proxy auth); no per-user RBAC\n- No audit log or notification system beyond live output in the UI",
    "tags": [
      "automation",
      "shell",
      "web-ui",
      "devops",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "dagu",
    "name": "Dagu",
    "tagline": "DAG-based workflow orchestrator with a web UI — cron replacement with real dependencies",
    "descriptionMd": "Dagu is a Go-based workflow orchestration tool that models pipelines as Directed Acyclic Graphs defined in YAML. It provides a built-in web UI for visualizing DAGs, monitoring run history, and manually triggering workflows. Dagu supports cron scheduling, retries, email notifications, and parallel step execution. It requires no external database — state is persisted to the local filesystem — making single-binary or Docker deployment straightforward.",
    "repoUrl": "https://github.com/dagucloud/dagu",
    "websiteUrl": "https://docs.dagu.cloud/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make",
      "tray-io"
    ],
    "license": "GPL-3.0",
    "language": "Go",
    "githubStars": 3507,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No distributed worker pool — all steps run on the same host, limiting horizontal scale\n- No built-in secrets vault; credentials must be managed via environment variables or external tools\n- UI is functional but lacks advanced features like parameterized run forms or dynamic DAG generation\n- Community is smaller than Airflow or Prefect; fewer integrations and plugins",
    "tags": [
      "automation",
      "workflow",
      "dag",
      "scheduler",
      "orchestration"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "dittofeed",
    "name": "Dittofeed",
    "tagline": "Open-source customer messaging automation — email, SMS, and push journey builder",
    "descriptionMd": "Dittofeed is an omni-channel customer engagement platform that lets teams build automated messaging journeys across email, SMS, push notifications, and webhooks. It provides a visual journey builder, segment management, template editor, and event-driven triggers. It is designed as a self-hosted alternative to Braze, Customer.io, and Iterable, with deployment via Docker Compose backed by PostgreSQL and ClickHouse.",
    "repoUrl": "https://github.com/dittofeed/dittofeed",
    "websiteUrl": "https://www.dittofeed.com",
    "demoUrl": "https://demo.dittofeed.com/dashboard/journeys",
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make",
      "workato"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 2812,
    "lastCommitAt": "2026-03-28",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- In-app messaging channel (tooltips, banners, modals) is not yet supported\n- Deliverability tools like dedicated IP warm-up and domain authentication wizards are absent\n- Mobile push requires manual integration with APNs/FCM; no managed SDK\n- Feature cadence for the self-hosted version can lag behind the cloud offering",
    "tags": [
      "automation",
      "customer-engagement",
      "email",
      "messaging",
      "journeys"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "matchering",
    "name": "Matchering",
    "tagline": "Automated audio mastering library that matches your track to a reference song",
    "descriptionMd": "Matchering is a Python library and Docker-deployable web service for automated audio mastering. Given a target track and a reference song, it analyzes the reference's loudness, stereo width, and spectral balance and applies matching processing to the target. It is designed as an open-source alternative to cloud mastering services like LANDR and eMastered. A minimal web UI and REST API are available for integration into music production pipelines.",
    "repoUrl": "https://github.com/sergree/matchering",
    "websiteUrl": "https://github.com/sergree/matchering",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "automation",
    "replaces": [
      "zapier",
      "make"
    ],
    "license": "GPL-3.0",
    "language": "Docker",
    "githubStars": 2558,
    "lastCommitAt": "2026-05-05",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- Mastering quality depends entirely on reference track choice; no AI-driven style presets like LANDR\n- No stem separation, noise reduction, or restoration processing\n- Web UI is very minimal — not a polished production tool without custom frontend work\n- Processing is CPU-only by default; no GPU acceleration for batch workflows",
    "tags": [
      "automation",
      "audio",
      "mastering",
      "music",
      "python"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "frappe-helpdesk",
    "name": "Frappe Helpdesk",
    "tagline": "Open-source customer support desk with automation and clean UI",
    "descriptionMd": "Frappe Helpdesk is a full-featured customer support platform built on the Frappe framework. It provides ticket management, SLA enforcement, automation rules, and a self-service portal for end users. The system supports email-to-ticket ingestion and agent assignment workflows. It deploys via Docker or the Frappe/ERPNext bench toolchain.",
    "repoUrl": "https://github.com/frappe/helpdesk",
    "websiteUrl": "https://frappe.io/helpdesk",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "freshdesk",
      "intercom"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 3199,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": true,
    "featureGapMd": "- No native live chat widget; real-time messaging requires Frappe's separate chat module\n- AI-assisted response suggestions and GPT-powered ticket summarization are absent\n- Reporting and analytics dashboards are limited compared to Zendesk Explore\n- Mobile apps for agents are not officially provided",
    "tags": [
      "helpdesk",
      "ticketing",
      "customer-support",
      "automation",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "libredesk",
    "name": "Libredesk",
    "tagline": "Omnichannel support desk — live chat, email, and more in one binary",
    "descriptionMd": "Libredesk is a modern customer support platform that unifies live chat, email, and other channels into a single agent interface. It ships as a single Go binary, making deployment straightforward with minimal external dependencies. The tool supports team inboxes, conversation assignments, canned responses, and a customer-facing chat widget. Docker images are provided for containerised deployments.",
    "repoUrl": "https://github.com/abhinavxd/libredesk",
    "websiteUrl": "https://libredesk.io/",
    "demoUrl": "https://demo.libredesk.io",
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "intercom",
      "zendesk",
      "freshdesk"
    ],
    "license": "AGPL-3.0",
    "language": "Docker",
    "githubStars": 2582,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No built-in knowledge base or help-centre article editor\n- AI copilot features (suggested replies, sentiment analysis) are not yet present\n- Phone/voice channel support is absent\n- Advanced SLA policies and escalation rules are limited",
    "tags": [
      "helpdesk",
      "live-chat",
      "omnichannel",
      "customer-support",
      "ticketing"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "bugsink",
    "name": "Bugsink",
    "tagline": "Self-hosted real-time error tracking with detailed event context",
    "descriptionMd": "Bugsink is a self-hosted error tracking server that captures, groups, and displays application exceptions in real time. It is compatible with the Sentry SDK, so existing instrumentation can point at a Bugsink instance without code changes. The server is written in Python and can be run with a single Docker command against a SQLite or PostgreSQL backend. It focuses on simplicity and clear setup instructions over feature breadth.",
    "repoUrl": "https://github.com/bugsink/bugsink/",
    "websiteUrl": "https://www.bugsink.com/",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "freshdesk"
    ],
    "license": "⊘ Proprietary",
    "language": "Python",
    "githubStars": 1888,
    "lastCommitAt": "2026-06-21",
    "selfHostDifficulty": 2,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No ticket or helpdesk workflow; purely an error-tracking tool, not a support desk\n- Performance monitoring (traces, profiling) is not supported unlike Sentry\n- No integrations marketplace (Slack, PagerDuty, Jira) out of the box\n- Proprietary licence restricts commercial redistribution",
    "tags": [
      "error-tracking",
      "bug-tracking",
      "sentry-compatible",
      "monitoring",
      "python"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "mantisbt",
    "name": "MantisBT",
    "tagline": "Veteran PHP bug tracker tailored for software development teams",
    "descriptionMd": "MantisBT (Mantis Bug Tracker) is a long-established open-source issue and bug tracking system written in PHP. It provides customisable workflows, email notifications, project-level access control, and a plugin system for extending functionality. Deployment requires a PHP-capable web server and a MySQL/PostgreSQL database. A live demo is available on the project's own bug tracker instance.",
    "repoUrl": "https://github.com/mantisbt/mantisbt",
    "websiteUrl": "https://www.mantisbt.org/",
    "demoUrl": "https://www.mantisbt.org/bugs/my_view_page.php",
    "logoUrl": null,
    "categorySlug": "helpdesk",
    "replaces": [
      "zendesk",
      "freshdesk"
    ],
    "license": "GPL-2.0",
    "language": "PHP",
    "githubStars": 1781,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 4,
    "deployOptions": [
      "Docker",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- UI is dated and not optimised for mobile agents\n- No live chat or real-time messaging channel support\n- Reporting and analytics are basic compared to modern SaaS helpdesks\n- No built-in AI features for reply suggestions or ticket classification",
    "tags": [
      "bug-tracker",
      "issue-tracking",
      "ticketing",
      "php",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  },
  {
    "slug": "aliasvault",
    "name": "AliasVault",
    "tagline": "E2E-encrypted password manager with built-in email alias generation",
    "descriptionMd": "AliasVault combines a zero-knowledge password vault with an integrated email alias server, letting users create unique addresses per service without exposing a real inbox. All vault data is encrypted client-side before reaching the server. It is packaged as a Docker Compose stack covering the API, web app, and mail server. The project is MIT-licensed and designed for straightforward self-hosting.",
    "repoUrl": "https://github.com/aliasvault/aliasvault",
    "websiteUrl": "https://www.aliasvault.net",
    "demoUrl": null,
    "logoUrl": null,
    "categorySlug": "password-manager",
    "replaces": [
      "1password",
      "lastpass",
      "dashlane"
    ],
    "license": "MIT",
    "language": "Docker",
    "githubStars": 2857,
    "lastCommitAt": "2026-06-22",
    "selfHostDifficulty": 3,
    "deployOptions": [
      "Docker",
      "Docker Compose",
      "Manual"
    ],
    "hasManagedHosting": false,
    "featureGapMd": "- No official browser extension for autofill comparable to 1Password or LastPass\n- Mobile apps (iOS/Android) are not yet available\n- Team/business sharing features (shared vaults, access policies) are absent\n- Emergency access and account-recovery flows are limited",
    "tags": [
      "password-manager",
      "email-alias",
      "encryption",
      "privacy",
      "self-hosted"
    ],
    "affiliateUrl": null,
    "affiliateNetwork": null,
    "featured": false,
    "featuredRank": null,
    "status": "live",
    "source": "awesome-selfhosted"
  }
]
