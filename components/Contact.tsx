import type { Content, Lang } from "@/lib/content";
import { displayFont, uiTracking } from "@/lib/lang";

type Props = {
  content: Content["contact"];
  lang: Lang;
};

export default function Contact({ content, lang }: Props) {
  return (
    <footer
      id="contact"
      className="border-t border-cream-3 bg-cream-2 px-6 pt-20 pb-10 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          {/* LEFT */}
          <div>
            <p
              className={`font-bold leading-none text-ink ${displayFont(lang)}`}
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              {content.name}
            </p>
            <p
              className={`mt-3 text-[0.78rem] uppercase text-ink-3 ${uiTracking(lang, "tracking-[0.08em]")}`}
            >
              {content.tagline}
            </p>
          </div>

          {/* RIGHT */}
          <ul
            className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.74rem] font-semibold uppercase ${uiTracking(lang, "tracking-[0.1em]")}`}
          >
            {content.links.map((link, i) => (
              <li key={link.label} className="flex items-center gap-3">
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(link.download ? { download: true } : {})}
                  className="text-ink-3 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
                {i < content.links.length - 1 && (
                  <span aria-hidden className="text-cream-3">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream-3 pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.72rem] text-ink-3">{content.copyright}</p>
          <a
            href={content.ctaHref}
            className={`text-[0.72rem] font-bold uppercase text-ink transition-colors hover:text-accent ${uiTracking(lang, "tracking-[0.08em]")}`}
          >
            {content.cta}
          </a>
        </div>
      </div>
    </footer>
  );
}
