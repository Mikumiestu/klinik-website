"use client";

import React from "react";
import { motion } from "framer-motion";

const LocationMap = () => {
  return (
    <section className="py-12 md:py-16 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We're conveniently located in the heart of Healthcare City, with easy access from major roads and public transportation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810658134!2d-0.2416819!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1647042285043!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MediCare Clinic Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;