"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
  activePath: string;
}

const MobileNav = ({ isOpen, onClose, links, activePath }: MobileNavProps) => {
  if (!isOpen) return null;

  const isActive = (path: string) => activePath === path;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] bg-background border-t overflow-y-auto"
        >
          <div className="container px-4 py-6 flex flex-col space-y-6">
            <nav className="flex flex-col space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-secondary text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center pt-2 border-t">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">+62 (555) 123-4567</span>
            </div>
            
            <Button className="w-full" onClick={onClose}>
              <Link href="/appointment" className="w-full">
                Book Appointment
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;