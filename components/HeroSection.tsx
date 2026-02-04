"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/zz1.jpg"
          alt="Zest Zumba Studio Hero"
          fill
          className="object-cover object-top" // Keeps focus on top part of image
          priority
        />
        
        {/* Layer 1: General Darkening for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Layer 2: Top Gradient to separate Navbar from Background Text */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10"></div>

        {/* Layer 3: Bottom Gradient to make white text pop */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Content - Adjusted Position: Higher than before, but safe from top edge */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-24 md:mt-32">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 drop-shadow-2xl">
          FEEL THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">RHYTHM</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-2xl font-bold mb-8 text-yellow-400 tracking-widest uppercase drop-shadow-lg">
          Move · Breathe · Dance · Transform
        </p>
        
        {/* Description */}
        <p className="text-base md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
          Ignite your passion for fitness with high-energy Zumba beats and find your inner calm with restorative Yoga.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Primary Button */}
          <a 
            href="#packages" 
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold text-base shadow-lg shadow-purple-500/30 transition-all transform hover:-translate-y-1 active:scale-95 border border-purple-400/20"
          >
            <span>View Packages</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Button */}
          {/* <a 
            href="#about" 
            className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border-2 border-yellow-400 text-yellow-400 font-bold text-base hover:bg-yellow-400 hover:text-purple-900 transition-all duration-300 shadow-md"
          >
            Learn More
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;