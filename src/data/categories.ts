/**
 * Categories are organized by the *kind of SaaS being replaced* — notes & docs,
 * databases, automation, CRM, analytics, and so on. A visitor arrives wanting
 * "an open-source alternative to <category of tool>", so the directory mirrors
 * how they think.
 *
 * `selfHostHeadline` is the H1 used on /self-hosted/[category] landing pages.
 */
export type CategorySeed = {
  slug: string
  name: string
  description: string
  sortOrder: number
  selfHostHeadline: string
}

export const CATEGORIES: CategorySeed[] = [
  {
    slug: 'notes-docs',
    name: 'Notes & Knowledge Base',
    description:
      'Self-hosted alternatives to Notion, Confluence, and Evernote — wikis, docs, and team knowledge bases you own.',
    selfHostHeadline: 'Self-Hosted Notes & Knowledge Base Tools',
    sortOrder: 10,
  },
  {
    slug: 'database-spreadsheet',
    name: 'Databases & Spreadsheets',
    description:
      'Open-source Airtable and Google Sheets alternatives — no-code databases, smart spreadsheets, and internal data apps.',
    selfHostHeadline: 'Self-Hosted Airtable & Spreadsheet Alternatives',
    sortOrder: 20,
  },
  {
    slug: 'automation',
    name: 'Automation & iPaaS',
    description:
      'Self-hostable Zapier and Make alternatives — workflow automation and app-to-app integration engines.',
    selfHostHeadline: 'Self-Hosted Zapier & Automation Alternatives',
    sortOrder: 30,
  },
  {
    slug: 'crm',
    name: 'CRM & Sales',
    description:
      'Open-source CRM alternatives to Salesforce, HubSpot, and Pipedrive — own your pipeline and customer data.',
    selfHostHeadline: 'Self-Hosted CRM Alternatives',
    sortOrder: 40,
  },
  {
    slug: 'analytics',
    name: 'Product & Web Analytics',
    description:
      'Privacy-friendly, self-hosted alternatives to Google Analytics, Mixpanel, and Amplitude.',
    selfHostHeadline: 'Self-Hosted Google Analytics Alternatives',
    sortOrder: 50,
  },
  {
    slug: 'password-manager',
    name: 'Password Managers & Secrets',
    description:
      'Self-hosted password managers and secret stores — alternatives to 1Password, LastPass, and Dashlane.',
    selfHostHeadline: 'Self-Hosted Password Manager Alternatives',
    sortOrder: 60,
  },
  {
    slug: 'email-newsletter',
    name: 'Email & Newsletters',
    description:
      'Self-hosted email servers and newsletter platforms — alternatives to Gmail, Mailchimp, and SendGrid.',
    selfHostHeadline: 'Self-Hosted Email & Newsletter Alternatives',
    sortOrder: 70,
  },
  {
    slug: 'project-management',
    name: 'Project Management & Kanban',
    description:
      'Open-source alternatives to Trello, Asana, Jira, and Monday — boards, sprints, and issue tracking you control.',
    selfHostHeadline: 'Self-Hosted Project Management & Kanban Alternatives',
    sortOrder: 80,
  },
  {
    slug: 'file-storage',
    name: 'File Storage & Sync',
    description:
      'Self-hosted Dropbox and Google Drive alternatives — file sync, sharing, and cloud storage on your own server.',
    selfHostHeadline: 'Self-Hosted Dropbox & File Sync Alternatives',
    sortOrder: 90,
  },
  {
    slug: 'team-chat',
    name: 'Team Chat & Collaboration',
    description:
      'Open-source Slack, Discord, and Microsoft Teams alternatives — messaging and collaboration you host yourself.',
    selfHostHeadline: 'Self-Hosted Slack & Team Chat Alternatives',
    sortOrder: 100,
  },
  {
    slug: 'forms-surveys',
    name: 'Forms & Surveys',
    description:
      'Self-hosted alternatives to Typeform, Google Forms, and SurveyMonkey — collect responses without the per-seat tax.',
    selfHostHeadline: 'Self-Hosted Typeform & Forms Alternatives',
    sortOrder: 110,
  },
  {
    slug: 'helpdesk',
    name: 'Helpdesk & Support',
    description:
      'Open-source Zendesk, Intercom, and Freshdesk alternatives — ticketing, live chat, and customer support you own.',
    selfHostHeadline: 'Self-Hosted Helpdesk & Support Alternatives',
    sortOrder: 120,
  },
  {
    slug: 'bi-dashboards',
    name: 'BI & Dashboards',
    description:
      'Self-hosted business-intelligence tools — open-source alternatives to Tableau, Looker, and Power BI.',
    selfHostHeadline: 'Self-Hosted BI & Dashboard Alternatives',
    sortOrder: 130,
  },
  {
    slug: 'monitoring',
    name: 'Monitoring & Status Pages',
    description:
      'Self-hosted uptime monitoring and status pages — alternatives to Datadog, Pingdom, and StatusPage.',
    selfHostHeadline: 'Self-Hosted Monitoring & Status Page Alternatives',
    sortOrder: 140,
  },
  {
    slug: 'scheduling',
    name: 'Scheduling & Booking',
    description:
      'Open-source Calendly alternatives — meeting scheduling and appointment booking on your own domain.',
    selfHostHeadline: 'Self-Hosted Calendly & Scheduling Alternatives',
    sortOrder: 150,
  },
  {
    slug: 'paas-deploy',
    name: 'Self-Hosting Platforms & PaaS',
    description:
      'Open-source Heroku, Vercel, and Netlify alternatives — the platforms that make self-hosting everything else easy.',
    selfHostHeadline: 'Self-Hosted Heroku & PaaS Alternatives',
    sortOrder: 160,
  },
  {
    slug: 'media-server',
    name: 'Media Servers & Streaming',
    description:
      'Self-hosted alternatives to Plex, Spotify, and Netflix — stream your own movies, music, and shows from a server you own.',
    selfHostHeadline: 'Self-Hosted Plex & Media Server Alternatives',
    sortOrder: 170,
  },
  {
    slug: 'photos',
    name: 'Photo Management',
    description:
      'Open-source Google Photos and iCloud Photos alternatives — back up, organize, and browse your photo library on your own server.',
    selfHostHeadline: 'Self-Hosted Google Photos Alternatives',
    sortOrder: 180,
  },
  {
    slug: 'blog-cms',
    name: 'Blogging & CMS',
    description:
      'Self-hosted alternatives to WordPress.com, Medium, and Substack — blogs, websites, and headless content management you own.',
    selfHostHeadline: 'Self-Hosted WordPress & CMS Alternatives',
    sortOrder: 190,
  },
  {
    slug: 'read-later-feeds',
    name: 'Feeds & Read-Later',
    description:
      'Open-source Feedly, Pocket, and Instapaper alternatives — RSS readers, bookmark managers, and read-it-later you control.',
    selfHostHeadline: 'Self-Hosted Feedly & RSS Reader Alternatives',
    sortOrder: 200,
  },
  {
    slug: 'ai-llm',
    name: 'AI & LLM Tools',
    description:
      'Self-hosted ChatGPT alternatives — local LLM chat UIs and AI tools that keep your prompts and data private.',
    selfHostHeadline: 'Self-Hosted ChatGPT & LLM Alternatives',
    sortOrder: 205,
  },
  {
    slug: 'finance-budget',
    name: 'Finance & Budgeting',
    description:
      'Open-source alternatives to Mint, YNAB, and QuickBooks — budgeting, accounting, and money management on your own server.',
    selfHostHeadline: 'Self-Hosted Budgeting & Finance Alternatives',
    sortOrder: 210,
  },
]

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug)

export const categoryName = (slug: string): string =>
  CATEGORIES.find((c) => c.slug === slug)?.name ?? slug
