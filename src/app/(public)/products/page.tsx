import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import ProductsHero from "@/components/public/products/ProductsHero";
import ProductsCatalog from "@/components/public/products/ProductsCatalog";
import ProductsCTA from "@/components/public/products/ProductsCTA";
import { CATEGORY_SEO } from "@/lib/product-seo";

interface ProductsPageProps {
  searchParams?: Promise<{
    category?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: ProductsPageProps): Promise<Metadata> {
  const params = searchParams ? await searchParams : {};
  const categorySlug = params.category;

  if (categorySlug && CATEGORY_SEO[categorySlug]) {
    const cat = CATEGORY_SEO[categorySlug];
    const canonical = `https://evorasolutions.in/products?category=${categorySlug}`;

    return {
      title: cat.title,
      description: cat.description,
      keywords: cat.keywords,
      alternates: {
        canonical,
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        title: cat.ogTitle ?? cat.title,
        description: cat.ogDescription ?? cat.description,
        url: canonical,
        type: "website",
        siteName: "Evora Industrial Solutions",
        images: [
          {
            url: "/images/pallet-racking.jpg",
            width: 1200,
            height: 630,
            alt: cat.h1,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: cat.ogTitle ?? cat.title,
        description: cat.ogDescription ?? cat.description,
      },
    };
  }

  const defaultCanonical = "https://evorasolutions.in/products";

  return {
    title: "Industrial Storage Solutions & Conveyor Systems Manufacturer in Pune, Chakan & India | Evora Solutions",
    description: "Explore Heavy Duty Pallet Racking, Cantilever Racking, Multi-tier Mezzanines, Powered Roller Conveyors, Z-Type Incline Belt Conveyors, and complete turnkey material handling systems manufactured in Pune, Chakan, and Maharashtra for facilities across India.",
    alternates: {
      canonical: defaultCanonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "Industrial Storage Solutions Manufacturer in Pune",
      "Industrial Storage Solutions Manufacturer in Chakan",
      "Industrial Conveyor Systems Manufacturer in Pune",
      "Industrial Conveyor Systems Manufacturer in Chakan",
      "Pallet Racking Manufacturer in Pune",
      "Pallet Racking Manufacturer in Maharashtra",
      "Warehouse Storage Solutions in Pimpri Chinchwad",
      "Heavy Duty Pallet Racking Supplier Mumbai",
      "Cantilever Racking Manufacturer Pune",
      "Multi Tier Mezzanine Floor Manufacturer Chakan",
      "Powered Roller Conveyor Manufacturer Bhosari",
      "Cleated Incline Conveyor Manufacturer Maharashtra",
      "Material Handling Equipment Supplier India",
      "Warehouse Storage Systems Across India",
      "Evora Industrial Solutions",
      "Evora Solutions Pune",
    ],
    openGraph: {
      title: "Industrial Storage Solutions & Conveyor Systems | Evora Industrial Solutions",
      description: "Certified heavy-duty pallet racking, multi-tier mezzanines, and automated conveyor lines manufactured in Pune, Maharashtra for factories across India.",
      url: defaultCanonical,
      type: "website",
      siteName: "Evora Industrial Solutions",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Evora Industrial Solutions Products",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Industrial Storage & Conveyor Systems | Evora Industrial Solutions",
      description: "Heavy Duty Pallet Racking and Industrial Conveyor Systems manufactured in Pune, Maharashtra.",
    },
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  let products: any[] = [];
  let categories: any[] = [];

  try {
    products = await prisma.product.findMany({
      where: {
        isActive: true,
      },
      include: {
        images: true,
        category: true,
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

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industrial Storage Solutions & Conveyor Systems Products",
    description: "Complete equipment catalog of heavy duty pallet racking, cantilever racks, mezzanine floors, and industrial conveyors by Evora Industrial Solutions.",
    url: "https://evorasolutions.in/products",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((prod, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://evorasolutions.in/products/${prod.slug}`,
        name: prod.name,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <ProductsHero
        totalProducts={products.length}
        totalCategories={categories.length}
        featuredProducts={featuredProducts.length}
      />

      <ProductsCatalog
        products={products}
        categories={categories}
      />

      <ProductsCTA />
    </>
  );
}
