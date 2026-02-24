"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 25 images
const images = Array.from(
  { length: 25 },
  (_, i) => `/images/gallery/img${i + 1}.jpg`
);

export default function GalleryStackReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".gallery-item");
    const centerItem = container.querySelector(".center-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=250%",
        scrub: 1.2,   // 👈 smoother scroll interpolation
        pin: true,
      },
    });

    // Initial state
    gsap.set(items, {
      scale: 0.7,
      opacity: 0,
      transformPerspective: 1000,
    });

    // STEP 1 — Grid reveal
    tl.to(items, {
      scale: 1,
      opacity: 1,
      stagger: {
        each: 0.03,
        from: "center",
      },
      ease: "power2.out",
      duration: 1.2,
    });

    // STEP 2 — Depth compression
    tl.to(
      items,
      {
        scale: 0.65,
        opacity: 0.45,
        ease: "power2.inOut",
        duration: 1.2,
      },
      "-=0.4"
    );

    // STEP 3 — Center forward cinematic
    tl.to(
      centerItem,
      {
        scale: 2.4,
        zIndex: 20,
        opacity: 1,
        ease: "power3.out",
        duration: 1.5,
      },
      "-=0.8"
    );
  }, []);

  return (
    <section className="gallery-stack" ref={containerRef}>
      <div className="gallery-grid">
        {images.map((src, i) => {
          const isCenter = i === 12;

          return (
            <div
              key={i}
              className={`gallery-item ${isCenter ? "center-item" : ""}`}
            >
              <img src={src} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}