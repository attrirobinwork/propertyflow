
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      {/* Ambient background glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#b7ffe8]/40 blur-[100px] sm:h-[600px] sm:w-[600px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 25, 0],
                y: [0, -15, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-[-30px] -z-10 h-[400px] w-[400px] rounded-full bg-[#ffb6d0]/35 blur-[100px] sm:h-[600px] sm:w-[600px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -20, 0],
                y: [0, 20, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-[1760px]">
        {/* CTA panel */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden rounded-[36px] border border-white/90 bg-white/75 px-5 py-14 text-center shadow-[0_8px_14px_rgba(0,0,0,0.045)] backdrop-blur-xl sm:min-h-[440px] sm:rounded-[48px] sm:px-10 sm:py-16 lg:min-h-[485px] lg:rounded-[68px] lg:px-16"
        >
          {/* Panel's subtle internal color glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-[-180px] h-[360px] w-[360px] rounded-full bg-[#c2fff0]/45 blur-[90px]"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-[-150px] h-[360px] w-[360px] rounded-full bg-[#ffd0df]/45 blur-[90px]"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1.1, 1, 1.1], opacity: [0.7, 0.4, 0.7] }
            }
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[1100px]">
            {/* Eyebrow */}
            <motion.p
              variants={reveal}
              className="text-xs font-medium uppercase tracking-[0.16em] text-[#ff0055] sm:text-sm sm:tracking-[0.18em] lg:text-base"
            >
              Your property. Your way to host.
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={reveal}
              className="mx-auto mt-5 max-w-[1050px] text-neutral-900 text-3xl font-semibold leading-[1.18] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[60px]"
            >
              Start with free tools.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Choose support when you need it.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={reveal}
              className="mx-auto mt-6 max-w-[700px] text-sm leading-6 text-neutral-900 sm:text-base sm:leading-7 lg:text-[21px] lg:leading-[1.6]"
            >
              Feedback from owners whose properties are run through
              PropertyFlow’s Partner service.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={reveal}
              className="mt-7 flex w-full flex-col items-center justify-center gap-4 sm:mt-8 sm:w-auto sm:flex-row sm:gap-5"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/get-started"
                  className="group inline-flex min-h-[46px]  lg:min-h-[48px] 2xl:min-h-[58px] w-full items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#ff0055] to-[#c50045] px-7 text-base font-medium text-white shadow-[0_10px_25px_rgba(255,0,85,0.12)] transition-shadow duration-300 hover:shadow-[0_14px_35px_rgba(255,0,85,0.24)] sm:min-h-[68px] sm:min-w-[300px] sm:px-10 sm:text-lg lg:text-[25px]"
                >
                  Start Free
                  <ArrowRight
                    size={25}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/fully-managed"
                  className="group inline-flex min-h-[46px]  lg:min-h-[48px] 2xl:min-h-[58px] w-full items-center justify-center gap-3 rounded-full border border-[#ff0055] bg-white/75 px-7 text-base font-medium text-[#ff0055] transition-colors duration-300 hover:bg-[#ff0055] hover:text-white sm:min-h-[68px] sm:min-w-[340px] sm:px-9 sm:text-lg lg:text-[25px]"
                >
                  Explore Fully Managed
                  <ArrowRight
                    size={25}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
