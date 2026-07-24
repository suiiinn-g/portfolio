"use client";

import Image from "next/image";
import { useIntersection } from "@/hooks/useIntersection";
import type { Content, Lang } from "@/lib/content";
import { accentItalic, displayFont, labelSize, labelTracking } from "@/lib/lang";
import SectionLabel from "./SectionLabel";
import RichText from "./RichText";

type Props = {
  content: Content["about"];
  lang: Lang;
};

export default function About({ content, lang }: Props) {
  const [ref, visible] = useIntersection<HTMLElement>({ threshold: 0.1 });
  const v = visible ? " is-visible" : "";

  return (
    <section
      id="about"
      ref={ref}
      className="bg-cream px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[1.6fr_1fr] md:gap-20">
        {/* LEFT — text */}
        <div className={"reveal" + v}>
          <SectionLabel lang={lang}>{content.label}</SectionLabel>

          <h2
            className={`mt-6 font-bold leading-[1.05] text-ink ${displayFont(lang)}`}
            style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
          >
            <span className="block">{content.heading.line1}</span>
            <span className={`block text-accent ${accentItalic(lang)}`}>
              {content.heading.line2}
            </span>
          </h2>

          <div
            className="mt-10 space-y-6 text-[1.05rem] font-light text-ink-2"
            style={{ lineHeight: 1.8 }}
          >
            {content.paragraphs.map((p, i) => (
              <p key={i} className="text-pretty">
                <RichText text={p} />
              </p>
            ))}
          </div>

          <div className="mt-10 border-t border-cream-3 pt-8">
            <p
              className={`font-semibold uppercase text-accent ${labelTracking(lang)}`}
              style={{ fontSize: labelSize(lang, "0.68rem") }}
            >
              {content.beyondWork.label}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {content.beyondWork.pills.map((pill) => (
                <li
                  key={pill}
                  className="cursor-default rounded-full border border-cream-3 px-4 py-1.5 font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
                  style={{ fontSize: lang === "zh" ? "0.95rem" : "0.78rem" }}
                >
                  {pill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT — photo stack (natural aspect, no crop) */}
        <div
          className={"flex flex-col gap-4 reveal" + v}
          style={{ transitionDelay: "0.1s" }}
        >
          <Image
            src="/photo-graduation.jpg"
            alt={lang === "zh" ? "毕业合影" : "Graduation portrait"}
            width={1500}
            height={1000}
            sizes="(min-width: 768px) 35vw, 100vw"
            className="h-auto w-full border border-cream-3"
          />
          <Image
            src="/photo-london.jpg"
            alt={lang === "zh" ? "伦敦街景" : "London street"}
            width={1500}
            height={1000}
            sizes="(min-width: 768px) 35vw, 100vw"
            className="h-auto w-full border border-cream-3"
          />
        </div>
      </div>
    </section>
  );
}
