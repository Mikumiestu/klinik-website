"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance plans, including Medicare, Blue Cross/Blue Shield, Aetna, Cigna, and UnitedHealthcare. Please contact our office to verify if we accept your specific insurance plan.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our office, using our online booking system on our website, or visiting our clinic in person. We strive to accommodate urgent needs with same-day or next-day appointments when possible.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your insurance card, a valid photo ID, a list of current medications, your medical history, and any relevant medical records or test results. Arriving 15 minutes early will allow time for paperwork completion.",
  },
  {
    question: "Do you offer telehealth services?",
    answer:
      "Yes, we offer telehealth consultations for certain conditions and follow-up appointments. This convenient option allows you to meet with your healthcare provider from the comfort of your home.",
  },
  {
    question: "How long will my appointment take?",
    answer:
      "Initial consultations typically last 30-45 minutes, while follow-up appointments are usually 15-30 minutes. Some specialized procedures may require more time. We value thoroughness and ensuring all your questions are answered.",
  },
  {
    question: "What are your payment options?",
    answer:
      "We accept cash, personal checks, and most major credit cards. Payment is expected at the time of service for co-pays and non-covered services. For patients without insurance, we offer affordable self-pay rates and payment plans.",
  },
];

const ServiceFAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, appointments, insurance coverage,
            and more. If you don't see your question here, please contact us directly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;