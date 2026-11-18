import Image from "next/image";
import { Quote, Award, BadgeCheck, Users, CheckCircle2 } from "lucide-react";

export default function DirectorMessage() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}

          <div>
            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#F7941D]/30
                bg-[#FFF8F1]
                px-4
                py-1.5
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#F7941D]
              "
            >
              Director&apos;s Message
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-extrabold
                leading-tight
                text-[#071530]
              "
            >
              Leadership Driven By Engineering Excellence &amp; Customer Success
            </h2>

            {/* Quote */}

            <div
              className="
                mt-4
                rounded-2xl
                border-l-4
                border-[#0865D8]
                bg-[#F8FAFC]
                p-6
                border
                border-slate-200
                shadow-sm
              "
            >
              <Quote size={24} className="mb-4 text-[#0865D8]" />

              <p
                className="
                  text-md
                  italic
                  leading-8
                  text-slate-700
                "
              >
                Our vision is to become India&apos;s premier Industrial Storage Solutions and Conveyor Systems engineering company by delivering durable, innovative, and space-optimizing material handling infrastructure.
              </p>
            </div>

            {/* Director */}

            <div className="mt-8">
              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#071530]
                "
              >
                Mr. Narendra Khamkar
              </h3>

              <p className="mt-1 text-[#0865D8] font-semibold">
                Evora Solutions Leadership Team
              </p>
            </div>

            {/* Description */}

            <div
              className="
                mt-2
                space-y-6
                text-md
                leading-8
                text-slate-600
              "
            >
              <p>
                At Evora Solutions, we believe modern industrial operations demand highly organized, scalable, and safe warehouse storage and material flow infrastructure. We design and install Heavy Duty Pallet Racking, Cantilever Racks, Multi-Tier Mezzanine Floors, and Custom Industrial Conveyor Systems that elevate operational throughput.
              </p>

              <p>
                Every project is approached with careful planning, engineering
                precision and a customer-first mindset. From consultation to
                commissioning, our team works closely with clients to ensure
                long-term operational success.
              </p>

              <p>
                We continuously invest in technology, innovation and skilled
                professionals to build long-lasting relationships based on
                trust, transparency and consistent performance.
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div className="relative">
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-slate-100
                shadow-xl
              "
            >
              <div className="relative h-[620px]">
                {/* Replace with your Director image */}
                <Image
                  src="/director.jpg"
                  alt="Managing Director"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
