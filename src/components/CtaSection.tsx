"use client";

import Image from "next/image";
import { CalendarCheck, Lock, Sprout } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import type { ElementType } from "react";

/**
 * Closing CTA, a full-bleed surreal image on the left, centered
 * eyebrow/heading/copy/button/trust-icons/closing line in the middle, and
 * a second full-bleed image on the right.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type TrustItem = {
  icon: ElementType;
  label: string;
};

const TRUST_ITEMS: TrustItem[] = [
  { icon: Lock, label: "CONFIDENTIAL" },
  { icon: CalendarCheck, label: "FLEXIBLE OPTIONS" },
  { icon: Sprout, label: "A MORE\nGROUNDED YOU" },
];

export default function DoorIsOpen() {
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
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[31%_38%_31%]">
        {/* Left: full-bleed image */}
        <motion.div
          initial="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageReveal}
          className="relative order-1 aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[600px]"
        >
          <Image
            src="/images/door.jpg"
            alt="A surreal open doorway revealing a sunlit grassy field with a single chair"
            fill
            sizes="(min-width: 1024px) 31vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Middle: centered content */}
        <div className="order-2 flex items-center px-6 py-16 sm:px-10 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto w-full max-w-sm text-center">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              custom={0}
              variants={fadeUp}
              className="text-[11px] tracking-[0.2em] text-neutral-500"
            >
              TAKE THE NEXT STEP
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.08}
              variants={fadeUp}
              className="mt-4 font-serif text-[2.75rem] leading-[1.1] text-neutral-900 sm:text-[3.1rem]"
            >
              The Door
              <br />
              Is Open.
            </motion.h2>

            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              custom={0.16}
              variants={fadeUp}
              className="mx-auto mt-6 block h-px w-10 bg-neutral-300"
            />

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.22}
              variants={fadeUp}
              className="mt-6 text-[15px] leading-relaxed text-neutral-500"
            >
              You don&rsquo;t have to carry the weight alone. Reach out to
              schedule a confidential consultation and take the first step
              toward a more grounded, fulfilling life.
            </motion.p>

            <motion.a
              href="#contact"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              custom={0.3}
              variants={fadeUp}
              className="mt-8 flex items-center justify-center gap-3 bg-[#b1552f] px-8 py-4 text-[12px] tracking-[0.15em] text-white transition-colors hover:bg-[#96431f]"
            >
              REQUEST A CONSULTATION
              <span aria-hidden="true">&rarr;</span>
            </motion.a>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={0.38}
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 divide-x divide-neutral-300"
            >
              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 px-2"
                  >
                    <Icon
                      className="h-5 w-5 text-[#b1552f]"
                      strokeWidth={1.5}
                    />
                    <p className="whitespace-pre-line text-[10px] leading-tight tracking-[0.1em] text-neutral-500">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              custom={0.46}
              variants={fadeUp}
              className="mt-10 font-serif text-base italic leading-snug text-neutral-400"
            >
              Healing is possible.
              <br />
              And it can start here.
            </motion.p>
          </div>
        </div>

        {/* Right: full-bleed image */}
        <motion.div
          initial="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.15}
          variants={imageReveal}
          className="relative order-3 aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[600px]"
        >
          <Image
            src="/images/rock.jpg"
            alt="A conceptual image of a man at a desk burdened by an oversized boulder on his back"
            fill
            sizes="(min-width: 1024px) 31vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}