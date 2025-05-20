"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Our Location",
    details: [
      "123 Medical Center Dr,",
      "Healthcare City, HC 12345",
    ],
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone Numbers",
    details: [
      "Main: +1 (555) 123-4567",
      "Emergency: +1 (555) 987-6543",
    ],
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Addresses",
    details: [
      "info@medicareclinic.com",
      "appointments@medicareclinic.com",
    ],
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Working Hours",
    details: [
      "Mon-Fri: 8:00 AM - 7:00 PM",
      "Sat: 9:00 AM - 5:00 PM",
      "Sun: Closed",
    ],
  },
];

const ContactInfo = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're here to answer your questions and provide the information you need. Reach out to us through any of the channels below or visit our clinic.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 dark:bg-primary/5 text-primary rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">{item.title}</h3>
                  <div className="text-center">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;