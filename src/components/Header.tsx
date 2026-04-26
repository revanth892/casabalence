"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/90 backdrop-blur-xl py-4 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" : "bg-transparent py-6"
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center group">
          <span className="text-2xl font-black tracking-tighter text-black font-heading uppercase">
            Casasense
          </span>
          <div className="ml-1 w-1.5 h-1.5 bg-[#007AFF] rounded-full group-hover:scale-150 transition-transform duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-black transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007AFF] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link 
            href="#contact"
            className="bg-black text-white text-[10px] font-black px-8 py-3.5 rounded-2xl tracking-[0.2em] hover:bg-[#007AFF] transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-3 bg-slate-50 rounded-2xl text-black hover:bg-slate-100 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6 stroke-[2.5]" /> : <Menu className="h-6 w-6 stroke-[2.5]" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-700 md:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/60 backdrop-blur-3xl transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Full Screen Menu Content */}
        <div className={`absolute inset-0 flex flex-col justify-center items-center px-10 transition-all duration-700 ease-out ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"
        }`}>
          <nav className="flex flex-col items-center space-y-12 mb-16">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-5xl font-black text-black tracking-tighter hover:text-[#007AFF] transition-all transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className={`flex flex-col items-center gap-6 w-full max-w-xs transition-all duration-700 delay-500 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <Link 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-black text-white text-sm font-black py-6 rounded-[2rem] flex items-center justify-center gap-3 tracking-[0.2em] shadow-2xl active:scale-95"
            >
              LET'S TALK <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase text-center leading-relaxed">
              Based in Hyderabad, India<br/>Serving Luxury Worldwide
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
