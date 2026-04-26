"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-white/80 backdrop-blur-sm py-6"
      } border-b border-[#F0F0F0]`}>
        <div className="w-full mx-auto px-6 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-black font-heading">
              Casasense
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#666] hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black transition-transform active:scale-90"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Full Screen Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-white transition-all duration-500 md:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="h-20 px-6 flex items-center justify-between border-b border-[#F0F0F0]">
            <span className="text-2xl font-bold tracking-tighter text-black font-heading">
              Casasense
            </span>
            <button 
              className="p-2 text-black transition-transform active:scale-90"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-medium text-black transition-all duration-300 hover:text-[#007AFF] transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-10 border-t border-[#F0F0F0] text-center">
            <p className="text-sm text-gray-400 font-medium">
              © 2026 Casasense Inc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
