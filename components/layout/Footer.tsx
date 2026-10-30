
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "Listing management", href: "/platform/listing-management" },
      { label: "Connected calendars", href: "/platform/connected-calendars" },
      { label: "Dynamic pricing", href: "/platform/dynamic-pricing" },
      { label: "Booking channels", href: "/platform/booking-channels" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "For property owners",
    links: [
      { label: "Self-managed hosting", href: "/self-managed" },
      { label: "Fully managed hosting", href: "/fully-managed" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Owner reporting", href: "/#owner-updates" },
      { label: "Partner Programme", href: "/partner-programme" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "PropertyFlow Journal", href: "/journal" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Contact", href: "/contact" },
      { label: "Login", href: "/login" },
      { label: "Get started", href: "/get-started", accent: true },
    ],
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-[#0d0c12] px-5 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1640px]">
        {/* Main footer content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: "easeOut",
          }}
          className="grid grid-cols-1 gap-12 pb-16 pt-16 sm:pt-20 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[1.45fr_0.8fr_0.9fr_0.7fr] lg:gap-12 lg:pb-24 lg:pt-24"
        >
          {/* Brand column */}
          <div className="max-w-[480px]">
            <Link
              href="/"
              aria-label="PropertyFlow home"
              className="inline-block rounded-sm font-bold leading-none tracking-[-0.045em] text-[#f5f3f8] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0055]"
            >
              <img src="/images/pflogo.svg" alt="Logo"/>
            </Link>

            <h2 className="mt-7 text-xl font-medium tracking-[-0.02em] text-[#f0edf3] sm:text-[25px]">
              More hosting. Less juggling.
            </h2>

            <p className="mt-4 max-w-[460px] text-base leading-[1.65] text-[#b4afbd] sm:text-lg">
              Manage your holiday rental listings, calendars and
              dynamic pricing free for life or choose fully managed
              hosting with our team.
            </p>

            <p className="mt-7 text-base font-medium text-[#ff0055] sm:text-lg">
              Free tools. Optional managed support.
            </p>
          </div>

          {/* Link columns */}
          {footerGroups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="flex flex-col items-start"
            >
              <h3 className="mb-6 text-lg font-medium text-[#f0edf3] sm:text-xl">
                {group.title}
              </h3>

              <ul className="flex flex-col items-start gap-[19px]">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-base leading-6 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0055] sm:text-[14px] ${
                        link.accent
                          ? "font-medium text-[#ff0055] hover:text-[#ff6699]"
                          : "text-[#c3bfca] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-[#292630]" />

        {/* Legal navigation */}
        <div className="flex flex-col gap-6 py-7 sm:py-9 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className="text-sm text-[#b4afbd] sm:text-base">
            © 2026 PropertyFlow. All rights reserved.
          </p>

          <nav aria-label="Legal" className="flex flex-wrap gap-x-7 gap-y-4 sm:gap-x-10">
            <Link
              href="/privacy-policy"
              className="text-sm text-[#b4afbd] transition-colors hover:text-white sm:text-base"
            >
              Privacy policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-[#b4afbd] transition-colors hover:text-white sm:text-base"
            >
              Terms of use
            </Link>

            <Link
              href="/cookies"
              className="text-sm text-[#b4afbd] transition-colors hover:text-white sm:text-base"
            >
              Cookies
            </Link>
          </nav>
        </div>

        {/* Disclosure */}
        <p className="max-w-[1000px] pb-10 text-sm leading-6 text-[#918b9b] sm:pb-16 sm:text-base">
          Booking-channel commissions and optional management services
          are separate from the free tools.
        </p>
      </div>
    </footer>
  );
}
