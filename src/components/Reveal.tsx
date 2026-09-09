import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

export function Reveal({ children, as, delay = 0, className }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduced || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setShown(true);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <Tag
      ref={ref}
      className={["reveal", shown ? "in" : "", className].filter(Boolean).join(" ")}
      style={{ transitionDelay: `${delay * 70}ms` }}
    >
      {children}
    </Tag>
  );
}
