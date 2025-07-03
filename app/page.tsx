import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import PriceList from "@/components/PriceList";
import ContactUs from "@/components/ContactUs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <PriceList />
      <Testimonials />
      <Location />
      <ContactUs />
      <FloatingWhatsApp />
    </>
  );
}
