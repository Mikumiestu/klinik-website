"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Heart, 
  Baby, 
  Brain, 
  Stethoscope, 
  Eye, 
  Bone 
} from "lucide-react";

const servicesList = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "General Medicine",
    description: "Comprehensive care for all your general health needs and concerns.",
    href: "/services/general-medicine",
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    href: "/services/pediatrics",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Cardiology",
    description: "Expert care for heart conditions and cardiovascular health.",
    href: "/services/cardiology",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Neurology",
    description: "Diagnosis and treatment of disorders of the nervous system.",
    href: "/services/neurology",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Ophthalmology",
    description: "Comprehensive eye care and treatment for vision problems.",
    href: "/services/ophthalmology",
  },
  {
    icon: <Bone className="h-8 w-8" />,
    title: "Orthopedics",
    description: "Treatment for musculoskeletal issues, fractures, and joint problems.",
    href: "/services/orthopedics",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Medical Services
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of medical services to meet your healthcare needs,
            delivered by experienced professionals using the latest technology.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all hover:shadow-md group">
                <CardHeader>
                  <div className="bg-primary/10 dark:bg-primary/5 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-sm" asChild>
                    <Link href={service.href}>
                      Learn More &rarr;
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;