import { PRODUCT_SEO } from "@/lib/product-seo";

interface Props {
  productName: string;
  slug?: string;
}

export default function ProductFAQSchema({ productName, slug }: Props) {
  const seoData = slug ? PRODUCT_SEO[slug] : undefined;

  const defaultFaqs = [
    {
      question: `Who is the leading manufacturer of ${productName} in Pune and Maharashtra?`,
      answer: `Evora Industrial Solutions is a premier manufacturer of ${productName} in Pune, Chakan, and across Maharashtra, providing certified engineering design, manufacturing, and turnkey installation throughout India.`,
    },
    {
      question: `Does Evora Industrial Solutions supply and install ${productName} across India?`,
      answer: `Yes, Evora Industrial Solutions supplies, delivers, and provides on-site erection and technical support for ${productName} across Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana, Delhi NCR, and all industrial regions of India.`,
    },
    {
      question: `Can ${productName} be customized to our warehouse or facility layout?`,
      answer: `Yes, all ${productName} systems are engineered to custom facility dimensions, required load capacities, speed ratings, and cubic storage profiles. Contact sales@evorasolutions.in or call +91 8793280540 for custom CAD layouts and quotations.`,
    },
  ];

  const faqs = seoData?.faqs && seoData.faqs.length > 0 ? seoData.faqs : defaultFaqs;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
