"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import Link from "next/link";

const METHODS = [
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Practical tools for understanding patterns and building new responses.",
    href: "/approach/cbt",
  },
  {
    title: "Eye Movement Desensitization and Reprocessing (EMDR)",
    description: "A structured approach for processing traumatic experiences at a pace that supports safety.",
    href: "/approach/emdr",
  },
  {
    title: "Mindfulness-Based Stress Reduction",
    description: "Developing greater awareness of thoughts, emotions, and the body's signals.",
    href: "/approach/mindfulness",
  },
  {
    title: "Somatic and Body-Oriented Therapies",
    description: "Bringing attention to the body's experience as part of the therapeutic process.",
    href: "/approach/somatic",
  },
  {
    title: "Psychodynamic Therapy",
    description: "Exploring underlying patterns, relationships, and experiences that shape the present.",
    href: "/approach/psychodynamic",
  },
  {
    title: "Depth-Oriented Processing",
    description: "Making space to understand the deeper patterns beneath recurring struggles.",
    href: "/approach/depth-oriented",
  },
];

export default function ExpertiseSection() {
  const shouldReduceMotion = useReducedMotion();
  const EASE = [0.22, 1, 0.36, 1] as const;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section className="bg-[#F9F8F6] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={itemVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-sans text-[11px] md:text-[12px] tracking-[0.2em] text-[#A39E98] uppercase font-medium">
            CLINICAL APPROACH
          </p>
          <h2 className="mt-4 font-serif text-[42px] leading-none text-[#1E1D1C] sm:text-[56px] tracking-tight">
            Evidence-Based Methods
          </h2>
          <p className="mt-6 font-sans text-[14px] leading-relaxed text-[#8C857B] font-medium max-w-lg mx-auto">
            A structured, collaborative, and depth-oriented framework to help you understand patterns and build resilience.
          </p>
        </motion.div>

        {/* Methodology List */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 sm:mt-24 border-t border-[#E5E2DC]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {METHODS.map((method) => (
              <motion.div key={method.title} variants={itemVariants}>
                <Link
                  href={method.href}
                  className="group block border-b border-[#E5E2DC] py-8 sm:py-10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E30] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F9F8F6]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-grow">
                      <h3 className="font-serif text-[24px] md:text-[26px] text-[#1E1D1C] transition-colors duration-300 group-hover:text-[#C25E30] leading-tight pr-4">
                        {method.title}
                      </h3>
                      <p className="mt-3 font-sans text-[14px] leading-relaxed text-[#8C857B] font-medium max-w-[360px] transition-colors duration-300 group-hover:text-[#1E1D1C]">
                        {method.description}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 flex-shrink-0 text-[18px] text-[#A39E98] transition-transform duration-300 ease-out group-hover:text-[#C25E30] group-hover:translate-x-1.5"
                    >
                      &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
