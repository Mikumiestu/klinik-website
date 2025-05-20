"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Heart, 
  Baby, 
  Brain, 
  Stethoscope, 
  Eye, 
  Bone, 
  Microscope, 
  Pill 
} from "lucide-react";

const services = {
  general: [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "General Check-ups",
      description: "Comprehensive health evaluations to assess your overall health status and identify potential issues.",
    },
    {
      icon: <Pill className="h-8 w-8" />,
      title: "Medication Management",
      description: "Professional guidance on medication usage, interactions, and adjustments to ensure optimal therapeutic outcomes.",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Laboratory Services",
      description: "Comprehensive diagnostic testing including blood work, urinalysis, and other essential laboratory services.",
    },
  ],
  specialized: [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cardiology",
      description: "Specialized care for heart conditions, including diagnostic testing, treatment, and ongoing management.",
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Pediatrics",
      description: "Comprehensive healthcare for infants, children, and adolescents, including well-child visits and treatment for illnesses.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Neurology",
      description: "Diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Ophthalmology",
      description: "Eye care services including vision testing, diagnosis and treatment of eye diseases, and corrective measures.",
    },
    {
      icon: <Bone className="h-8 w-8" />,
      title: "Orthopedics",
      description: "Specialized care for musculoskeletal issues, including joint problems, fractures, and sports injuries.",
    },
  ],
  preventive: [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Health Screenings",
      description: "Early detection screenings for various conditions to identify health issues before they become serious.",
    },
    {
      icon: <Pill className="h-8 w-8" />,
      title: "Immunizations",
      description: "Vaccines to prevent infectious diseases for patients of all ages, following recommended schedules.",
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Wellness Programs",
      description: "Personalized programs to promote health and prevent disease through lifestyle modifications and health education.",
    },
  ],
};

const ServicesList = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Medical Services
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of healthcare services to address your medical needs,
            from routine check-ups to specialized treatments.
          </p>
        </div>

        <Tabs defaultValue="general" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="general">General Medicine</TabsTrigger>
            <TabsTrigger value="specialized">Specialized Care</TabsTrigger>
            <TabsTrigger value="preventive">Preventive Care</TabsTrigger>
          </TabsList>

          {Object.entries(services).map(([category, categoryServices]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full border hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="bg-primary/10 dark:bg-primary/5 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesList;