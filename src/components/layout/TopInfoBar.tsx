"use client";

import { Phone, Mail, BadgeCheck } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

interface TopInfoBarProps {
  show?: boolean;
}

export default function TopInfoBar({ show = true }: TopInfoBarProps) {
  if (!show) return null;

  return (
    <div className="relative z-50 h-8 sm:h-9 border-b border-[#0F2347] bg-[#071530] text-[11px] sm:text-xs text-slate-300 overflow-hidden">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Left: Storage & Conveyor Systems */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <BadgeCheck size={13} className="shrink-0 text-[#F7941D]" />
          <span className="hidden font-medium text-slate-300 sm:inline">
            Engineering Smarter Industrial Storage &amp; Conveyor Systems
          </span>
          <span className="font-semibold text-white sm:hidden tracking-tight">
            Storage &amp; Conveyor Systems
          </span>
        </div>

        {/* Right: Direct Contact details */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <a
            href="mailto:sales@evorasolutions.in"
            className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex"
          >
            <Mail size={12} className="text-[#F7941D]" />
            <span>sales@evorasolutions.in</span>
          </a>

          <a
            href="tel:+918766918892"
            className="flex items-center gap-1 sm:gap-1.5 font-bold text-white transition-colors hover:text-[#F7941D] whitespace-nowrap"
          >
            <Phone size={11} className="text-[#F7941D] sm:size-3" />
            <span>+91 8766918892</span>
          </a>

          <div className="hidden items-center gap-2.5 border-l border-slate-700/60 pl-4 lg:flex">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-5 w-5 items-center justify-center rounded text-slate-400 transition hover:text-[#0865D8]"
            >
              <FaFacebookF size={11} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-5 w-5 items-center justify-center rounded text-slate-400 transition hover:text-[#0865D8]"
            >
              <FaLinkedinIn size={11} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-5 w-5 items-center justify-center rounded text-slate-400 transition hover:text-[#F7941D]"
            >
              <FaInstagram size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
