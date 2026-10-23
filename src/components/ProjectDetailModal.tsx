"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { X, CheckCircle2, AlertCircle, Wrench, BookOpen } from "lucide-react";
import Image from "next/image";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(37, 39, 33, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--radius-lg)",
          maxWidth: "880px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 28px",
            borderBottom: "1px solid var(--border-color)",
            backgroundColor: "var(--bg-subtle)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent-primary)",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              {project.category}
            </div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginTop: "2px",
              }}
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: "8px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: "28px" }}>
          {/* Screenshot Display */}
          <div
            style={{
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              marginBottom: "28px",
              backgroundColor: "var(--bg-page)",
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Verified Tech Stack
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.stack.map((tech) => (
                <span key={tech} className="pill pill-accent">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Context */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <AlertCircle size={18} color="var(--accent-primary)" />
              Problem &amp; Product Context
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{project.problem}</p>
          </div>

          {/* My Personal Contribution */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Wrench size={18} color="var(--accent-primary)" />
              My Direct Engineering Contributions
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.myContribution.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "0.9375rem",
                    color: "var(--text-primary)",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color="var(--accent-primary)"
                    style={{ flexShrink: 0, marginTop: "3px" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Decisions & Focus */}
          <div
            style={{
              padding: "20px",
              backgroundColor: "var(--accent-surface)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--accent-border)",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--accent-primary)",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Engineering Focus &amp; Technical Decisions
            </div>
            <p style={{ color: "var(--text-primary)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
              {project.engineeringFocus}
            </p>
          </div>

          {/* Lessons Learned */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <BookOpen size={18} color="var(--accent-primary)" />
              What I Learned on This Project
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{project.whatILearned}</p>
          </div>

          {/* Footer Actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              borderTop: "1px solid var(--border-light)",
              paddingTop: "20px",
            }}
          >
            <button onClick={onClose} className="btn btn-secondary">
              Close Details
            </button>
            <a href="#contact" onClick={onClose} className="btn btn-primary">
              Inquire About Implementation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
