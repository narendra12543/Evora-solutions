interface AboutProductSectionProps {
  productName: string;
  category?: string;
}

export default function AboutProductSection({
  productName,
  category,
}: AboutProductSectionProps) {
  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#071530]">
        About {productName}
      </h2>

      <div className="mt-5 space-y-5 text-justify leading-6 text-slate-700">
        <p>
          <strong>{productName}</strong> is a premium{" "}
          {category ?? "industrial storage and conveyor"} solution engineered to deliver
          reliable performance, structural safety and long-term durability for
          warehouses, manufacturing plants, and distribution centers. It is manufactured
          using high-grade certified materials to ensure high load capacity and smooth
          operation even in demanding industrial environments.
        </p>

        <p>
          At <strong>Evora Solutions</strong>, we provide complete design,
          fabrication, installation, load testing and after-sales support for {productName}.
          Every system is tailored according to the customer's facility dimensions
          and operational requirements to achieve maximum storage density and material
          handling speed.
        </p>

        <p>
          Our storage and conveyor systems are widely deployed in manufacturing facilities,
          warehouses, logistics parks, automotive plants, e-commerce centers, and cold storage
          facilities across Pune, Maharashtra and India. We focus on delivering durable,
          space-optimizing industrial solutions backed by dedicated engineering support.
        </p>
      </div>
    </section>
  );
}