// app/appointment/page.tsx
"use client";

import AppointmentHero from "@/components/appointment/AppointmentHero";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import DoctorsCTA from "@/components/appointment/DoctorsCTA";

export default function AppointmentPage() {
  return (
    <div>
      <AppointmentHero />
      <AppointmentForm />
      <DoctorsCTA />
    </div>
  );
}