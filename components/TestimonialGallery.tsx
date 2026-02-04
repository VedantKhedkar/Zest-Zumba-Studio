"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay, FaArrowRight, FaTimes } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

// --- EXPANDED DUMMY DATA ---
const allVideos = [
  { id: 1, name: "Aarav's Weight Loss", category: "Transformation", thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop", duration: "1:30", videoId: "dQw4w9WgXcQ" },
  { id: 2, name: "Zumba Party Vibes", category: "Group Session", thumbnail: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop", duration: "0:45", videoId: "dQw4w9WgXcQ" },
  { id: 3, name: "Morning Yoga Flow", category: "Wellness", thumbnail: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop", duration: "2:15", videoId: "dQw4w9WgXcQ" },
  { id: 4, name: "Strength Training", category: "Fitness", thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", duration: "1:10", videoId: "dQw4w9WgXcQ" },
  { id: 5, name: "Priya's Post-Pregnancy Journey", category: "Transformation", thumbnail: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop", duration: "2:45", videoId: "dQw4w9WgXcQ" },
  { id: 6, name: "Kids Zumba Fun Day", category: "Special Event", thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", duration: "1:20", videoId: "dQw4w9WgXcQ" },
  { id: 7, name: "Senior Citizens Fitness", category: "Wellness", thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", duration: "3:00", videoId: "dQw4w9WgXcQ" },
  { id: 8, name: "Weekend Aerobics Blast", category: "High Intensity", thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop", duration: "0:55", videoId: "dQw4w9WgXcQ" },
];

const TestimonialVideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    if (showGallery || activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showGallery, activeVideo]);

  const previewVideos = allVideos.slice(0, 4);

  return (
    /* UPDATED: pt-4 for mobile to remove the marked space, pb-12 for compact bottom spacing */
    <section className="pt-4 pb-12 md:py-24 bg-slate-100 relative scroll-mt-20" id="Testimonial-Gallery">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
   <div className="flex flex-row items-end justify-between mb-8 md:mb-12 gap-4">
  <div className="max-w-4xl text-left">
    {/* Updated to include the yellow line and flex alignment */}
    <div className="flex items-center gap-2 md:gap-3 text-purple-500 font-extrabold tracking-widest uppercase text-xs md:text-sm mb-1 md:mb-4">
      <span className="w-6 md:w-8 h-[3px] bg-yellow-400 rounded-full"></span>
      <span>Real Stories</span>
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-slate-900 tracking-tighter font-heading leading-tight">
      Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">Testimonials</span>
    </h2>
  </div>
  
  {/* The rest of your View All button code remains here */}


          <button 
            onClick={() => setShowGallery(true)}
            className="group flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-white border border-purple-100 rounded-full hover:border-yellow-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0 mb-0.5 md:mb-1"
          >
            <span className="font-bold text-purple-700 text-[10px] md:text-base group-hover:text-purple-900">
              Watch All <span className="hidden sm:inline">Stories</span>
            </span>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
              <FaArrowRight className="text-purple-600 text-[10px] md:text-sm group-hover:text-purple-900" />
            </div>
          </button>
        </div>

        {/* PREVIEW GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewVideos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={() => setActiveVideo(video.videoId)} 
            />
          ))}
        </div>
      </div>

      {/* POPUP GALLERY MODAL */}
      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in zoom-in-95 duration-300">
            <div 
              className="absolute inset-0 bg-purple-900/80 backdrop-blur-md"
              onClick={() => setShowGallery(false)}
            />

            <div className="relative w-full max-w-7xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[85vh] border border-white/40">
              <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-purple-50 to-white border-b border-purple-100 z-10 shrink-0">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 font-heading tracking-tight">
                      Success Stories Gallery
                    </h3>
                    <p className="text-purple-600 font-medium text-sm mt-1">
                      Explore {allVideos.length} Inspiring Journeys
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setShowGallery(false)}
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-slate-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 shadow-sm"
                  >
                    <FaTimes className="text-slate-400 group-hover:text-yellow-600 text-lg transition-colors" />
                  </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50 custom-scrollbar">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allVideos.map((video) => (
                      <VideoCard 
                        key={video.id} 
                        video={video} 
                        onClick={() => setActiveVideo(video.videoId)} 
                      />
                    ))}
                  </div>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 shrink-0" />
            </div>
        </div>
      )}

      {/* VIDEO PLAYER OVERLAY */}
      {activeVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-yellow-400 transition-colors z-50 flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                <FaTimes size={24} />
            </div>
          </button>

          <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 relative ring-4 ring-white/5">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&modestbranding=1&rel=0`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

const VideoCard = ({ video, onClick }: { video: any, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-100"
  >
    <div className="relative aspect-[3/4] w-full">
      <Image
        src={video.thumbnail}
        alt={video.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all duration-300">
          <FaPlay className="text-white text-lg ml-1 group-hover:text-purple-900" />
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
        <span className="text-xs font-bold text-white flex items-center gap-1">
          <FiClock className="text-yellow-400" /> {video.duration}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider mb-1 block">
          {video.category}
        </span>
        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-yellow-50 transition-colors">
          {video.name}
        </h3>
      </div>
    </div>
  </div>
);

export default TestimonialVideoGallery;