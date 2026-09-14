"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function BioSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
    }),
  };

  const imageReveal: Variants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.02,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: EASE, delay: 0.15 },
    },
  };

  return (
    <section id="about" className="bg-[#f7f5f1]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:py-28 lg:px-12">
        {/* Left: Image */}
        <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageReveal}
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/images/maya-reynolds.jpg"
              alt="Dr. Maya Reynolds, PsyD"
              fill
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Copy */}
        <div className="mx-auto w-full max-w-xl">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            variants={fadeUp}
            className="text-[11px] tracking-[0.2em] text-[#8C857B] uppercase"
          >
            About the Therapist
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.08}
            variants={fadeUp}
            className="mt-4 font-serif text-[2.5rem] leading-[1.15] text-[#1E1D1C] sm:text-[2.75rem]"
          >
            Dr. Maya Reynolds, PsyD
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.12}
            variants={fadeUp}
            className="mt-2 text-[14px] text-[#C25E30] font-sans"
          >
            Licensed Clinical Psychologist, Santa Monica, CA
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.18}
            variants={fadeUp}
            className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#1E1D1C]"
          >
            <p>
              I work with high-achieving, thoughtful, and self-aware adults, including professionals, entrepreneurs, and creatives, who are dealing with anxiety, trauma, burnout, and perfectionism.
            </p>
            <p>
              My approach is warm, collaborative, and grounded. I pace therapy carefully with an emphasis on safety and stabilization, integrating evidence-based methods like CBT, EMDR, mindfulness-based practices, and body-oriented approaches to foster lasting resilience rather than just symptom relief.
            </p>
            <p>
              I offer in-person sessions at my Santa Monica office, as well as secure telehealth for clients located throughout California.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
