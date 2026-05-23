import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesListSection from "@/components/services/ServicesListSection";
import ServicesTestimonialSection from "@/components/services/ServicesTestimonialSection";

export const metadata: Metadata = {
  title: "Services | StratSkye",
  description: "Strategy, creative execution, and growth systems for tech brands.",
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
