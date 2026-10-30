
"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hostingPlans = [
  {
    id: "self-managed",
    label: "SELF - MANAGED",
    title: "Semi-managed /",
    highlightedTitle: "Self-managed",
    subtitle: "The tools are ours. The day-to-day is yours.",
    price: "£0",
    priceDescription: "software subscription",
    listHeading: "PropertyFlow Provides",
    included: [
      "Listing management on supported channels",
      "Connected booking calendars",
      "Dynamic pricing tools",
    ],
    responsibilityHeading: "You handle",
    responsibility:
      "Guest communication, check-in, cleaning, linen and maintenance, with your own property team.",
    buttonText: "Start Free",
    href: "/get-started",
    theme: "light",
  },
  {
    id: "fully-managed",
    label: "Technology + operations team",
    title: "Fully managed",
    highlightedTitle: "",
    subtitle:
      "A real team to coordinate your property’s day-to-day.",
    price: "Tailored fee",
    priceDescription: "agreed for your property",
    listHeading: "PropertyFlow handles",
    included: [
      "Listings, calendars and dynamic pricing",
      "Guest communication and check-in coordination",
      "Cleaning, linen and maintenance coordination",
      "Owner updates and reporting",
    ],
    responsibilityHeading: "You handle",
    responsibility:
      "Provide property access and information, approve agreed work and costs, and meet the owner obligations in your agreement.",
    buttonText: "Explore Fully Managed",
    href: "/fully-managed",
    theme: "dark",
  },
];

export default function HostingOptions() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hosting-options"
      className="relative overflow-hidden bg-white px-5 py-10 text-black sm:px-8 lg:px-16 sm:py-16  lg:py-16 2xl:py-28"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-[400px] w-[400px] rounded-full bg-[#ff0055]/[0.035] blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Section heading */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.p
              variants={revealVariants}
              className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-800 sm:text-sm"
            >
              Two ways to host
            </motion.p>

            <motion.h2
              variants={revealVariants}
              className="mt-3 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[42px]"
            >
              Your property.
              <br />
              <span className="text-neutral-400">
                Your level of involvement.
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants}
            className="max-w-[430px] text-sm leading-6 text-neutral-800 sm:text-base sm:leading-6 lg:justify-self-end"
          >
            Use the tools yourself, or let our operations team take
            care of every stay. Choose the support that works for you.
          </motion.p>
        </div>

        {/* Hosting cards */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-[18px]"
        >
          {hostingPlans.map((plan) => {
            const isDark = plan.theme === "dark";

            return (
              <motion.article
                key={plan.id}
                variants={revealVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.25 },
                      }
                }
                className={`flex min-w-0 flex-col rounded-[28px] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.055)] sm:p-6 lg:p-7 ${
                  isDark
                    ? "bg-[#301a2e] text-white"
                    : "bg-[#fff0e8] text-black"
                }`}
              >
                {/* Card label */}
                <div>
                  <span
                    className={`inline-flex min-h-[42px] items-center rounded-full border px-5 py-2 text-xs font-medium sm:text-sm ${
                      isDark
                        ? "border-white/20 bg-white/[0.06] text-[#ff0055]"
                        : "border-white/80 bg-white/50 text-[#ff0055]"
                    }`}
                  >
                    {plan.label}
                  </span>
                </div>

                {/* Plan heading */}
                <div className="mt-6 min-h-[112px] px-1 sm:px-2">
                  <h3 className="text-3xl font-semibold leading-[1.15] tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
                    {plan.title}
                    {plan.highlightedTitle && (
                      <>
                        <br />
                        <span className="text-[#ff0055]">
                          {plan.highlightedTitle}
                        </span>
                      </>
                    )}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-5 sm:text-sm ${
                      isDark ? "text-white/70" : "text-neutral-500"
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                {/* Inner white panel */}
                <div className="mt-4 flex flex-1 flex-col rounded-[26px] bg-white p-5 text-black sm:p-7 lg:p-7">
                  {/* Price */}
                  <div className="min-h-[94px]">
                    <p
                      className={`font-semibold tracking-[-0.045em] ${
                        plan.price === "£0"
                          ? "text-5xl sm:text-[60px]"
                          : "text-4xl sm:text-[42px]"
                      }`}
                    >
                      {plan.price}
                    </p>

                    <p className="mt-1 text-base leading-6 text-neutral-500 sm:text-lg">
                      {plan.priceDescription}
                    </p>
                  </div>

                  <div className="my-4 h-px w-full bg-[#ff0055]/20" />

                  {/* What's included */}
                  <div>
                    <h4 className="text-base font-semibold sm:text-[17px]">
                      {plan.listHeading}
                    </h4>

                    <ul className="mt-3 space-y-2.5">
                      {plan.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-5 sm:text-[14px]"
                        >
                          <span className="mt-[2px] flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#ff0055] text-white">
                            <Check size={10} strokeWidth={3} />
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="my-5 h-px w-full bg-[#ff0055]/20" />

                  {/* Owner responsibilities */}
                  <div className="flex-1">
                    <h4 className="text-base font-semibold sm:text-[17px]">
                      {plan.responsibilityHeading}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      {plan.responsibility}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={plan.href}
                    className={`mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ff0055]/25 sm:text-base ${
                      isDark
                        ? "border border-[#ff0055] bg-white text-[#ff0055] hover:bg-[#ff0055] hover:text-white"
                        : "bg-gradient-to-r from-[#ff0055] to-[#c50045] text-white shadow-[0_6px_18px_rgba(255,0,85,0.12)] hover:shadow-[0_10px_25px_rgba(255,0,85,0.22)]"
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight size={19} strokeWidth={1.7} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
