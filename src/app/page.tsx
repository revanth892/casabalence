import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyEnquiry from "@/components/StickyEnquiry";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="pt-20">
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Products />
        <Packages />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      
      {/* Floating Elements */}
      <StickyEnquiry />
    </div>
  );
}
