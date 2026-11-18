import {
  FileText,
  MapPin,
  Compass,
  Factory,
  Wrench,
  Headphones,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Requirement Understanding",
    description:
      "Detailed analysis of your warehouse inventory profile, throughput targets, payload weights, and material handling objectives.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Site Assessment",
    description:
      "Physical site surveying, floor slab load verification, column grid measurement, and vertical clear headroom mapping.",
  },
  {
    step: "03",
    title: "Engineering & Design",
    description:
      "Developing optimal CAD layouts, 3D structural simulations, conveyor velocity calculations, and customized storage density plans.",
  },
  {
    step: "04",
    title: "Manufacturing",
    description:
      "Precision structural fabrication using certified high-tensile steel, CNC roll-forming, and high-adhesion powder coating.",
  },
  {
    step: "05",
    title: "Installation",
    description:
      "Professional on-site erection, optical laser alignment, electrical drive integration, and rigorous full-load testing.",
  },
  {
    step: "06",
    title: "Support",
    description:
      "Comprehensive handover, operator safety guidelines, routine preventive maintenance, and prompt technical support.",
    icon: Headphones,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F7941D]/30 bg-[#FFF8F1] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F7941D]">
            Systematic Execution
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071530] sm:text-4xl">
            Our Work Process
          </h2>

          <p className="mt-3 max-w-2xl text-base text-[#334155]">
            A disciplined, engineering-first project lifecycle ensuring precision, compliance, safety, and on-time commissioning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon || Wrench;
            return (
              <div
                key={step.title}
                className="group relative flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8]/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8FAFC] text-[#0865D8] ring-1 ring-[#0865D8]/10 transition-colors group-hover:bg-[#0865D8] group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <span className="text-2xl font-black text-[#E2E8F0] transition-colors group-hover:text-[#F7941D]">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#071530] transition-colors group-hover:text-[#0865D8]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
