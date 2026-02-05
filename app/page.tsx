import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PackagesSection from "../components/PackagesSection";
import ImageGallery from "../components/ImageGallery";
import VideoGallery from "../components/VideoGallery";
import TestimonialGallery from "../components/TestimonialGallery";
import TrainersSection from "../components/TrainersSection";
import ContactComponent from "@/components/ContactComponent";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievement";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrainersSection />
      <AboutSection />
      <PackagesSection />
      <Achievements />
      <ImageGallery />
      <VideoGallery />
      <TestimonialGallery />
      <TestimonialsSection />
      <ContactComponent />
      <Footer />
      
    </div>
  );
}