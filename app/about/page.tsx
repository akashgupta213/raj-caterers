"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar"; // adjust path if needed

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    // ABOUT TITLE
    gsap.from(".about-title", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
      },
    });

    // ABOUT TEXT
    gsap.from(".about-description p", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
      },
    });

    // TIMELINE LINE DRAW
    gsap.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 80%",
      },
    });

    // TIMELINE ITEMS — ALTERNATE SLIDE
    gsap.utils.toArray(".timeline-item").forEach((card: any, i) => {

      const direction = i % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        card,
        {
          x: direction,
          y: 80,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );

    });

    // IMAGE PARALLAX
    gsap.utils.toArray(".timeline-item img").forEach((img: any) => {

      gsap.fromTo(
        img,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

    });

    // AUTO PROGRESS LINE FILL
gsap.fromTo(
  ".timeline-line",
  {
    scaleY: 0,
  },
  {
    scaleY: 1,
    transformOrigin: "top center",
    ease: "none",
    scrollTrigger: {
      trigger: ".timeline-container",
      start: "top 100%",
      end: "bottom 150%",
      scrub: true,   // 👈 smooth progress with scroll
    },
  }
);

  }, containerRef);

  return () => ctx.revert();
}, []);
  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">

      {/* ✅ NAVBAR */}
      <Navbar />

      {/* ABOUT HERO */}
<section className="about-hero flex flex-col justify-center items-center text-center px-6">

  {/* Label */}
  <p className="about-label mb-4">
    About Us
  </p>

  {/* Title */}
  <h1 className="about-title mb-6">
    Raj Caterers
  </h1>

  {/* Subtitle */}
  <p className="about-subtitle mb-8">
    Delivering Excellence in Catering & Event Experiences
  </p>

  {/* Description */}
  <div className="about-description">

    <p>
      Raj Caterers is committed to providing exceptional catering services
      and memorable event experiences tailored to every occasion. With a
      strong emphasis on quality, hospitality, and attention to detail,
      we have earned the trust of clients by consistently delivering
      celebrations that leave lasting impressions.
    </p>

    <p>
      From intimate family gatherings to grand weddings and corporate
      events, our team blends culinary expertise with elegant presentation
      to create unforgettable moments. At Raj Caterers, we believe that
      outstanding food and thoughtful service form the foundation of every
      successful celebration.
    </p>

  </div>

  {/* Signature */}
  <div className="about-signature mt-10">
    Crafting Experiences • Serving Happiness • Creating Memories
  </div>

</section>
      


      {/* HALL SHOWCASE */}
      <section className="hall-section py-24 relative ">
  <div className="text-center mb-20">
    <h2 className="text-3xl md:text-5xl font-semibold mb-4">
      Our Banquet Halls
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto">
      Elegant spaces designed to host celebrations of every scale with
      comfort, style, and unforgettable ambiance.
    </p>
  </div>

  <div className="timeline-container">

    {/* Vertical Line */}
    <div className="timeline-line"></div>

    {/* Card 1 */}
    <div className="hall-card timeline-item">
      <img src="/images/hall1.jpg" alt="" />
      <div className="timeline-content">
        <h3>Durga Wati Hall</h3>
        <p>Perfect for weddings and large gatherings with premium décor.</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="hall-card timeline-item">
      <img src="/images/hall2.jpg" alt="" />
      <div className="timeline-content">
        <h3>Nisha Garden</h3>
        <p>Elegant interiors with modern amenities for memorable events.</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="hall-card timeline-item">
      <img src="/images/hall3.jpg" alt="" />
      <div className="timeline-content">
        <h3>Om Sai Hall</h3>
        <p>Ideal for birthdays, receptions, and private celebrations.</p>
      </div>
    </div>

  </div>
</section>

    </div>
  );
}

