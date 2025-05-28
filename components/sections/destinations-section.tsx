"use client";

import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/data/destinations";
import { cn } from "@/lib/utils";

export default function DestinationsSection() {
  return (
    <section 
      id="destinations" 
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Chile's most breathtaking locations, from windswept Patagonian peaks to otherworldly desert landscapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface DestinationCardProps {
  destination: typeof destinations[0];
  index: number;
}

function DestinationCard({ destination, index }: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${destination.imageUrl})` }}
      />
      
      {/* Overlay Gradient */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
        isHovered ? "opacity-90" : "opacity-70"
      )} />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <div className="transform transition-transform duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
          <p className="text-sm text-white/90 mb-3">{destination.region}</p>
          
          <div className={cn(
            "max-h-0 overflow-hidden transition-all duration-300 ease-in-out",
            isHovered && "max-h-40 mb-4"
          )}>
            <p className="text-sm text-white/90 mb-4">{destination.description}</p>
            <ul className="text-sm space-y-1">
              {destination.highlights.slice(0, 2).map((highlight, i) => (
                <li key={i} className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/90 mr-2"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <Button 
            variant="outline" 
            size="sm"
            className={cn(
              "mt-3 bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            Learn More <ArrowRightIcon className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}