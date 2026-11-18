import {
  Building2,
  ShieldCheck,
  Users,
  Headphones,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] py-8 sm:py-12 lg:py-16">
      {/* Precision industrial architectural grid */}
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left: Heading & Intro */}
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#F7941D]/40 bg-white px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F7941D] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F7941D]" />
              Industrial Storage &bull; Conveyor Systems
            </div>

            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#071530] sm:text-4xl lg:text-5xl">
              About Evora Industrial Solutions
            </h1>

            <p className="mt-3 text-xs sm:text-sm lg:text-base leading-relaxed text-[#334155]">
              Delivering high-performance industrial storage solutions, heavy-duty warehouse racking, and advanced industrial conveyor systems for modern manufacturing and logistics facilities. We specialize in maximizing warehouse space, optimizing vertical storage density, and ensuring continuous, safe material handling flow.
            </p>

            <p className="mt-2 text-xs sm:text-sm lg:text-base leading-relaxed text-[#334155]">
              We engineer and install Heavy Duty Pallet Racking, Cantilever Racks, Drive-In Racking, Multi-Tier Mezzanines, Powered Roller Conveyors, Belt Conveyors, and integrated warehouse automation systems for factories, e-commerce hubs, logistics parks, and distribution centers across Pune, Maharashtra, and India.
            </p>
          </div>

          {/* Right: Value Grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="group rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8] hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#071530] text-[#F7941D] transition-colors group-hover:bg-[#0865D8] group-hover:text-white">
                <Building2 size={20} />
              </div>

              <h3 className="text-sm font-bold text-[#071530]">
                Industrial Storage Solutions
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                High-density pallet racking, cantilever racks &amp; multi-tier mezzanine floors.
              </p>
            </div>

            <div className="group rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8] hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0865D8] text-white transition-colors group-hover:bg-[#071530] group-hover:text-[#F7941D]">
                <ShieldCheck size={20} />
              </div>

              <h3 className="text-sm font-bold text-[#071530]">
                Industrial Conveyor Systems
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                Powered roller networks, Z-type incline elevators &amp; automated sorting lines.
              </p>
            </div>

            <div className="group rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8] hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#071530] text-[#F7941D] transition-colors group-hover:bg-[#0865D8] group-hover:text-white">
                <Users size={20} />
              </div>

              <h3 className="text-sm font-bold text-[#071530]">
                Engineering Design Team
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                Experienced CAD structural designers and warehouse throughput planners.
              </p>
            </div>

            <div className="group rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8] hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#071530] text-[#F7941D] transition-colors group-hover:bg-[#0865D8] group-hover:text-white">
                <Headphones size={20} />
              </div>

              <h3 className="text-sm font-bold text-[#071530]">
                On-Site Erection &amp; Support
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                Dedicated laser alignment, safety load testing, and lifetime technical support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
