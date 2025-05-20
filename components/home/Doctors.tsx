"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "With over 15 years of experience in cardiology, Dr. Johnson specializes in treating complex heart conditions.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Chen is an expert in neurological disorders with a focus on stroke prevention and treatment.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Rodriguez has dedicated her career to providing compassionate care for children of all ages.",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Wilson specializes in minimally invasive orthopedic procedures and sports medicine.",
  },
];

const Doctors = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our team of experienced medical professionals is dedicated to providing
            the highest quality healthcare services with compassion and expertise.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>

          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-shrink-0 w-full sm:w-[350px] snap-start"
              >
                <Card className="h-full overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-[300px] object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold">{doctor.name}</h3>
                        <p className="text-white/80">{doctor.specialty}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground text-sm mb-4">{doctor.bio}</p>
                      <div className="flex space-x-2">
                        <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                        <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                        <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={scrollRight}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;