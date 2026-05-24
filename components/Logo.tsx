"use client";

import { useState } from "react";

// Sources tried in order: local override → Google favicons → DuckDuckGo icons.
// Drop a file at `public/logos/{domain}.png` (e.g. `nju.edu.cn.png`) to override the remote services.
const SOURCES: ((domain: string) => string)[] = [
  (d) => `/logos/${d}.png`,
  (d) => `https://www.google.com/s2/favicons?domain=${d}&sz=128`,
  (d) => `https://icons.duckduckgo.com/ip3/${d}.ico`,
];

type Props = {
  domain?: string;
  alt: string;
  size?: number;
};

export default function Logo({ domain, alt, size = 22 }: Props) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  if (!domain || hidden) return null;

  return (
    <img
      key={srcIndex}
      src={SOURCES[srcIndex](domain)}
      alt={`${alt} logo`}
      loading="lazy"
      onError={() => {
        if (srcIndex < SOURCES.length - 1) {
          setSrcIndex(srcIndex + 1);
        } else {
          setHidden(true);
        }
      }}
      className="inline-block flex-shrink-0 rounded-[2px] object-contain"
      style={{ width: size, height: size }}
    />
  );
}
