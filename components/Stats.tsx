"use client";

import { useEffect, useRef, useState } from "react";
import type { Content, Lang, Stat } from "@/lib/content";
import { displayFont, labelSize, labelTracking } from "@/lib/lang";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function useCountUp(target: number, start: boolean, duration = 800) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      setValue(Math.round(easeOutCubic(t) * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function dividerClasses(i: number, total: number) {
  const isLast = i === total - 1;
  const isMobileRowEnd = i % 2 === 1;
  if (isLast) return "";
  if (isMobileRowEnd) return "md:border-r border-[rgba(255,255,255,0.07)]";
  return "border-r border-[rgba(255,255,255,0.07)]";
}

function StatCell({
  stat,
  animate,
  divider,
  lang,
}: {
  stat: Stat;
  animate: boolean;
  divider: string;
  lang: Lang;
}) {
  const current = useCountUp(stat.value, animate);
  return (
    <div
      className={`grid row-span-2 grid-rows-subgrid items-end justify-items-center px-6 text-center ${divider}`}
    >
      <div
        className={`font-bold leading-none text-cream ${displayFont(lang)}`}
        style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
      >
        <span>{current}</span>
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div
        className={`self-start uppercase ${labelTracking(lang)}`}
        style={{
          color: "rgba(250, 247, 245, 0.55)",
          fontSize: labelSize(lang, "0.67rem"),
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats({
  stats,
  lang,
}: {
  stats: Content["stats"];
  lang: Lang;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAnimate(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink py-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 grid-rows-[auto_auto] gap-y-3 md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCell
            key={stat.label}
            stat={stat}
            animate={animate}
            divider={dividerClasses(i, stats.length)}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}
