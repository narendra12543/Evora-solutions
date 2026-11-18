import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsCTA() {
  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#0F2347] bg-[#071530] px-8 py-12 text-center text-white shadow-2xl sm:px-12">
          {/* Precision dark grid */}
          <div className="pointer-events-none absolute inset-0 industrial-grid-dark opacity-30" />

          <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#F7941D]/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F7941D]">
            Engineering Consultation
          </span>

          <h2 className="relative z-10 mt-4 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Need Help Choosing The Right Storage Or Conveyor System?
          </h2>

          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Our industrial engineering specialists can help you assess your warehouse footprint and configure the optimal heavy-duty pallet racking or automated conveyor system for maximum throughput.
          </p>

          <div className="relative z-10 mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#F7941D] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DE7E0D]"
            >
              Contact Our Engineers
              <ArrowRight size={16} className="ml-2" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10"
            >
              Learn About Evora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
