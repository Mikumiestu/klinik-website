// components/blog/BlogHero.tsx
"use client";

export default function BlogHero() {
  return (
    <section className="bg-primary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Health Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay informed with the latest health tips, medical insights, and wellness advice from our experts.
        </p>
      </div>
    </section>
  );
}