"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
// Import SiGoogle for the Google Profile icon
import { SiGoogle } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 pt-20 pb-8 relative border-t border-purple-100/50">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <div className="max-w-4xl mx-auto mb-16 relative rounded-[3rem] shadow-2xl shadow-purple-500/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/50 overflow-hidden group">
                
                <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-fuchsia-200 to-orange-200"></div>
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 p-10 md:p-14 text-center">
                    <h2 className="text-4xl font-black text-black mb-4 tracking-tight font-heading drop-shadow-sm">
                        Connect with Us
                    </h2>
                    <p className="text-black/90 text-lg mb-10 max-w-2xl mx-auto font-medium">
                        Follow us on social media for the latest updates, promotions, and more.
                    </p>

                    {/* Animated Social Icons */}
                    <div className="flex justify-center gap-6">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/zestzumbawithseema" className="w-16 h-16 rounded-2xl bg-white text-fuchsia-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-orange-500 hover:to-purple-600">
                            <FaInstagram size={30} />
                        </a>
                        
                        {/* Facebook */}
                        <a href="#" className="w-16 h-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#1877F2]">
                            <FaFacebookF size={28} />
                        </a>
                        
                        {/* YouTube */}
                        <a href="#" className="w-16 h-16 rounded-2xl bg-white text-red-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#FF0000]">
                            <FaYoutube size={28} />
                        </a>

                        {/* Google Profile - ADDED NEXT TO YOUTUBE */}
                        <a href="https://share.google/G1Kux4KrjwSLDOzQz" className="w-16 h-16 rounded-2xl bg-white text-blue-500 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#4285F4]">
                            <SiGoogle size={28} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-10 opacity-40"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-600 font-medium">
                
                <div className="text-center md:text-left order-3 md:order-1">
                    <p>© {new Date().getFullYear()} Zest Zumba Studio. All rights reserved.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 order-1 md:order-2">
                    {['Privacy Policy', 'Terms of Service', 'Return Policy'].map((item) => (
                        <Link key={item} href="#" className="hover:text-fuchsia-600 transition-colors relative group">
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-fuchsia-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <div className="text-center md:text-right flex items-center gap-2 order-2 md:order-3">
                    <span className="opacity-70 text-sm">Developed by</span>
                    <a 
                        href="https://bizonance.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center hover:opacity-80 transition-opacity hover:scale-105 duration-300"
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
        
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-500 via-fuchsia-500 to-yellow-600"></div>
    </footer>
  );
};

export default Footer;