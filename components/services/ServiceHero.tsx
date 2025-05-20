"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Medical Services
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              At MediCare Clinic, we offer a wide range of medical services to meet your healthcare needs. Our team of experienced healthcare professionals is dedicated to providing personalized care using the latest medical advancements.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
          >
            {[
              { label: "General Medicine", icon: "🩺" },
              { label: "Specialized Care", icon: "🫀" },
              { label: "Diagnostics", icon: "🔬" },
              { label: "Preventive Care", icon: "🛡️" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-card p-4 rounded-lg shadow-sm text-center"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;