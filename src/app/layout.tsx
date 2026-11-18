import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { prisma } from "@/lib/prisma";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { auth } from "@/lib/auth";

import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebsiteSchema from "@/components/seo/WebsiteSchema";
// import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { GoogleTagManager } from "@next/third-parties/google";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evorasolutions.in"),

  title: {
    default:
      "Evora Industrial Solutions | Industrial Storage Solutions & Industrial Conveyor Systems",
    template: "%s | Evora Industrial Solutions",
  },

  description:
    "Evora Industrial Solutions (Evora Solutions) is a leading manufacturer and supplier of Industrial Storage Solutions and Industrial Conveyor Systems in Pune, Maharashtra, India. We specialize in Heavy Duty Pallet Racking, Cantilever Racking, Multi-tier Mezzanine Systems, Industrial Roller Conveyors, Belt Conveyors, Modular Conveyors and complete warehouse material handling automation.",

  keywords: [
    "Industrial Storage Solutions",
    "Industrial Storage Solutions Pune",
    "Industrial Storage Solutions Maharashtra",
    "Industrial Storage Solutions India",
    "Industrial Conveyor Systems",
    "Industrial Conveyor Systems Pune",
    "Industrial Conveyor Manufacturer",
    "Industrial Conveyor Supplier",
    "Heavy Duty Pallet Racking",
    "Pallet Racking System",
    "Warehouse Storage Racking",
    "Cantilever Racking System",
    "Multi Tier Mezzanine Racking",
    "Drive In Racking System",
    "Industrial Shelving Systems",
    "Roller Conveyor System",
    "Powered Roller Conveyor",
    "Gravity Roller Conveyor",
    "Flat Belt Conveyor",
    "Modular Belt Conveyor",
    "Cleated Belt Conveyor",
    "Incline Belt Conveyor",
    "Curved Belt Conveyor",
    "Chain Conveyor System",
    "Slat Conveyor",
    "Assembly Line Conveyors",
    "Packaging Conveyors",
    "Warehouse Conveyor Systems",
    "Material Handling Equipment",
    "Warehouse Material Handling",
    "Storage Space Optimization",
    "Evora Solutions",
    "evora solutions",
    "Evora Solutions Pune",
    "Evora Industrial Solutions",
    "evora industrial solutions",
    "Evora Industrial Solutions Pune",
    "Evora Industrial Solutions Maharashtra",
    "Evora Industrial Solutions India",
    "Pune",
    "Pimpri Chinchwad",
    "Chakan",
    "Talegaon",
    "Bhosari",
    "Hinjawadi",
    "Mumbai",
    "Maharashtra",
    "India",
  ],

  authors: [
    {
      name: "Evora Solutions",
    },
  ],

  creator: "Evora Solutions",

  publisher: "Evora Solutions",

  applicationName: "Evora Solutions",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://evorasolutions.in",
    title:
      "Evora Industrial Solutions | Industrial Storage Solutions & Conveyor Systems",
    description:
      "Heavy Duty Pallet Racking, Multi-Tier Mezzanine Floors, Roller Conveyors, Belt Conveyor Systems, and Complete Material Handling Automation across Pune, Maharashtra and India.",
    siteName: "Evora Solutions",

    locale: "en_IN",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Evora Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Evora Solutions",
    description:
      "High-Performance Industrial Storage Solutions & Industrial Conveyor Systems.",
  },
  manifest: "/manifest.webmanifest",
  category: "Industrial Storage & Conveyor Systems",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  let categories: {
    id: string;
    name: string;
    slug?: string;
    products: {
      id: string;
      name: string;
      slug: string;
    }[];
  }[] = [];

  try {
    categories = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        products: {
          where: {
            isActive: true,
          },
          select: {
            id: true,
            name: true,
            slug: true,
          },
          orderBy: {
            name: "asc",
          },
        },
      },
    });
  } catch (error) {
    console.error("Layout category fetch fallback:", error);
    categories = [
      {
        id: "cat-storage",
        name: "Industrial Storage Solutions",
        slug: "industrial-storage-solutions",
        products: [
          { id: "p-1", name: "Heavy Duty Pallet Racking", slug: "heavy-duty-pallet-racking" },
          { id: "p-2", name: "Cantilever Racks", slug: "heavy-duty-cantilever-racks" },
        ],
      },
      {
        id: "cat-conveyors",
        name: "Industrial Conveyor Systems",
        slug: "industrial-conveyor-systems",
        products: [
          { id: "p-3", name: "Powered Roller Conveyor Line", slug: "automated-powered-roller-conveyor-line" },
          { id: "p-4", name: "Z-Type Cleated Incline Conveyor", slug: "z-type-cleated-incline-conveyor" },
        ],
      },
      {
        id: "cat-mezzanine",
        name: "Mezzanine Floor Systems",
        slug: "mezzanine-floors",
        products: [
          { id: "p-5", name: "Multi-Tier Mezzanine Storage System", slug: "multi-tier-mezzanine-storage-floor" },
        ],
      },
    ];
  }

  const isAuthenticated =
    !!session?.user;

  const isAdmin =
    session?.user?.role ===
    "ADMIN";

  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
    >
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white antialiased`}
      >
        <GoogleTagManager gtmId="GTM-NLWFD6SD" />
        <OrganizationSchema
          url="https://evorasolutions.in"
          logo="https://evorasolutions.in/evora-logo.png"
        />
        <WebsiteSchema />
        <LocalBusinessSchema />

        <Header
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          categories={categories}
        />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}