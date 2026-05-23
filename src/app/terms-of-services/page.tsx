import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Services | StratSkye",
  description: "Terms for using StratSkye services.",
};

const termsSections = [
  {
    title: "Introduction",
    copy: "By accessing or using StratSkye's website and services, you agree to comply with and be bound by these Terms of Services. If you do not agree with any part of these terms, please discontinue use of our services and website.",
  },
  {
    title: "Services",
    copy: "StratSkye provides branding, website development, marketing, strategy, and growth-related services for businesses and organizations. All project scopes, timelines, and deliverables are agreed upon separately through proposals, contracts, or written communication.",
  },
  {
    title: "Client Responsibilities",
    copy: "Clients agree to provide accurate information, timely feedback, approvals, and all necessary materials required to complete the project. Delays in communication or approvals may affect timelines and delivery schedules.",
  },
  {
    title: "Payments & Billing",
    copy: "All payments must be completed according to the agreed payment schedule outlined in the proposal or invoice. Late payments may result in paused work, delayed delivery, or additional fees where applicable.",
  },
  {
    title: "Intellectual Property",
    copy: "Upon final payment, clients receive ownership of the final approved deliverables unless otherwise stated in writing. StratSkye reserves the right to showcase completed work in portfolios, marketing materials, and case studies unless restricted by agreement.",
  },
  {
    title: "Revisions & Scope Changes",
    copy: "Projects include a defined number of revisions as outlined in the project agreement. Additional revisions or requests outside the agreed scope may require additional billing and timeline adjustments.",
  },
  {
    title: "Confidentiality",
    copy: "Both parties agree to keep confidential information private and not disclose sensitive business information shared during the course of the project.",
  },
  {
    title: "Limitation of Liability",
    copy: "StratSkye is not liable for indirect, incidental, or consequential damages arising from the use of our services, websites, or deliverables. We do not guarantee specific business outcomes, revenue growth, or performance results.",
  },
  {
    title: "Third-Party Services",
    copy: "Projects may involve third-party tools, software, platforms, or services. StratSkye is not responsible for issues, downtime, pricing changes, or policies related to third-party providers.",
  },
  {
    title: "Termination",
    copy: "Either party may terminate a project or service agreement with written notice. Clients remain responsible for payment for work completed up to the termination date.",
  },
  {
    title: "Updates to Terms",
    copy: "We reserve the right to update or modify these Terms of Service at any time. Continued use of our website or services after changes are published constitutes acceptance of the revised terms.",
  },
  {
    title: "Contact",
    copy: "For questions regarding these Terms of Service, please contact StratSkye directly through our website or official communication channels.",
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
            <span className="terms-title-main">Terms for Using</span>
            <span>Our Services</span>
          </h1>

          <div className="terms-content">
            {termsSections.map((section) => (
              <section className="terms-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.copy}</p>
              </section>
            ))}
          </div>

          <p className="terms-date">Last Updated: 11/05/2026</p>
        </div>
      </section>
    </main>
  );
}
