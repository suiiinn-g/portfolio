"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type Options = {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
};

export function useIntersection<T extends Element = HTMLElement>(
  options: Options = {},
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin, once = true } = options;
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) {
              obs.disconnect();
              return;
            }
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, visible];
}
