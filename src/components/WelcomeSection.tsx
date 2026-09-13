"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function WelcomeSection() {
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
    <section id="about" className="py-[100px] lg:py-[150px] bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Text Content - 6 columns */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={reducedMotionFallback || itemVariants} className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-6">
              The Reality
            </motion.h2>
            <motion.h3 variants={reducedMotionFallback || itemVariants} className="font-serif text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] text-[#1E1D1C] mb-8">
              You are used to being <br/> <i className="italic">the strong one.</i>
            </motion.h3>
            <motion.div variants={reducedMotionFallback || itemVariants} className="space-y-6 font-sans text-[15px] md:text-[17px] text-[#3A3632] leading-relaxed">
              <p>
                To everyone else, you have it all together. You meet the metrics, you solve the problems, and you carry the weight. But internally, you are exhausted.
              </p>
              <p>
                You might be dealing with constant tension, an inability to switch off your brain at night, or a lingering sense that you are just bracing for the next thing to go wrong. 
              </p>
              <p>
                This space is designed differently. It is structured, intelligent, and deeply confidential. It is a place where you don&apos;t have to perform.
              </p>
            </motion.div>
            <motion.div variants={reducedMotionFallback || itemVariants} className="mt-12">
              <a
                href="#approach"
                className="inline-block border-b border-[#1E1D1C] text-[#1E1D1C] text-[13px] tracking-[0.1em] pb-1 hover:text-[#C25E30] hover:border-[#C25E30] transition-colors uppercase"
              >
                Learn about my approach &rarr;
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image - 5 columns */}
          <div className="lg:col-span-5 lg:col-start-8 relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
            <div className="absolute inset-0 bg-[#E5E2DC] -translate-x-6 translate-y-6 md:-translate-x-8 md:translate-y-8 z-0"></div>
            <motion.div 
              className="relative w-full h-full z-10 bg-white overflow-hidden group"
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
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="A quiet, sunlit architectural room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
