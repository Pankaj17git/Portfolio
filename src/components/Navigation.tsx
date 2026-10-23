"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Menu, X, FileText, Mail } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Selected Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Capabilities", href: "#skills" },
    { label: "Case Study", href: "#case-study" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(247, 246, 242, 0.94)" : "var(--bg-page)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border-color)" : "transparent"}`,
        transition: "all var(--transition-fast)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Brand / Name & Status */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "1.125rem",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            {portfolioData.personal.name}
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "2px 8px",
              fontSize: "0.6875rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              color: "var(--accent-primary)",
              backgroundColor: "var(--accent-surface)",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--accent-border)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-primary)",
              }}
            />
            1 YR EXP · FULL-STACK
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                transition: "color var(--transition-fast)",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Resume & Contact) */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "12px",
          }}
          className="desktop-actions"
        >
          <a
            href="/resume"
            className="btn btn-secondary"
            style={{ padding: "7px 14px", fontSize: "0.8125rem" }}
          >
            <FileText size={14} />
            <span>Résumé</span>
          </a>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: "7px 14px", fontSize: "0.8125rem" }}
          >
            <Mail size={14} />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            color: "var(--text-primary)",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--bg-surface)",
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            borderBottom: "1px solid var(--border-color)",
            padding: "20px 24px 28px",
          }}
          className="mobile-dropdown"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  padding: "6px 0",
                  borderBottom: "1px solid var(--border-light)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
            <a
              href="/resume"
              className="btn btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <FileText size={16} />
              <span>View Full Résumé</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Mail size={16} />
              <span>Contact Pankaj</span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
