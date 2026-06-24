/**
 * The proprietary / commercial SaaS products that open-source projects replace.
 *
 * Each entry powers a `/[slug]-alternatives` aggregation page (e.g.
 * `/notion-alternatives`) — the directory's highest-intent SEO surface. A
 * listing links to one or more of these via its `replaces` array (by slug).
 *
 * `priceHook` is a short, human line about why people look for an alternative
 * (used in copy on the alternatives page).
 */
export type ProprietaryToolSeed = {
  slug: string
  name: string
  categorySlug: string
  website: string
  blurb: string
  priceHook: string
}

export const PROPRIETARY_TOOLS: ProprietaryToolSeed[] = [
  // ── Notes & Knowledge Base ───────────────────────────────────────────────
  { slug: 'notion', name: 'Notion', categorySlug: 'notes-docs', website: 'https://www.notion.so', blurb: 'All-in-one docs, wikis, and databases.', priceHook: 'per-seat pricing that climbs fast for teams' },
  { slug: 'confluence', name: 'Confluence', categorySlug: 'notes-docs', website: 'https://www.atlassian.com/software/confluence', blurb: 'Atlassian team wiki and documentation.', priceHook: 'per-user fees and Atlassian lock-in' },
  { slug: 'evernote', name: 'Evernote', categorySlug: 'notes-docs', website: 'https://evernote.com', blurb: 'Personal note-taking and clipping.', priceHook: 'repeated price hikes and device limits' },
  { slug: 'obsidian', name: 'Obsidian', categorySlug: 'notes-docs', website: 'https://obsidian.md', blurb: 'Local-first markdown knowledge base.', priceHook: 'paid sync and a closed-source core' },

  // ── Databases & Spreadsheets ─────────────────────────────────────────────
  { slug: 'airtable', name: 'Airtable', categorySlug: 'database-spreadsheet', website: 'https://airtable.com', blurb: 'No-code database / spreadsheet hybrid.', priceHook: 'record limits and steep per-seat pricing' },
  { slug: 'google-sheets', name: 'Google Sheets', categorySlug: 'database-spreadsheet', website: 'https://sheets.google.com', blurb: 'Cloud spreadsheets.', priceHook: 'data living on Google’s servers' },
  { slug: 'smartsheet', name: 'Smartsheet', categorySlug: 'database-spreadsheet', website: 'https://www.smartsheet.com', blurb: 'Spreadsheet-style work management.', priceHook: 'enterprise pricing for basic grids' },
  { slug: 'retool', name: 'Retool', categorySlug: 'database-spreadsheet', website: 'https://retool.com', blurb: 'Internal-tool / admin-panel builder.', priceHook: 'per-user pricing that scales painfully' },

  // ── Automation & iPaaS ───────────────────────────────────────────────────
  { slug: 'zapier', name: 'Zapier', categorySlug: 'automation', website: 'https://zapier.com', blurb: 'App-to-app workflow automation.', priceHook: 'per-task billing that punishes scale' },
  { slug: 'make', name: 'Make', categorySlug: 'automation', website: 'https://www.make.com', blurb: 'Visual automation (formerly Integromat).', priceHook: 'operation-based pricing tiers' },
  { slug: 'tray-io', name: 'Tray.io', categorySlug: 'automation', website: 'https://tray.io', blurb: 'Enterprise integration platform.', priceHook: 'opaque enterprise pricing' },
  { slug: 'workato', name: 'Workato', categorySlug: 'automation', website: 'https://www.workato.com', blurb: 'Enterprise iPaaS and automation.', priceHook: 'high recipe-based costs' },

  // ── CRM & Sales ──────────────────────────────────────────────────────────
  { slug: 'salesforce', name: 'Salesforce', categorySlug: 'crm', website: 'https://www.salesforce.com', blurb: 'The enterprise CRM standard.', priceHook: 'notoriously expensive per-seat licensing' },
  { slug: 'hubspot', name: 'HubSpot', categorySlug: 'crm', website: 'https://www.hubspot.com', blurb: 'CRM with marketing and sales hubs.', priceHook: 'costs that balloon as contacts grow' },
  { slug: 'pipedrive', name: 'Pipedrive', categorySlug: 'crm', website: 'https://www.pipedrive.com', blurb: 'Sales-pipeline-focused CRM.', priceHook: 'per-user fees for every feature tier' },

  // ── Product & Web Analytics ──────────────────────────────────────────────
  { slug: 'google-analytics', name: 'Google Analytics', categorySlug: 'analytics', website: 'https://analytics.google.com', blurb: 'Web analytics (GA4).', priceHook: 'privacy concerns and GDPR headaches' },
  { slug: 'mixpanel', name: 'Mixpanel', categorySlug: 'analytics', website: 'https://mixpanel.com', blurb: 'Product / event analytics.', priceHook: 'event-volume pricing' },
  { slug: 'amplitude', name: 'Amplitude', categorySlug: 'analytics', website: 'https://amplitude.com', blurb: 'Product analytics platform.', priceHook: 'expensive once you outgrow the free tier' },
  { slug: 'hotjar', name: 'Hotjar', categorySlug: 'analytics', website: 'https://www.hotjar.com', blurb: 'Heatmaps and session replay.', priceHook: 'session-capped paid plans' },

  // ── Password Managers & Secrets ──────────────────────────────────────────
  { slug: '1password', name: '1Password', categorySlug: 'password-manager', website: 'https://1password.com', blurb: 'Team and personal password manager.', priceHook: 'per-user subscriptions forever' },
  { slug: 'lastpass', name: 'LastPass', categorySlug: 'password-manager', website: 'https://www.lastpass.com', blurb: 'Cloud password manager.', priceHook: 'breaches and a shrinking free tier' },
  { slug: 'dashlane', name: 'Dashlane', categorySlug: 'password-manager', website: 'https://www.dashlane.com', blurb: 'Password manager and VPN.', priceHook: 'premium pricing for basic vaults' },
  { slug: 'hashicorp-vault', name: 'HashiCorp Vault', categorySlug: 'password-manager', website: 'https://www.vaultproject.io', blurb: 'Enterprise secrets management.', priceHook: 'BSL relicensing and enterprise costs' },

  // ── Email & Newsletters ──────────────────────────────────────────────────
  { slug: 'mailchimp', name: 'Mailchimp', categorySlug: 'email-newsletter', website: 'https://mailchimp.com', blurb: 'Email marketing and newsletters.', priceHook: 'list-size pricing that escalates fast' },
  { slug: 'sendgrid', name: 'SendGrid', categorySlug: 'email-newsletter', website: 'https://sendgrid.com', blurb: 'Transactional and marketing email API.', priceHook: 'per-email costs at scale' },
  { slug: 'gmail', name: 'Gmail / Google Workspace', categorySlug: 'email-newsletter', website: 'https://workspace.google.com', blurb: 'Hosted business email.', priceHook: 'per-mailbox fees and data privacy' },
  { slug: 'convertkit', name: 'ConvertKit (Kit)', categorySlug: 'email-newsletter', website: 'https://kit.com', blurb: 'Creator newsletter platform.', priceHook: 'subscriber-count pricing' },

  // ── Project Management & Kanban ──────────────────────────────────────────
  { slug: 'trello', name: 'Trello', categorySlug: 'project-management', website: 'https://trello.com', blurb: 'Kanban boards.', priceHook: 'paywalls on power-ups and automation' },
  { slug: 'asana', name: 'Asana', categorySlug: 'project-management', website: 'https://asana.com', blurb: 'Work and task management.', priceHook: 'per-seat pricing for teams' },
  { slug: 'jira', name: 'Jira', categorySlug: 'project-management', website: 'https://www.atlassian.com/software/jira', blurb: 'Agile issue tracking.', priceHook: 'Atlassian licensing and complexity' },
  { slug: 'monday', name: 'monday.com', categorySlug: 'project-management', website: 'https://monday.com', blurb: 'Visual work-OS boards.', priceHook: 'minimum-seat requirements' },
  { slug: 'linear', name: 'Linear', categorySlug: 'project-management', website: 'https://linear.app', blurb: 'Issue tracking for software teams.', priceHook: 'per-user pricing and cloud-only data' },
  { slug: 'basecamp', name: 'Basecamp', categorySlug: 'project-management', website: 'https://basecamp.com', blurb: 'All-in-one project management.', priceHook: 'flat fee that still rules out self-hosting' },

  // ── File Storage & Sync ──────────────────────────────────────────────────
  { slug: 'dropbox', name: 'Dropbox', categorySlug: 'file-storage', website: 'https://www.dropbox.com', blurb: 'File sync and sharing.', priceHook: 'storage caps and rising prices' },
  { slug: 'google-drive', name: 'Google Drive', categorySlug: 'file-storage', website: 'https://drive.google.com', blurb: 'Cloud file storage.', priceHook: 'data on Google and storage upsells' },
  { slug: 'box', name: 'Box', categorySlug: 'file-storage', website: 'https://www.box.com', blurb: 'Enterprise content cloud.', priceHook: 'enterprise per-user pricing' },

  // ── Team Chat & Collaboration ────────────────────────────────────────────
  { slug: 'slack', name: 'Slack', categorySlug: 'team-chat', website: 'https://slack.com', blurb: 'Team messaging.', priceHook: 'per-seat pricing and a capped message history' },
  { slug: 'discord', name: 'Discord', categorySlug: 'team-chat', website: 'https://discord.com', blurb: 'Community chat and voice.', priceHook: 'no data ownership or self-hosting' },
  { slug: 'microsoft-teams', name: 'Microsoft Teams', categorySlug: 'team-chat', website: 'https://www.microsoft.com/microsoft-teams', blurb: 'Enterprise chat and meetings.', priceHook: 'Microsoft 365 lock-in' },

  // ── Forms & Surveys ──────────────────────────────────────────────────────
  { slug: 'typeform', name: 'Typeform', categorySlug: 'forms-surveys', website: 'https://www.typeform.com', blurb: 'Conversational forms and surveys.', priceHook: 'response limits and per-form pricing' },
  { slug: 'google-forms', name: 'Google Forms', categorySlug: 'forms-surveys', website: 'https://forms.google.com', blurb: 'Free Google form builder.', priceHook: 'data on Google and limited design' },
  { slug: 'surveymonkey', name: 'SurveyMonkey', categorySlug: 'forms-surveys', website: 'https://www.surveymonkey.com', blurb: 'Surveys and questionnaires.', priceHook: 'expensive plans for basic exports' },
  { slug: 'jotform', name: 'Jotform', categorySlug: 'forms-surveys', website: 'https://www.jotform.com', blurb: 'Online form builder.', priceHook: 'submission caps on paid tiers' },

  // ── Helpdesk & Support ───────────────────────────────────────────────────
  { slug: 'zendesk', name: 'Zendesk', categorySlug: 'helpdesk', website: 'https://www.zendesk.com', blurb: 'Customer support ticketing.', priceHook: 'per-agent pricing that adds up' },
  { slug: 'intercom', name: 'Intercom', categorySlug: 'helpdesk', website: 'https://www.intercom.com', blurb: 'Live chat and support suite.', priceHook: 'usage-based pricing that surprises' },
  { slug: 'freshdesk', name: 'Freshdesk', categorySlug: 'helpdesk', website: 'https://www.freshworks.com/freshdesk', blurb: 'Helpdesk and ticketing.', priceHook: 'per-agent tiers' },

  // ── BI & Dashboards ──────────────────────────────────────────────────────
  { slug: 'tableau', name: 'Tableau', categorySlug: 'bi-dashboards', website: 'https://www.tableau.com', blurb: 'Data visualization and BI.', priceHook: 'expensive per-creator licensing' },
  { slug: 'looker', name: 'Looker', categorySlug: 'bi-dashboards', website: 'https://cloud.google.com/looker', blurb: 'Google Cloud BI platform.', priceHook: 'enterprise-only pricing' },
  { slug: 'power-bi', name: 'Power BI', categorySlug: 'bi-dashboards', website: 'https://powerbi.microsoft.com', blurb: 'Microsoft BI and dashboards.', priceHook: 'per-user pricing and Microsoft lock-in' },

  // ── Monitoring & Status Pages ────────────────────────────────────────────
  { slug: 'datadog', name: 'Datadog', categorySlug: 'monitoring', website: 'https://www.datadoghq.com', blurb: 'Infrastructure and app monitoring.', priceHook: 'host- and usage-based bills that spike' },
  { slug: 'pingdom', name: 'Pingdom', categorySlug: 'monitoring', website: 'https://www.pingdom.com', blurb: 'Uptime and performance monitoring.', priceHook: 'check-count pricing' },
  { slug: 'statuspage', name: 'Statuspage', categorySlug: 'monitoring', website: 'https://www.atlassian.com/software/statuspage', blurb: 'Hosted status pages.', priceHook: 'subscriber-based pricing' },
  { slug: 'uptimerobot', name: 'UptimeRobot', categorySlug: 'monitoring', website: 'https://uptimerobot.com', blurb: 'Simple uptime monitoring.', priceHook: 'monitor and interval limits' },

  // ── Scheduling & Booking ─────────────────────────────────────────────────
  { slug: 'calendly', name: 'Calendly', categorySlug: 'scheduling', website: 'https://calendly.com', blurb: 'Meeting scheduling links.', priceHook: 'per-seat fees for multiple event types' },
  { slug: 'acuity', name: 'Acuity Scheduling', categorySlug: 'scheduling', website: 'https://acuityscheduling.com', blurb: 'Appointment booking (Squarespace).', priceHook: 'monthly subscriptions per calendar' },

  // ── Self-Hosting Platforms & PaaS ────────────────────────────────────────
  { slug: 'heroku', name: 'Heroku', categorySlug: 'paas-deploy', website: 'https://www.heroku.com', blurb: 'Git-push app hosting.', priceHook: 'killed its free tier and raised prices' },
  { slug: 'vercel', name: 'Vercel', categorySlug: 'paas-deploy', website: 'https://vercel.com', blurb: 'Frontend / serverless hosting.', priceHook: 'bandwidth and function overage bills' },
  { slug: 'netlify', name: 'Netlify', categorySlug: 'paas-deploy', website: 'https://www.netlify.com', blurb: 'Jamstack hosting and functions.', priceHook: 'surprise bandwidth overages' },
  { slug: 'render', name: 'Render', categorySlug: 'paas-deploy', website: 'https://render.com', blurb: 'Cloud app hosting.', priceHook: 'usage-based costs as you grow' },

  // ── Media Servers & Streaming ────────────────────────────────────────────
  { slug: 'plex', name: 'Plex', categorySlug: 'media-server', website: 'https://www.plex.tv', blurb: 'Media server for movies, TV, and music.', priceHook: 'a Plex Pass subscription and cloud-account lock-in' },
  { slug: 'spotify', name: 'Spotify', categorySlug: 'media-server', website: 'https://www.spotify.com', blurb: 'Music streaming.', priceHook: 'monthly fees and no ownership of your library' },
  { slug: 'netflix', name: 'Netflix', categorySlug: 'media-server', website: 'https://www.netflix.com', blurb: 'Video streaming.', priceHook: 'rising prices and a catalog that changes under you' },

  // ── Photo Management ─────────────────────────────────────────────────────
  { slug: 'google-photos', name: 'Google Photos', categorySlug: 'photos', website: 'https://photos.google.com', blurb: 'Cloud photo backup and library.', priceHook: 'storage upsells and your photos on Google’s servers' },
  { slug: 'icloud-photos', name: 'iCloud Photos', categorySlug: 'photos', website: 'https://www.icloud.com', blurb: 'Apple cloud photo library.', priceHook: 'iCloud storage fees and Apple lock-in' },

  // ── Blogging & CMS ───────────────────────────────────────────────────────
  { slug: 'wordpress-com', name: 'WordPress.com', categorySlug: 'blog-cms', website: 'https://wordpress.com', blurb: 'Hosted WordPress blogging.', priceHook: 'plan limits and upsells for basic features' },
  { slug: 'medium', name: 'Medium', categorySlug: 'blog-cms', website: 'https://medium.com', blurb: 'Publishing platform.', priceHook: 'paywalls and zero ownership of your audience' },
  { slug: 'substack', name: 'Substack', categorySlug: 'blog-cms', website: 'https://substack.com', blurb: 'Newsletter publishing.', priceHook: 'a 10% cut of your subscription revenue' },
  { slug: 'squarespace', name: 'Squarespace', categorySlug: 'blog-cms', website: 'https://www.squarespace.com', blurb: 'Website builder.', priceHook: 'monthly fees and a closed platform' },
  { slug: 'contentful', name: 'Contentful', categorySlug: 'blog-cms', website: 'https://www.contentful.com', blurb: 'Headless CMS.', priceHook: 'steep pricing past the free tier' },

  // ── Feeds & Read-Later ───────────────────────────────────────────────────
  { slug: 'feedly', name: 'Feedly', categorySlug: 'read-later-feeds', website: 'https://feedly.com', blurb: 'RSS feed reader.', priceHook: 'pro fees for basic features and source limits' },
  { slug: 'pocket', name: 'Pocket', categorySlug: 'read-later-feeds', website: 'https://getpocket.com', blurb: 'Read-it-later service.', priceHook: 'shut down by Mozilla — saved articles at risk' },
  { slug: 'instapaper', name: 'Instapaper', categorySlug: 'read-later-feeds', website: 'https://www.instapaper.com', blurb: 'Save articles to read later.', priceHook: 'premium fees and uncertain longevity' },
  { slug: 'raindrop', name: 'Raindrop.io', categorySlug: 'read-later-feeds', website: 'https://raindrop.io', blurb: 'Bookmark manager.', priceHook: 'pro subscription for full-text search and backups' },

  // ── AI & LLM Tools ───────────────────────────────────────────────────────
  { slug: 'chatgpt', name: 'ChatGPT', categorySlug: 'ai-llm', website: 'https://chat.openai.com', blurb: 'Hosted AI chat assistant.', priceHook: 'monthly fees and your prompts leaving your machine' },
  { slug: 'openai-api', name: 'OpenAI API', categorySlug: 'ai-llm', website: 'https://openai.com', blurb: 'Hosted LLM API.', priceHook: 'per-token billing and data sent to a third party' },

  // ── Finance & Budgeting ──────────────────────────────────────────────────
  { slug: 'mint', name: 'Mint', categorySlug: 'finance-budget', website: 'https://mint.intuit.com', blurb: 'Personal budgeting (discontinued).', priceHook: 'shut down by Intuit — your data went with it' },
  { slug: 'ynab', name: 'YNAB', categorySlug: 'finance-budget', website: 'https://www.ynab.com', blurb: 'You Need A Budget.', priceHook: 'a yearly subscription that keeps climbing' },
  { slug: 'quickbooks', name: 'QuickBooks', categorySlug: 'finance-budget', website: 'https://quickbooks.intuit.com', blurb: 'Small-business accounting.', priceHook: 'per-seat Intuit pricing and lock-in' },

  // ── Git Hosting & Dev (head competitors with real search volume) ─────────
  { slug: 'github', name: 'GitHub', categorySlug: 'project-management', website: 'https://github.com', blurb: 'Git hosting, code review, issues, and CI/CD.', priceHook: 'per-seat pricing for private orgs and Microsoft ownership' },
  { slug: 'gitlab', name: 'GitLab', categorySlug: 'project-management', website: 'https://gitlab.com', blurb: 'DevOps platform with Git hosting and CI/CD.', priceHook: 'steep per-user tiers for advanced features' },
]

export const PROPRIETARY_SLUGS = PROPRIETARY_TOOLS.map((p) => p.slug)

export const proprietaryBySlug = (slug: string): ProprietaryToolSeed | undefined =>
  PROPRIETARY_TOOLS.find((p) => p.slug === slug)

/** Suffix that turns a proprietary slug into its alternatives-page slug. */
export const ALTERNATIVES_SUFFIX = '-alternatives'

export const alternativesSlug = (proprietarySlug: string): string =>
  `${proprietarySlug}${ALTERNATIVES_SUFFIX}`

/** If `slug` looks like "notion-alternatives", return "notion"; else null. */
export const parseAlternativesSlug = (slug: string): string | null => {
  if (!slug.endsWith(ALTERNATIVES_SUFFIX)) return null
  const base = slug.slice(0, -ALTERNATIVES_SUFFIX.length)
  return base || null
}
