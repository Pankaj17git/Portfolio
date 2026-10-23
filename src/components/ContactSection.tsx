"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Check, Copy, FileText, Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { useScrollAnimation, getRevealStyle, getStaggerStyle } from "@/hooks/useScrollAnimation";
import AnimatedHeading from "./AnimatedHeading";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { ref: leftColRef, isVisible: leftColVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject || "Software Engineering Role / Introduction"
    )}&body=${encodeURIComponent(message || "Hi Pankaj,\n\nI reviewed your portfolio and would like to connect.")}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-padding" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Column 1: Invitation & Verified Direct Contacts */}
          <div ref={leftColRef}>
            <div style={getRevealStyle(leftColVisible, 0)}>
              <div className="editorial-label">GET IN TOUCH</div>
              <AnimatedHeading
                text="Have a role where I could contribute?"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  marginBottom: "16px",
                }}
              />

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "32px",
                }}
              >
                I am actively seeking software developer opportunities where I can apply my full-stack skills
                in <strong style={{ color: "var(--text-primary)" }}>Next.js</strong>,{" "}
                <strong style={{ color: "var(--text-primary)" }}>Angular</strong>,{" "}
                <strong style={{ color: "var(--text-primary)" }}>Node.js</strong>, and{" "}
                <strong style={{ color: "var(--text-primary)" }}>Prisma + MySQL</strong> to build reliable production applications.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {/* Email Card with Copy Action */}
              <div
                style={{
                  ...getStaggerStyle(leftColVisible, 0, 0.15, 0.1),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      padding: "8px",
                      borderRadius: "var(--radius-xs)",
                      backgroundColor: "var(--accent-surface)",
                      color: "var(--accent-primary)",
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-secondary)" }}>
                      DIRECT EMAIL
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      style={{
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ padding: "6px 12px", fontSize: "0.75rem" }}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} color="var(--accent-primary)" />
                      <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div
                style={{
                  ...getStaggerStyle(leftColVisible, 1, 0.15, 0.1),
                  display: "flex",
                  alignItems: "center",
                  padding: "14px 18px",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-sm)",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: "var(--accent-surface)",
                    color: "var(--accent-primary)",
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-secondary)" }}>
                    PHONE / WHATSAPP
                  </div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    style={{
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div
                style={{
                  ...getStaggerStyle(leftColVisible, 2, 0.15, 0.1),
                  display: "flex",
                  alignItems: "center",
                  padding: "14px 18px",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-sm)",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: "var(--accent-surface)",
                    color: "var(--accent-primary)",
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-secondary)" }}>
                    LOCATION &amp; AVAILABILITY
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                    {personal.location} · <span style={{ color: "var(--accent-primary)" }}>Open to Remote &amp; On-Site</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div style={{ ...getRevealStyle(leftColVisible, 0.45), display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
              >
                <GithubIcon size={15} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="/resume"
                className="btn btn-primary"
                style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
              >
                <FileText size={15} />
                <span>View Full Résumé</span>
              </a>
            </div>
          </div>

          {/* Column 2: Direct Email Dispatch Form (Opens Native Client Cleanly) */}
          <div
            ref={formRef}
            style={{
              ...getRevealStyle(formVisible, 0.1, "right"),
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-md)",
              padding: "32px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent-primary)",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              SEND DIRECT MESSAGE
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "8px",
              }}
            >
              Start an Engineering Conversation
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              Have an open position or wish to discuss my implementation in WorkHub, Dhiyafah, or EatsBee?
              Compose your note below:
            </p>

            <form onSubmit={handleSendDraft} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                  }}
                >
                  Subject / Role Description
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Software Developer Opening at [Company]"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--bg-subtle)",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                  }}
                >
                  Message / Invitation
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Hi Pankaj, we came across your work in Next.js, Angular, and Prisma and would like to talk about a software developer role..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--bg-subtle)",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "12px" }}>
                <Send size={16} />
                <span>Launch Mail Client with Pre-filled Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
