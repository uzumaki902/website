"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * "Areas of Focus" — header row (eyebrow + title on the left, supporting
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

// Swap the `image`/`href` values below if these should map differently —
// assigned in the order you listed the files (case.jpg, man.jpg, scream.jpg).
const FOCUS_AREAS: FocusArea[] = [
  {
    number: "01",
    image: "/images/case.jpg",
    alt: "A woman sitting by a window, lost in thought",
    title: "ANXIETY & PANIC",
    description:
      "Constantly bracing for something to go wrong. The tension in your body, the inability to sleep, the mind that won't turn off even when everything is objectively fine.",
    href: "#anxiety-panic",
  },
  {
    number: "02",
    image: "/images/man.jpg",
    alt: "Two people holding hands, one offering comfort to the other",
    title: "TRAUMA & EMDR",
    description:
      "Understanding what your past is still asking of you. Addressing single-incident events or complex, long-standing patterns that keep you feeling unsafe or disconnected.",
    href: "#trauma-emdr",
  },
  {
    number: "03",
    image: "/images/scream.jpg",
    alt: "A sunlit desk with a laptop, books, and a coffee mug",
    title: "BURNOUT & PERFECTIONISM",
    description:
      "When achievement stops feeling like enough. For professionals, entrepreneurs, and creatives who have pushed through stress for so long they no longer recognize themselves.",
    href: "#burnout-perfectionism",
  },
];

export default function AreasOfFocus() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
    }),
  };

  const cardReveal: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
    }),
  };

  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        {/* Header row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            custom={0}
            variants={fadeUp}
          >
            <p className="text-[11px] tracking-[0.2em] text-neutral-500">
              WHAT BRINGS PEOPLE HERE
            </p>
            <h2 className="mt-3 font-serif text-[2.75rem] leading-none text-neutral-900 sm:text-[3.25rem]">
              Areas of Focus
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            custom={0.1}
            variants={fadeUp}
            className="max-w-xs text-[13px] leading-relaxed text-neutral-500 sm:text-right"
          >
            Different challenges. A shared desire for something more. Explore
            the areas where I can support you.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-neutral-300" />

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area, i) => (
            <motion.article
              key={area.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i * 0.12}
              variants={cardReveal}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={area.image}
                  alt={area.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-6 text-[11px] tracking-[0.15em] text-neutral-400">
                {area.number}
              </p>

              <h3 className="mt-2 font-serif text-2xl text-neutral-900">
                {area.title}
              </h3>

              <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-neutral-500">
                {area.description}
              </p>

              <a
                href={area.href}
                className="mt-5 inline-flex items-center gap-2 border-b border-neutral-800 pb-1 text-[11px] tracking-[0.15em] text-neutral-900 transition-opacity hover:opacity-60"
              >
                LEARN MORE
                <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}