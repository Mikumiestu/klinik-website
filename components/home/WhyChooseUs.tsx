"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Clock, 
  Users, 
  ThumbsUp 
} from "lucide-react";

const features = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Experienced Doctors",
    description:
      "Our team consists of highly qualified doctors with years of experience in their respective fields.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Emergency Care",
    description:
      "We offer round-the-clock emergency services to ensure you receive care when you need it most.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Patient-Centered Approach",
    description:
      "We prioritize your needs and preferences, ensuring personalized care for every patient.",
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Modern Facilities",
    description:
      "Our clinic is equipped with state-of-the-art technology and facilities for accurate diagnosis and treatment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern healthcare facility"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-2 grid-rows-2 gap-4 p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-card p-4 rounded-lg shadow-lg pointer-events-auto w-20 h-20 md:w-28 md:h-28 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-primary">98%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Patient Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">MediCare</span> Clinic?
            </h2>
            
            <p className="text-muted-foreground mb-8">
              At MediCare Clinic, we are committed to providing exceptional healthcare services with a focus on patient comfort, innovative treatments, and positive outcomes. Our values guide everything we do.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="flex-shrink-0 mr-4 bg-primary/10 dark:bg-primary/5 text-primary rounded-lg p-3 h-12 w-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;