"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    shortDescription: string | null;
    featured: boolean;
    category: {
      name: string;
    } | null;
    images: {
      imageUrl: string;
      altText: string | null;
      isPrimary: boolean;
    }[];
  };
}

export default function FeaturedProductCard({
  product,
}: FeaturedProductCardProps) {
  const primaryImage =
    product.images.find((image) => image.isPrimary) ?? product.images[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0865D8]/40 hover:shadow-xl"
    >
      {/* High-Resolution Equipment Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={primaryImage?.imageUrl ?? "/placeholder-product.jpg"}
          alt={primaryImage?.altText ?? product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071530]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {product.category && (
          <span className="inline-flex self-start rounded-md border border-[#F7941D]/30 bg-[#FFF8F1] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#F7941D]">
            {product.category.name}
          </span>
        )}

        <h3 className="mt-2.5 line-clamp-2 text-base font-bold text-[#071530] transition-colors group-hover:text-[#0865D8]">
          {product.name}
        </h3>

        {product.shortDescription && (
          <p className="mt-2 flex-1 line-clamp-2 text-xs leading-relaxed text-[#334155]">
            {product.shortDescription}
          </p>
        )}

        <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0865D8] transition-all group-hover:gap-2 group-hover:text-[#F7941D]">
          <span>View Engineering Specs</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
