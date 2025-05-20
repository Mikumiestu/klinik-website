"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const executives = [
  {
    id: 1,
    name: "Dr. Elizabeth Morgan",
    role: "Founder & Chief Medical Officer",
    image: "https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Morgan founded MediCare Clinic in 2005 with a vision to provide compassionate, patient-centered healthcare. With over 25 years of experience in internal medicine, she leads our medical team with dedication and expertise.",
  },
  {
    id: 2,
    name: "Dr. Jonathan Lee",
    role: "Medical Director",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Lee oversees the clinical operations of MediCare Clinic, ensuring the highest standards of care. His background in healthcare administration and cardiology brings valuable expertise to our leadership team.",
  },
  {
    id: 3,
    name: "Sarah Martinez",
    role: "Chief Operations Officer",
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "With a background in healthcare management, Sarah ensures the smooth operation of our clinic, from patient scheduling to facility management, creating an efficient and welcoming environment for patients and staff.",
  },
];

const Team = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our clinic is led by a team of experienced healthcare professionals and administrators
            who are dedicated to providing exceptional care and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {executives.map((executive, index) => (
            <motion.div
              key={executive.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={executive.image}
                      alt={executive.name}
                      className="w-full h-[300px] object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{executive.name}</h3>
                    <p className="text-primary mb-3">{executive.role}</p>
                    <p className="text-muted-foreground mb-4">{executive.bio}</p>
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

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/doctors">Meet All Our Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;