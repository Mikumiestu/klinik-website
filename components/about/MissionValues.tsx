"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Users, ThumbsUp, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Compassionate Care",
    description:
      "We treat every patient with kindness, empathy, and respect, recognizing the dignity of each individual.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Excellence",
    description:
      "We strive for excellence in all aspects of healthcare delivery, from diagnosis to treatment and follow-up care.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Patient-Centered",
    description:
      "We put patients at the center of everything we do, involving them in decisions about their health and care.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    title: "Innovation",
    description:
      "We embrace innovation and continuously seek new ways to improve our services and patient outcomes.",
  },
];

const MissionValues = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission & Vision
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  Our mission is to provide high-quality, compassionate healthcare services that improve the health and wellbeing of our patients and community. We are committed to treating each patient with dignity and respect while delivering personalized care that addresses their unique needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  Our vision is to be the healthcare provider of choice in our community, recognized for clinical excellence, innovative approaches to medicine, and exceptional patient experiences. We aim to continuously advance healthcare through education, research, and technology.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
                <p className="text-muted-foreground">
                  We are committed to creating a healthcare environment where patients feel valued, heard, and empowered. We believe in fostering strong relationships with our patients and community, based on trust, transparency, and mutual respect.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 lg:hidden">
              Our Core Values
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 dark:bg-primary/5 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;