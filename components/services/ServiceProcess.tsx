"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Schedule an Appointment",
    description:
      "Contact our clinic to schedule an appointment with one of our healthcare professionals. You can book online, by phone, or in person.",
  },
  {
    number: "02",
    title: "Initial Consultation",
    description:
      "During your first visit, our healthcare provider will review your medical history, discuss your concerns, and conduct a thorough examination.",
  },
  {
    number: "03",
    title: "Diagnostic Testing",
    description:
      "If necessary, we'll perform diagnostic tests to better understand your condition and make an accurate diagnosis.",
  },
  {
    number: "04",
    title: "Treatment Plan",
    description:
      "Based on the diagnosis, we'll develop a personalized treatment plan tailored to your specific needs and health goals.",
  },
  {
    number: "05",
    title: "Follow-Up Care",
    description:
      "We provide ongoing care and follow-up appointments to monitor your progress and make any necessary adjustments to your treatment plan.",
  },
];

const ServiceProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Patient Care Process
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We follow a comprehensive care process to ensure you receive the highest quality
            healthcare tailored to your individual needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex mb-12 last:mb-0"
            >
              <div className="mr-6 relative flex-shrink-0">
                <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-14 left-7 bottom-0 w-0.5 h-16 bg-primary/30"></div>
                )}
              </div>
              
              <div className="pt-3">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;