"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, CheckCircle2, Code2, Database, Layers, Sparkles } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

export default function Hero() {
  const { personal } = portfolioData;

  const coreSkills = [
    { name: "Next.js", type: "Full-Stack" },
    { name: "Angular", type: "Enterprise UI" },
    { name: "Prisma ORM", type: "Data Access" },
    { name: "MySQL / SQL", type: "Relational DB" },
    { name: "React.js", type: "Frontend" },
    { name: "Node.js & Express", type: "Backend API" },
    { name: "TypeScript", type: "Type Safety" },
    { name: "MongoDB", type: "Document DB" },
  ];

  return (
    <section
      style={{
        paddingTop: "64px",
        paddingBottom: "72px",
        borderBottom: "1px solid var(--border-color)",
        position: "relative",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "980px" }}>
          {/* Editorial Category Label */}
          <div className="editorial-label hero-label-entrance">
            SOFTWARE DEVELOPER · 1 YEAR OF LIVE PRODUCTION WORK
          </div>

          {/* Main Editorial Headline */}
          <AnimatedHeading
            text="Building practical software, from responsive interface to relational database."
            as="h1"
            className="hero-headline-entrance"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "var(--text-primary)",
              marginBottom: "24px",
            }}
          />

          {/* Supporting Bio Paragraph */}
          <p
            className="hero-bio-entrance"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              maxWidth: "840px",
              marginBottom: "36px",
            }}
          >
            I&apos;m <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Pankaj Choudhary</strong>,
            a full-stack developer with 1 year of hands-on experience building production web applications at{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Kaspro Solutions</span>.
            I focus on shipping reliable user interfaces in <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Next.js</span> and{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Angular</span>, coupled with structured RESTful APIs and type-safe relational schemas using{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Prisma + MySQL</span>.
          </p>

          {/* Action CTAs */}
          <div
            className="hero-cta-entrance"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginBottom: "48px",
            }}
          >
            <a href="#projects" className="btn btn-primary" style={{ padding: "12px 24px" }}>
              <span>View Selected Projects</span>
              <ArrowDown size={16} />
            </a>

            <a href="#contact" className="btn btn-secondary" style={{ padding: "12px 24px" }}>
              <span>Contact Directly</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="/resume"
              className="btn"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px dashed var(--border-dark)",
                color: "var(--text-primary)",
                padding: "12px 20px",
              }}
            >
              <span>View &amp; Print CV</span>
            </a>
          </div>

          {/* Live Skill Badges */}
          <div
            className="hero-skills-entrance"
            style={{
              borderTop: "1px solid var(--border-light)",
              paddingTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <Sparkles size={14} color="var(--accent-primary)" className="subtle-float" />
              <span>Core Stack &amp; Live Project Competencies</span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {coreSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 12px",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.8125rem",
                    transition: "border-color var(--transition-fast), transform var(--transition-fast)",
                    opacity: 0,
                    animation: `skillBadgePop 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.8 + index * 0.06}s forwards`,
                  }}
                >
                  <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{skill.name}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--accent-primary)",
                      backgroundColor: "var(--accent-surface)",
                      padding: "1px 6px",
                      borderRadius: "2px",
                    }}
                  >
                    {skill.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Factual Evidence Metrics Row (Restrained, Swiss alignment) */}
        <div
          className="hero-metrics-entrance"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--border-color)",
            border: "1px solid var(--border-color)",
            marginTop: "56px",
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
          }}
        >
          <div style={{ backgroundColor: "var(--bg-surface)", padding: "20px 24px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                marginBottom: "4px",
              }}
            >
              PRACTICAL TENURE
            </div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              1 Year
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              Active professional full-stack development
            </div>
          </div>

          <div style={{ backgroundColor: "var(--bg-surface)", padding: "20px 24px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                marginBottom: "4px",
              }}
            >
              CURRENT FIRM
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: "1.4",
              }}
            >
              Kaspro Solutions
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--accent-primary)", fontWeight: 500, marginTop: "2px" }}>
              MERN &amp; Full-Stack Developer
            </div>
          </div>

          <div style={{ backgroundColor: "var(--bg-surface)", padding: "20px 24px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                marginBottom: "4px",
              }}
            >
              DATA MODELING
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: "1.4",
              }}
            >
              Prisma + MySQL / Mongo
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              Relational migrations &amp; schemas
            </div>
          </div>

          <div style={{ backgroundColor: "var(--bg-surface)", padding: "20px 24px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                marginBottom: "4px",
              }}
            >
              SPECIALIZATION
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: "1.4",
              }}
            >
              Interface to Database
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              React, Next.js, Angular, Node.js
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
