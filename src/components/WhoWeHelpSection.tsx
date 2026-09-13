"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WhoWeHelpSection() {
  const shouldReduceMotion = useReducedMotion();

  const issues = [
    {
      number: "01",
      title: "ANXIETY & PANIC",
      description: "Constantly bracing for something to go wrong. The tension in your body, the inability to sleep, the mind that won't turn off even when everything is objectively fine."
    },
    {
      number: "02",
      title: "TRAUMA & EMDR",
      description: "Understanding what your past is still asking of you. Addressing single-incident events or complex, long-standing patterns that keep you feeling unsafe or disconnected."
    },
    {
      number: "03",
      title: "BURNOUT & PERFECTIONISM",
      description: "When achievement stops feeling like enough. For professionals, entrepreneurs, and creatives who have pushed through stress for so long they no longer recognize themselves."
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const reducedMotionFallback = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } } : null;

  return (
    <section id="specialties" className="py-[120px] lg:py-[160px] bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end pb-8 relative"
          variants={reducedMotionFallback || headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <h2 className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-4">
              What Brings People Here
            </h2>
            <h3 className="font-serif text-[42px] md:text-[56px] text-[#1E1D1C] leading-none">
              Areas of Focus
            </h3>
          </div>
          <motion.div 
            className="absolute bottom-0 left-0 h-px bg-[#E5E2DC] w-full"
            variants={reducedMotionFallback || lineVariants}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {issues.map((issue, index) => (
            <motion.div 
              key={issue.number} 
              className="flex flex-col pt-8 md:pt-0 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Mobile top border draws out */}
              <motion.div 
                className="md:hidden absolute top-0 left-0 h-px bg-[#E5E2DC] w-full"
                variants={reducedMotionFallback || lineVariants}
                style={{ transformOrigin: "left" }}
              />
              
              <motion.span variants={itemVariants} className="font-sans text-[14px] text-[#8C857B] tracking-widest mb-6 block">
                {issue.number}
              </motion.span>
              <motion.h4 variants={itemVariants} className="font-serif text-[28px] text-[#1E1D1C] mb-4">
                {issue.title}
              </motion.h4>
              <motion.p variants={itemVariants} className="font-sans text-[15px] text-[#3A3632] leading-relaxed">
                {issue.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
