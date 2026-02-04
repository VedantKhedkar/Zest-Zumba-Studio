"use client";
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const headTrainer = {
  name: "Seema Behare",
  role: "Founder & Head Instructor",
  // High-quality female fitness trainer image
  image:   "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  experience: "5+ Years Experience",
  bio: "Seema Behare is the Founder and Lead Instructor of Zest Zumba Studio, dedicated to transforming fitness into a fun, energetic, and confidence-boosting experience. With a passion for dance and a strong commitment to health and wellness, she has helped hundreds of students enjoy fitness while achieving their personal goals.",
  highlights: ["High-Energy Sessions", "Weight Loss Expert", "Confidence Building"]
};

const TrainersSection = () => {
  return (
    // CHANGED: Added bg-purple-50 for a subtle section background color
    <section id="trainers" className="py-24 bg-purple-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-yellow-300/20 to-purple-500/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* CHANGED: Heading Style - Purple Text, Yellow Border */}
        <div className="text-center mb-16">
            <span className="inline-block py-2 px-8 rounded-full border-2 border-yellow-400 text-purple-500 font-bold tracking-widest uppercase text-sm bg-white shadow-sm">
              TRAINER PROFILE
            </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: INFO */}
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-2 tracking-tight">
              {headTrainer.name}
            </h2>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">
                  {headTrainer.role}
                </p>
                <span className="hidden md:block w-2 h-2 rounded-full bg-slate-300"></span>
                <p className="text-slate-500 font-semibold">{headTrainer.experience}</p>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
              {headTrainer.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {headTrainer.highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-purple-100 hover:border-purple-300 transition-colors shadow-sm">
                  <FaCheckCircle className="text-purple-600 text-lg flex-shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE (RECTANGULAR CARD) */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end items-center">
             
             {/* Main Image Container */}
             <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white z-10 bg-slate-200 group transition-all duration-500 hover:-translate-y-2">
                <Image
                  src={headTrainer.image}
                  alt={headTrainer.name}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* CHANGED: Fixed Straight Capsule (No Rotate, No Hover Tilt) */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-purple-50">
                   <p className="font-black text-3xl text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-yellow-500">5+</p>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Exp.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrainersSection;