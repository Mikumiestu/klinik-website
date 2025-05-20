import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-foreground dark:bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="text-xl font-bold">MediCare</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Providing quality healthcare services with compassion and expertise since 2005. Your health is our priority.
            </p>
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/doctors", label: "Our Doctors" },
                { href: "/blog", label: "Health Blog" },
                { href: "/contact", label: "Contact Us" },
                { href: "/appointment", label: "Book Appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-base font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { href: "/services/general-medicine", label: "General Medicine" },
                { href: "/services/pediatrics", label: "Pediatrics" },
                { href: "/services/cardiology", label: "Cardiology" },
                { href: "/services/neurology", label: "Neurology" },
                { href: "/services/dermatology", label: "Dermatology" },
                { href: "/services/orthopedics", label: "Orthopedics" },
                { href: "/services/ent", label: "ENT" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  123 Medical Center Dr, Healthcare City, HC 12345
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  info@medicareclinic.com
                </span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-3 text-primary shrink-0" />
                <div className="text-muted-foreground">
                  <p>Mon-Fri: 8:00 AM - 7:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} MediCare Clinic. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;