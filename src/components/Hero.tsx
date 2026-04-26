"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/hero.png",
    title: "NATURE SERIES",
    subtitle: "One Panel, Endless Possibilities",
    subtext: "Smart Control at Fingertips",
  },
  {
    id: 2,
    image: "/hero2.png",
    title: "SMART CONTROL",
    subtitle: "Intuitive Interface, Perfect Design",
    subtext: "Minimalist Aesthetics for Modern Living",
  },
  {
    id: 3,
    image: "/hero3.png",
    title: "AMBIENT LIGHT",
    subtitle: "Mood Lighting for Every Moment",
    subtext: "Dynamic Scenes Inspired by Nature",
  },
  {
    id: 4,
    image: "/hero4.png",
    title: "INTELLIGENT HOME",
    subtitle: "Seamless Integration, Total Peace",
    subtext: "Your World, Simplified Through Tech",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-transform duration-[5000ms] ease-linear ${
                index === current ? "scale-110" : "scale-100"
              }`}
            />
            {/* Gradient overlay for better text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6">
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter text-white uppercase font-heading mb-6 transition-all duration-1000 delay-300 ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}>
              {slide.title}
            </h2>
            <div className={`space-y-2 transition-all duration-1000 delay-500 ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}>
              <p className="text-sm md:text-xl font-bold text-white/90 tracking-[0.2em] uppercase">
                {slide.subtitle}
              </p>
              <p className="text-xs md:text-base font-medium text-white/70 tracking-widest uppercase">
                {slide.subtext}
              </p>
            </div>
            
            {/* Action Button */}
            <button className={`mt-12 group relative flex items-center justify-center w-16 h-16 bg-[#007AFF] rounded-full text-white shadow-[0_0_50px_rgba(0,122,255,0.5)] hover:scale-110 transition-all duration-700 delay-700 ${
              index === current ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}>
              <ArrowRight className="h-6 w-6 stroke-[3]" />
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping group-hover:hidden" />
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-12 z-30 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto p-4 bg-white/5 backdrop-blur-3xl rounded-full text-white hover:bg-[#007AFF] transition-all border border-white/10 group"
        >
          <ChevronLeft className="h-6 w-6 group-active:-translate-x-2 transition-transform" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-4 bg-white/5 backdrop-blur-3xl rounded-full text-white hover:bg-[#007AFF] transition-all border border-white/10 group"
        >
          <ChevronRight className="h-6 w-6 group-active:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-700 rounded-full ${
              index === current ? "w-12 bg-[#007AFF]" : "w-6 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
