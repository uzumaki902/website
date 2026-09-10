"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "OUR TEAM", href: "#team" },
  { label: "SPECIALTIES", href: "#specialties" },
  { label: "METHODS", href: "#methods" },
  { label: "FAQS", href: "#faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl md:text-[28px] font-light text-charcoal tracking-wide">
            Conejo Valley
          </span>
          <span className="font-sans text-[10px] md:text-xs text-brown-light tracking-[0.35em] uppercase">
            Family Counseling
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] font-normal text-charcoal hover:text-teal transition-colors tracking-[0.12em]"
            >
              {link.label}
            </a>
          ))}
          {/* Oval contact button */}
          <a
            href="#contact"
            className="border border-charcoal text-charcoal text-[13px] tracking-[0.12em] px-7 py-2.5 rounded-full hover:bg-charcoal hover:text-white transition-colors"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-charcoal"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-sand/40 px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm text-charcoal hover:text-teal transition-colors tracking-[0.12em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="border border-charcoal text-charcoal text-sm tracking-[0.12em] px-7 py-2.5 rounded-full text-center hover:bg-charcoal hover:text-white transition-colors w-fit"
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
}
