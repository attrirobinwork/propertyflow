
"use client";

import { useState, type FormEvent } from "react";
import {
    ArrowRight,
    CalendarDays,
    Check,
    House,
    MapPin,
    Menu,
    PoundSterling,
    Radio,
    TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ManagementType = "self" | "fully";

export default function HeroSection() {
    const [management, setManagement] =
        useState<ManagementType>("self");
    const [postcode, setPostcode] = useState("");
    const [bedrooms, setBedrooms] = useState(2);
    const [propertyType, setPropertyType] =
        useState("Flat / apartment");
    const [error, setError] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!postcode.trim()) {
            setError("Please enter your property postcode.");
            return;
        }

        setError("");

        // Connect your real property-estimation API here.
        const estimateRequest = {
            management,
            postcode: postcode.trim(),
            bedrooms,
            propertyType,
        };

        console.log("Property estimate request:", estimateRequest);
    }

    return (
        <section className="relative isolate min-h-full overflow-hidden bg-[#211d20] text-white lg:min-h-full">
            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="absolute inset-0 -z-30 h-full w-full object-cover"
            >
                <source
                    src="/video/heroBanner.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 -z-20 bg-black/50" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/25 to-black/35" />

            {/* Content */}
            <div className="container  grid min-h-[800px] mx-auto grid-cols-1 items-center gap-12 px-5 pb-16 pt-32  lg:min-h-[100vh] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16  lg:pb-12 lg:pt-28 lg:px-16">
                {/* Left content */}
                <div className="max-w-[660px]">
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-white/90 sm:text-sm">
                        Listing management + dynamic pricing
                    </p>

                    <h1 className="max-w-[650px] text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl xl:text-[68px]">
                        Your property.
                        <br />
                        More bookings.
                        <br />
                        <span className="text-[#ff0055]">Less admin.</span>
                    </h1>

                    <p className="mt-6 max-w-[590px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                        Bring your booking channels, calendars and nightly
                        pricing together with PropertyFlow. Manage it yourself
                        with powerful tools, or let our team handle the day-to-day.
                    </p>

                    {/* Benefits */}
                    <div className="mt-8 grid max-w-[600px] grid-cols-3 gap-3 sm:gap-6">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ff0055] text-[#ff0055]">
                                <PoundSterling size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold sm:text-base">
                                    £0 software
                                </p>
                                <p className="text-xs text-white/80 sm:text-sm">
                                    subscription
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ff0055] text-[#ff0055]">
                                <Radio size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold sm:text-base">
                                    35+
                                </p>
                                <p className="text-xs text-white/80 sm:text-sm">
                                    booking channels
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ff0055] text-[#ff0055]">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold sm:text-base">
                                    Smart
                                </p>
                                <p className="text-xs text-white/80 sm:text-sm">
                                    dynamic pricing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Estimate form */}
                <div className="w-full lg:justify-self-end">
                    <div className="mx-auto max-w-[600px] rounded-[24px] bg-[#fffafb] p-5 text-[#171519] shadow-2xl sm:p-7 lg:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#ff0055] sm:text-sm">
                            Your free property estimate
                        </p>

                        <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-[24px] lg:text-[26px] 2xl:text-[28px]">
                            See what your property could earn
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-[#858087] sm:text-base">
                            Get a personalised estimate in under 60 seconds.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6">
                            {/* Management selector */}

                            <div className="grid grid-cols-2 rounded-full bg-[#f0eef0] p-1">
                                {[
                                    { id: "self", label: "I'll self-manage" },
                                    { id: "fully", label: "Fully managed" },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setManagement(tab.id as "self" | "fully")}
                                        className="relative rounded-full px-3 py-3 text-sm font-medium"
                                    >
                                        {management === tab.id && (
                                            <motion.span
                                                layoutId="active-management-tab"
                                                className="absolute inset-0 rounded-full bg-black"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 32,
                                                }}
                                            />
                                        )}

                                        <span
                                            className={`relative z-10 ${management === tab.id
                                                    ? "text-white"
                                                    : "text-[#29262a]"
                                                }`}
                                        >
                                            {tab.label}
                                        </span>
                                    </button>
                                ))}
                            </div>



                            {/* Postcode and bedrooms */}
                            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-[1fr_180px]">
                                <div>
                                    <label
                                        htmlFor="postcode"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Property postcode
                                    </label>

                                    <div className="flex lg:h-[46px] 2xl:h-[54px] items-center gap-3 rounded-2xl border border-[#d8d5d9] bg-white px-4 transition-colors focus-within:border-[#ff0055] focus-within:ring-2 focus-within:ring-[#ff0055]/10">
                                        <MapPin
                                            size={20}
                                            className="shrink-0 text-[#ff0055]"
                                        />
                                        <input
                                            id="postcode"
                                            name="postcode"
                                            value={postcode}
                                            onChange={(event) => {
                                                setPostcode(event.target.value);
                                                setError("");
                                            }}
                                            placeholder="e.g. EH1 2NG"
                                            autoComplete="postal-code"
                                            className="min-w-0 w-full bg-transparent text-sm outline-none placeholder:text-[#929096]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="bedrooms"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Bedrooms
                                    </label>

                                    <div className="flex lg:h-[46px] 2xl:h-[54px] items-center justify-between rounded-2xl border border-[#d8d5d9] bg-white px-2">
                                        <button
                                            type="button"
                                            aria-label="Decrease bedrooms"
                                            disabled={bedrooms <= 1}
                                            onClick={() =>
                                                setBedrooms((value) => Math.max(1, value - 1))
                                            }
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f2f4] text-lg disabled:opacity-40"
                                        >
                                            −
                                        </button>

                                        <span
                                            id="bedrooms"
                                            aria-live="polite"
                                            className="min-w-8 text-center text-sm font-semibold"
                                        >
                                            {bedrooms}
                                        </span>

                                        <button
                                            type="button"
                                            aria-label="Increase bedrooms"
                                            disabled={bedrooms >= 20}
                                            onClick={() =>
                                                setBedrooms((value) => Math.min(20, value + 1))
                                            }
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f2f4] text-lg disabled:opacity-40"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Property type */}
                            <div className="mt-5">
                                <label
                                    htmlFor="propertyType"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Property type
                                </label>

                                <div className="relative">
                                    <House
                                        size={20}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#ff0055]"
                                    />

                                    <select
                                        id="propertyType"
                                        name="propertyType"
                                        value={propertyType}
                                        onChange={(event) =>
                                            setPropertyType(event.target.value)
                                        }
                                        className="lg:h-[46px] 2xl:h-[54px] w-full appearance-none rounded-2xl border border-[#d8d5d9] bg-white pl-12 pr-10 text-sm outline-none transition-colors focus:border-[#ff0055] focus:ring-2 focus:ring-[#ff0055]/10"
                                    >
                                        <option>Flat / apartment</option>
                                        <option>Detached house</option>
                                        <option>Semi-detached house</option>
                                        <option>Terraced house</option>
                                        <option>Cottage / holiday home</option>
                                        <option>Other</option>
                                    </select>

                                    <Menu
                                        size={17}
                                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#ff0055]"
                                    />
                                </div>
                            </div>

                            {/* Validation message */}
                            {error && (
                                <p role="alert" className="mt-3 text-sm text-red-600">
                                    {error}
                                </p>
                            )}

                            {/* CTA */}
                            <button
                                type="submit"
                                className="mt-7 flex lg:h-[48px] 2xl:h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#ff0055] px-5 text-base font-semibold text-white transition-all hover:bg-[#e6004c] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ff0055]/25"
                            >
                                Get my free estimate
                                <ArrowRight size={19} />
                            </button>

                            <p className="mt-4 text-center text-sm leading-6 text-[#858087]">
                                Free, with no obligation. No software subscription fees.
                            </p>
                        </form>

                        {/* Estimate indicators */}
                        <div className="mt-5 grid grid-cols-3 divide-x divide-[#e9e5e8] border-t border-[#e9e5e8] pt-5">
                            <div className="flex items-center justify-center gap-2 px-1 sm:gap-3">
                                <TrendingUp
                                    size={22}
                                    className="shrink-0 text-[#ff0055]"
                                />
                                <div>
                                    <p className="text-xs font-bold sm:text-sm">High</p>
                                    <p className="text-[11px] leading-4 text-[#514d52] sm:text-xs">
                                        Local demand
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 px-1 sm:gap-3">
                                <PoundSterling
                                    size={23}
                                    className="shrink-0 text-[#ff0055]"
                                />
                                <div>
                                    <p className="text-xs font-bold sm:text-sm">120</p>
                                    <p className="text-[11px] leading-4 text-[#514d52] sm:text-xs">
                                        Avg. nightly rate
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 px-1 sm:gap-3">
                                <CalendarDays
                                    size={22}
                                    className="shrink-0 text-[#ff0055]"
                                />
                                <div>
                                    <p className="text-xs font-bold sm:text-sm">70%+</p>
                                    <p className="text-[11px] leading-4 text-[#514d52] sm:text-xs">
                                        Booking potential
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
