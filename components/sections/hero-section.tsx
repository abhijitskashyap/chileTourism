"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/10717160/pexels-photo-10717160.jpeg')",
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundPosition: "center 80%"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Discover Chile
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            From the arid Atacama Desert to the snowy peaks of Patagonia, 
            experience the breathtaking diversity and rich culture of South America's most extraordinary country.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 text-base">
              Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="https://www.youtube.com/watch?v=ocUZBNJ0lVw&origin=https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base bg-transparent border-white text-white hover:bg-white hover:text-black">
                Watch Video
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>
  );
}