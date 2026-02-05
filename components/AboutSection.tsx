"use client";
import Image from "next/image";
import { FiActivity, FiUsers, FiCheckCircle, FiAward, FiHeart, FiMusic } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section id="about" className="section-container py-16 md:py-24 relative overflow-hidden bg-white">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 to-transparent -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-yellow-50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* TEXT CONTENT */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-purple-50 text-purple-600 font-bold text-xs md:text-sm tracking-widest uppercase border border-purple-100">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            Welcome to Zest Zumba Studio
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight font-heading">
            More Than Just a<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500"> Workout.</span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
            At <strong>Zest Zumba Studio</strong>, we believe fitness should be a celebration, not a chore. Our classes are designed to bring people together through high-energy music and easy-to-follow dance moves. Whether you are a beginner or a pro dancer, our vibe is inclusive, supportive, and absolutely electric.
          </p>

          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
             We focus on <strong>Mental Happiness</strong> along with Physical Fitness. Join us to burn calories, relieve stress, and make lifelong friends in a judgment-free environment.
          </p>

          {/* FOUNDER & STATS BLOCK */}
          <div className="grid grid-cols-3 gap-4 mb-10 border-y border-slate-100 py-6">
             <div className="text-center">
                <h4 className="text-2xl md:text-3xl font-black text-purple-700">500+</h4>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Happy Clients</p>
             </div>
             <div className="text-center border-l border-slate-100">
                <h4 className="text-2xl md:text-3xl font-black text-yellow-500">5+</h4>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Years Exp.</p>
             </div>
             <div className="text-center border-l border-slate-100">
                <h4 className="text-2xl md:text-3xl font-black text-purple-700">50+</h4>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Events Done</p>
             </div>
          </div>
          
          {/* COMBINED CHECKLIST (Yours + Image Content) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {[
              'Expert-led Latin dance fitness', 
              'Restorative Yoga for mental clarity', 
              'Results-driven weight loss programs',
              'Certified Instructors',
              '800+ Calories Burn per session',
              'Non-Stop Bollywood & Latin',
              'AC Studio & Premium Sound'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                <FiCheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* WE ALSO OFFER TAGS */}
          <div className="mb-10">
             <h5 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-4">We Also Offer:</h5>
             <div className="flex flex-wrap gap-2">
                {[
                  "Kids Batches", "Garba Workshops", "Wedding Sangeet", "Corporate Events", 
                  "Daily Diet Plan", "Online Zumba Workshop", "Training & Certificate", "Online Consultation"
                ].map((tag, i) => (
                   <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-xs font-semibold hover:bg-purple-50 hover:text-purple-700 hover:border-purple-100 transition-colors cursor-default">
                      {tag}
                   </span>
                ))}
             </div>
          </div>
        </div>

        {/* IMAGE VISUAL - Keeping your UI Style */}
        <div className="order-1 lg:order-2 relative flex flex-col justify-center lg:sticky lg:top-24 gap-8">
            
            {/* Abstract Backdrop Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-purple-100 to-yellow-100 rounded-full blur-3xl -z-10"></div>
            
            {/* Main Image Container */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-purple-900/10 border-[8px] md:border-[12px] border-white">
                <Image
                    src="/images/zz4.jpg" 
                    alt="Seema Behare - Zest Zumba Founder"
                    fill
                    className="object-cover"
                    priority
                />
                
                {/* Floating Themed Badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 md:px-4 md:py-2 bg-yellow-400 text-purple-900 font-black text-[9px] md:text-[10px] uppercase tracking-widest rounded-full shadow-lg z-10">
                  Dance & Fitness
                </div>

                {/* Glass Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-purple-900/80 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white shadow-xl z-10">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-400 flex items-center justify-center text-purple-900 shrink-0">
                        <FiHeart size={18} className="md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="font-black text-base md:text-lg tracking-tight font-heading">Mental Happiness</p>
                        <p className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest">Physical Fitness • Community</p>
                      </div>
                    </div>
                </div>
            </div>

            {/* FEATURE CARDS (Awards & Founder) - Moved below image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-3">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
                      <FiUser size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 leading-tight">Seema Behare</h4>
                      <p className="text-xs text-purple-600 font-bold uppercase">Founder</p>
                   </div>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed italic">"Making fitness fun, one beat at a time!"</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-yellow-200 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-3">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-yellow-500 shadow-sm">
                      <FiAward size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 leading-tight">Award Winning</h4>
                      <p className="text-xs text-yellow-600 font-bold uppercase">Excellence</p>
                   </div>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                   Community Zumba Star, Best Trainer of The Year & Excellence Awards.
                </p>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;