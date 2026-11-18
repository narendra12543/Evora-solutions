import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ProductType } from "@/types/product";

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const image =
    product.images?.[0]?.imageUrl || "/placeholder-product.jpg";

  return (
    <div className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0865D8]/40 hover:shadow-xl">
      {/* Equipment Image */}
      <Link href={`/products/${product.slug}`} className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071530]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {product.category && (
          <span className="inline-flex self-start rounded-md border border-[#F7941D]/30 bg-[#FFF8F1] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#F7941D]">
            {product.category.name}
          </span>
        )}

        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-2.5 line-clamp-2 text-base font-bold text-[#071530] transition-colors group-hover:text-[#0865D8]">
            {product.name}
          </h3>
        </Link>

        {product.shortDescription && (
          <p className="mt-2 flex-1 line-clamp-2 text-xs leading-relaxed text-[#334155]">
            {product.shortDescription}
          </p>
        )}

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2 border-t border-[#E2E8F0] pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 rounded-xl bg-[#F8FAFC] py-2 text-center text-xs font-bold uppercase tracking-wider text-[#071530] transition-all hover:bg-[#0865D8] hover:text-white"
          >
            View Specs
          </Link>

          <Link
            href={`/products/${product.slug}#enquiry`}
            aria-label="Request Quote"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#0865D8] px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#064FB0]"
          >
            <MessageCircle size={14} />
            <span>Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
