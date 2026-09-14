// All visible copy in Dutch. Must match en.ts key for key — TypeScript checks this.

import type { Content } from "@/lib/content";
import { site } from "@/lib/site";

export const nl = {
  meta: {
    role: "Full-stack developer",
    // Default meta description — keep it under ~155 characters.
    description: `${site.name} is een full-stack developer die met Next.js webapps en SaaS-producten bouwt voor startups en kleine bedrijven, gepland, gebouwd en gelanceerd.`,
    home: "Home",
  },

  nav: {
    projects: "Projecten",
    about: "Over mij",
    contact: "Contact",
    mainLabel: "Hoofdmenu",
    footerLabel: "Footer",
  },

  header: {
    cta: "Neem contact op",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    languageLabel: "Taal",
  },

  hero: {
    greeting: `Hallo, ik ben ${site.name},`,
    tagline: "Full-stack developer",
    subtitle:
      "Ik bouw webapps en SaaS-producten voor startups en kleine bedrijven. Elk project begint met een geschreven specificatie, zodat je precies weet wat je krijgt voordat ik één regel code schrijf.",
    cta: {
      primary: { label: "Neem contact op", href: "#contact" },
      secondary: { label: "Bekijk mijn werk ↓", href: "#projects" },
    },
    badge: "Beschikbaar",
    profile: {
      label: "Over mij in het kort",
      summary: "Profiel",
      rows: [
        { label: "Naam", value: site.name },
        { label: "Rol", value: "Full-stack developer" },
        { label: "Leeftijd", value: "19" },
        { label: "Ervaring", value: "2+ jaar, zelfgeleerd" },
        { label: "Opgeleverd", value: "3 applicaties" },
        { label: "Talen", value: "Nederlands, Engels" },
        { label: "Reactietijd", value: "Binnen 24 uur" },
      ],
      stackLabel: "Stack",
      stack: [
        "Full-stack Next.js",
        "Databases",
        "Authenticatie",
        "AI-integratie",
        "Real-time",
      ],
    },
  },

  about: {
    label: "Over mij",
    // The first paragraph is rendered as the larger lead-in.
    paragraphs: [
      `Ik ben ${site.name}, een zelfgeleerde full-stack developer met twee jaar ervaring in het bouwen van webapplicaties.`,
      "Een van mijn recente projecten is Y2Notion, een SaaS-tool die YouTube-video's samenvat en direct in Notion opslaat. Ik werk graag gestructureerd waardoor ik elk project begin met documentatie, en ik schrijf pas code als ik een duidelijk plan en uitgewerkte feature-specificaties heb.",
      "Naast het ontwikkelen werkte ik bij een ICT-helpdesk, een ervaring die mijn probleemoplossend vermogen en communicatieve vaardigheden heeft aangescherpt.",
    ],
    stats: [
      { value: "2+", label: "Jaar programmeren" },
      { value: "3", label: "Projecten opgeleverd" },
      { value: "19", label: "jaar oud" },
    ],
    availability: {
      text: "Momenteel beschikbaar voor freelanceprojecten. Heb je iets in gedachten?",
      cta: { label: "Neem contact op", href: "#contact" },
    },
  },

  projects: {
    heading: "Projecten",
    // TODO: add a subtitle. It isn't rendered while empty.
    subtitle: "",
    featuredLabel: "Uitgelicht project",
    links: {
      live: "Live",
      source: "Bekijk de broncode op GitHub",
      caseStudy: "Case study",
    },
    viewAll: "Bekijk alle projecten",
  },

  projectsPage: {
    heading: "Projecten",
    subtitle:
      "Elk project hier begon als een geschreven specificatie. Bij elk project hoort een case study over het probleem, de aanpak, het lastigste deel en het resultaat.",
    metaDescription:
      "Full-stack webapps gebouwd met Next.js, elk met een case study van probleem tot resultaat.",
  },

  contact: {
    badge: "Beschikbaar voor nieuwe projecten",
    heading: "Heb je iets in gedachten?",
    subtitle: "Vertel me over je project, dan reageer ik binnen 24 uur.",
    form: {
      fields: {
        name: { label: "Naam", placeholder: "Je naam" },
        email: { label: "E-mail", placeholder: "jij@bedrijf.be" },
        message: {
          label: "Bericht",
          placeholder: "Vertel me over je project...",
        },
      },
      submit: "Verstuur bericht",
      submitting: "Versturen...",
      errors: {
        nameRequired: "Vul je naam in.",
        emailRequired: "Vul je e-mailadres in.",
        emailInvalid: "Dat lijkt geen geldig e-mailadres.",
        messageRequired: "Vertel me iets over je project.",
        sendFailed: "Er ging iets mis, probeer het opnieuw.",
      },
      success: {
        heading: "Bericht verstuurd",
        body: "Bedankt voor je bericht, ik reageer binnen 24 uur.",
        reset: "Nog een bericht sturen",
      },
    },
  },

  footer: {
    tagline:
      "Full-stack developer die webapps bouwt die echt live gaan, van eerste schets tot productie.",
    badge: "Beschikbaar voor nieuwe projecten",
    navLabel: "Navigatie",
    socialsLabel: "Elders",
    // `{year}` is replaced with the current year.
    copyright: `© {year} ${site.name}. Gebouwd met Next.js en Tailwind.`,
    backToTop: "Terug naar boven",
  },

  projectDetail: {
    backLink: "Projecten",
    sidebar: {
      role: "Rol",
      stack: "Stack",
      live: "Live site",
      source: "Broncode",
    },
    caseStudyTitles: {
      problem: "Probleem",
      approach: "Aanpak",
      challenge: "Uitdaging",
      result: "Resultaat",
    },
  },

  notFound: {
    heading: "Pagina niet gevonden",
    body: "De pagina die je zoekt bestaat niet of is verplaatst.",
    cta: "Terug naar home",
  },

  emails: {
    confirmation: {
      subject: "Bedankt voor je bericht",
      heading: "Bedankt voor je bericht",
      greeting: "Dag {name},",
      paragraphs: [
        "Ik heb je bericht ontvangen en reageer binnen 24 uur.",
        "Bekijk in de tussentijd gerust mijn recente projecten, of connect met me op LinkedIn.",
      ],
      cta: "Bekijk mijn werk",
    },
  },
} as const satisfies Content;
