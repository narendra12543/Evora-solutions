import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Warehouse, Package, Layers, MoveUpRight } from "lucide-react";

// Dual Core Pillars: Industrial Storage Solutions + Industrial Conveyor Systems
const categories = [
  {
    pillar: "STORAGE SOLUTIONS",
    title: "Heavy Duty Pallet Racking",
    slug: "pallet-racking-systems",
    image: "/images/pallet-racking.jpg",
    icon: Warehouse,
    description:
      "High-density selective pallet racking, cantilever systems, drive-in racking, and heavy duty shelving engineered for maximum warehouse storage density.",
    link: "/products?category=pallet-racking-systems",
  },
  {
    pillar: "CONVEYOR SYSTEMS",
    title: "Powered & Roller Conveyors",
    slug: "roller-conveyors",
    image: "/images/automated-warehouse-conveyor.jpg",
    icon: Package,
    description:
      "Automated motor-driven roller conveyors, zero-pressure accumulation lines, and gravity roller beds built for continuous box movement and distribution logistics.",
    link: "/products?category=roller-conveyors",
  },
  {
    pillar: "STORAGE SOLUTIONS",
    title: "Multi-Tier Mezzanine Floors",
    slug: "mezzanine-floors",
    image: "/images/mezzanine-floor.jpg",
    icon: Layers,
    description:
      "Heavy-duty structural steel mezzanine platforms, pick towers, and multi-tier storage decks that double or triple warehouse cubic capacity without civil work.",
    link: "/products?category=mezzanine-floors",
  },
  {
    pillar: "CONVEYOR SYSTEMS",
    title: "Incline & Cleated Belt Conveyors",
    slug: "belt-conveyors",
    image: "/images/cleated-conveyor-blue.jpg",
    icon: MoveUpRight,
    description:
      "Z-type swan-neck conveyors, steep incline corrugated sidewall belts, and modular belt assembly lines for floor-to-floor elevation and continuous production flow.",
    link: "/products?category=belt-conveyors",
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className="relative border-y border-[#E2E8F0] bg-[#F8FAFC] py-10 sm:py-14 lg:py-18">
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#F7941D]/40 bg-white px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F7941D] shadow-sm">
            Core Engineering Pillars &bull; Storage &amp; Conveyor Systems
          </span>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#071530] sm:text-3xl lg:text-4xl">
            Industrial Storage Systems &amp; Conveyor Lines
          </h2>

          <p className="mt-2.5 max-w-2xl text-xs sm:text-sm lg:text-base text-[#334155] leading-relaxed">
            From high-density structural pallet racking to automated motorized conveyor networks, we engineer and manufacture complete material handling infrastructure to European standards.
          </p>
        </div>

        {/* Categories Grid: 4 items (2 Storage + 2 Conveyors) */}
        <div className="mt-8 sm:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isStorage = category.pillar === "STORAGE SOLUTIONS";
            return (
              <div
                key={category.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8] hover:shadow-xl"
              >
                {/* Category Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071530]/85 via-[#071530]/25 to-transparent" />

                  {/* Category Pillar Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                        isStorage
                          ? "bg-[#071530]/90 text-[#F7941D] border border-[#F7941D]/30"
                          : "bg-[#0865D8]/90 text-white border border-white/20"
                      }`}
                    >
                      {category.pillar}
                    </span>
                  </div>

                  {/* Category Icon Badge */}
                  <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#071530] shadow-md ring-1 ring-black/5">
                    <Icon size={18} className="text-[#0865D8]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-[#071530] transition-colors group-hover:text-[#0865D8]">
                    {category.title}
                  </h3>

                  <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-[#334155]">
                    {category.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href={category.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0865D8] transition-colors group-hover:text-[#F7941D]"
                    >
                      <span>Explore {category.pillar === "STORAGE SOLUTIONS" ? "Storage" : "Conveyors"}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
