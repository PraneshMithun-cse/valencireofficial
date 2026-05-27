import Navbar from "@/components/jds/Navbar";
import BrandBanner from "@/components/jds/DirtySodaBanner";
import AboutSection from "@/components/jds/AboutSection";
import ProductsSection from "@/components/jds/SodasSection";
import BenefitsSection from "@/components/jds/SnacksSection";
import TestimonialsSection from "@/components/jds/InstagramSection";
import Footer from "@/components/jds/Footer";
import { ScrollProgressBar, SmoothScrollProvider } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <BrandBanner />
        <ProductsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
