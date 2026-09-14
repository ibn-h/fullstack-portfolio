// Dutch project copy. Language-independent data (URLs, stack, images) lives in lib/projects.ts.

import type { ProjectsCopy } from "@/lib/projects";

export const projectsNl = {
  y2notion: {
    title: "Y2Notion",
    tagline:
      "Zet YouTube-video's met AI om in gestructureerde Markdown-samenvattingen, die je met één klik in Notion opslaat.",
    description:
      "Y2Notion is een Next.js SaaS-tool die YouTube-video's met AI omzet in gestructureerde Markdown-samenvattingen. De tool koppelt direct met je Notion-workspace, zodat je samenvattingen met één klik opslaat. Gebouwd met de Groq API voor snelle AI-samenvattingen en de Notion API voor een naadloze integratie.",
    role: "Solo developer",
    heroImageAlt:
      "Homepage van Y2Notion met een YouTube-link in het invoerveld naast de knop Summarize",
    galleryAlts: [
      "Notion-locatiekiezer geopend boven een samenvatting, met de pagina YouTube Summaries geselecteerd",
      "Gegenereerde Markdown-samenvatting van een JavaScript-video met de acties Copy en Save to Notion",
    ],
    caseStudy: {
      problem: [
        "Ik gebruik YouTube veel en kom soms nuttige informatie tegen die ik wil bewaren. Mijn vaste werkwijze was het transcript kopiëren, in een AI plakken voor een samenvatting en die daarna in Notion opslaan. Nadat ik dit vaak had gedaan, besloot ik een tool te bouwen die alle drie de stappen automatiseert.",
      ],
      approach: [
        "Ik begon documentation-first: eerst schreef ik de kernfeatures en een stapsgewijs implementatieplan uit, pas daarna raakte ik code aan. De twee features die ik vastlegde waren de YouTube-naar-Markdown-converter en de integratie om samenvattingen in Notion op te slaan.",
        "Als stack koos ik Next.js, omdat het frontend en backend in één framework combineert, en Groq voor de AI-samenvattingen, omdat daar geen betaald abonnement voor nodig is.",
        "Om per sessie gefocust te blijven, hield ik taken bij in een simpel TODO.md-bestand: per sessie koos ik 2 tot 4 taken en verplaatste ik ze naar Done zodra ze af waren.",
      ],
      challenge: [
        "Voor het ophalen van transcripts gebruikte ik eerst youtube-transcript-plus, maar na de deploy naar productie kreeg ik fouten: YouTube staat alleen verzoeken vanuit browsers toe, niet vanaf servers. Ik stapte over op Supadata, dat server-side verzoeken zonder problemen afhandelt.",
      ],
      result: [
        "Plak een URL en Y2Notion maakt een beknopte Markdown-samenvatting, die je direct in Notion kunt opslaan. De tool doet precies wat ik voor ogen had, en ik gebruik hem zelf elke keer als ik een video wil laten samenvatten.",
      ],
    },
  },
  "hairsalon-booking": {
    title: "Kapsalon-reserveringen",
    tagline:
      "Reserveringssysteem met bevestigingsmails en een beveiligd dashboard voor de barbier.",
    description:
      "Een full-stack reserveringssysteem, gebouwd voor een fictieve barbershop genaamd The Blade. Klanten boeken een afspraak op hun favoriete tijdslot en krijgen een bevestiging per e-mail, terwijl de barbier alle reserveringen beheert vanuit een beveiligd dashboard. Gebouwd met Next.js, Supabase en Resend.",
    role: "Solo developer",
    heroImageAlt:
      "Homepage van barbershop The Blade met een knop Book your appointment",
    galleryAlts: [
      "Reserveringsformulier met velden voor naam, telefoon, e-mail, dienst, datum en tijdslot",
      "Dashboard van de barbier met reserveringen per datum en tijdslot, en filters op status en datum",
    ],
    caseStudy: {
      problem: [
        "Veel barbiers regelen afspraken handmatig via WhatsApp of telefoon. Dat werkt met een klein aantal klanten, maar wordt lastig zodra het aantal boekingen groeit. Het is ook onhandig voor de klant, die tijdens openingstijden moet bellen en op een bevestiging moet wachten. Een reserveringssysteem lost beide problemen op.",
      ],
      approach: [
        "Net als bij mijn vorige project werkte ik documentation-first: ik schreef een projectomschrijving en bepaalde de MVP voordat ik code aanraakte. Deze keer introduceerde ik ook feature-specificaties: documenten die elke feature beschrijven met een user story en acceptatiecriteria. Zo wist ik precies wanneer een feature af was, zonder onnodige extra's toe te voegen.",
        "Als database gebruikte ik Supabase (Postgres), voor de reserveringen en een rate-limit-tabel tegen spam. Voor e-mailnotificaties gebruikte ik Resend, waarmee ik bij elke boeking e-mails op basis van een template naar zowel de klant als de barbier kon sturen.",
      ],
      challenge: [
        "Ik ben lang bezig geweest met het debuggen van een probleem met Row-Level Security (RLS) in Supabase. Nadat ik het had aangezet, werkten mijn queries niet meer, maar in plaats van een foutmelding kreeg ik gewoon een lege array terug. De les: plan je RLS-policies altijd voordat je de databaselaag bouwt.",
      ],
      result: [
        "Het eindresultaat is een volledig werkend reserveringssysteem met een intuïtief, beveiligd dashboard. Klanten boeken hun favoriete tijdslot en de barbier krijgt een melding met de details. Vanuit het dashboard kan de barbier alle reserveringen bekijken, filteren op status of datum en boekingen annuleren wanneer dat nodig is.",
      ],
    },
  },
  "warehouse-insights": {
    title: "Warehouse Insights",
    tagline:
      "Realtime KPI-dashboard met live ordertracking en directe notificaties.",
    description:
      "Een realtime dashboard dat magazijnmanagers één centraal overzicht geeft van hun orders, voorraad en KPI's. Gebouwd met Pusher voor live data-updates en Auth.js voor veilige authenticatie, vervangt het losse systemen door één intuïtieve interface. Managers houden voorraadniveaus in de gaten, volgen orders en krijgen direct een melding als er iets verandert.",
    role: "Solo developer",
    heroImageAlt:
      "Dashboard van Warehouse Insights met KPI-kaarten voor orders van vandaag, open en afgeronde orders, voorraad en lage voorraad",
    galleryAlts: [
      "Orderoverzicht met zoekveld, statusfilter en een aanpasbare status per order",
    ],
    caseStudy: {
      problem: [
        "De meeste magazijnen werken met meerdere losse systemen voor orders en voorraad. Daardoor staat data op verschillende plekken, wat het lastig maakt om overzicht te houden of acties uit te voeren, zoals de voorraad bijwerken als er een order binnenkomt. Warehouse Insights lost dit op door alles samen te brengen in één realtime dashboard.",
      ],
      approach: [
        "Voor de MVP legde ik zeven kernfeatures vast: een KPI-dashboard, overzichtspagina's voor orders en voorraad, een productdetailpagina, authenticatie, realtime data en notificaties. Elke feature had een eigen specificatie met een user story en acceptatiecriteria, zodat ik altijd precies wist wat ik bouwde en wanneer het af was.",
        "Voor de realtime functionaliteit gebruikte ik Pusher, en voor authenticatie Auth.js met Google als provider. Ook hield ik een backlog.md-bestand bij als checklist om de voortgang van alle features te volgen.",
      ],
      challenge: [
        "De documentatie van Pusher behandelt Next.js niet specifiek, waardoor de implementatie lastig uit te zoeken was. Toen het eenmaal werkte, begreep ik goed hoe je realtime functionaliteit in een Next.js-applicatie integreert. Ik merkte ook dat ik de neiging had om halverwege een sessie code te refactoren. Dat is niet per se slecht, maar het haalde mijn focus weg van de MVP en kostte tijd die ik beter aan de kernfeatures had kunnen besteden.",
      ],
      result: [
        "Warehouse Insights is beter geworden dan verwacht: een realtime dashboard dat magazijnmanagers een helder, centraal overzicht van hun operatie geeft. De applicatie is overzichtelijk opgebouwd onder een /dashboard-route, met een intuïtieve sidebar om tussen de overzichten te wisselen. Zo houd je eenvoudig de voorraad in de gaten, volg je orders en reageer je op live notificaties.",
      ],
    },
  },
} satisfies ProjectsCopy;
