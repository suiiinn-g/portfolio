"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Content, Lang } from "@/lib/content";
import { accentItalic, displayFont, labelTracking, uiTracking } from "@/lib/lang";

type Props = {
  content: Content["hero"];
  lang: Lang;
};

export default function Hero({ content, lang }: Props) {
  const photoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (photoRef.current) {
        photoRef.current.style.transform = `translate3d(0, ${y * -0.15}px, 0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Chinese name lives on a single line — sized to balance with the wider English two-liner.
  const nameFontSize =
    lang === "zh"
      ? "clamp(3rem, 7vw, 6.5rem)"
      : "clamp(3.5rem, 8vw, 7.5rem)";

  // Chinese eyebrow + tagline render larger — small English point sizes look squashed in Han characters.
  const eyebrowSize = lang === "zh" ? "0.95rem" : "0.7rem";
  const taglineSize = lang === "zh" ? "1.05rem" : "0.82rem";

  return (
    <section id="top" className="pt-16 md:min-h-screen">
      <div className="mx-auto grid w-full max-w-[1280px] md:min-h-[calc(100vh-4rem)] md:grid-cols-2">
        {/* LEFT — text. Stacks naturally on mobile (no forced centering); vertically centered in the full hero height on md+ */}
        <div className="px-6 py-8 md:py-0 md:pl-8 md:pr-2 md:flex md:flex-col md:justify-center lg:pl-6 lg:pr-0">
          {/* Mobile-only circular portrait — hidden on md+ where the side photo column shows */}
          <div className="animate-fade-in mb-6 md:hidden" style={{ animationDelay: "0.1s" }}>
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-cream-3">
              <Image
                src="/photo-hero.jpg"
                alt={lang === "zh" ? "关敬心" : "Jingxin Guan"}
                fill
                sizes="96px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <p
            className={`animate-fade-up uppercase text-ink-3 ${labelTracking(lang)}`}
            style={{ animationDelay: "0.2s", fontSize: eyebrowSize }}
          >
            {content.eyebrow}
          </p>

          <h1
            className={`animate-fade-up mt-6 font-bold leading-[0.95] text-ink ${displayFont(lang)}`}
            style={{
              fontSize: nameFontSize,
              animationDelay: "0.35s",
            }}
          >
            <span className="block">
              {content.name.line1}
              {content.name.accent && (
                <span className={`text-accent ${accentItalic(lang)}`}>
                  {content.name.accent}
                </span>
              )}
            </span>
            {content.name.line2 && (
              <span className="block">{content.name.line2}</span>
            )}
          </h1>

          <p
            className={`animate-fade-up mt-8 font-semibold uppercase text-ink-2 ${uiTracking(lang, "tracking-[0.1em]")}`}
            style={{ animationDelay: "0.55s", fontSize: taglineSize }}
          >
            {content.tagline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>

          <div
            className="animate-fade-in mt-8 h-px w-10 bg-cream-3"
            style={{ animationDelay: "0.7s" }}
          />

          <div
            className="animate-fade-up mt-8 space-y-1 text-[1.05rem] font-light text-ink-2"
            style={{ animationDelay: "0.8s", lineHeight: 1.8 }}
          >
            {content.bio.map((line, i) => {
              // A `\n` inside a bio entry marks a mobile-only line break:
              // desktop joins the parts with " · ", mobile breaks them.
              const parts = line.split("\n");
              if (parts.length === 1) {
                return <p key={i}>{line}</p>;
              }
              return (
                <p
                  key={i}
                  // lg+: keep on a single line at the same font size as the other
                  // bio lines (1.05rem). The reduced column padding on lg gives
                  // it enough room to fit without wrapping.
                  className="lg:whitespace-nowrap"
                >
                  {parts.map((part, j) => (
                    <span key={j}>
                      {j > 0 && (
                        <>
                          <span className="hidden md:inline"> · </span>
                          <br className="md:hidden" />
                        </>
                      )}
                      {part}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>

          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-5"
            style={{ animationDelay: "0.95s" }}
          >
            <a
              href={lang === "zh" ? "/cv-zh.pdf" : "/cv.pdf"}
              download
              className={`inline-flex items-center gap-2 bg-ink px-6 py-3 text-[0.74rem] font-semibold uppercase text-cream transition-colors hover:bg-accent ${uiTracking(lang, "tracking-[0.12em]")}`}
            >
              {content.cta.primary}
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center border border-cream-3 px-6 py-3 text-[0.74rem] font-semibold uppercase text-ink-2 transition-colors hover:border-ink-3 ${uiTracking(lang, "tracking-[0.12em]")}`}
            >
              {content.cta.secondary}
            </a>
          </div>
        </div>

        {/* RIGHT — photo stretches to match left's height */}
        <div
          className="animate-fade-in hidden items-stretch justify-end md:flex md:px-8 md:py-16 lg:px-12 lg:py-24"
          style={{ animationDelay: "0.6s" }}
        >
          <div
            ref={photoRef}
            className="relative aspect-[3/4] h-full will-change-transform"
          >
            <Image
              src="/photo-hero.jpg"
              alt={lang === "zh" ? "关敬心肖像" : "Portrait of Jingxin Guan"}
              fill
              sizes="(min-width: 1024px) 450px, 360px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
