"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle2, ChevronRight, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="editorial-label">TRACK RECORD</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            One year of continuous engineering experience contributing to production codebases,
            participating in agile sprint routines, and shipping features end-to-end.
          </p>
        </div>

        {/* Experience Editorial Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {experience.map((exp, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-md)",
                padding: "36px 32px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
              }}
            >
              {/* Header row: Company, Role, Period */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "16px",
                  borderBottom: "1px solid var(--border-light)",
                  paddingBottom: "24px",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--accent-primary)",
                        backgroundColor: "var(--accent-surface)",
                        padding: "2px 8px",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      {exp.type}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.8125rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.625rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {exp.role}
                  </h3>

                  <div
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "var(--accent-primary)",
                      marginTop: "2px",
                    }}
                  >
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 12px",
                    backgroundColor: "var(--bg-subtle)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-sm)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  <Calendar size={14} color="var(--accent-primary)" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Overview */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "24px",
                  maxWidth: "920px",
                }}
              >
                {exp.description}
              </p>

              {/* Concrete Key Responsibilities */}
              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "14px",
                  }}
                >
                  Key Responsibilities &amp; Shipped Work
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "14px",
                  }}
                >
                  {exp.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.875rem",
                        color: "var(--text-primary)",
                        lineHeight: 1.5,
                        backgroundColor: "var(--bg-subtle)",
                        padding: "12px 14px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="var(--accent-primary)"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied on the Job */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                  }}
                >
                  Technologies Regularly Applied
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.technologies.map((t) => (
                    <span key={t} className="pill pill-accent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
