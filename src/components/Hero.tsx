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
              className="object-cover object-center"
            />
            {/* Darker overlay for better text legibility */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 text-center z-20">
            <h2 className={`text-4xl md:text-5xl font-semibold tracking-[0.1em] text-white uppercase font-heading mb-4 transition-all duration-1000 delay-300 ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              {slide.title}
            </h2>
            <div className={`space-y-1 transition-all duration-1000 delay-500 ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <p className="text-sm md:text-base font-medium text-white/90 tracking-wide">
                {slide.subtitle}
              </p>
              <p className="text-sm md:text-base font-medium text-white/90 tracking-wide">
                {slide.subtext}
              </p>
            </div>
            
            {/* Action Button */}
            <button className={`mt-8 group relative flex items-center justify-center w-12 h-12 bg-[#007AFF] rounded-full text-white shadow-lg hover:scale-110 transition-all duration-500 delay-700 ${
              index === current ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-12 z-30 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors border border-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors border border-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[3px] transition-all duration-500 rounded-full ${
              index === current ? "w-8 bg-[#007AFF]" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
