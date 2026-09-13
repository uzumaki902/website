"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * "Areas of Focus"  header row (eyebrow + title on the left, supporting
 * copy on the right) followed by a divider and a 3-up grid of focus areas,
 * each with a photo, index number, title, description, and a "Learn more"
 * link.
 */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type FocusArea = {
  number: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  href: string;
};

const FOCUS_AREAS: FocusArea[] = [
  {
    number: "01",
    image: "/images/man.jpg",
    alt: "Exhausted man sitting at a desk surrounded by papers",
    title: "ANXIETY & PANIC",
    description:
      "Constantly bracing for something to go wrong. The tension in your body, the inability to sleep, the mind that won't turn off even when everything is objectively fine.",
    href: "/approach/anxiety",
  },
  {
    number: "02",
    image: "/images/scream.jpg",
    alt: "Distressed woman screaming",
    title: "TRAUMA & EMDR",
    description:
      "Understanding what your past is still asking of you. Addressing single-incident events or complex, long-standing patterns that keep you feeling unsafe or disconnected.",
    href: "/approach/trauma",
  },
  {
    number: "03",
    image: "/images/case.jpg",
    alt: "Exhausted businessman sitting on the stairs with a suitcase",
    title: "BURNOUT & PERFECTIONISM",
    description:
      "When achievement stops feeling like enough. For professionals, entrepreneurs, and creatives who have pushed through stress for so long they no longer recognize themselves.",
    href: "/approach/burnout",
  },
];

export default function WhoWeHelpSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE as any, delay },
    }),
  };

  const cardReveal: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE as any, delay },
    }),
  };

  return (
    <section className="bg-[#F9F8F6]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-[80px] lg:py-28">
        {/* Header row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            custom={0}
            variants={fadeUp}
          >
            <p className="font-sans text-[11px] md:text-[12px] text-[#A39E98] tracking-[0.2em] uppercase font-medium">
              WHAT BRINGS PEOPLE HERE
            </p>
            <h2 className="mt-4 font-serif text-[42px] leading-none text-[#1E1D1C] sm:text-[56px] tracking-tight">
              Areas of Focus
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            custom={0.1}
            variants={fadeUp}
            className="max-w-xs font-sans text-[13px] leading-relaxed text-[#8C857B] sm:text-right font-medium"
          >
            Different challenges. A shared desire for something more. Explore
            the areas where I can support you.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#E5E2DC]" />

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area, i) => (
            <motion.article
              key={area.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={i * 0.12}
              variants={cardReveal}
            >
              <Link href={area.href} className="group block h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E30] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F9F8F6]">
                <div className="relative w-full overflow-hidden bg-[#E5E2DC]" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-[1.03]"
                  />
                  {/* Subtle tonal overlay matching the editorial aesthetic */}
                  <div className="absolute inset-0 bg-[#3A2D25]/5 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
                </div>

                <p className="mt-6 font-sans text-[11px] tracking-[0.2em] text-[#A39E98] uppercase">
                  {area.number}
                </p>

                <h3 className="mt-3 font-serif text-[28px] text-[#1E1D1C] transition-colors duration-300 group-hover:text-[#C25E30]">
                  {area.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.8] text-[#8C857B] font-medium flex-grow">
                  {area.description}
                </p>

                <div className="mt-8 flex items-center">
                  <span className="inline-flex items-center gap-2 border-b border-[#1E1D1C] pb-1 font-sans text-[11px] tracking-[0.2em] text-[#1E1D1C] uppercase font-semibold transition-all duration-300 group-hover:text-[#C25E30] group-hover:border-[#C25E30]">
                    LEARN MORE
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
