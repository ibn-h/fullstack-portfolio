export interface Screenshot {
  src: string;
  alt: string;
}

/** Each entry is one paragraph. */
export interface CaseStudy {
  problem: string[];
  approach: string[];
  challenge: string[];
  result: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  heroImage: Screenshot;
  gallery: Screenshot[];
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "y2notion",
    title: "Y2Notion",
    tagline:
      "Converts YouTube videos into structured Markdown summaries using AI, with one-click save to Notion.",
    role: "Solo developer",
    stack: ["Next.js", "Groq API", "Notion API", "TypeScript", "Supadata"],
    liveUrl: "https://y2notion.com",
    githubUrl: "https://github.com/jouwusername/y2notion",
    featured: true,
    heroImage: {
      src: "/screenshots/y2notion-homepage.png",
      alt: "Y2Notion homepage with a YouTube link pasted into the input next to the Summarize button",
    },
    gallery: [
      {
        src: "/screenshots/y2notion-homepage-summary.png",
        alt: "Notion location picker opened above a summary, with the YouTube Summaries page selected",
      },
      {
        src: "/screenshots/y2notion-summary.png",
        alt: "Generated Markdown summary of a JavaScript video with Copy and Save to Notion actions",
      },
    ],
    caseStudy: {
      problem: [
        "I use YouTube a lot and sometimes come across useful information I want to save for later. My usual workflow was copying the transcript, pasting it into AI for a summary, and then saving it to Notion — but after doing this many times, I decided to build a tool that automates all three steps.",
      ],
      approach: [
        "I started with a documentation-first approach, writing out the core features and a step-by-step implementation plan before touching any code. The two features I identified were the YouTube-to-Markdown converter and the save-to-Notion integration.",
        "For the stack, I went with Next.js because it combines frontend and backend in one framework, and Groq for AI summarization because it doesn't require a paid subscription.",
        "To stay focused during each session, I tracked tasks in a simple TODO.md file — picking 2-4 tasks per session and moving them to Done when finished.",
      ],
      challenge: [
        "For retrieving transcripts, I originally used youtube-transcript-plus, but after deploying to production I started getting errors — YouTube only allows requests from browsers, not servers. I switched to Supadata, which handled server-side requests without any issues.",
      ],
      result: [
        "By pasting a URL, Y2Notion generates a concise Markdown summary with the option to save it directly to Notion. It does exactly what I envisioned — and I use it myself every time I need a video summarized.",
      ],
    },
  },
  {
    slug: "hairsalon-booking",
    title: "Hairsalon booking",
    tagline:
      "Reservation system with email confirmations and a protected barber dashboard.",
    role: "Solo developer",
    stack: ["Next.js", "Supabase", "Resend"],
    liveUrl: "https://theblade.com",
    githubUrl: "https://github.com/jouwusername/hairsalon",
    heroImage: {
      src: "/screenshots/hairsalon-homepage.png",
      alt: "The Blade barbershop homepage with a Book your appointment button",
    },
    gallery: [
      {
        src: "/screenshots/hairsalon-form.png",
        alt: "Reservation form with name, phone, email, service, date and timeslot fields",
      },
      {
        src: "/screenshots/hairsalon-dashboard.png",
        alt: "Barber dashboard listing reservations by date and timeslot, with status and date filters",
      },
    ],
    caseStudy: {
      problem: [
        "Many barbers handle appointments manually through WhatsApp or phone calls. This works for a small number of clients, but becomes difficult to manage as bookings grow. It's also inconvenient for the customer, who has to call during opening hours and wait for a confirmation. A reservation system solves both problems.",
      ],
      approach: [
        "Just like my previous project, I took a documentation-first approach, writing a project description and determining the MVP before touching any code. This time I also introduced feature spec files — documents that describe each feature with a user story and acceptance criteria. This made it easy to know exactly when a feature was finished without adding unnecessary extras.",
        "For the stack I used Supabase as my Postgres database, storing reservations and a rate limits table to prevent spam. For email notifications I used Resend, which allowed me to send templated emails to both the customer and barber whenever a booking was made.",
      ],
      challenge: [
        "I spent a lot of time debugging an issue with Row-Level Security (RLS) in Supabase. After enabling it, my queries stopped working — but instead of throwing an error, they just returned an empty array. The lesson: always plan your RLS policies before building the database layer.",
      ],
      result: [
        "The end result is a fully working reservation system with an intuitive protected dashboard. Customers can book their preferred timeslot, and the barber receives a notification with the details. From the dashboard, the barber can view all reservations, filter by status or date, and cancel bookings when necessary.",
      ],
    },
  },
  {
    slug: "warehouse-insights",
    title: "Warehouse Insights",
    tagline:
      "Real-time KPI dashboard with live order tracking and instant notifications.",
    role: "Solo developer",
    stack: ["Next.js", "Pusher", "Auth.js"],
    liveUrl: "https://warehouse-insights.com",
    githubUrl: "https://github.com/jouwusername/warehouse-insights",
    heroImage: {
      src: "/screenshots/warehouse-insights-dashboard.png",
      alt: "Warehouse Insights dashboard with KPI cards for today's orders, open and completed orders, inventory and low stock",
    },
    // TODO: add the remaining screenshots once they're taken
    gallery: [
      {
        src: "/screenshots/warehouse-orders.png",
        alt: "Orders overview with search, a status filter and an editable status per order",
      },
    ],
    caseStudy: {
      problem: [
        "Most warehouses work with multiple disconnected systems for managing orders and inventory. This spreads data across different locations, making it difficult to get a clear overview or perform actions like updating stock when an order is placed. Warehouse Insights solves this by bringing everything into one real-time dashboard.",
      ],
      approach: [
        "For the MVP I identified seven core features: a KPI dashboard, orders and inventory overview pages, a product detail page, authentication, real-time data, and notifications. Each feature had its own spec file with a user story and acceptance criteria, so I always knew exactly what I was building and when it was done.",
        "For real-time functionality I used Pusher, and for authentication I used Auth.js with Google as the provider. I also kept a backlog.md file as a checklist to track progress across all features.",
      ],
      challenge: [
        "Pusher's documentation doesn't cover Next.js specifically, which made the implementation difficult to figure out. After working through it I got a solid understanding of how to integrate real-time functionality into a Next.js application. I also noticed a tendency to refactor code mid-session — while not inherently bad, it pulled focus away from the MVP and wasted time better spent on core features.",
      ],
      result: [
        "Warehouse Insights ended up better than expected — a real-time dashboard that gives warehouse managers a clear, centralized view of their operations. The application is cleanly structured under a /dashboard route with an intuitive sidebar for navigating between overviews, making it easy to monitor stock, track orders, and act on live notifications.",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
