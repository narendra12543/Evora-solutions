import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Turnkey Projects & Installations | Evora Industrial Solutions",
  description: "Explore turnkey industrial warehouse storage and automated conveyor projects engineered and commissioned by Evora Industrial Solutions across Pune, Chakan, Maharashtra, and India.",
  alternates: {
    canonical: "https://evorasolutions.in/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Industrial Storage Projects",
    "Warehouse Racking Installations Pune",
    "Turnkey Conveyor Projects Chakan",
    "Material Handling Installations Maharashtra",
    "Warehouse Automation Projects India",
    "Evora Industrial Solutions Projects",
  ],
  openGraph: {
    title: "Industrial Projects & Case Studies | Evora Industrial Solutions",
    description: "Turnkey warehouse racking and conveyor automation installations across India.",
    url: "https://evorasolutions.in/projects",
    type: "website",
    siteName: "Evora Industrial Solutions",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-[60vh] bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-[#F7941D]/30 bg-[#FFF8F1] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F7941D]">
            Turnkey Engineering Installations
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071530] sm:text-4xl">
            Industrial Storage &amp; Conveyor Projects
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            From high-density heavy duty pallet racking to custom automated conveyor lines, explore our commissioned material handling installations across Pune, Chakan, Mumbai, and India.
          </p>
        </div>
      </div>
    </div>
  );
}
