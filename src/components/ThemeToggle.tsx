"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("ember");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "ember" ? "midnight" : "ember";
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-zinc-800/40 border border-orange-700/40 p-3 rounded-full hover:scale-105 transition-all"
    >
      {theme === "ember" ? (
        <Moon size={20} className="text-orange-300" />
      ) : (
        <Sun size={20} className="text-violet-300" />
      )}
    </button>
  );
}