"use client";

import { useIntersection } from "@/hooks/useIntersection";
import type { Content, Lang } from "@/lib/content";
import { accentItalic, displayFont, labelSize, labelTracking } from "@/lib/lang";
import SectionLabel from "./SectionLabel";
import Logo from "./Logo";

type Props = {
  content: Content["education"];
  lang: Lang;
};

export default function Education({ content, lang }: Props) {
  const [ref, visible] = useIntersection<HTMLElement>({ threshold: 0.1 });
  const v = visible ? " is-visible" : "";

  return (
    <section
      id="education"
      ref={ref}
      className="bg-cream-2 px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel lang={lang}>{content.label}</SectionLabel>

        <h2
          className={`mt-6 font-bold leading-[1.05] text-ink ${displayFont(lang)}`}
          style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
        >
          <span className={lang === "zh" ? "" : "block"}>
            {content.heading.line1}
          </span>
          <span
            className={`${lang === "zh" ? "whitespace-nowrap" : "block"} text-accent ${accentItalic(lang)}`}
          >
            {content.heading.line2}
          </span>
        </h2>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {content.cards.map((edu, i) => (
            <li
              key={edu.school}
              className={"reveal" + v}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="card-lift h-full border border-cream-3 p-8 hover:border-accent hover:shadow-[0_12px_36px_-14px_rgba(28,25,23,0.18)]">
                <p
                  className={`font-medium uppercase text-ink-3 ${labelTracking(lang)}`}
                  style={{ fontSize: labelSize(lang, "0.68rem") }}
                >
                  {edu.year}
                </p>
                <h3
                  className={`mt-5 flex items-center gap-3 text-[1.4rem] font-bold leading-tight text-ink ${displayFont(lang)}`}
                >
                  <Logo domain={edu.domain} alt={edu.school} size={26} />
                  <span>{edu.school}</span>
                </h3>
                <p className="mt-3 text-[0.92rem] text-ink-2">{edu.degree}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
