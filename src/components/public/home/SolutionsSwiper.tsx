"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Warehouse, Package } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

type Slide = {
  title: string;
  pillar: "STORAGE SOLUTIONS" | "CONVEYOR SYSTEMS";
  tag: string;
  image: string;
  description: string;
  link: string;
};

// Balanced Showcase: Storage Solutions + Conveyor Systems
const slides: Slide[] = [
  {
    title: "Heavy Duty Pallet Racking Systems",
    pillar: "STORAGE SOLUTIONS",
    tag: "High-Density Industrial Storage",
    image: "/images/pallet-racking.jpg",
    description:
      "Precision-engineered structural pallet racks designed for high-density warehouse storage, rapid forklift throughput, and maximum cubic space utilization.",
    link: "/products?category=pallet-racking-systems",
  },
  {
    title: "Automated Powered Roller Conveyors",
    pillar: "CONVEYOR SYSTEMS",
    tag: "Automated Material Handling",
    image: "/images/automated-warehouse-conveyor.jpg",
    description:
      "High-speed zero-pressure accumulation motorized roller lines designed for continuous box movement, parcel sorting, and automated fulfillment hubs.",
    link: "/products?category=roller-conveyors",
  },
  {
    title: "Multi-Tier Mezzanine Floor Systems",
    pillar: "STORAGE SOLUTIONS",
    tag: "Vertical Space Multiplication",
    image: "/images/mezzanine-floor.jpg",
    description:
      "Structural steel mezzanine platforms, heavy-duty floor decks, and pick towers that double or triple warehouse cubic capacity without civil construction.",
    link: "/products?category=mezzanine-floors",
  },
  {
    title: "Z-Type Cleated Incline Belt Conveyors",
    pillar: "CONVEYOR SYSTEMS",
    tag: "Incline & Elevation Conveyance",
    image: "/images/cleated-conveyor-blue.jpg",
    description:
      "Custom-built swan-neck inclined conveyors with hot-welded cleats and corrugated sidewalls for floor-to-floor bulk parts and package elevation.",
    link: "/products?category=belt-conveyors",
  },
  {
    title: "Heavy Duty Cantilever Racking Systems",
    pillar: "STORAGE SOLUTIONS",
    tag: "Long & Bulky Material Storage",
    image: "/images/industrial-storage-systems.jpg",
    description:
      "Unobstructed horizontal storage frameworks engineered for certified load-bearing storage of steel pipes, timber, extrusions, and heavy bars.",
    link: "/products?category=cantilever-racking",
  },
  {
    title: "Steep Incline Corrugated Sidewall Conveyors",
    pillar: "CONVEYOR SYSTEMS",
    tag: "Space-Saving Vertical Conveyance",
    image: "/images/cleated-conveyor-green.jpg",
    description:
      "Cross-rigid base belt conveyors with high-angle corrugated sidewalls for steep space-constrained bulk material elevation without material rollback.",
    link: "/products?category=industrial-conveyor-systems",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function SolutionsSwiper() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const goTo = (i: number) => {
    swiperRef.current?.slideToLoop(i);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-3 sm:py-6 lg:py-8">
      {/* Precision architectural grid */}
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Swiper Stage */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={850}
            autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
            loop
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActive(s.realIndex)}
            onAutoplayTimeLeft={(_s, _time, p) => setProgress(1 - p)}
            className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_16px_40px_-10px_rgba(7,21,48,0.3)] ring-1 ring-slate-900/10"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <div className="relative overflow-hidden">
                  {/* Equipment background photo */}
                  <div className="absolute inset-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      className="object-cover"
                    />

                    {/* Logo-matched high contrast dark navy gradients */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071530]/95 via-[#071530]/85 via-[55%] to-[#071530]/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071530] via-transparent to-[#071530]/50" />
                  </div>

                  {/* Slide Container: Flex column with responsive balanced padding */}
                  <div className="relative z-10 flex min-h-[460px] sm:min-h-[490px] lg:min-h-[540px] flex-col justify-between p-5 sm:p-8 lg:p-12">
                    {/* Top persistent masthead */}
                    <div className="max-w-3xl">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#F7941D]/40 bg-[#071530]/80 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F7941D] backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F7941D]" />
                        Storage Solutions &bull; Conveyor Systems
                      </div>

                      <h1 className="mt-2.5 sm:mt-3.5 text-lg sm:text-2xl lg:text-3.5xl font-extrabold uppercase tracking-tight text-white drop-shadow-md leading-tight">
                        INDUSTRIAL STORAGE SOLUTIONS &amp;{" "}
                        <span className="text-[#F7941D]">CONVEYOR SYSTEMS</span>
                      </h1>

                      <p className="mt-1.5 sm:mt-2 max-w-2xl text-[11px] sm:text-xs lg:text-sm font-medium text-slate-200/90 leading-relaxed">
                        Evora Industrial Solutions delivers certified heavy-duty warehouse storage racking and automated material handling conveyor systems engineered for modern manufacturing and logistics hubs.
                      </p>
                    </div>

                    {/* Bottom slide-specific content */}
                    <div className="mt-6 sm:mt-8 max-w-xl">
                      <div className="inline-flex items-center gap-1.5 rounded-md bg-[#0865D8]/25 px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F7941D] ring-1 ring-[#0865D8]/40 backdrop-blur-sm">
                        <span>{slide.pillar}</span>
                        <span className="text-white/40">&bull;</span>
                        <span className="text-white">{slide.tag}</span>
                      </div>

                      <h2 className="mt-2 text-base sm:text-xl lg:text-2xl font-bold text-white leading-snug">
                        {slide.title}
                      </h2>

                      <p className="mt-1 text-[11px] sm:text-xs lg:text-sm text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {slide.description}
                      </p>

                      {/* Dual CTAs — Storage / Conveyors */}
                      <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <Link
                          href={slide.link}
                          className="group inline-flex items-center rounded-xl bg-[#bfc2c5] px-4 py-2.5 sm:px-5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#064FB0]"
                        >
                          Explore Equipment
                          <ArrowRight
                            size={14}
                            className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </Link>

                        {/* <Link
                          href="/contact"
                          className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 sm:px-5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-200 hover:border-[#F7941D] hover:bg-[#071530]"
                        >
                          Request Quotation
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Minimalist Slide Indicators with progress */}
          <div className="mt-4 flex items-center justify-center gap-1.5 sm:gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                onClick={() => goTo(i)}
                aria-label={`Go to ${slide.title}`}
                className={`relative h-1.5 sm:h-2 overflow-hidden rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-8 sm:w-10 bg-[#071530]"
                    : "w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              >
                {active === i && (
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-[#F7941D]"
                    style={{ width: `${progress * 100}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
