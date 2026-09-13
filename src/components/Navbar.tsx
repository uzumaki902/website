"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SPECIALTIES", href: "#specialties" },
  { label: "APPROACH", href: "#approach" },
  { label: "FAQS", href: "#faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] flex items-center justify-between h-[80px] md:h-[100px] lg:h-[120px]">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-serif text-[24px] md:text-[28px] lg:text-[34px] font-normal text-[#1E1D1C] tracking-wide">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="font-sans text-[9px] md:text-[10px] lg:text-[11px] text-[#8C857B] tracking-[0.25em] uppercase">
            Licensed Clinical Psychologist
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[12px] font-normal text-[#1E1D1C] hover:text-[#C25E30] transition-colors tracking-[0.15em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-[#1E1D1C] text-[#1E1D1C] text-[12px] tracking-[0.15em] px-7 py-3 rounded-[2px] hover:bg-[#1E1D1C] hover:text-[#F9F8F6] transition-colors"
          >
            CONTACT
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#1E1D1C]"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[80px] md:top-[100px] bg-[#F9F8F6] z-40 flex flex-col px-8 py-10 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-[22px] text-[#1E1D1C] hover:text-[#C25E30] transition-colors tracking-[0.1em] uppercase border-b border-[#E5E2DC] pb-4"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block border border-[#1E1D1C] text-[#1E1D1C] text-[14px] tracking-[0.15em] px-8 py-3 rounded-[2px] hover:bg-[#1E1D1C] hover:text-[#F9F8F6] transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
