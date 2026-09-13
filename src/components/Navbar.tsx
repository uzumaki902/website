"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SPECIALTIES", href: "#specialties" },
  { label: "APPROACH", href: "#approach" },
  { label: "FAQS", href: "#faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : "-10%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : "-5%",
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      initial={{ backgroundColor: "rgba(249, 248, 246, 1)", borderBottom: "1px solid transparent" }}
      animate={{ 
        backgroundColor: scrolled ? "rgba(249, 248, 246, 0.95)" : "rgba(249, 248, 246, 1)",
        borderBottom: scrolled ? "1px solid #E5E2DC" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)"
      }}
    >
      <motion.div 
        className="px-6 md:px-10 lg:px-[80px] flex items-center justify-between"
        animate={{ height: scrolled ? 80 : 120 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-serif text-[24px] md:text-[28px] lg:text-[34px] font-normal text-[#1E1D1C] tracking-wide">
            MAYA REYNOLDS
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
          className="lg:hidden text-[#1E1D1C] p-2 relative z-50"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="lg:hidden fixed inset-0 top-[80px] bg-[#F9F8F6] z-40 flex flex-col px-8 pt-10 pb-16 gap-6 h-screen overflow-y-auto"
            variants={shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } } : menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
