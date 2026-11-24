"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  X,
  Home,
  Info,
  Package,
  Phone,
  LogOut,
  ChevronDown,
  ChevronUp,
  Layers,
  Briefcase,
  PhoneCall,
  Mail,
  ArrowRight,
  Shield,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  categories: {
    id: string;
    name: string;
    slug?: string;
    products: {
      id: string;
      name: string;
      slug: string;
    }[];
  }[];
}

export default function MobileNavigation({
  open,
  onClose,
  isAuthenticated,
  isAdmin,
  categories,
}: MobileNavigationProps) {
  const router = useRouter();
  const [productsOpen, setProductsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.refresh();
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-[#071530]/70 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over Drawer */}
      <div
        className="
          fixed
          inset-y-0
          right-0
          z-[60]
          flex
          h-full
          w-[320px]
          sm:w-[380px]
          max-w-[90vw]
          flex-col
          bg-[#071530]
          text-white
          shadow-2xl
          border-l
          border-slate-800
        "
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-5 py-4">
          <Link href="/" onClick={onClose} className="inline-block rounded-xl bg-white px-3 py-1.5 shadow-sm">
            <Image
              src="/evora-logo.png"
              alt="Evora Industrial Solutions"
              width={160}
              height={50}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-xl border border-slate-700/80 bg-slate-800/60 p-2 text-slate-300 transition hover:border-slate-600 hover:bg-slate-700 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            <Home size={18} className="text-[#0865D8]" />
            Home
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            <Info size={18} className="text-[#0865D8]" />
            About Us
          </Link>

          {/* Products Accordion */}
          <div className="rounded-xl border border-slate-800/90 bg-slate-900/40">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              <div className="flex items-center gap-3">
                <Package size={18} className="text-[#F7941D]" />
                <span>Products &amp; Solutions</span>
              </div>
              {productsOpen ? (
                <ChevronUp size={16} className="text-[#F7941D]" />
              ) : (
                <ChevronDown size={16} className="text-slate-400" />
              )}
            </button>

            {productsOpen && (
              <div className="border-t border-slate-800/80 px-2 py-2 space-y-1">
                <Link
                  href="/products"
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#0865D8] transition hover:bg-white/5"
                >
                  <span>All Solutions Catalog</span>
                  <ArrowRight size={13} />
                </Link>

                {categories.map((category) => (
                  <div key={category.id} className="rounded-lg bg-black/20">
                    <button
                      onClick={() =>
                        setOpenCategory(
                          openCategory === category.id ? null : category.id
                        )
                      }
                      className="flex w-full items-center justify-between px-3 py-2 text-left text-xs font-semibold text-slate-300 transition hover:text-white"
                    >
                      <span className="line-clamp-1">{category.name}</span>
                      {openCategory === category.id ? (
                        <ChevronUp size={14} className="text-[#0865D8]" />
                      ) : (
                        <ChevronDown size={14} className="text-slate-500" />
                      )}
                    </button>

                    {openCategory === category.id && (
                      <div className="border-t border-slate-800/60 pb-2 pt-1 pl-4 pr-2 space-y-1">
                        {category.products && category.products.length > 0 ? (
                          category.products.map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              onClick={onClose}
                              className="block rounded px-2 py-1.5 text-xs text-slate-400 transition hover:bg-white/5 hover:text-[#F7941D]"
                            >
                              • {product.name}
                            </Link>
                          ))
                        ) : (
                          <Link
                            href="/products"
                            onClick={onClose}
                            className="block rounded px-2 py-1.5 text-xs text-slate-400 hover:text-white"
                          >
                            • View {category.name}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about#industries"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            <Layers size={18} className="text-[#0865D8]" />
            Industries We Serve
          </Link>

          <Link
            href="/projects"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            <Briefcase size={18} className="text-[#0865D8]" />
            Projects
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            <Phone size={18} className="text-[#0865D8]" />
            Contact Us
          </Link>

          {/* Admin Panel Link */}
          {isAuthenticated && isAdmin && (
            <div className="pt-2">
              <Link
                href="/admin/enquiries"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
              >
                <Shield size={18} className="text-[#0865D8]" />
                Admin Panel
              </Link>
            </div>
          )}

          {isAdmin && (
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-rose-400 transition hover:bg-rose-500/10"
            >
              <LogOut size={18} />
              Logout
            </button>
          )}
        </div>

        {/* Drawer Bottom Actions */}
        <div className="border-t border-slate-800 bg-slate-950/60 p-4 space-y-2.5">
          {/* Request Quote Button */}
          <Link
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0865D8] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-[#064FB0]"
          >
            <span>Request a Quote</span>
            <ArrowRight size={15} />
          </Link>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/918793280540?text=Hello,%20I%20am%20interested%20in%20your%20Industrial%20Storage%20Solutions%20and%20Conveyor%20Systems.%20Please%20share%20product%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#20ba59]"
          >
            <FaWhatsapp size={16} />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Call and Email links */}
          <div className="flex items-center justify-between pt-1 px-1 text-xs text-slate-400">
            <a
              href="tel:+918793280540"
              className="flex items-center gap-1.5 transition hover:text-[#F7941D]"
            >
              <PhoneCall size={13} className="text-[#F7941D]" />
              <span>+91 8793280540</span>
            </a>

            <a
              href="mailto:sales@evorasolutions.in"
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              <Mail size={13} className="text-[#0865D8]" />
              <span>sales@evorasolutions.in</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
