"use client";

import { useIntersection } from "@/hooks/useIntersection";
import type { Content, FeaturedProject, Lang, SmallProject } from "@/lib/content";
import { accentItalic, displayFont, labelSize, labelTracking, uiTracking } from "@/lib/lang";
import SectionLabel from "./SectionLabel";

type Props = {
  content: Content["projects"];
  lang: Lang;
};

export default function Projects({ content, lang }: Props) {
  return (
    <section
      id="projects"
      className="bg-cream-2 px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel lang={lang}>{content.label}</SectionLabel>

        <h2
          className={`mt-6 mb-14 font-bold leading-[1.05] text-ink ${displayFont(lang)}`}
          style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
        >
          {content.heading}
        </h2>

        {/* Featured */}
        <FeaturedCard featured={content.featured} lang={lang} />

        {/* Small cards — single 2-col grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {content.cards.map((card, i) => (
            <SmallCard key={card.title} card={card} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  featured,
  lang,
}: {
  featured: FeaturedProject;
  lang: Lang;
}) {
  const [ref, visible] = useIntersection<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });
  const v = visible ? " is-visible" : "";
  return (
    <div ref={ref} className={"mb-5 reveal-card" + v}>
      <article className="project-card project-card-small bg-ink p-7 md:p-9">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p
              className={`font-medium uppercase text-accent ${labelTracking(lang)}`}
              style={{ fontSize: labelSize(lang, "0.68rem") }}
            >
              {featured.tag}
            </p>
            <h3
              className={`mt-3 text-[1.4rem] font-bold leading-tight text-cream ${displayFont(lang)}`}
            >
              {featured.titleFirst}
              <span className={`text-accent ${accentItalic(lang)}`}>
                {featured.titleAccent}
              </span>
            </h3>
          </div>
          <ProjectLinks
            links={[{ label: featured.linkText, href: featured.linkUrl }]}
            lang={lang}
          />
        </div>

        <p
          className="mt-4 text-[0.92rem] text-pretty"
          style={{ color: "rgba(250, 247, 245, 0.5)", lineHeight: 1.65 }}
        >
          {featured.desc}
        </p>
        <div
          className="mt-6 grid gap-7 pt-6 md:grid-cols-2"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          <BulletColumn
            label={featured.leftLabel}
            items={featured.leftPoints}
            lang={lang}
          />
          <BulletColumn
            label={featured.rightLabel}
            items={featured.rightPoints}
            lang={lang}
          />
        </div>
      </article>
    </div>
  );
}

function SmallCard({
  card,
  index,
  lang,
}: {
  card: SmallProject;
  index: number;
  lang: Lang;
}) {
  const [ref, visible] = useIntersection<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });
  const v = visible ? " is-visible" : "";
  return (
    <div
      ref={ref}
      className={"reveal-card" + v + (card.wide ? " md:col-span-2" : "")}
      // In a 2-col grid, both cards on a row enter the viewport together.
      // Use the column position (0 or 1) as the stagger so each row cascades
      // without compounding delays across rows.
      style={{ transitionDelay: `${(index % 2) * 0.08}s` }}
    >
      <article className="project-card project-card-small h-full bg-ink p-7 md:p-9">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p
              className={`font-medium uppercase text-accent ${labelTracking(lang)}`}
              style={{ fontSize: labelSize(lang, "0.68rem") }}
            >
              {card.tag}
            </p>
            <h3
              className={`mt-3 text-[1.4rem] font-bold leading-tight text-cream ${displayFont(lang)}`}
            >
              {card.title}
            </h3>
          </div>
          {card.wide && card.links && card.links.length > 0 && (
            <ProjectLinks links={card.links} lang={lang} />
          )}
        </div>
        <p
          className="mt-4 text-[0.92rem] text-pretty"
          style={{ color: "rgba(250, 247, 245, 0.5)", lineHeight: 1.65 }}
        >
          {card.desc}
        </p>
        {!card.wide && card.links && card.links.length > 0 && (
          <ProjectLinks links={card.links} lang={lang} className="mt-6" />
        )}
      </article>
    </div>
  );
}

function ProjectLinks({
  links,
  lang,
  className = "",
}: {
  links: { label: string; href: string }[];
  lang: Lang;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-fit shrink-0 items-center gap-2 bg-accent px-6 py-3 text-[0.82rem] font-semibold uppercase text-ink shadow-[0_8px_24px_-8px_rgba(140,106,63,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(140,106,63,0.7)] ${uiTracking(lang, "tracking-[0.14em]")}`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function BulletColumn({
  label,
  items,
  lang,
}: {
  label: string;
  items: string[];
  lang: Lang;
}) {
  return (
    <div>
      <p
        className={`font-medium uppercase text-accent ${labelTracking(lang)}`}
        style={{ fontSize: labelSize(lang, "0.68rem") }}
      >
        {label}
      </p>
      <ul
        className="mt-4 space-y-2.5 text-[0.9rem]"
        style={{ color: "rgba(250, 247, 245, 0.6)", lineHeight: 1.6 }}
      >
        {items.map((item, j) => (
          <li key={j} className="flex gap-3">
            <span aria-hidden className="select-none text-accent">
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
