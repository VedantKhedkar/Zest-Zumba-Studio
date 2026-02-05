"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiArrowRight } from "react-icons/fi";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

// --- PROFESSIONAL STOCK-QUALITY IMAGES ---
const galleryImages = [
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",  
];

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const previewImages = galleryImages.slice(0, 8);

  useEffect(() => {
    if (selectedImageIndex !== null || showAllGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImageIndex, showAllGallery]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    /* UPDATED: py-6 for mobile spacing and scroll-mt-20 to prevent header overlap */
    <section 
      id="image-gallery" 
      className="py-6 md:py-24 bg-gradient-to-b from-indigo-50/60 via-white to-blue-50/60 relative overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
        
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section - Optimized for Mobile Baseline */}
       <div className="flex flex-row items-end justify-between mb-8 md:mb-12 gap-4">
        <div className="max-w-2xl text-left">
          {/* Added flex items-center and the yellow line span */}
          <div className="flex items-center gap-2 md:gap-3 text-purple-500 font-bold tracking-widest uppercase text-[10px] md:text-sm mb-1 md:mb-3">
            <span className="w-6 md:w-8 h-[3px] bg-yellow-400 rounded-full"></span>
            <span>Zest Moments</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter font-heading leading-tight">
            Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">Gallery</span>
          </h2>
        </div>
  
  {/* The rest of your View All button code remains here */}

       <button 
          onClick={() => setShowAllGallery(true)}
          className="group flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-white border border-purple-100 rounded-full hover:border-yellow-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0 mb-0.5 md:mb-1"
         >
          <span className="font-bold text-purple-700 text-[10px] md:text-base group-hover:text-purple-900">
            View All <span className="hidden sm:inline">Images</span>
          </span>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
            <FaArrowRight className="text-purple-600 text-[10px] md:text-sm group-hover:text-purple-900" />
          </div>
        </button>
      </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {previewImages.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={clsx(
                "group relative h-[160px] md:h-[280px] overflow-hidden rounded-2xl cursor-pointer bg-white p-1.5 md:p-2",
                "shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              )}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/60 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <FiZoomIn className="text-white" size={18} />
                     </div>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* VIEW ALL POPUP */}
      {showAllGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowAllGallery(false)} />
          <div className="relative w-full max-w-7xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[85vh]">
              <div className="flex items-center justify-between px-6 md:px-8 py-6 bg-white border-b border-slate-100 z-10 shrink-0">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 font-heading tracking-tight">Full Gallery</h3>
                    <p className="text-slate-500 font-medium text-xs md:text-sm mt-1">{galleryImages.length} Photos</p>
                  </div>
                  <button onClick={() => setShowAllGallery(false)} className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 hover:bg-red-50 transition-all duration-300">
                    <FiX className="text-slate-400 group-hover:text-red-500 text-lg" />
                  </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 custom-scrollbar">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {galleryImages.map((src, index) => (
                      <div key={index} onClick={() => setSelectedImageIndex(index)} className="group relative h-[140px] md:h-[220px] overflow-hidden rounded-xl bg-slate-200 cursor-pointer hover:scale-[1.02] transition-all">
                        <Image src={src} alt="Gallery" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                      </div>
                    ))}
                  </div>
              </div>
           </div>
        </div>
      )}

      {/* FULL SCREEN LIGHTBOX */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300" onClick={() => setSelectedImageIndex(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-yellow-400 p-2 z-50 transition-colors" onClick={() => setSelectedImageIndex(null)}><FiX size={32} /></button>
          <button className="absolute left-4 md:left-8 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all z-50" onClick={handlePrev}><FiChevronLeft size={32} /></button>
          <button className="absolute right-4 md:right-8 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all z-50" onClick={handleNext}><FiChevronRight size={32} /></button>
          <div className="relative w-full h-full max-w-5xl max-h-[85vh] p-4" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[selectedImageIndex]} alt="Full screen" fill className="object-contain" quality={100} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;