"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".about-title", {
        y: 80,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
      });

      gsap.from(".about-description p", {
        y: 60,
        opacity: 0,
        duration: 1.3,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 85%",
        },
      });

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

      gsap.utils.toArray(".timeline-item").forEach((card: any, i) => {
        const direction = i % 2 === 0 ? -100 : 100;

        gsap.fromTo(
          card,
          { x: direction, y: 80, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });

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

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 100%",
            end: "bottom 150%",
            scrub: true,
          },
        }
      );


      // EXPERIENCE CARDS
gsap.from(".experience-card", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".experience-card",
    start: "top 85%",
  },
});

// HISTORY SECTION
gsap.from(".history-section", {
  opacity: 0,
  y: 80,
  scale: 0.95,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".history-section",
    start: "top 85%",
  },
});

// OWNER IMAGE
gsap.from(".owner-image", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".owner-image",
    start: "top 85%",
  },
});

// OWNER TEXT
gsap.from(".owner-text", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".owner-text",
    start: "top 85%",
  },
});


    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* ================= ABOUT HERO (UNCHANGED) ================= */}
      <section className="about-hero flex flex-col justify-center items-center text-center px-6">

        <p className="about-label mb-4">
          About Us
        </p>

        <h1 className="about-title mb-6">
          Raj Caterers
        </h1>

        <p className="about-subtitle mb-8">
          Delivering Excellence in Catering & Event Experiences
        </p>

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

        <div className="about-signature mt-10">
          Crafting Experiences • Serving Happiness • Creating Memories
        </div>

      </section>


      {/* ================= EXPERIENCE + CONTACT ================= */}
      <section className="exp-section py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="experience-card p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-4xl font-bold text-yellow-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">10+</h3>
            <p className="text-gray-300 mt-2 text-yellow-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">Years of Experience</p>
          </div>

          <div className="experience-card p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-yellow-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">Call Us</h3>
            <p className="text-gray-300 mt-2 text-yellow-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">+91 9334127247</p>
          </div>

          <div className="experience-card p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-yellow-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">Email</h3>
            <p className="text-gray-300 mt-2 text-yellow-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">rajcaterer247@gmail.com</p>
          </div>

        </div>
      </section>


      {/* ================= HISTORY ================= */}
      <section className="history-section py-24 px-6 bg-neutral-900">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="
      text-4xl md:text-5xl
      font-bold
      mb-8
      text-yellow-400
      drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]
    ">
      Our Journey
    </h2>

    <p className="
      text-lg md:text-xl
      font-semibold
      text-gray-200
      leading-relaxed
      drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
    ">
      Raj Caterers was founded with a vision to bring exceptional food,
      elegant presentation, and heartfelt hospitality to every celebration.
      Over the years, we have successfully catered weddings, corporate
      events, and private gatherings, earning the trust of our clients
      through quality service and attention to detail.
    </p>

    <p className="
      text-lg md:text-xl
      font-semibold
      text-white-300
      mt-8
      leading-relaxed
      drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
    ">
      Today, Raj Caterers continues to grow while maintaining the same
      passion and commitment that started our journey — creating memorable
      experiences through food and celebration.
    </p>

  </div>
</section>


      {/* ================= OWNER SECTION ================= */}
      <section className="owner-section py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="owner-image flex justify-center">
  <img
    src="/images/bg.png"
    alt="Owner"
    className="
      w-70 h-70 object-cover rounded-full
      border-4 border-yellow-400
      shadow-[0_0_40px_rgba(212,175,55,0.35)]
      transition hover:scale-105
    "
  />
</div>

          <div className="owner-text">

  <h2 className="
    text-yellow-400
    text-4xl md:text-5xl
    font-bold
    mb-4
    drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]
  ">
    Meet Our Founder
  </h2>

  {/* Optional Name */}
  <p className="text-white text-lg font-semibold mb-2 tracking-wide">
    Mr. Raj Kumar Gupta
  </p>

  {/* Optional Role */}
  <p className="text-yellow-300 text-sm mb-6 uppercase tracking-widest">
    Founder & Director
  </p>

  <p className="
    text-gray-300
    text-lg md:text-xl
    leading-relaxed
    font-medium
    drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]
  ">
    With a passion for culinary excellence and event perfection,
    our founder has dedicated years to building Raj Caterers into
    a trusted name in the catering industry. His commitment to
    quality, innovation, and customer satisfaction continues to
    inspire our team every day.
  </p>

  <p className="
    text-orange-300
    mt-8
    italic
    text-lg
    drop-shadow-[0_0_8px_rgba(255,140,66,0.35)]
  ">
    “Great food and warm hospitality create unforgettable memories.”
  </p>

</div>

        </div>
      </section>


      {/* ================= HALL SHOWCASE (UNCHANGED) ================= */}
      <section className="hall-section py-24 relative ">
        <div className="text-center mb-20">
          <h2 className="
    text-yellow-400
    text-5xl md:text-5xl
    font-bold
    mb-4
    drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]
  ">
            Our Banquet Halls
          </h2>

          <p className="text-white-400 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,140,66,0.35)]">
            Elegant spaces designed to host celebrations of every scale with
            comfort, style, and unforgettable ambiance.
          </p>
        </div>

        <div className="timeline-container">

          <div className="timeline-line"></div>

          <div className="hall-card timeline-item">
            <img src="/images/bg.png" alt="" />
            <div className="timeline-content drop-shadow-[0_0_8px_rgba(255,140,66,0.35)]">
              <h3>Durga Wati Hall</h3>
              <p>Perfect for weddings and large gatherings with premium décor.</p>
            </div>
          </div>

          <div className="hall-card timeline-item">
            <img src="/images/bg.png" alt="" />
            <div className="timeline-content drop-shadow-[0_0_8px_rgba(255,140,66,0.35)]">
              <h3>Nisha Garden</h3>
              <p>Elegant interiors with modern amenities for memorable events.</p>
            </div>
          </div>

          <div className="hall-card timeline-item">
            <img src="/images/bg.png" alt="" />
            <div className="timeline-content drop-shadow-[0_0_8px_rgba(255,140,66,0.35)]">
              <h3>Om Sai Hall</h3>
              <p>Ideal for birthdays, receptions, and private celebrations.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}