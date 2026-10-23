"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, GitCommit, Layers, ShieldCheck } from "lucide-react";
import { useScrollAnimation, getRevealStyle, getStaggerStyle } from "@/hooks/useScrollAnimation";
import AnimatedHeading from "./AnimatedHeading";

export default function CaseStudySection() {
  const { caseStudy } = portfolioData;

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: leftColRef, isVisible: leftColVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });
  const { ref: rightColRef, isVisible: rightColVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section
      id="case-study"
      className="section-padding"
      style={{
        backgroundColor: "var(--dark-bg)",
        color: "var(--dark-text-primary)",
      }}
    >
      <div className="container">
        {/* Section Header with Dark Palette Tokens */}
        <div ref={headerRef} style={{ ...getRevealStyle(headerVisible, 0), maxWidth: "860px", marginBottom: "48px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--dark-accent)",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "var(--dark-accent)",
                borderRadius: "1px",
              }}
            />
            ENGINEERING CASE STUDY
          </div>

          <AnimatedHeading
            text={caseStudy.title}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "var(--dark-text-primary)",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          />

          <div
            style={{
              fontSize: "1.125rem",
              color: "var(--dark-accent)",
              fontWeight: 500,
            }}
          >
            Focus Project: {caseStudy.project}
          </div>
        </div>

        {/* 2-Column Editorial Grid: The Challenge vs The Implementation */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          {/* Column 1: Context & The Specific Engineering Challenge */}
          <div
            ref={leftColRef}
            style={{
              ...getRevealStyle(leftColVisible, 0.1, "left"),
              backgroundColor: "var(--dark-surface)",
              border: "1px solid var(--dark-border)",
              borderRadius: "var(--radius-md)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--dark-accent)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                01 · THE PROBLEM CONTEXT
              </div>
              <p
                style={{
                  color: "var(--dark-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                }}
              >
                {caseStudy.problem}
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--dark-border)",
                paddingTop: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--dark-accent)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                02 · TECHNICAL HURDLE
              </div>
              <p
                style={{
                  color: "var(--dark-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                }}
              >
                {caseStudy.challenge}
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--dark-border)",
                paddingTop: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--dark-accent)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                03 · ARCHITECTURAL TRADE-OFF
              </div>
              <p
                style={{
                  color: "var(--dark-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                }}
              >
                {caseStudy.tradeoffs}
              </p>
            </div>
          </div>

          {/* Column 2: The Step-by-Step Approach & Concrete Results */}
          <div
            ref={rightColRef}
            style={{
              ...getRevealStyle(rightColVisible, 0.15, "right"),
              backgroundColor: "var(--dark-surface)",
              border: "1px solid var(--dark-border)",
              borderRadius: "var(--radius-md)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--dark-accent)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                04 · IMPLEMENTATION STEPS
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                {caseStudy.approach.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...getStaggerStyle(rightColVisible, idx, 0.2, 0.08),
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      backgroundColor: "var(--dark-surface-subtle)",
                      padding: "14px 16px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--dark-border)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--dark-accent)",
                        padding: "2px 6px",
                        backgroundColor: "var(--dark-bg)",
                        borderRadius: "2px",
                        flexShrink: 0,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        color: "var(--dark-text-primary)",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome & Takeaway */}
            <div
              style={{
                ...getRevealStyle(rightColVisible, 0.5, "scale"),
                backgroundColor: "var(--dark-bg)",
                border: "1px solid var(--dark-accent)",
                borderRadius: "var(--radius-sm)",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--dark-accent)",
                  marginBottom: "6px",
                }}
              >
                <ShieldCheck size={16} />
                <span>MEASURED OUTCOME &amp; LEARNING</span>
              </div>
              <div
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--dark-text-primary)",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {caseStudy.outcome}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--dark-text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                &ldquo;{caseStudy.keyLearning}&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
