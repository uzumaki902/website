"use client";

import { useState } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type FAQ = {
  question: string;
  answer: string;
};

const FAQS: FAQ[] = [
  {
    question: "What happens in a first session?",
    answer: "Our first session is an opportunity to connect and for me to get a clear understanding of your story and current challenges. We'll discuss what you hope to change and determine if we are a good fit for working together.",
  },
  {
    question: "Do you offer telehealth or only in-person sessions?",
    answer: "I offer in-person therapy at my Santa Monica office, as well as secure telehealth sessions for clients located anywhere in California.",
  },
  {
    question: "What therapeutic methods do you use?",
    answer: "I integrate evidence-based methods such as Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented approaches, tailored to your specific needs.",
  },
  {
    question: "Who do you typically work with?",
    answer: "I primarily work with high-achieving, thoughtful, and self-aware adults—including professionals, entrepreneurs, and creatives. Many of my clients are navigating anxiety, trauma, burnout, or perfectionism.",
  },
  {
    question: "Is what I share confidential?",
    answer: "Yes, confidentiality is a cornerstone of therapy. My practice is designed to be a highly secure and private space where you can speak openly and without having to perform.",
  },
  {
    question: "How do I get started?",
    answer: "You can request a consultation using the contact form below. We'll schedule a brief introductory call to discuss your needs and next steps.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
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
    <section id="faqs" className="bg-[#F9F8F6] py-24 lg:py-32">
      <div className="mx-auto max-w-[1000px] px-6 sm:px-10 lg:px-[80px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={itemVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-sans text-[11px] md:text-[12px] tracking-[0.2em] text-[#A39E98] uppercase font-medium">
            Common Questions
          </p>
          <h2 className="mt-4 font-serif text-[42px] leading-none text-[#1E1D1C] sm:text-[56px] tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 sm:mt-24 border-t border-[#E5E2DC]"
        >
          {FAQS.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="border-b border-[#E5E2DC]">
              <button
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="flex w-full items-center justify-between py-8 sm:py-10 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E30] group"
              >
                <h3 className="font-serif text-[24px] md:text-[26px] text-[#1E1D1C] transition-colors duration-300 group-hover:text-[#C25E30] pr-8">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 text-2xl text-[#A39E98] transition-colors duration-300 group-hover:text-[#C25E30]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-sans text-[15px] leading-relaxed text-[#8C857B] font-medium max-w-[800px]">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
