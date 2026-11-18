import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  Headphones,
  Truck,
  Cog,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Storage & Conveyor Expertise",
    description:
      "Extensive experience engineering heavy-duty pallet racking, cantilever racks, mezzanine floors, roller conveyors, and belt conveyor systems for modern industries.",
    icon: Cog,
  },
  {
    title: "High-Grade Structural Quality",
    description:
      "We fabricate using premium certified structural steel and high-durability components that meet rigorous safety and load-bearing standards.",
    icon: ShieldCheck,
  },
  {
    title: "Customized Warehouse Layouts",
    description:
      "Every storage and conveyor solution is custom-designed according to your specific facility footprint, ceiling height, pallet sizes, and throughput.",
    icon: Wrench,
  },
  {
    title: "Technical Support & Service",
    description:
      "Our dedicated team provides professional on-site erection, load testing, safety certification, and responsive maintenance support.",
    icon: Headphones,
  },
  {
    title: "On-Time Project Delivery",
    description:
      "Disciplined engineering workflows and efficient project management ensure smooth execution and commissioning within agreed timelines.",
    icon: Truck,
  },
  {
    title: "Trusted Business Partner",
    description:
      "We focus on enduring client partnerships built on transparency, structural reliability, and long-term warehouse efficiency.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseUsAbout() {
  return (
    <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#F7941D]/30 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F7941D] shadow-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071530] sm:text-4xl">
            Why Industries Choose Evora Solutions
          </h2>

          <p className="mt-3 text-base leading-relaxed text-[#334155]">
            We combine engineering expertise, certified structural steel, and turnkey project delivery to supply Heavy Duty Pallet Racking, Industrial Conveyor Systems, Multi-Tier Mezzanines, and complete Warehouse Material Handling solutions across Pune, Maharashtra, and India.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8] hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071530] text-[#F7941D] transition-colors group-hover:bg-[#0865D8] group-hover:text-white">
                <item.icon size={24} />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-bold text-[#071530] transition-colors group-hover:text-[#0865D8]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}