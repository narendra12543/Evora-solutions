interface ProductsHeroProps {
  totalProducts?: number;
  totalCategories?: number;
  featuredProducts?: number;
}

export default function ProductsHero({}: ProductsHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] py-8 lg:py-12">
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#F7941D]/40 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F7941D] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F7941D]" />
            Engineered Catalog
          </span>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#071530] sm:text-4xl">
            Industrial Storage &amp; Conveyor Systems Catalogue
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-[#334155] sm:text-base">
            High-density industrial storage solutions, heavy-duty warehouse racking, and custom automated conveyor systems engineered for maximum operational throughput and longevity.
          </p>
        </div>
      </div>
    </section>
  );
}
