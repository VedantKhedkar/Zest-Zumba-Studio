"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import clsx from 'clsx';
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-fredoka',
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  // --- CONFIGURATION: DEFINE YOUR IMAGES HERE ---
  const LOGO_LANDING = "/images/logowhite.png"; // Image shown at the top (Big)
  const LOGO_SCROLLED = "/images/logo11.png";  // Image shown when scrolled (Small)
  // ---------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
   
    { 
      name: 'Gallery', 
      href: '#image-gallery',
      dropdown: [
        { name: 'Photo Gallery', href: '#image-gallery' },
        { name: 'Video Gallery', href: '#shorts-gallery' },
        { name: 'Clients Testimonial', href: '#Testimonial-Gallery' },
      ]
    },
      { name: 'Contact', href: '#connect' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav 
        className={clsx(
          "fixed w-full z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) border-b",
          isScrolled 
            ? "bg-white/90 backdrop-blur-lg py-2 shadow-lg border-purple-100/50" 
            : "bg-transparent py-4 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* BRAND LOGO CONTAINER */}
            <div className="flex-shrink-0 z-50">
              <Link href="/" className="group flex items-center gap-1">
                
                {/* 1. LOGO IMAGE - DYNAMIC SOURCE & SIZE */}
                <div className={clsx(
                  "relative transition-all duration-500", 
                  // Dimensions: Bigger at top, slightly smaller when scrolled
                  isScrolled ? "w-16 h-14" : "w-18 h-18"
                )}>
                  <Image 
                    // SWITCHES IMAGE BASED ON SCROLL STATE
                    src={isScrolled ? LOGO_SCROLLED : LOGO_LANDING}
                    alt="Zest Zumba Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* 2. LOGO TEXT */}
             <div className={clsx("flex flex-col items-center leading-none -skew-x-6 origin-bottom", fredoka.className)}>
                  
                  {/* Top Line: Zest Zumba */}
                  <div className={clsx(
                    "flex gap-1.5 font-bold transition-all duration-500",
                    // CHANGED: Increased Sizes (2xl -> 4xl for top, xl -> 2xl for scroll)
                    isScrolled ? "text-2xl" : "text-4xl"
                  )}>
                    <span className="text-[#ec4899] drop-shadow-sm">Zest</span>
                    <span className="text-[#f59e0b] drop-shadow-sm">Zumba</span>
                  </div>
                  
                  {/* Bottom Line: Studio */}
                  <span className={clsx(
                    "text-[#0ea5e9] font-bold uppercase w-full text-center ml-1 transition-all duration-500", 
                    // CHANGED: Increased tracking to [1.2em] to satisfy full width
                    isScrolled 
                        ? "text-[0.6rem] tracking-[1.1em]" 
                        : "text-[0.7rem] tracking-[1.2em]"
                  )}>
                     Studio
                  </span>
                </div>
              </Link>
            </div>
            
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <div className="relative">
                      <button className={clsx(
                        "flex items-center px-4 py-2 rounded-full font-bold text-sm transition-all duration-300", 
                        isScrolled 
                          ? "text-slate-600 hover:bg-purple-50 hover:text-purple-700" 
                          : "text-white/90 hover:bg-white/10 hover:text-yellow-400"
                      )}>
                        {link.name}
                        <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      <div className="absolute left-1/2 -translate-x-1/2 pt-6 w-60 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 ring-4 ring-black/5 p-2">
                          {link.dropdown.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              href={subItem.href} 
                              className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-600 hover:bg-purple-50 hover:text-purple-700 transition-all"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      className={clsx(
                        "px-4 py-2 rounded-full font-bold text-sm transition-all duration-300", 
                        isScrolled 
                          ? "text-slate-600 hover:bg-purple-50 hover:text-purple-700" 
                          : "text-white/90 hover:bg-white/10 hover:text-yellow-400"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="ml-6 pl-6 border-l border-gray-200/20">
                <Link 
                  href="#form" 
                  className={clsx(
                    "group flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wide shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95",
                    "bg-yellow-400 text-purple-900 hover:bg-white hover:text-purple-700 hover:shadow-yellow-400/50"
                  )}
                >
                  <span>Book Now</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* MOBILE HAMBURGER */}
            <div className="md:hidden z-50">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={clsx(
                  "p-2 rounded-full transition-colors", 
                  isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
                )}
              >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={clsx("fixed inset-0 bg-slate-900/60 backdrop-blur-[2px] z-40 md:hidden transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}
        onClick={() => setIsOpen(false)}
      />

      <div className={clsx(
        "fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 transform transition-transform duration-500 cubic-bezier(0.33, 1, 0.68, 1) md:hidden flex flex-col shadow-2xl", 
        "bg-white/95 backdrop-blur-xl",
        "border-l border-slate-200", 
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>

        {/* Mobile Header */}
        <div className="flex items-center justify-between p-6 pl-8 border-b border-slate-100">
             <div className="flex items-center gap-1">
                 {/* ZOOMED MOBILE LOGO */}
                 <div className="relative w-14 h-14">
                    <Image 
                      // Inside the mobile drawer (white bg), we usually want the "Scrolled/Colored" logo
                      src={LOGO_SCROLLED} 
                      alt="Logo" 
                      fill 
                      className="object-contain" 
                    />
                 </div>
                 
                 <div className={clsx("flex flex-col items-center leading-none -skew-x-6 origin-bottom", fredoka.className)}>
                    <div className="flex gap-1 text-xl font-bold">
                      <span className="text-[#ec4899]">Zest</span>
                      <span className="text-[#f59e0b]">Zumba</span>
                    </div>
                    <span className="text-[#0ea5e9] text-[0.6rem] font-bold uppercase tracking-[0.6em] ml-1 w-full text-center">
                       Studio
                    </span>
                 </div>
             </div>
             <button 
                onClick={() => setIsOpen(false)} 
                className="p-2.5 bg-white rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm border border-slate-100"
             >
                <FiX size={22} />
             </button>
        </div>

        {/* Links Container */}
        <div className="p-6 pl-8 space-y-3 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="bg-white rounded-2xl overflow-hidden mb-2 border border-slate-100 shadow-sm">
                  <button 
                    onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)} 
                    className="w-full flex justify-between items-center px-6 py-4 font-bold text-slate-800 hover:text-purple-700 transition-colors"
                  >
                    {link.name}
                    <FiChevronDown className={clsx("transition-transform duration-300 text-purple-400", mobileGalleryOpen ? "rotate-180" : "")}/>
                  </button>
                  <div className={clsx("transition-all duration-300 ease-in-out overflow-hidden bg-slate-50/50", mobileGalleryOpen ? "max-h-64 opacity-100 py-2" : "max-h-0 opacity-0")}>
                    {link.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href} 
                        onClick={handleLinkClick} 
                        className="block px-8 py-3 text-sm font-semibold text-slate-500 hover:text-purple-700 hover:bg-purple-50 border-l-4 border-transparent hover:border-yellow-400 transition-all"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  href={link.href} 
                  onClick={handleLinkClick} 
                  className="block px-6 py-4 text-lg font-bold text-slate-700 hover:bg-purple-50/50 hover:text-purple-700 hover:shadow-sm rounded-2xl transition-all border border-transparent hover:border-purple-100/30"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        {/* MOBILE FOOTER / CTA */}
            <div className="p-6 pl-8 border-t border-slate-100 bg-white/50">
           <Link 
             // CHANGED: Directs to #form for immediate scrolling on mobile
             href="#form" 
             onClick={handleLinkClick}
             className="flex justify-center items-center gap-2 w-full text-center py-4 rounded-2xl font-black text-purple-900 bg-yellow-400 shadow-lg shadow-yellow-400/20 active:scale-95 hover:bg-yellow-300 hover:shadow-yellow-400/40 transition-all duration-300 uppercase tracking-wide text-sm"
           >
             Book Now
             <FiArrowRight />
           </Link>
           <p className="text-center text-[10px] font-bold text-slate-300 mt-5 uppercase tracking-widest">
              © 2026 Zest Zumba Studio
           </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;