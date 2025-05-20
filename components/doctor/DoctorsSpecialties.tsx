// components/doctors/DoctorsSpecialties.tsx
"use client";

export default function DoctorsSpecialties() {
  const specialties = [
    { name: "Cardiology", count: 8 },
    { name: "Neurology", count: 5 },
    { name: "Pediatrics", count: 7 },
    { name: "Orthopedics", count: 6 },
    { name: "Dermatology", count: 4 },
    { name: "Ophthalmology", count: 3 },
  ];

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Specialties</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialties.map((specialty) => (
            <div key={specialty.name} className="bg-background p-4 rounded-lg text-center">
              <h3 className="font-medium">{specialty.name}</h3>
              <p className="text-sm text-muted-foreground">{specialty.count} Doctors</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}