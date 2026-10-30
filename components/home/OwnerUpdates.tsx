
"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  CalendarDays,
  Fence,
  CircleDollarSign,
  ChartNoAxesCombined,
} from "lucide-react";

const updates = [
  {
    title: "Booking",
    description: "See upcoming stays and reservation details.",
    icon: CalendarDays,
    background: "bg-gradient-to-br from-[#f1f4ff] to-[#ffffff]",
  },
  {
    title: "Property activity",
    description:
      "Follow cleaning, preparation and maintenance updates.",
    icon: Fence,
    background: "bg-gradient-to-br from-[#fffaf0] to-[#ffffff]",
  },
  {
    title: "Income and expenses",
    description:
      "See upcoming stays and reservation details.",
    icon: CircleDollarSign,
    background: "bg-gradient-to-br from-[#fff0ff] to-[#ffffff]",
  },
  {
    title: "Statements",
    description:
      "Receive itemised monthly statements with deductions and payout information.",
    icon: ChartNoAxesCombined,
    background: "bg-gradient-to-br from-[#fff0f1] to-[#ffffff]",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function OwnerUpdates() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="owner-updates"
      className="relative overflow-hidden border-x-2 border-[#1596ff] bg-white  py-20 text-black sm:px-8 sm:py-24  lg:py-28"
    >
      <div className="mx-auto w-full container px-5 lg:px-16">
        {/* Section introduction */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.14 },
            },
          }}
          className="max-w-[850px]"
        >
          <motion.p
            variants={cardVariants}
            className="text-xs font-medium uppercase tracking-[0.16em] text-[#ff0055] sm:text-sm"
          >
            Fully managed. Still your property.
          </motion.p>

          <motion.h2
            variants={cardVariants}
            className="mt-4 text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[56px]"
          >
            Stay informed.
            <br />
            <span className="text-[#b4b4b4]">
              Without chasing updates.
            </span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mt-6 max-w-[640px] text-base leading-7 text-neutral-900 sm:text-lg sm:leading-8"
          >
            Know what is booked, what has been done and how the
            numbers add up.
          </motion.p>
        </motion.div>

        {/* Information cards */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13 },
            },
          }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        >
          {updates.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                        transition: {
                          duration: 0.25,
                          ease: "easeOut",
                        },
                      }
                }
                className={`group relative min-h-[260px] overflow-hidden rounded-[30px] ${item.background} p-7 shadow-[0_5px_8px_rgba(0,0,0,0.055)] transition-shadow duration-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.075)] sm:min-h-[280px] sm:p-8`}
              >
                {/* Icon */}
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}
                  className="mb-7 flex h-12 w-12 items-center justify-center text-[#ff0055]"
                >
                  <Icon
                    size={40}
                    strokeWidth={1.1}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Card content */}
                <h3 className="max-w-[280px] text-[25px] font-semibold leading-[1.35] tracking-[-0.035em] sm:text-[28px]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[300px] text-base leading-[1.55] text-[#808080] sm:text-[18px]">
                  {item.description}
                </p>

                {/* Decorative hover glow */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[#ff0055]/[0.06] blur-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
