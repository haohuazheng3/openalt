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
    "githubStars": 72522,
    "lastCommitAt": "2026-06-05",
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
    "githubStars": 69505,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 55265,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 60871,
    "lastCommitAt": "2026-06-15",
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
    "githubStars": 43443,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 44489,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 38975,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 28461,
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
    "githubStars": 18837,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 20658,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 36488,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 6514,
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
    "githubStars": 4638,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 63481,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 40069,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 38034,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 28029,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 21352,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 15387,
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
    "githubStars": 12270,
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
    "githubStars": 11155,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 2945,
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
    "githubStars": 699,
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
    "githubStars": 192978,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 49482,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 45851,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 27084,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 23318,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 22805,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 16805,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 13875,
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
    "githubStars": 6488,
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
    "githubStars": 52479,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 50315,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 22996,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 7327,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 5517,
    "lastCommitAt": "2026-06-09",
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
    "githubStars": 4002,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 3060,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 2845,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 1103,
    "lastCommitAt": "2026-06-17",
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
    "lastCommitAt": "2026-06-18",
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
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 37212,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 35077,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 27212,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 21606,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 12300,
    "lastCommitAt": "2026-06-15",
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
    "githubStars": 12107,
    "lastCommitAt": "2026-06-17",
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
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 5758,
    "lastCommitAt": "2026-06-01",
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
    "githubStars": 4673,
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
    "githubStars": 629,
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
    "githubStars": 62471,
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
    "githubStars": 22131,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 27395,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 19214,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 12940,
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
    "githubStars": 6361,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 5977,
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
    "githubStars": 2922,
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
    "githubStars": 1789,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 103,
    "lastCommitAt": "2026-06-15",
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
    "githubStars": 18406,
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
    "githubStars": 16608,
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
    "githubStars": 21618,
    "lastCommitAt": "2026-06-04",
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
    "githubStars": 12959,
    "lastCommitAt": "2026-06-11",
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
    "githubStars": 9832,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 7319,
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
    "githubStars": 5930,
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
    "githubStars": 5585,
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
    "githubStars": 2117,
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
    "githubStars": 1598,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 51364,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 26221,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 26243,
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
    "githubStars": 20967,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 15334,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 12109,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 10050,
    "lastCommitAt": "2026-06-14",
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
    "githubStars": 9647,
    "lastCommitAt": "2026-06-15",
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
    "githubStars": 5958,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 4533,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 1393,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 85446,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 61203,
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
    "githubStars": 57911,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 49671,
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
    "githubStars": 38334,
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
    "githubStars": 32978,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 35805,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 35139,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 14849,
    "lastCommitAt": "2026-06-12",
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
    "githubStars": 10768,
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
    "githubStars": 8792,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 6729,
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
    "githubStars": 2218,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 45609,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 38014,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 29446,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 25374,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 13373,
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
    "githubStars": 13221,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 6271,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 4302,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 2174,
    "lastCommitAt": "2026-06-15",
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
    "githubStars": 2145,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 12396,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 8836,
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
    "githubStars": 3643,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 3468,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 32414,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 19038,
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
    "githubStars": 5687,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 4348,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 3799,
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
    "githubStars": 3132,
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
    "githubStars": 2482,
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
    "githubStars": 74481,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 73346,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 47715,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 28644,
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
    "githubStars": 6470,
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
    "githubStars": 5900,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 2660,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 1685,
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
    "githubStars": 88166,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 79258,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 64565,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 27371,
    "lastCommitAt": "2026-06-18",
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
    "githubStars": 17169,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 15099,
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
    "githubStars": 11261,
    "lastCommitAt": "2026-06-10",
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
    "githubStars": 10101,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 8755,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 5988,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 5667,
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
    "githubStars": 1982,
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
    "githubStars": 45631,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 5121,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 4225,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 101,
    "lastCommitAt": "2026-06-17",
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
    "lastCommitAt": "2026-06-13",
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
    "githubStars": 57108,
    "lastCommitAt": "2026-06-16",
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
    "githubStars": 35910,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 34946,
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
    "githubStars": 31945,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 15062,
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
    "githubStars": 5514,
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
    "githubStars": 4315,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 2997,
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
    "githubStars": 2445,
    "lastCommitAt": "2026-06-17",
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
    "githubStars": 1337,
    "lastCommitAt": "2026-06-17",
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
  }
]
