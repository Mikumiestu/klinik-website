import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import LocationMap from "@/components/contact/LocationMap";

export default function ContactPage() {
  return (
    <div>
      <ContactInfo />
      <LocationMap />
      <ContactForm />
    </div>
  );
}