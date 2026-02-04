"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import clsx from "clsx";

const testimonials = [
  {
    name: "Priya Das",
    role: "Homemaker",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quote: "Finally found a gym where I don't feel judged. The vibe is so welcoming and the trainers really care about your form.",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Amit Deshmukh",
    role: "IT Professional",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    quote: "Great stress buster after a long day at work. The community is super supportive and the Zumba sessions are a blast!",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Sneha Patil",
    role: "Dancer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    quote: "I love the choreography! It's modern, energetic, and beginner-friendly too. Highly recommend for anyone looking to move.",
    color: "from-sky-400 to-blue-600",
  },
  {
    name: "Vikram Singh",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    quote: "The Yoga sessions here have improved my flexibility immensely. It's the perfect balance to the high-intensity cardio.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "Megha Ghosh",
    role: "Student",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    quote: "Professional trainers who focus on every beat and move. It feels less like a workout and more like a party!",
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Rohan Mehta",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    quote: "Energy here is unmatched! I've lost 5kg in 2 months just by dancing my heart out. Best decision ever.",
    color: "from-yellow-400 to-lime-500",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="Testimonial-Gallery" className="py-12 md:py-24 relative overflow-hidden bg-slate-50">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }
        
        .marquee-container:hover .animate-scroll,
        .marquee-container:active .animate-scroll {
          animation-play-state: paused;
        }

        /* Hides scrollbar for Chrome, Safari and Opera on Desktop */
        .marquee-container::-webkit-scrollbar {
          display: none;
        }

        /* Hides scrollbar for IE, Edge and Firefox on Desktop */
        .marquee-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="max-w-full">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-6">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 font-heading leading-tight">
                Real Stories. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400 ">
                    Real Transformations.
                </span>
            </h3>
            
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-slate-100">
                <div className="flex gap-1 text-yellow-400">
                    {[1,2,3,4,5].map(i => <FaStar key={i} size={14} />)}
                </div>
                <span className="text-sm font-bold text-slate-600">
                    4.9/5 Average Rating
                </span>
            </div>
        </div>

        {/* MARQUEE SLIDER CONTAINER */}
        <div className="marquee-container relative w-full overflow-x-auto touch-pan-x">
            {/* Desktop Gradient Masks */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

            {/* THE MOVING TRACK */}
            <div className="animate-scroll space-x-6 md:space-x-8 px-6 md:px-8 pb-8 md:pb-12">
                {[...testimonials, ...testimonials].map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative w-[300px] md:w-[450px] flex-shrink-0 bg-white p-6 md:p-8 pt-10 md:pt-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                    >
                        <div className={clsx("absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r", item.color)}></div>

                        <div className="absolute top-6 md:top-8 right-6 md:right-8 text-slate-100 group-hover:text-slate-200 transition-colors">
                            <FaQuoteRight size={32} className="md:w-[40px] md:h-[40px]" />
                        </div>

                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
                            <div className={clsx("p-[2px] rounded-full bg-gradient-to-br", item.color)}>
                                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                    <Image 
                                        src={item.image} 
                                        alt={item.name} 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-base md:text-lg leading-tight">{item.name}</h4>
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400">{item.role}</p>
                            </div>
                        </div>

                        <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed relative z-10">
                            "{item.quote}"
                        </p>

                        <div className="mt-4 md:mt-6 flex gap-1 text-yellow-400/30 group-hover:text-yellow-400 transition-colors duration-300">
                            {[1,2,3,4,5].map(i => <FaStar key={i} size={12} />)}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;