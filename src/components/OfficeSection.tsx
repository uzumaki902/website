"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function OfficeSection() {
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
    <section className="py-[120px] lg:py-[160px] bg-[#1E1D1C] text-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content - 5 columns */}
          <motion.div 
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={reducedMotionFallback || itemVariants} className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-6">
              Our Office
            </motion.h2>
            <motion.h3 variants={reducedMotionFallback || itemVariants} className="font-serif text-[42px] md:text-[52px] leading-[1.1] mb-8">
              A Calm Space <br />
              <span className="italic text-[#8C857B]">for Healing</span>
            </motion.h3>
            <motion.div variants={reducedMotionFallback || itemVariants} className="space-y-6 font-sans text-[15px] md:text-[17px] text-[#E5E2DC] leading-relaxed mb-10">
              <p>
                My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
              </p>
              <div className="pt-4 border-t border-[#3A3632]">
                <p className="font-sans text-[13px] tracking-wide text-[#8C857B] mb-2 uppercase">Location</p>
                <p>1234 4th Street, Suite 45W<br />Santa Monica, CA 90401</p>
              </div>
              <div className="pt-4 border-t border-[#3A3632]">
                <p className="font-sans text-[13px] tracking-wide text-[#8C857B] mb-2 uppercase">Availability</p>
                <p>Offering both in-person sessions and secure telehealth for clients located anywhere in California.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Images - 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8 relative">
            <motion.div 
              className="aspect-[4/5] relative w-full overflow-hidden mt-12 md:mt-24"
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
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="A quiet, sunlit therapy office"
                  fill
                  className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="aspect-[3/4] relative w-full overflow-hidden"
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
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Comfortable seating in a private space"
                  fill
                  className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
