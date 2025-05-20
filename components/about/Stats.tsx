"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "15+",
    label: "Years of Excellence",
  },
  {
    value: "30+",
    label: "Experienced Doctors",
  },
  {
    value: "10k+",
    label: "Happy Patients",
  },
  {
    value: "15+",
    label: "Medical Specialties",
  },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-primary text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>
      
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Since our founding, MediCare Clinic has grown to become a trusted healthcare provider,
            serving thousands of patients and making a positive impact in our community.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;