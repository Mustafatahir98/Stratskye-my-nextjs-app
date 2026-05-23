import type { Metadata } from "next";
import ContactDirectSection from "@/components/contact-form/ContactDirectSection";
import ContactFormHero from "@/components/contact-form/ContactFormHero";

export const metadata: Metadata = {
  title: "Contact Form | StratSkye",
  description: "Start a conversation with StratSkye about your growth goals.",
};

export default function ContactFormPage() {
  return (
    <main className="contact-form-page">
      <ContactFormHero />
      <ContactDirectSection />
    </main>
  );
}
