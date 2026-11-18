
"use client";

import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

import TopInfoBar from "./TopInfoBar";
import ProductSearchModal from "@/components/search/ProductSearchModal";
import MobileNavigation from "./MobileNavigation";
import ProfileMenu from "./ProfileMenu";
import ProductMegaMenu from "./MegaMenu";

interface HeaderProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;

  categories: {
    id: string;
    name: string;
    products: {
      id: string;
      name: string;
      slug: string;
    }[];
  }[];
}

export default function Header({
  isAuthenticated = false,
  isAdmin = false,
  categories,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Info Bar - Scrolls with Page */}
      <TopInfoBar />

      {/* Main Header - Sticky */}
      <div
        className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_6px_25px_rgba(7,21,48,0.12)]"
            : "shadow-[0_2px_12px_rgba(7,21,48,0.05)]"
        }`}
      >
        <header
          className="
            w-full
            border-b
            border-[#E2E8F0]
            bg-white/98
            backdrop-blur-md
          "
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">

              {/* Logo */}
              <Link
                href="/"
                className="flex items-center transition-opacity duration-200 hover:opacity-95"
              >
                <Image
                  src="/evora-logo.png"
                  alt="Evora Industrial Solutions"
                  width={190}
                  height={65}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">

                <ProductMegaMenu
                  categories={categories}
                  open={megaMenuOpen}
                  setOpen={setMegaMenuOpen}
                />

                <Link
                  href="/contact"
                  className="
                    rounded-lg
                    px-3.5 py-2
                    text-sm
                    font-semibold
                    text-[#071530]
                    transition-all duration-200
                    hover:bg-[#F3F6FC]
                    hover:text-[#0865D8]
                  "
                >
                  Contact Us
                </Link>

              </nav>

              {/* Right Side */}
              <div className="flex items-center gap-2 sm:gap-4">

                {/* Request a Quote
                <Link
                  href="/contact"
                  className="
                    hidden lg:inline-flex
                    items-center gap-2
                    rounded-xl
                    bg-[#0865D8]
                    px-4 py-2.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    shadow-sm
                    transition-all duration-200
                    hover:bg-[#064FB0]
                    hover:shadow-md
                  "
                >
                  Request Quote
                </Link> */}

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918766918892?text=Hello,%20I%20am%20interested%20in%20your%20Industrial%20Storage%20Solutions%20and%20Conveyor%20Systems.%20Please%20share%20product%20catalog,%20pricing%20and%20technical%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                  className="
                    group
                    relative
                    flex
                    h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-[#25D366]
                    text-white
                    shadow-sm
                    transition-all duration-300
                    hover:scale-105
                    hover:bg-[#20ba59]
                    hover:shadow-md
                  "
                >
                  <FaWhatsapp size={20} />

                  <span
                    className="
                      pointer-events-none
                      absolute
                      top-12
                      left-1/2
                      -translate-x-1/2
                      rounded-lg
                      bg-[#071530]
                      px-3 py-1.5
                      text-xs
                      font-medium
                      text-white
                      opacity-0
                      shadow-lg
                      transition-all duration-300
                      group-hover:opacity-100
                    "
                  >
                    WhatsApp
                  </span>
                </a>

                {/* Profile */}
                {isAdmin && (
                  <div
                    className="
                      hidden lg:block
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      p-1
                      shadow-sm
                    "
                  >
                    <ProfileMenu
                      isAuthenticated={isAuthenticated}
                      isAdmin={isAdmin}
                    />
                  </div>
                )}

                {/* Mobile Menu */}
                <button
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={mobileOpen}
                  className="
                    flex lg:hidden
                    h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-slate-200
                    bg-white
                    text-[#071530]
                    shadow-sm
                    transition-all duration-300
                    hover:border-[#071530]
                    hover:bg-[#071530]
                    hover:text-white
                  "
                >
                  <LayoutGrid size={20} />
                </button>

              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mega Menu Overlay */}
      {megaMenuOpen && (
        <div
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
          className="
            fixed
            inset-x-0
            top-16
            bottom-0
            z-40
            bg-slate-900/15
            backdrop-blur-[4px]
            transition-all duration-300
          "
        />
      )}

      {/* Product Search Modal */}
      <ProductSearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Mobile Navigation */}
      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        categories={categories}
      />
    </>
  );
}
