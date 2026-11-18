import ContactForm from "@/components/public/contact/ContactForm";
import GoogleMapSection from "@/components/public/contact/GoogleMapSection";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "Contact Evora Industrial Solutions | Industrial Storage & Conveyor Specialists",

  description:
    "Contact Evora Industrial Solutions (Evora Solutions) for Heavy Duty Pallet Racking, Cantilever Racks, Multi-Tier Mezzanines, Industrial Roller Conveyors, Belt Conveyor Systems, and complete Warehouse Material Handling Solutions across Pune, Maharashtra, and India.",
  keywords: [
    // Brand
    "Contact Evora Solutions",
    "Evora Solutions",
    "Evora Solutions Pune",
    "Evora Solutions Maharashtra",
    "Evora Solutions India",
    "Evora Industrial Solutions",
    "evora industrial solutions",
    "Evora Industrial Solutions Pune",
    "Evora Industrial Solutions Maharashtra",
    "Evora Industrial Solutions India",

    // Company
    "Industrial Storage Solutions Company",
    "Industrial Conveyor Systems Manufacturer",
    "Industrial Storage Systems Pune",
    "Warehouse Racking Supplier",

    // Racking & Storage
    "Heavy Duty Pallet Racking",
    "Cantilever Racking Supplier",
    "Multi Tier Mezzanine Floors",
    "Drive In Racking System",
    "Industrial Shelving Pune",

    // Conveyors
    "Industrial Conveyor Supplier",
    "Conveyor System Manufacturer",
    "Roller Conveyor Manufacturer",
    "Flat Belt Conveyor",
    "Modular Belt Conveyor",
    "Cleated Belt Conveyor",
    "Incline Belt Conveyor",
    "Warehouse Conveyor Systems",
    "Material Handling Equipment",

    // Location
    "Industrial Storage Pune",
    "Conveyor Systems Chakan",
    "Warehouse Racking Bhosari",
    "Industrial Conveyors Pimpri Chinchwad",
    "Industrial Storage Solutions Maharashtra",
    "Industrial Conveyor Systems India",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title:
      "Contact Evora Industrial Solutions",

    description:
      "Get in touch with Evora Solutions for Industrial Storage & Conveyor Systems.",

    url: "https://evorasolutions.in/contact",

    siteName: "Evora Solutions",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Evora Solutions",

    description:
      "Industrial Storage Solutions & Conveyor Systems across India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default async function ContactPage() {
  let categories: { id: string; name: string }[] = [];
  let products: { id: string; name: string; categoryId: string }[] = [];

  try {
    categories = await prisma.category.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
      },
    });

    products = await prisma.product.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
        categoryId: true,
      },
    });
  } catch (error) {
    console.error("Failed to load products/categories on contact page:", error);
  }

  return (
    <>
      {/* Contact Section */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] py-10 lg:py-16">
        <div className="pointer-events-none absolute inset-0 industrial-grid opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F7941D]/30 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F7941D] shadow-sm">
              Get In Touch
            </span>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071530] sm:text-4xl">
              Contact Evora Industrial Solutions
            </h1>

            <p className="mt-2 text-base text-[#334155]">
              Consult our Industrial Storage Solutions and Conveyor Systems specialists for customized warehouse racking layouts, automated conveyor design, and project estimates.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <ContactForm products={products} />
            <GoogleMapSection />
          </div>
        </div>
      </section>
    </>
  );
}