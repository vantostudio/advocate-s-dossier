import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(t: Theme) {
  document.documentElement.classList.toggle("dark", t === "dark");
  try {
    localStorage.setItem("dossier-theme", t);
  } catch {
    /* storage unavailable */
  }
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = (() => {
      try {
        return localStorage.getItem("dossier-theme") as Theme | null;
      } catch {
        return null;
      }
    })();
    const initial: Theme =
      stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to day edition" : "Switch to night edition"}
      title={theme === "dark" ? "Day edition" : "Night edition"}
      className={`group relative flex h-9 items-center gap-2 rounded-full border border-charcoal/20 px-3 text-[11px] tracking-[0.16em] uppercase text-ink-muted transition-colors hover:border-bronze hover:text-charcoal ${className}`}
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        <span
          className={`absolute h-3 w-3 rounded-full border border-current transition-all duration-500 ${theme === "dark" ? "bg-transparent shadow-[inset_-3px_-1px_0_0_currentColor]" : "bg-current"}`}
        />
      </span>
      <span className="hidden md:inline">{theme === "dark" ? "Night" : "Day"}</span>
    </button>
  );
}
