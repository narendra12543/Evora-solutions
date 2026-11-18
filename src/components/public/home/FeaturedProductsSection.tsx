import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import FeaturedProductsCarousel from "./FeaturedProductsCarousel";
import { prisma } from "@/lib/prisma";

export default async function FeaturedProductsSection() {
  let products: any[] = [];
  try {
    products = await prisma.product.findMany({
      where: {
        featured: true,
        isActive: true,
      },
      include: {
        category: true,
        images: {
          orderBy: {
            sortOrder: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 12,
    });
  } catch (error) {
    console.error("FeaturedProductsSection error:", error);
  }

  if (!products.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] py-10 sm:py-14 lg:py-18">
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#F7941D]/30 bg-white px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F7941D] shadow-sm">
              <Star size={13} className="mr-1.5 fill-[#F7941D]" />
              Flagship Equipment &bull; Storage &bull; Conveyors
            </div>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#071530] sm:text-3xl lg:text-4xl">
              Engineered Storage Solutions &amp; Conveyor Systems
            </h2>
            <p className="mt-2.5 max-w-3xl text-xs sm:text-sm lg:text-base leading-relaxed text-[#334155]">
              Explore our balanced portfolio of certified heavy-duty pallet racking, structural mezzanine floors, motorized roller conveyors, and cleated incline elevators designed for modern industrial operations.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center justify-center self-start sm:self-auto rounded-xl bg-[#0865D8] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#064FB0]"
          >
            View Full Catalogue
            <ArrowRight size={15} className="ml-1.5" />
          </Link>
        </div>

        {/* Carousel */}
        <FeaturedProductsCarousel products={products} />
      </div>
    </section>
  );
}
