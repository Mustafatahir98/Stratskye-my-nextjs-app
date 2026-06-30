import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesListSection from "@/components/services/ServicesListSection";
import ServicesTestimonialSection from "@/components/services/ServicesTestimonialSection";

export const metadata: Metadata = {
  title: "B2B Tech Marketing Services for SaaS & AI - Stratskye",
  description:
    "B2B tech marketing services for SaaS and AI startups: demand gen, lead gen, ABM, content, SEO, automation, paid media and RevOps.",
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesListSection />
      <ServicesTestimonialSection />
    </main>
  );
}
