"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function AntigravityEffect() {
  useEffect(() => {
    // Only run on non-mobile screens
    const isMobile = window.matchMedia("(max-width: 991px)").matches;
    if (isMobile) return;

    const floaters = document.querySelectorAll(".gsap-float");
    if (!floaters.length) return;

    // Continuous random float animation
    floaters.forEach(function (el) {
      gsap.to(el, {
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-10, 10),
        rotation: gsap.utils.random(-5, 5),
        duration: gsap.utils.random(2, 4),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: gsap.utils.random(0, 2),
      });
    });

    // Mouse repel effect
    const handleMouseMove = (e: MouseEvent) => {
      floaters.forEach(function (el) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const threshold = 120; // repel radius in px

        if (dist < threshold) {
          const force = (threshold - dist) / threshold;
          gsap.to(el, {
            x: "-=" + dx * force * 0.4,
            y: "-=" + dy * force * 0.4,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          // It eventually returns to its normal floating state because 
          // the continuous animation has repeat: -1 and yoyo: true.
          // However, we can add a slight spring back to its origin if needed:
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
          });
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
