"use client";

import Image from "next/image";
import { Laptop, MapPin } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * "Our Office" — a dark, editorial section. Left: eyebrow, heading, intro,
 * two icon+label detail rows, and a CTA link. Middle: two stacked office
 * photos. Right: short italic captions aligned beside each photo.
 */

const EASE = [0.22, 1, 0.36, 1] as any;

export default function OurOffice() {
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
    show: (delay: number = 0) => ({
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      transition: { duration: 1, ease: EASE, delay },
    }),
  };

  return (
    <section className="bg-[#1c1a17]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.3fr_0.4fr] lg:gap-10 lg:px-12 lg:py-24">
        {/* Left: eyebrow, heading, intro, detail rows, CTA */}
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            custom={0}
            variants={fadeUp}
            className="text-[11px] tracking-[0.2em] text-white/50"
          >
            OUR OFFICE
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.08}
            variants={fadeUp}
            className="mt-4 font-serif text-[2.75rem] leading-[1.1] text-white sm:text-[3.25rem]"
          >
            A Calm Space
            <br />
            <span className="italic">for Healing</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.18}
            variants={fadeUp}
            className="mt-6 text-[15px] leading-relaxed text-white/60"
          >
            My Santa Monica office is a quiet, private space designed to
            feel calm and grounding. Natural light, comfortable
            surroundings, and an uncluttered environment create room to
            slow down and settle in.
          </motion.p>

          <div className="mt-10 divide-y divide-white/15 border-t border-white/15">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={0.24}
              variants={fadeUp}
              className="flex items-center gap-5 py-6"
            >
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-5 w-5 text-white" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[11px] tracking-[0.15em] text-white/50">
                  LOCATION
                </p>
                <p className="mt-1 text-[15px] text-white">
                  Santa Monica, California
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={0.32}
              variants={fadeUp}
              className="flex items-center gap-5 py-6"
            >
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white/10">
                <Laptop className="h-5 w-5 text-white" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[11px] tracking-[0.15em] text-white/50">
                  SESSIONS
                </p>
                <p className="mt-1 max-w-xs text-[15px] leading-relaxed text-white">
                  Offering in-person therapy and secure telehealth sessions
                  for clients located in California.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/15" />

          <motion.a
            href="#office"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            custom={0.4}
            variants={fadeUp}
            className="mt-8 inline-flex w-full max-w-xs items-center justify-between gap-3 border-b border-[#c98a5e] pb-2 text-[12px] tracking-[0.15em] text-[#c98a5e] transition-opacity hover:opacity-70"
          >
            A SPACE DESIGNED TO HELP YOU FEEL AT EASE
            <span aria-hidden="true">&rarr;</span>
          </motion.a>
        </div>

        {/* Middle: two stacked office photos */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={imageReveal}
            className="relative aspect-[16/10] w-full overflow-hidden"
          >
            <Image
              src="/images/office1.jpeg"
              alt="A bright, calming therapy office living room with a sofa, armchair, and large windows"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
            variants={imageReveal}
            className="relative aspect-[16/10] w-full overflow-hidden"
          >
            <Image
              src="/images/office2.jpeg"
              alt="A cozy therapy office seating area with a bookshelf, plants, and a round coffee table"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right: italic captions aligned beside each photo */}
        <div className="hidden flex-col justify-between py-2 lg:flex">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.2}
            variants={fadeUp}
          >
            <p className="font-serif text-lg italic leading-snug text-white/80">
              A space to pause, reflect, and be yourself.
            </p>
            <span className="mt-4 block h-px w-6 bg-white/30" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.3}
            variants={fadeUp}
          >
            <p className="font-serif text-lg italic leading-snug text-white/80">
              A welcoming environment for meaningful conversations.
            </p>
            <span className="mt-4 block h-px w-6 bg-white/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}