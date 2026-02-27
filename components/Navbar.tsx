"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },        // best
  // { href: "#gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
   <header className="absolute top-0 left-0 z-50 w-full backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="
  text-3xl md:text-4xl
  font-bold
  mb-4
  tracking-wide
  font-[family-name:var(--font-playfair)]
"
        >
          Raj Caterers
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link) => (
  <Link
    key={link.label}
    href={link.href}
    className="relative text-sm tracking-wide text-white transition duration-300 
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-yellow-400 after:transition-all after:duration-300 
    hover:text-yellow-300 hover:after:w-full"
  >
    {link.label}
  </Link>
))}
        </div>

        {/* Contact Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+91 9334127247"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Phone size={18} className="text-white" />
          </a>

          <a
            href="mailto:rajcaterer247@gmail.com"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Mail size={18} className="text-white" />
          </a>

          <button className="ml-3 px-5 py-2 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition">
            Book Now
          </button>
        </div>

        {/* Mobile Button */}
        <button
  className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
  onClick={() => setOpen(!open)}
>
  <span
    className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
      open ? "rotate-45" : "-translate-y-2"
    }`}
  />
  <span
    className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
      open ? "opacity-0" : ""
    }`}
  />
  <span
    className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
      open ? "-rotate-45" : "translate-y-2"
    }`}
  />
</button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col p-6 gap-4 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="relative text-lg tracking-wide transition duration-300 
after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
after:bg-yellow-400 after:transition-all after:duration-300 
hover:text-yellow-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            <button className="mt-4 px-5 py-3 rounded-full bg-yellow-400 text-black font-medium">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}