"use client";

import { useIntersection } from "@/hooks/useIntersection";
import type { Content, Lang } from "@/lib/content";
import { displayFont, labelSize, labelTracking } from "@/lib/lang";
import SectionLabel from "./SectionLabel";

type Props = {
  content: Content["skills"];
  lang: Lang;
};

export default function Skills({ content, lang }: Props) {
  const [ref, visible] = useIntersection<HTMLElement>({ threshold: 0.1 });
  const v = visible ? " is-visible" : "";

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-cream px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel lang={lang}>{content.label}</SectionLabel>

        <h2
          className={`mt-6 font-bold leading-[1.05] text-ink ${displayFont(lang)}`}
          style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
        >
          {content.heading}
        </h2>

        <div className={"reveal mt-14" + v}>
          <p
            className={`font-semibold uppercase text-ink-3 ${labelTracking(lang)}`}
            style={{ fontSize: labelSize(lang, "0.68rem") }}
          >
            {content.languagesLabel}
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {content.languages.map((lang) => (
              <li
                key={lang.name}
                className="border border-cream-3 bg-cream-2 px-[1.2rem] py-2 text-[0.82rem] font-semibold text-ink"
              >
                {lang.name}
                {lang.level ? ` — ${lang.level}` : ""}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={"reveal mt-10" + v}
          style={{ transitionDelay: "0.1s" }}
        >
          <p
            className={`font-semibold uppercase text-ink-3 ${labelTracking(lang)}`}
            style={{ fontSize: labelSize(lang, "0.68rem") }}
          >
            {content.toolsLabel}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {content.tools.map((tool) => (
              <li
                key={tool}
                className="cursor-default border border-cream-3 bg-cream-2 px-[0.95rem] py-1.5 text-[0.78rem] font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
