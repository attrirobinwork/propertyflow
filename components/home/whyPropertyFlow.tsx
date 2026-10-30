
"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  CalendarDays,
  MessageCircle,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: (
      <>
        Too many platforms.
        <br />
        Too much switching.
      </>
    ),
    description:
      "Managing multiple booking platforms takes time.",
    image: "/images/why1.svg",
    imageAlt: "Booking channels and property calendars in one place",
    footer:
      "Bring supported listings and booking calendars into one place.",
    icon: CalendarDays,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-100",
  },
  {
    number: "02",
    title: (
      <>
        The work follows you
        <br />
        everywhere.
      </>
    ),
    description:
      "Guest messages and property tasks interrupt your day.",
    image: "/images/why2.svg",
    imageAlt: "PropertyFlow guest messaging and turnover task interface",
    footer:
      "Choose fully managed hosting for day-to-day team support.",
    icon: MessageCircle,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    number: "03",
    title: (
      <>
        Fewer channels. Fewer
        <br />
        ways to be found.
      </>
    ),
    description:
      "Managing distribution across booking platforms can be complicated.",
    image: "/images/why3.svg",
    imageAlt: "PropertyFlow connected booking and travel channels",
    footer:
      "Explore supported channels while keeping calendars coordinated.",
    icon: Globe2,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-100",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const revealVariants: Variants = {
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

export default function WhyPropertyFlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-propertyflow"
      className="relative overflow-hidden bg-white  py-20 text-neutral-950 sm:px-8 sm:py-24  lg:py-28 "
    >
      <div className="mx-auto  container px-5 lg:px-16 ">
        {/* Section introduction */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="max-w-[790px]"
        >
          <motion.p
            variants={revealVariants}
            className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-800 sm:text-sm"
          >
            More hosting. Less juggling.
          </motion.p>

          <motion.h2
            variants={revealVariants}
            className="mt-3 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[44px]"
          >
            A property should open doors.
            <br />
            <span className="text-neutral-400">
              Not fill your day with tasks.
            </span>
          </motion.h2>

          <motion.p
            variants={revealVariants}
            className="mt-4 max-w-[700px] text-sm leading-6 text-neutral-800 sm:text-base sm:leading-6"
          >
            From booking platforms to guest messages and property
            operations, PropertyFlow brings everything together —
            so you can spend less time managing tasks and more time
            growing your business.
          </motion.p>
        </motion.div>

 

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-black">01</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-snug text-black">
              Too many platforms.
              <br />
              Too much switching.
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-5 text-gray-500">
              Managing multiple booking platforms takes time.
            </p>

            {/* Image Placeholder */}
            
            <div className="mt-6 flex aspect-square items-center justify-center rounded-[28px] border border-gray-100 bg-gray-50">
              <img
                src="/images/why1.svg"
                alt="card 1"


                className="object-cover"
              />
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-100">
                <CalendarDays  strokeWidth={"1px"}/>
              </div>
              <p className="text-sm leading-5 text-gray-500">
                Bring supported listings and booking calendars into one place.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-black">02</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-snug text-black">
              The work follows you
              <br />
              everywhere.
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-5 text-gray-500">
              Guest messages and property tasks interrupt your day.
            </p>

            {/* Image Placeholder */}
            <div className="mt-6 flex aspect-square items-center justify-center rounded-[28px] ">
              <img
                src="/images/why2.svg"
                alt="card 1"
                className="object-cover w-full"
              />
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100">
                <MessageCircle strokeWidth={"1px"}/>
              </div>
              <p className="text-sm leading-5 text-gray-500">
                Choose fully managed hosting for day-to-day team support.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-black">03</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-snug text-black">
              Fewer channels. Fewer
              <br />
              ways to be found.
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-5 text-gray-500 ">
              Managing distribution across booking platforms can be complicated.
            </p>

            {/* Image Placeholder */}
            <div className="mt-6 flex relative aspect-square items-center justify-center rounded-[28px] border border-gray-100 bg-gray-50">
              <div className="absolute left-[20px] top-[20px] z-10 bg-white px-3 py-3 rounded-[20px] shadow  h-[65px] flex items-cente">
                <img src="/images/brands/airbnb.png" width={"97px"}/>
              </div>
              <div className="absolute left-[160px] top-[20px] z-10 bg-white px-3 py-3 rounded-[20px] shadow h-[65px] flex items-center">
                <img src="/images/brands/booking.png" width={"97px"}/>
              </div>
              <div className="absolute left-[300px] top-[20px] z-10 bg-white px-3 py-3 rounded-[20px] shadow h-[65px] flex items-center">
                <img src="/images/brands/vrboIcon.png" width={"97px"}/>
              </div>
              <img
                src="/images/card3-animated.svg"
                alt="card 1"
                className="object-cover w-[70%] absolute"
              />
              <div className="absolute left-[20px] top-[360px] z-10 bg-white px-3 py-3 rounded-[20px] shadow  h-[65px] align-center">
                <img src="/images/brands/expedia.png" width={"97px"} style={{paddingTop:"5px", position:"relative" }}/>
              </div>
              <div className="absolute left-[160px] top-[360px] z-10 bg-white px-3 py-3 rounded-[20px] shadow h-[65px] flex items-center">
                <img src="/images/brands/googleTravel.png" width={"97px"} style={{paddingTop:"5px", position:"relative" }}/>
              </div>
              <div className="absolute left-[300px] w-[97px] top-[360px] z-10 bg-white px-3 py-3 rounded-[20px] shadow h-[65px] flex items-center">
                + More
              </div>

              <div className="absolute left-1/2 top-[140px] z-20 flex h-[140px] w-[140px] -translate-x-1/2 flex-col items-center justify-center rounded-[30px] border border-[#ff0055] bg-white shadow-[0_10px_35px_rgba(255,0,85,0.12)]" style={{ opacity: 1, transform: "none" }}><div className="absolute inset-[-8px] -z-10 rounded-[36px] border border-[#ff0055]/20" style={{ transform: "none", opacity: 0.5 }}></div><div className="h-[80px] w-[80px] flex align-center items-center text-[#ff0055]"><img src="/images/logo2.svg" /></div></div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100">
                <Globe2 strokeWidth={"1px"}/>
              </div>
              <p className="text-sm leading-5 text-gray-500">
                Explore supported channels while keeping calendars coordinated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
