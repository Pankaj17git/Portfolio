"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("pankaj-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("pankaj-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) {
    return (
      <div style={{ width: "36px", height: "36px" }} aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "soft light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "soft light"} mode`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        borderRadius: "var(--radius-sm, 8px)",
        border: "1px solid var(--border-color)",
        backgroundColor: "var(--bg-surface)",
        color: "var(--text-primary)",
        transition: "all var(--transition-fast)",
        cursor: "pointer",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
      className="theme-toggle-btn"
    >
      {theme === "light" ? (
        <Moon size={16} color="#6366F1" style={{ transition: "transform 0.25s ease" }} />
      ) : (
        <Sun size={16} color="#F59E0B" style={{ transition: "transform 0.25s ease" }} />
      )}
    </button>
  );
}
