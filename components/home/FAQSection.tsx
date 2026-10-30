
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is free forever?",
    answer:
      "Listing management, connected calendars and dynamic pricing are free for life for every user. There is no software subscription for these tools. Booking-channel commissions, where applicable, and any optional services may still apply.",
  },
  {
    question: "What does fully managed hosting cost?",
    answer:
      "Fully managed hosting has a tailored fee based on your property and the services you need. Contact our team to discuss your property, understand the available services and receive a personalised proposal.",
  },
  {
    question: "Can existing listings be connected?",
    answer:
      "Yes. Existing listings on supported booking channels can be connected to PropertyFlow. Our team can help you review your current setup and coordinate the connection process.",
  },
  {
    question: "How is cleaning arranged?",
    answer:
      "For fully managed hosting, cleaning, linen changes and property preparation are coordinated between guest stays. For self-managed hosting, you arrange these services with your own property team.",
  },
  {
    question: "What reporting do owners receive?",
    answer:
      "Owners can access booking information, property activity updates, income and expense details, and itemised statements to understand how their property is performing.",
  },
  {
    question: "How do payouts work?",
    answer:
      "Payouts depend on the booking channel, payment arrangements and your hosting agreement. Your statements help you understand the relevant income, deductions and payout information.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-white px-5 py-20 text-black sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      {/* Subtle pink glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[350px] w-[350px] rounded-full bg-[#ff0055]/[0.045] blur-[100px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1640px] grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        {/* Left heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="flex flex-col justify-center lg:min-h-[580px] lg:border-r lg:border-[#f1e7f2] lg:pr-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#ff0055] sm:text-sm">
            Before you get started
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.13] tracking-[-0.045em] sm:text-5xl lg:text-[56px]">
            Good questions.
            <br />
            <span className="text-[#b4b4b4]">
              Clear answers.
            </span>
          </h2>
        </motion.div>

        {/* Right accordion */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="flex min-w-0 flex-col gap-3.5"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-answer-${index}`;

            return (
              <motion.div
                key={faq.question}
                layout={!reduceMotion}
                transition={{
                  layout: {
                    duration: reduceMotion ? 0 : 0.3,
                    ease: "easeInOut",
                  },
                }}
                className={`overflow-hidden rounded-[20px] border bg-white transition-colors duration-300 ${
                  isOpen
                    ? "border-[#f0d9ff]"
                    : "border-[#f2e4fa] hover:border-[#ffb5d1]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex min-h-[70px] w-full items-center gap-4 px-5 py-5 text-left sm:gap-7 sm:px-7"
                >
                  {/* Number */}
                  <span className="w-5 shrink-0 text-base font-semibold text-[#ff0055] sm:text-lg">
                    {index + 1}.
                  </span>

                  {/* Question */}
                  <span className="flex-1 text-sm font-semibold leading-6 text-[#ff0055] sm:text-base lg:text-[17px]">
                    {faq.question}
                  </span>

                  {/* Plus / minus icon */}
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : { rotate: isOpen ? 180 : 0 }
                    }
                    transition={{ duration: 0.25 }}
                    className="flex shrink-0 items-center justify-center text-[#ff0055]"
                  >
                    {isOpen ? (
                      <Minus size={19} strokeWidth={1.2} />
                    ) : (
                      <Plus size={19} strokeWidth={1.2} />
                    )}
                  </motion.span>
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      key="answer"
                      initial={
                        reduceMotion
                          ? false
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-[52px] pr-5 sm:pl-[80px] sm:pr-8">
                        <p className="text-sm leading-[1.65] text-[#898989] sm:text-base sm:leading-[1.6]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
