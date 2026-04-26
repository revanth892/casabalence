"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const categories = [
  "Central Control",
  "Nature",
  "Security",
  "Sensor",
  "Energy Saving",
  "Lighting",
  "Shading",
  "HVAC",
  "Entertainment"
];

const productData = {
  "Central Control": [
    { title: "DEFED Smart Station PRO", subtitle: "Faster. Stronger. Further.", image: "/prod-station-pro.png" },
    { title: "DEFED Smart Station", subtitle: "Smart Gateway", image: "/prod-station.png" },
    { title: "Smart Station", subtitle: "Stable Living for Villas", image: "/prod-station-classic.png" },
  ],
  "Nature": [
    { title: "Nature", subtitle: "Big Screen Control", image: "/prod-station-pro.png" },
    { title: "Nature 7 PRO", subtitle: "All-in-One Panel", image: "/prod-station.png" },
    { title: "Nature X PRO", subtitle: "Smart Desktop Hub", image: "/prod-station-pro.png" },
    { title: "Nature Mini PRO", subtitle: "Compact & Complete", image: "/prod-station.png" },
    { title: "Nature Mini PRO (PoE)", subtitle: "PoE Control Center", image: "/prod-station.png" },
    { title: "Nature Mini L", subtitle: "120mm Smart Panel", image: "/prod-station-classic.png" },
  ],
  "Security": [
    { title: "Smart Door Lock C200", subtitle: "Multi-Access", image: "/prod-station.png" },
    { title: "Outdoor Camera", subtitle: "Home Guardian", image: "/prod-station.png" },
    { title: "Indoor Camera", subtitle: "5MP HD Camera", image: "/prod-station.png" },
    { title: "DEFED Motion Sensor", subtitle: "High-Security Detector", image: "/prod-station.png" },
    { title: "DEFED Indoor Siren", subtitle: "Indoor Safety Alarm", image: "/prod-station.png" },
    { title: "DEFED Door/Window Sensor", subtitle: "Door Window Guardian", image: "/prod-station.png" },
    { title: "DEFED Key Fob", subtitle: "Control With Ease", image: "/prod-station.png" },
    { title: "Environmental Sensor (Gas/CO₂)", subtitle: "Home Safety Alarm", image: "/prod-station.png" },
    { title: "Smoke Detector (ZigBee)", subtitle: "Optical Smoke Sensor", image: "/prod-station.png" },
    { title: "Household Gas Detector (ZigBee)", subtitle: "Smart Gas Monitor", image: "/prod-station.png" },
    { title: "Water Leak Sensor", subtitle: "24/7 Water Monitor", image: "/prod-station.png" },
  ],
  "Sensor": [
    { title: "Motion Sensor PRO", subtitle: "Tiny Motion Detector", image: "/prod-station.png" },
    { title: "CUBE Door/Window Sensor", subtitle: "Open/Close Tracker", image: "/prod-station.png" },
    { title: "CUBE Environmental Sensor", subtitle: "Pleasant Home Environment", image: "/prod-station.png" },
    { title: "Human Presence Sensor", subtitle: "Easy Ceiling Installation", image: "/prod-station.png" },
    { title: "In-wall Air Quality Detector", subtitle: "Live Climate Data", image: "/prod-station.png" },
  ],
  "Energy Saving": [
    { title: "General Controller", subtitle: "Third-Party Integration", image: "/prod-station.png" },
    { title: "RS485 Converter", subtitle: "RS485 Integration Hub", image: "/prod-station.png" },
    { title: "Smart Plug (EU & FR)", subtitle: "Traditional to Smart", image: "/prod-station.png" },
    { title: "Smart Plug (US)", subtitle: "Traditional to Smart", image: "/prod-station.png" },
    { title: "Smart Plug (UK)", subtitle: "Traditional to Smart", image: "/prod-station.png" },
    { title: "HA Interface Adaptor", subtitle: "Dry Contact Integration", image: "/prod-station.png" },
  ],
  "Lighting": [
    { title: "BLEND Switch PRO (Metal)", subtitle: "Elegant Smart Switch", image: "/prod-station.png" },
    { title: "Nature Switch", subtitle: "Red Dot Winner", image: "/prod-station.png" },
    { title: "Nature Switch (Matte)", subtitle: "Fingerprint-Free Finish", image: "/prod-station.png" },
    { title: "BLEND Switch PRO", subtitle: "Neutral-Free Option", image: "/prod-station.png" },
    { title: "Smart Switch Air", subtitle: "Thinnest Smart Switch", image: "/prod-station.png" },
    { title: "Triac Dimmer Switch", subtitle: "Precise Light Control", image: "/prod-station.png" },
    { title: "Dimmer & Motion Switch", subtitle: "Motion Meets Light", image: "/prod-station.png" },
    { title: "Nature Switch L", subtitle: "Perfect 120 Fit", image: "/prod-station.png" },
    { title: "Polar Switch", subtitle: "Smart 120 Switch", image: "/prod-station.png" },
    { title: "CUBE Clicker", subtitle: "Wire-Free Control", image: "/prod-station.png" },
    { title: "Nature Switch (Heavy Duty)", subtitle: "High-Power Control", image: "/prod-station.png" },
    { title: "CUBE Switch Module", subtitle: "Turn Smart Instantly", image: "/prod-station.png" },
    { title: "CUBE Switch Module PRO", subtitle: "Upgrade Switch Fast", image: "/prod-station.png" },
    { title: "DALI Controller", subtitle: "Seamless DALI Integration", image: "/prod-station.png" },
    { title: "CV Dimming Controller", subtitle: "Smart LED Dimmer", image: "/prod-station.png" },
  ],
  "Shading": [
    { title: "Silent Track Curtain Motor", subtitle: "Silent Smart Curtains", image: "/prod-station.png" },
    { title: "Smart Curtain Motor", subtitle: "Precise Curtain Control", image: "/prod-station.png" },
    { title: "Smart Curtain Motor V2", subtitle: "Stable and Flexible", image: "/prod-station.png" },
    { title: "DC Tubular Motor (V2)", subtitle: "Quiet Blind Motor", image: "/prod-station.png" },
    { title: "BLEND Curtain Controller PRO", subtitle: "Curtain Control Switch", image: "/prod-station.png" },
  ],
  "HVAC": [
    { title: "Nature Mini PRO (Thermostat)", subtitle: "Temperature Control Hub", image: "/prod-station.png" },
    { title: "Nature Thermostat (24V)", subtitle: "Easy HVAC Control", image: "/prod-station.png" },
    { title: "Smart Central AC Gateway", subtitle: "Intelligent Climate Hub", image: "/prod-station.png" },
  ],
  "Entertainment": [
    { title: "SPOT-Universal Remote", subtitle: "IR Device Integration", image: "/prod-station.png" },
    { title: "SPOT Mini", subtitle: "Smart IR Hub", image: "/prod-station.png" },
  ]
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Central Control");

  const currentProducts = productData[activeCategory as keyof typeof productData] || [];

  return (
    <section id="products" className="min-h-screen w-full bg-[#F9F9F9] flex flex-col py-24 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Category Tabs - Wraps on mobile per screenshot */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1A1A1A] text-white shadow-md"
                  : "bg-[#E5E5E5] text-black hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section Title - Hidden or smaller on mobile to match screenshot feel */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black font-heading">
            {activeCategory}
          </h2>
        </div>

        {/* Product Grid - Vertical list on mobile, grid on desktop */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 w-full">
          {currentProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-[1.5rem] sm:rounded-[3rem] p-6 sm:p-10 flex flex-row sm:flex-col items-center shadow-sm sm:shadow-none border border-[#F0F0F0] sm:border-none transition-all duration-500 group min-h-[140px] sm:min-h-[500px]"
            >
              {/* Product Image Area - Left on mobile, Top on desktop */}
              <div className="relative w-24 h-24 sm:w-full sm:h-64 lg:h-80 sm:max-w-[320px] mx-auto flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 260px, 320px"
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content - Right on mobile, Center on desktop */}
              <div className="flex-1 sm:text-center ml-6 sm:ml-0 mt-0 sm:mt-6">
                <h3 className="text-lg sm:text-2xl font-bold text-black mb-1 sm:mb-3 font-heading tracking-tight leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-lg text-[#666] sm:text-[#333] mb-0 sm:mb-8 font-medium">
                  {product.subtitle}
                </p>
                
                {/* Arrow Button - Desktop only or small version on mobile */}
                <div className="hidden sm:flex justify-center mt-4">
                  <div className="bg-[#007AFF] px-4 py-2.5 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                    <MoveRight className="h-6 w-6 stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {currentProducts.length === 0 && (
            <div className="col-span-full py-20 flex flex-col items-center justify-center bg-white rounded-[1.5rem] sm:rounded-[3rem] border border-[#F0F0F0]">
              <p className="text-gray-400 font-medium italic text-xl">
                Coming Soon
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
