
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const solutions = [
  "Industrial Storage Solutions",
  "Industrial Conveyor Systems",
  "Heavy Duty Pallet Racking",
  "Automated Roller Conveyors",
  "Belt Conveyor Systems",
  "Multi-Tier Mezzanine Floors",
  "Warehouse Material Handling",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#071530] text-white">
      {/* Top Accent Border */}
      <div className="h-1 w-full bg-[#0865D8]" />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Column 1: Company Profile */}
          <div>
            <Link
              href="/"
              className="inline-block rounded-lg bg-white px-2.5 py-1 shadow-sm"
            >
              <Image
                src="/evora-logo.png"
                alt="Evora Industrial Solutions"
                width={160}
                height={50}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>

            <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
              High-performance industrial storage solutions, heavy-duty warehouse racking,
              and custom industrial conveyor systems engineered for modern manufacturing
              and logistics operations across India.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-[#0865D8] hover:text-white"
              >
                <FaFacebookF size={13} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-[#0865D8] hover:text-white"
              >
                <FaLinkedinIn size={13} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-[#F7941D] hover:text-white"
              >
                <FaInstagram size={13} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              <span className="h-3.5 w-1 rounded-full bg-[#F7941D]" />
              Engineering Solutions
            </h3>

            <div className="space-y-1.5 text-xs text-slate-300 sm:text-[13px]">
              {solutions.map((item) => (
                <Link
                  key={item}
                  href="/products"
                  className="block leading-relaxed transition hover:text-[#F7941D]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Corporate Address */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              <span className="h-3.5 w-1 rounded-full bg-[#F7941D]" />
              Registered Office
            </h3>

            <div className="space-y-2.5 text-xs text-slate-300 sm:text-[13px]">
              <div className="flex items-start gap-2">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-[#F7941D]"
                />

                <p className="leading-relaxed">
                  <span className="font-semibold text-white">Pune Office:</span>{" "}
                  Office No-03, near Akurdi Railway Station Road, Gurudwara Colony,
                  Nigdi, Pune, Pimpri-Chinchwad, Maharashtra 411035
                </p>
              </div>

              <div className="pt-1 text-[11px] leading-relaxed text-slate-400">
                <p>GSTIN: 27AABCE1234F1Z5</p>
                <p className="mt-0.5">
                  Operating Hours: Mon - Sat 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              <span className="h-3.5 w-1 rounded-full bg-[#F7941D]" />
              Get In Touch
            </h3>

            <div className="space-y-2.5 text-xs text-slate-300 sm:text-[13px]">

              <a
                href="tel:+918793280540"
                className="flex items-center gap-2.5 transition hover:text-white"
              >
                <Phone size={14} className="shrink-0 text-[#F7941D]" />
                <span className="font-semibold text-white">
                  +91 8793280540
                </span>
              </a>

              <a
                href="mailto:sales@evorasolutions.in"
                className="flex items-center gap-2.5 transition hover:text-white"
              >
                <Mail size={14} className="shrink-0 text-[#0865D8]" />
                <span>sales@evorasolutions.in</span>
              </a>

              <a
                href="mailto:info@evorasolutions.in"
                className="flex items-center gap-2.5 transition hover:text-white"
              >
                <Mail size={14} className="shrink-0 text-[#0865D8]" />
                <span>info@evorasolutions.in</span>
              </a>

              <a
                href="https://wa.me/918793280540?text=Hello,%20I%20am%20interested%20in%20Evora%20Industrial%20Storage%20and%20Conveyor%20Systems."
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex items-center rounded-lg bg-[#25D366] px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#20ba59]"
              >
                <span>Chat on WhatsApp</span>

                <ArrowRight
                  size={13}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-2 flex flex-col items-center gap-2 border-t border-white/10 pt-2 text-center text-[11px] text-slate-400 sm:flex-row sm:justify-between sm:text-left">

          <div>
            © {new Date().getFullYear()} Evora Industrial Solutions. All rights reserved.
          </div>

          <div>
            Engineering Smarter Industrial Storage &amp; Conveyor Systems
          </div>

        </div>

      </div>
    </footer>
  );
}
