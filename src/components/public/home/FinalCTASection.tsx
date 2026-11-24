import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden border-t border-[#0F2347] bg-[#071530] py-12 sm:py-16 lg:py-20 text-white">
      {/* Precision industrial dark grid */}
      <div className="pointer-events-none absolute inset-0 industrial-grid-dark opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#F7941D]/40 bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F7941D] backdrop-blur-md">
          Industrial Storage &bull; Conveyor Systems
        </span>

        <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-extrabold uppercase tracking-tight sm:text-3xl lg:text-4.5xl leading-tight">
          LET&apos;S BUILD SMARTER INDUSTRIAL STORAGE &amp; CONVEYOR SOLUTIONS
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
          Connect with our industrial storage and conveyor engineering specialists to plan, customize, and execute robust material handling systems for your facility.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#F7941D] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DE7E0D]"
          >
            Discuss Your Project
            <ArrowRight
              size={16}
              className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-200 hover:border-[#0865D8] hover:bg-white/10"
          >
            View Product Catalogue
          </Link>

          <a
            href="tel:+918793280540"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 transition-all duration-200 hover:border-[#F7941D] hover:text-white"
          >
            <PhoneCall size={15} className="text-[#F7941D]" />
            <span>+91 8793280540</span>
          </a>
        </div>
      </div>
    </section>
  );
}
