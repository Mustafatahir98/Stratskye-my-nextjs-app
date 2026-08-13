import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutAnimations from "@/components/AboutAnimations";

export const metadata: Metadata = {
  title: "About Stratskye - B2B Tech Marketing Agency",
  description:
    "Stratskye is a B2B tech marketing agency for SaaS and AI startups, building demand gen, ABM, content, SEO and RevOps systems.",
  alternates: {
    canonical: "/about",
  },
};

const aboutPageSchema = `{
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
      "foundingDate": "2019",
      "description": "Stratskye is a remote B2B growth marketing agency built by two engineers for technical founders and B2B companies whose products are stronger than their market presence.",
      "slogan": "Your product is technically strong. The market just does not understand it yet.",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 11,
        "unitText": "specialists"
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
        "B2B growth marketing",
        "B2B tech marketing",
        "SaaS marketing",
        "AI startup marketing",
        "Deep tech marketing",
        "Fintech marketing",
        "Technical product positioning",
        "LinkedIn content strategy",
        "SEO and technical website work",
        "Social media management",
        "Email marketing",
        "Lead generation",
        "Copywriting",
        "Podcast and media placement"
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
      "@type": "ProfessionalService",
      "@id": "https://stratskye.com/#professional-service",
      "name": "Stratskye",
      "url": "https://stratskye.com/",
      "image": "https://stratskye.com/images/Logo%20Container.png",
      "email": "admin@stratskye.com",
      "description": "Stratskye is a remote professional service provider offering B2B growth marketing, positioning, LinkedIn content strategy, SEO, technical website work, social media management, email marketing, lead generation, copywriting, and podcast and media placement for technical B2B companies.",
      "parentOrganization": {
        "@id": "https://stratskye.com/#organization"
      },
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
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "B2B Growth Marketing Services",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B Growth Marketing Services",
            "serviceType": "B2B growth marketing",
            "provider": {
              "@id": "https://stratskye.com/#organization"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "B2B tech, SaaS, AI, fintech, infrastructure, deep tech, and professional services companies"
            }
          }
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
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "NUST"
      },
      "award": "APICTA 2015 Gold Award",
      "knowsAbout": [
        "Computer Engineering",
        "Deep tech marketing",
        "Fractional CMO work",
        "Computer vision",
        "Object detection",
        "Technical product marketing",
        "B2B growth marketing"
      ],
      "description": "Noor Farjad is Co-founder and CEO of Stratskye. She is a Computer Engineer from NUST, an APICTA 2015 Gold Award recipient, a former fractional CMO in deep tech, and the founder of Stratskye since 2019."
    },
    {
      "@type": "Person",
      "@id": "https://stratskye.com/about#farjad",
      "name": "Farjad",
      "jobTitle": "Co-founder",
      "worksFor": {
        "@id": "https://stratskye.com/#organization"
      },
      "knowsAbout": [
        "Electrical Engineering",
        "Product building",
        "Augmented reality products",
        "Unity development",
        "Manufacturing Excellence",
        "Systems thinking",
        "Technical product strategy",
        "B2B growth systems"
      ],
      "description": "Farjad is Co-founder of Stratskye. He is an Electrical Engineer who built foreign language applications and augmented reality products before spending a decade in Manufacturing Excellence at P&G, where he developed the systems thinking that now supports Stratskye engagements."
    },
    {
      "@type": "AboutPage",
      "@id": "https://stratskye.com/about#aboutpage",
      "url": "https://stratskye.com/about",
      "name": "About Stratskye - B2B Tech Marketing Agency",
      "headline": "Your product is technically strong. The market just does not understand it yet.",
      "description": "Learn about Stratskye, a remote B2B growth marketing agency built by engineers for technical founders, SaaS, AI, deep tech, fintech, infrastructure, professional services, and B2B technology companies.",
      "isPartOf": {
        "@id": "https://stratskye.com/#website"
      },
      "about": {
        "@id": "https://stratskye.com/#organization"
      },
      "mainEntity": {
        "@id": "https://stratskye.com/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://stratskye.com/#logo"
      },
      "inLanguage": "en",
      "publisher": {
        "@id": "https://stratskye.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://stratskye.com/about#faq",
      "url": "https://stratskye.com/about",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What industries does Stratskye work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stratskye works with B2B tech, SaaS, AI, fintech, infrastructure, deep tech, and professional services companies."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an engagement typically run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most clients start with a minimum three-month engagement. Many continue beyond that."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with early-stage companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Stratskye works with early-stage companies when the product is live, there are real customers, and there is a budget to run a proper engagement."
          }
        },
        {
          "@type": "Question",
          "name": "What does the onboarding process look like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The onboarding process starts with one structured session where the team extracts what they need from the client, followed by a strategy review before anything goes live."
          }
        },
        {
          "@type": "Question",
          "name": "How involved do I need to be day to day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Client involvement is minimal day to day. Clients provide input at the start, approve before anything publishes, and review results on a regular cadence."
          }
        },
        {
          "@type": "Question",
          "name": "Does Stratskye sign NDAs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Stratskye routinely signs NDAs, and a significant portion of the client portfolio operates under one."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the team based?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stratskye operates remotely with a distributed team of 11 specialists."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book a strategy call. One conversation is enough to know whether there is a genuine fit."
          }
        }
      ]
    }
  ]
}`;

