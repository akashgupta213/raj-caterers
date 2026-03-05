"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function OsmoWeddingParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {


     gsap.from(".animate-text", {
    x: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".destination-content",
      start: "top 80%",
    }
  });

  gsap.from(".animate-images", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".destination-content",
      start: "top 80%",
    }
  });

    
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
      { layer: "1", yPercent: 70 }, // background
      { layer: "2", yPercent: -30 }, // heading
      { layer: "3", yPercent: -40 }, // cards
    ];

    layers.forEach((layerObj, idx) => {
      tl.to(
        root.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
        {
          yPercent: layerObj.yPercent,
          ease: "none",
        },
        idx === 0 ? undefined : "<",
      );
    });

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div id="home" className="parallax" ref={containerRef}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div data-parallax-layers className="parallax__layers">
            {/* BACKGROUND COLOR */}
            <div data-parallax-layer="1" className="parallax__bg-color" />

            {/* HEADING */}
            <div data-parallax-layer="2" className="parallax__heading">
              "Your dream wedding, our expertise"
            </div>

            {/* WEDDING CARDS */}
            <div data-parallax-layer="3" className="parallax__layer-title">
              <div className="parallax__title-images mobile-scroll">
                <img src="/images/gallery/img1.jpg" alt="" />
                <img src="/images/gallery/img2.jpg" alt="" />
                <img src="/images/gallery/img3.jpg" alt="" />
              </div>
            </div>

            {/* FLOWER — separate element */}
            <img
              src="/images/flower.png"
              alt=""
              className=" hero-flower"
              data-parallax-layer="3"
            />
          </div>
        </div>
      </section>

      <section className="parallax__content">
        <div style={{ height: "16vh" }} />
      </section>

      {/* ================= DESTINATION SECTION ================= */}

      <section className="destination-section">
        <img
          src="/images/gallery/leaf.png"
          alt=""
          className="destination-leaf"
        />

        <h1 className="destination-title">Destination Wedding</h1>

        {/* GOLD ORNAMENT */}
        <div className="destination-divider">
          <img src="/images/gallery/divider-design.png" alt="divider" />
        </div>

        {/* DESTINATIONS */}
        <div className="destination-grid">
          {[
            "goa",
            "jaipur",
            "jaisalmer",
            "jodhpur",
            "mumbai",
            "rajasthan",
            "udaipur",
            "thailand",
            "cruise",
          ].map((item, i) => (
            <div key={i} className="destination-item">
              <img src={`/images/gallery/${item}.jpg`} alt={item} />
              <p>{item}</p>
            </div>
          ))}
        </div>

        {/* CONTENT AREA */}
        {/* TOP CENTER HEADING */}
        <div className="destination-top-heading">
          <h2>
            My Wedding Planning - Your Destination Wedding Specialist
            Destination Wedding Planner
          </h2>
        </div>

        <div className="destination-content">
          {/* LEFT TEXT */}
          <div className="destination-text animate-text">
            <h4>Indian Wedding Specialist</h4>

            <p>
              My Wedding Planning specializes in managing just these occasions;
              from small, intimate family events to large, spectacular
              celebrations. Weddings are the only thing we do! We can plan your
              entire wedding from venue bookings, vendor management to the
              overall design and execution.
            </p>

            <p>
              My Wedding Planning specializes in managing just these occasions;
              from small, intimate family events to large, spectacular
              celebrations. Weddings are the only thing we do! We can plan your
              entire wedding from venue bookings, vendor management to the
              overall design and execution.
            </p>
          </div>

          <div>
            {/* RIGHT IMAGES */}
            <div className="destination-images animate-images">
              <img
                src="/images/gallery/img1.jpg"
                className="img-large"
                alt="hello"
              />

              <img
                src="/images/gallery/img2.jpg"
                className="img-small"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
