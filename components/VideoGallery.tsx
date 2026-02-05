"use client";
import React, { useState, useEffect } from "react";
import { FiArrowRight, FiPlay, FiGrid, FiX } from "react-icons/fi";
import { FaArrowRight, FaTimes } from "react-icons/fa"; 
import clsx from "clsx";

// --- DUMMY DATA FOR SHORTS ---
const allShortsData = [
  { id: "dQw4w9WgXcQ", label: "Studio Energy", category: "Zumba", views: "1.2K" },
  { id: "dQw4w9WgXcQ", label: "Morning Flow", category: "Yoga", views: "850" },
  { id: "dQw4w9WgXcQ", label: "Quick Burn", category: "HIIT", views: "2.1K" },
  { id: "dQw4w9WgXcQ", label: "Final Reveal", category: "Dance", views: "3.4K" },
  { id: "dQw4w9WgXcQ", label: "Cardio Blast", category: "Cardio", views: "5.5K" },
  { id: "dQw4w9WgXcQ", label: "Core Strength", category: "Pilates", views: "1.8K" },
  { id: "dQw4w9WgXcQ", label: "Cool Down", category: "Stretch", views: "900" },
  { id: "dQw4w9WgXcQ", label: "Zumba Party", category: "Event", views: "10K" },
];

const YouTubeShortsGallery = () => {
  const [activeShort, setActiveShort] = useState<string | null>(null);
  const [showAllShorts, setShowAllShorts] = useState(false);

  const previewShorts = allShortsData.slice(0, 4);

  useEffect(() => {
    if (activeShort || showAllShorts) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeShort, showAllShorts]);

  return (
    /* UPDATED: Added scroll-mt-10 for mobile to ensure clean UI when scrolled from navbar */
    <section 
      id="shorts-gallery" 
      className="py-10 md:py-24 bg-gradient-to-br from-purple-50 via-white to-yellow-50 relative overflow-hidden scroll-mt-10 md:scroll-mt-20"
    >
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] -z-10" />

      <div className="absolute top-10 left-10 text-[12rem] md:text-[15rem] font-black text-purple-900/5 select-none pointer-events-none -z-10 leading-none tracking-tighter">
        SHORTS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION - Optimized for Mobile Alignment */}
        <div className="flex flex-row items-end justify-between mb-10 md:mb-12 gap-2 md:gap-4">
          
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 md:gap-3 text-purple-600 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 md:mb-4">
              <span className="w-6 md:w-8 h-[3px] bg-yellow-400 rounded-full"></span>
              <span>Studio in Motion</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tighter font-heading leading-tight">
              Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">Shorts </span>
            </h2>
          </div>
          
          {/* VIEW ALL BUTTON - Fixed Mobile Scaling and Alignment */}
           <button 
            onClick={() => setShowAllShorts(true)}
            className="group flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-white border border-purple-100 rounded-full hover:border-yellow-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0 mb-0.5 md:mb-1"
            >
            <span className="font-bold text-purple-700 text-[10px] md:text-base group-hover:text-purple-900">
              View All <span className="hidden sm:inline">Shorts</span>
            </span>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
              <FaArrowRight className="text-purple-600 text-[10px] md:text-sm group-hover:text-purple-900" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {previewShorts.map((video, index) => (
            <div key={index} className="w-full aspect-[9/16]">
                <ShortCard 
                    video={video} 
                    onClick={() => setActiveShort(video.id)} 
                />
            </div>
          ))}
        </div>

      </div>

      {showAllShorts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in zoom-in-95 duration-300">
          <div 
             className="absolute inset-0 bg-purple-900/80 backdrop-blur-md"
             onClick={() => setShowAllShorts(false)}
           />

          <div className="relative w-full max-w-7xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[85vh] border border-white/40">
              <div className="flex items-center justify-between px-6 md:px-8 py-6 bg-white border-b border-slate-100 z-10 shrink-0">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 font-heading tracking-tight">
                      All Shorts
                    </h3>
                    <p className="text-slate-500 font-medium text-xs md:text-sm mt-1">
                      {allShortsData.length} Videos
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowAllShorts(false)}
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                  >
                    <FiX className="text-slate-400 group-hover:text-red-500 text-lg transition-colors" />
                  </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 custom-scrollbar">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {allShortsData.map((video, index) => (
                      <div key={index} className="w-full aspect-[9/16]">
                         <ShortCard 
                            video={video} 
                            onClick={() => setActiveShort(video.id)} 
                         />
                      </div>
                    ))}
                  </div>
              </div>
           </div>
        </div>
      )}

      {activeShort && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300">
           <button 
             onClick={() => setActiveShort(null)}
             className="absolute top-6 right-6 text-white/70 hover:text-yellow-400 transition-colors z-50 flex items-center gap-3 group"
           >
             <span className="text-sm font-bold uppercase tracking-widest hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
               Close Short
             </span>
             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                <FaTimes size={24} />
             </div>
           </button>

           <div className="relative w-full max-w-md aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-4 ring-white/5">
              <iframe
                src={`https://www.youtube.com/embed/${activeShort}?autoplay=1&loop=1&playlist=${activeShort}&modestbranding=1&rel=0&controls=1`}
                title="Full Screen Short"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
           </div>
        </div>
      )}

    </section>
  );
};

const ShortCard = ({ video, onClick }: { video: any, onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="
            relative w-full h-full
            rounded-2xl md:rounded-[2rem]
            group bg-white
            border-[4px] md:border-[6px] border-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/20
            transition-all duration-500 hover:-translate-y-2
            overflow-hidden cursor-pointer
            "
        >
            <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=0&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0`}
            title={video.label}
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none transition-opacity duration-300 group-hover:via-transparent/50" />

            <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/20 backdrop-blur-md border border-white/20 px-2 py-0.5 md:px-3 md:py-1 rounded-full z-20 pointer-events-none">
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[8px] md:text-[10px] font-bold text-white tracking-wide uppercase">Shorts</span>
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <FiPlay className="text-white fill-white ml-0.5" size={20} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-1.5 py-0.5 rounded bg-yellow-400 text-purple-900 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2">
                    {video.category}
                </span>
                
                <h3 className="text-white font-bold text-sm md:text-lg leading-tight mb-1 drop-shadow-md line-clamp-2">
                    {video.label}
                </h3>
                
                <div className="flex items-center justify-between mt-1 md:mt-2 pt-1 md:pt-2 border-t border-white/20">
                    <span className="text-[10px] md:text-xs font-medium text-white/90">
                        {video.views} views
                    </span>
                    <button className="flex items-center gap-1 text-yellow-300 text-[10px] md:text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                        Watch <FiArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default YouTubeShortsGallery;