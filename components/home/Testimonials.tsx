
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type PanInfo,
} from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "PropertyFlow’s service is personal. They know my property as well as I do",
    name: "Agata",
    detail: "Property owner · Trafalgar Lane, Edinburgh",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces",
    background: "bg-white",
  },
  {
    quote: "I got my summer back",
    name: "Gary",
    detail: "Property owner · Edinburgh",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces",
    background: "bg-gradient-to-br from-[#f1f4ff] to-white",
  },
  {
    quote:
      "Having everything coordinated in one place has made hosting so much easier.",
    name: "Sarah",
    detail: "Property owner · Glasgow",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&crop=faces",
    background: "bg-gradient-to-br from-[#fff5f8] to-white",
  },
  {
    quote:
      "The regular updates give me confidence that my property is in good hands.",
    name: "James",
    detail: "Property owner · Edinburgh",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces",
    background: "bg-white",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 70 : -70,
    scale: 0.94,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -50 : 50,
    scale: 0.96,
  }),
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const active = testimonials[activeIndex];
  const nextIndex = (activeIndex + 1) % testimonials.length;
  const preview = testimonials[nextIndex];

  function goNext() {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }

  function goPrevious() {
    setDirection(-1);
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length,
    );
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    const distance = info.offset.x;
    const velocity = info.velocity.x;

    if (distance < -70 || velocity < -500) {
      goNext();
    } else if (distance > 70 || velocity > 500) {
      goPrevious();
    }
  }

  const motionProps = reduceMotion
    ? {
        initial: false as const,
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: "enter" as const,
        animate: "center" as const,
        exit: "exit" as const,
        transition: {
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#fff1f5] px-5 py-10 text-black sm:px-8 sm:py-24 lg:min-h-[700px] lg:px-16 lg:py-24"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-white/80 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-[#ff0055]/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto grid w-full pl-5 lg:pl-16 container grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        {/* Left content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="relative z-10"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#ff0055] sm:text-sm">
            Owners using fully managed hosting
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[42px] 2xl:text-[56px]">
            A property in good hands.
            <br />
            <span className="text-[#ff0055]">
              Time back in yours.
            </span>
          </h2>

          <p className="mt-6 max-w-[610px] text-base leading-7 text-neutral-900 sm:text-lg">
            Feedback from owners whose properties are run through
            PropertyFlow’s Partner service.
          </p>

          <Link
            href="/owner-stories"
            className="mt-8 inline-flex min-h-[60px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#ff0055] to-[#c50045] px-7 text-base font-medium text-white shadow-[0_8px_25px_rgba(255,0,85,0.13)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,0,85,0.22)] sm:px-9 sm:text-lg"
          >
            Read the owners’ full experience
            <ArrowRight size={23} strokeWidth={1.4} />
          </Link>

          {/* Owner avatars */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 3).map((owner) => (
                <img
                  key={owner.name}
                  src={owner.avatar}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-[#fff1f5] object-cover"
                />
              ))}
            </div>

            <Link
              href="/owner-stories"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#ff0055] hover:text-[#c50045]"
            >
              View All <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Right slider */}
        <div className="relative min-w-0 lg:pl-2">
          {/* Navigation */}
          <div className="mb-6 flex justify-end gap-3 lg:mb-8 lg:pr-2">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous testimonial"
              className="flex h-[58px] w-[58px] items-center justify-center rounded-[24px] bg-white text-[#ff0055] shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0055]"
            >
              <ArrowLeft size={25} strokeWidth={1.4} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-[58px] w-[58px] items-center justify-center rounded-[24px] bg-white text-[#ff0055] shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0055]"
            >
              <ArrowRight size={25} strokeWidth={1.4} />
            </button>
          </div>

          {/* Desktop active card + preview */}
          <div className="relative hidden h-[440px]  lg:block">
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.article
                key={`active-${activeIndex}`}
                custom={direction}
                variants={slideVariants}
                {...motionProps}
                drag={reduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={handleDragEnd}
                whileDrag={{ scale: 0.98 }}
                className={`absolute left-0 top-0 z-20 flex h-[440px] w-[65%] cursor-grab touch-pan-y select-none flex-col rounded-[38px] p-8 shadow-[0_5px_8px_rgba(0,0,0,0.07)] active:cursor-grabbing xl:p-10 ${active.background}`}
              >
                <Quote
                  size={42}
                  strokeWidth={1.2}
                  className="text-[#ff0055]"
                />

                <p className="mt-5 max-w-[460px] text-[27px] font-semibold leading-[1.4] tracking-[-0.025em] xl:text-[31px]">
                  {active.quote}
                </p>

                <div className="mt-auto flex items-center gap-5">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    draggable={false}
                    className="h-[76px] w-[76px] shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <p className="text-xl font-semibold text-neutral-500">
                      {active.name}
                    </p>
                    <p className="mt-2 text-base leading-6 text-neutral-400">
                      {active.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Smaller preview card */}
            <motion.article
              key={`preview-${nextIndex}`}
              initial={reduceMotion ? false : { opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4 }}
              onClick={goNext}
              role="button"
              tabIndex={0}
              aria-label="Show next testimonial"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  goNext();
                }
              }}
              className={`absolute right-[-28%] top-[95px] z-10 flex h-[345px] w-[55%] cursor-pointer flex-col rounded-[36px] p-8 shadow-[0_5px_8px_rgba(0,0,0,0.06)] xl:right-[-25%] xl:p-9 ${preview.background}`}
            >
              <Quote
                size={40}
                strokeWidth={1.2}
                className="text-[#ff0055]"
              />

              <p className="mt-5 text-[23px] font-semibold leading-[1.4] tracking-[-0.025em]">
                {preview.quote}
              </p>

              <div className="mt-auto flex items-center gap-4">
                <img
                  src={preview.avatar}
                  alt={preview.name}
                  draggable={false}
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-neutral-500">
                    {preview.name}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-neutral-400">
                    {preview.detail}
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Mobile and tablet slider */}
          <div className="lg:hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={`mobile-${activeIndex}`}
                custom={direction}
                variants={slideVariants}
                {...motionProps}
                drag={reduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={handleDragEnd}
                whileDrag={{ scale: 0.98 }}
                className={`flex min-h-[360px] cursor-grab touch-pan-y select-none flex-col rounded-[30px] p-6 shadow-[0_5px_8px_rgba(0,0,0,0.06)] active:cursor-grabbing sm:min-h-[390px] sm:p-8 ${active.background}`}
              >
                <Quote
                  size={38}
                  strokeWidth={1.2}
                  className="text-[#ff0055]"
                />

                <p className="mt-5 text-2xl font-semibold leading-[1.4] tracking-tight sm:text-3xl">
                  {active.quote}
                </p>

                <div className="mt-auto flex items-center gap-4 pt-10">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    draggable={false}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-neutral-600">
                      {active.name}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-neutral-400">
                      {active.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Pagination dots */}
            <div className="mt-5 flex justify-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-[#ff0055]"
                      : "w-2 bg-[#ff0055]/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
