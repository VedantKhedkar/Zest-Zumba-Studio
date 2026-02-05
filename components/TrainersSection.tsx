"use client";
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const headTrainer = {
  name: "Seema Behare",
  role: "Founder & Head Instructor",
  image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  experience: "5+ Years Experience",
  bio: "Seema Behare is the Founder and Lead Instructor of Zest Zumba Studio, dedicated to transforming fitness into a fun, energetic, and confidence-boosting experience. With a passion for dance and a strong commitment to health and wellness, she has helped hundreds of students enjoy fitness while achieving their personal goals.",
  highlights: ["High-Energy Sessions", "Weight Loss Expert", "Confidence Building"]
};

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-12 md:py-24 bg-purple-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-yellow-300/20 to-purple-500/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-10 md:mb-16">
            <span className="inline-block py-2 px-8 rounded-full border-2 border-yellow-400 text-purple-500 font-bold tracking-widest uppercase text-xs md:text-sm bg-white shadow-sm">
              TRAINER PROFILE
            </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: INFO */}
          <div className="order-2 lg:order-1">
            {/* UPDATED: Name with Purple-600 to Yellow-400 Gradient */}
            <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500 drop-shadow-sm">
              {headTrainer.name}
            </h2>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
                {/* Role: Solid Slate-900 (Dark) */}
                <p className="text-lg md:text-xl font-bold text-slate-900">
                  {headTrainer.role}
                </p>
                <span className="hidden md:block w-2 h-2 rounded-full bg-slate-300"></span>
                <p className="text-slate-500 font-semibold text-sm md:text-base">{headTrainer.experience}</p>
            </div>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-justify">
              {headTrainer.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 md:mb-10">
              {headTrainer.highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-purple-100 hover:border-purple-300 transition-colors shadow-sm">
                  <FaCheckCircle className="text-purple-600 text-lg flex-shrink-0" />
                  <span className="font-semibold text-slate-800 text-xs md:text-sm">{item}</span>
                </div>
              ))}
            </div> 

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="font-bold text-slate-900 text-sm uppercase tracking-wide">Connect:</p>
              
              <div className="flex justify-center gap-4">
                  <a href="https://www.instagram.com/seemabehare?igsh=M2xwY3hhZm03Yzl6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-fuchsia-600 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-orange-500 hover:to-purple-600 border border-purple-100">
                      <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://www.facebook.com/share/1AdEqE8Dzg/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#1877F2] border border-blue-100">
                      <FaFacebookF className="text-lg" />
                  </a>
                  <a href="https://wa.me/+918087409501" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-green-500 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:text-white hover:bg-green-500 border border-green-100">
                      <FaWhatsapp className="text-xl" />
                  </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end items-center">
              
              <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-[6px] md:border-[8px] border-white z-10 bg-slate-200 group transition-all duration-500 hover:-translate-y-2">
                <Image
                  src={headTrainer.image}
                  alt={headTrainer.name}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 rounded-[2rem] md:rounded-[2.5rem]"
                />
                
                {/* Years Exp Badge */}
                <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 bg-white px-4 py-2 md:px-6 md:py-4 rounded-2xl shadow-xl border-2 border-purple-50 z-20 flex flex-col items-center">
                   <p className="font-black text-l md:text-1xl text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-yellow-500 leading-none">Certified Aerobic Trainer</p>
                   <p className="text-[9px] md:text-[10px] text-slate-500 font-bold  tracking-wider mt-0.5">(Indian Institute of Fitness Courses)</p>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrainersSection;