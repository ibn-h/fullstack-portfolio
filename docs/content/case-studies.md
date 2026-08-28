## Y2Notion

### Problem

I use YouTube a lot and sometimes come across useful information I want to save for later. My usual workflow was copying the transcript, pasting it into AI for a summary, and then saving it to Notion — but after doing this many times, I decided to build a tool that automates all three steps.

### Approach

I started with a documentation-first approach, writing out the core features and a step-by-step implementation plan before touching any code. The two features I identified were the YouTube-to-Markdown converter and the save-to-Notion integration.

For the stack, I went with Next.js because it combines frontend and backend in one framework, and Groq for AI summarization because it doesn't require a paid subscription.

To stay focused during each session, I tracked tasks in a simple `TODO.md` file — picking 2-4 tasks per session and moving them to Done when finished.

### Challenge

For retrieving transcripts, I originally used `youtube-transcript-plus`, but after deploying to production I started getting errors — YouTube only allows requests from browsers, not servers. I switched to Supadata, which handled server-side requests without any issues.

### Result

By pasting a URL, Y2Notion generates a concise Markdown summary with the option to save it directly to Notion. It does exactly what I envisioned — and I use it myself every time I need a video summarized.

## Hairsalon Booking System

### Problem

Many barbers handle appointments manually through WhatsApp or phone calls. This works for a small number of clients, but becomes difficult to manage as bookings grow. It's also inconvenient for the customer, who has to call during opening hours and wait for a confirmation. A reservation system solves both problems.

### Approach

Just like my previous project, I took a documentation-first approach, writing a project description and determining the MVP before touching any code. This time I also introduced feature spec files — documents that describe each feature with a user story and acceptance criteria. This made it easy to know exactly when a feature was finished without adding unnecessary extras.

For the stack I used Supabase as my Postgres database, storing reservations and a rate limits table to prevent spam. For email notifications I used Resend, which allowed me to send templated emails to both the customer and barber whenever a booking was made.

### Challenge

I spent a lot of time debugging an issue with Row-Level Security (RLS) in Supabase. After enabling it, my queries stopped working — but instead of throwing an error, they just returned an empty array. The lesson: always plan your RLS policies before building the database layer.

### Result

The end result is a fully working reservation system with an intuitive protected dashboard. Customers can book their preferred timeslot, and the barber receives a notification with the details. From the dashboard, the barber can view all reservations, filter by status or date, and cancel bookings when necessary.

---

## Warehouse Insights

### Problem

Most warehouses work with multiple disconnected systems for managing orders and inventory. This spreads data across different locations, making it difficult to get a clear overview or perform actions like updating stock when an order is placed. Warehouse Insights solves this by bringing everything into one real-time dashboard.

### Approach

For the MVP I identified seven core features: a KPI dashboard, orders and inventory overview pages, a product detail page, authentication, real-time data, and notifications. Each feature had its own spec file with a user story and acceptance criteria, so I always knew exactly what I was building and when it was done.

For real-time functionality I used Pusher, and for authentication I used Auth.js with Google as the provider. I also kept a `backlog.md` file as a checklist to track progress across all features.

### Challenge

Pusher's documentation doesn't cover Next.js specifically, which made the implementation difficult to figure out. After working through it I got a solid understanding of how to integrate real-time functionality into a Next.js application. I also noticed a tendency to refactor code mid-session — while not inherently bad, it pulled focus away from the MVP and wasted time better spent on core features.

### Result

Warehouse Insights ended up better than expected — a real-time dashboard that gives warehouse managers a clear, centralized view of their operations. The application is cleanly structured under a `/dashboard` route with an intuitive sidebar for navigating between overviews, making it easy to monitor stock, track orders, and act on live notifications.