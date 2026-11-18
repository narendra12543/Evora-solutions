"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface EnquiryFiltersProps {
  initialSearch: string;
  initialStatus: string;
}

export default function EnquiryFilters({
  initialSearch,
  initialStatus,
}: EnquiryFiltersProps) {
  const router = useRouter();

  const [search, setSearch] =
    useState(initialSearch);

  const [status, setStatus] =
    useState(initialStatus);

  const handleApplyFilters = () => {
    const params =
      new URLSearchParams();

    if (search.trim()) {
      params.set(
        "search",
        search.trim()
      );
    }

    if (
      status &&
      status !== "ALL"
    ) {
      params.set(
        "status",
        status
      );
    }

    params.set("page", "1");

    router.push(
      `/admin/enquiries?${params.toString()}`
    );
  };

  const handleReset = () => {
    setSearch("");
    setStatus("ALL");

    router.push(
      "/admin/enquiries"
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Search */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[#071530]">
            Search
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Search enquiries..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[#071530] placeholder:text-slate-400 outline-none focus:border-[#071530]"
          />
        </div>

        {/* Status */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[#071530]">
            Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[#071530] outline-none focus:border-[#071530]"
          >
            <option value="ALL">
              All Status
            </option>

            <option value="NEW">
              NEW
            </option>

            <option value="CONTACTED">
              CONTACTED
            </option>

            <option value="QUOTATION_SENT">
              QUOTATION_SENT
            </option>

            <option value="NEGOTIATION">
              NEGOTIATION
            </option>

            <option value="WON">
              WON
            </option>

            <option value="LOST">
              LOST
            </option>
          </select>
        </div>

        {/* Actions */}

        <div className="flex items-end gap-3">
          <button
            type="button"
            onClick={
              handleApplyFilters
            }
            className="rounded-lg bg-[#071530] px-5 py-3 font-medium text-white transition hover:bg-[#18385F]"
          >
            Apply
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-[#071530] px-5 py-3 font-medium text-[#071530]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}