"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-page)",
        borderTop: "1px solid var(--border-color)",
        padding: "48px 0 40px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            borderBottom: "1px solid var(--border-light)",
            paddingBottom: "28px",
            marginBottom: "28px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {portfolioData.personal.name}
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                marginTop: "2px",
              }}
            >
              Software Developer · MERN, Next.js, Angular, Prisma &amp; MySQL
            </div>
          </div>

          {/* Quick Links & Back to Top */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}
            >
              Projects
            </a>
            <a
              href="#experience"
              style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}
            >
              Experience
            </a>
            <a
              href="#skills"
              style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}
            >
              Skills
            </a>
            <a
              href="#about"
              style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}
            >
              About
            </a>
            <a
              href="#contact"
              style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}
            >
              Contact
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: "6px 12px", fontSize: "0.75rem" }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Sub-footer metadata */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-secondary)",
          }}
        >
          <div>
            © 2026 Pankaj Choudhary. Built with Next.js, TypeScript &amp; Vanilla CSS.
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            <span>Editorial Swiss Typography</span>
            <span>·</span>
            <span>Kaspro Solutions (2025–Present)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
