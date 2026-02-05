"use client";
import React, { useState } from "react";
import { FiPhone, FiMapPin, FiSend, FiClock, FiCalendar, FiUser, FiActivity, FiCheck, FiMail } from "react-icons/fi";
import clsx from "clsx";

const ContactComponent = () => {
  const [pending, setPending] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    dateTime: "",
    category: "Zumba for Female", // Default value matching first option
    goals: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    // Simulated API delay
    setTimeout(() => {
      setPending(false);
      setShowToast(true);

      // WhatsApp Redirection Logic
      const phoneNumber = "918087409501"; // Your WhatsApp Number
      
      // Formatting the date for better readability
      const formattedDate = new Date(formData.dateTime).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      // Constructing the message based on your template
     const message = `Dear Team Zest Zumba Studio,

      I recently visited your website and would like to meet personally for a one-on-one interaction. 
      Please confirm my appointment for the given date and time. For your reference, I have shared my details below:

      *Name:* ${formData.fullName}
      *Mobile:* ${formData.mobile}
      *Class Category:* ${formData.category}
      *Preferred Date:* ${formattedDate}
      *Specific Goals:* ${formData.goals}

      Looking forward to joining the rhythm!

      Thank you.`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    }, 1500); 
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gradient-to-br from-purple-50 via-white to-yellow-50 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-[100px] -z-10" />
      
      {/* TOAST NOTIFICATION */}
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
              <h4 className="font-bold text-slate-800 text-sm">Redirecting to WhatsApp...</h4>
              <p className="text-slate-500 text-xs">Please send the message to confirm.</p>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="space-y-6 md:space-y-10">
            <div>
             <div className="flex items-center gap-2 md:gap-3 text-purple-400 font-extrabold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3">
                    {/* Branding Line */}
                    <span className="w-6 md:w-8 h-[3px] bg-yellow-400 rounded-full"></span>
                    <h3>JOIN THE MOVEMENT</h3>
                  </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight font-heading leading-tight">
                Ready to Sweat? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-yellow-400">
                  Book Your Spot!
                </span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md font-medium">
                Whether you are a beginner or a pro, we have a spot for you. Fill out the form to schedule your first session or give us a call directly.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 md:space-y-8">
              {[
                { 
                    icon: <FiMapPin />, 
                    label: "Studio Location", 
                    value: "Opp Hotel Rangoli Pearl, Nawathe Square, Amravati 444607" 
                },
                { 
                    icon: <FiPhone />, 
                    label: "Call for Enquiry", 
                    value: "+91 8087409501"
                },
                { 
                    icon: <FiMail />, 
                    label: "Email Us", 
                    value: "zestzumbastudio@gmail.com" 
                },
                { 
                    icon: <FiClock />, 
                    label: "Studio Hours", 
                    value: "Mon - Sat: 6:00 AM - 6:00 PM" 
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-5 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white flex items-center justify-center text-purple-600 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all duration-300 shadow-md border border-purple-100 group-hover:border-yellow-400 shrink-0">
                    <span className="text-lg md:text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-base md:text-lg mb-0.5 md:mb-1">{item.label}</p>
                    <p className="text-slate-500 text-sm md:text-base font-medium whitespace-pre-line leading-snug">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Appointment Form */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-purple-500/10 to-yellow-500/10 rounded-[1.5rem] md:rounded-[2.5rem] blur-2xl" />
            
            <form id="form"
              onSubmit={handleSubmit}
              className="scroll-mt-28 relative bg-white border border-white/50 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl shadow-purple-900/5 space-y-4 md:space-y-6"
            >
              <div className="text-center mb-4 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-black text-purple-700 uppercase tracking-wide">
                      Book Appointment
                  </h3>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <div className="relative">
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 md:pl-12 pr-4 md:pr-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900 text-sm md:text-base"
                      required
                    />
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Mobile Number & Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Mobile Number</label>
                  <div className="relative">
                      <input 
                        type="tel" 
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        className="w-full pl-10 md:pl-12 pr-4 md:pr-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900 text-sm md:text-base"
                        required
                      />
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
                {/* Appointment Date & Time */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-purple-700 ml-1">Date & Preferred Time</label>
                  <div className="relative">
                      <input 
                        type="datetime-local" 
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        min={new Date().toISOString().slice(0, 16)}
                        className="w-full pl-10 md:pl-12 pr-4 md:pr-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900 cursor-pointer text-sm md:text-base uppercase"
                        required
                      />
                      <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                  </div>
                </div>
              </div>

              {/* Class Category */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-purple-700 ml-1">Class Category</label>
                <div className="relative">
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900 appearance-none cursor-pointer text-sm md:text-base"
                  >
                    <option>Zumba for Female</option>
                    <option>Zumba for Kids</option>
                    <option>Personalized Diet Plans</option>
                    <option>Yoga and Meditation</option>
                    <option>Personal Fitness Training</option>
                    <option>Book Consultation</option>
                    <option>Aerobics</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Goals / Conditions */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Specific goals or health conditions?</label>
                <div className="relative">
                    <textarea 
                      rows={2}
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="e.g. Weight loss, Beginner, etc."
                      className="w-full pl-10 md:pl-12 pr-4 md:pr-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-purple-50/50 border-none focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-slate-900 resize-none text-sm md:text-base"
                      required
                    />
                    <FiActivity className="absolute left-4 top-6 text-slate-400" />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={pending}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-slate-900 hover:to-slate-900 text-white rounded-xl md:rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 shadow-lg shadow-purple-500/30 mt-2 md:mt-4 border-2 border-yellow-400 text-sm md:text-base"
              >
                {pending ? (
                  <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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