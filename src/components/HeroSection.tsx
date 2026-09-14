"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease }
    }
  };

  const revealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 0.8, ease }
    }
  };

  const imageScaleVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease }
    }
  };

  return (
    <div className="bg-[#f7f5f2] pt-[120px]">
      {/* ---------- Hero ---------- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-10 lg:pl-[80px] lg:pr-0 pb-10 gap-10 lg:gap-0">
        {/* Left: text content */}
        <motion.div 
          className="max-w-xl lg:pr-10"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpVariants} className="mb-6">
            <span className="block h-[2px] w-8 bg-[#C25E30] mb-4" />
            <p className="text-[12px] tracking-[0.15em] text-[#8C857B] leading-relaxed font-sans">
              IT LOOKS DIFFERENT
              <br />
              ON THE INSIDE.
            </p>
          </motion.div>

          <h1 className="font-serif text-[42px] md:text-6xl leading-[1.05] text-[#1E1D1C] overflow-hidden">
            <span className="block overflow-hidden pb-1">
              <motion.span variants={revealVariants} className="block">YOU LOOK LIKE</motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span variants={revealVariants} className="block">YOU&apos;RE DOING FINE.</motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span variants={revealVariants} className="block text-[#C25E30]">ARE YOU?</motion.span>
            </span>
          </h1>

          <motion.div variants={fadeUpVariants} className="mt-4 mb-2">
            <p className="text-[11px] md:text-[12px] tracking-[0.05em] text-[#8C857B] font-sans uppercase">
              Individual therapy for high-achieving adults in Santa Monica, California.
            </p>
          </motion.div>

          <motion.p variants={fadeUpVariants} className="mt-8 text-[13px] tracking-[0.08em] text-[#8C857B] leading-relaxed max-w-md font-sans uppercase">
            FOR HIGH-ACHIEVING ADULTS READY TO MOVE
            <br />
            BEYOND SIMPLY KEEPING UP.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="mt-10">
            <a 
              href="#contact"
              className="group inline-flex items-center gap-4 border border-[#1E1D1C] px-8 py-4 text-[12px] tracking-[0.15em] text-[#1E1D1C] hover:bg-[#1E1D1C] hover:text-[#F9F8F6] transition-all duration-300 overflow-hidden relative"
            >
              <span className="relative z-10 transition-colors duration-300">SCHEDULE A CONSULTATION</span>
              <span aria-hidden="true" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: split image */}
        <div className="relative h-[700px] md:h-[450px] lg:h-[540px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden lg:rounded-l-sm">
          {/* Left photo: crowd */}
          <motion.div 
            className="relative h-full w-full overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={imageScaleVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/crowd-hero.jpg"
                alt="Person in a crowd"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-10 left-6 flex items-start gap-3 z-10 pointer-events-none"
            >
              <span className="block h-14 w-[2px] bg-white/70" />
              <p className="text-[10px] tracking-[0.1em] text-white leading-relaxed max-w-[110px] font-sans">
                HIGH FUNCTIONING DOESN&apos;T ALWAYS MEAN DOING WELL.
              </p>
            </motion.div>
          </motion.div>

          {/* Right photo: Maya Reynolds */}
          <motion.div 
            className="relative h-full w-full overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 1.05, opacity: 0 },
              visible: { 
                scale: 1, 
                opacity: 1,
                transition: { duration: 1.2, delay: 0.2, ease }
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/maya-reynolds.jpg"
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute top-8 right-6 text-right z-10 pointer-events-none"
            >
              <p className="text-[10px] tracking-[0.15em] text-white font-medium font-sans">
                DR. MAYA REYNOLDS, PSYD
              </p>
              <p className="mt-2 text-[10px] tracking-[0.15em] text-white/80 leading-relaxed font-sans">
                LICENSED CLINICAL
                <br />
                PSYCHOLOGIST
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute bottom-10 right-6 flex items-start gap-3 z-10 pointer-events-none"
            >
              <span className="block h-14 w-[2px] bg-black/70" />
              <p className="text-[10px] tracking-[0.15em] text-black leading-relaxed font-sans text-right">
                CLARITY
                <br />
                PERSPECTIVE
                <br />
                LASTING CHANGE
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}