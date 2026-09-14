"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * "The Reality" section, editorial copy on the left, a single portrait
 * photograph on the right set against an offset background panel that
 * peeks out from behind it (no card border/shadow on the photo itself).
 */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function RealitySection() {
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
    <section className="bg-[#1E1D1C]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:py-28 lg:px-12">
        {/* Left: copy */}
        <div className="mx-auto w-full max-w-xl">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            variants={fadeUp}
            className="text-[11px] tracking-[0.2em] text-[#8C857B]"
          >
            THE REALITY
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.08}
            variants={fadeUp}
            className="mt-4 font-serif text-[2.5rem] leading-[1.15] text-[#F9F8F6] sm:text-[2.75rem]"
          >
            You are used to being
            <br />
            <span className="italic">the strong one.</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.18}
            variants={fadeUp}
            className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#E5E2DC]"
          >
            <p>
              To everyone else, you have it all together. You meet the
              metrics, you solve the problems, and you carry the weight. But
              internally, you are exhausted.
            </p>
            <p>
              You might be dealing with constant tension, an inability to
              switch off your brain at night, or a lingering sense that you
              are just bracing for the next thing to go wrong.
            </p>
            <p>
              This space is designed differently. It is structured,
              intelligent, and deeply confidential. It is a place where you
              don&rsquo;t have to perform.
            </p>
          </motion.div>

          <motion.a
            href="#approach"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            custom={0.3}
            variants={fadeUp}
            className="mt-10 inline-flex items-center gap-2 border-b border-[#E5E2DC] pb-1 text-[12px] tracking-[0.15em] text-[#F9F8F6] transition-colors hover:text-[#C25E30] hover:border-[#C25E30]"
          >
            LEARN ABOUT MY APPROACH
            <span aria-hidden="true">&rarr;</span>
          </motion.a>
        </div>

        {/* Right: photo with offset background panel */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Offset panel, peeking out from behind the photo */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-6 top-6 bottom-6 -z-10 bg-[#2A2522] sm:-inset-x-8 lg:top-10 lg:bottom-10 lg:-right-10 lg:-left-2"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={imageReveal}
            className="relative aspect-[4/5] w-[86%] overflow-hidden sm:w-[80%] lg:aspect-[3/4] lg:w-[78%]"
          >
            <Image
              src="/images/standing.jpg"
              alt="A man standing in a dimly lit room surrounded by scattered papers and photographs pinned to the wall, evoking mental overwhelm"
              fill
              sizes="(min-width: 1024px) 34vw, 70vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}