const founderStory = [
  "Noor Farjad founded Stratskye in 2019 and ran every engagement herself for five years. Every brief, every deliverable, every client conversation came through her directly.",
  "That period produced something worth noting because not a single client left due to inconsistent work. The standard she built in those years became the baseline the company still holds.",
  "Her background is in Computer Engineering from NUST. During her final year, she and Farjad were part of a team that won gold at the Asia Pacific ICT Awards in 2015, competing against professional and graduate-level teams from across the region. Their project was a powered prosthetic ankle that used electromyographic signals and neural networks to replicate human gait. It required working knowledge of signal processing, machine learning, and biomechanical modeling at a level that went well beyond typical student work.",
  "Her research after that focused on computer vision and object detection. She later held a fractional CMO role embedded inside a deep tech company, working alongside its founder through a growth period.",
  "That engagement stays under NDA, but what it gave her was something most marketers never get: an inside view of what marketing feels like when the product is genuinely complex and the stakes are real.",
  "Farjad's story starts earlier than most people expect.",
  "Before P&G, before Stratskye, he was building things. During university he worked on foreign language applications and shipped augmented reality experiences on Unity, developing an instinct for what makes a product actually usable rather than just technically functional.",
  "That product-building background is not a footnote in his story. It shaped how he thinks about every technical brief that comes through Stratskye.",
  "After university, he spent a decade at Procter and Gamble in Manufacturing Excellence. His work there was specific, that was finding where a production system was losing output, measuring the gap precisely, fixing it, and confirming the fix held.",
  "He took one of P&G's global manufacturing plants from a worldwide ranking of 15 to a ranking of 2. That kind of result comes from building systems that produce consistent output regardless of who is having a good day.",
  "When he joined Stratskye, he brought that same approach. He looked at the agency as a production system and asked the same questions he would ask on a factory floor, where is output inconsistent, what is causing it, and what needs to be built to fix it permanently.",
  "The result was a team of 11 specialists operating with documented processes, clear role boundaries, and review cycles that keep work quality from depending on any individual's availability or energy on a given week.",
];

const founderProblem = [
  "A technical founder spends years building something that works. The product is real, the problem it solves is real, and the results for early customers are real. Then comes the marketing, and something goes wrong.",
  "The agency they hire produces copy that sounds polished but hollow. It describes the product accurately at a surface level while completely missing what makes it different from the five other companies solving the same problem.",
  "Technical buyers read one paragraph, recognize that nobody on the other end actually understands what they built, and move on.",
  "This happens because most marketers approach technical products the same way a translator approaches a foreign language they learned from a textbook. They get the general meaning but miss the nuance that signals genuine understanding to someone who lives in that space.",
  "Noor and Farjad came up with building technical things. When a founder walks them through a product, they follow the architecture, the tradeoffs, and the reasoning behind the decisions.",
  "That ability to engage at that level is what allows Stratskye to produce positioning that actually lands with technical buyers, because it reflects the same depth of understanding the buyer brings to the table.",
];

const repeatableGrowth = [
  "Most marketing programs produce a burst of activity and then plateau. A strong launch quarter, a promising start, and then a gradual drift back toward inconsistency.",
  "The agency blames the market. The founder suspects the system was never really built to last.",
  "Stratskye's approach comes directly from Farjad's experience running production systems at scale. The principle is repeatable results require repeatable systems. A campaign that works once because of a talented individual is useful. A system that produces the same quality output in month nine as it did in month one is what actually compounds into the pipeline.",
  "In practice this means every engagement runs on documented processes rather than individual judgment calls. Content goes out on schedule because there is a system behind it, not because someone remembered. Performance gets reviewed against pipeline indicators rather than activity counts. When a number slips, the team identifies where in the process it slipped and fixes it there, rather than just posting more to compensate.",
  "This is what Farjad learned spending a decade fixing production systems at one of the most operationally rigorous companies in the world, and it is what he brought into Stratskye when he joined. The difference between an engagement that compounds and one that fades by month three is almost always whether a real system was built underneath the work.",
];

