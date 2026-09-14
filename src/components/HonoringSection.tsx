"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * "The Work" — a full-bleed photo on the left (flush to the section edges,
 * no offset frame) and an eyebrow/heading/intro with a short numbered list
 * on the right, closing with an accent-colored "learn more" link.
 */

const EASE = [0.22, 1, 0.36, 1] as any;

type Point = {
  number: string;
  title: string;
  description: string;
};

const POINTS: Point[] = [
  {
    number: "01",
    title: "Safety & Stabilization",
    description:
      "Trauma work is paced carefully, with an emphasis on safety and stabilization. The goal is to help you feel more regulated in your daily life \u2014 not just during sessions.",
  },
  {
    number: "02",
    title: "Practical + Depth-Oriented",
    description:
      "I integrate evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented approaches to help you understand both the emotional and physiological sides of what you're experiencing.",
  },
  {
    number: "03",
    title: "Sustainable Change",
    description:
      "Over time, therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
  },
];

export default function TheWork() {
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
        {/* Left: full-bleed photo */}
        <motion.div
          initial="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageReveal}
          className="relative min-h-[50vh] w-full lg:min-h-full"
        >
          <Image
            src="/images/sea.jpg"
            alt="A calm ocean shore representing paced, structured healing"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Right: eyebrow, heading, intro, numbered list */}
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-14 lg:py-0 xl:px-20">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              custom={0}
              variants={fadeUp}
              className="text-[11px] tracking-[0.2em] text-neutral-500"
            >
              THE WORK
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.08}
              variants={fadeUp}
              className="mt-4 font-serif text-[2.5rem] leading-[1.1] text-neutral-900 sm:text-[2.9rem]"
            >
              Paced, Structured,
              <br />
              Grounded
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.16}
              variants={fadeUp}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-neutral-500"
            >
              I take a warm, collaborative, and grounded approach to therapy.
              Sessions are structured enough to feel supportive, while still
              leaving space for reflection and depth.
            </motion.p>

            <div className="mt-10 divide-y divide-neutral-300 border-t border-neutral-300">
              {POINTS.map((point, i) => (
                <motion.div
                  key={point.number}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={0.1 + i * 0.1}
                  variants={fadeUp}
                  className="grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
                >
                  <span className="pt-1 text-[12px] tracking-[0.1em] text-neutral-400">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-neutral-900">
                      {point.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[14px] leading-relaxed text-neutral-500">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#approach"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              custom={0.2}
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-2 border-b border-[#b1552f] pb-1 text-[12px] tracking-[0.15em] text-[#b1552f] transition-opacity hover:opacity-70"
            >
              LEARN MORE ABOUT MY APPROACH
              <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}