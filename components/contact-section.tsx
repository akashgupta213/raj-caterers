"use client";

import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen text-white pt-32 pb-20 px-6 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/catering-bg2.png"
          alt="Catering"
          className="
            w-full h-full
            object-cover
            object-center
            scale-110
          "
        />
      </div>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Golden Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full -z-10" />

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="
  text-4xl md:text-5xl
  font-bold
  mb-4
  tracking-wide
  font-[family-name:var(--font-playfair)]
">
  Contact Raj Caterers
</h1>

        <p className="
  text-white/70
  max-w-2xl mx-auto
  font-medium
  font-[family-name:var(--font-poppins)]
">
  Planning a wedding or special event? Let us make your moments unforgettable.
</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <ContactInfo />
        <ContactForm />
      </div>

    </section>
  );
}