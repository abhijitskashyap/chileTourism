"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { mapLocations } from "@/lib/data/map-locations";
import { cn } from "@/lib/utils";

interface LocationInfoCardProps {
  location: typeof mapLocations[0];
  onClose: () => void;
}

function LocationInfoCard({ location, onClose }: LocationInfoCardProps) {
  return (
    <div className="overflow-hidden">
      <div className="relative h-36">
        <img 
          src={location.imageUrl} 
          alt={location.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full bg-black/40 p-1 text-white hover:bg-black/60 transition-colors"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">{location.name}</h3>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-3">{location.description}</p>
        <Separator className="my-3" />
        <h4 className="font-medium text-sm mb-2">Highlights:</h4>
        <ul className="text-sm space-y-1.5">
          {location.infoPoints.map((point, i) => (
            <li key={i} className="flex">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function InteractiveMapSection() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [infoPosition, setInfoPosition] = useState({ top: 0, left: 0, xDirection: 'right', yDirection: 'bottom' });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMarkerClick = (locationId: string, x: number, y: number) => {
    setSelectedLocation(prev => prev === locationId ? null : locationId);
    
    if (mapContainerRef.current) {
      const mapRect = mapContainerRef.current.getBoundingClientRect();
      const xDirection = x > 50 ? 'left' : 'right';
      const yDirection = y > 50 ? 'top' : 'bottom';
      
      setInfoPosition({
        left: (x / 100) * mapRect.width,
        top: (y / 100) * mapRect.height,
        xDirection,
        yDirection
      });
    }
  };

  return (
    <section id="map" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Chile</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on the map to discover Chile's diverse regions and must-visit destinations
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl" ref={mapContainerRef}>
          <div className="relative w-full h-0 pb-[150%] md:pb-[133.33%] lg:pb-[56.25%] overflow-hidden rounded-2xl shadow-lg bg-card">
            <img 
              src="https://t3.ftcdn.net/jpg/05/63/24/74/360_F_563247425_8WMzUhzG9rnv9BXUuK6hr5hclVGn2z3O.jpg"
              alt="Map of Chile"
              className="absolute inset-0 w-full h-full object-contain bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}