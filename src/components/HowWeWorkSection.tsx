"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * "How We Work", a therapy-session photo with a pull quote on the left,
 * and an eyebrow/heading/intro followed by a numbered 4-step process on
 * the right, closing with an accent-colored "learn more" link.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "I begin by getting a clear and comprehensive understanding of your story, current challenges, and what you hope to change.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Together, we look at the patterns beneath the surface\u2014how your thoughts, emotions, experiences, and body are connected.",
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "I use evidence-based methods such as CBT, EMDR, mindfulness, and somatic approaches, tailored to your unique needs and goals.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "You build practical tools, deeper insight, and lasting shifts\u2014so you can feel more regulated, resilient, and yourself again.",
  },
];

export default function HowWeWork() {
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1, ease: EASE },
    },
  };

  return (
    <section id="approach" className="bg-[#f7f5f1]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
        {/* Left: photo + pull quote */}
        <div className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <motion.div
            initial="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageReveal}
            className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}
          >
            <Image
              src="/images/talk.jpg"
              alt="Dr. Maya Reynolds in a warm, plant-filled therapy room, talking with a client"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-cover"
            />
          </motion.div>

          <motion.blockquote
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0.15}
            variants={fadeUp}
            className="mt-8"
          >
            <p className="font-serif text-2xl italic leading-snug text-neutral-900 sm:text-[1.7rem]">
              &ldquo;Therapy is a space to slow down, reconnect, and develop
              a more sustainable way of living and working.&rdquo;
            </p>
            <footer className="mt-4 text-[11px] tracking-[0.15em] text-neutral-400">
              &mdash;&nbsp;DR. MAYA REYNOLDS, PSYD
            </footer>
          </motion.blockquote>
        </div>

        {/* Right: eyebrow, heading, intro, numbered process */}
        <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            custom={0}
            variants={fadeUp}
            className="text-[11px] tracking-[0.2em] text-neutral-500"
          >
            HOW I WORK
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.08}
            variants={fadeUp}
            className="mt-4 font-serif text-[2.5rem] leading-[1.1] text-neutral-900 sm:text-[2.9rem]"
          >
            A Collaborative,
            <br />
            Structured Process
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-neutral-500"
          >
            Therapy with me is not passive listening. It is a thoughtful,
            structured process designed to help you understand what&rsquo;s
            happening, build new ways of responding, and create a life that
            feels more grounded and aligned.
          </motion.p>

          <div className="mt-10 divide-y divide-neutral-300 border-t border-neutral-300">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                custom={0.1 + i * 0.1}
                variants={fadeUp}
                className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
              >
                <span className="pt-1 text-[12px] tracking-[0.1em] text-neutral-400">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-neutral-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-neutral-300" />

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
    </section>
  );
}