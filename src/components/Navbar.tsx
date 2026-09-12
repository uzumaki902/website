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
      <div className="max-w-[1440px] mx-auto px-[80px] flex items-center justify-between h-[120px]">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-serif text-[34px] font-light text-[#2C3A36] tracking-wide">
            Conejo Valley
          </span>
          <span className="font-sans text-[11px] text-[#62929A] tracking-[0.25em] uppercase">
            Family Counseling
          </span>
        </a>

        {/* Desktop Nav */}
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
          {/* Oval contact button */}
          <a
            href="#contact"
            className="border border-[#2C3A36] text-[#2C3A36] text-[13px] tracking-[0.15em] px-7 py-3 rounded-[50px] hover:bg-[#2C3A36] hover:text-white transition-colors"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#2C3A36]"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#EFECE6] border-t border-[#DDD7C6] px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm text-[#2C3A36] hover:text-[#62929A] transition-colors tracking-[0.15em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="border border-[#2C3A36] text-[#2C3A36] text-sm tracking-[0.15em] px-7 py-3 rounded-[50px] text-center hover:bg-[#2C3A36] hover:text-white transition-colors w-fit"
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
}
