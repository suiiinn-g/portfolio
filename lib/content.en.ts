import type { Content } from "./content";

export const content: Content = {
  meta: {
    title: "Jingxin Guan — Strategic Marketer",
    description:
      "Portfolio of Jingxin Guan — MSc Strategic Communications at LSE. Consumer internet marketing, AI-enabled content production, product thinking, and data-driven strategy.",
  },

  nav: {
    logo: "Jingxin Guan",
    links: [
      { id: "about", label: "About" },
      { id: "education", label: "Education" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    langToggle: "中文",
  },

  hero: {
    eyebrow: "Tencent WXG · LSE · NJU · ByteDance · Baidu",
    name: { line1: "Jing", accent: "xin", line2: "Guan" },
    tagline: [
      "Strategic marketer · AI-enabled content",
      "Product-minded · Data-driven",
    ],
    bio: [
      "MSc Strategic Communications at LSE.",
      "3 Countries · 4 Universities",
      // The \n is a mobile-only line break — desktop joins the two halves with " · ".
      "Consumer Internet Marketing · Product Operations\nData Analytics · Business Consulting",
    ],
    cta: { primary: "Download CV ↓", secondary: "Get in touch" },
  },

  stats: [
    { value: 800, suffix: "+", label: "Club members led" },
    { value: 100, suffix: "K+", label: "Campaign impressions" },
    { value: 4000, suffix: "+", label: "Contest registrations" },
    { value: 3, suffix: "", label: "Countries · 4 universities" },
  ],

  about: {
    label: "About",
    heading: {
      line1: "Marketing. Data. Product.",
      line2: "Cross-functional.",
    },
    paragraphs: [
      "Currently completing an **MSc in Strategic Communications & Society** at the London School of Economics, building on a journalism foundation from Nanjing University and exchange studies at UC Berkeley and the University of Stirling.",
      "Working at the intersection of **marketing strategy, AI-enabled content production, product thinking, and data** — prototyping WeChat ecosystem experiences at Tencent WXG, building AI product operations SOPs at ByteDance, supporting a 100,000+ impression AI competition campaign at Baidu, and delivering consulting frameworks at BlackMont.",
      "Fluent in navigating between **Eastern and Western markets**, I bring cultural fluency and structured thinking to every brief — whether that's a brand campaign, a product launch, or a strategic presentation.",
    ],
    beyondWork: {
      label: "Beyond work",
      pills: [
        "10+ yrs Guzheng",
        "8+ yrs Hip-hop dance",
        "Photography",
        "Travel",
        "Gym",
      ],
    },
  },

  education: {
    label: "Education",
    heading: { line1: "Three countries,", line2: "four universities." },
    cards: [
      {
        year: "2025 – 2026 · London, UK",
        school: "London School of Economics",
        degree: "MSc Strategic Communications & Society",
        domain: "lse.ac.uk",
      },
      {
        year: "2021 – 2025 · Nanjing, China",
        school: "Nanjing University",
        degree: "BA Journalism · GPA 4.50 / 5.0",
        domain: "nju.edu.cn",
      },
      {
        year: "2023 · Berkeley, USA",
        school: "UC Berkeley",
        degree: "Summer Programme · GPA 5.0 / 5.0",
        domain: "berkeley.edu",
      },
      {
        year: "2024 · Stirling, UK",
        school: "University of Stirling",
        degree: "Online Exchange · Distinction",
        domain: "stir.ac.uk",
      },
    ],
  },

  experience: {
    label: "Experience",
    groups: [
      {
        title: "Work Experience",
        items: [
          {
            date: "Jun 2026 – Present",
            role: "Consumer Internet Marketing Intern",
            org: "Tencent · WXG · Guangzhou, China",
            domain: "tencent.com",
            bullets: [
              "**AIGC production & workflow documentation:** Supported an AIGC video project for WeChat AI assistant “Xiaowei” around a World Cup marketing moment, coordinating script development, image/video generation, voiceover production, editing, model comparison, and reusable workflow documentation",
              "**Production workflow productisation:** Translated repeated trial-and-error, fragmented assets, and collaboration friction in AIGC production into an AI video collaboration workbench PRD; used Vibe Coding to build an interactive MVP and validate workflow efficiency gains",
              "**New-product development & mini-program prototyping:** Contributed to WeStore product development and promotion, following briefs, creative pitches, samples, and supplier communication; designed a virtual try-on mini program prototype covering user flows, feature planning, coupon claiming, and WeChat Store handoff",
              "**Brand documentary planning & directing:** Served as documentary director for Xiaowei’s TTS voice recruitment project, covering theme development, scripting, interview outlines, shoot coordination, and material organisation to support Xiaowei’s voice personality and recruitment story",
            ],
          },
          {
            date: "Jan – Apr 2026",
            role: "Business Consultant Intern",
            org: "BlackMont Consulting · London, UK",
            domain: "blackmontconsulting.com",
            bullets: [
              "**Operating diagnosis & workflow modelling:** Analysed Valiha Diffusion’s bamboo charcoal clean-fuel scale-up challenge in the DRC, decomposing supply, production, quality control, distribution, and verification workflows into an end-to-end operating blueprint and RACI model",
              "**Market and financing strategy analysis:** Assessed expansion risks across cost, capacity, policy, market demand, and MRV compliance; compared grants, impact equity, and blended-finance pathways to support staged financing decisions",
              "**Investor materials & strategic narrative:** Integrated cross-team research into a structured strategic narrative, converting insights into an investor-facing growth roadmap and fundraising pitch script",
            ],
          },
          {
            date: "Aug – Oct 2024",
            role: "AI Product Operations Intern",
            org: "ByteDance · Flow-CloudIDE / Trae · Beijing, China",
            domain: "bytedance.com",
            bullets: [
              "**User insight & product feedback:** Conducted targeted interviews and community operations for Trae, an AI coding assistant, mapping developer usage paths, feature pain points, and conversion barriers; synthesised feedback into product insights and collaborated with R&D on optimisation",
              "**AI product content operations & growth:** Built user-case content accounts around AI coding efficiency, real usage scenarios, and developer stories; created SOPs for graphic/video production, review, and distribution across Douyin and RedNote",
              "**Campus GTM & user reach:** Led 3 university promotion initiatives, coordinating with computer science professors, classroom scenarios, and student communities to drive awareness and registration conversion among campus developers",
              "**Data-driven operations optimisation:** Tracked content impressions, engagement, and registration conversion, identified channel-specific bottlenecks, and proposed improvements to topic selection, distribution cadence, and campus promotion",
            ],
          },
          {
            date: "Jun – Aug 2024",
            role: "Marketing Intern",
            org: "Baidu · MEG · Beijing, China",
            domain: "baidu.com",
            bullets: [
              "**AI competition integrated communications:** Supported multi-channel execution for the Baidu CTI AI Technology Innovation Competition, reaching 100,000+ impressions and attracting 4,000+ team registrations",
              "**Data analysis & strategy support:** Cleaned, classified, and visualised participant-team data, producing multi-dimensional analysis on registrations, regional distribution, and stage rankings; coordinated with R&D on website content updates and ranking synchronisation to support regional communications priorities",
              "**Offline event coordination:** Supported the launch event, 12 campus roadshows, technology conference, and final ceremony, coordinating vendors on venues, materials, run-of-show, and on-site execution to convert online reach into offline participation",
            ],
          },
          {
            date: "Mar – May 2024",
            role: "Brand Marketing Intern",
            org: "Kidswant · Nanjing, China",
            domain: "cnkidswant.com",
            bullets: [
              "**Content strategy & growth:** Independently planned and launched an employee spotlight column for parenting consultants, reaching 30,000+ views per article and ranking first in branded search heat; continuously optimised website and social content strategy based on performance data",
              "**Multi-format content production:** Wrote video scripts, produced short videos, and delivered long-form graphics and posters while maintaining brand visual consistency and content tone",
              "**Campaign planning & execution:** Coordinated company promotional activities, created a brand anthem, and launched a nationwide dance challenge to drive large-scale user participation and brand exposure",
            ],
          },
          {
            date: "May – Oct 2022",
            role: "Social Media Intern",
            org: "Nanxiaobao · WeCrush · Nanjing, China",
            bullets: [
              "**Competitor research & user insight:** Researched dating app market; analysed competitor strategies across RedNote, Douyin, WeChat Channels, and Weibo",
              "**Product launch & community planning:** Contributed to WeCrush app launch — market positioning, community design, and content planning",
            ],
          },
        ],
      },
      {
        title: "Extracurricular",
        items: [
          {
            date: "May 2023 – Jun 2024",
            role: "President",
            org: "NJU Passion Hiphop Dancing Club · Nanjing, China",
            bullets: [
              "Oversaw all operations of an 800+ member club, coordinating weekly training across 8 dance styles, 3 competitions per semester, and an annual showcase",
              "Managed social media and marketing materials, negotiated commercial sponsorships, and led cross-club collaborations; awarded 'Outstanding Club' by Jiangsu Hiphop Dance Union",
            ],
          },
          {
            date: "Sep 2022 – Dec 2022",
            role: "Volunteer",
            org: "L'Oreal China Youth Fun University Charity Challenge · Nanjing, China",
            bullets: [
              "Analysed L'Oreal skincare and makeup products, created and distributed promotional scripts and visual materials",
              "Supported campus flash mobs and TikTok live sessions to drive charity initiative engagement",
            ],
          },
          {
            date: "May 2022 – Oct 2024",
            role: "Member",
            org: "NJU Future Editorial Office · Nanjing, China",
            bullets: [
              "Pitched 30+ newsworthy stories during monthly editorial meetings, conducting investigations and interviews",
              "Edited and published 20+ news stories on official WeChat accounts, including graphic design, video editing, typography, and data analysis",
            ],
          },
        ],
      },
    ],
  },

  projects: {
    label: "Projects",
    heading: "Selected work",
    featured: {
      tag: "Product Design · AI · Web Platform",
      titleFirst: "Club",
      titleAccent: "Match",
      linkText: "View Demo ↗",
      linkUrl: "https://clubmatch-nine.vercel.app/",
      desc: "An AI-powered university club recruitment platform connecting students with the right clubs through intelligent matching — addressing the information asymmetry and workflow inefficiency that defines traditional campus recruitment.",
      leftLabel: "The gap",
      leftPoints: [
        "Students rely on scattered offline channels — posters, booths, word-of-mouth — with no structured way to compare or discover clubs",
        "Clubs manage recruitment through paper forms, WeChat groups, and manual Excel tracking, creating high operational overhead",
        "Poor matching leads to blind applications and low retention — students join clubs that don't fit their interests or schedule",
      ],
      rightLabel: "The platform",
      rightPoints: [
        "AI interest profiling matches students to clubs based on interests, schedule, and personality — with a one-click reusable application",
        "Three-sided platform: students discover and apply; clubs manage candidates and interviews; schools oversee the full process",
        "Full workflow from discovery → application → screening → interview scheduling → acceptance notification",
      ],
      status: "Personal project · In progress",
    },
    cards: [
      {
        tag: "AI Content Production · PRD · MVP Prototype",
        title: "AI Video Collaboration Workbench",
        desc: "Developed during my Tencent WXG internship from real AIGC production pain points: repeated trial-and-error, fragmented assets, scattered feedback, and version-tracking friction. This link is an interactive MVP prototype, built to validate core workflow concepts such as project-level asset management, prompt reuse, segment canvases, external generation handoff, object-based comments, and task notifications.",
        wide: true,
        links: [
          {
            label: "View Demo ↗",
            href: "https://ai-video-platform-flax.vercel.app",
          },
        ],
      },
      {
        tag: "Strategy · Consulting · Deliverable",
        title: "Valiha Diffusion — Clean Cooking Fuel Strategy",
        desc: "8-week BlackMont Consulting engagement for Valiha Diffusion (BIO-KALA bamboo charcoal, DRC & Madagascar). Delivered five workstreams — market diagnosis, 3-scenario financial model, investor narrative, funding pathway (grants / impact equity / blended finance), and a 12–24 month growth roadmap — culminating in a board-ready strategic package for client fundraising.",
      },
      {
        tag: "Data Analysis · Drink Product Design · LSE",
        title: "Drink Product Design — Revenue Optimisation",
        desc: "LSE Marketing Analytics II group project. Designed an optimal premium cafe drink using survey data from 49 respondents — applying data visualisation, multiple regression, conjoint analysis (conditional logit), WTP estimation, and Monte Carlo pricing simulation. Final product achieved a projected 25% market share and £93.05 expected revenue at £6.00 price point. AI-assisted coding in Python throughout.",
      },
      {
        tag: "Short Film · Content Creation · Award-winning",
        title: "Fall in Love with Nanjing, Again",
        desc: "Proposed the creative concept, conducted research, and executed copywriting, dubbing, and editing for a short video showcasing Nanjing's historic alleys — collaborated with a team to win third place in a national collegiate short video competition.",
        links: [
          { label: "Bilibili ↗", href: "https://www.bilibili.com/video/BV1km411C7yY" },
          { label: "WeChat ↗", href: "https://weixin.qq.com/sph/AZp6EVLA8" },
        ],
      },
      {
        tag: "Data Journalism · Consumer Insights · Market Analysis",
        title: "China's Sportswear Market: Who Wins the Race?",
        desc: "Scraped and analysed Lululemon-related posts on Xiaohongshu for keyword frequency, benchmarked pricing across 11 sportswear brands, and examined supply chain dynamics — producing data visualisations on consumer behaviour and competitive landscape in China's ¥453.4B sportswear market.",
      },
    ],
  },

  skills: {
    label: "Skills",
    heading: "Competencies",
    languagesLabel: "Languages",
    languages: [
      { name: "Mandarin", level: "Native" },
      { name: "English", level: "Fluent" },
    ],
    toolsLabel: "Tools & Expertise",
    tools: [
      "Marketing Strategy",
      "SEO / SEM",
      "Content Strategy",
      "A/B Testing",
      "Product Operations",
      "Excel & Dashboards",
      "Data Visualisation",
      "Python / R",
      "Vibe Coding",
      "PRD Design",
      "AI Prototyping",
      "Cross-cultural Comms",
      "Data Analytics",
      "SOP Design",
      "User Research",
      "Strategic Storytelling",
    ],
  },

  contact: {
    name: "Jingxin Guan",
    tagline: "Strategic marketer · London",
    links: [
      { label: "Email", href: "mailto:jingxinguan1231@163.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jingxin-guan-508738358",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/suziiinn_g",
        external: true,
      },
      { label: "Download CV", href: "/cv.pdf", download: true },
    ],
    copyright: "© 2026 Jingxin Guan",
    cta: "Get in touch →",
    ctaHref: "mailto:jingxinguan1231@163.com",
  },
};
