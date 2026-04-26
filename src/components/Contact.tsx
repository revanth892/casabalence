"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-white flex flex-col justify-center px-6 lg:px-16 py-24">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col">
          <span className="text-[#007AFF] font-bold text-xs tracking-[0.25em] uppercase mb-6 block font-heading">
            CONNECT WITH US
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 font-heading tracking-tight leading-[1.1]">
            Let's build your <span className="text-[#007AFF]">Smart Home</span> together.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            Have a project in mind? Our team of experts is ready to help you design the perfect intelligent living experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="flex items-start gap-5 group cursor-pointer">
              <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-[#007AFF] group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Email Us</p>
                <p className="text-lg font-bold text-black break-all">Casasense2131@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group cursor-pointer">
              <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-[#007AFF] group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Call Us</p>
                <p className="text-lg font-bold text-black">+91 99487 30391</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-[#007AFF] group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Visit Us</p>
                <p className="text-lg font-bold text-black">Sainikpuri, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-[#F8F9FA] rounded-[3.5rem] p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="bg-green-100 p-6 rounded-full mb-8">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-3xl font-black text-black mb-4 font-heading">Message Sent!</h3>
              <p className="text-slate-500 font-bold max-w-xs mx-auto">Thank you for reaching out. Our team will contact you shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-10 bg-black text-white px-10 py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-[#007AFF] transition-all"
              >
                SEND AGAIN
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">First Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-black focus:ring-4 focus:ring-[#007AFF]/10 focus:border-[#007AFF] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Last Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-black focus:ring-4 focus:ring-[#007AFF]/10 focus:border-[#007AFF] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-black focus:ring-4 focus:ring-[#007AFF]/10 focus:border-[#007AFF] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-black focus:ring-4 focus:ring-[#007AFF]/10 focus:border-[#007AFF] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm font-bold text-black focus:ring-4 focus:ring-[#007AFF]/10 focus:border-[#007AFF] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                disabled={status === "loading"}
                className={`w-full bg-black text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl hover:bg-[#007AFF] group text-sm tracking-widest uppercase ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status === "loading" ? "TRANSMITTING..." : "Send Message"}
                {status !== "loading" && <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[3]" />}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-[10px] font-black text-center mt-4 uppercase tracking-widest">
                  Transmission Failed. Try again.
                </p>
              )}
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
