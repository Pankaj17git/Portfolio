"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Check, Code2, Database, Globe, Terminal } from "lucide-react";
import { useScrollAnimation, getRevealStyle, getStaggerStyle } from "@/hooks/useScrollAnimation";
import AnimatedHeading from "./AnimatedHeading";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons = [
    <Globe key="fe" size={18} color="var(--accent-primary)" />,
    <Terminal key="be" size={18} color="var(--accent-primary)" />,
    <Database key="db" size={18} color="var(--accent-primary)" />,
    <Code2 key="tl" size={18} color="var(--accent-primary)" />,
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="skills" className="section-padding" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef} style={getRevealStyle(headerVisible, 0)}>
          <div className="editorial-label">TECHNICAL CAPABILITIES</div>
          <AnimatedHeading text="Practical Engineering Skills" className="section-title" />
          <p className="section-subtitle">
            Technologies I work with daily to construct reliable web applications. Organized by domain with
            concrete implementation context instead of arbitrary percentage bars.
          </p>
        </div>

        {/* 4-Column Editorial Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "24px",
          }}
        >
          {skills.map((group, idx) => (
            <div
              key={group.category}
              style={{
                ...getStaggerStyle(gridVisible, idx, 0.05, 0.12),
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-md)",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >
                {categoryIcons[idx % categoryIcons.length]}
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {group.category}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                  marginBottom: "20px",
                  minHeight: "38px",
                }}
              >
                {group.description}
              </p>

              {/* Skills List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={skill.name}
                    style={{
                      ...getStaggerStyle(gridVisible, idx * 3 + sIdx, 0.2, 0.04),
                      padding: "10px 12px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: skill.highlight ? "var(--accent-surface)" : "var(--bg-subtle)",
                      border: `1px solid ${skill.highlight ? "var(--accent-border)" : "var(--border-light)"}`,
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                      transition: "transform var(--transition-fast)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          color: skill.highlight ? "var(--accent-primary)" : "var(--text-primary)",
                        }}
                      >
                        {skill.name}
                      </span>

                      {skill.highlight && (
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.625rem",
                            fontWeight: 700,
                            color: "var(--accent-primary)",
                            textTransform: "uppercase",
                          }}
                        >
                          CORE
                        </span>
                      )}
                    </div>

                    {skill.note && (
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.4,
                        }}
                      >
                        {skill.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
