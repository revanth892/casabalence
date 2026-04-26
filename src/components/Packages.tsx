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
    <section className="h-screen flex flex-col justify-center px-6 lg:px-16 w-full mx-auto bg-white overflow-hidden">
      {/* BHK Tabs - More Compact */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#F3F4F6] p-1 rounded-xl flex items-center">
          {bhkOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveBhk(option)}
              className={`px-8 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                activeBhk === option
                  ? "bg-[#78D1E1] text-white shadow-sm"
                  : "text-[#666] hover:text-black"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Package Cards Grid - Scaled Down */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch h-[65vh] max-w-[1400px] mx-auto">
        {currentPackages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500 ${
              pkg.highlight 
                ? "bg-[#C1EAF1] border-transparent shadow-xl scale-102 z-10" 
                : "bg-white border-[#E5E7EB] hover:border-[#78D1E1] hover:shadow-md"
            }`}
          >
            {/* Popular Badge */}
            {pkg.badge && (
              <div className="absolute -top-3 right-6 bg-[#FFD700] text-black text-[9px] font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                <span className="mr-1">🏆</span> {pkg.badge}
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-1 font-heading">{pkg.name}</h3>
              <div className="text-[10px] text-[#666] mb-2 uppercase tracking-wide">From</div>
              <div className="text-3xl font-bold text-black mb-2">Rs. {pkg.price}</div>
              <p className="text-[11px] font-medium text-[#444] leading-tight">
                {pkg.description}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <h4 className="text-[10px] font-bold text-black mb-4 uppercase tracking-wider">Features</h4>
              <ul className="space-y-3">
                {pkg.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start text-[11px] text-[#444] leading-tight">
                    <div className={`mt-0.5 mr-2 flex-shrink-0 w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                      pkg.highlight ? "bg-white border-transparent" : "border-[#D1D5DB]"
                    }`}>
                      <Check className={`h-2.5 w-2.5 ${pkg.highlight ? "text-[#78D1E1]" : "text-[#666]"}`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-black/5 pt-6">
              <div className="text-[8px] text-[#888] space-y-0.5 mb-4 italic">
                <p>* Prices exclusive of GST.</p>
                <p>* Additional wiring costs apply for wired options.</p>
                <p>* Additional costs for Add-On Smart Features.</p>
              </div>
              <button className={`w-full py-3 rounded-xl font-bold text-xs transition-all duration-300 ${
                pkg.highlight 
                  ? "bg-white text-[#78D1E1] hover:bg-gray-50 shadow-sm" 
                  : "bg-white text-[#666] border border-[#E5E7EB] hover:border-[#78D1E1]"
              }`}>
                Get the pack
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
