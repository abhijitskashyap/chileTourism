"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Shield, Sun, Globe, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { travelTips } from "@/lib/data/travel-tips";

type TipCategory = 'budget' | 'safety' | 'seasons' | 'language' | 'transportation' | 'all';

const categoryIcons = {
  budget: <DollarSign className="h-5 w-5" />,
  safety: <Shield className="h-5 w-5" />,
  seasons: <Sun className="h-5 w-5" />,
  language: <Globe className="h-5 w-5" />,
  transportation: <Plane className="h-5 w-5" />
};

const categoryNames = {
  budget: "Budget Travel",
  safety: "Safety",
  seasons: "Best Seasons",
  language: "Language",
  transportation: "Transportation",
  all: "All Tips"
};

export default function TravelTipsSection() {
  const [activeCategory, setActiveCategory] = useState<TipCategory>('all');

  const filteredTips = activeCategory === 'all' 
    ? travelTips 
    : travelTips.filter(tip => tip.category === activeCategory);

  return (
    <section id="tips" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Tips</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make the most of your Chilean adventure with our expert travel advice
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <CategoryButton 
            category="all" 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          />
          <CategoryButton 
            category="budget" 
            active={activeCategory === 'budget'} 
            onClick={() => setActiveCategory('budget')}
          />
          <CategoryButton 
            category="safety" 
            active={activeCategory === 'safety'} 
            onClick={() => setActiveCategory('safety')}
          />
          <CategoryButton 
            category="seasons" 
            active={activeCategory === 'seasons'} 
            onClick={() => setActiveCategory('seasons')}
          />
          <CategoryButton 
            category="language" 
            active={activeCategory === 'language'} 
            onClick={() => setActiveCategory('language')}
          />
          <CategoryButton 
            category="transportation" 
            active={activeCategory === 'transportation'} 
            onClick={() => setActiveCategory('transportation')}
          />
        </div>

        {/* Tips Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTips.length > 0 ? (
              filteredTips.map((tip, index) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="bg-card rounded-lg p-6 shadow-sm border border-border h-full">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "flex-shrink-0 p-2.5 rounded-full",
                        tip.category === 'budget' && "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                        tip.category === 'safety' && "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                        tip.category === 'seasons' && "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
                        tip.category === 'language' && "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                        tip.category === 'transportation' && "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                      )}>
                        {categoryIcons[tip.category]}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                        <p className="text-muted-foreground text-sm">{tip.description}</p>
                        <div className="mt-3">
                          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {categoryNames[tip.category]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No tips available for this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

type CategoryButtonProps = {
  category: TipCategory;
  active: boolean;
  onClick: () => void;
};

function CategoryButton({ category, active, onClick }: CategoryButtonProps) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      className={cn(
        "rounded-full px-4 transition-all",
        category === 'budget' && active && "bg-green-600 hover:bg-green-700",
        category === 'safety' && active && "bg-red-600 hover:bg-red-700",
        category === 'seasons' && active && "bg-amber-600 hover:bg-amber-700",
        category === 'language' && active && "bg-blue-600 hover:bg-blue-700",
        category === 'transportation' && active && "bg-purple-600 hover:bg-purple-700"
      )}
      onClick={onClick}
    >
      {category !== 'all' && <span className="mr-2">{categoryIcons[category]}</span>}
      {categoryNames[category]}
    </Button>
  );
}