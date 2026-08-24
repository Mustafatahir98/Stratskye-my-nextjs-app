import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Stratskye",
  description: "Terms for using the Stratskye website and services.",
};

const termsSections = [
  {
    title: "Terms of Service",
    copy: "By accessing the Stratskye website or engaging with any of our services, you agree to the terms outlined below. Please review this document thoroughly before proceeding.",
  },
  {
    title: "Acceptance of Terms",
    copy: "Continued use of this website, submission of any inquiry, or engagement with Stratskye services constitutes full acceptance of these Terms of Service alongside our Privacy Policy. Individuals who do not accept these terms should refrain from using this website or its associated services.",
  },
  {
    title: "About Stratskye",
    copy: "Stratskye is a B2B marketing agency delivering strategic marketing programmes, brand positioning, demand generation, content development, paid media, SEO, and email marketing to technology companies operating in competitive markets.",
  },
  {
    title: "Use of Website",
    copy: "This website is provided for lawful business purposes only. Users are prohibited from engaging in fraudulent activity through this platform, seeking unauthorised access to any system or data associated with this website, reproducing or distributing proprietary content without written authorisation, and providing false or misleading information through any submission channel.",
  },
  {
    title: "Intellectual Property",
    copy: "All materials published on this website, including written content, visual assets, brand elements, and strategic frameworks, are the sole property of Stratskye. Written authorisation is required before any content is reproduced, modified, or distributed in any form.",
  },
  {
    title: "Service Agreements",
    copy: "Paid engagements with Stratskye are governed by a dedicated client agreement specifying scope, deliverables, timelines, and commercial terms. The terms outlined on this page apply to general website usage and do not replace or modify any separately executed client contract.",
  },
  {
    title: "Payments and Fees",
    copy: "Fee structures and payment schedules are documented within individual client agreements or invoices. Stratskye reserves the right to revise its pricing with appropriate notice. Payments rendered for services are non-refundable except where a signed agreement explicitly provides otherwise.",
  },
  {
    title: "Third-Party Platforms",
    copy: "Service delivery at Stratskye may incorporate third-party platforms including advertising networks, analytics systems, CRM tools, and social media channels. Stratskye bears no responsibility for disruptions, policy revisions, additional fees, or performance changes originating from third-party providers outside our direct control.",
  },
  {
    title: "No Guarantees",
    copy: "Stratskye applies rigorous methodology and established practice across every engagement. Specific outcomes including traffic volume, lead acquisition, revenue figures, or search rankings cannot be guaranteed, as results are subject to factors including market conditions, competitive activity, budget parameters, and client involvement.",
  },
  {
    title: "Limitation of Liability",
    copy: "Stratskye shall not be held liable, to the extent permitted by law, for indirect, incidental, or consequential losses arising from use of this website or delivery of services. This encompasses financial loss, lost business opportunities, data loss, and loss of anticipated revenue.",
  },
  {
    title: "Confidentiality",
    copy: "All proprietary or sensitive information exchanged between Stratskye and its clients during an engagement is treated with strict confidentiality. Neither party is permitted to share such information with external parties without prior written consent, except where disclosure is required by law.",
  },
  {
    title: "Termination",
    copy: "Stratskye reserves the right to restrict or terminate website access and service delivery where these terms have been breached, where misuse has been identified, or where continued engagement is deemed contrary to the interests of Stratskye or its clients.",
  },
  {
    title: "Links to Other Websites",
    copy: "References or hyperlinks to external websites are included for informational purposes only. Stratskye does not endorse, control, or accept responsibility for the content, accuracy, or data practices of any linked third-party site.",
  },
  {
    title: "Changes to These Terms",
    copy: "These Terms of Service are subject to revision at Stratskye's discretion. Amendments will be reflected on this page with a revised effective date. Ongoing use of the website following any update constitutes acceptance of the modified terms.",
  },
  {
    title: "Governing Law",
    copy: "These Terms of Service are subject to and shall be interpreted in accordance with the applicable laws of the jurisdiction in which Stratskye is incorporated and operates.",
  },
  {
    title: "Contact Us",
    copy: "Enquiries regarding these Terms of Service may be directed to Stratskye through the following: Contact Page",
  },
];

export default function TermsOfServicesPage() {
  return (
    <main className="terms-page">
      <style>{`
        .terms-page {
          --blue: #0D162F;
          --orange: #F26E35;
          min-height: 100vh;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(112px, 9vw, 146px) clamp(18px, 4vw, 72px) clamp(74px, 8vw, 120px);
        }
        .terms-shell {
          width: min(100%, 1180px);
          margin: 0 auto;
        }
        .terms-hero {
          display: grid;
          grid-template-columns: minmax(220px, 0.78fr) minmax(320px, 1fr) auto;
          gap: clamp(28px, 7vw, 120px);
          align-items: start;
        }
        .terms-title {
          max-width: 460px;
          color: var(--blue);
          font-size: clamp(38px, 4vw, 56px);
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0;
          white-space: nowrap;
        }
        .terms-title span {
          display: block;
          color: var(--orange);
        }
        .terms-title-main {
          color: var(--blue);
        }
        .terms-date {
          justify-self: end;
          color: rgba(13, 22, 47, 0.62);
          font-size: 11px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
        }
        .terms-content {
          grid-column: 2;
          display: grid;
          gap: clamp(42px, 5.3vw, 72px);
          padding-top: clamp(116px, 12vw, 178px);
        }
        .terms-section {
          max-width: 540px;
        }
        .terms-section h2 {
          color: var(--blue);
          font-size: clamp(20px, 1.45vw, 26px);
          font-weight: 700;
          line-height: 100%;
          letter-spacing: 0;
        }
        .terms-section p {
          margin-top: 14px;
          color: rgba(13, 22, 47, 0.66);
          font-size: clamp(12px, 0.9vw, 15px);
          font-weight: 500;
          line-height: 120%;
          letter-spacing: 0;
        }
        @media (max-width: 980px) {
          .terms-hero {
            grid-template-columns: 1fr auto;
            gap: 28px;
          }
          .terms-content {
            grid-column: 1 / -1;
            width: min(100%, 620px);
            padding-top: 70px;
          }
        }
        @media (max-width: 620px) {
          .terms-page {
            padding: 104px 18px 72px;
          }
          .terms-hero {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .terms-date {
            justify-self: start;
          }
          .terms-content {
            gap: 38px;
            padding-top: 42px;
          }
          .terms-title {
            font-size: clamp(36px, 12vw, 48px);
            white-space: normal;
          }
        }
      `}</style>

      <section className="terms-shell" aria-labelledby="terms-title">
        <div className="terms-hero">
          <h1 id="terms-title" className="terms-title">
            <span className="terms-title-main">Terms of</span>
            <span>Service</span>
          </h1>

          <div className="terms-content">
            {termsSections.map((section) => (
              <section className="terms-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.copy}</p>
              </section>
            ))}
          </div>

          <p className="terms-date">Last Updated: 11/06/2026</p>
        </div>
      </section>
    </main>
  );
}
