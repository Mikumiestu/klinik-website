// components/appointment/AppointmentHero.tsx
"use client";

export default function AppointmentHero() {
  return (
    <section className="bg-primary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Schedule your visit with our healthcare professionals quickly and easily.
        </p>
      </div>
    </section>
  );
}