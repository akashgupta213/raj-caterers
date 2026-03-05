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
        duration: 1,
        ease: "power3.out",
      });

      // Form Slide
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className=" bg-[#FFECE9] overflow-x-hidden">
      <Navbar />

      {/* ================= CONTACT INTRO ================= */}

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-15 px-4 bg-[#FFECE9]">
        <section className=" text-center max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-2xl md:text-3xl font-semibold italic mb-6 text-black contact-intro">
            Contact Raj Caterers
          </h2>

          <p className="text-gray-800 italic leading-relaxed text-base md:text-lg contact-intro">
            You deserve to experience your wedding and any special day with
            complete peace of mind — feeling excited and fully present in every
            beautiful moment. With every detail thoughtfully planned and
            professionally executed, we ensure a seamless and unforgettable
            celebration filled with elegance and joy.
          </p>
        </section>
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
                </option>4

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
