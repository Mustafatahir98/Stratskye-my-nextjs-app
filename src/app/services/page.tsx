import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesListSection from "@/components/services/ServicesListSection";
import ServicesTestimonialSection from "@/components/services/ServicesTestimonialSection";

export const metadata: Metadata = {
  title: "B2B Tech Marketing Services for SaaS & AI - Stratskye",
  description:
    "B2B tech marketing services for SaaS and AI startups: demand gen, lead gen, ABM, content, SEO, automation, paid media and RevOps.",
  alternates: {
    canonical: "/services",
  },
};

const servicesPageSchema = `{
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
        "url": "https://stratskye.com/images/Logo%20Container%201.webp",
        "contentUrl": "https://stratskye.com/images/Logo%20Container%201.webp",
        "caption": "Stratskye logo"
      },
      "email": "admin@stratskye.com",
      "description": "Stratskye is a remote B2B tech growth marketing agency helping SaaS, AI, deep tech, fintech, infrastructure, professional services, and B2B technology companies build stronger positioning, visibility, content, demand generation, and growth systems.",
      "areaServed": "Worldwide",
      "sameAs": [
        "https://www.instagram.com/stratskye",
        "https://www.linkedin.com/company/101893541/"
      ],
      "knowsAbout": [
        "B2B tech marketing",
        "SaaS marketing",
        "AI startup marketing",
        "Demand generation",
        "Account-based marketing",
        "Content marketing",
        "Founder-led content",
        "SEO strategy",
        "Technical website optimization",
        "Conversion rate optimization",
        "Email marketing",
        "Brand positioning",
        "Lead generation"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "admin@stratskye.com",
        "contactType": "Business inquiries",
        "areaServed": "Worldwide",
        "availableLanguage": "English"
      }
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
      "@type": "WebPage",
      "@id": "https://stratskye.com/services#webpage",
      "url": "https://stratskye.com/services",
      "name": "B2B Tech Marketing Services for SaaS and AI",
      "headline": "Good marketing should bring deals in. Let's make sure yours does.",
      "description": "Stratskye provides B2B tech marketing services including demand generation, content and thought leadership, account-based marketing, brand and positioning strategy, digital and growth marketing, and email marketing.",
      "isPartOf": {
        "@id": "https://stratskye.com/#website"
      },
      "about": {
        "@id": "https://stratskye.com/#organization"
      },
      "mainEntity": {
        "@id": "https://stratskye.com/services#b2b-tech-growth-marketing-service"
      },
      "publisher": {
        "@id": "https://stratskye.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://stratskye.com/#professional-service",
      "name": "Stratskye",
      "url": "https://stratskye.com/",
      "image": "https://stratskye.com/images/Logo%20Container%201.webp",
      "email": "admin@stratskye.com",
      "description": "Stratskye is a remote professional service provider offering B2B tech growth marketing, demand generation, content and thought leadership, account-based marketing, brand and positioning strategy, digital and growth marketing, and email marketing services.",
      "parentOrganization": {
        "@id": "https://stratskye.com/#organization"
      },
      "areaServed": "Worldwide",
      "sameAs": [
        "https://www.instagram.com/stratskye",
        "https://www.linkedin.com/company/101893541/"
      ],
      "hasOfferCatalog": {
        "@id": "https://stratskye.com/services#offer-catalog"
      },
      "makesOffer": {
        "@type": "Offer",
        "@id": "https://stratskye.com/services#main-offer",
        "name": "B2B Tech Growth Marketing Services",
        "itemOffered": {
          "@id": "https://stratskye.com/services#b2b-tech-growth-marketing-service"
        }
      }
    },
    {
      "@type": "Service",
      "@id": "https://stratskye.com/services#b2b-tech-growth-marketing-service",
      "name": "B2B Tech Growth Marketing Services",
      "alternateName": "B2B Tech Marketing Services for SaaS and AI",
      "url": "https://stratskye.com/services",
      "serviceType": "B2B tech growth marketing",
      "provider": {
        "@id": "https://stratskye.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "B2B companies, SaaS companies, AI companies, deep tech companies, fintech companies, infrastructure companies, and professional services companies"
      },
      "description": "A connected B2B tech marketing service system covering demand generation, content and thought leadership, account-based marketing, brand and positioning strategy, digital and growth marketing, and email marketing.",
      "hasOfferCatalog": {
        "@id": "https://stratskye.com/services#offer-catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://stratskye.com/services#offer-catalog",
      "name": "Stratskye B2B Tech Marketing Services Catalog",
      "url": "https://stratskye.com/services",
      "offeredBy": {
        "@id": "https://stratskye.com/#organization"
      },
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Demand Generation",
          "item": {
            "@type": "Offer",
            "@id": "https://stratskye.com/services#offer-demand-generation",
            "name": "Demand Generation",
            "offeredBy": {
              "@id": "https://stratskye.com/#organization"
            },
            "itemOffered": {
              "@type": "Service",
              "@id": "https://stratskye.com/services#demand-generation",
              "name": "Demand Generation",
              "serviceType": "Demand generation",
              "provider": {
                "@id": "https://stratskye.com/#organization"
              },
              "description": "Demand generation services covering lead generation, lead nurturing, conversion rate optimization, landing page strategy, paid search marketing, funnel strategy, appointment setting, analytics, and reporting."
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Content and Thought Leadership",
          "item": {
            "@type": "Offer",
            "@id": "https://stratskye.com/services#offer-content-thought-leadership",
            "name": "Content and Thought Leadership",
            "offeredBy": {
              "@id": "https://stratskye.com/#organization"
            },
            "itemOffered": {
              "@type": "Service",
              "@id": "https://stratskye.com/services#content-and-thought-leadership",
              "name": "Content and Thought Leadership",
              "serviceType": "Content marketing",
              "provider": {
                "@id": "https://stratskye.com/#organization"
              },
              "description": "Content and thought leadership services covering long-form content, SEO blogs, executive and founder-led content, whitepapers, industry reports, video scripts, short-form content, LinkedIn content strategy, content calendars, and editorial planning."
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Account Based Marketing",
          "item": {
            "@type": "Offer",
            "@id": "https://stratskye.com/services#offer-account-based-marketing",
            "name": "Account Based Marketing",
            "offeredBy": {
              "@id": "https://stratskye.com/#organization"
            },
            "itemOffered": {
              "@type": "Service",
              "@id": "https://stratskye.com/services#account-based-marketing",
              "name": "Account Based Marketing",
              "serviceType": "Account-based marketing",
              "provider": {
                "@id": "https://stratskye.com/#organization"
              },
              "description": "Account-based marketing services covering target account identification, list building, personalized outreach campaigns, multi-channel account engagement, sales and marketing alignment, ABM reporting, account tracking, enterprise-focused content, and sales assets."
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Brand and Positioning Strategy",
          "item": {
            "@type": "Offer",
            "@id": "https://stratskye.com/services#offer-brand-positioning-strategy",
            "name": "Brand and Positioning Strategy",
            "offeredBy": {
              "@id": "https://stratskye.com/#organization"
            },
            "itemOffered": {
              "@type": "Service",
              "@id": "https://stratskye.com/services#brand-and-positioning-strategy",
              "name": "Brand and Positioning Strategy",
              "serviceType": "Brand strategy",
              "provider": {
                "@id": "https://stratskye.com/#organization"
              },
              "description": "Brand and positioning strategy services covering brand identity, messaging frameworks, competitive positioning analysis, value proposition development, audience research, persona research, brand voice, tone guidelines, pitch decks, and sales narrative support."
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Digital and Growth Marketing",
          "item": {
            "@type": "Offer",
            "@id": "https://stratskye.com/services#offer-digital-growth-marketing",
            "name": "Digital and Growth Marketing",
            "offeredBy": {
              "@id": "https://stratskye.com/#organization"
            },
            "itemOffered": {
              "@type": "Service",
              "@id": "https://stratskye.com/services#digital-and-growth-marketing",
              "name": "Digital and Growth Marketing",
              "serviceType": "Digital growth marketing",
              "provider": {
                "@id": "https://stratskye.com/#organization"
              },
              "description": "Digital and growth marketing services covering SEO strategy, technical optimization, website performance improvements, organic traffic growth, keyword growth, conversion path optimization, growth campaign planning, performance tracking, and reporting."
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Email Marketing",
          "item": {
            "@type": "Offer",
            "@id": "https://stratskye.com/services#offer-email-marketing",
            "name": "Email Marketing",
            "offeredBy": {
              "@id": "https://stratskye.com/#organization"
            },
            "itemOffered": {
              "@type": "Service",
              "@id": "https://stratskye.com/services#email-marketing",
              "name": "Email Marketing",
              "serviceType": "Email marketing",
              "provider": {
                "@id": "https://stratskye.com/#organization"
              },
              "description": "Email marketing services covering nurture sequences, drip campaigns, newsletter strategy, newsletter production, segmentation, audience targeting, automated workflow setup, subject line testing, copy testing, and campaign performance analysis."
            }
          }
        }
      ]
    }
  ]
}`;

export default function ServicesPage() {
  return (
    <main className="services-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: servicesPageSchema }}
      />
      <ServicesHero />
      <ServicesListSection />
      <ServicesTestimonialSection />
    </main>
  );
}
