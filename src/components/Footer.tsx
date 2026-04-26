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
    <footer className="w-full bg-white py-12 px-6 lg:px-16 border-t border-[#F0F0F0]">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Row: Links & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium text-[#666]">
            <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2">
              <span>E-mail:</span>
              <a href="mailto:Casasense2131@gmail.com" className="hover:text-black transition-colors uppercase">Casasense2131@gmail.com</a>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Sainikpuri, Hyderabad</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-[#666] hover:text-black transition-colors">
              <SocialIcons.Linkedin />
            </a>
            <a href="#" className="text-[#666] hover:text-black transition-colors">
              <SocialIcons.Twitter />
            </a>
            <a href="#" className="text-[#666] hover:text-black transition-colors">
              <SocialIcons.Instagram />
            </a>
            <a href="#" className="text-[#666] hover:text-black transition-colors">
              <SocialIcons.Facebook />
            </a>
            <a href="#" className="text-[#666] hover:text-black transition-colors">
              <SocialIcons.Youtube />
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-[#F0F0F0] mb-8" />

        {/* Bottom Row: Copyright */}
        <div className="text-sm text-[#999] font-medium text-center md:text-left">
          Copyright © 2026 Casasense Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
