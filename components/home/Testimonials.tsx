"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "The doctors at MediCare Clinic are truly exceptional. They took the time to listen to my concerns and provided personalized care that addressed my specific health needs. I highly recommend their services to anyone seeking quality healthcare.",
    author: "Jennifer Miller",
    role: "Patient",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    content:
      "I've been a patient at MediCare Clinic for over 5 years, and I couldn't be happier with the care I've received. The staff is always friendly and professional, and the doctors are knowledgeable and compassionate. It's the best healthcare experience I've had.",
    author: "Robert Johnson",
    role: "Patient",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content:
      "After struggling with a chronic condition for years, I finally found relief thanks to the specialists at MediCare Clinic. Their comprehensive approach to healthcare has made a significant difference in my quality of life. I'm forever grateful for their expertise.",
    author: "Sarah Thompson",
    role: "Patient",
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their
            experience at MediCare Clinic.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-primary/10 dark:text-primary/5">
            <QuoteIcon className="h-32 w-32" />
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: active === index ? 1 : 0,
                  x: active === index ? 0 : 100,
                  zIndex: active === index ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 right-0"
                style={{ display: active === index ? "block" : "none" }}
              >
                <Card className="border-none shadow-lg bg-white dark:bg-card">
                  <CardContent className="p-8 md:p-12">
                    <p className="text-lg mb-8 italic">"{testimonial.content}"</p>
                    
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-4 pt-80 md:pt-72">
            <Button variant="outline" size="icon" onClick={prev}>
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    active === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30"
                  }`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            
            <Button variant="outline" size="icon" onClick={next}>
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;