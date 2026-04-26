import Image from "next/image";
import { MapPin, Star, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Smart Installation",
    location: "Global Priority Coverage",
    rating: "4.8",
    reviews: "850",
    image: "/smart-install.png",
  },
  {
    title: "Design & Consultation",
    location: "Virtual & On-site Available",
    rating: "5.0",
    reviews: "320",
    image: "/smart-design.png",
  },
  {
    title: "Maintenance & Support",
    location: "24/7 Remote Monitoring",
    rating: "4.9",
    reviews: "1,150",
    image: "/smart-support.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen w-full bg-white flex flex-col justify-center px-6 lg:px-16 py-24">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Heading Line with View All */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div>
            <span className="text-[#007AFF] font-bold text-xs tracking-[0.2em] uppercase mb-2 block font-heading">
              SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black font-heading">
              Our Professional Expertise
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-[#007AFF] hover:gap-3 transition-all duration-300 group">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black font-heading">
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>{service.location}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-[#FFC107] text-[#FFC107]" />
                    <span className="font-bold text-black">{service.rating}</span>
                    <span className="text-gray-400">({service.reviews} Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
