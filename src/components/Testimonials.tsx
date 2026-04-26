"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: "01",
    quote: "Casasense has redefined luxury for us. The way the lights and curtains respond to our daily rhythm is truly magical.",
    author: "Arjun Mehta",
    role: "Architect / Studio Vista",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "02",
    quote: "The elderly care features are a lifesaver. Being able to monitor my parents' safety remotely gives me immense peace of mind.",
    author: "Priya Sharma",
    role: "Health Consultant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "03",
    quote: "Our office energy costs dropped by 30% after installing the smart occupancy sensors. It's efficiency at its finest.",
    author: "Vikram Goel",
    role: "CEO / GreenTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "04",
    quote: "The gaming room automation is incredible. One tap and the entire ambience shifts into immersive mode. Simply flawless.",
    author: "Rohan Das",
    role: "Professional Gamer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "05",
    quote: "Security was our top priority, and Casasense delivered. The 24/7 monitoring and smart locks are world-class.",
    author: "Sanjay Singhania",
    role: "Security Analyst",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "06",
    quote: "The glass keypads are a work of art. They blend perfectly with our interiors while giving us complete control.",
    author: "Ananya Iyer",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "07",
    quote: "Implementing Casasense across our residential project was the best decision. Our clients absolutely love the smart features.",
    author: "Karan Malhotra",
    role: "Real Estate Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Automatic scrolling
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const current = testimonials[currentIndex];

  return (
    <section className="min-h-screen w-full bg-white flex flex-col justify-center px-6 lg:px-24 py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative">
        {/* Quote Icon Background */}
        <div className="absolute -top-12 -left-4 opacity-5 pointer-events-none">
          <Quote className="h-32 w-32 fill-black" />
        </div>

        {/* Side Navigation Buttons */}
        <button 
          onClick={prev}
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F3F4F6] hover:bg-black hover:text-white rounded-full flex items-center justify-center text-gray-400 z-20 transition-all duration-300 hidden 2xl:flex shadow-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={next}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F3F4F6] hover:bg-black hover:text-white rounded-full flex items-center justify-center text-gray-400 z-20 transition-all duration-300 hidden 2xl:flex shadow-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Large Number */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <span className="text-[6rem] sm:text-[8rem] lg:text-[12rem] font-black text-[#F3F4F6] leading-none select-none font-heading transition-all duration-700 tracking-tighter">
              {current.id}
            </span>
          </div>

          {/* Quote Content */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-center lg:text-left">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight transition-all duration-500 font-heading">
              "{current.quote}"
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-slate-50 shadow-md">
                <Image
                  src={current.image}
                  alt={current.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-black text-black font-heading tracking-tight">{current.author}</h4>
                <p className="text-[#007AFF] text-[10px] uppercase tracking-[0.2em] font-black">{current.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="mt-20 lg:mt-32 flex flex-col sm:flex-row justify-between items-center gap-8 max-w-5xl mx-auto w-full">
        {/* Progress Display */}
        <div className="flex items-center gap-8 order-2 sm:order-1">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === currentIndex ? "w-12 bg-[#007AFF]" : "w-4 bg-gray-100 hover:bg-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-slate-300 font-black tracking-[0.25em] text-[10px] uppercase">
            {current.id} <span className="mx-2 text-slate-100">/</span> 0{testimonials.length}
          </span>
        </div>

        {/* Navigation Arrows for Mobile/Tablet */}
        <div className="flex gap-10 order-1 sm:order-2 lg:hidden">
          <button onClick={prev} className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-black hover:text-white transition-all shadow-sm">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={next} className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-black hover:text-white transition-all shadow-sm">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
