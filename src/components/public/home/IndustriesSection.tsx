import {
  Package,
  Factory,
  Truck,
  Car,
  UtensilsCrossed,
  Pill,
  Cog,
} from "lucide-react";

const industries = [
  {
    name: "Warehousing & Distribution",
    icon: Package,
    description:
      "High-density pallet racking, carton flow picking systems, and sortation conveyors for rapid fulfillment.",
  },
  {
    name: "Manufacturing Plants",
    icon: Factory,
    description:
      "Assembly line belt conveyors, powered roller networks, and heavy tooling storage racks built for 24/7 duty.",
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    description:
      "High-throughput cross-docking roller conveyors, truck loading/unloading lines, and dispatch storage.",
  },
  {
    name: "Automotive Industry",
    icon: Car,
    description:
      "Heavy-duty cantilever racks, slat & chain conveyors, and specialized engine/body panel handling systems.",
  },
  {
    name: "Food & Beverage",
    icon: UtensilsCrossed,
    description:
      "Food-grade washdown modular belt conveyors and galvanized cold-storage drive-in pallet racking.",
  },
  {
    name: "Pharmaceutical Industry",
    icon: Pill,
    description:
      "Clean-room modular conveyors, stainless steel roller systems, and secure multi-tier shelving archives.",
  },
  {
    name: "Engineering & Industrial Facilities",
    icon: Cog,
    description:
      "Structural steel mezzanine floors, die and mould storage racks, and overhead/floor material transfer units.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#F3F6FC] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F7941D]/30 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F7941D] shadow-sm">
            Industry Applications
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071530] sm:text-4xl">
            Industries We Serve
          </h2>

          <p className="mt-3 max-w-2xl text-base text-[#334155]">
            Tailored storage architectures and material conveyance solutions engineered for demanding operational environments across diverse industrial sectors.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className={`group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8]/40 hover:shadow-lg ${
                  index === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-1" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8FAFC] text-[#0865D8] transition-colors group-hover:bg-[#0865D8] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071530] transition-colors group-hover:text-[#0865D8]">
                  {industry.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
