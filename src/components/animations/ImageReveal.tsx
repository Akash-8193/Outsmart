"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ImageReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !imageWrapperRef.current) return;

    // 3.4 Image Reveal — Curtain Wipe
    // Container starts off-screen left, image offset right to compensate
    const container = containerRef.current;
    const image = imageWrapperRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%", // adjust as needed
        toggleActions: "play none none none",
      },
    });

    gsap.set(container, { autoAlpha: 1 });
    tl.fromTo(
      container,
      { xPercent: -100 },
      { xPercent: 0, duration: 1, ease: "power2.out" }
    );
    tl.fromTo(
      image,
      { xPercent: 100, scale: 1.1 },
      { xPercent: 0, scale: 1, duration: 1, ease: "power2.out" },
      "<" // Start at the same time
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden invisible ${className}`}
    >
      <div ref={imageWrapperRef} className="w-full h-full relative">
        {children}
      </div>
    </div>
  );
}
