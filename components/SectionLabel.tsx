import type { Lang } from "@/lib/content";
import { labelSize, labelTracking } from "@/lib/lang";

export default function SectionLabel({
  children,
  lang = "en",
}: {
  children: React.ReactNode;
  lang?: Lang;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-semibold uppercase text-ink-3 ${labelTracking(lang)}`}
      style={{ fontSize: labelSize(lang, "0.7rem") }}
    >
      <span className="h-px w-7 bg-cream-3" />
      <span>{children}</span>
    </div>
  );
}
