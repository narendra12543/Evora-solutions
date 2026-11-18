import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Warehouse, Package } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-18">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left: Engineering Warehouse Intralogistics Photo with Floating Badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E2E8F0] bg-slate-100 shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/automated-warehouse-conveyor.jpg"
                  alt="Evora Industrial Storage & Conveyor Systems"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Industrial Engineering Badge - Mobile Balanced */}
            {/* <div className="absolute bottom-2 right-2 sm:bottom-4 sm:-right-4 rounded-xl sm:rounded-2xl border border-slate-200 bg-white/95 p-3 sm:p-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#071530] text-[#F7941D]">
                  <Shield size={20} className="sm:size-[22px]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0865D8]">
                    Turnkey Engineering
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#071530]">
                    Storage &amp; Conveyors
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#F7941D]/30 bg-[#FFF8F1] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F7941D]">
              Integrated Industrial Solutions
            </span>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#071530] sm:text-3xl lg:text-4xl">
              Industrial Storage Solutions &amp; Conveyor Systems
            </h2>

            <p className="mt-3 text-xs sm:text-sm lg:text-base leading-relaxed text-[#334155]">
              Evora Industrial Solutions is an industrial engineering and manufacturing enterprise specializing in high-density warehouse storage systems and automated material handling conveyor networks.
            </p>

            <p className="mt-2 text-xs sm:text-sm lg:text-base leading-relaxed text-[#334155]">
              We help logistics distribution hubs, manufacturing plants, automotive assembly units, and e-commerce facilities double their cubic storage volume while accelerating continuous material throughput.
            </p>

            {/* Dual Pillar Grid */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {/* Storage Pillar */}
              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#071530] text-[#F7941D]">
                    <Warehouse size={15} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#071530]">
                    Industrial Storage Systems
                  </h3>
                </div>
                <ul className="mt-2 space-y-1 text-[11px] sm:text-xs text-[#334155]">
                  <li>• Heavy Duty Pallet Racking</li>
                  <li>• Multi-Tier Mezzanine Floors</li>
                  <li>• Cantilever Racks &amp; Long Span</li>
                </ul>
              </div>

              {/* Conveyor Pillar */}
              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0865D8] text-white">
                    <Package size={15} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#071530]">
                    Industrial Conveyor Systems
                  </h3>
                </div>
                <ul className="mt-2 space-y-1 text-[11px] sm:text-xs text-[#334155]">
                  <li>• Powered Roller Lines (ZPA)</li>
                  <li>• Cleated Z-Incline Belt Elevators</li>
                  <li>• Assembly &amp; Sorting Conveyors</li>
                </ul>
              </div>
            </div>

            {/* Value Checkpoints */}
            <div className="mt-4 space-y-2">
              {[
                "Certified High-Tensile Structural Steel & Precision CNC Forming",
                "Energy-Efficient Drives, Photo-Eye Sensors & PLC Control Systems",
                "Turnkey CAD Layout Simulation, Laser-Aligned Erection & Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle2 size={16} className="shrink-0 text-[#0865D8]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#071530]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center rounded-xl bg-[#071530] px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5a5c5f]"
              >
                Learn About Evora
                <ArrowRight
                  size={15}
                  className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#071530] shadow-sm transition-all duration-200 hover:border-[#0865D8] hover:bg-[#F8FAFC]"
              >
                Speak With Engineers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
