"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About <span className="text-primary">MediCare</span> Clinic
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              MediCare Clinic was established in 2005 with a mission to provide exceptional healthcare services to our community. For over 15 years, we've been committed to delivering personalized care with compassion and excellence.
            </p>
            
            <div className="bg-primary/10 dark:bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="italic text-muted-foreground">
                "Our goal is to improve the health and wellbeing of our patients through innovative medical care, education, and support."
              </p>
              <p className="font-semibold mt-2">Dr. Elizabeth Morgan, Founder</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MediCare Clinic Building"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;