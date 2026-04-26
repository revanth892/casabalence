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
    <section id="contact" className="w-full bg-white flex flex-col justify-center px-6 lg:px-16 py-20">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-heading tracking-tight leading-tight">
            Let's build your <span className="text-[#007AFF]">Smart Home</span> together.
          </h2>
          <p className="text-lg text-[#666] mb-10 max-w-md leading-relaxed">
            Have a project in mind? Our team of experts is ready to help you design the perfect intelligent living experience.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#F8F9FA] p-3 rounded-xl">
                <Mail className="h-5 w-5 text-[#007AFF]" />
              </div>
              <div>
                <p className="text-[10px] text-[#999] uppercase tracking-widest font-bold mb-0.5">Email Us</p>
                <p className="text-lg font-semibold text-black">Casasense2131@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#F8F9FA] p-3 rounded-xl">
                <Phone className="h-5 w-5 text-[#007AFF]" />
              </div>
              <div>
                <p className="text-[10px] text-[#999] uppercase tracking-widest font-bold mb-0.5">Call Us</p>
                <p className="text-lg font-semibold text-black">+91 99487 30391</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#F8F9FA] p-3 rounded-xl">
                <MapPin className="h-5 w-5 text-[#007AFF]" />
              </div>
              <div>
                <p className="text-[10px] text-[#999] uppercase tracking-widest font-bold mb-0.5">Visit Us</p>
                <p className="text-lg font-semibold text-black">Sainikpuri, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-[#F8F9FA] rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="bg-green-100 p-4 rounded-full mb-6">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
              <p className="text-[#666]">Thank you for reaching out. Our team will contact you shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-[#007AFF] font-bold text-sm hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-black ml-1 uppercase tracking-wider">First Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-white border-none rounded-xl p-3.5 text-sm text-black focus:ring-2 focus:ring-[#007AFF] outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-black ml-1 uppercase tracking-wider">Last Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-white border-none rounded-xl p-3.5 text-sm text-black focus:ring-2 focus:ring-[#007AFF] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-black ml-1 uppercase tracking-wider">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border-none rounded-xl p-3.5 text-sm text-black focus:ring-2 focus:ring-[#007AFF] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-black ml-1 uppercase tracking-wider">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white border-none rounded-xl p-3.5 text-sm text-black focus:ring-2 focus:ring-[#007AFF] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-black ml-1 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border-none rounded-xl p-3.5 text-sm text-black focus:ring-2 focus:ring-[#007AFF] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                disabled={status === "loading"}
                className={`w-full bg-[#007AFF] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-blue-500/10 group text-sm ${status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"}`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {status !== "loading" && <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-[10px] font-bold text-center mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
