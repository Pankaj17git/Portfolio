"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface ScrollAnimationOptions {
  /** IntersectionObserver threshold (0-1). Default: 0.1 */
  threshold?: number;
  /** Root margin for the observer. Default: "0px 0px -60px 0px" */
  rootMargin?: string;
  /** Whether to trigger only once. Default: false (re-triggers every scroll) */
  triggerOnce?: boolean;
}

/**
 * Custom hook for scroll-triggered reveal animations using IntersectionObserver.
 * Returns a ref to attach to the element you want to animate, and an `isVisible` boolean.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -60px 0px", triggerOnce = false } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * Utility: Returns inline styles for a reveal animation with a stagger delay.
 * Elements start invisible and translate upward when `isVisible` becomes true.
 */
export function getRevealStyle(
  isVisible: boolean,
  delay: number = 0,
  direction: "up" | "left" | "right" | "scale" = "up"
): React.CSSProperties {
  const transforms: Record<string, string> = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
    scale: "scale(0.95)",
  };

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, 0) scale(1)" : transforms[direction],
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: "opacity, transform",
  };
}

/**
 * Utility: Returns inline styles for a staggered child animation (e.g. list items, cards).
 * Use the index to compute the stagger delay.
 */
export function getStaggerStyle(
  isVisible: boolean,
  index: number,
  baseDelay: number = 0.1,
  staggerStep: number = 0.08
): React.CSSProperties {
  const delay = baseDelay + index * staggerStep;
  return getRevealStyle(isVisible, delay, "up");
}
