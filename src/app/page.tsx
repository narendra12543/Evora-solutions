import SolutionsSwiper from "@/components/public/home/SolutionsSwiper";
import AboutSection from "@/components/public/home/AboutSection";
import ProductCategoriesSection from "@/components/public/home/ProductCategoriesSection";
import WhyChooseEvoraSection from "@/components/public/home/WhyChooseEvoraSection";
import IndustriesSection from "@/components/public/home/IndustriesSection";
import FeaturedProductsSection from "@/components/public/home/FeaturedProductsSection";
import ProcessSection from "@/components/public/home/ProcessSection";
// import FinalCTASection from "@/components/public/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Swiper */}
      <SolutionsSwiper />

      {/* Section 2: Company Introduction */}
      <AboutSection />

      {/* Section 3: Product Categories (Storage, Conveyors, Material Handling, Warehouse Solutions) */}
      <ProductCategoriesSection />

      {/* Section 4: Why Choose Evora */}
      <WhyChooseEvoraSection />

      {/* Section 5: Industries We Serve */}
      <IndustriesSection />

      {/* Section 6: Featured Projects & Equipment */}
      <FeaturedProductsSection />

      {/* Section 7: Our Work Process */}
      <ProcessSection />

      {/* Section 8: Final CTA */}
      {/* <FinalCTASection /> */}
    </>
  );
}
