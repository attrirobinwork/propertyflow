
"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Settings,
  Check,
} from "lucide-react";

const channels = [
  {
    name: "Airbnb",
    side: "left",
    position: 0,
    type: "airbnb",
  },
  {
    name: "Booking.com",
    side: "right",
    position: 0,
    type: "booking",
  },
  {
    name: "Vrbo",
    side: "left",
    position: 1,
    type: "vrbo",
  },
  {
    name: "Google Travel",
    side: "right",
    position: 1,
    type: "google",
  },
  {
    name: "agoda",
    side: "left",
    position: 2,
    type: "agoda",
  },
  {
    name: "Trip.com",
    side: "right",
    position: 2,
    type: "trip",
  },
];

const features = [
  {
    title: "Centralised calendar",
    description:
      "Sync your bookings and availability across supported channels to help prevent double bookings.",
    icon: CalendarDays,
  },
  {
    title: "Expand your reach",
    description:
      "Connect with more booking channels and help more guests discover your properties.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Stay in control",
    description:
      "Manage listing availability, reservations, and channel connections from one place.",
    icon: Settings,
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};



function ChannelLogo({ type }: { type: string }) {
  if (type === "airbnb") {
    return (
        <img src="/images/brands/airbnb.png"/>
    );
  }

  if (type === "booking") {
    return (
        <img src="/images/brands/booking.png"/>
    );
  }

  if (type === "vrbo") {
    return (
        <img src="/images/brands/vrbo.png"/>
    );
  }

  if (type === "google") {
    return (
        <img src="/images/brands/googleTravel.png"/>
    );
  }

  if (type === "agoda") {
    return (
        <img src="/images/brands/agoda.png"/>
    );
  }

  return (
    <img src="/images/brands/trip.png"/>
  );
}

function ChannelCard({
  channel,
  index,
  reducedMotion,
}: {
  channel: (typeof channels)[number];
  index: number;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: reducedMotion ? 0 : 0.18 + index * 0.1,
        duration: 0.5,
      }}
      whileHover={reducedMotion ? undefined : { y: -3 }}
      className={`flex h-[78px] w-full items-center justify-between gap-3 rounded-2xl border border-transparent bg-white px-4 shadow-[0_8px_30px_rgba(0,0,0,0.055)] transition-shadow hover:shadow-[0_14px_32px_rgba(0,0,0,0.09)] sm:px-5 ${
        channel.type === "booking"
          ? "border-2 border-[#1596ff]"
          : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <ChannelLogo type={channel.type} />
      </div>

      <span
        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#ff0055] text-white"
        aria-label="Connected"
      >
        <Check size={12} strokeWidth={3} />
      </span>
    </motion.div>
  );
}

export default function ChannelIntegration() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="channel-integration"
      className="relative isolate overflow-hidden bg-white px-5 py-20 text-black sm:px-8 sm:py-24 lg:px-12 lg:py-24"
    >
      {/* Soft pink glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[430px] w-[430px] rounded-full bg-[#ff0055]/[0.07] blur-[100px]"
      />

      <div className="mx-auto w-full max-w-[1440px]">
        {/* Heading */}
        <motion.div
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mx-auto max-w-[1000px] text-center"
        >
          <motion.p
            variants={reveal}
            className="text-xs font-medium uppercase tracking-[0.15em] sm:text-sm"
          >
            Your next guest could be anywhere.
          </motion.p>

          <motion.h2
            variants={reveal}
            className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[44px]"
          >
            More channels. Coordinated calendars.
            <br />
            <span className="text-neutral-400">
              One place to manage your listings.
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-3 max-w-[720px] text-sm leading-6 text-neutral-800 sm:text-base"
          >
            Connect Airbnb, Booking.com, Vrbo and more. Bring
            reservations into one calendar, or expand your reach
            through PropertyFlow channels including Google Vacation
            Rentals.
          </motion.p>
        </motion.div>

        {/* Desktop connection diagram */}
        <div className="relative mx-auto mt-12 hidden h-[570px] max-w-[1000px] lg:block">
          {/* Connection lines */}
          {/* <svg
            viewBox="0 0 1000 430"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-0 h-[430px] w-full overflow-visible"
            fill="none"
            aria-hidden="true"
          >
            {[
              "M 220 65 C 300 65 300 145 420 180",
              "M 220 215 L 420 215",
              "M 220 365 C 300 365 300 285 420 250",
              "M 780 65 C 700 65 700 145 580 180",
              "M 780 215 L 580 215",
              "M 780 365 C 700 365 700 285 580 250",
              "M 500 280 L 500 395",
            ].map((path, index) => (
              <motion.path
                key={path}
                d={path}
                stroke="#ff0055"
                strokeWidth="1"
                strokeDasharray="5 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1.1,
                  delay: reducedMotion ? 0 : 0.25 + index * 0.08,
                  ease: "easeInOut",
                }}
              />
            ))}

            {[
              [220, 65],
              [220, 215],
              [220, 365],
              [780, 65],
              [780, 215],
              [780, 365],
              [420, 180],
              [420, 215],
              [420, 250],
              [580, 180],
              [580, 215],
              [580, 250],
            ].map(([cx, cy], index) => (
              <circle
                key={index}
                cx={cx}
                cy={cy}
                r="3"
                fill="#ff0055"
              />
            ))}
          </svg> */}

<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1224 560"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <defs>
        <style>{`
          .route {
            fill: none;
            stroke: #ff4f84;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 7 10;
            opacity: 0.35;
            vector-effect: non-scaling-stroke;
          }

          .dot {
            fill: #ff2f6d;
            stroke: #ffffff;
            stroke-width: 2;
          }
        `}</style>

        <path
          id="p1"
          d="M 298 140 C 372 164 442 222 519 244"
        />
        <path id="p2" d="M 298 251 L 519 251" />
        <path
          id="p3"
          d="M 298 363 C 367 327 440 280 519 257"
        />
<path
  id="p4"
  d="M 900 140 C 840 165 785 222 710 244"
/>
<path
  id="p5"
  d="M 900 251 L 710 251"
/>
<path
  id="p6"
  d="M 900 363 C 840 326 785 280 710 257"
/>
        <path id="p7" d="M 612 98 L 612 172" />
        <path id="p8" d="M 612 550 L 612 358" />
      </defs>

      {/* Original dotted routes */}
      <path className="route" d="M 298 140 C 372 164 442 222 519 244" />
      <path className="route" d="M 298 251 L 519 251" />
      <path className="route" d="M 298 363 C 367 327 440 280 519 257" />
      <path
  className="route"
  d="M 900 140 C 840 165 785 222 710 244"
/>
<path
  className="route"
  d="M 900 251 L 710 251"
/>
<path
  className="route"
  d="M 900 363 C 840 326 785 280 710 257"
/>
      {/* <path className="route" d="M 612 98 L 612 172" /> */}
      <path className="route" d="M 612 550 L 612 358" />

      {/* Original animated pink dots */}
      <g>
        <circle className="dot" r="5">
          <animateMotion
            dur="3.2s"
            begin="0s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#p1" />
          </animateMotion>
        </circle>

        <circle className="dot" r="5">
          <animateMotion
            dur="2.5s"
            begin="0.6s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#p2" />
          </animateMotion>
        </circle>

        <circle className="dot" r="5">
          <animateMotion
            dur="3.8s"
            begin="1.1s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#p3" />
          </animateMotion>
        </circle>

        <circle className="dot" r="5">
          <animateMotion
            dur="3s"
            begin="0.3s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#p4" />
          </animateMotion>
        </circle>

        <circle className="dot" r="5">
          <animateMotion
            dur="2.7s"
            begin="1s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#p5" />
          </animateMotion>
        </circle>

        <circle className="dot" r="5">
          <animateMotion
            dur="4.1s"
            begin="0.8s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#p6" />
          </animateMotion>
        </circle>

        {/* <circle className="dot" r="5">
          <animateMotion
            dur="2.2s"
            begin="0.2s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#p7" />
          </animateMotion>
        </circle> */}

        <circle className="dot" r="5">
          <animateMotion
            dur="2.9s"
            begin="1.4s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#p8" />
          </animateMotion>
        </circle>
      </g>
    </svg>

          {/* Pink concentric circles */}
          <div className="pointer-events-none absolute left-1/2 top-[215px] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff0055]/[0.025]" />
          <div className="pointer-events-none absolute left-1/2 top-[215px] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff0055]/[0.025]" />
          <div className="pointer-events-none absolute left-1/2 top-[215px] h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff0055]/[0.035]" />

          {/* Left channel cards */}
          <div className="absolute left-[30px] top-[50px] z-10 w-[200px]">
            <ChannelCard channel={channels[0]} index={0} reducedMotion={reducedMotion} />
          </div>
          <div className="absolute left-[30px] top-[166px] z-10 w-[200px]">
            <ChannelCard channel={channels[2]} index={1} reducedMotion={reducedMotion} />
          </div>
          <div className="absolute left-[30px] top-[288px] z-10 w-[200px]">
            <ChannelCard channel={channels[4]} index={2} reducedMotion={reducedMotion} />
          </div>

          {/* Right channel cards */}
          <div className="absolute right-[40px] top-[50px] z-10 w-[200px]">
            <ChannelCard channel={channels[1]} index={3} reducedMotion={reducedMotion} />
          </div>
          <div className="absolute right-[40px] top-[166px] z-10 w-[200px]">
            <ChannelCard channel={channels[3]} index={4} reducedMotion={reducedMotion} />
          </div>
          <div className="absolute right-[40px] top-[288px] z-10 w-[200px]">
            <ChannelCard channel={channels[5]} index={5} reducedMotion={reducedMotion} />
          </div>

          {/* Central brand card */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: reducedMotion ? 0 : 0.25,
              type: "spring",
              stiffness: 150,
              damping: 18,
            }}
            className="absolute left-1/2 top-[140px] z-20 flex h-[140px] w-[140px] -translate-x-1/2 flex-col items-center justify-center rounded-[30px] border border-[#ff0055] bg-white shadow-[0_10px_35px_rgba(255,0,85,0.12)]"
          >
            {!reducedMotion && (
              <motion.div
                className="absolute inset-[-8px] -z-10 rounded-[36px] border border-[#ff0055]/20"
                animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.15, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            <div className="h-[80px] w-[80px] flex align-center items-center text-[#ff0055]">
              <img src="/images/logo2.svg"/>
            </div>
          </motion.div>

          {/* More channels */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reducedMotion ? 0 : 0.8, duration: 0.45 }}
            className="absolute left-1/2 top-[396px] z-20 -translate-x-1/2 rounded-2xl border border-[#ff0055] bg-[#fff7fa] px-4 py-4 text-center text-sm font-medium shadow-sm"
          >
            +30 More Channels
          </motion.div>
        </div>

        {/* Mobile and tablet channel layout */}
        <div className="mt-12 lg:hidden">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex h-[130px] w-[150px] flex-col items-center justify-center rounded-[28px] border border-[#ff0055] bg-white shadow-[0_10px_35px_rgba(255,0,85,0.12)]"
          >
            <div className="h-12 w-12 text-[#ff0055]">
            <img src="/images/logo2.svg"/>
            </div>
           
          </motion.div>

          <div className="mx-auto mt-8 grid max-w-[650px] grid-cols-1 gap-4 sm:grid-cols-2">
            {channels.map((channel, index) => (
              <ChannelCard
                key={channel.type}
                channel={channel}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          <div className="mt-5 text-center">
            <span className="inline-flex rounded-xl border border-[#ff0055] bg-[#fff7fa] px-4 py-3 text-sm font-medium">
              +30 More Channels
            </span>
          </div>
        </div>

        {/* Bottom feature strip */}
        <motion.div
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-[24px] border border-white bg-white/80 p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:p-5 lg:mt-7 lg:grid-cols-3 lg:p-5"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={reveal}
                className={`flex items-center gap-4 px-3 py-4 sm:px-4 lg:px-5 ${
                  index !== 2
                    ? "lg:border-r lg:border-dotted lg:border-[#ff0055]"
                    : ""
                } ${
                  index !== 0
                    ? "border-t border-neutral-100 lg:border-t-0"
                    : ""
                }`}
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-[#ffe7eb] text-[#ff0055]">
                  <Icon size={28} strokeWidth={1.2} />
                </div>

                <div>
                  <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
