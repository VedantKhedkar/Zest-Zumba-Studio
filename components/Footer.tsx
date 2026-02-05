"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'; 

const Footer = () => {
  return (
    <footer id='connect' className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 pt-12 md:pt-20 pb-8 relative border-t border-purple-100/50">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* 1. COLORFUL MODERN CARD */}
            <div className="max-w-4xl mx-auto mb-12 md:mb-16 relative rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-purple-500/30 transform transition-all duration-500 hover:scale-[1.01] md:hover:scale-[1.02] hover:shadow-purple-500/40 overflow-hidden group">
                
                {/* Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-fuchsia-200 to-orange-200"></div>
                
                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-yellow-300/20 rounded-full blur-2xl md:blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-14 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-black mb-3 md:mb-4 tracking-tight font-heading drop-shadow-sm">
                        Connect with Us
                    </h2>
                    <p className="text-black/80 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto font-medium leading-snug">
                        Follow us on social media for the latest updates, promotions, and more.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 md:gap-6">
                        <a href="https://www.instagram.com/zestzumbawithseema" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white text-fuchsia-600 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-orange-500 hover:to-purple-600">
                            <FaInstagram className="text-xl md:text-3xl" />
                        </a>
                        <a href="#" className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#1877F2]">
                            <FaFacebookF className="text-lg md:text-2xl" />
                        </a>
                        <a href="#" className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white text-red-600 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#FF0000]">
                            <FaYoutube className="text-lg md:text-2xl" />
                        </a>
                        <a href="https://share.google/G1Kux4KrjwSLDOzQz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110">
                            <FcGoogle className="text-xl md:text-3xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-8 md:mb-10 opacity-30"></div>

            {/* 2. BOTTOM BAR INFORMATION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm text-slate-600 font-medium text-center md:text-left">
                
                {/* Copyright (Left) */}
                <div className="order-1 md:col-span-1">
                    <p className="opacity-80 text-xs md:text-sm">© {new Date().getFullYear()} Zest Zumba Studio. <br className="md:hidden" /> All rights reserved.</p>
                </div>

                {/* Policies - CAPSULES (Center) */}
                <div className="order-2 md:col-span-1 flex flex-wrap justify-center gap-3">
                    {['Privacy Policy', 'Terms of Service', 'Return Policy'].map((item) => (
                        <Link 
                            key={item} 
                            href="#" 
                            className="px-4 py-1.5 rounded-full border border-purple-200 bg-white/50 text-[10px] md:text-xs font-semibold text-slate-600 hover:bg-purple-100 hover:text-purple-800 transition-all hover:border-purple-300 shadow-sm whitespace-nowrap"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Developer Credit (Right) */}
                {/* CHANGED: 'flex-col' for mobile, 'md:flex-row' for desktop to keep them in one line */}
                <div className="order-3 md:col-span-1 flex flex-col md:flex-row items-center md:justify-end gap-1 md:gap-2">
                    <span className="opacity-60 text-[10px] md:text-xs font-medium whitespace-nowrap">Developed by</span>
                    <a 
                        href="https://bizonance.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block hover:opacity-80 transition-opacity"
                    >
                        <Image 
                            src="/images/bizonance-logo.png" 
                            alt="Bizonance" 
                            width={100} 
                            height={30} 
                            className="object-contain h-6 w-auto" 
                        />
                    </a>
                </div>

            </div>
        </div>
        
        {/* Bottom Decorative Strip */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-500 via-fuchsia-500 to-yellow-600"></div>
    </footer>
  );
};

export default Footer;