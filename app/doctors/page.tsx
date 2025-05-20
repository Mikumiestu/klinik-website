// app/doctors/page.tsx
"use client";

import DoctorsHero from "@/components/doctor/DoctorsHero";
import DoctorsList from "@/components/doctor/DoctorsList";
import DoctorsSpecialties from "@/components/doctor/DoctorsSpecialties";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export default function DoctorsPage() {
  return (
    <div>
      <DoctorsHero />
      <DoctorsList />
      <DoctorsSpecialties />
      <AppointmentCTA />
    </div>
  );
}