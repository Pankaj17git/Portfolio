"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";

interface AnimatedHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AnimatedHeading — Splits text into individual characters and applies a
 * cascading wave animation on mouse hover. Each letter gets a slight
 * translateY bounce + rotation + color accent, staggered by index.
 *
 * On mouse leave, the letters smoothly return to their original position.
 */
export default function AnimatedHeading({
  text,
  as: Tag = "h2",
  className,
  style,
}: AnimatedHeadingProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [waveOrigin, setWaveOrigin] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) {
        setWaveOrigin(0);
        setIsHovered(true);
        return;
      }
      // Calculate which character index the mouse entered closest to
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const fraction = relativeX / rect.width;
      const charCount = text.replace(/\s/g, "").length;
      setWaveOrigin(Math.round(fraction * charCount));
      setIsHovered(true);
    },
    [text]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Split text into words and characters, preserving spaces
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <Tag
      ref={containerRef as React.Ref<HTMLHeadingElement>}
      className={className}
      style={{
        ...style,
        cursor: "default",
        display: "inline-block",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char) => {
            const charIdx = globalCharIndex++;
            // Distance from wave origin determines delay
            const distFromOrigin = Math.abs(charIdx - waveOrigin);
            const delay = distFromOrigin * 0.025; // 25ms stagger per character distance

            return (
              <span
                key={`${wIdx}-${charIdx}`}
                style={{
                  display: "inline-block",
                  transition: `transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s, color 0.3s ease ${delay}s`,
                  transform: isHovered
                    ? `translateY(-4px) rotate(${charIdx % 2 === 0 ? -2 : 2}deg) scale(1.05)`
                    : "translateY(0) rotate(0deg) scale(1)",
                  color: isHovered ? "var(--accent-primary)" : "inherit",
                  willChange: "transform",
                }}
              >
                {char}
              </span>
            );
          })}
          {/* Add space between words (except last) */}
          {wIdx < words.length - 1 && (
            <span style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
