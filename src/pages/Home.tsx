import HomeHero from '../components/HomeHero';
import SpecialOffers from '../components/SpecialOffers';
import CustomCakes from '../components/CustomCakes';
import CookiesSection from '../components/CookiesSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <>
      <HomeHero />

      <SpecialOffers />

      <CustomCakes />

      <AboutSection />

      <CookiesSection />

      <ReviewsSection />

      <ContactSection />
    </>
  );
}
