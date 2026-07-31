"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextValue = {
  theme: "light" | "dark";
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Inline script injected in <head> so the correct theme class is applied
 * before React hydrates, avoiding a light/dark flash on load. */
export const noFlashScript = `
(function() {
  try {
    var stored = localStorage.getItem('abc-theme');
    var theme = stored ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("abc-theme", next);
      } catch {
        /* localStorage unavailable — theme just won't persist */
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
