interface EnquiryStatsCardsProps {
  analytics: {
    totalEnquiries: number;
    todayEnquiries: number;
    thisWeekEnquiries: number;
    thisMonthEnquiries: number;
    wonEnquiries: number;
    lostEnquiries: number;
    conversionRate: string;
  };
}

export default function EnquiryStatsCards({
  analytics,
}: EnquiryStatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-[#071530]">
          Total Enquiries
        </p>

        <p className="mt-2 text-3xl font-bold text-[#071530]">
          {analytics.totalEnquiries}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-[#071530]">
          Today's Enquiries
        </p>

        <p className="mt-2 text-3xl font-bold text-[#071530]">
          {analytics.todayEnquiries}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-[#071530]">
          This Week
        </p>

        <p className="mt-2 text-3xl font-bold text-[#071530]">
          {analytics.thisWeekEnquiries}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-[#071530]">
          This Month
        </p>

        <p className="mt-2 text-3xl font-bold text-[#071530]">
          {analytics.thisMonthEnquiries}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-green-700">
          Won Leads
        </p>

        <p className="mt-2 text-3xl font-bold text-green-700">
          {analytics.wonEnquiries}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-red-700">
          Lost Leads
        </p>

        <p className="mt-2 text-3xl font-bold text-red-700">
          {analytics.lostEnquiries}
        </p>
      </div> */}

      <div className="rounded-xl border border-[#071530] bg-[#071530] p-5 shadow-sm md:col-span-2">
        <p className="text-sm text-white">
            Conversion Rate
        </p>

        <p className="mt-2 text-4xl font-bold text-white">
            {analytics.conversionRate}%
        </p>

        <p className="mt-2 text-sm text-slate-200">
            Won Leads ÷ Total Enquiries
        </p>
     </div>
    </div>
  );
}