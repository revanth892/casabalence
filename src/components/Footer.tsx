import { Mail, MapPin } from "lucide-react";

const SocialIcons = {
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Twitter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  Youtube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.4 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.4-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
  )
};

export default function Footer() {
  return (
    <footer className="w-full bg-white py-16 px-6 lg:px-16 border-t border-slate-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Row: Links & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-10">
          {/* Logo / Brand Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl font-black tracking-tighter text-black mb-2 font-heading">
              CASASENSE
            </h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">
              The Intelligence of Living
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-[#007AFF] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#007AFF] transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-[#007AFF] transition-colors">About</a>
            <a href="#services" className="hover:text-[#007AFF] transition-colors">Services</a>
            <a href="#contact" className="hover:text-[#007AFF] transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-300 hover:text-[#007AFF] transition-all duration-300 hover:-translate-y-1">
              <SocialIcons.Linkedin />
            </a>
            <a href="#" className="text-slate-300 hover:text-[#007AFF] transition-all duration-300 hover:-translate-y-1">
              <SocialIcons.Twitter />
            </a>
            <a href="#" className="text-slate-300 hover:text-[#007AFF] transition-all duration-300 hover:-translate-y-1">
              <SocialIcons.Instagram />
            </a>
            <a href="#" className="text-slate-300 hover:text-[#007AFF] transition-all duration-300 hover:-translate-y-1">
              <SocialIcons.Facebook />
            </a>
            <a href="#" className="text-slate-300 hover:text-[#007AFF] transition-all duration-300 hover:-translate-y-1">
              <SocialIcons.Youtube />
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-slate-50 mb-12" />

        {/* Bottom Row: Info & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#007AFF]" />
              <a href="mailto:Casasense2131@gmail.com" className="hover:text-black transition-colors">Casasense2131@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#007AFF]" />
              <span>Sainikpuri, Hyderabad, India</span>
            </div>
          </div>
          
          <div className="opacity-50 text-center md:text-right">
            Copyright © 2026 Casasense Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
