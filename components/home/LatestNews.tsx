"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Understanding Heart Health: Prevention Tips from Cardiologists",
    excerpt:
      "Learn about the latest research on heart disease prevention and steps you can take to maintain a healthy heart.",
    date: "May 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Heart Health",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Childhood Vaccinations: What Parents Need to Know",
    excerpt:
      "Our pediatricians provide important information about childhood vaccines and address common concerns parents may have.",
    date: "May 10, 2024",
    author: "Dr. Emily Rodriguez",
    category: "Pediatrics",
    image: "https://images.pexels.com/photos/3952246/pexels-photo-3952246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Managing Chronic Pain: New Approaches in Pain Management",
    excerpt:
      "Discover innovative methods for managing chronic pain and improving quality of life without relying solely on medication.",
    date: "May 5, 2024",
    author: "Dr. James Wilson",
    category: "Pain Management",
    image: "https://images.pexels.com/photos/4099104/pexels-photo-4099104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const LatestNews = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Health News & Tips
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Stay informed with the latest health news, medical breakthroughs, and
              wellness tips from our expert medical team.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <CardTitle className="mb-3">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;