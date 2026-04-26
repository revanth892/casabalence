"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import StickyEnquiry from "@/components/StickyEnquiry";

export default function ProductsPage() {
  return (
    <main className="relative bg-white">
      <Header />
      
      {/* Introduction Area for the dedicated page */}
      <div className="pt-40 pb-16 px-6 lg:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 font-heading tracking-tighter">
            Hardware <span className="text-[#007AFF]">Catalog</span>
          </h1>
          <p className="text-2xl text-[#666] max-w-2xl leading-relaxed">
            Explore our complete range of intelligent hardware, designed to bring seamless automation to every corner of your home.
          </p>
        </div>
      </div>

      <Products />
      
      <Footer />
      <StickyEnquiry />
    </main>
  );
}
