
"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

const steps = [
  {
    number: "Step 01",
    title: "Booking",
    highlight: "received",
    description:
      "A new reservation comes in through a supported booking channel or direct booking.",
    image: "/images/brands/hiw1.svg",
    imageAlt: "Holiday rental booking displayed on a smartphone",
    cardClass: "bg-gradient-to-br from-[#f4f5ff] via-[#f5f7ff] to-white",
    position: "lg:mt-0",
    tilt: -3,
  },
  {
    number: "Step 02",
    title: "Guest",
    highlight: "Communication",
    description:
      "We coordinate guest questions, check-in details and special requests.",
    image: "/images/brands/hiw2.svg",
    imageAlt: "Guest communication managed on a smartphone",
    cardClass: "bg-gradient-to-br from-white via-[#f6faff] to-[#e8faff]",
    position: "lg:mt-12",
    tilt: 1,
  },
  {
    number: "Step 03",
    title: "Property",
    highlight: "prepared",
    description:
      "Cleaning, linen changes and maintenance are coordinated between stays.",
    image: "/images/brands/hiw3.svg",
    imageAlt: "Housekeeper preparing a holiday rental bedroom",
    cardClass: "bg-gradient-to-br from-[#faf8ff] via-[#f8f7ff] to-white",
    position: "lg:mt-3",
    tilt: 4,
  },
];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white px-5 py-10 text-black sm:px-8 lg:px-16 sm:py-16  lg:py-16 2xl:py-28"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#ff0055]/[0.035] blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={revealVariants}
              className="text-xs font-medium uppercase tracking-[0.16em] text-[#ff0055] sm:text-sm"
            >
              How it works
            </motion.p>

            <motion.h2
              variants={revealVariants}
              className="mt-3 text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[46px]"
            >
              One stay.
              <br />
              <span className="text-neutral-400">
                Everyone connected.
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants}
            className="max-w-[500px] text-sm leading-6 text-neutral-800 sm:text-base sm:leading-[1.65] lg:justify-self-end"
          >
            From the moment a booking arrives to the moment your
            property is ready for the next guest, every step works
            together.
          </motion.p>
        </div>

        {/* Process cards and connecting arrows */}
        <div className="relative mt-12 lg:mt-14">
          {/* Curved dotted connectors for desktop */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute -top-7 left-0 z-0 hidden h-[110px] w-full overflow-visible lg:block"
          >
            <defs>
              <marker
                id="process-arrow"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="#ff0055" />
              </marker>
            </defs>

            <motion.path
              d="M 335 30 C 395 -4 410 -4 470 50"
              fill="none"
              stroke="#ff0055"
              strokeWidth="1.4"
              strokeDasharray="2 4"
              markerEnd="url(#process-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                delay: 0.3,
              }}
            />

            <motion.path
              d="M 735 95 C 795 145 820 145 885 95"
              fill="none"
              stroke="#ff0055"
              strokeWidth="1.4"
              strokeDasharray="2 4"
              markerEnd="url(#process-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                delay: 0.7,
              }}
            />
          </svg>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:gap-9">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={revealVariants}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.16,
                }}
                className={`relative z-10 min-w-0 ${step.position}`}
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -5, 0],
                          rotate: [step.tilt, step.tilt - 0.3, step.tilt],
                        }
                  }
                  transition={{
                    duration: 5 + index * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                          rotate: 0,
                          transition: { duration: 0.25 },
                        }
                  }
                  className={`relative flex min-h-[510px] flex-col overflow-hidden rounded-[30px] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.035)] sm:min-h-[530px] sm:p-7 ${step.cardClass}`}
                >
                  {/* Step label */}
                  <span className="inline-flex w-fit items-center rounded-full bg-[#fce5f7] px-5 py-3 text-sm font-medium text-[#ff0055]">
                    {step.number}
                  </span>

                  {/* Text content */}
                  <div className="relative z-10 mt-6">
                    <h3 className="text-3xl font-bold leading-[1.22] tracking-[-0.035em] sm:text-[34px]">
                      {step.title}
                      <br />
                      <span className="text-[#ff0055]">
                        {step.highlight}
                      </span>
                    </h3>

                    <p className="mt-3 max-w-[390px] text-sm leading-[1.65] text-neutral-500 sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Illustration area */}
                  <motion.div
                    className="relative mt-auto -mx-2 -mb-5 h-[240px] sm:-mx-4 sm:h-[265px]"
                    whileHover={reduceMotion ? undefined : { scale: 1.025 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-contain object-bottom"
                    />
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
