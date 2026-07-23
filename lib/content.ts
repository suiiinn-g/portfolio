export type Lang = "en" | "zh";

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type NavLink = { id: string; label: string };

export type HeroName = {
  /** First visible line of the name. Plain text portion. */
  line1: string;
  /** Optional accent text rendered next to line1 (italic + accent color in en, plain in zh). */
  accent?: string;
  /** Second visible line of the name. */
  line2: string;
};

export type EduCard = {
  year: string;
  school: string;
  degree: string;
  /** Domain used to fetch the school's logo via Clearbit (e.g. "lse.ac.uk"). */
  domain?: string;
};

export type ExperienceItem = {
  date: string;
  role: string;
  org: string;
  bullets: string[];
  /** Domain used to fetch the org's logo via Clearbit (e.g. "bytedance.com"). */
  domain?: string;
};

export type FeaturedProject = {
  tag: string;
  /** First plain portion of the title (e.g., "Club"). */
  titleFirst: string;
  /** Italic accent portion (e.g., "Match"). */
  titleAccent: string;
  linkText: string;
  linkUrl: string;
  desc: string;
  leftLabel: string;
  leftPoints: string[];
  rightLabel: string;
  rightPoints: string[];
  status: string;
};

export type SmallProject = {
  tag: string;
  title: string;
  desc: string;
  /** Optional external links rendered as small buttons under the description. */
  links?: { label: string; href: string }[];
  /** Span the card across the two-column project grid on desktop. */
  wide?: boolean;
};

export type LanguageTag = { name: string; level: string };

export type ContactLink = {
  label: string;
  href: string;
  /** Open in new tab + rel=noopener. */
  external?: boolean;
  /** Apply download attribute. */
  download?: boolean;
};

export type Content = {
  meta: { title: string; description: string };

  nav: {
    logo: string;
    links: NavLink[];
    /** Label shown on the language toggle (e.g. "EN" when on zh, "中文" when on en). */
    langToggle: string;
  };

  hero: {
    eyebrow: string;
    name: HeroName;
    /** One entry per visible line. */
    tagline: string[];
    bio: string[];
    cta: { secondary: string };
  };

  stats: Stat[];

  about: {
    label: string;
    heading: { line1: string; line2: string };
    /** Body paragraphs. Use **text** to mark phrases that should render as bold (font-medium text-ink). */
    paragraphs: string[];
    beyondWork: { label: string; pills: string[] };
  };

  education: {
    label: string;
    heading: { line1: string; line2: string };
    cards: EduCard[];
  };

  experience: {
    label: string;
    groups: { title: string; items: ExperienceItem[] }[];
  };

  projects: {
    label: string;
    heading: string;
    featured: FeaturedProject;
    cards: SmallProject[];
  };

  skills: {
    label: string;
    heading: string;
    languagesLabel: string;
    languages: LanguageTag[];
    toolsLabel: string;
    tools: string[];
  };

  contact: {
    name: string;
    tagline: string;
    links: ContactLink[];
    copyright: string;
    cta: string;
    ctaHref: string;
  };
};
