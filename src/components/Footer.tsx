"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const reducedMotionFallback = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } } : null;

  return (
    <footer className="bg-[#1E1D1C] text-[#F9F8F6] pt-[80px] lg:pt-[100px] border-t border-[#3A3632]">
      <motion.div 
        className="px-6 md:px-10 lg:px-[80px] pb-[60px] max-w-[1600px] mx-auto"
        variants={reducedMotionFallback || containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <motion.div variants={reducedMotionFallback || itemVariants} className="flex flex-col">
            <span className="font-serif text-[24px] mb-2 leading-tight">
              Dr. Maya Reynolds
            </span>
            <span className="font-sans text-[10px] text-[#8C857B] tracking-[0.2em] uppercase mb-6">
              PsyD, Licensed Clinical Psychologist
            </span>
            <p className="font-sans text-[13px] text-[#8C857B] leading-relaxed max-w-[250px]">
              Evidence-based, depth-oriented therapy for high-achieving adults in California.
            </p>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={reducedMotionFallback || itemVariants} className="flex flex-col space-y-4">
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#F9F8F6] mb-2">Navigation</h4>
            <a href="#about" className="font-sans text-[13px] text-[#8C857B] hover:text-[#C25E30] transition-colors">About</a>
            <a href="#specialties" className="font-sans text-[13px] text-[#8C857B] hover:text-[#C25E30] transition-colors">Specialties</a>
            <a href="#approach" className="font-sans text-[13px] text-[#8C857B] hover:text-[#C25E30] transition-colors">Approach</a>
            <a href="#faqs" className="font-sans text-[13px] text-[#8C857B] hover:text-[#C25E30] transition-colors">FAQs</a>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={reducedMotionFallback || itemVariants} className="flex flex-col space-y-4">
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#F9F8F6] mb-2">Contact</h4>
            <a href="tel:+13105550198" className="font-sans text-[13px] text-[#8C857B] hover:text-[#C25E30] transition-colors">
              (310) 555-0198
            </a>
            <a href="mailto:contact@mayareynolds.com" className="font-sans text-[13px] text-[#8C857B] hover:text-[#C25E30] transition-colors">
              contact@mayareynolds.com
            </a>
          </motion.div>

          {/* Column 4: Location */}
          <motion.div variants={reducedMotionFallback || itemVariants} className="flex flex-col space-y-4">
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#F9F8F6] mb-2">Location</h4>
            <p className="font-sans text-[13px] text-[#8C857B] leading-relaxed">
              1234 4th Street<br />
              Suite 45W<br />
              Santa Monica, CA 90401
            </p>
            <p className="font-sans text-[13px] text-[#8C857B] mt-2 italic">
              Offering both in-person and secure telehealth sessions throughout California.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-[#C25E30] py-4">
        <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-[#F9F8F6]">
          <p className="font-sans text-[11px] tracking-wider mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="font-sans text-[11px] tracking-wider hover:opacity-75 transition-opacity">Privacy Policy</a>
            <a href="#" className="font-sans text-[11px] tracking-wider hover:opacity-75 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
