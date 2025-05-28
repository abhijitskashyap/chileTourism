import Link from "next/link";
import { Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Chile Travel</h3>
            <p className="text-muted-foreground">
              Discover the breathtaking landscapes and rich cultural heritage of Chile, from the Atacama Desert to Patagonia.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/chiletravel/?hl=en" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
                </a>
              <a href="https://www.facebook.com/chiletravelguide" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              </a>
<a href="https://x.com/Chile_Travels" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              </a>
<a href="https://www.youtube.com/channel/UCG1U3Oy0aDBHvh7mylxXSpQ" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#destinations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Top Destinations
                </Link>
              </li>
              <li>
                <Link href="#map" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link href="#culture" className="text-muted-foreground hover:text-foreground transition-colors">
                  Culture & Cuisine
                </Link>
              </li>
              <li>
                <Link href="#tips" className="text-muted-foreground hover:text-foreground transition-colors">
                  Travel Tips
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Travel Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Best Time to Visit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Visa Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accommodation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to get travel tips and exclusive offers
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-md"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chile Travel. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}