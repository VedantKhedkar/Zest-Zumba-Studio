"use client";
import Image from "next/image";
import { FiActivity, FiUsers, FiCheckCircle } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section id="about" className="section-container py-16 md:py-24 relative overflow-hidden bg-white">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 to-transparent -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-yellow-50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <div className="order-2 lg:order-1">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-50 text-purple-500 font-bold text-xs md:text-sm tracking-widest uppercase">
            Our Philosophy
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight font-heading">
            More Than Just a<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800"> Workout</span> it's
            <span className="text-yellow-500"> Golden Calm</span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
            At Zest Zumba Studio, we believe fitness should be infectious, empowering, and holistic. We aren't just a gym; we are a high-vibrancy sanctuary where your transformation begins the moment the beat drops.
          </p>
          
          <div className="space-y-4 mb-10">
            {['Expert-led Latin dance fitness', 'Restorative Yoga for mental clarity', 'Results-driven weight loss programs'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                <FiCheckCircle className="text-yellow-400 flex-shrink-0 mt-0.5" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-100 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-4 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                <FiActivity size={22} className="md:w-6 md:h-6" />
              </div>
              <h4 className="font-bold text-lg md:text-xl mb-2 text-slate-800 font-heading">Certified Coaches</h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Elite instructors dedicated to your physical and mental growth.</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-yellow-200 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center text-yellow-500 mb-4 shadow-sm group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all">
                <FiUsers size={22} className="md:w-6 md:h-6" />
              </div>
              <h4 className="font-bold text-lg md:text-xl mb-2 text-slate-800 font-heading">Global Community</h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Join a supportive tribe that celebrates every victory with you.</p>
            </div>
          </div>
        </div>

        {/* IMAGE VISUAL */}
        <div className="order-1 lg:order-2 relative flex justify-center">
            
            {/* Abstract Backdrop Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-purple-100 to-yellow-100 rounded-full blur-3xl -z-10"></div>
            
            {/* Main Image Container */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-purple-900/10 border-[8px] md:border-[12px] border-white">
                <Image
                    src="/images/zz4.jpg" 
                    alt="Wellness Steps - Balance body, calm mind"
                    fill
                    className="object-cover"
                    priority
                />
                
                {/* Floating Themed Badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 md:px-4 md:py-2 bg-yellow-400 text-purple-900 font-black text-[9px] md:text-[10px] uppercase tracking-widest rounded-full shadow-lg z-10">
                  Yoga & Flow
                </div>

                {/* Glass Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-purple-900/80 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white shadow-xl z-10">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-400 flex items-center justify-center text-purple-900 shrink-0">
                        <FiActivity size={18} className="md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="font-black text-base md:text-lg tracking-tight font-heading">Ultimate Equilibrium</p>
                        <p className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest">Balance • Power • Recovery</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;