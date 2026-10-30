
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    category: "Booking channels",
    title: "Where should your property be seen?",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern luxury holiday property with large windows",
    href: "/journal/where-should-your-property-be-seen",
  },
  {
    category: "Booking channels",
    title: "A considered approach to nightly rates.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    alt: "Warmly illuminated hospitality venue at night",
    href: "/journal/approach-to-nightly-rates",
  },
  {
    category: "Booking channels",
    title: "Where should your holiday property be listed?",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    alt: "Comfortable, carefully prepared holiday accommodation",
    href: "/journal/holiday-property-listings",
  },
  {
    category: "Property management",
    title: "A better guest experience starts before arrival.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: "Bright contemporary property interior",
    href: "/journal/better-guest-experience",
  },
];

export default function BlogSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  function scrollCarousel(direction: "prev" | "next") {
    const container = carouselRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>(
      "[data-blog-card]",
    );

    const gap = 24;
    const distance = firstCard
      ? firstCard.offsetWidth + gap
      : container.clientWidth * 0.8;

    container.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <section
      id="propertyflow-journal"
      className="overflow-hidden bg-white py-10 text-black sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full container px-5 l">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="flex items-end justify-between gap-6 px-5 sm:px-8 lg:px-16"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#ff0055] sm:text-sm">
              The PropertyFlow Journal
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[48px]">
              A clearer view
              <br />
              <span className="text-[#b4b4b4]">
                of better hosting.
              </span>
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="mb-1 hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              aria-label="Previous blog articles"
              className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-[#ff0055] shadow-[0_4px_25px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0055]"
            >
              <ArrowLeft size={23} strokeWidth={1.4} />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              aria-label="Next blog articles"
              className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-[#ff0055] shadow-[0_4px_25px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0055]"
            >
              <ArrowRight size={23} strokeWidth={1.4} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal blog carousel */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.1,
          }}
          ref={carouselRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14 sm:gap-6 sm:px-8 lg:mt-16 lg:gap-6 lg:pl-16 lg:pr-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.href}
              data-blog-card
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group w-[86vw] max-w-[630px] shrink-0 snap-start overflow-hidden rounded-[30px] bg-white shadow-[0_8px_35px_rgba(0,0,0,0.065)] transition-shadow duration-300 hover:shadow-[0_16px_45px_rgba(0,0,0,0.10)] sm:w-[min(72vw,630px)]"
            >
              <Link
                href={post.href}
                className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ff0055]"
              >
                {/* Article image */}
                <div className="relative h-[230px] overflow-hidden sm:h-[270px] lg:h-[270px]">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/[0.015]" />
                </div>

                {/* Article details */}
                <div className="flex min-h-[205px] flex-1 flex-col p-5 sm:p-6">
                  <p className="text-base font-medium text-[#ff0055] sm:text-lg">
                    {post.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-[1.35] tracking-[-0.025em] sm:text-[27px]">
                    {post.title}
                  </h3>

                  <div className="mt-auto flex justify-end pt-5">
                    <span className="inline-flex items-center gap-2 text-base font-medium text-[#ff0055] transition-all duration-300 group-hover:gap-3 sm:text-lg">
                      Read the guide
                      <ArrowRight size={19} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Explore blog */}
        <div className="mt-5 px-5 sm:px-8 lg:px-16">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-base font-medium text-[#ff0055] transition-all duration-300 hover:gap-3 sm:text-lg"
          >
            Explore the blog
            <ArrowRight size={19} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Mobile carousel controls */}
        <div className="mt-6 flex justify-end gap-3 px-5 sm:hidden">
          <button
            type="button"
            onClick={() => scrollCarousel("prev")}
            aria-label="Previous blog articles"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0055] shadow-md"
          >
            <ArrowLeft size={21} />
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel("next")}
            aria-label="Next blog articles"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0055] shadow-md"
          >
            <ArrowRight size={21} />
          </button>
        </div>
      </div>
    </section>
  );
}
