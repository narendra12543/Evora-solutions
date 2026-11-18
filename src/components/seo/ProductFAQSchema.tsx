interface Props {
  productName: string;
}

export default function ProductFAQSchema({
  productName,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${productName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${productName} is a premium industrial storage and conveyor solution engineered by Evora Solutions.`,
        },
      },
      {
        "@type": "Question",
        name: `Where is ${productName} used?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${productName} is suitable for manufacturing plants, distribution warehouses, logistics hubs, and industrial facilities.`,
        },
      },
      {
        "@type": "Question",
        name: `Can Evora Solutions customize ${productName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Evora Solutions provides customized layout and engineering solutions based on project requirements.`,
        },
      },
    ],
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