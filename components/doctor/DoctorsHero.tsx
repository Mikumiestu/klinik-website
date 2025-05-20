// components/doctors/DoctorsHero.tsx
"use client";

export default function DoctorsHero() {
  return (
    <section className="bg-primary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Expert Doctors</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet our team of highly qualified and experienced healthcare professionals dedicated to your well-being.
        </p>
      </div>
    </section>
  );
}