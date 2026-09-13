"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ExpertiseSection() {
  const shouldReduceMotion = useReducedMotion();

  const methods = [
    "Cognitive Behavioral Therapy (CBT)",
    "Eye Movement Desensitization and Reprocessing (EMDR)",
    "Mindfulness-Based Stress Reduction",
    "Somatic and Body-Oriented Therapies",
    "Psychodynamic Therapy",
    "Depth-Oriented Processing"
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
    <section id="approach" className="py-[120px] lg:py-[160px] bg-[#F9F8F6]">
      <motion.div 
        className="px-6 md:px-10 lg:px-[80px] max-w-[1200px] mx-auto"
        variants={reducedMotionFallback || containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={reducedMotionFallback || itemVariants} className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-4 text-center">
          Clinical Approach
        </motion.h2>
        <motion.h3 variants={reducedMotionFallback || itemVariants} className="font-serif text-[42px] md:text-[56px] text-[#1E1D1C] leading-none mb-16 text-center">
          Evidence-Based Methods
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 border-t border-[#E5E2DC]">
          {methods.map((method, index) => (
            <motion.div 
              key={index} 
              variants={reducedMotionFallback || itemVariants}
              className="py-6 border-b border-[#E5E2DC] flex items-center justify-between"
            >
              <span className="font-sans text-[15px] text-[#3A3632] tracking-wide">
                {method}
              </span>
              <span className="text-[#C25E30] text-[18px]">&rarr;</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
