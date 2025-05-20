// components/appointment/DoctorsCTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DoctorsCTA() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Not Sure Which Doctor to Choose?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Browse our team of specialists to find the right healthcare professional for your needs.
        </p>
        <Button asChild variant="outline">
          <Link href="/doctors">View Our Doctors</Link>
        </Button>
      </div>
    </section>
  );
}