
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "For host", href: "/for-host" },
  { label: "Features", href: "/features" },
  { label: "Own a property", href: "/own-a-property" },
  { label: "Partner Programme", href: "/partners" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto flex container items-center justify-between px-5 py-5 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="PropertyFlow home"
          className="flex shrink-0 items-center gap-2"
        >
         <img src="/images/pflogo.svg" alt="Logo"/>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:flex 2xl:gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-white/95 transition-colors hover:text-[#ff0055]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-white transition-colors hover:text-[#ff0055]"
          >
            Login
          </Link>

          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-full border border-[#ff0055] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#ff0055]"
          >
            Get Started
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-white/30 p-2 text-white lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mx-4 rounded-2xl border border-white/15 bg-[#17151a]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-3 text-sm text-white transition-colors hover:text-[#ff0055]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-white"
            >
              Login
            </Link>

            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0055] px-5 py-3 text-sm font-semibold text-white"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
