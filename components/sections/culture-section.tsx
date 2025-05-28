"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Utensils, Music, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cultureItems } from "@/lib/data/culture-items";
import { cn } from "@/lib/utils";

export default function CultureSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cuisine' | 'tradition' | 'festival'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems = cultureItems.filter(item => 
    activeFilter === 'all' || item.type === activeFilter
  );

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const typeIcons = {
    cuisine: <Utensils className="h-4 w-4" />,
    tradition: <Music className="h-4 w-4" />,
    festival: <Calendar className="h-4 w-4" />
  };

  const typeColors = {
    cuisine: "bg-orange-500",
    tradition: "bg-blue-500",
    festival: "bg-purple-500"
  };

  return (
    <section id="culture" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Culture & Cuisine</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover Chile's rich cultural heritage, vibrant traditions, and mouth-watering cuisine
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          <Button
            variant={activeFilter === 'all' ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveFilter('all')}
          >
            All
          </Button>
          <Button
            variant={activeFilter === 'cuisine' ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveFilter('cuisine')}
          >
            <Utensils className="mr-2 h-4 w-4" />
            Cuisine
          </Button>
          <Button
            variant={activeFilter === 'tradition' ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveFilter('tradition')}
          >
            <Music className="mr-2 h-4 w-4" />
            Traditions
          </Button>
          <Button
            variant={activeFilter === 'festival' ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveFilter('festival')}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Festivals
          </Button>
        </div>

        <div className="relative">
          {/* Scroll Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hidden md:flex"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Scroll left</span>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hidden md:flex"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Scroll right</span>
          </Button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] snap-start"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-md h-full">
                    <div className="relative h-48">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3">
                        <Badge className={cn(
                          "flex items-center gap-1 px-2 py-1",
                          item.type === 'cuisine' && "bg-orange-500 hover:bg-orange-600",
                          item.type === 'tradition' && "bg-blue-500 hover:bg-blue-600",
                          item.type === 'festival' && "bg-purple-500 hover:bg-purple-600"
                        )}>
                          {typeIcons[item.type]}
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                      </div>
                      
                      {item.season && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className="bg-background/60 backdrop-blur-sm">
                            {item.season}
                          </Badge>
                        </div>
                      )}
                      
                      <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">{item.name}</h3>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Fade Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}