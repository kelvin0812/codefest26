/**
 * ═══════════════════════════════════════════════════════════
 * CODEFEST '26 — SITE CONFIGURATION
 * ═══════════════════════════════════════════════════════════
 *
 * Edit this file to update all content on the website.
 * No need to touch any component files.
 */

export const siteConfig = {
  event: {
    name: "CodeFest",
    year: "'26",
    tagline: "Innovating for the People, by the People",
    description:
      "Malaysia's premier national coding competition — build human-centric technology that solves real problems.",
    organizer: "SYNTECH Organisation",
    university: "Universiti Teknologi PETRONAS",
    location: "Nadi@UTP, Perak",
    address: "32610 Bandar Seri Iskandar, Perak, Malaysia",
    registrationFee: "RM 30 / team",
    dateRange: "10 Aug – 14 Nov 2026",
    registrationOpenDate: "2026-08-10T00:00:00",
    maxTeams: 30,
    teamSize: "3–4 members",
  },

  stats: [
    { value: "RM 2,300", label: "Total Prize Pool" },
    { value: "30 Teams", label: "Maximum Capacity" },
    { value: "3 Months", label: "Competition Duration" },
    { value: "National", label: "Level of Competition" },
  ],

  phases: [
    {
      number: "01",
      name: "Registration",
      date: "10 Aug – 19 Sep 2026",
      description:
        "Assemble your team of 3–4 members and register through the official portal. Open to all Malaysian university undergraduates.",
    },
    {
      number: "02",
      name: "Development & Submission",
      date: "20 Sep – 21 Oct 2026",
      description:
        "Design and develop a working prototype or MVP that addresses a real societal challenge. All deliverables must be submitted by 21 October.",
    },
    {
      number: "03",
      name: "Project Assessment",
      date: "22 – 28 Oct 2026",
      description:
        "An expert judging panel evaluates submissions based on creativity, technical execution, and real-world impact. Top teams advance to the finale.",
    },
    {
      number: "04",
      name: "Grand Finale",
      date: "14 Nov 2026 · Nadi@UTP",
      description:
        "Shortlisted finalists present their solutions live to a panel of industry judges. Winners are announced at the closing ceremony.",
    },
  ],

  prizes: {
    champion: { amount: "RM 1,000", extras: "+ Plaque + Certificate" },
    second: { amount: "RM 700", extras: "+ Certificate" },
    third: { amount: "RM 500", extras: "+ Certificate" },
    peoplesChoice: { amount: "RM 100" },
  },

  schedule: [
    { time: "9:00 AM", activity: "Arrival & Booth Setup", detail: "Finalists check in and prepare project exhibition booths" },
    { time: "10:00 AM", activity: "Public Exhibition", detail: "Open to all students and visitors — live project demonstrations" },
    { time: "11:30 AM", activity: "Opening Ceremony", detail: "Welcome address, judge introductions, and pitching guidelines" },
    { time: "12:15 PM", activity: "Lunch & Networking", detail: "Networking session for judges, guests, and participants" },
    { time: "1:30 PM", activity: "Final Pitching Session", detail: "Shortlisted teams present their solutions on stage" },
    { time: "4:00 PM", activity: "Judges' Deliberation", detail: "Scoring and deliberation while highlights reel plays" },
    { time: "4:30 PM", activity: "Award Ceremony", detail: "Winners announced and prizes presented" },
    { time: "5:00 PM", activity: "Closing & Group Photo", detail: "Official group photo and event conclusion" },
  ],

  faqs: [
    {
      question: "Who is eligible to participate?",
      answer:
        "CodeFest '26 is open to all undergraduate students enrolled at any Malaysian university. Each team must consist of 3 to 4 members from the same or different institutions.",
    },
    {
      question: "How much is the registration fee?",
      answer:
        "The registration fee is RM 30 per team. Payment is made upon registration through the official portal, which opens on 10 August 2026.",
    },
    {
      question: "What type of projects should we build?",
      answer:
        "Teams are expected to develop functional prototypes or minimum viable products (MVPs) that address real societal challenges. Projects may leverage AI, cloud computing, cybersecurity, IoT, or software engineering.",
    },
    {
      question: "Is the entire competition held online?",
      answer:
        "The registration, development, and assessment phases are conducted online. The Grand Finale on 14 November 2026 is a physical, in-person event held at Nadi@UTP, Universiti Teknologi PETRONAS.",
    },
    {
      question: "What are the prizes?",
      answer:
        "Champion: RM 1,000 + Plaque · 2nd Place: RM 700 · 3rd Place: RM 500 · People's Choice: RM 100. All participating teams receive a Certificate of Participation upon completing the full competition cycle.",
    },
    {
      question: "Who is behind CodeFest '26?",
      answer:
        "CodeFest '26 is organised by SYNTECH Organisation at Universiti Teknologi PETRONAS, in collaboration with the Department of Computing (DC), and supported by Student Affairs (SA) and YUTP.",
    },
  ],

  about: {
    headline: "Where Code Meets Community",
    syntechDescription:
      "SYNTECH is UTP's premier inter-varsity, student-led technology organisation — bridging academic theory and industry practice. Our mission is to transform curiosity into impactful technology through hands-on, real-world experience.",
    eventDescription:
      "CodeFest '26 is our flagship national-level coding competition — a high-impact platform where university students across Malaysia sharpen their technical expertise, tackle meaningful problems, and connect with industry leaders in AI, software engineering, and cybersecurity.",
    sdgGoals: [
      { badge: "SDG 9", text: "Drive human-centric innovation through technology" },
      { badge: "SDG 4 & 8", text: "Bridge academic learning with industry-ready skills" },
      { badge: "SDG 17", text: "Foster collaborative, future-ready leadership" },
    ],
    pastEvent: {
      title: "Secure Nex Hackathon 2025",
      description:
        "Co-organised with PETRONAS, UTP & CeRDaS. Held on 15–16 November 2025 with the top 10 teams competing in a high-stakes Grand Finale at Nadi@UTP.",
      stats: [
        { value: "10", label: "Finalist Teams" },
        { value: "2 Days", label: "Intensive Event" },
      ],
    },
  },

  navigation: ["About", "Timeline", "Prizes", "Schedule", "FAQ"],

  footer: {
    organisers: [
      "SYNTECH Organisation",
      "Department of Computing, UTP",
      "Student Affairs (SA)",
      "YUTP",
    ],
  },
} as const;
