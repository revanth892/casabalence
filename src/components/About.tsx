import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 lg:px-16 w-full mx-auto bg-white py-24 lg:py-0 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#00A3FF] font-bold text-xs tracking-[0.2em] uppercase mb-4 block font-heading">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight font-heading">
              Transform Your Living Space with Smart Home System
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[#666] text-sm md:text-base leading-relaxed mb-6">
              We focus on the simple idea of creating a building that knows what to do on its own. 
              equipped with truly intelligent systems.
            </p>
            <button className="bg-[#78D1E1] hover:bg-[#68c1d1] text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-[#78D1E1]/20">
              Learn More
            </button>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[50vh]">
          {/* Left Visual: Phone Mockups */}
          <div className="lg:col-span-7 bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden flex items-center justify-center p-8 min-h-[300px] lg:min-h-0">
            <div className="relative w-full h-full max-w-xl aspect-[4/3]">
              <Image
                src="/app-mockup.png"
                alt="Casasense Smart App"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Security Card */}
            <div className="bg-[#F8F9FA] rounded-[2.5rem] p-10 flex-1 relative group flex flex-col justify-center min-h-[200px]">
              <div className="max-w-xs">
                <h3 className="text-2xl font-bold text-black mb-4 font-heading">
                  24/7 Security
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Security in a Casasense Smart Home has many aspects: scaring off burglars, 
                  protecting loved ones from fire and water damage, keeping watch over 
                  your building and making sure data is 100% private.
                </p>
              </div>
              <button className="absolute top-10 right-10 w-12 h-12 bg-[#5EA5C5] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-md">
                <ArrowUpRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Small Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:h-44">
              {/* Camera Card */}
              <div className="bg-[#F8F9FA] rounded-[2.5rem] p-6 flex items-center justify-center overflow-hidden min-h-[120px] lg:min-h-0">
                <div className="relative w-24 h-24">
                  <Image
                    src="/camera.png"
                    alt="Security Camera"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Power Usage Card */}
              <div className="bg-[#C1EAF1] rounded-[2.5rem] p-8 flex flex-col justify-center gap-4 min-h-[120px] lg:min-h-0">
                <div className="relative w-full h-2 bg-white/30 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[60%] bg-[#5EA5C5] rounded-full" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">32.8 kWh</div>
                  <div className="text-xs font-bold text-[#5EA5C5] uppercase tracking-widest mt-1">
                    Power usage today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
