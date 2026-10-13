import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => (
  <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <ContactInfo />
      <ContactForm />
    </div>
  </main>
);

export default ContactPage;
