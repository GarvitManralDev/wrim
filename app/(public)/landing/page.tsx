import HeroSectionOne from "@/components/hero-section-demo-1";
import OurProducts from "@/components/our-products";
import ProductFlowAnimated from "@/components/product-flow";
import SocialProof from "@/components/social-proof";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSectionOne />
      
      {/* Our Products */}
      <OurProducts />
      
      {/* Social Proof */}
      <SocialProof />
      
      {/* Product Flow */}
      <ProductFlowAnimated />
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

