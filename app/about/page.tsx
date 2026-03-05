"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import { Mail, Phone, Facebook } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact Intro
      gsap.from(".contact-intro", {
        scrollTrigger: {
          trigger: ".contact-intro",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Contact Cards Stagger
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-left",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Map Reveal
      gsap.from(".contact-map", {
        scrollTrigger: {
          trigger: ".contact-map",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.9,
        duration: 3,
        ease: "power3.out",
      });

      // Form Slide
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none none ",
        },
        opacity: 0,
        x: 80,
        duration: 2,
        ease: "power3.out",
      });

      // Form Slide (Top to Down)
      gsap.from(".contact-form-type-2", {
        scrollTrigger: {
          trigger: ".contact-form-type-2",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: -80, // 👈 move from topcon
        duration: 2,
        ease: "power3.out",
      });

      gsap.from(".founder-box", {
        scrollTrigger: {
          trigger: ".founder-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".founder-img", {
        scrollTrigger: {
          trigger: ".founder-section",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.6,
        duration: 1,
        delay: 0.2,
        ease: "back.out(1.7)",
      });

      gsap.from(".stats-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* ================= WEDDING SHOWCASE ================= */}
      <section className="py-30 px-4 bg-[#FFECE9]">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          {/* TOP IMAGE */}
          <div className="w-full h-[260px] md:h-[340px] overflow-hidden">
            <img
              src="/images/catering-bg2.png" // ← your image here
              alt="Wedding"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BOTTOM CONTENT */}
          <div className="giving-color text-center px-6 md:px-12 py-10 md:py-12">
            {/* Heading Section */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <h2
                className="contact-form-type-2 text-2xl md:text-3xl italic font-semibold text-black 
                    rounded-xl inline-block"
              >
                "You Dream it, We Make it Happen"
              </h2>

              <h4
                className="contact-form-type-2 text-2xl md:text-3xl italic font-semibold text-black 
                    rounded-xl inline-block"
              >
                About Us
              </h4>
            </div>

            {/* Paragraph Section */}
            <p
              className="contact-form bg-[#FFECE9] text-sm md:text-base text-gray-800 leading-relaxed 
                max-w-3xl mx-auto p-4 rounded-lg"
            >
              We are a dedicated team of wedding planners committed to
              delivering seamless, elegant, and memorable celebrations. With a
              strong focus on creativity, precision, and personalized service,
              we work closely with each client to understand their vision and
              transform it into a beautifully curated experience. From concept
              development to flawless execution, our goal is to ensure every
              detail reflects professionalism, sophistication, and excellence,
              creating events that leave a lasting impression.
            </p>

            <p
              className="bg-[#FFECE9] text-xs md:text-sm text-gray-700 mt-4 
                inline-block px-4 py-2 rounded-lg"
            >
              Proudly serving couples in Patna and beyond, we strive to turn
              your vision into moments that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section className="founder-section py-20 px-6 bg-[#FFECE9]">
        <div className="max-w-6xl mx-auto">
          <div
            className="founder-box flex flex-col md:flex-row items-center gap-10 
                    bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            {/* IMAGE */}
            <div className="flex-shrink-0">
              <img
                src="/images/founder.png" // ← your founder image
                alt="Founder"
                className="founder-img w-52 h-52 object-cover rounded-full 
                     border-8 border-[#FFECE9] shadow-lg"
              />
              <p className="mt-4 text-black font-semibold text-center">
                Mr. Raj Kumar Gupta
              </p>
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <h2
                className="text-3xl md:text-4xl mb-4 text-black font-semibold"
                style={{ fontFamily: "'Playfair Display', cursive" }}
              >
                Our Founder
              </h2>

              <p
                className="text-gray-700 leading-relaxed text-justify"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Our founder is passionate about creating unforgettable
                celebrations that beautifully reflect each couple’s story. With
                a deep eye for detail, creativity, and years of experience in
                event planning, he has built a reputation for delivering elegant
                and seamless weddings. His vision is rooted in professionalism,
                dedication, and a genuine commitment to turning dreams into
                reality, ensuring every event feels personal, meaningful, and
                extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section
        className="stats-section relative w-full h-[450px] md:h-[550px] flex items-end"
        style={{
          backgroundImage: "url('/images/wedding-stats.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK CINEMATIC GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

        {/* STATS CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6 pb-12">
          {/* YEARS */}
          <div className="stats-item">
            <h2
              className="text-5xl md:text-6xl italic font-semibold text-pink-300 drop-shadow-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px",
              }}
            >
              10+
            </h2>
            <p className="text-white text-sm md:text-base mt-3 tracking-wider uppercase">
              Years of Experience
            </p>
          </div>

          {/* WEDDINGS */}
          <div className="stats-item">
            <h2
              className="text-5xl md:text-6xl italic font-semibold text-pink-300 drop-shadow-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px",
              }}
            >
              120+
            </h2>
            <p className="text-white text-sm md:text-base mt-3 tracking-wider uppercase">
              Weddings Planned
            </p>
          </div>

          {/* DESTINATIONS */}
          <div className="stats-item">
            <h2
              className="text-5xl md:text-6xl italic font-semibold text-pink-300 drop-shadow-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px",
              }}
            >
              15+
            </h2>
            <p className="text-white text-sm md:text-base mt-3 tracking-wider uppercase">
              Destinations Covered
            </p>
          </div>

          {/* VENUES */}
          <div className="stats-item">
            <h2
              className="text-5xl md:text-6xl italic font-semibold text-pink-300 drop-shadow-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px",
              }}
            >
              40+
            </h2>
            <p className="text-white text-sm md:text-base mt-3 tracking-wider uppercase">
              Hotels & Venues
            </p>
          </div>
        </div>
      </section>

      {/* ================= HAPPY COUPLES BANNER ================= */}
      <section className="relative w-full bg-[#FFECE9] py-35 flex items-center justify-center">
        {/* Floral Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/floral-bright.png"
            alt="Floral"
            className="max-w-xl w-full object-contain opacity-95"
          />
        </div>

        {/* Text Box Background */}
        <div className="relative z-10 bg-[#FFECE9] px-20 py-4 rounded-md text-center">
          <h2
            className="text-2xl md:text-3xl font-semibold text-black italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More than 100 Happy Couples
          </h2>

          <p
            className="mt-1 text-base md:text-lg text-purple-700 italic"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Making the best moments extra special
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-10 px-4 bg-[#FFECE9]">
        <div className="max-w-7xl mx-auto bg-[#F8DAD7] rounded-3xl shadow-xl p-8 md:p-14 flex flex-col md:flex-row gap-10 scale-95 md:scale-90 origin-top">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="contact-left flex-1 space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Info
            </h2>

            {/* Phone */}
            <a
              href="tel:+919334127247"
              className="contact-card flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:scale-105 transition"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-green-500 shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white fill-current"
                >
                  <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.1 22 2 13.9 2 4.2 2 3.5 2.5 3 3.2 3H6.7c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2.5 2.4z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Phone</p>
                <p className="font-medium text-gray-800">+91 9334127247</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:rajcaterer247@gmail.com"
              className="contact-card flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:scale-105 transition"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white shadow-md">
                <svg
                  viewBox="0 0 48 48"
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA4335"
                    d="M6 10v28h8V18l10 7 10-7v20h8V10L24 24z"
                  />
                  <path fill="#34A853" d="M6 10l18 14L42 10v6L24 30 6 16z" />
                  <path fill="#FBBC05" d="M24 24L6 10h36z" />
                  <path fill="#4285F4" d="M42 10v28h-8V18z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Email</p>
                <p className="font-medium text-gray-800">
                  rajcaterer247@gmail.com
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_caterer_decorators/"
              target="_blank"
              className="contact-card flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:scale-105 transition"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white shadow-md">
                <svg viewBox="0 0 24 24" className="h-7 w-7">
                  <defs>
                    <linearGradient
                      id="instaGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="25%" stopColor="#fa7e1e" />
                      <stop offset="50%" stopColor="#d62976" />
                      <stop offset="75%" stopColor="#962fbf" />
                      <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="url(#instaGradient)"
                  />
                  <circle cx="12" cy="12" r="5" fill="white" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Instagram</p>
                <p className="font-medium text-gray-800">
                  @_caterer_decorators
                </p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/rajcaterers"
              target="_blank"
              className="contact-card flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:scale-105 transition"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white">
                <Facebook className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Facebook</p>
                <p className="font-medium text-gray-800">Raj Caterers</p>
              </div>
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.com/@_caterer_decorators"
              target="_blank"
              className="contact-card flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:scale-105 transition"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-black text-white">
                @
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Threads</p>
                <p className="font-medium text-gray-800">
                  @_caterer_decorators
                </p>
              </div>
            </a>

            {/* GOOGLE MAP CARD */}
            <div className="contact-map bg-white rounded-xl shadow overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.296749727963!2d85.1166326!3d25.590515899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed598248f81639%3A0x14c8defa64577f23!2sDurgawati%20Marriage%20Hall!5e1!3m2!1sen!2sin!4v1771951889153!5m2!1sen!2sin"
                className="w-full h-52 border-0"
                loading="lazy"
              />

              <div className="p-4">
                <p className="text-sm text-gray-600">
                  GardaniBagh, Tahir Lane, Road no. - 16, Patna, Bihar, 800002
                </p>

                <a
                  href="https://maps.app.goo.gl/dWSU22JX35q9akCq8"
                  target="_blank"
                  className="inline-block mt-3 bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONSULTATION FORM */}
          <div className="contact-form flex-1 bg-white rounded-2xl shadow-lg p-8 text-black">
            <h3
              className="text-2xl font-semibold text-black text-center mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Feel Free To Contact Us For Any Query
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Looking For"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder:text-gray-800"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder:text-gray-800"
              />
              <input
                type="text"
                placeholder="Your Location"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder:text-gray-800"
              />
              <select className="w-full p-3 bg-gray-100 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option value="" disabled hidden>
                  Preferred Wedding Location
                </option>

                {/* Your Halls */}
                <option value="Durgawati Marriage Hall">
                  Durgawati Marriage Hall
                </option>

                <option value="Raj Banquet Hall">
                  Nisha Garden Marraige Hall
                </option>

                <option value="Royal Garden Hall">Om Sai Hall</option>

                {/* Custom Option */}
                <option value="Other">Other / Your locattion</option>
              </select>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder:text-gray-800"
              />
              <input
                type="text"
                placeholder="Contact No"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder:text-gray-800"
              />
              <textarea
                placeholder="Mention Detailed requirement with Dates"
                className="w-full p-3 bg-gray-100 rounded-lg h-24 placeholder:text-gray-800"
              ></textarea>

              <button className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-lg transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
