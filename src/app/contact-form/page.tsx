import type { Metadata } from "next";
import ContactDirectSection from "@/components/contact-form/ContactDirectSection";
import ContactFormHero from "@/components/contact-form/ContactFormHero";

export const metadata: Metadata = {
  title: "Contact Us | StratSkye",
  description: "Tell StratSkye what you are building and what is getting in the way.",
};

export default function ContactFormPage() {
  return (
    <main className="contact-form-page">
      <ContactFormHero />
      <ContactDirectSection />
    </main>
  );
}
