"use client";

import React, { useState } from "react";
import { Check, Copy, Play, Terminal, Database, FileCode, CheckCircle2 } from "lucide-react";

export default function HeroArchitectureTerminal() {
  const [activeTab, setActiveTab] = useState<"prisma" | "next" | "angular">("prisma");
  const [copied, setCopied] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [queryOutput, setQueryOutput] = useState<string | null>(null);

  const tabs = [
    { id: "prisma", label: "schema.prisma", icon: <Database size={13} color="var(--accent-primary)" /> },
    { id: "next", label: "api/projects/route.ts", icon: <FileCode size={13} color="var(--secondary-accent, #06B6D4)" /> },
    { id: "angular", label: "kaspro.service.ts", icon: <Terminal size={13} color="var(--purple-accent, #8B5CF6)" /> },
  ] as const;

  const codeSnippets = {
    prisma: `// datasource db: MySQL @ Kaspro Solutions
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model ProjectRecord {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(191)
  client      String   @default("Kaspro")
  status      Status   @default(ACTIVE)
  modules     Module[]
  updatedAt   DateTime @updatedAt
  
  @@index([status, updatedAt])
}`,
    next: `import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  // Production query with relational includes
  const records = await prisma.projectRecord.findMany({
    where: { status: "ACTIVE" },
    include: { modules: true },
    orderBy: { updatedAt: "desc" },
    take: 10
  });

  return NextResponse.json({ ok: true, records, count: records.length });
}`,
    angular: `import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, shareReplay } from "rxjs";

@Injectable({ providedIn: "root" })
export class KasproApiService {
  private http = inject(HttpClient);
  private endpoint = "/api/projects";

  // Reactive observable stream
  readonly projects$ = this.http
    .get<ProjectResponse>(this.endpoint)
    .pipe(shareReplay(1));
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunQuery = () => {
    setSimulating(true);
    setQueryOutput(null);
    setTimeout(() => {
      setSimulating(false);
      setQueryOutput(`✓ 200 OK · MySQL Query Executed in 14ms
[
  { "id": 101, "client": "Kaspro Solutions", "status": "ACTIVE", "modules": 4 }
]`);
    }, 450);
  };

  return (
    <div
      style={{
        borderRadius: "12px",
        border: "1px solid var(--border-color)",
        backgroundColor: "var(--dark-bg, #1E293B)",
        boxShadow: "0 16px 36px -10px rgba(100, 116, 139, 0.16), 0 0 0 1px var(--border-color)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontSize: "0.8125rem",
        position: "relative",
        backdropFilter: "blur(16px)",
      }}
      className="hero-terminal-card"
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderBottom: "1px solid var(--dark-border, rgba(255, 255, 255, 0.08))",
          backgroundColor: "var(--dark-surface, #243247)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FB7185", opacity: 0.85 }} />
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FBBF24", opacity: 0.85 }} />
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#34D399", opacity: 0.85 }} />
          <span
            style={{
              marginLeft: "10px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--dark-text-secondary, #94A3B8)",
              letterSpacing: "0.02em",
            }}
          >
            pankaj@kaspro-prod: ~/workspace
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--accent-primary)",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              padding: "2px 8px",
              borderRadius: "4px",
              border: "1px solid rgba(16, 185, 129, 0.25)",
            }}
          >
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--accent-primary)" }} />
            LIVE STACK
          </span>
        </div>
      </div>

      {/* Tabs navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          borderBottom: "1px solid var(--dark-border, rgba(255, 255, 255, 0.06))",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          overflowX: "auto",
        }}
      >
        <div style={{ display: "flex", gap: "2px" }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setQueryOutput(null);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 12px",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#F8FAFC" : "var(--dark-text-secondary, #94A3B8)",
                  borderBottom: isActive ? "2px solid var(--accent-primary)" : "2px solid transparent",
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.04)" : "transparent",
                  transition: "all var(--transition-fast)",
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy snippet"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 8px",
            fontSize: "0.7rem",
            color: copied ? "var(--accent-primary)" : "var(--dark-text-secondary, #94A3B8)",
            borderRadius: "4px",
            transition: "all var(--transition-fast)",
          }}
          title="Copy code"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Code body */}
      <div
        style={{
          padding: "16px 18px",
          overflowX: "auto",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8125rem",
          lineHeight: "1.65",
          color: "#E2E8F0",
          backgroundColor: "rgba(10, 14, 23, 0.8)",
          minHeight: "220px",
        }}
      >
        <pre style={{ margin: 0 }}>
          <code>{codeSnippets[activeTab]}</code>
        </pre>

        {queryOutput && (
          <div
            style={{
              marginTop: "14px",
              padding: "10px 12px",
              borderRadius: "4px",
              backgroundColor: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              color: "var(--accent-primary)",
              fontSize: "0.75rem",
              whiteSpace: "pre-wrap",
            }}
          >
            {queryOutput}
          </div>
        )}
      </div>

      {/* Interactive Footer Action */}
      <div
        style={{
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid var(--dark-border, rgba(255, 255, 255, 0.06))",
          backgroundColor: "var(--dark-surface, #243247)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.7rem", color: "var(--dark-text-secondary, #94A3B8)" }}>
          <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>MySQL 8.0</span>
          <span>·</span>
          <span>Next.js 14 Turbopack</span>
          <span>·</span>
          <span>TypeScript 5.x</span>
        </div>

        <button
          onClick={handleRunQuery}
          disabled={simulating}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 10px",
            fontSize: "0.72rem",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            borderRadius: "4px",
            backgroundColor: "var(--accent-surface, rgba(16, 185, 129, 0.15))",
            color: "var(--accent-primary)",
            border: "1px solid var(--accent-border, rgba(16, 185, 129, 0.3))",
            cursor: simulating ? "wait" : "pointer",
            transition: "all var(--transition-fast)",
          }}
        >
          <Play size={10} fill="currentColor" />
          <span>{simulating ? "Executing..." : "Test Query"}</span>
        </button>
      </div>
    </div>
  );
}
