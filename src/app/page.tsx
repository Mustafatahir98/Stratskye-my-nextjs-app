import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ThirdSection from "@/components/ThirdSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import EightSection from "@/components/EightSection";
import NinethSection from "@/components/NinethSection";
import NewsletterPopup from "@/components/NewsletterPopup";
import TenthSection from "@/components/tenthsection";

export const metadata: Metadata = {
  title: "B2B Tech Marketing Agency for SaaS & AI Growth - Stratskye",
  description:
    "B2B tech marketing for SaaS and AI startups: demand gen, lead gen, ABM, content, SEO, and RevOps for pipeline growth.",
};

const homePageSchema = `{
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
      "description": "Stratskye is a remote B2B tech marketing agency helping SaaS, AI, deep tech, fintech, infrastructure, professional services, and B2B technology companies build stronger positioning, visibility, content, demand generation, and growth systems.",
      "foundingDate": "2019",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "founder": [
        {
          "@id": "https://stratskye.com/about#noor-farjad"
        },
        {
          "@id": "https://stratskye.com/about#farjad"
        }
      ],
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
        "Email marketing",
        "Brand positioning",
        "Lead generation"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "admin@stratskye.com",
          "contactType": "Business inquiries",
          "areaServed": "Worldwide",
          "availableLanguage": [
            "English"
          ]
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://stratskye.com/about#noor-farjad",
      "name": "Noor Farjad",
      "jobTitle": "Co-founder and CEO",
      "worksFor": {
        "@id": "https://stratskye.com/#organization"
      },
      "description": "Computer Engineer from NUST, APICTA 2015 Gold Award recipient, former fractional CMO in deep tech, and Stratskye founder since 2019."
    },
    {
      "@type": "Person",
      "@id": "https://stratskye.com/about#farjad",
      "name": "Farjad",
      "jobTitle": "Co-founder",
      "worksFor": {
        "@id": "https://stratskye.com/#organization"
      },
      "description": "Electrical Engineer with product-building experience, augmented reality product experience, and a decade in Manufacturing Excellence at P&G."
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
      "@id": "https://stratskye.com/#webpage",
      "url": "https://stratskye.com/",
      "name": "B2B Tech Marketing Agency for SaaS and AI Growth",
      "headline": "B2B Tech Marketing Agency for SaaS and AI Growth",
      "description": "Stratskye helps B2B tech, SaaS, AI, fintech, infrastructure, deep tech, and professional services companies build marketing systems for positioning, visibility, content, demand generation, and pipeline growth.",
      "isPartOf": {
        "@id": "https://stratskye.com/#website"
      },
      "about": {
        "@id": "https://stratskye.com/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://stratskye.com/#logo"
      },
      "mainEntity": {
        "@id": "https://stratskye.com/#professional-service"
      },
      "breadcrumb": {
        "@id": "https://stratskye.com/#breadcrumb"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://stratskye.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://stratskye.com/"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://stratskye.com/#professional-service",
      "name": "Stratskye",
      "url": "https://stratskye.com/",
      "image": "https://stratskye.com/images/Logo%20Container.png",
      "email": "admin@stratskye.com",
      "description": "Stratskye is a remote professional service provider offering B2B tech growth marketing, positioning, content, SEO, demand generation, account-based marketing, and email marketing services for SaaS, AI, and technical B2B companies.",
      "parentOrganization": {
        "@id": "https://stratskye.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "sameAs": [
        "https://www.instagram.com/stratskye",
        "https://www.linkedin.com/company/101893541/"
      ],
      "founder": [
        {
          "@id": "https://stratskye.com/about#noor-farjad"
        },
        {
          "@id": "https://stratskye.com/about#farjad"
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://stratskye.com/#b2b-tech-growth-marketing-service"
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://stratskye.com/#b2b-tech-growth-marketing-service",
      "name": "B2B Tech Growth Marketing Services",
      "url": "https://stratskye.com/services",
      "serviceType": "B2B tech growth marketing",
      "provider": {
        "@id": "https://stratskye.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "SaaS, AI, deep tech, fintech, infrastructure, professional services, and B2B technology companies"
      },
      "description": "B2B tech growth marketing services for companies that need clearer positioning, stronger visibility, content, SEO, demand generation, account-based marketing, email marketing, and repeatable pipeline systems.",
      "hasOfferCatalog": {
        "@id": "https://stratskye.com/#offer-catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://stratskye.com/#offer-catalog",
      "name": "Stratskye Growth Marketing Service Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Demand Generation",
          "itemOffered": {
            "@type": "Service",
            "name": "Demand Generation",
            "serviceType": "Demand generation",
            "description": "Lead generation, lead nurturing, conversion rate optimization, landing page strategy, paid search marketing, funnel strategy, appointment setting, analytics, and reporting."
          }
        },
        {
          "@type": "Offer",
          "name": "Content and Thought Leadership",
          "itemOffered": {
            "@type": "Service",
            "name": "Content and Thought Leadership",
            "serviceType": "Content marketing",
            "description": "Long-form content, SEO blogs, executive and founder-led content, whitepapers, industry reports, video scripts, LinkedIn content strategy, content calendars, and editorial planning."
          }
        },
        {
          "@type": "Offer",
          "name": "Account Based Marketing",
          "itemOffered": {
            "@type": "Service",
            "name": "Account Based Marketing",
            "serviceType": "Account-based marketing",
            "description": "Target account identification, list building, personalized outreach campaigns, multi-channel account engagement, sales and marketing alignment, ABM reporting, and enterprise-focused sales assets."
          }
        },
        {
          "@type": "Offer",
          "name": "Brand and Positioning Strategy",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand and Positioning Strategy",
            "serviceType": "Brand strategy",
            "description": "Brand identity, messaging frameworks, competitive positioning analysis, value proposition development, audience research, persona research, brand voice, pitch decks, and sales narrative support."
          }
        },
        {
          "@type": "Offer",
          "name": "Digital and Growth Marketing",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital and Growth Marketing",
            "serviceType": "Digital growth marketing",
            "description": "SEO strategy, technical optimization, website performance improvements, organic traffic growth, keyword growth, conversion path optimization, growth campaign planning, and performance tracking."
          }
        },
        {
          "@type": "Offer",
          "name": "Email Marketing",
          "itemOffered": {
            "@type": "Service",
            "name": "Email Marketing",
            "serviceType": "Email marketing",
            "description": "Nurture sequences, drip campaigns, newsletter strategy, newsletter production, segmentation, audience targeting, automated workflow setup, subject line testing, copy testing, and campaign performance analysis."
          }
        }
      ]
    }
  ]
}`;

export default function Home() {
  return (
    <div className="main-wrapper relative w-full overflow-hidden bg-[#0d1326] selection:bg-orange-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: homePageSchema }}
      />
      <NewsletterPopup />
      <div id="top" />
      <HeroSection />
      <div id="about">
        <StorySection />
      </div>
      <ThirdSection />
      <FifthSection />
      <div id="services">
        <SixthSection />
      </div>
      <div id="case-studies">
        <SeventhSection />
      </div>
      <WorkWithUsSection />
      <EightSection />
      <div id="blog">
        <NinethSection />
      </div>
      <div id="contact">
        <TenthSection />
      </div>
    </div>
  );
}
