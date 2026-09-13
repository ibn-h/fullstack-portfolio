// All visible section copy, in the same order as the page layout.

import { site } from "./site";

export const content = {
  hero: {
    greeting: `Hi, I'm ${site.name} —`,
    tagline:
      "Your idea, built and live — by one developer who plans before he codes.",
    subtitle:
      "I build web apps and SaaS products for startups and small businesses. Every project starts with a written spec, so you know exactly what you're getting before I write a line of code.",
    cta: {
      primary: { label: "Let's talk", href: "#contact" },
      secondary: { label: "See my work ↓", href: "#projects" },
    },
    badge: "Available",
    process: {
      label: "How I work",
      summary: "Three applications shipped",
      steps: [
        {
          title: "Plan",
          description: "A written spec you approve before I write any code.",
        },
        {
          title: "Build",
          description:
            "Working features you can test every week, not a surprise at the end.",
        },
        {
          title: "Launch",
          description: "Live on your domain, with documentation to hand over.",
        },
      ],
      stackLabel: "Stack",
      stack: [
        "Full-stack Next.js",
        "Databases",
        "Authentication",
        "AI integration",
        "Real-time",
      ],
    },
  },

  about: {
    label: "About me",
    // The first paragraph is rendered as the larger lead-in.
    paragraphs: [
      `I'm ${site.name}, a self-taught full-stack developer with two years of experience building web applications.`,
      "One of my recent projects is Y2Notion, a SaaS tool that summarizes YouTube videos and saves them directly to Notion. I like to work in a structured way — every project starts with documentation, and I only write code once I have a clear plan and defined feature specs.",
      "Alongside development, I worked at an IT helpdesk, an experience that sharpened my problem-solving and communication skills.",
    ],
    stats: [
      { value: "2+", label: "Years coding" },
      { value: "3", label: "Projects shipped" },
      { value: "19", label: "years old" },
    ],
    availability: {
      text: "Currently available for freelance projects. Have something in mind?",
      cta: { label: "Let's talk", href: "#contact" },
    },
  },

  projects: {
    heading: "Projects",
    // TODO: add a subtitle. It isn't rendered while empty.
    subtitle: "",
    featuredLabel: "Featured project",
    links: {
      live: "Live",
      source: "View source on GitHub",
      caseStudy: "Case study",
    },
  },

  contact: {
    badge: "Available for new projects",
    heading: "Have something in mind?",
    subtitle:
      "Tell me about your project and I'll get back to you within 24 hours.",
    form: {
      fields: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@company.com" },
        message: {
          label: "Message",
          placeholder: "Tell me about your project...",
        },
      },
      submit: "Send message",
      submitting: "Sending...",
      errors: {
        nameRequired: "Please enter your name.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "That doesn't look like a valid email address.",
        messageRequired: "Please tell me a bit about your project.",
        sendFailed: "Something went wrong — please try again.",
      },
      success: {
        heading: "Message sent",
        body: "Thanks for reaching out — I'll reply within 24 hours.",
        reset: "Send another message",
      },
    },
  },

  footer: {
    tagline:
      "Full-stack developer building web apps that ship — from first sketch to production.",
    badge: "Available for new projects",
    navLabel: "Navigate",
    socialsLabel: "Elsewhere",
    // `{year}` is replaced with the current year.
    copyright: `© {year} ${site.name}. Built with Next.js and Tailwind.`,
    backToTop: "Back to top",
  },

  projectDetail: {
    backLink: { label: "Projects", href: "/#projects" },
    sidebar: {
      role: "Role",
      // Only shown for projects with a non-empty timeline.
      timeline: "Timeline",
      stack: "Stack",
      live: "Live site",
      source: "Source",
    },
    // Rendered in this order; `id` matches a key of the project's caseStudy.
    caseStudy: [
      { id: "problem", title: "Problem" },
      { id: "approach", title: "Approach" },
      { id: "challenge", title: "Challenge" },
      { id: "result", title: "Result" },
    ],
  },
} as const;