const discretion = [
  "A portion of Stratskye's client work is under non-disclosure agreements. That work is not referenced in pitches, not summarized on this page, and not discussed externally.",
  "This is a standing practice across the company, not a case-by-case decision.",
  "This also explains why there is no logo wall on this page. Many of the most demanding engagements Stratskye has run are for companies whose competitive positioning requires that the work stay private. Publishing client names without explicit approval is not something the company does.",
  "If you want to speak with someone who has worked with Stratskye, that can be arranged. The team will connect you with a client who has chosen to vouch for the work, on their terms and with their consent.",
];

const whoStratskyeWorksWith = [
  "Stratskye works with B2B founders and growing companies whose products are genuinely strong and whose marketing has not kept pace with that quality. The typical client is either a founder still closing deals themselves who cannot afford positioning that sounds generic, or a company that has worked with an agency before, received polished but ineffective output, and needs something built on a different foundation.",
  "The company works best with founders who are willing to be the visible voice of their brand, who want results that compound over time rather than a short-term spike, and who understand that the work requires their input at the front end.",
  "Stratskye focuses on SaaS, deep tech, AI, infrastructure, fintech, professional services, and B2B technology sectors. The typical engagement starts with founders carrying 500 to 8,000 LinkedIn followers and no consistent marketing engine, or with scale-ready companies that have a working product, stalled pipeline growth, and the budget to build something properly.",
];

const teamCopy = [
  "Stratskye is led by Noor Farjad and Farjad. The 11-person specialist team covers LinkedIn content strategy, SEO and technical website work, social media management, email marketing, lead generation, copywriting, and podcast and media placement.",
  "Senior involvement from the founders continues throughout every engagement. The team structure means no client is dependent on a single specialist, and no engagement loses momentum because one person is unavailable.",
];

const founderCards = [
  {
    name: "Noor Farjad",
    role: "Co-founder and CEO",
    copy: "Computer Engineer, NUST. APICTA 2015 Gold Award recipient. Former fractional CMO in deep tech. Stratskye founder since 2019.",
  },
  {
    name: "Farjad",
    role: "Co-founder",
    copy: "Electrical Engineer. Built foreign language applications and augmented reality products before spending a decade in Manufacturing Excellence at P&G, where he developed the systems thinking that now runs every Stratskye engagement. Stratskye operational architect.",
  },
];

const faqs = [
  {
    question: "What industries does Stratskye work with?",
    answer: "B2B tech, SaaS, AI, fintech, infrastructure, deep tech, and professional services.",
  },
  {
    question: "How long does an engagement typically run?",
    answer: "Most clients start with a minimum three-month engagement. Many continue well beyond that.",
  },
  {
    question: "Do you work with early-stage companies?",
    answer: "Yes, provided the product is live, there are real customers, and there is a budget to run a proper engagement.",
  },
  {
    question: "What does the onboarding process look like?",
    answer: "One structured session where the team extracts what they need from you, followed by a strategy review before anything goes live.",
  },
  {
    question: "How involved do I need to be day to day?",
    answer: "Minimal. You provide input at the start, approve before anything publishes, and review results on a regular cadence.",
  },
  {
    question: "Does Stratskye sign NDAs?",
    answer: "Yes, routinely. A significant portion of the client portfolio operates under one.",
  },
  {
    question: "Where is the team based?",
    answer: "Stratskye operates remotely with a distributed team of 11 specialists.",
  },
  {
    question: "How do I get started?",
    answer: "Book a strategy call. One conversation is enough to know whether there is a genuine fit.",
  },
];

