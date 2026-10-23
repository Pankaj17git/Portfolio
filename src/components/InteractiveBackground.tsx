"use client";

import React, { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        if (!isHovered) setIsHovered(true);
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* 1. Soft Interactive Mouse Spotlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent-glow, rgba(13, 148, 136, 0.08)), transparent 75%)`
            : "transparent",
          transition: "opacity 0.4s ease",
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* 2. Soft Ambient Pastel Mesh Orbs (Gentle, airy, never dark) */}
      <div
        className="ambient-orb orb-primary"
        style={{
          position: "absolute",
          top: "-8%",
          right: "2%",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-1, rgba(13, 148, 136, 0.09)) 0%, transparent 70%)",
          filter: "blur(110px)",
          opacity: 0.8,
          animation: "floatOrb1 20s ease-in-out infinite alternate",
        }}
      />

      <div
        className="ambient-orb orb-secondary"
        style={{
          position: "absolute",
          top: "38%",
          left: "-10%",
          width: "620px",
          height: "620px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-2, rgba(2, 132, 199, 0.08)) 0%, transparent 70%)",
          filter: "blur(130px)",
          opacity: 0.75,
          animation: "floatOrb2 24s ease-in-out infinite alternate-reverse",
        }}
      />

      <div
        className="ambient-orb orb-tertiary"
        style={{
          position: "absolute",
          bottom: "2%",
          right: "8%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-3, rgba(139, 92, 246, 0.07)) 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.65,
          animation: "floatOrb3 22s ease-in-out infinite alternate",
        }}
      />

      {/* 3. Subtle Clean Dot-Matrix Canvas Texture */}
      <div
        className="tech-grid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(var(--grid-dot-color, rgba(148, 163, 184, 0.12)) 1.2px, transparent 1.2px),
            linear-gradient(to right, var(--grid-line-color, rgba(148, 163, 184, 0.03)) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line-color, rgba(148, 163, 184, 0.03)) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 128px 128px, 128px 128px",
          maskImage: "radial-gradient(ellipse 95% 85% at 50% 25%, black 25%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 85% at 50% 25%, black 25%, transparent 95%)",
          opacity: 0.7,
        }}
      />

      {/* 4. Soft Frosted Floating Stack Badges */}
      <div
        className="floating-glyph subtle-float"
        style={{
          position: "absolute",
          top: "16%",
          left: "3%",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "var(--accent-primary)",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          userSelect: "none",
          padding: "5px 12px",
          border: "1px solid var(--border-color)",
          borderRadius: "20px",
          boxShadow: "0 2px 8px rgba(100, 116, 139, 0.06)",
          animationDuration: "6s",
        }}
      >
        {"<Next.js AppRouter />"}
      </div>

      <div
        className="floating-glyph subtle-float"
        style={{
          position: "absolute",
          top: "30%",
          right: "2.5%",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "var(--secondary-accent, #0284C7)",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          userSelect: "none",
          padding: "5px 12px",
          border: "1px solid var(--border-color)",
          borderRadius: "20px",
          boxShadow: "0 2px 8px rgba(100, 116, 139, 0.06)",
          animationDuration: "8s",
          animationDelay: "-3s",
        }}
      >
        {"schema.prisma · MySQL"}
      </div>

      <div
        className="floating-glyph subtle-float"
        style={{
          position: "absolute",
          top: "62%",
          left: "2.5%",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "var(--purple-accent, #8B5CF6)",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          userSelect: "none",
          padding: "5px 12px",
          border: "1px solid var(--border-color)",
          borderRadius: "20px",
          boxShadow: "0 2px 8px rgba(100, 116, 139, 0.06)",
          animationDuration: "7s",
          animationDelay: "-1.5s",
        }}
      >
        {"Angular · RxJS"}
      </div>
    </div>
  );
}
