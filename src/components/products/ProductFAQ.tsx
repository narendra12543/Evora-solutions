"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProductFAQProps {
  productName: string;
}

export default function ProductFAQ({
  productName,
}: ProductFAQProps) {
  const faqs = [
    {
      question: `What is ${productName}?`,
      answer: `${productName} is an engineered industrial storage and material handling solution designed to optimize warehouse capacity, improve load safety, and streamline operational flow.`,
    },
    {
      question: `Where can ${productName} be installed?`,
      answer:
        "It is engineered for warehouses, manufacturing plants, distribution centers, logistics hubs, automotive assembly lines, and industrial facilities.",
    },
    {
      question: `Is installation provided by Evora Solutions?`,
      answer:
        "Yes. We provide complete turnkey services including site survey, CAD design, on-site erection, load testing, and after-sales support.",
    },
    {
      question: `Can this system be customized for our facility?`,
      answer:
        "Yes. All our storage racking and conveyor systems are custom-engineered to match your facility dimensions, payload weights, and material throughput.",
    },
    {
      question: `How can I get a quotation?`,
      answer:
        "Simply fill out the enquiry form on this page or reach out via WhatsApp/phone, and our technical team will provide a tailored quote and layout plan.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#071530]">
        Frequently Asked Questions
      </h2>

      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between p-5 text-left font-semibold"
            >
              {faq.question}

              <ChevronDown
                className={`h-5 w-5 transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="border-t px-5 py-4 text-slate-600 leading-7">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}