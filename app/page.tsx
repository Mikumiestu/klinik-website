import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Doctors from "@/components/home/Doctors";
import Testimonials from "@/components/home/Testimonials";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import LatestNews from "@/components/home/LatestNews";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <AppointmentCTA />
      <LatestNews />
    </div>
  );
}