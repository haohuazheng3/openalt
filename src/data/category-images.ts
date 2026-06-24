/**
 * Pexels hero images per category — fetched once via the Pexels API (free license,
 * no attribution required but we credit the photographer). Stored as code so pages
 * stay static. Re-run /tmp/pexels-fetch.cjs to refresh.
 */
export type CategoryImage = { slug: string; url: string; alt: string; photographer: string; photographerUrl: string; pexelsUrl: string }

export const CATEGORY_IMAGES: CategoryImage[] = [
  {
    "slug": "notes-docs",
    "url": "https://images.pexels.com/photos/204511/pexels-photo-204511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A warm, inviting workspace featuring coffee, handwritten notes, and a pen on the desk.",
    "photographer": "David Bares",
    "photographerUrl": "https://www.pexels.com/@david-bares-42311",
    "pexelsUrl": "https://www.pexels.com/photo/closeup-photo-of-blue-pen-tinted-spiral-notepad-placed-beside-pen-die-cast-car-and-coffee-cup-204511/"
  },
  {
    "slug": "database-spreadsheet",
    "url": "https://images.pexels.com/photos/7947999/pexels-photo-7947999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Focused business analysis with charts and graphs on a laptop in a modern office setting.",
    "photographer": "RDNE Stock project",
    "photographerUrl": "https://www.pexels.com/@rdne",
    "pexelsUrl": "https://www.pexels.com/photo/person-using-black-and-gray-laptop-7947999/"
  },
  {
    "slug": "automation",
    "url": "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Close-up view of a complex industrial gear mechanism in black and white.",
    "photographer": "Pixabay",
    "photographerUrl": "https://www.pexels.com/@pixabay",
    "pexelsUrl": "https://www.pexels.com/photo/gray-scale-photo-of-gears-159298/"
  },
  {
    "slug": "crm",
    "url": "https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Business professionals engaging in a collaborative meeting with charts and documents.",
    "photographer": "Yan Krukau",
    "photographerUrl": "https://www.pexels.com/@yankrukov",
    "pexelsUrl": "https://www.pexels.com/photo/businesspeople-brainstorming-in-a-meeting-7693692/"
  },
  {
    "slug": "analytics",
    "url": "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Abstract visualization of data analytics with graphs and charts showing dynamic growth.",
    "photographer": "Negative Space",
    "photographerUrl": "https://www.pexels.com/@negativespace",
    "pexelsUrl": "https://www.pexels.com/photo/blue-and-green-pie-chart-97080/"
  },
  {
    "slug": "password-manager",
    "url": "https://images.pexels.com/photos/15049670/pexels-photo-15049670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Close-up of a steel padlock on a mesh fence, symbolizing protection and security.",
    "photographer": "Connor Scott McManus",
    "photographerUrl": "https://www.pexels.com/@connorscottmcmanus",
    "pexelsUrl": "https://www.pexels.com/photo/padlock-hanging-on-mesh-fence-15049670/"
  },
  {
    "slug": "email-newsletter",
    "url": "https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Close-up of a laptop with an open e-commerce website, surrounded by modern office decor.",
    "photographer": "Shoper .pl",
    "photographerUrl": "https://www.pexels.com/@shoper-pl-550490863",
    "pexelsUrl": "https://www.pexels.com/photo/shoper-website-opened-on-the-computer-16675632/"
  },
  {
    "slug": "project-management",
    "url": "https://images.pexels.com/photos/6804093/pexels-photo-6804093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Top-down view of an office Kanban board with colorful sticky notes for task management and organization.",
    "photographer": "cottonbro studio",
    "photographerUrl": "https://www.pexels.com/@cottonbro",
    "pexelsUrl": "https://www.pexels.com/photo/sticky-notes-on-the-task-board-wall-6804093/"
  },
  {
    "slug": "file-storage",
    "url": "https://images.pexels.com/photos/17489157/pexels-photo-17489157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Detailed view of a server rack with a focus on technology and data storage.",
    "photographer": "panumas nikhomkhai",
    "photographerUrl": "https://www.pexels.com/@cookiecutter",
    "pexelsUrl": "https://www.pexels.com/photo/close-up-of-computer-hardware-17489157/"
  },
  {
    "slug": "team-chat",
    "url": "https://images.pexels.com/photos/7212946/pexels-photo-7212946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A group of people discussing ideas around laptops in a bright, modern office space.",
    "photographer": "Ivan S",
    "photographerUrl": "https://www.pexels.com/@ivan-s",
    "pexelsUrl": "https://www.pexels.com/photo/colleagues-using-a-laptop-7212946/"
  },
  {
    "slug": "forms-surveys",
    "url": "https://images.pexels.com/photos/9064799/pexels-photo-9064799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A person writes on a document using a clipboard indoors.",
    "photographer": "RDNE Stock project",
    "photographerUrl": "https://www.pexels.com/@rdne",
    "pexelsUrl": "https://www.pexels.com/photo/person-holding-a-pen-9064799/"
  },
  {
    "slug": "helpdesk",
    "url": "https://images.pexels.com/photos/8867405/pexels-photo-8867405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A diverse group of customer service representatives wearing headsets in a modern office.",
    "photographer": "Yan Krukau",
    "photographerUrl": "https://www.pexels.com/@yankrukov",
    "pexelsUrl": "https://www.pexels.com/photo/four-people-wearing-headphones-8867405/"
  },
  {
    "slug": "bi-dashboards",
    "url": "https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A laptop showing an analytics dashboard with charts and graphs, symbolizing modern data analysis tools.",
    "photographer": "Negative Space",
    "photographerUrl": "https://www.pexels.com/@negativespace",
    "pexelsUrl": "https://www.pexels.com/photo/marketing-iphone-smartphone-notebook-34069/"
  },
  {
    "slug": "monitoring",
    "url": "https://images.pexels.com/photos/37605911/pexels-photo-37605911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "An IT professional operates a computer in a server room, managing network systems and connected devices.",
    "photographer": "panumas nikhomkhai",
    "photographerUrl": "https://www.pexels.com/@cookiecutter",
    "pexelsUrl": "https://www.pexels.com/photo/it-technician-working-in-data-center-server-room-37605911/"
  },
  {
    "slug": "scheduling",
    "url": "https://images.pexels.com/photos/11773871/pexels-photo-11773871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Close-up shot of a hand marking a date on a calendar with a pen, emphasizing planning and scheduling.",
    "photographer": "Towfiqu barbhuiya",
    "photographerUrl": "https://www.pexels.com/@towfiqu-barbhuiya-3440682",
    "pexelsUrl": "https://www.pexels.com/photo/a-person-holding-black-pen-pointing-on-calendar-11773871/"
  },
  {
    "slug": "paas-deploy",
    "url": "https://images.pexels.com/photos/17489160/pexels-photo-17489160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Detailed image of illuminated server racks showcasing modern technology infrastructure.",
    "photographer": "panumas nikhomkhai",
    "photographerUrl": "https://www.pexels.com/@cookiecutter",
    "pexelsUrl": "https://www.pexels.com/photo/box-server-illuminated-on-blue-17489160/"
  },
  {
    "slug": "media-server",
    "url": "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Smart TV displaying streaming content in modern living room setting with exposed brick wall.",
    "photographer": "www.kaboompics.com",
    "photographerUrl": "https://www.pexels.com/@karola-g",
    "pexelsUrl": "https://www.pexels.com/photo/black-flat-screen-tv-hanging-on-the-white-wall-5202925/"
  },
  {
    "slug": "photos",
    "url": "https://images.pexels.com/photos/14530950/pexels-photo-14530950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Close-up view of diverse vintage cameras displayed in a glass case, showcasing classic camera designs.",
    "photographer": "David Guerrero",
    "photographerUrl": "https://www.pexels.com/@davidguerrero",
    "pexelsUrl": "https://www.pexels.com/photo/collection-of-vintage-cameras-14530950/"
  },
  {
    "slug": "blog-cms",
    "url": "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Hands typing on a laptop with a blog post visible, cozy indoor setting with colorful screen in background.",
    "photographer": "Pixabay",
    "photographerUrl": "https://www.pexels.com/@pixabay",
    "pexelsUrl": "https://www.pexels.com/photo/close-up-of-typing-on-a-laptop-261662/"
  },
  {
    "slug": "read-later-feeds",
    "url": "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A man uses a tablet to browse news while enjoying a cup of coffee, stylus in hand.",
    "photographer": "Karolina Grabowska www.kaboompics.com",
    "photographerUrl": "https://www.pexels.com/@karola-g2",
    "pexelsUrl": "https://www.pexels.com/photo/man-using-stylus-pen-for-touching-the-digital-tablet-screen-6335/"
  },
  {
    "slug": "ai-llm",
    "url": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A futuristic humanoid robot in an indoor Tokyo setting, showcasing modern technology.",
    "photographer": "Alex Knight",
    "photographerUrl": "https://www.pexels.com/@agk42",
    "pexelsUrl": "https://www.pexels.com/photo/high-angle-photo-of-robot-2599244/"
  },
  {
    "slug": "finance-budget",
    "url": "https://images.pexels.com/photos/5900184/pexels-photo-5900184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Adult holding cash and writing in planner while using a calculator at home.",
    "photographer": "www.kaboompics.com",
    "photographerUrl": "https://www.pexels.com/@karola-g",
    "pexelsUrl": "https://www.pexels.com/photo/person-writing-on-a-notebook-while-holding-money-5900184/"
  }
]

export const imageForCategory = (slug: string): CategoryImage | null =>
  CATEGORY_IMAGES.find((i) => i.slug === slug) ?? null
