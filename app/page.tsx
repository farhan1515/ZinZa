import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import SignatureDish from '@/components/SignatureDish';
import BrandStory from '@/components/BrandStory';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <SignatureDish />
      <BrandStory />
      <ContactSection />
      <Footer />
    </main>
  );
}