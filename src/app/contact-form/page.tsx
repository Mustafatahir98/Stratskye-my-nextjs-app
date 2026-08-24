import type { Metadata } from "next";
import ContactDirectSection from "@/components/contact-form/ContactDirectSection";
import ContactFormHero from "@/components/contact-form/ContactFormHero";

export const metadata: Metadata = {
  title: "Contact B2B Tech Marketing Agency - Stratskye",
  description: "Tell Stratskye what you are building and what is getting in the way.",
  alternates: {
    canonical: "/contact-form",
  },
};

const contactPageSchema = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://stratskye.com/#organization",
      "name": "Stratskye",
      "url": "https://stratskye.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://stratskye.com/#logo",
        "url": "https://stratskye.com/images/Logo%20Container.png",
        "contentUrl": "https://stratskye.com/images/Logo%20Container.png",
        "caption": "Stratskye logo"
      },
      "email": "admin@stratskye.com",
      "description": "Stratskye is a remote B2B tech growth marketing agency helping SaaS, AI, deep tech, fintech, infrastructure, professional services, and B2B technology companies build stronger positioning, visibility, content, demand generation, and growth systems.",
      "areaServed": "Worldwide",
      "sameAs": [
        "https://www.instagram.com/stratskye",
        "https://www.linkedin.com/company/101893541/"
      ],
      "contactPoint": {
        "@id": "https://stratskye.com/contact-form#business-contact"
      }
    },
    {
      "@type": "ContactPoint",
      "@id": "https://stratskye.com/contact-form#business-contact",
      "email": "admin@stratskye.com",
      "contactType": "Business inquiries",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    },
    {
      "@type": "WebSite",
      "@id": "https://stratskye.com/#website",
      "url": "https://stratskye.com/",
      "name": "Stratskye",
      "publisher": {
        "@id": "https://stratskye.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": [
        "ContactPage",
        "WebPage"
      ],
      "@id": "https://stratskye.com/contact-form#webpage",
      "url": "https://stratskye.com/contact-form",
      "name": "Contact B2B Tech Marketing Agency | Stratskye",
      "headline": "Contact Us",
      "description": "Contact Stratskye to discuss B2B tech marketing, positioning, demand generation, content, SEO, and growth systems for your company.",
      "isPartOf": {
        "@id": "https://stratskye.com/#website"
      },
      "about": {
        "@id": "https://stratskye.com/#organization"
      },
      "mainEntity": {
        "@id": "https://stratskye.com/#professional-service"
      },
      "publisher": {
        "@id": "https://stratskye.com/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://stratskye.com/#logo"
      },
      "inLanguage": "en"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://stratskye.com/#professional-service",
      "name": "Stratskye",
      "url": "https://stratskye.com/",
      "image": "https://stratskye.com/images/Logo%20Container.png",
      "email": "admin@stratskye.com",
      "description": "Stratskye is a remote professional service provider offering B2B tech growth marketing, positioning, demand generation, content and thought leadership, account-based marketing, digital and growth marketing, SEO, and email marketing services.",
      "parentOrganization": {
        "@id": "https://stratskye.com/#organization"
      },
      "areaServed": "Worldwide",
      "sameAs": [
        "https://www.instagram.com/stratskye",
        "https://www.linkedin.com/company/101893541/"
      ],
      "contactPoint": {
        "@id": "https://stratskye.com/contact-form#business-contact"
      },
      "makesOffer": {
        "@type": "Offer",
        "name": "B2B Tech Growth Marketing Services",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://stratskye.com/services#b2b-tech-growth-marketing-service",
          "name": "B2B Tech Growth Marketing Services",
          "url": "https://stratskye.com/services",
          "serviceType": "B2B tech growth marketing",
          "provider": {
            "@id": "https://stratskye.com/#organization"
          },
          "areaServed": "Worldwide"
        }
      }
    }
  ]
}`;

export default function ContactFormPage() {
  return (
    <main className="contact-form-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: contactPageSchema }}
      />
      <ContactFormHero />
      <ContactDirectSection />
    </main>
  );
}
