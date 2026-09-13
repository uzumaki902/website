"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const imageRevealVariants = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  // If reduced motion is preferred, use a simple fade instead of clip/translate
  const reducedMotionFallback = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } } : null;

  return (
    <section id="home" className="pt-[80px] md:pt-[100px] lg:pt-[120px] bg-[#F9F8F6]">
      {/* Mobile/Tablet Layout (Below lg) */}
      <div className="lg:hidden">
        <motion.div 
          className="px-6 md:px-10 py-16 md:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#1E1D1C] mb-6 flex flex-col gap-1">
            <div className="overflow-hidden">
              <motion.div variants={reducedMotionFallback || textRevealVariants}>YOU LOOK LIKE</motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={reducedMotionFallback || textRevealVariants}>YOU&apos;RE DOING FINE.</motion.div>
            </div>
          </div>
          <motion.p variants={itemVariants} className="font-sans text-[12px] md:text-[14px] text-[#8C857B] tracking-[0.15em] uppercase max-w-sm">
            But living well is different from simply keeping up.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10">
            <a
              href="#contact"
              className="inline-block border border-[#1E1D1C] text-[#1E1D1C] text-[12px] tracking-[0.15em] px-8 py-4 rounded-[2px] hover:bg-[#1E1D1C] hover:text-[#F9F8F6] transition-colors uppercase"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative w-full h-[60vh] md:h-[70vh]"
          variants={reducedMotionFallback || imageRevealVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Abstract light through a concrete corridor"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="h-8 bg-[#C25E30] w-full" />
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:grid grid-cols-12 min-h-[700px] xl:min-h-[800px]">
        {/* Left Image - 5 columns */}
        <div className="col-span-5 relative h-full bg-[#E5E2DC] p-12 pb-0">
           <motion.div 
             className="relative w-full h-full"
             variants={reducedMotionFallback || imageRevealVariants}
             initial="hidden"
             animate="visible"
           >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Abstract light through a concrete corridor"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Center Content - 6 columns */}
        <motion.div 
          className="col-span-6 flex flex-col justify-center px-16 xl:px-24 h-full relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="font-serif text-[64px] xl:text-[80px] leading-[1.05] text-[#1E1D1C] mb-8 flex flex-col gap-2">
            <div className="overflow-hidden py-1">
              <motion.div variants={reducedMotionFallback || textRevealVariants}>YOU LOOK LIKE</motion.div>
            </div>
            <div className="overflow-hidden py-1">
              <motion.div variants={reducedMotionFallback || textRevealVariants}>YOU&apos;RE DOING FINE.</motion.div>
            </div>
          </div>
          <motion.p variants={itemVariants} className="font-sans text-[13px] text-[#8C857B] tracking-[0.2em] uppercase max-w-md">
            But living well is different from simply keeping up.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-16">
            <a
              href="#contact"
              className="inline-block border border-[#1E1D1C] text-[#1E1D1C] text-[13px] tracking-[0.15em] px-10 py-4 rounded-[2px] hover:bg-[#1E1D1C] hover:text-[#F9F8F6] transition-colors uppercase group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center transition-transform duration-200 group-hover:translate-x-1">
                SCHEDULE A CONSULTATION &nbsp;
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Accent - 1 column */}
        <motion.div 
          className="col-span-1 bg-[#C25E30] h-full"
          initial={{ scaleY: 0, transformOrigin: "bottom" }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
        />
      </div>
    </section>
  );
}
