"use client";

import Image from "next/image";
import { Brain, MoonStar, Sprout, Users } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import type { ElementType } from "react";

/**
 * "Specialties", eyebrow/heading/intro with a 2x2 grid of secondary
 * concerns (icon + title + description) on the left, and a full-bleed
 * lifestyle photo with an overlaid pull quote on the right.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type Concern = {
  icon: ElementType;
  title: string;
  description: string;
};

const CONCERNS: Concern[] = [
  {
    icon: Brain,
    title: "High Internal Pressure",
    description:
      "For those who have spent years pushing themselves to perform, achieve, and keep everything together.",
  },
  {
    icon: MoonStar,
    title: "Overthinking & Sleep",
    description:
      "When your mind won't switch off, even when everything around you appears fine.",
  },
  {
    icon: Sprout,
    title: "Confidence & Self-Trust",
    description:
      "Exploring how past experiences can shape the way you see yourself, what you feel capable of, and what feels possible.",
  },
  {
    icon: Users,
    title: "Relationships & Connection",
    description:
      "Understanding patterns that influence how you connect, communicate, and feel safe with others.",
  },
];

export default function Specialties() {
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
      clipPath: shouldReduceMotion
        ? "inset(0% 0% 0% 0%)"
        : "inset(0% 0% 100% 0%)",
      scale: shouldReduceMotion ? 1 : 1.02,
    },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      transition: { duration: 1.1, ease: EASE },
    },
  };

  return (
    <section className="bg-[#f7f5f1]">
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Left: eyebrow, heading, intro, 2x2 concern grid */}
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              custom={0}
              variants={fadeUp}
              className="text-[11px] tracking-[0.2em] text-neutral-500"
            >
              SPECIALTIES
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.08}
              variants={fadeUp}
              className="mt-4 font-serif text-[2.5rem] leading-[1.1] text-neutral-900 sm:text-[2.9rem]"
            >
              Other Places
              <br />
              Therapy May Begin
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.16}
              variants={fadeUp}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-neutral-500"
            >
              Therapy looks different for everyone. In addition to my areas
              of focus, I also support adults with the following concerns.
            </motion.p>

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {CONCERNS.map((concern, i) => {
                const Icon = concern.icon;
                const isTopRow = i < 2;
                const isLeftCol = i % 2 === 0;
                return (
                  <motion.div
                    key={concern.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={0.1 + i * 0.08}
                    variants={fadeUp}
                    className={[
                      "pb-8",
                      isTopRow ? "border-b border-neutral-300" : "",
                      isLeftCol ? "sm:pr-8 sm:border-r sm:border-neutral-300" : "sm:pl-2",
                    ].join(" ")}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ece6da]">
                      <Icon
                        className="h-5 w-5 text-neutral-700"
                        strokeWidth={1.5}
                      />
                    </span>

                    <h3 className="mt-5 font-serif text-xl text-neutral-900">
                      {concern.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-neutral-500">
                      {concern.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#help"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              custom={0.2}
              variants={fadeUp}
              className="mt-6 inline-flex items-center gap-2 border-b border-[#b1552f] pb-1 text-[12px] tracking-[0.15em] text-[#b1552f] transition-opacity hover:opacity-70"
            >
              SEE HOW I CAN HELP
              <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </div>

        {/* Right: full-bleed lifestyle photo with overlaid pull quote */}
        <motion.div
          initial="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageReveal}
          className="relative order-first aspect-[4/5] w-full sm:aspect-[16/10] lg:order-none lg:aspect-auto lg:h-full lg:min-h-[640px]"
        >
          <Image
            src="/images/sun.jpg"
            alt="A sunlit reading nook with a mug, stacked books, and a plant beside a window"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />

          <div className="absolute bottom-10 right-8 max-w-xs text-right sm:bottom-14 sm:right-12">
            <p className="font-serif text-xl italic leading-snug text-white sm:text-2xl">
              &ldquo;You don&rsquo;t have to carry everything alone.&rdquo;
            </p>
            <p className="mt-3 text-[11px] tracking-[0.15em] text-white/80">
              &mdash;&nbsp;DR. MAYA REYNOLDS, PSYD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}