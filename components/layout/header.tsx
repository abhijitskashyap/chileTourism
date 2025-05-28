"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, MapPin, Compass, Utensils, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "Destinations", href: "#destinations", icon: <MapPin className="w-4 h-4 mr-2" /> },
  { name: "Explore Map", href: "#map", icon: <Compass className="w-4 h-4 mr-2" /> },
  { name: "Culture & Cuisine", href: "#culture", icon: <Utensils className="w-4 h-4 mr-2" /> },
  { name: "Travel Tips", href: "#tips", icon: <Info className="w-4 h-4 mr-2" /> },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-300">
            Chile Travel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center font-medium transition-colors",
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/80"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileNavOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background pt-20">
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}