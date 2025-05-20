import AboutHero from "@/components/about/AboutHero";
import MissionValues from "@/components/about/MissionValues";
import Team from "@/components/about/Team";
import Stats from "@/components/about/Stats";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <MissionValues />
      <Stats />
      <Team />
      <AppointmentCTA />
    </div>
  );
}