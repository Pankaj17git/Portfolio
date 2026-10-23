"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import HeroArchitectureTerminal from "./HeroArchitectureTerminal";

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
        paddingTop: "60px",
        paddingBottom: "72px",
        borderBottom: "1px solid var(--border-color)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Responsive 2-Column Hero: Story on Left, Live Architecture Terminal on Right */}
        <div
          className="hero-grid-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Headlines, Bio, CTAs, Skills */}
          <div>
            {/* Editorial Category Label */}
            <div className="editorial-label hero-label-entrance">
              SOFTWARE DEVELOPER · 1 YEAR OF LIVE PRODUCTION WORK
            </div>

            {/* Main Headline */}
            <AnimatedHeading
              text="Building practical software, from responsive interface to relational database."
              as="h1"
              className="hero-headline-entrance"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            />

            {/* Supporting Bio Paragraph */}
            <p
              className="hero-bio-entrance"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                maxWidth: "600px",
                marginBottom: "32px",
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
                gap: "12px",
                marginBottom: "36px",
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ padding: "11px 22px" }}>
                <span>View Selected Projects</span>
                <ArrowDown size={15} />
              </a>

              <a href="#contact" className="btn btn-secondary" style={{ padding: "11px 22px" }}>
                <span>Contact Directly</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="/resume"
                className="btn"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px dashed var(--border-dark)",
                  color: "var(--text-primary)",
                  padding: "11px 18px",
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
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Sparkles size={13} color="var(--accent-primary)" className="subtle-float" />
                <span>Core Stack &amp; Live Project Competencies</span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {coreSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      padding: "5px 10px",
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "0.78rem",
                      transition: "border-color var(--transition-fast), transform var(--transition-fast)",
                      opacity: 0,
                      animation: `skillBadgePop 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + index * 0.05}s forwards`,
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

          {/* Right Column: Hero Architecture Terminal */}
          <div className="hero-terminal-entrance" style={{ width: "100%" }}>
            <HeroArchitectureTerminal />
          </div>
        </div>

        {/* Factual Evidence Metrics Row */}
        <div
          className="hero-metrics-entrance"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--border-color)",
            border: "1px solid var(--border-color)",
            marginTop: "52px",
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
            boxShadow: "var(--card-shadow)",
          }}
        >
          <div style={{ backgroundColor: "var(--bg-surface)", padding: "20px 24px", transition: "background-color 0.2s ease" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                marginBottom: "4px",
                letterSpacing: "0.04em",
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

          <div style={{ backgroundColor: "var(--bg-surface)", padding: "20px 24px", transition: "background-color 0.2s ease" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                marginBottom: "4px",
                letterSpacing: "0.04em",
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

          <div style={{ backgroundColor: "var(--bg-surface)", padding: "20px 24px", transition: "background-color 0.2s ease" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                marginBottom: "4px",
                letterSpacing: "0.04em",
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

          <div style={{ backgroundColor: "var(--bg-surface)", padding: "20px 24px", transition: "background-color 0.2s ease" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                marginBottom: "4px",
                letterSpacing: "0.04em",
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

      <style jsx>{`
        @media (min-width: 980px) {
          .hero-grid-layout {
            grid-template-columns: 1.15fr 0.9fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
