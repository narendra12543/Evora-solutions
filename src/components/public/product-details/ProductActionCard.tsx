import Link from "next/link";
import {
  ShieldCheck,
  Headphones,
  Clock3,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  category: string;
  slug: string;
}

export default function ProductActionCard({
  category,
  slug
}: Props) {
  return (
    <div className="sticky top-24">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
        <div className="bg-[#071530] p-5 text-white">
          <h3 className="text-xl font-bold">
            Need Assistance?
          </h3>

          <p className="mt-2 text-sm text-slate-200">
            Talk with our industrial storage &amp; conveyor specialists.
          </p>
        </div>

        <div className="p-5">
          <div className="mb-5 rounded-2xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">
              Product Category
            </p>

            <p className="mt-1 font-semibold text-[#071530]">
              {category}
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={18}
                className="text-green-600"
              />
              Quality Assured
            </div>

            <div className="flex items-center gap-2">
              <Headphones
                size={18}
                className="text-[#0865D8]"
              />
              Engineering Support
            </div>

            <div className="flex items-center gap-2">
              <Clock3
                size={18}
                className="text-[#F7941D]"
              />
              Fast Technical Turnaround
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Link
              href={`/products/${slug}#enquiry`}
              className="block rounded-xl bg-[#0865D8] px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#064FB0]"
            >
              Request Quote
            </Link>

            <a
              href="https://wa.me/918793280540?text=Hello,%20I%20am%20interested%20in%20product%20details%20for%20industrial%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#20ba59]"
            >
              <FaWhatsapp size={16} />
              WhatsApp Specialist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}