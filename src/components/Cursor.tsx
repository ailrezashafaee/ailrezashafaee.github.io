import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let active = false;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!active) {
        active = true;
        currentX = targetX;
        currentY = targetY;
        node.classList.add("on");
      }
    };

    const onLeave = () => node.classList.remove("on");
    const onEnter = () => {
      if (active) node.classList.add("on");
    };

    const grow = () => node.classList.add("grow");
    const shrink = () => node.classList.remove("grow");

    const interactive = document.querySelectorAll<HTMLElement>("a, button, .row, .card");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    const loop = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      node.style.transform = `translate3d(${currentX - 11}px, ${currentY - 11}px, 0)`;
      frame = window.requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    frame = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, [reduced]);

  if (reduced) return null;
  return <div className="cursor" ref={ref} aria-hidden="true" />;
}
