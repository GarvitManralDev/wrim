import HeroSectionOne from "@/components/hero-section-demo-1";
import ProductFlowAnimated from "@/components/product-flow";
import SocialProof from "@/components/social-proof";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import { BentoGridSecondDemo } from "@/components/bento-grid-demo-2";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSectionOne />
      
      {/* Social Proof */}
      <SocialProof />
      
      {/* Product Flow */}
      <ProductFlowAnimated />
      
      {/* Bento Grid Features */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built on principles that stand the test of time
            </p>
          </div>
          <BentoGridSecondDemo />
        </div>
      </section>
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
