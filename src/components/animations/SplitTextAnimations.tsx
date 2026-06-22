"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Utility to split text into words.
 */
const splitIntoWords = (text: string) => {
  return text.split(/(\s+)/); // Preserve spaces
};

/**
 * 3.8 Text Animation Style 3 — 3D Bounce
 * Characters appear with a 3D perspective bounce effect.
 */
export function Text3DBounce({ children, className = "", delay = 0, as = "div", style = {} }: { children: ReactNode, className?: string, delay?: number, as?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p", style?: React.CSSProperties }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const text = typeof children === "string" ? children : "";
  const Component = as as any;

  if (!text) {
    return <Component className={className} style={style}>{children}</Component>;
  }

  const words = splitIntoWords(text);

  return (
    <Component ref={ref} className={className} style={{ perspective: "400px", ...style }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-pre">
          {word.split("").map((char, charIndex) => {
            const globalIndex = wordIndex * 10 + charIndex; // Approximate stagger index
            return (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{ opacity: 0, x: 50, rotateX: -90 }}
                animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: "backOut",
                  delay: delay + globalIndex * 0.02,
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Component>
  );
}

/**
 * 3.6 Text Animation Style 1 — Words Fade In
 */
export function TextFadeWords({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const text = typeof children === "string" ? children : "";

  if (!text) {
    return <div className={className}>{children}</div>;
  }

  const words = splitIntoWords(text);

  return (
    <div ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: delay + wordIndex * 0.05,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

/**
 * 3.7 Text Animation Style 2 — Characters Slide In
 */
export function TextCharSlide({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const text = typeof children === "string" ? children : "";

  if (!text) {
    return <div className={className}>{children}</div>;
  }

  const words = splitIntoWords(text);

  return (
    <div ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-pre">
          {word.split("").map((char, charIndex) => {
            const globalIndex = wordIndex * 10 + charIndex;
            return (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: delay + globalIndex * 0.03,
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </div>
  );
}
