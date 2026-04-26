"use client";

import { useState } from "react";
import { LogOut, ShieldCheck, Mail, Phone, Calendar, MessageSquare } from "lucide-react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();

      if (result.success) {
        setIsLoggedIn(true);
        fetchMessages();
      } else {
        setError(result.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Server connection error.");
    } finally {
      setLoginLoading(false);
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/messages");
      const result = await response.json();
      if (result.success) {
        setMessages(result.data);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-black p-3 rounded-xl mb-4">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Admin Access</h1>
            <p className="text-slate-500 text-sm mt-1">Casasense Secure Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-black outline-none transition-all"
                placeholder="admin"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-black outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            
            {error && <p className="text-red-500 text-xs font-bold text-center bg-red-50 py-2 rounded-lg border border-red-100">{error}</p>}

            <button 
              disabled={loginLoading}
              className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 transition-all disabled:opacity-50"
            >
              {loginLoading ? "Verifying..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 p-6 lg:p-12 font-sans">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto border-b border-slate-200 pb-8 mb-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-black p-2 rounded-lg">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Enquiries</h1>
            <p className="text-slate-500 text-sm font-medium">Total Inquiries: {messages.length}</p>
          </div>
        </div>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center gap-2 px-6 py-2.5 border-2 border-slate-900 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white transition-all group"
        >
          LOGOUT
          <LogOut className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Table Area */}
      <div className="max-w-[1400px] mx-auto">
        {loading ? (
          <div className="py-20 text-center font-bold text-slate-400">LOADING DATABASE...</div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest border-r border-slate-200">Date & Time</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest border-r border-slate-200">Customer Name</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest border-r border-slate-200">Contact Info</th>
                  <th className="px-6 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Inquiry Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-24 text-center text-slate-400 font-medium italic">
                      No customer inquiries found in the database.
                    </td>
                  </tr>
                ) : (
                  messages.map((msg) => (
                    <tr key={msg._id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-6 border-r border-slate-100 align-top">
                        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                          <Calendar className="h-3.5 w-3.5 text-slate-400" />
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-[11px] text-slate-400 font-bold mt-1 ml-5">
                          {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-slate-100 align-top">
                        <div className="flex items-center gap-2 font-bold text-slate-900">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">
                            {msg.firstName[0]}{msg.lastName[0]}
                          </div>
                          {msg.firstName} {msg.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-slate-100 align-top">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-slate-600 font-medium hover:text-black transition-colors cursor-pointer">
                            <Mail className="h-3.5 w-3.5" />
                            {msg.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600 font-medium hover:text-black transition-colors cursor-pointer">
                            <Phone className="h-3.5 w-3.5" />
                            {msg.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <div className="flex gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                          <MessageSquare className="h-4 w-4 text-slate-300 mt-1 shrink-0" />
                          <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                            {msg.message}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
