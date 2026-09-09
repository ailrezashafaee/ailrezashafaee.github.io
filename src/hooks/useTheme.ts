import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem("theme");
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(readStored);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const resolved =
        current ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next: Theme = resolved === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        void 0;
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
