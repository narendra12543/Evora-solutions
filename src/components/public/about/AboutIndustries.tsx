import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutIndustries() {
  return (
    <section id="industries" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: High-Res Real Warehouse Automation Equipment Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E2E8F0] bg-slate-100 shadow-xl">
              <div className="relative h-[360px] sm:h-[460px] lg:h-[520px] w-full">
                <Image
                  src="/images/automated-warehouse-conveyor.jpg"
                  alt="Evora Industrial Storage & Conveyor Systems"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-flex rounded-full border border-[#F7941D]/30 bg-[#FFF8F1] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F7941D]">
              Industries We Serve
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071530] sm:text-4xl">
              Storage &amp; Conveyor Solutions For Diverse Industrial Sectors
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#334155]">
              We provide Heavy Duty Pallet Racking, Cantilever Racks, Multi-Tier Mezzanine Floors, Powered Roller Conveyors, Belt Conveyors, and complete turnkey material handling systems that optimize storage footprint and accelerate facility throughput.
            </p>

            <p className="mt-3 text-base leading-relaxed text-[#334155]">
              Our storage and conveyor solutions are trusted by manufacturing plants, 3PL logistics hubs, retail distribution centers, automotive assembly units, pharmaceutical facilities, and cold storage warehouses across Pune, Maharashtra, and India.
            </p>

            {/* Target Industries Grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Manufacturing Plants",
                "Warehouses & Logistics Hubs",
                "Distribution & 3PL Centers",
                "Automotive & Assembly Units",
                "Food & Cold Storage",
                "Pharmaceutical Industry",
                "E-Commerce & Retail Hubs",
                "Heavy Engineering Projects",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#0865D8]"
                  />
                  <span className="text-sm font-semibold text-[#071530]">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
