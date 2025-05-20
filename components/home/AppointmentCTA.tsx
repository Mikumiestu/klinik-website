"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const AppointmentCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/90 dark:bg-primary/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Book Your Appointment?
            </h2>
            
            <p className="text-white/90 mb-8">
              Our team of healthcare professionals is ready to provide you with the
              care you need. Schedule an appointment today and take the first step
              towards better health.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-3 bg-white/10 rounded-full p-3">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Call Us</h3>
                  <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 bg-white/10 rounded-full p-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-white/80 text-sm">
                    123 Medical Center Dr, Healthcare City
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 bg-white/10 rounded-full p-3">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Working Days</h3>
                  <p className="text-white/80 text-sm">Monday - Saturday</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 bg-white/10 rounded-full p-3">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Working Hours</h3>
                  <p className="text-white/80 text-sm">8:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/appointment">Book Appointment Now</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-card rounded-xl shadow-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Request an Appointment</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-md border border-input bg-background text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-md border border-input bg-background text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-input bg-background text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-md border border-input bg-background text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Select Service
                </label>
                <select
                  id="service"
                  className="w-full rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="general-medicine">General Medicine</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full rounded-md border border-input bg-background text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full rounded-md border border-input bg-background text-sm"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;