export default function CompanyOverview() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-8 shadow-sm transition hover:border-[#0865D8] hover:shadow-md">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2.5">
              <span className="h-5 w-1.5 rounded-full bg-[#F7941D]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#071530]">
                Our Mission
              </h3>
            </div>

            <p className="text-[#334155] leading-relaxed text-xs sm:text-sm lg:text-base">
              To empower manufacturing industries, 3PL warehouses, and distribution logistics hubs — maximizing vertical cubic storage density through certified heavy-duty pallet racking and accelerating production material flow through custom automated conveyor networks.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-8 shadow-sm transition hover:border-[#0865D8] hover:shadow-md">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2.5">
              <span className="h-5 w-1.5 rounded-full bg-[#0865D8]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#071530]">
                Our Engineering Vision
              </h3>
            </div>

            <p className="text-[#334155] leading-relaxed text-xs sm:text-sm lg:text-base">
              To become India&apos;s most reliable industrial brand for Heavy Duty Storage Solutions and Industrial Conveyor Systems, recognized for structural safety standards, German &amp; European engineering precision, and long-term turnkey lifecycle support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
