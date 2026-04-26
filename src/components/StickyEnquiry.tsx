"use client";

import { Handshake } from "lucide-react";

export default function StickyEnquiry() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on the home page, redirect to home page with hash
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="fixed right-0 bottom-32 z-[100]">
      <button 
        onClick={scrollToContact}
        className="bg-[#007AFF] text-white w-16 h-16 rounded-l-2xl shadow-[0_15px_40px_rgba(0,122,255,0.25)] hover:pl-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 group"
      >
        <div className="p-1 rounded-xl">
          <Handshake className="h-5 w-5 text-white stroke-[2]" />
        </div>
        <span className="font-bold text-[8px] tracking-[0.15em] uppercase">
          Inquiry
        </span>
      </button>
    </div>
  );
}
