// components/blog/BlogCategories.tsx
"use client";

import { Button } from "@/components/ui/button"; // Tambahkan baris ini

export default function BlogCategories() {
  const categories = [
    { name: "All", count: 24 },
    { name: "Cardiology", count: 6 },
    { name: "Prevention", count: 8 },
    { name: "Nutrition", count: 5 },
    { name: "Mental Health", count: 3 },
    { name: "Pediatrics", count: 2 },
  ];

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button 
              key={category.name}
              variant={category.name === "All" ? "default" : "outline"}
              className="px-6 py-3"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}