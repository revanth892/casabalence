"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="h-screen w-full bg-white flex flex-col justify-center px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative">
        {/* Side Navigation Buttons - Moved Closer & Color Themed */}
        <button 
          onClick={prev}
          className="absolute -left-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F3F4F6] hover:bg-[#78D1E1] hover:text-white rounded-full flex items-center justify-center text-gray-400 z-20 transition-all duration-300 hidden xl:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={next}
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F3F4F6] hover:bg-[#78D1E1] hover:text-white rounded-full flex items-center justify-center text-gray-400 z-20 transition-all duration-300 hidden xl:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Large Number */}
          <div className="lg:col-span-4">
            <span className="text-[8rem] lg:text-[10rem] font-bold text-[#F3F4F6] leading-none select-none font-heading transition-all duration-700">
              {current.id}
            </span>
          </div>

          {/* Quote Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="text-xl lg:text-2xl font-medium text-black leading-snug max-w-lg transition-all duration-500">
              "{current.quote}"
            </p>

            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src={current.image}
                  alt={current.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-black font-heading">{current.author}</h4>
                <p className="text-[#78D1E1] text-[10px] uppercase tracking-wider font-semibold">{current.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls - Color Themed */}
      <div className="absolute bottom-12 left-6 lg:left-32 right-6 lg:right-32 flex justify-between items-center">
        {/* Progress Display */}
        <div className="flex items-center gap-8">
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <div 
                key={i}
                className={`h-0.5 transition-all duration-500 ${
                  i === currentIndex ? "w-10 bg-[#78D1E1]" : "w-5 bg-gray-100"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-300 font-medium tracking-widest text-[10px]">
            {current.id} / 0{testimonials.length}
          </span>
        </div>

        {/* Small Navigation Arrows */}
        <div className="flex gap-6">
          <button onClick={prev} className="text-gray-300 hover:text-[#78D1E1] transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="text-gray-300 hover:text-[#78D1E1] transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
