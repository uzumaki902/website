"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SpecialtiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const secondaryFocuses = [
    "High-Functioning Depression",
    "Life Transitions & Adjustment",
    "Relational Patterns & Boundaries",
    "Imposter Syndrome & Career Stress"
  ];

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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const reducedMotionFallback = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } } : null;

  return (
    <section className="py-[100px] bg-[#F9F8F6]">
      <motion.div 
        className="px-6 md:px-10 lg:px-[80px] max-w-[1200px] mx-auto text-center"
        variants={reducedMotionFallback || containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={reducedMotionFallback || itemVariants} className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-12">
          Additional Areas of Practice
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {secondaryFocuses.map((focus, index) => (
            <motion.span 
              key={index} 
              variants={reducedMotionFallback || itemVariants}
              className="font-sans text-[14px] text-[#3A3632] tracking-wider uppercase border border-[#E5E2DC] px-6 py-3"
            >
              {focus}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
