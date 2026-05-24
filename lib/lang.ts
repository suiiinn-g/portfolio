import type { Lang } from "./content";

export const displayFont = (lang: Lang) =>
  lang === "zh"
    ? "font-[family-name:var(--font-noto-serif-sc)]"
    : "font-[family-name:var(--font-playfair)]";

export const bodyFont = (lang: Lang) =>
  lang === "zh"
    ? "font-[family-name:var(--font-noto-sans-sc)]"
    : "font-[family-name:var(--font-jakarta)]";

/** Letter-spacing for labels — none in zh (Chinese characters don't benefit from tracking), wide in en. */
export const labelTracking = (lang: Lang) =>
  lang === "zh" ? "" : "tracking-[0.2em]";

/** Tighter tracking for shorter UI labels (nav links, button text). */
export const uiTracking = (lang: Lang, base = "tracking-[0.14em]") =>
  lang === "zh" ? "" : base;

/** Italic is suppressed in zh — italic Chinese glyphs look awkward. Returns class string. */
export const accentItalic = (lang: Lang) => (lang === "zh" ? "" : "italic");

/**
 * Font size for small uppercase labels. Chinese needs ~25–30% more pixels than uppercase Latin
 * at the same optical size — Latin caps at 0.67–0.7rem read fine, Han characters at that size
 * are cramped and lose stroke detail.
 */
export const labelSize = (lang: Lang, en: string) => {
  if (lang !== "zh") return en;
  switch (en) {
    case "0.67rem":
      return "0.85rem";
    case "0.68rem":
      return "0.86rem";
    case "0.7rem":
      return "0.88rem";
    default:
      return en;
  }
};
