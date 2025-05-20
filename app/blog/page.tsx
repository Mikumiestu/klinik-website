// app/blog/page.tsx
"use client";

import BlogHero from "@/components/blog/BlogHero";
import BlogPosts from "@/components/blog/BlogPosts";
import BlogCategories from "@/components/blog/BlogCategories";
import NewsletterCTA from "@/components/blog/NewsletterCTA";

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogPosts />
      <BlogCategories />
      <NewsletterCTA />
    </div>
  );
}