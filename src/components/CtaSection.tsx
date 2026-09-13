"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function CtaSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Very subtle parallax: Moves down 30px to up 30px as user scrolls
  const yParallaxLeft = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : 20, shouldReduceMotion ? 0 : -20]);
  const yParallaxRight = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : -20, shouldReduceMotion ? 0 : 20]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const reducedMotionFallback = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } } : null;

  return (
    <section id="contact" ref={sectionRef} className="py-[120px] lg:py-[180px] bg-[#F9F8F6] overflow-hidden">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-12 items-center">
          
          {/* Left Small Image - 3 columns */}
          <div className="md:col-span-3 hidden md:block">
            <motion.div 
              className="aspect-[4/5] relative w-full opacity-90"
              style={{ y: yParallaxLeft }}
            >
              <Image
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Close up of an open journal and pen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, 25vw"
              />
            </motion.div>
          </div>

          {/* Center Content - 6 columns */}
          <motion.div 
            className="md:col-span-6 flex flex-col items-center text-center px-4"
            variants={reducedMotionFallback || containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-[1] text-[#1E1D1C] mb-8 flex flex-col gap-2">
              <div className="overflow-hidden py-1">
                <motion.div variants={reducedMotionFallback || textRevealVariants}>THE DOOR</motion.div>
              </div>
              <div className="overflow-hidden py-1">
                <motion.div variants={reducedMotionFallback || textRevealVariants}>IS OPEN.</motion.div>
              </div>
            </div>
            <motion.p variants={reducedMotionFallback || itemVariants} className="font-sans text-[14px] md:text-[15px] text-[#3A3632] mb-12 max-w-md">
              You do not have to carry the weight alone. Reach out to schedule a confidential consultation.
            </motion.p>
            <motion.div variants={reducedMotionFallback || itemVariants}>
              <motion.a
                href="mailto:contact@mayareynolds.com"
                className="inline-block bg-[#1E1D1C] text-[#F9F8F6] font-sans text-[13px] tracking-[0.15em] px-12 py-5 rounded-[2px] transition-colors uppercase group"
                whileHover={shouldReduceMotion ? {} : { backgroundColor: "#C25E30" }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 flex items-center">
                  REQUEST A CONSULTATION &nbsp;
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">&rarr;</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Tall Image - 3 columns */}
          <div className="md:col-span-3 hidden md:block">
            <motion.div 
              className="aspect-[3/4] relative w-full opacity-90"
              style={{ y: yParallaxRight }}
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Architectural details of a calm space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, 25vw"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
