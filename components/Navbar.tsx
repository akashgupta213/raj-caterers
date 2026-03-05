"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import Image from "next/image";
const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-6 left-0 z-50 w-full bg-[#e4b3ad] border-b border-[#e8c7c2]">
      <nav className="relative max-w-7xl mx-auto flex h-14 items-center justify-center">
        {/* Logo */}
        <Link href="/" className="absolute left-5 top-1 -translate-y-8">
          <Image
            src="/images/logo.png"
            alt="Raj Caterers"
            width={110}
            height={110}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[#24324a]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm tracking-wide transition duration-300 
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
      after:bg-[#24324a] after:transition-all after:duration-300 
      hover:text-black hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Icons */}
        <div className="hidden md:flex items-center gap-3 absolute right-6 top-1/2 -translate-y-1/2">
          <a
            href="tel:+91 9334127247"
            className="p-2 rounded-full bg-white/40 hover:bg-white/60 transition"
          >
            <Phone size={18} className="text-[#24324a]" />
          </a>

          <a
            href="mailto:rajcaterer247@gmail.com"
            className="p-2 rounded-full bg-white/40 hover:bg-white/60 transition"
          >
            <Mail size={18} className="text-[#24324a]" />
          </a>

          <button className="ml-3 px-5 py-2 rounded-full bg-[#24324a] text-white font-medium hover:bg-black transition">
            Book Now
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 flex flex-col justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute h-0.5 w-6 bg-[#24324a] transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#24324a] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#24324a] transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#e4b3ad] border-t border-[#e8c7c2]">
          <div className="flex flex-col p-6 gap-4 text-[#24324a]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="relative text-lg tracking-wide transition duration-300 
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                after:bg-[#24324a] after:transition-all after:duration-300 
                hover:text-black hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            <button className="mt-4 px-5 py-3 rounded-full bg-[#24324a] text-white font-medium">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
