import { Metadata } from "next";

import { prisma } from "@/lib/prisma";

import ProductsHero from "@/components/public/products/ProductsHero";
import ProductsCatalog from "@/components/public/products/ProductsCatalog";
import ProductsCTA from "@/components/public/products/ProductsCTA";

export const metadata: Metadata = {
  title: "Evora Industrial Solutions Products | Industrial Storage & Conveyor Systems",

  description:
    "Explore Evora Industrial Solutions (Evora Solutions) complete range of Industrial Storage Solutions and Conveyor Systems including Heavy Duty Pallet Racking, Cantilever Racking, Multi-tier Mezzanines, Drive-In Racks, Industrial Roller Conveyors, Belt Conveyors, Modular Conveyors, and turnkey material handling systems across Pune, Maharashtra, and India.",

  alternates: {
    canonical: "/products",
  },

  keywords: [
    // Brand
    "Evora Solutions",
    "Evora Solutions Products",
    "Evora Industrial Solutions",
    "evora industrial solutions",
    "Evora Industrial Solutions Pune",
    "Evora Industrial Solutions Maharashtra",
    "Evora Industrial Solutions India",

    // Industrial Storage Solutions
    "Industrial Storage Solutions",
    "Industrial Storage Solutions Pune",
    "Industrial Storage Solutions Maharashtra",
    "Heavy Duty Pallet Racking",
    "Heavy Duty Pallet Racking Pune",
    "Pallet Racking System",
    "Warehouse Pallet Racking",
    "Cantilever Racking",
    "Cantilever Racks Pune",
    "Multi Tier Mezzanine Floors",
    "Mezzanine Storage Racking",
    "Drive In Racking System",
    "Industrial Shelving Systems",
    "Slotted Angle Racks",
    "Warehouse Storage Systems",
    "Warehouse Space Optimization",

    // Industrial Conveyor Systems
    "Industrial Conveyor",
    "Conveyor System",
    "Industrial Conveyor Manufacturer in Pune",
    "Industrial Conveyor Supplier in Pune",
    "Conveyor System Manufacturer in Pune",
    "Conveyor System Supplier in Pune",
    "Roller Bed Conveyor",
    "Gravity Roller Conveyor",
    "Powered Roller Conveyor",
    "Flat Belt Conveyor",
    "Modular Belt Conveyor",
    "Cleated Belt Conveyor",
    "Curved Belt Conveyor",
    "Incline Belt Conveyor",
    "Decline Belt Conveyor",
    "Sanitary Conveyor",
    "Wash Down Conveyor",
    "Specialty Conveyor",
    "Chain Conveyor",
    "Slat Conveyor",
    "Mesh Belt Conveyor",
    "Spiral Conveyor",
    "Assembly Line Conveyor",
    "Packing Conveyor",
    "Warehouse Conveyor",
    "Warehouse Conveyor Systems Pune",
    "Material Handling Equipment Pune",
    "Material Handling Systems",
    "Intralogistics Conveyors",

    // Locations
    "Industrial Storage Pune",
    "Industrial Conveyor Chakan",
    "Storage Racking Bhosari",
    "Industrial Storage Maharashtra",
    "Industrial Conveyor Systems India",
  ],
  openGraph: {
    title: "Industrial Storage & Conveyor Products | Evora Solutions",
    description:
      "Heavy Duty Pallet Racking, Multi-Tier Mezzanines, Roller Conveyors, Belt Conveyor Systems, and Industrial Material Handling Solutions.",
    url: "https://evorasolutions.in/products",
    siteName: "Evora Solutions",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Industrial Storage & Conveyor Products | Evora Solutions",
    description:
      "Explore Heavy Duty Pallet Racking, Industrial Conveyor Systems, and Complete Material Handling Solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function ProductsPage() {
  let products: any[] = [];
  let categories: any[] = [];

  try {
    products = await prisma.product.findMany({
      where: {
        isActive: true,
      },
      include: {
        category: true,
        images: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    categories = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        products: {
          where: {
            isActive: true,
          },
          orderBy: {
            name: "asc",
          },
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Products page data fetch error:", error);
  }

  const featuredProducts = products.filter(
    (product) => product.featured === true
  );

  return (
    <>
      <ProductsHero
        totalProducts={
          products.length
        }
        totalCategories={
          categories.length
        }
        featuredProducts={
          featuredProducts.length
        }
      />

      <ProductsCatalog
        products={products}
        categories={categories}
      />

      <ProductsCTA />
    </>
  );
} 