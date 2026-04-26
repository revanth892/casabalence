import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Solutions() {
  return (
    <section id="solutions" className="min-h-screen flex flex-col justify-center px-6 lg:px-16 w-full mx-auto bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Top Left: Wall Panel Card */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-white border border-[#F0F0F0] h-[300px] md:h-[400px]">
            <Image
              src="/hero2.png"
              alt="Smart Wall Panel"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <h3 className="text-3xl font-bold text-white mb-6 font-heading tracking-tight drop-shadow-xl">
                Smart Control
              </h3>
              <button className="w-14 h-14 bg-[#007AFF] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg shadow-[#007AFF]/30">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Top Right: Architectural Card */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-white border border-[#F0F0F0] h-[300px] md:h-[400px]">
            <Image
              src="/building.png"
              alt="Smart Architecture"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <h3 className="text-3xl font-bold text-white mb-6 font-heading tracking-tight drop-shadow-xl">
                Luxury Living
              </h3>
              <button className="w-14 h-14 bg-[#007AFF] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg shadow-[#007AFF]/30">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Office Card */}
          <div className="bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden flex flex-col group h-[350px]">
            <div className="p-8 pb-4 text-center">
              <h3 className="text-2xl font-bold text-black mb-0 font-heading tracking-tight">Office</h3>
            </div>
            <div className="flex-1 relative mt-2">
              <Image
                src="/office.png"
                alt="Office Solution"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Elderly Care Card */}
          <div className="bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden flex flex-col group h-[350px]">
            <div className="p-8 pb-4 text-center">
              <h3 className="text-2xl font-bold text-black mb-0 font-heading tracking-tight">Elderly Care</h3>
            </div>
            <div className="flex-1 relative mt-2">
              <Image
                src="/elderly.png"
                alt="Elderly Care"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Gaming Room Card */}
          <div className="bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden flex flex-col group h-[350px] sm:col-span-2 lg:col-span-1">
            <div className="p-8 pb-4 text-center">
              <h3 className="text-2xl font-bold text-black mb-0 font-heading tracking-tight">Gaming Room</h3>
            </div>
            <div className="flex-1 relative mt-2">
              <Image
                src="/gaming.png"
                alt="Gaming Room"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
