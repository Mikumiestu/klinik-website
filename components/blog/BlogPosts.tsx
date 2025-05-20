// components/blog/BlogPosts.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for a Healthy Heart",
    excerpt: "Learn how to maintain cardiovascular health with these simple lifestyle changes.",
    date: "May 15, 2023",
    author: "Dr. Sarah Johnson",
    category: "Cardiology",
  },
  {
    id: 2,
    title: "Understanding Migraines",
    excerpt: "A comprehensive guide to migraine causes, symptoms, and treatments.",
    date: "April 28, 2023",
    author: "Dr. Michael Chen",
    category: "Neurology",
  },
  {
    id: 3,
    title: "Childhood Vaccination Schedule",
    excerpt: "Everything parents need to know about keeping their children protected.",
    date: "April 10, 2023",
    author: "Dr. Emily Rodriguez",
    category: "Pediatrics",
  },
  {
    id: 4,
    title: "Preventing Sports Injuries",
    excerpt: "How to stay active while minimizing your risk of common sports injuries.",
    date: "March 22, 2023",
    author: "Dr. David Wilson",
    category: "Orthopedics",
  },
  {
    id: 5,
    title: "The Importance of Sleep",
    excerpt: "Discover how quality sleep affects your overall health and wellbeing.",
    date: "March 15, 2023",
    author: "Dr. Sarah Johnson",
    category: "General Health",
  },
  {
    id: 6,
    title: "Managing Stress in Modern Life",
    excerpt: "Practical strategies for reducing stress and improving mental health.",
    date: "February 28, 2023",
    author: "Dr. Lisa Wong",
    category: "Mental Health",
  },
];

export default function BlogPosts() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
                <span className="text-sm text-primary font-medium">{post.category}</span>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <p className="text-sm text-muted-foreground">By {post.author}</p>
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <Button variant="link" className="pl-0 mt-2">
                  Read More
                </Button>
              </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}