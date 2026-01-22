import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";

export const metadata = {
  title: "Contact Us - Triage Home",
  description: "Get in touch with Triage Home for VIP concierge services, standard nursing services, or hospital & corporate partnerships. We're always happy to assist you.",
};

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <ContactForm />
      <ContactInfo />
    </main>
  );
};

export default ContactPage;

