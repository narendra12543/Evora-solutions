import { Cpu, Wrench, ShieldCheck, Zap, Headphones, Layers } from "lucide-react";

// Balanced Core: Industrial Storage + Conveyor Engineering
const strengths = [
  {
    title: "Structural Storage Engineering",
    description:
      "Precision structural calculations, certified high-tensile steel roll-forming, and beam safety locking pins engineered for high-density pallet and cantilever storage.",
    icon: ShieldCheck,
  },
  {
    title: "Automated Conveyor Networks",
    description:
      "High-speed zero-pressure accumulation roller lines, cleated incline elevators, and modular belt systems designed for continuous, safe material handling.",
    icon: Zap,
  },
  {
    title: "Customized Facility Layouts",
    description:
      "Bespoke racking heights, custom conveyor belt widths, adjustable pitch mezzanine platforms, and tailored material handling configurations.",
    icon: Wrench,
  },
  {
    title: "Cubic Volume & Flow Optimization",
    description:
      "Engineering solutions designed to double vertical warehouse storage footprint while accelerating material transit throughput between production zones.",
    icon: Layers,
  },
  {
    title: "Quality-Oriented Manufacturing",
    description:
      "Certified raw materials, precision CNC punching, automated roll-forming lines, and electrostatic powder coating built for rugged 24/7 industrial life cycles.",
    icon: Cpu,
  },
  {
    title: "Turnkey Installation & Support",
    description:
      "Comprehensive lifecycle support including expert on-site erection, optical laser alignment, load deflection testing, and prompt preventive maintenance.",
    icon: Headphones,
  },
];

export default function WhyChooseEvoraSection() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#F7941D]/30 bg-[#FFF8F1] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F7941D]">
            Engineering Excellence &bull; Storage &amp; Conveyors
          </span>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#071530] sm:text-3xl lg:text-4xl">
            Why Choose Evora Industrial Solutions
          </h2>

          <p className="mt-2.5 max-w-2xl text-xs sm:text-sm lg:text-base text-[#334155] leading-relaxed">
            Delivering robust mechanical engineering, high-density storage frameworks, and dependable conveyor systems engineered for heavy-duty industrial operations.
          </p>
        </div>

        {/* Strengths Grid: 6 cards (3x2 on desktop, 2x3 on tablet, 1x6 on mobile) */}
        <div className="mt-8 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8] hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071530] text-[#F7941D] transition-colors group-hover:bg-[#0865D8] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-bold text-[#071530] transition-colors group-hover:text-[#0865D8]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#334155]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
