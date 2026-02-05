"use client";
import React from "react";
// ADDED: FiCalendar and FiMusic imports for the new stats
import { FiUsers, FiActivity, FiAward, FiCheckCircle, FiArrowRight, FiCalendar, FiMusic } from "react-icons/fi";

const stats = [
  {
    icon: <FiUsers size={22} />,
    number: "500+",
    label: "HAPPY CLIENTS",
  },
  {
    icon: <FiActivity size={22} />,
    number: "1500+",
    label: "CLASSES CONDUCTED",
  },
  {
    icon: <FiAward size={22} />,
    number: "15+",
    label: "CERTIFICATIONS",
  },
  // ADDED: New Stats
  {
    icon: <FiCalendar size={22} />,
    number: "5+",
    label: "YEARS EXP.",
  },
  {
    icon: <FiMusic size={22} />,
    number: "50+",
    label: "EVENTS DONE",
  },
];

const growthReasons = [
  "Personalized Diet Plans",
  "Ladies Special Batches",
  "Weekend Power Yoga",
  "Monthly BMI Analysis",
  "High-Energy Zumba Sessions",
  "Supportive Community",
];

const Achievements = () => {

  const handleJoinFamily = () => {
    const phoneNumber = "918087409501"; 
    
    const message = `Dear Team Zest Zumba Studio,

I recently visited your website and saw your amazing growth and achievements. I am interested in joining the Zest Family!

Kindly guide me through the admission process.

Looking forward to joining the rhythm!

Thank you.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="achievements" className="py-12 md:py-20 relative bg-slate-50 overflow-hidden">
      
      {/* Background Decor Blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-600 font-bold tracking-widest uppercase text-[10px] mb-3">
            ACHIEVEMENTS
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3 font-heading leading-tight">
            Making an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">Impact</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Numbers that speak for our dedication, passion, and the energy we bring to every session.
          </p>
        </div>

        {/* STATS CARDS */}
        {/* CHANGED: Updated grid to fit 5 items (lg:grid-cols-5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-6 text-center shadow-xl shadow-purple-900/5 border border-purple-50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-1 font-heading">
                {stat.number}
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* WHY WE ARE GROWING CONTAINER */}
        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl shadow-purple-900/5 border border-purple-50 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* CHECKLIST SECTION */}
          <div className="flex-1 w-full">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 font-heading">
              Why we are growing?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {growthReasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <FiCheckCircle className="text-yellow-400 flex-shrink-0" size={18} />
                  <span className="text-slate-700 font-medium text-sm">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA SECTION */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left lg:border-l lg:border-slate-100 lg:pl-10">
             <p className="text-slate-600 font-medium mb-4 text-sm md:text-base">
                Ready to be part of the success story?
             </p>
             <button 
               onClick={handleJoinFamily}
               className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold text-sm shadow-lg shadow-purple-200 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
             >
                <span>Join The Family</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;