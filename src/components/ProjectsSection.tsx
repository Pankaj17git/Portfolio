"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, ChevronRight, Eye, Layers } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";
import { useScrollAnimation, getRevealStyle, getStaggerStyle } from "@/hooks/useScrollAnimation";
import AnimatedHeading from "./AnimatedHeading";

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const { projects } = portfolioData;

  const filters = [
    { id: "all", label: "All Selected Projects" },
    { id: "next", label: "Next.js / React" },
    { id: "angular", label: "Angular" },
    { id: "prisma", label: "Prisma & MySQL / SQL" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "next") return project.stack.some((s) => s.includes("Next") || s.includes("React"));
    if (selectedFilter === "angular") return project.stack.some((s) => s.includes("Angular"));
    if (selectedFilter === "prisma") return project.stack.some((s) => s.includes("Prisma") || s.includes("SQL") || s.includes("MySQL"));
    return true;
  });

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const supportingProjects = projects.filter((p) => p.id !== featuredProject.id);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="projects" className="section-padding" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          style={{
            ...getRevealStyle(headerVisible, 0),
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "36px",
          }}
        >
          <div className="editorial-label">CORE WORK &amp; EVIDENCE</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div>
              <AnimatedHeading text="Selected Engineering Projects" className="section-title" />
              <p className="section-subtitle">
                Demonstrating practical experience across frontend architectures, transactional backend logic,
                and relational database modeling.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                backgroundColor: "var(--bg-surface)",
                padding: "4px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-color)",
              }}
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  style={{
                    padding: "6px 14px",
                    fontSize: "0.8125rem",
                    fontWeight: selectedFilter === filter.id ? 600 : 500,
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: selectedFilter === filter.id ? "var(--accent-primary)" : "transparent",
                    color: selectedFilter === filter.id ? "#FFFFFF" : "var(--text-secondary)",
                    transition: "all var(--transition-fast)",
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURED PROJECT: Editorial Highlight (WorkHub) */}
        {selectedFilter === "all" || filteredProjects.some((p) => p.id === featuredProject.id) ? (
          <div
            ref={featuredRef}
            style={{
              ...getRevealStyle(featuredVisible, 0.05, "scale"),
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              marginBottom: "40px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                alignItems: "stretch",
              }}
            >
              {/* Left Column: Context, Contribution, Decisions */}
              <div
                style={{
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--accent-primary)",
                        backgroundColor: "var(--accent-surface)",
                        padding: "2px 8px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--accent-border)",
                      }}
                    >
                      FEATURED CASE
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {featuredProject.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: "8px",
                    }}
                  >
                    {featuredProject.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "var(--accent-primary)",
                      marginBottom: "16px",
                    }}
                  >
                    {featuredProject.tagline}
                  </p>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "20px",
                    }}
                  >
                    {featuredProject.description}
                  </p>

                  {/* Contributions */}
                  <div style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "10px",
                      }}
                    >
                      My Key Engineering Contributions
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {featuredProject.myContribution.slice(0, 3).map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            ...getStaggerStyle(featuredVisible, idx, 0.2, 0.08),
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontSize: "0.875rem",
                            color: "var(--text-primary)",
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            color="var(--accent-primary)"
                            style={{ flexShrink: 0, marginTop: "3px" }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Decision Callout */}
                  <div
                    style={{
                      padding: "12px 16px",
                      backgroundColor: "var(--bg-subtle)",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "3px solid var(--accent-primary)",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        color: "var(--accent-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      TECHNICAL DECISION (PRISMA + MYSQL)
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {featuredProject.engineeringFocus}
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Stack & Actions */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "20px",
                    }}
                  >
                    {featuredProject.stack.map((t) => (
                      <span key={t} className="pill pill-accent">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => setActiveModalProject(featuredProject)}
                      className="btn btn-primary"
                      style={{ padding: "8px 18px", fontSize: "0.875rem" }}
                    >
                      <Eye size={15} />
                      <span>Inspect Full Architecture</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: High-fidelity Interface Screenshot */}
              <div
                style={{
                  backgroundColor: "var(--bg-page)",
                  borderLeft: "1px solid var(--border-color)",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    cursor: "pointer",
                    transition: "transform var(--transition-fast)",
                  }}
                  onClick={() => setActiveModalProject(featuredProject)}
                  title="Click to view full architectural details"
                >
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.title} Production Interface`}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      padding: "8px 14px",
                      borderTop: "1px solid var(--border-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span>Click screenshot to expand deep-dive</span>
                    <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
                      Live Schema Preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* SUPPORTING PROJECTS: 2-Column Varied Editorial Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {supportingProjects
            .filter((p) => {
              if (selectedFilter === "all") return true;
              return filteredProjects.some((fp) => fp.id === p.id);
            })
            .map((project, pIdx) => (
              <div
                key={project.id}
                style={{
                  ...getStaggerStyle(gridVisible, pIdx, 0.05, 0.12),
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color var(--transition-fast), transform var(--transition-fast)",
                }}
              >
                <div>
                  {/* Image Preview */}
                  <div
                    style={{
                      borderBottom: "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-page)",
                      padding: "16px",
                      cursor: "pointer",
                    }}
                    onClick={() => setActiveModalProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Interface`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "var(--radius-xs)",
                        border: "1px solid var(--border-light)",
                        display: "block",
                      }}
                    />
                  </div>

                  <div style={{ padding: "24px 24px 16px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        color: "var(--accent-primary)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      {project.category}
                    </div>

                    <h3
                      style={{
                        fontSize: "1.375rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        marginBottom: "16px",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Contributions preview */}
                    <div style={{ marginBottom: "16px" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6875rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          textTransform: "uppercase",
                          marginBottom: "8px",
                        }}
                      >
                        Personal Implementation
                      </div>
                      <ul
                        style={{
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        {project.myContribution.slice(0, 2).map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                              fontSize: "0.8125rem",
                              color: "var(--text-primary)",
                            }}
                          >
                            <CheckCircle2
                              size={14}
                              color="var(--accent-primary)"
                              style={{ flexShrink: 0, marginTop: "2px" }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer of card */}
                <div
                  style={{
                    padding: "0 24px 20px",
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "5px",
                      marginBottom: "14px",
                    }}
                  >
                    {project.stack.map((t) => (
                      <span key={t} className="pill" style={{ fontSize: "0.6875rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-secondary"
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      fontSize: "0.8125rem",
                    }}
                  >
                    <span>Inspect Details &amp; Lessons</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
}
