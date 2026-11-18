import AboutHero from "@/components/public/about/AboutHero";
import CompanyOverview from "@/components/public/about/CompanyOverview";
import WhyChooseUsAbout from "@/components/public/about/WhyChooseUsAbout";
import DirectorMessage from "@/components/public/about/DirectorMessage";
import AboutIndustries from "@/components/public/about/AboutIndustries";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Evora Industrial Solutions | Industrial Storage Solutions & Conveyor Systems",

  description:
    "Learn about Evora Industrial Solutions (Evora Solutions), a leading provider of Industrial Storage Solutions and Industrial Conveyor Systems in Pune, Maharashtra. We design, manufacture and install Heavy Duty Pallet Racking, Cantilever Racking, Multi-tier Mezzanines, Roller Conveyors, Belt Conveyors, Modular Conveyors and complete warehouse material handling automation across India.",

  keywords: [
    // Brand
    "About Evora Solutions",
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
    "Industrial Conveyor Manufacturer",
    "Industrial Storage System Supplier",
    "Warehouse Racking Manufacturer",
    "Material Handling System Supplier",

    // Products
    "Heavy Duty Pallet Racking",
    "Pallet Racking System",
    "Cantilever Racking",
    "Multi Tier Mezzanine Floors",
    "Drive In Racking",
    "Industrial Shelving Systems",
    "Industrial Roller Conveyors",
    "Powered Roller Conveyor",
    "Gravity Roller Conveyor",
    "Flat Belt Conveyor",
    "Modular Belt Conveyor",
    "Cleated Belt Conveyor",
    "Curved Belt Conveyor",
    "Incline Belt Conveyor",
    "Slat Conveyor",
    "Chain Conveyor",
    "Warehouse Material Handling Equipment",

    // Locations
    "Industrial Storage Solutions Pune",
    "Industrial Conveyor Systems Pune",
    "Warehouse Racking Pune",
    "Industrial Storage Solutions Maharashtra",
    "Industrial Conveyor Systems India",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "About Evora Solutions | Industrial Storage Solutions & Conveyor Systems",

    description:
      "Trusted provider of Heavy Duty Pallet Racking, Industrial Conveyor Systems, Multi-Tier Mezzanines and Complete Warehouse Material Handling Automation.",

    url: "https://evorasolutions.in/about",

    siteName: "Evora Solutions",

    type: "website",
  },
  twitter: {
    card: "summary_large_image",

    title:
      "About Evora Solutions",

    description:
      "Industrial Storage Solutions & Industrial Conveyor Systems across India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIndustries />
      <CompanyOverview />
      <DirectorMessage />
      <WhyChooseUsAbout />
    </>
  );
}