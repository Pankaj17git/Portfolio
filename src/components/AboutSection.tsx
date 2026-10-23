"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Award, BookOpen, Check, Compass, GraduationCap, Laptop, Sparkles } from "lucide-react";
import { useScrollAnimation, getRevealStyle, getStaggerStyle } from "@/hooks/useScrollAnimation";
import AnimatedHeading from "./AnimatedHeading";

export default function AboutSection() {
  const { education, engineeringApproach } = portfolioData;

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: narrativeRef, isVisible: narrativeVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });
  const { ref: principlesRef, isVisible: principlesVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="about" className="section-padding" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={sectionRef} style={getRevealStyle(sectionVisible, 0)}>
          <div className="editorial-label">ENGINEERING PROFILE</div>
          <AnimatedHeading text="About Pankaj Choudhary" className="section-title" />
          <p className="section-subtitle">
            An early-career software engineer driven by practical problem solving, clean state boundaries,
            and shipping dependable web applications.
          </p>
        </div>

        {/* 2-Column Layout: Narrative & Principles / Education */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Column 1: Authentic Narrative */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              ref={narrativeRef}
              style={{
                ...getRevealStyle(narrativeVisible, 0.1),
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-md)",
                padding: "32px",
                lineHeight: 1.7,
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Compass size={18} color="var(--accent-primary)" />
                My Trajectory &amp; Mindset
              </h3>

              <p style={{ color: "var(--text-secondary)", marginBottom: "16px", fontSize: "0.9375rem" }}>
                I graduated with a Bachelor of Computer Application (BCA) with a CGPA of 7.8, where I built a
                strong foundation in computer science fundamentals—relational database theory, data structures, and
                object-oriented programming.
              </p>

              <p style={{ color: "var(--text-secondary)", marginBottom: "16px", fontSize: "0.9375rem" }}>
                Over the past year at Kaspro Solutions, I transitioned that academic base into everyday software
                delivery. I don&apos;t just write visual components; I care deeply about how state travels across the wire,
                how database tables are indexed, and how errors are surfaced to end users.
              </p>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                Recently, I expanded my technical range from React and Node.js into <strong style={{ color: "var(--text-primary)" }}>Next.js App Router</strong>,{" "}
                <strong style={{ color: "var(--text-primary)" }}>Angular</strong> enterprise patterns, and type-safe database schemas with{" "}
                <strong style={{ color: "var(--text-primary)" }}>Prisma + MySQL</strong>. I am eager to join an engineering team with high standards where I can continue learning from senior developers and shipping impactful features.
              </p>
            </div>

            {/* Academic Credentials */}
            <div
              ref={educationRef}
              style={{
                ...getRevealStyle(educationVisible, 0.15),
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-md)",
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <GraduationCap size={20} color="var(--accent-primary)" />
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Education &amp; Credentials
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...getStaggerStyle(educationVisible, idx, 0.2, 0.1),
                      borderBottom: idx !== education.length - 1 ? "1px solid var(--border-light)" : "none",
                      paddingBottom: idx !== education.length - 1 ? "16px" : 0,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                        {edu.degree}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--accent-primary)",
                          backgroundColor: "var(--accent-surface)",
                          padding: "1px 6px",
                          borderRadius: "2px",
                        }}
                      >
                        {edu.score}
                      </span>
                    </div>

                    <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                      {edu.institution} · <span style={{ fontFamily: "var(--font-mono)" }}>{edu.period}</span>
                    </div>

                    <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "6px" }}>
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Engineering Approach Principles */}
          <div
            ref={principlesRef}
            style={{
              ...getRevealStyle(principlesVisible, 0.1, "right"),
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-md)",
              padding: "32px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent-primary)",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              HOW I WORK
            </div>

            <h3
              style={{
                fontSize: "1.375rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "24px",
              }}
            >
              Core Engineering Principles
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {engineeringApproach.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    ...getStaggerStyle(principlesVisible, idx, 0.15, 0.1),
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--accent-surface)",
                      color: "var(--accent-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
