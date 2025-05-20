// components/doctors/DoctorsList.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "12 years",
    image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?ga=GA1.1.1218302880.1744036001&semt=ais_hybrid&w=740",
    description: "Specialized in heart diseases and cardiovascular treatments.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "8 years",
    image: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?ga=GA1.1.1218302880.1744036001&semt=ais_hybrid&w=740",
    description: "Expert in treating disorders of the nervous system.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    experience: "10 years",
    image: "https://img.freepik.com/free-photo/asian-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling-looking-like-professional-white-background_1258-83205.jpg?ga=GA1.1.1218302880.1744036001&semt=ais_hybrid&w=740",
    description: "Dedicated to the health and well-being of children.",
  },
  {
    id: 4,
    name: "Dr. David Wilson",
    specialty: "Orthopedic Surgeon",
    experience: "15 years",
    image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    description: "Specializes in musculoskeletal system treatments.",
  },
];

export default function DoctorsList() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={doctor.image} />
                  <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{doctor.name}</CardTitle>
                <p className="text-sm text-primary">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground">{doctor.experience} experience</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm mb-4">{doctor.description}</p>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}