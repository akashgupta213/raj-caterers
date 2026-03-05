"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//9 images
const images = Array.from(
  { length: 12 },
  (_, i) => `/images/gallery/img${i + 1}.jpg`
);

export default function GalleryStackReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {


  gsap.fromTo(
  ".gallery-flower.left",
  {
    x: -120,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".gallery-stack",
      start: "top 70%",
    },
  }
);

gsap.fromTo(
  ".gallery-flower.right",
  {
    x: 120,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".gallery-stack",
      start: "top 70%",
    },
  }
);
  const container = containerRef.current;
  if (!container) return;

  const items = container.querySelectorAll(".gallery-item");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "+=120%",
      scrub: 1.2,
      pin: true,
    },
  });

  // Initial hidden state
  gsap.set(items, {
    scale: 0.8,
    opacity: 0,
  });

  // ONLY reveal animation
  tl.to(items, {
    scale: 1,
    opacity: 1,
    stagger: {
      each: 0.08,
      from: "center",
    },
    ease: "power2.out",
    duration: 1.2,
  });

}, []);

  return (
    <section className="gallery-stack" ref={containerRef}>

      {/* SIDE FLOWERS */}
  <img
    src="/images/gallery/border.png"
    className="gallery-flower left"
    alt=""
  />

  <img
    src="/images/gallery/border.png"
    className="gallery-flower right"
    alt=""
  />

      {/* TOP DIVIDER HEADING */}
  <div className="gallery-heading">
    <span>Check Some of Latest Wedding Work</span>
  </div>
      
      <div className="gallery-grid">
        {images.map((src, i) => {
          const isCenter = i === 4;

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