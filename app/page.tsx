import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import PriceList from "@/components/PriceList";
import ContactUs from "@/components/ContactUs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PerfumeSelection from "@/components/Parfume";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PriceList />
      <PerfumeSelection/>
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      {/* <ContactUs /> */}
      <FloatingScrollToTop />

      <FloatingWhatsApp />
    </>
  );
}
