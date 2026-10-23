"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowLeft, Download, Mail, MapPin, Phone, Printer } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const { personal, experience, skills, education, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ backgroundColor: "#F7F6F2", minHeight: "100vh", padding: "40px 16px" }}>
      {/* Top action bar (hidden during print) */}
      <div
        className="no-print"
        style={{
          maxWidth: "850px",
          margin: "0 auto 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <Link
          href="/"
          className="btn btn-secondary"
          style={{ padding: "8px 16px", fontSize: "0.875rem" }}
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        <button
          onClick={handlePrint}
          className="btn btn-primary"
          style={{ padding: "8px 18px", fontSize: "0.875rem" }}
        >
          <Printer size={16} />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Resume Document Paper */}
      <main
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          backgroundColor: "#FFFFFF",
          padding: "56px 64px",
          border: "1px solid #DEDED6",
          borderRadius: "4px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#252721",
        }}
      >
        {/* Header */}
        <header
          style={{
            borderBottom: "2px solid #252721",
            paddingBottom: "20px",
            marginBottom: "28px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "6px",
            }}
          >
            {personal.name}
          </h1>

          <div
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#526B56",
              marginBottom: "8px",
            }}
          >
            Full-Stack Software Developer (1 Year Professional Experience)
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "18px",
              fontSize: "0.875rem",
              color: "#73756D",
            }}
          >
            <span>{personal.location}</span>
            <span>·</span>
            <a href={`mailto:${personal.email}`} style={{ color: "#252721" }}>
              {personal.email}
            </a>
            <span>·</span>
            <a href={`tel:${personal.phone.replace(/\s+/g, "")}`} style={{ color: "#252721" }}>
              {personal.phone}
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "0.875rem",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#526B56",
              fontWeight: 700,
              borderBottom: "1px solid #DEDED6",
              paddingBottom: "4px",
              marginBottom: "10px",
            }}
          >
            Objective &amp; Profile
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "#252721", lineHeight: 1.6 }}>
            Early-career Full-Stack Software Developer with 1 year of professional experience building and
            deploying web applications at Kaspro Solutions. Skilled across the entire stack with expertise in
            React.js, Next.js, Angular, Node.js, Express, and relational data persistence using Prisma ORM &amp;
            MySQL as well as MongoDB. Proven ability to integrate secure authentication, manage transactional
            workflows, and collaborate in agile team environments.
          </p>
        </section>

        {/* Work Experience */}
        <section style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "0.875rem",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#526B56",
              fontWeight: 700,
              borderBottom: "1px solid #DEDED6",
              paddingBottom: "4px",
              marginBottom: "12px",
            }}
          >
            Work Experience
          </h2>

          {experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <strong style={{ fontSize: "1.0625rem" }}>{exp.company}</strong>
                  <div style={{ fontSize: "0.9375rem", color: "#526B56", fontWeight: 600 }}>
                    {exp.role}
                  </div>
                </div>
                <div style={{ fontFamily: "monospace", fontSize: "0.8125rem", color: "#73756D" }}>
                  {exp.period}
                </div>
              </div>

              <ul style={{ paddingLeft: "20px", marginTop: "8px", fontSize: "0.875rem", lineHeight: 1.6 }}>
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} style={{ marginBottom: "4px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Selected Projects */}
        <section style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "0.875rem",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#526B56",
              fontWeight: 700,
              borderBottom: "1px solid #DEDED6",
              paddingBottom: "4px",
              marginBottom: "12px",
            }}
          >
            Engineering Projects
          </h2>

          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <strong style={{ fontSize: "1rem" }}>{proj.title}</strong>
                  <span style={{ fontSize: "0.8125rem", color: "#73756D", marginLeft: "8px" }}>
                    ({proj.category})
                  </span>
                </div>
                <div style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#526B56" }}>
                  {proj.stack.join(" · ")}
                </div>
              </div>

              <p style={{ fontSize: "0.875rem", color: "#252721", marginTop: "4px", lineHeight: 1.5 }}>
                {proj.description}
              </p>
              <div style={{ fontSize: "0.8125rem", color: "#526B56", marginTop: "2px" }}>
                <strong>Key contribution:</strong> {proj.engineeringFocus}
              </div>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "0.875rem",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#526B56",
              fontWeight: 700,
              borderBottom: "1px solid #DEDED6",
              paddingBottom: "4px",
              marginBottom: "12px",
            }}
          >
            Technical Competencies
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem" }}>
            <div>
              <strong>Frontend:</strong> React.js, Next.js (App Router), Angular, TypeScript, JavaScript (ES6+),
              HTML5, CSS3, Context API, Bootstrap, Material UI, RxJS.
            </div>
            <div>
              <strong>Backend &amp; APIs:</strong> Node.js, Express.js, RESTful API Design, JWT Authentication,
              Bcrypt.js, Axios, Multer, JSON Server.
            </div>
            <div>
              <strong>Databases &amp; ORM:</strong> Prisma ORM, MySQL, SQL, MongoDB, Mongoose.
            </div>
            <div>
              <strong>Developer Tools:</strong> Git, GitHub, Postman, VS Code, Vite, Chrome DevTools, Prettier.
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2
            style={{
              fontSize: "0.875rem",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#526B56",
              fontWeight: 700,
              borderBottom: "1px solid #DEDED6",
              paddingBottom: "4px",
              marginBottom: "12px",
            }}
          >
            Education
          </h2>

          {education.map((edu, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.875rem",
                marginBottom: "6px",
              }}
            >
              <div>
                <strong>{edu.degree}</strong> – {edu.institution}
              </div>
              <div style={{ fontFamily: "monospace", color: "#73756D" }}>
                {edu.score} | {edu.period}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
