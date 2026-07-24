"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Content, Lang } from "@/lib/content";
import { displayFont, uiTracking } from "@/lib/lang";

type Props = {
  content: Content["nav"];
  lang: Lang;
};

const LANG_OPTIONS: { href: string; label: string; key: Lang }[] = [
  { href: "/", label: "English", key: "en" },
  { href: "/zh", label: "中文", key: "zh" },
];

export default function Nav({ content, lang }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);
  const navMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh") ?? false;

  const linkSize = lang === "zh" ? "0.85rem" : "0.72rem";

  useEffect(() => {
    const sections = content.links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [content.links]);

  // Close menus on outside click + Escape
  useEffect(() => {
    if (!langOpen && !navOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        langOpen &&
        langRef.current &&
        !langRef.current.contains(target)
      ) {
        setLangOpen(false);
      }
      if (
        navOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(target)
      ) {
        setNavOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLangOpen(false);
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen, navOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-cream-3 px-6 md:px-10 lg:px-16"
      style={{
        background: "rgba(250, 247, 245, 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between">
        <Link
          href={isZh ? "/zh" : "/"}
          className={`flex h-full items-center pt-[2px] text-[1.15rem] font-bold leading-none text-ink tracking-tight ${displayFont(lang)}`}
        >
          {content.logo}
        </Link>

        <div className="flex h-full items-center gap-3 md:gap-7">
          {/* Desktop links */}
          <ul className="hidden h-full items-center gap-7 md:flex">
            {content.links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} className="flex items-center">
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`inline-flex items-center font-semibold uppercase leading-none transition-colors hover:text-accent ${uiTracking(lang, "tracking-[0.14em]")}`}
                    style={{
                      color: isActive ? "var(--accent)" : "var(--ink-3)",
                      fontSize: linkSize,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger + dropdown (dropdown must live inside the ref so the
              outside-click handler doesn't close the menu before a link tap navigates) */}
          <div ref={navMenuRef} className="md:hidden">
            <button
              type="button"
              onClick={() => {
                setNavOpen((o) => !o);
                setLangOpen(false);
              }}
              aria-label={isZh ? "菜单" : "Menu"}
              aria-expanded={navOpen}
              aria-haspopup="menu"
              className="flex h-9 w-9 items-center justify-center border border-cream-3 text-[1.1rem] leading-none text-ink-3 transition-colors hover:border-accent hover:text-accent"
            >
              <span aria-hidden>☰</span>
            </button>

            {navOpen && (
              <div
                role="menu"
                className="absolute left-0 right-0 top-full border-b border-cream-3"
                style={{
                  background: "rgba(250, 247, 245, 0.98)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <ul className="mx-auto max-w-[1280px] px-6 py-3">
                  {content.links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        role="menuitem"
                        onClick={() => setNavOpen(false)}
                        className={`block py-2.5 font-semibold uppercase text-ink-2 transition-colors hover:text-accent ${uiTracking(lang, "tracking-[0.14em]")}`}
                        style={{ fontSize: lang === "zh" ? "0.95rem" : "0.82rem" }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Language picker */}
          <div ref={langRef} className="relative flex items-center">
            <button
              type="button"
              onClick={() => {
                setLangOpen((o) => !o);
                setNavOpen(false);
              }}
              aria-label={isZh ? "切换语言" : "Switch language"}
              aria-expanded={langOpen}
              aria-haspopup="menu"
              className="flex h-9 w-9 items-center justify-center border border-cream-3 text-[1rem] leading-none text-ink-3 transition-colors hover:border-accent hover:text-accent"
            >
              <span aria-hidden>🌐</span>
            </button>

            {langOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 min-w-[8rem] border border-cream-3 bg-cream py-1 shadow-[0_12px_36px_-14px_rgba(28,25,23,0.18)]"
              >
                {LANG_OPTIONS.map((opt) => {
                  const isCurrent = opt.key === lang;
                  return (
                    <Link
                      key={opt.key}
                      href={opt.href}
                      role="menuitem"
                      onClick={() => setLangOpen(false)}
                      aria-current={isCurrent ? "true" : undefined}
                      className="flex items-center justify-between gap-3 px-3 py-2 text-[0.78rem] font-medium transition-colors hover:bg-cream-2 hover:text-accent"
                      style={{ color: isCurrent ? "var(--accent)" : "var(--ink-2)" }}
                    >
                      <span>{opt.label}</span>
                      {isCurrent && (
                        <span aria-hidden className="text-[0.7rem]">
                          ✓
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

    </nav>
  );
}
