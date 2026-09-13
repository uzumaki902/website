"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HonoringSection() {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const reducedMotionFallback = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } } : null;

  return (
    <section className="py-[120px] lg:py-[160px] bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Image - 5 columns */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              className="aspect-[3/4] relative w-full overflow-hidden group"
              variants={reducedMotionFallback || imageContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="w-full h-full relative"
                whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1541888045610-18e4726e632b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Architectural doorway leading toward light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content - 6 columns */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={reducedMotionFallback || itemVariants} className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-6">
              The Work
            </motion.h2>
            <motion.h3 variants={reducedMotionFallback || itemVariants} className="font-serif text-[42px] md:text-[52px] leading-[1.1] text-[#1E1D1C] mb-8">
              Paced, Structured Healing
            </motion.h3>
            <motion.div variants={reducedMotionFallback || itemVariants} className="space-y-6 font-sans text-[15px] md:text-[17px] text-[#3A3632] leading-relaxed">
              <p>
                Many high achievers avoid therapy because they fear it will be a chaotic unpacking of the past that leaves them unable to function in the present.
              </p>
              <p>
                The work we do is different. It is highly structured and carefully paced. We begin with stabilization—building practical tools to regulate your nervous system so you can feel grounded right now.
              </p>
              <p>
                Only when you feel secure do we move into deeper, depth-oriented processing. You remain in control of the pace at all times.
              </p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
