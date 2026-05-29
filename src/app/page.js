import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OurWork from "@/components/OurWork";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import FeedbackForm from "@/components/FeedbackForm";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <OurWork />   {/* ✅ FIXED */}
      <WhyUs />
      <Pricing />
      <Testimonial />
      <FAQ />
      <ContactForm />
      <ContactSection />
      <FeedbackForm />
      <Footer />
    </main>
  );
}