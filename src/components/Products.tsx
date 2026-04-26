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
    <section id="products" className="min-h-screen w-full bg-white flex flex-col py-24 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-16 no-scrollbar gap-3 lg:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-black text-white shadow-xl scale-105"
                  : "bg-[#F3F3F3] text-[#666] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black font-heading uppercase">
            {activeCategory}
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {currentProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-[#F8F9FA] rounded-[3rem] p-10 flex flex-col items-center shadow-sm border border-slate-100 transition-all duration-500 group min-h-[450px] hover:shadow-2xl hover:border-transparent hover:-translate-y-2"
            >
              {/* Text Content */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-black mb-4 font-heading tracking-tight leading-tight px-2">
                  {product.title}
                </h3>
                <p className="text-base text-slate-500 mb-8 font-bold tracking-wide">
                  {product.subtitle}
                </p>
                
                {/* Arrow Button */}
                <div className="flex justify-center mb-4">
                  <div className="bg-black p-4 rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#007AFF] group-hover:scale-110 shadow-lg">
                    <MoveRight className="h-6 w-6 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Product Image Area */}
              <div className="mt-auto relative w-full aspect-square max-w-[240px] mx-auto">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}

          {currentProducts.length === 0 && (
            <div className="col-span-full py-40 flex flex-col items-center justify-center bg-[#F8F9FA] rounded-[3.5rem] border-2 border-dashed border-slate-200">
              <p className="text-slate-300 font-black italic text-2xl tracking-widest uppercase">
                Hardware Coming Soon
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