function CopyStack({ items }: { items: string[] }) {
  return (
    <div className="about-copy-stack">
      {items.map((item) => (
        <p className="about-reveal" key={item}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: aboutPageSchema }}
      />
      <style>{`
        .about-page {
          --blue: #0D162F;
          --orange: #F26E35;
          --paper: #f7f2ee;
          --ink: rgba(13, 22, 47, 0.72);
          --line: rgba(13, 22, 47, 0.12);
          --dark-ink: #F5F7FF;
          --dark-muted: rgba(229, 236, 255, 0.66);
          min-height: 100vh;
          background: var(--paper);
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(108px, 9vw, 148px) clamp(20px, 4vw, 72px) clamp(36px, 5vw, 72px);
        }
        .about-shell,
        .about-wide-shell {
          width: min(100%, 1180px);
          margin: 0 auto;
        }
        .about-wide-shell {
          width: min(100%, 1328px);
        }
        .about-reveal,
        .about-team-image,
        .about-outcome-card {
          opacity: 0;
          transform: translateY(28px);
          filter: blur(8px);
        }
        .about-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.55fr);
          gap: clamp(34px, 6vw, 96px);
          align-items: end;
        }
        .about-eyebrow {
          margin-bottom: 22px;
          color: var(--orange);
          font-size: 11px;
          font-style: normal;
          font-weight: 600;
          line-height: 120%;
          letter-spacing: 0;
          text-transform: uppercase;
        }
        .about-title {
          max-width: 940px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(52px, 6.2vw, 88px);
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0;
          font-optical-sizing: auto;
          font-variation-settings: "opsz" 96, "wdth" 104, "GRAD" 0, "ROND" 0;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .about-title span {
          display: block;
          color: var(--orange);
        }
        .about-hero-copy {
          max-width: 430px;
          padding-bottom: 8px;
        }
        .about-hero-copy p {
          color: var(--ink);
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 0;
        }
        .about-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          margin-top: 30px;
          padding: 14px 20px;
          border: 1px solid rgba(13, 22, 47, 0.22);
          border-radius: 999px;
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
          line-height: 120%;
          letter-spacing: 0;
          text-decoration: none;
          text-transform: uppercase;
          transition: border-color 180ms ease, color 180ms ease, background 180ms ease;
        }
        .about-button:hover,
        .about-button:focus-visible {
          background: var(--orange);
          border-color: var(--orange);
          color: #fff;
        }
        .about-button:focus-visible {
          outline: 1px solid rgba(242, 110, 53, 0.8);
          outline-offset: 6px;
        }
        .about-signature {
          display: block;
          width: min(100%, 260px);
          height: auto;
          margin-bottom: 26px;
        }
        .about-hero-media {
          position: relative;
          display: block;
          width: min(100%, 1328px);
          margin: clamp(44px, 6vw, 86px) auto 0;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 1328 / 560;
          background: var(--blue);
        }
        .about-hero-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-hero-momentum {
          position: absolute;
          z-index: 2;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
          padding: 0;
          background: transparent;
        }
        .about-hero-momentum::before,
        .about-hero-momentum::after {
          content: "";
          position: absolute;
          top: -42px;
          bottom: 0;
          width: min(30vw, 330px);
          z-index: 2;
          opacity: 0.74;
          filter: blur(24px);
          mix-blend-mode: screen;
        }
        .about-hero-momentum::before {
          left: -12vw;
          background:
            radial-gradient(ellipse at left bottom, rgba(68, 151, 255, 0.48), rgba(68, 151, 255, 0.18) 42%, transparent 72%),
            linear-gradient(90deg, rgba(7, 17, 44, 0.58), transparent 72%);
        }
        .about-hero-momentum::after {
          right: -12vw;
          background:
            radial-gradient(ellipse at right bottom, rgba(68, 151, 255, 0.48), rgba(68, 151, 255, 0.18) 42%, transparent 72%),
            linear-gradient(270deg, rgba(7, 17, 44, 0.58), transparent 72%);
        }
        .about-hero-momentum-track {
          position: relative;
          z-index: 1;
          display: inline-flex;
          width: max-content;
          min-width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          animation: aboutHeroMomentumTicker 13s linear infinite;
        }
        .about-hero-momentum-group {
          display: flex;
          flex: 0 0 auto;
          align-items: flex-end;
        }
        .about-hero-momentum-text {
          color: #F7F2EE;
          font-family: "Google Sans Flex";
          font-size: clamp(84px, 12.5vw, 178px);
          font-style: normal;
          font-weight: 400;
          line-height: 0.86;
          letter-spacing: 0;
          font-optical-sizing: auto;
          font-variation-settings: "opsz" 96, "wdth" 104, "GRAD" 0, "ROND" 0;
          white-space: nowrap;
          padding-right: clamp(46px, 7vw, 96px);
          transform: none;
          text-shadow:
            0 0 18px rgba(247, 242, 238, 0.18),
            0 0 42px rgba(68, 151, 255, 0.18);
        }
        @keyframes aboutHeroMomentumTicker {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .about-section {
          width: min(100%, 1180px);
          margin: clamp(96px, 12vw, 172px) auto 0;
          display: grid;
          grid-template-columns: minmax(160px, 0.32fr) minmax(0, 1fr);
          gap: clamp(28px, 5vw, 78px);
          align-items: start;
        }
        .about-section-label {
          position: sticky;
          top: 112px;
          color: var(--orange);
          font-size: 11px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          letter-spacing: 0;
          text-transform: uppercase;
        }
        .about-section-title {
          max-width: 840px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(38px, 4.8vw, 64px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0;
        }
        .about-copy-stack {
          display: grid;
          gap: 22px;
          max-width: 760px;
          margin-top: 36px;
        }
        .about-copy-stack p,
        .about-section-copy {
          color: var(--ink);
          font-family: "Google Sans Flex";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 0;
        }
        .about-figure {
          margin-top: 46px;
          width: min(100%, 760px);
        }
        .about-figure-frame {
          overflow: hidden;
          border-radius: 16px;
          background: rgba(13, 22, 47, 0.08);
          aspect-ratio: 16 / 9;
        }
        .about-figure-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-dark-section {
          width: min(100%, 1328px);
          margin: clamp(104px, 13vw, 186px) auto 0;
          display: grid;
          grid-template-columns: minmax(160px, 0.28fr) minmax(0, 1fr);
          gap: clamp(28px, 5vw, 78px);
          align-items: start;
          background: var(--post-shutter-bg);
          color: var(--dark-ink);
          border-radius: clamp(18px, 2vw, 32px);
          overflow: hidden;
          padding: clamp(38px, 5vw, 72px) clamp(24px, 5vw, 72px) clamp(64px, 8vw, 112px);
        }
        .about-dark-section .about-section-label {
          color: var(--orange);
        }
        .about-dark-section .about-section-title {
          color: var(--dark-ink);
        }
        .about-dark-section .about-copy-stack p,
        .about-dark-section .about-section-copy {
          color: var(--dark-muted);
        }
        .about-proof-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 48px;
        }
        .about-proof-card {
          min-height: 188px;
          padding: 24px;
          border: 1px solid rgba(229, 236, 255, 0.1);
          border-radius: 12px;
          background: rgba(245, 247, 255, 0.035);
        }
        .about-proof-card strong {
          display: block;
          color: var(--dark-ink);
          font-size: clamp(38px, 4vw, 56px);
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0;
        }
        .about-proof-card span {
          display: block;
          margin-top: 16px;
          color: var(--dark-muted);
          font-size: 14px;
          font-weight: 500;
          line-height: 145%;
          letter-spacing: 0;
        }
        .about-inline-cta {
          margin-top: 42px;
        }
        .about-inline-cta .about-button {
          color: var(--dark-ink);
          border-color: rgba(245, 247, 255, 0.24);
        }
        .about-inline-cta .about-button:hover,
        .about-inline-cta .about-button:focus-visible {
          border-color: var(--orange);
        }
        .about-client-section {
          width: min(100%, 1180px);
          margin: clamp(96px, 12vw, 172px) auto 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(26px, 4vw, 44px);
        }
        .about-client-panel {
          min-height: 100%;
          padding: clamp(28px, 4vw, 46px);
          border-top: 1px solid var(--line);
        }
        .about-client-panel h2 {
          max-width: 520px;
          color: var(--blue);
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0;
        }
        .about-client-panel p {
          margin-top: 26px;
          color: var(--ink);
          font-size: 18px;
          line-height: 150%;
          letter-spacing: 0;
        }
        .about-team-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(260px, 0.48fr);
          gap: clamp(30px, 5vw, 72px);
          margin-top: 42px;
        }
        .about-team-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 16px;
          object-fit: cover;
        }
        .about-founder-cards {
          display: grid;
          gap: 14px;
        }
        .about-founder-card {
          padding: 22px;
          border: 1px solid var(--line);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.24);
        }
        .about-founder-card h3 {
          color: var(--blue);
          font-size: 26px;
          font-weight: 600;
          line-height: 115%;
          letter-spacing: 0;
        }
        .about-founder-role {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 11px;
          color: var(--orange);
          font-size: 10px;
          font-weight: 700;
          line-height: 130%;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .about-founder-role::before {
          content: "";
          width: 18px;
          height: 1px;
          flex: 0 0 auto;
          background: currentColor;
          box-shadow: 0 0 10px rgba(242, 110, 53, 0.34);
        }
        .about-founder-card p {
          margin-top: 20px;
          color: var(--ink);
          font-size: 16px;
          line-height: 145%;
          letter-spacing: 0;
        }
        .about-faq-section {
          width: min(100%, 1180px);
          margin: clamp(104px, 13vw, 180px) auto 0;
          display: grid;
          grid-template-columns: minmax(160px, 0.32fr) minmax(0, 1fr);
          gap: clamp(28px, 5vw, 78px);
          align-items: start;
        }
        .about-faq-list {
          display: grid;
          gap: 0;
          border-top: 1px solid var(--line);
        }
        .about-faq-item {
          display: grid;
          grid-template-columns: minmax(0, 0.6fr) minmax(0, 0.85fr);
          gap: clamp(20px, 4vw, 58px);
          padding: 28px 0;
          border-bottom: 1px solid var(--line);
        }
        .about-faq-item h3 {
          color: var(--blue);
          font-size: 24px;
          font-weight: 600;
          line-height: 112%;
          letter-spacing: 0;
        }
        .about-faq-item p {
          color: var(--ink);
          font-size: 17px;
          line-height: 145%;
          letter-spacing: 0;
        }
        .about-closing {
          width: min(100%, 1328px);
          margin: clamp(104px, 13vw, 180px) auto 0;
          padding: clamp(44px, 7vw, 92px);
          border-radius: clamp(18px, 2vw, 32px);
          background: var(--orange);
          color: #fff;
        }
        .about-closing h2 {
          max-width: 860px;
          color: #fff;
          font-size: clamp(42px, 5.6vw, 78px);
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0;
        }
        .about-closing p {
          max-width: 620px;
          margin-top: 28px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 18px;
          line-height: 150%;
          letter-spacing: 0;
        }
        .about-closing .about-button {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.42);
        }
        .about-closing .about-button:hover,
        .about-closing .about-button:focus-visible {
          background: #fff;
          border-color: #fff;
          color: var(--orange);
        }
        .about-footer-line {
          margin-top: 48px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.28);
          color: rgba(255, 255, 255, 0.72);
          font-size: 12px;
          font-weight: 600;
          line-height: 150%;
          letter-spacing: 0;
          text-transform: uppercase;
        }
        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-team-image,
          .about-outcome-card {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
        }
        @media (max-width: 980px) {
          .about-hero,
          .about-section,
          .about-dark-section,
          .about-faq-section {
            grid-template-columns: 1fr;
          }
          .about-section-label {
            position: static;
          }
          .about-hero-copy {
            max-width: 650px;
          }
          .about-hero-media {
            aspect-ratio: 16 / 9;
          }
          .about-proof-grid,
          .about-client-section,
          .about-team-grid {
            grid-template-columns: 1fr;
          }
          .about-faq-item {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
        @media (max-width: 620px) {
          .about-page {
            padding: 102px 18px 42px;
          }
          .about-title {
            font-size: clamp(38px, 12vw, 52px);
          }
          .about-hero-copy p,
          .about-copy-stack p,
          .about-section-copy,
          .about-client-panel p,
          .about-closing p {
            font-size: 16px;
          }
          .about-hero-media {
            border-radius: 14px;
            aspect-ratio: 4 / 3;
          }
          .about-hero-momentum-text {
            font-size: clamp(58px, 17vw, 86px);
            padding-right: 34px;
          }
          .about-signature {
            width: min(74vw, 220px);
          }
          .about-section,
          .about-dark-section,
          .about-client-section,
          .about-faq-section,
          .about-closing {
            margin-top: 82px;
          }
          .about-dark-section,
          .about-closing {
            padding: 34px 18px 58px;
          }
          .about-section-title,
          .about-client-panel h2 {
            font-size: 34px;
          }
          .about-proof-grid {
            gap: 10px;
          }
          .about-proof-card {
            min-height: 150px;
          }
          .about-client-panel {
            padding: 24px 0;
          }
          .about-footer-line {
            font-size: 11px;
          }
        }
      `}</style>
      <AboutAnimations />

      <section className="about-shell about-animate-section">
        <div className="about-hero">
          <div>
            <h1 className="about-title about-reveal">
              Your product is technically strong.
              <span>The market just does not understand it yet.</span>
            </h1>
          </div>

          <div className="about-hero-copy about-reveal">
            <Image
              className="about-signature about-reveal"
              src="/images/StratSkye.png"
              width={403}
              height={126}
              alt="StratSkye"
            />
            <p>
              Stratskye is a B2B growth marketing agency built by two engineers
              who spent years on the product side before they ever ran a
              marketing campaign. That combination is rare, and it is why
              technical founders come to us when other agencies have let them
              down.
            </p>
            <Link className="about-button" href="/contact-form">
              BOOK A STRATEGY CALL
            </Link>
          </div>
        </div>
      </section>

      <section className="about-wide-shell about-animate-section">
        <div className="about-hero-media about-reveal">
          <Image
            className="about-hero-image"
            src="/images/About-main.png"
            width={1328}
            height={560}
            alt="Abstract glass wave with orange and blue light"
            priority
          />
          <div className="about-hero-momentum" aria-hidden="true">
            <div className="about-hero-momentum-track">
              <div className="about-hero-momentum-group">
                <div className="about-hero-momentum-text">IT DRIVES MOMENTUM</div>
                <div className="about-hero-momentum-text">IT DRIVES MOMENTUM</div>
                <div className="about-hero-momentum-text">IT DRIVES MOMENTUM</div>
              </div>
              <div className="about-hero-momentum-group">
                <div className="about-hero-momentum-text">IT DRIVES MOMENTUM</div>
                <div className="about-hero-momentum-text">IT DRIVES MOMENTUM</div>
                <div className="about-hero-momentum-text">IT DRIVES MOMENTUM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-animate-section" aria-labelledby="about-founders-title">
        <div className="about-section-label about-reveal">
          Who built this company and why it matters
        </div>
        <div>
          <h2 id="about-founders-title" className="about-section-title about-reveal">
            Built by people who understood technical products before they sold them.
          </h2>
          <figure className="about-figure about-reveal">
            <div className="about-figure-frame">
              <Image
                className="about-figure-image"
                src="/images/Rectangle 4306.png"
                width={760}
                height={428}
                alt="Noor and Farjad in a professional setting"
              />
            </div>
          </figure>
          <CopyStack items={founderStory} />
        </div>
      </section>

      <section className="about-dark-section about-animate-section" aria-labelledby="about-problem-title">
        <div className="about-section-label about-reveal">
          The problem most technical founders run into
        </div>
        <div>
          <h2 id="about-problem-title" className="about-section-title about-reveal">
            Strong products still fail when the market cannot understand why they matter.
          </h2>
          <CopyStack items={founderProblem} />
        </div>
      </section>

      <section className="about-section about-animate-section" aria-labelledby="about-growth-title">
        <div className="about-section-label about-reveal">
          How Stratskye turns technical expertise into repeatable growth
        </div>
        <div>
          <h2 id="about-growth-title" className="about-section-title about-reveal">
            Repeatable results require repeatable systems.
          </h2>
          <CopyStack items={repeatableGrowth} />
        </div>
      </section>

      <section className="about-dark-section about-animate-section" aria-labelledby="about-built-title">
        <div className="about-section-label about-reveal">
          What Stratskye has built since 2019
        </div>
        <div>
          <h2 id="about-built-title" className="about-section-title about-reveal">
            What Stratskye has built since 2019
          </h2>
          <p className="about-section-copy about-reveal">
            Stratskye operated as a one-person agency for its first five years.
            That period was the proof-of-concept for the quality standard. When
            Farjad joined and the team was built out, the goal was to hold the
            same standard across 11 people that one person had held alone.
          </p>
          <p className="about-section-copy about-reveal" style={{ marginTop: "24px" }}>
            The company has worked with 60 or more brands across B2B tech,
            fintech, and SaaS since 2019. Clients typically see a 2x reduction
            in sales cycle length within the first six months of engagement. 90%
            of clients either return for a second engagement or refer another
            founder within twelve months. The delivery consistency record has
            been held since the company was founded.
          </p>
          <div className="about-proof-grid">
            <div className="about-proof-card about-reveal">
              <strong>60+</strong>
              <span>Brands across B2B tech, fintech, and SaaS since 2019.</span>
            </div>
            <div className="about-proof-card about-reveal">
              <strong>2x</strong>
              <span>Reduction in sales cycle length clients typically see within the first six months of engagement.</span>
            </div>
            <div className="about-proof-card about-reveal">
              <strong>90%</strong>
              <span>Of clients either return for a second engagement or refer another founder within twelve months.</span>
            </div>
          </div>
          <p className="about-section-copy about-reveal" style={{ marginTop: "32px" }}>
            The delivery consistency record has been held since the company was founded.
          </p>
        </div>
      </section>

      <section className="about-client-section about-animate-section">
        <div className="about-client-panel about-reveal">
          <div className="about-eyebrow">The work, documented in full</div>
          <h2>The work, documented in full</h2>
          <p>
            Stratskye publishes detailed case studies covering the full scope of
            client engagements, including starting conditions, strategy,
            execution, and measurable outcomes across every channel. Rather than
            pulling individual numbers out of context here, the case studies give
            a complete picture of what the work actually looks like from start to
            finish.
          </p>
          <Link className="about-button" href="/case-study">
            EXPLORE THE CASE STUDIES
          </Link>
        </div>

        <div className="about-client-panel about-reveal">
          <div className="about-eyebrow">See the work in action</div>
          <h2>See the work in action</h2>
          <p>
            Stratskye publishes detailed case studies covering the full scope of
            client engagements, including starting conditions, strategy,
            execution, and measurable outcomes. If you want to understand what
            working with the team actually produces, the case studies are the
            most direct way to see it.
          </p>
          <Link className="about-button" href="/case-study">
            VIEW CLIENT CASE STUDIES
          </Link>
        </div>
      </section>

      <section className="about-section about-animate-section" aria-labelledby="about-discretion-title">
        <div className="about-section-label about-reveal">
          Discretion as a working principle
        </div>
        <div>
          <h2 id="about-discretion-title" className="about-section-title about-reveal">
            Discretion is part of the operating model.
          </h2>
          <CopyStack items={discretion} />
        </div>
      </section>

      <section className="about-dark-section about-animate-section" aria-labelledby="about-fit-title">
        <div className="about-section-label about-reveal">
          Who Stratskye works with
        </div>
        <div>
          <h2 id="about-fit-title" className="about-section-title about-reveal">
            Stratskye works with B2B founders whose products are stronger than their market presence.
          </h2>
          <CopyStack items={whoStratskyeWorksWith} />
        </div>
      </section>

      <section className="about-section about-animate-section" aria-labelledby="about-team-title">
        <div className="about-section-label about-reveal">
          The team
        </div>
        <div>
          <h2 id="about-team-title" className="about-section-title about-reveal">
            Senior founder involvement, supported by an 11-person specialist team.
          </h2>
          <div className="about-team-grid">
            <div>
              <figure className="about-figure about-reveal" style={{ marginTop: 0 }}>
                <div className="about-figure-frame">
                  <Image
                    className="about-figure-image"
                    src="/images/about-tech-team.jpg"
                    width={1260}
                    height={750}
                    alt="Software engineers collaborating around computer screens"
                  />
                </div>
              </figure>
              <CopyStack items={teamCopy} />
            </div>

            <div className="about-founder-cards">
              {founderCards.map((founder) => (
                <article className="about-founder-card about-reveal" key={founder.name}>
                  <h3>{founder.name}</h3>
                  <div className="about-founder-role">{founder.role}</div>
                  <p>{founder.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-faq-section about-animate-section" aria-labelledby="about-faq-title">
        <div className="about-section-label about-reveal">
          Frequently asked questions
        </div>
        <div>
          <h2 id="about-faq-title" className="about-section-title about-reveal">
            Frequently asked questions
          </h2>
          <div className="about-faq-list">
            {faqs.map((faq) => (
              <article className="about-faq-item about-reveal" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-closing about-animate-section" aria-labelledby="about-closing-title">
        <div className="about-eyebrow about-reveal" style={{ color: "rgba(255, 255, 255, 0.72)" }}>
          CLOSING CTA
        </div>
        <h2 id="about-closing-title" className="about-reveal">
          Your product deserves marketing that reflects what it actually does.
        </h2>
        <p className="about-reveal">
          Stratskye has been building that for B2B founders since 2019. One
          conversation is enough to understand whether there is a real fit and
          whether there is a system worth building for your specific situation.
        </p>
        <Link className="about-button about-reveal" href="/contact-form">
          BOOK A STRATEGY CALL
        </Link>
        <div className="about-footer-line about-reveal">
          Stratskye | Founded 2019 | Team of 11 Specialists B2B Growth Marketing | LinkedIn | SEO | Content | Lead Generation admin@stratskye.com
        </div>
      </section>
    </main>
  );
}
