// components/blog/NewsletterCTA.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterCTA() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-primary/10 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Subscribe to our newsletter for the latest health news and tips delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Input type="email" placeholder="Your email address" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  );
}