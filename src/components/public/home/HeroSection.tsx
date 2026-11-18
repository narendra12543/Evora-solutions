import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Settings,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Evora Industrial Solutions - Storage & Conveyor Systems"
          fill
          priority
          className="object-cover object-center"
        />

        {/* White Overlay */}

        <div className="absolute inset-0" />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-[42%] to-transparent" />
      </div>

      {/* Background Decoration */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="
            h-full
            w-full
            bg-[size:60px_60px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-2">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.6fr)_380px] lg:items-start">
          {/* Left Content */}

          <div>
            
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-orange-200
                bg-orange-50/90
                px-4
                py-2
                text-sm
                font-semibold
                text-orange-700
                backdrop-blur-sm
              "
            >
              Evora Industrial Solutions
            </div>

            <h1
              className="
                mt-4
                mb-4
                text-center
                text-3xl
                font-extrabold
                leading-tight
                md:text-4xl
                lg:text-4xl
                bg-gradient-to-r
                from-[#071530]
                via-[#1E3A8A]
                to-orange-600
                bg-clip-text
                text-transparent
                animate-[fadeUp_1s_ease-out]
              "
            >
              Advanced Industrial Storage &amp; Conveyor Systems
              <br />
              For Modern Manufacturing &amp; Logistics
            </h1>
            <h2
              className="
                mx-auto
                mt-2
                max-w-3xl
                bg-white/15
                px-8
                py-2
                text-center
                text-[17px]
                font-medium
                leading-9
                text-[#0a1b31]
              
              "
            >
              We specialize in delivering high-density industrial storage
              solutions and customized industrial conveyor systems for
              manufacturing plants, distribution warehouses, e-commerce hubs,
              and logistics parks. Our offerings include heavy-duty pallet racking,
              cantilever racks, multi-tier mezzanine floors, drive-in systems,
              powered roller conveyors, belt conveyors, modular conveyors, and
              complete material handling automation.
            </h2>

            {/* CTA */}

            <div className="mt-4 flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href="/products"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-orange-500
                  bg-orange-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-md
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange-600
                  hover:shadow-xl
                "
              >
                Explore Products
                <ArrowRight
                  size={18}
                  className="
                    ml-2
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </Link>
            </div>

            {/* Trust Points */}

            {/* <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-600" />
                <span className="text-sm font-medium">Experienced Team</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-600" />
                <span className="text-sm font-medium">Quality Products</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-600" />
                <span className="text-sm font-medium">Technical Support</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-600" />
                <span className="text-sm font-medium">Fast Response</span>
              </div>
            </div> */}
          </div>

          {/* Right Side Assistance Card */}
        </div>
      </div>
    </section>
  );
}
