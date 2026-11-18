import {
  CheckCircle2,
} from "lucide-react";

export default function TrustBanner() {
  return (
    <div
      className="
        mt-12
        rounded-2xl
        bg-[#071530]
        p-6
        text-white
      "
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex items-center gap-2.5 text-sm font-semibold">
          <CheckCircle2 size={18} className="text-[#F7941D]" />
          <span>Quality Assured</span>
        </div>

        <div className="flex items-center gap-2.5 text-sm font-semibold">
          <CheckCircle2 size={18} className="text-[#F7941D]" />
          <span>Technical Support</span>
        </div>

        <div className="flex items-center gap-2.5 text-sm font-semibold">
          <CheckCircle2 size={18} className="text-[#F7941D]" />
          <span>Fast Response</span>
        </div>

        <div className="flex items-center gap-2.5 text-sm font-semibold">
          <CheckCircle2 size={18} className="text-[#F7941D]" />
          <span>Industrial Expertise</span>
        </div>
      </div>
    </div>
  );
}