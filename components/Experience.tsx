"use client";

import { useIntersection } from "@/hooks/useIntersection";
import type { Content, ExperienceItem, Lang } from "@/lib/content";
import { displayFont, labelSize, labelTracking } from "@/lib/lang";
import SectionLabel from "./SectionLabel";
import Logo from "./Logo";
import RichText from "./RichText";

type Props = {
  content: Content["experience"];
  lang: Lang;
};

export default function Experience({ content, lang }: Props) {
  return (
    <section
      id="experience"
      className="bg-cream px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel lang={lang}>{content.label}</SectionLabel>

        {content.groups.map((group, gIdx) => (
          <div key={group.title} className={gIdx === 0 ? "mt-10" : "mt-20"}>
            <h3
              className={`mb-12 font-bold leading-tight text-ink ${displayFont(lang)}`}
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              {group.title}
            </h3>
            <ol className="relative ml-1.5">
              <span
                aria-hidden
                className="absolute left-0 top-1 bottom-1 w-px bg-cream-3"
              />
              {group.items.map((item, i) => (
                <TimelineItem
                  key={item.org + item.date}
                  item={item}
                  index={i}
                  lang={lang}
                />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  lang,
}: {
  item: ExperienceItem;
  index: number;
  lang: Lang;
}) {
  const [ref, visible] = useIntersection<HTMLLIElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });
  const v = visible ? " is-visible" : "";
  return (
    <li ref={ref} className="relative pb-14 pl-10 last:pb-0">
      <span
        aria-hidden
        className="absolute left-0 top-[7px] h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
        style={{ boxShadow: "0 0 0 4px var(--cream)" }}
      />

      <div
        className={"reveal" + v}
        style={{ transitionDelay: `${index * 0.08}s` }}
      >
        <p
          className={`font-medium uppercase text-ink-3 ${labelTracking(lang)}`}
          style={{ fontSize: labelSize(lang, "0.68rem") }}
        >
          {item.date}
        </p>
        <h3
          className={`mt-3 text-[1.35rem] font-bold leading-tight text-ink ${displayFont(lang)}`}
        >
          {item.role}
        </h3>
        <div className="mt-1.5 flex items-center gap-2.5">
          <Logo domain={item.domain} alt={item.org} size={20} />
          <p className="text-[0.92rem] text-ink-2">{item.org}</p>
        </div>

        <ul
          className="mt-5 space-y-2.5 text-[0.94rem] text-ink-2"
          style={{ lineHeight: 1.65 }}
        >
          {item.bullets.map((b, j) => (
            <li key={j} className="flex gap-3">
              <span aria-hidden className="select-none text-accent">
                —
              </span>
              <span>
                <RichText text={b} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
