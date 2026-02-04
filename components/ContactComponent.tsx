"use client";
import React, { useState } from "react";
import { FiPhone, FiMapPin, FiSend, FiClock, FiCalendar, FiUser, FiActivity, FiCheck } from "react-icons/fi";
import clsx from "clsx";

const ContactComponent = () => {
  const [pending, setPending] = useState(false);
  const [showToast, setShowToast] = useState(false); // State for Toast

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    // Simulate API call
    setTimeout(() => {
      setPending(false);
      setShowToast(true); // Show Success Toast
      
      // Hide Toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    }, 2000); 
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 via-white to-yellow-50 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-[100px] -z-10" />
      
      {/* ======================= */}
      {/* TOAST NOTIFICATION      */}
      {/* ======================= */}
      <div 
        className={clsx(
          "fixed bottom-5 right-5 z-[100] transition-all duration-500 transform",
          showToast ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center gap-3 bg-white border-l-4 border-green-500 shadow-2xl rounded-r-xl p-4 pr-6">
           <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <FiCheck size={18} />
           </div>
           <div>
              <h4 className="font-bold text-slate-800 text-sm">Request Sent!</h4>
              <p className="text-slate-500 text-xs">We will contact you shortly.</p>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-yellow-400 font-extrabold tracking-widest uppercase text-sm mb-3">
                JOIN THE MOVEMENT
              </h3>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight font-heading leading-tight">
                Ready to Sweat? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-yellow-400">
                  Book Your Spot!
                </span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md font-medium">
                Whether you are a beginner or a pro, we have a spot for you. Fill out the form to schedule your first session or give us a call directly.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {[
                { 
                    icon: <FiMapPin />, 
                    label: "Studio Location", 
                    value: "Opp Hotel Rangoli Pearl, Nawathe Square, Amravati 444607" 
                },
                { 
                    icon: <FiPhone />, 
                    label: "Call for Enquiry", 
                    value: "+91 9876543210\n+91 9123456789"
                },
                { 
                    icon: <FiClock />, 
                    label: "Studio Hours", 
                    value: "Mon - Sat: 6:00 AM - 6:00 PM" 
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  {/* Icon Container: Purple Default -> Yellow Hover */}
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-purple-600 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all duration-300 shadow-md border border-purple-100 group-hover:border-yellow-400 shrink-0">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg mb-1">{item.label}</p>
                    <p className="text-slate-500 font-medium whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Appointment Form */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-yellow-500/10 rounded-[2.5rem] blur-2xl" />
            
            <form 
              onSubmit={handleSubmit}
              className="relative bg-white border border-white/50 p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-purple-900/5 space-y-6"
            >
              <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-purple-700 uppercase tracking-wide">
                      Book Appointment
                  </h3>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900"
                      required
                    />
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Mobile Number & Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mobile Number</label>
                  <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="+91 0000000000"
                        className="w-full pl-12 pr-5 py-4 rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900"
                        required
                      />
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-purple-700 ml-1">Appointment Date</label>
                  <div className="relative">
                      <input 
                        type="date" 
                        className="w-full pl-12 pr-5 py-4 rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900 cursor-pointer"
                        required
                      />
                      <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                  </div>
                </div>
              </div>

              {/* Class Category */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-purple-700 ml-1">Class Category</label>
                <div className="relative">
                  <select className="w-full px-5 py-4 rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900 appearance-none cursor-pointer">
                    <option>Zumba Fitness</option>
                    <option>Yoga & Meditation</option>
                    <option>Aerobics</option>
                    <option>Personal Training</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Goals / Conditions */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Any specific goals or health conditions?</label>
                <div className="relative">
                    <textarea 
                      rows={3}
                      placeholder="E.g. Weight loss, Back pain, Beginner..."
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900 resize-none"
                    />
                    <FiActivity className="absolute left-4 top-6 text-slate-400" />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={pending}
                className="w-full py-4 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-slate-900 hover:to-slate-900 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 shadow-lg shadow-purple-500/30 mt-4 border-2 border-yellow-400"
              >
                {pending ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Request</span>
                    <FiSend className="text-yellow-300" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactComponent;