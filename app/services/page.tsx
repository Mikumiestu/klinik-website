import ServiceHero from "@/components/services/ServiceHero";
import ServicesList from "@/components/services/ServicesList";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export default function ServicesPage() {
  return (
    <div>
      <ServiceHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceFAQ />
      <AppointmentCTA />
    </div>
  );
}