// All visible copy in English, in the same order as the page layout.
// English is the source shape: nl.ts must match it key for key.

import { site } from "@/lib/site";

export const en = {
  meta: {
    role: "Full-stack developer",
    // Default meta description — keep it under ~155 characters.
    description: `${site.name} is a full-stack developer building web apps and SaaS products with Next.js for startups and small businesses, planned, built and launched.`,
    home: "Home",
  },

  nav: {
    projects: "Projects",
    about: "About",
    contact: "Contact",
    mainLabel: "Main",
    footerLabel: "Footer",
  },

  header: {
    cta: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },

  hero: {
    greeting: `Hi, I'm ${site.name},`,
    tagline: "Next.js developer for startups and small businesses.",
    // Part of the tagline shown in the primary color; must appear in it verbatim.
    taglineHighlight: "startups and small businesses",
    subtitle:
      "I build web apps and SaaS products for startups and small businesses. Every project starts with a written spec, so you know exactly what you're getting before I write a line of code.",
    cta: {
      primary: { label: "Let's talk", href: "#contact" },
      secondary: { label: "See my work ↓", href: "#projects" },
    },
    badge: "Available",
    profile: {
      label: "About me at a glance",
      // Terminal window chrome around the profile; the prompt user is site.name.
      terminal: {
        title: "profile.txt",
        host: "portfolio",
        profileCommand: "whoami",
        stackCommand: "cat stack.txt",
      },
      // Rendered as a two-column table, in this order.
      rows: [
        { label: "Role", value: "Full-stack developer" },
        { label: "Age", value: "19" },
        { label: "Experience", value: "2+ years, self-taught" },
        { label: "Shipped", value: "3 applications" },
        { label: "Languages", value: "Dutch, English" },
        { label: "Response time", value: "Within 24 hours" },
      ],
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
      "One of my recent projects is Y2Notion, a SaaS tool that summarizes YouTube videos and saves them directly to Notion. I like to work in a structured way: every project starts with documentation, and I only write code once I have a clear plan and defined feature specs.",
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
    viewAll: "View all projects",
  },

  projectsPage: {
    heading: "Projects",
    subtitle:
      "Every project here started as a written spec. Each one has a case study covering the problem, the approach, the hardest part, and how it turned out.",
    metaDescription:
      "Full-stack web apps built with Next.js, each with a case study from problem to result.",
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
        sendFailed: "Something went wrong, please try again.",
      },
      success: {
        heading: "Message sent",
        body: "Thanks for reaching out, I'll reply within 24 hours.",
        reset: "Send another message",
      },
    },
  },

  footer: {
    tagline:
      "Full-stack developer building web apps that ship, from first sketch to production.",
    badge: "Available for new projects",
    navLabel: "Navigate",
    socialsLabel: "Elsewhere",
    // `{year}` is replaced with the current year.
    copyright: `© {year} ${site.name}. Built with Next.js and Tailwind.`,
    backToTop: "Back to top",
  },

  projectDetail: {
    backLink: "Projects",
    sidebar: {
      role: "Role",
      stack: "Stack",
      live: "Live site",
      source: "Source",
    },
    // Keyed by case study section; the order lives in lib/projects.ts.
    caseStudyTitles: {
      problem: "Problem",
      approach: "Approach",
      challenge: "Challenge",
      result: "Result",
    },
  },

  notFound: {
    heading: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to home",
  },

  emails: {
    confirmation: {
      subject: "Thanks for reaching out",
      heading: "Thanks for reaching out",
      // `{name}` is replaced with the sender's name.
      greeting: "Hi {name},",
      paragraphs: [
        "I've received your message and will get back to you within 24 hours.",
        "In the meantime, feel free to check out my recent projects or connect with me on LinkedIn.",
      ],
      cta: "View my work",
    },
  },
} as const;
