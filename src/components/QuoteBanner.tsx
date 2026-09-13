"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function QuoteBanner() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { backgroundColor: "rgba(30, 29, 28, 0)" },
    visible: { 
      backgroundColor: "rgba(30, 29, 28, 1)",
      transition: { 
        duration: 1.2, 
        ease: "easeInOut" as any,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as any } 
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as any } 
    }
  };

  const reducedMotionFallback = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } } : null;

  return (
    <motion.section 
      className="py-[120px] lg:py-[180px]"
      variants={reducedMotionFallback || containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1200px] mx-auto text-center">
        <motion.h2 variants={reducedMotionFallback || textVariants} className="font-serif text-[32px] md:text-[42px] lg:text-[52px] leading-[1.2] text-[#F9F8F6] mb-10">
          "The goal is not to stop feeling, but to feel safe enough to actually experience your life."
        </motion.h2>
        <motion.div 
          variants={reducedMotionFallback || lineVariants} 
          className="w-12 h-px bg-[#C25E30] mx-auto mb-8"
          style={{ transformOrigin: "center" }}
        />
        <motion.p variants={reducedMotionFallback || textVariants} className="font-sans text-[12px] md:text-[14px] tracking-[0.2em] text-[#8C857B] uppercase">
          Dr. Maya Reynolds
        </motion.p>
      </div>
    </motion.section>
  );
}
