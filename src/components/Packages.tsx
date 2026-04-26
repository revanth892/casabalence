"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const bhkOptions = ["3 BHK", "4 BHK", "5 BHK"];

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
  badge: string | null;
}

const pricingData: Record<string, Package[]> = {
  "3 BHK": [
    {
      name: "Bronze",
      price: "1.99 L",
      description: "Affordable Made-in-India Solutions for 3 BHK",
      features: [
        "Smart lighting automation (basic on/off per room)",
        "Fan & geyser automation",
        "Smart security systems — Smart locks & Video Door Phones (VDPs)",
        "Glass keypads with app-controlled home scheduling",
        "Easy retrofit installation (limited future expansion)",
      ],
      highlight: false,
      badge: null,
    },
    {
      name: "Silver",
      price: "4.49 L",
      description: "Flexible Indian Solutions with International Standards",
      features: [
        "Smart lighting automation with scenes",
        "Smart curtain automation / automated curtains",
        "Appliance & AC automation (smart air conditioning control)",
        "Occupancy-based bathroom lighting",
        "Face-cut dimming for lights",
        "Smart security systems — Smart locks & VDPs",
        "Scene creation & scheduling with glass touch panels",
      ],
      highlight: true,
      badge: null,
    },
    {
      name: "Gold",
      price: "6.49 L",
      description: "Custom German Technology for Ultimate Performance",
      features: [
        "Everything in Silver Package plus:",
        "Climate control integration",
        "Energy monitoring solutions & detailed reporting",
        "Advanced lighting (shading, ambience, daylight simulation)",
        "Voice control with Alexa / Google Home",
        "Custom device integrations for premium homes",
      ],
      highlight: false,
      badge: "MOST POPULAR",
    },
  ],
  "4 BHK": [
    {
      name: "Bronze",
      price: "2.49 L",
      description: "Affordable Made-in-India Solutions for 4 BHK",
      features: [
        "Smart lighting automation (basic on/off per room)",
        "Fan & geyser automation",
        "Smart security systems — Smart locks & Video Door Phones (VDPs)",
        "Glass keypads with app-controlled home scheduling",
        "Easy retrofit installation (limited future expansion)",
      ],
      highlight: false,
      badge: null,
    },
    {
      name: "Silver",
      price: "5.49 L",
      description: "Flexible Indian Solutions with International Standards",
      features: [
        "Smart lighting automation with scenes",
        "Smart curtain automation / automated curtains",
        "Appliance & AC automation (smart air conditioning control)",
        "Occupancy-based bathroom lighting",
        "Face-cut dimming for lights",
        "Smart security systems — Smart locks & VDPs",
        "Scene creation & scheduling with glass touch panels",
      ],
      highlight: true,
      badge: null,
    },
    {
      name: "Gold",
      price: "7.49 L",
      description: "Custom German Technology for Ultimate Performance",
      features: [
        "Everything in Silver Package plus:",
        "Climate control integration",
        "Energy monitoring solutions & detailed reporting",
        "Advanced lighting (shading, ambience, daylight simulation)",
        "Voice control with Alexa / Google Home",
        "Custom device integrations for premium homes",
      ],
      highlight: false,
      badge: "MOST POPULAR",
    },
  ],
  "5 BHK": [
    {
      name: "Bronze",
      price: "2.99 L",
      description: "Affordable Made-in-India Solutions for 5 BHK",
      features: [
        "Smart lighting automation (basic on/off per room)",
        "Fan & geyser automation",
        "Smart security systems — Smart locks & Video Door Phones (VDPs)",
        "Glass keypads with app-controlled home scheduling",
        "Easy retrofit installation (limited future expansion)",
      ],
      highlight: false,
      badge: null,
    },
    {
      name: "Silver",
      price: "6.49 L",
      description: "Flexible Indian Solutions with International Standards",
      features: [
        "Smart lighting automation with scenes",
        "Smart curtain automation / automated curtains",
        "Appliance & AC automation (smart air conditioning control)",
        "Occupancy-based bathroom lighting",
        "Face-cut dimming for lights",
        "Smart security systems — Smart locks & VDPs",
        "Scene creation & scheduling with glass touch panels",
      ],
      highlight: true,
      badge: null,
    },
    {
      name: "Gold",
      price: "8.49 L",
      description: "Custom German Technology for Ultimate Performance",
      features: [
        "Everything in Silver Package plus:",
        "Climate control integration",
        "Energy monitoring solutions & detailed reporting",
        "Advanced lighting (shading, ambience, daylight simulation)",
        "Voice control with Alexa / Google Home",
        "Custom device integrations for premium homes",
      ],
      highlight: false,
      badge: "MOST POPULAR",
    },
  ],
};

export default function Packages() {
  const [activeBhk, setActiveBhk] = useState("5 BHK");
  const currentPackages = pricingData[activeBhk];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-16 w-full mx-auto bg-white py-24 overflow-hidden">
      {/* BHK Tabs */}
      <div className="flex justify-center mb-16">
        <div className="bg-[#F3F4F6] p-1.5 rounded-2xl flex items-center shadow-inner">
          {bhkOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveBhk(option)}
              className={`px-6 sm:px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeBhk === option
                  ? "bg-black text-white shadow-lg"
                  : "text-[#666] hover:text-black"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-[1400px] mx-auto w-full">
        {currentPackages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500 ${
              pkg.highlight 
                ? "bg-[#C1EAF1] border-transparent shadow-2xl lg:scale-105 z-10 ring-4 ring-[#78D1E1]/20" 
                : "bg-white border-[#E5E7EB] hover:border-[#78D1E1] hover:shadow-xl"
            }`}
          >
            {/* Popular Badge */}
            {pkg.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-10 bg-[#FFD700] text-black text-[10px] font-black px-4 py-1.5 rounded-full flex items-center shadow-lg border-2 border-white">
                <span className="mr-2">🏆</span> {pkg.badge}
              </div>
            )}

            <div className="mb-10">
              <h3 className="text-3xl font-bold text-black mb-2 font-heading tracking-tight">{pkg.name}</h3>
              <div className="text-xs text-[#666] mb-3 uppercase font-bold tracking-[0.2em]">Package Start From</div>
              <div className="text-4xl font-black text-black mb-4">Rs. {pkg.price}</div>
              <p className="text-sm font-semibold text-[#444] leading-relaxed">
                {pkg.description}
              </p>
            </div>

            <div className="flex-1 mb-10">
              <h4 className="text-[10px] font-black text-black mb-6 uppercase tracking-[0.25em] opacity-50">Included Features</h4>
              <ul className="space-y-4">
                {pkg.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start text-sm text-[#444] leading-snug font-medium">
                    <div className={`mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center ${
                      pkg.highlight ? "bg-white text-[#78D1E1]" : "bg-black text-white"
                    }`}>
                      <Check className="h-3 w-3 stroke-[4]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8 border-t border-black/5">
              <div className="text-[10px] text-[#888] space-y-1 mb-8 font-medium italic opacity-75">
                <p>* Prices exclusive of GST.</p>
                <p>* Additional wiring costs apply for wired options.</p>
                <p>* Additional costs for Add-On Smart Features.</p>
              </div>
              <button className={`w-full py-5 rounded-2xl font-black text-sm tracking-widest transition-all duration-300 uppercase shadow-lg ${
                pkg.highlight 
                  ? "bg-white text-[#78D1E1] hover:bg-black hover:text-white" 
                  : "bg-black text-white hover:bg-[#78D1E1]"
              }`}>
                Select Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
