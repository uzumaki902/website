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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EFECE6]">
      <div className="px-6 md:px-10 lg:px-[80px] flex items-center justify-between h-[80px] md:h-[100px] lg:h-[120px]">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-serif text-[24px] md:text-[28px] lg:text-[34px] font-light text-[#2C3A36] tracking-wide">
            Conejo Valley
          </span>
          <span className="font-sans text-[9px] md:text-[10px] lg:text-[11px] text-[#62929A] tracking-[0.25em] uppercase">
            Family Counseling
          </span>
        </a>

        {/* Desktop Nav — lg and above */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] font-normal text-[#2C3A36] hover:text-[#62929A] transition-colors tracking-[0.15em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-[#2C3A36] text-[#2C3A36] text-[13px] tracking-[0.15em] px-7 py-3 rounded-[50px] hover:bg-[#2C3A36] hover:text-white transition-colors"
          >
            CONTACT
          </a>
        </nav>

        {/* Hamburger — below lg */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#2C3A36]"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / Tablet Full-screen overlay menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[80px] md:top-[100px] bg-[#EFECE6] z-40 flex flex-col px-8 py-10 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-[22px] text-[#2C3A36] hover:text-[#62929A] transition-colors tracking-[0.1em] uppercase border-b border-[#DDD7C6] pb-4"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block border border-[#2C3A36] text-[#2C3A36] text-[14px] tracking-[0.15em] px-8 py-3 rounded-[50px] hover:bg-[#2C3A36] hover:text-white transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
