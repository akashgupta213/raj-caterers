"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function OsmoWeddingParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const triggerElement = root.querySelector("[data-parallax-layers]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
      },
    });

    

    const layers = [
  { layer: "1", yPercent: 70 },   // background
  { layer: "3", yPercent: -40 },  // 👈 TEXT MOVES UP
  { layer: "4", yPercent: 10 },
];
    layers.forEach((layerObj, idx) => {
      tl.to(
        root.querySelectorAll(
          `[data-parallax-layer="${layerObj.layer}"]`
        ),
        {
          yPercent: layerObj.yPercent,
          ease: "none",
        },
        idx === 0 ? undefined : "<"
      );
    });

    // Lenis smooth scroll
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div id="home" className="parallax" ref={containerRef}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>

          <div data-parallax-layers className="parallax__layers">

            {/* BACKGROUND BASE */}
            <img
              src="/images/bg.jpg"
              data-parallax-layer="1"
              className="parallax__bg"
              alt=""
            />

            {/* DEPTH BACKGROUND (optional) */}
            <img
              src="/images/bg.png"
              data-parallax-layer="4"
              className="parallax__bg depth"
              alt=""
            />

            {/* COUPLE — ABOVE BACKGROUND */}
    <img
  src="/images/couple.png"
  className="parallax__couple"
/>

            {/* TITLE — TOP MOST */}
            <div data-parallax-layer="3" className="parallax__layer-title">
  <svg viewBox="0 0 1000 300" className="curve-text">
    
    <path
      id="curve"
      d="M 100 250 Q 500 50 900 250"
      fill="transparent"
    />

    <text className="curve-text-content">
      <textPath href="#curve" startOffset="50%" textAnchor="middle" >
        Raj Caterers
      </textPath>
    </text>

  </svg>
</div>
          </div>

          <div className="parallax__fade"></div>
        </div>
      </section>

      <section className="parallax__content">
        <div style={{ height: "20vh" }} />
      </section>
    </div>
  );
}