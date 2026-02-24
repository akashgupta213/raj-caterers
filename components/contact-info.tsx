"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9334127247",
    href: "tel:+919334127247",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rajcaterer247@gmail.com",
    href: "mailto:rajcaterer247@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@rajcaterers",
    href: "https://www.instagram.com/_caterer_decorators/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Raj Caterers",
    href: "https://facebook.com/rajcaterers",
  },
  {
    type: "threads",
    label: "Threads",
    value: "@_caterer_decorators",
    href: "https://www.threads.com/@_caterer_decorators",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Cards */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 tracking-wide text-white drop-shadow-md">
          Contact Info
        </h2>

        <div className="space-y-4">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="
                flex items-center gap-4 p-4 rounded-xl
                bg-white/[0.03]
                backdrop-blur-[var(--blur)]
                border border-white/10
                hover:bg-white/[0.06]
                transition
                shadow-lg shadow-black/20
                group
              "
              style={{ "--blur": "7px" } as React.CSSProperties}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div
                className={`
                  flex h-11 w-11 items-center justify-center
                  rounded-lg
                  transition
                  font-semibold text-lg
                  shadow-lg shadow-black/30
                  ${
                    link.label === "Instagram"
                      ? "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white"
                      : link.label === "Facebook"
                        ? "bg-blue-600 text-white"
                        : link.label === "Phone"
                          ? "bg-green-500 text-white"
                          : link.label === "Email"
                            ? "bg-red-500 text-white"
                            : "bg-white/10 text-white"
                  }
                `}
              >
                {link.type === "threads"
                  ? "@"
                  : link.icon && <link.icon className="h-5 w-5" />}
              </div>

              {/* Text */}
              <div>
                <p
                  className="
                  text-sm
                  text-white/70
                  font-semibold
                  drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
                "
                >
                  {link.label}
                </p>

                <p
                  className="
                  text-white
                  font-medium
                  group-hover:text-yellow-300
                  transition
                  drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
                "
                >
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Location Card */}
      <motion.div
  className="
    relative overflow-hidden rounded-xl
    bg-white/[0.03]
    backdrop-blur-[var(--blur)]
    border border-white/10
    shadow-lg shadow-black/20
  "
  style={{ "--blur": "7px" } as React.CSSProperties}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
>
  {/* Map */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.296749727963!2d85.1166326!3d25.590515899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed598248f81639%3A0x14c8defa64577f23!2sDurgawati%20Marriage%20Hall!5e1!3m2!1sen!2sin!4v1771951889153!5m2!1sen!2sin"
    className="w-full h-[260px] md:h-60 border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  {/* Address + Button */}
  <div className="p-5 space-y-4">
    <p className="text-white/80 font-medium">
      GardaniBagh, Tahir Lane, Road no. - 16, Patna, Bihar, 800002
    </p>

    <a
      href="https://maps.app.goo.gl/dWSU22JX35q9akCq8"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        bg-yellow-400 text-black
        px-4 py-2 rounded-lg
        text-sm font-semibold
        shadow-lg
        hover:scale-105 hover:bg-yellow-300
        transition
      "
    >
      Open in Google Maps →
    </a>
  </div>
</motion.div>
    </div>
  );
}
