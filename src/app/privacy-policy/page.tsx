import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | StratSkye",
  description: "How Stratskye collects, uses, and protects your information.",
};

type PolicySection = {
  title: string;
  copy?: string;
  items?: string[];
  outro?: string;
};

const policySections: PolicySection[] = [
  {
    title: "Privacy Policy & Data Protection",
    copy: "At Stratskye, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website, products, or services.",
  },
  {
    title: "1. Information We Collect",
    copy: "We may collect the following types of information:",
    items: [
      "Personal Information: such as your name, email address, phone number, and billing details when you sign up or make a purchase.",
      "Usage Data: including your IP address, browser type, pages visited, and time spent on our site.",
      "Cookies & Tracking: we use cookies and similar technologies to enhance your browsing experience and analyze site performance.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    copy: "Your information may be used to:",
    items: [
      "Provide and improve our services",
      "Process payments and transactions",
      "Respond to customer inquiries",
      "Send important updates, offers, or newsletters. You can opt out anytime.",
      "Ensure website security and prevent fraudulent activity",
    ],
  },
  {
    title: "3. Sharing of Information",
    copy: "We do not sell or rent your personal information. However, we may share it with:",
    items: [
      "Trusted service providers who assist us in operating our business, such as payment processors and hosting services.",
      "Legal authorities if required to comply with applicable laws or protect rights and safety.",
    ],
  },
  {
    title: "4. Data Security",
    copy: "We use industry-standard measures to protect your personal information. While no system is 100% secure, we take reasonable steps to safeguard your data against unauthorized access, disclosure, or loss.",
  },
  {
    title: "5. Your Rights",
    copy: "Depending on your location, you may have the right to:",
    items: [
      "Access, update, or delete your personal information",
      "Opt out of marketing communications",
      "Request a copy of the data we hold about you",
    ],
  },
  {
    title: "6. Cookies Policy",
    copy: "Our site uses cookies to:",
    items: [
      "Remember your preferences",
      "Improve website functionality",
      "Analyze traffic and user behavior",
    ],
    outro: "You can adjust cookie settings in your browser at any time.",
  },
  {
    title: "8. Changes to This Privacy Policy",
    copy: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated Last Updated date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <style>{`
        .privacy-page {
          --blue: #0D162F;
          --orange: #F26E35;
          min-height: 100vh;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(112px, 9vw, 146px) clamp(18px, 4vw, 72px) clamp(74px, 8vw, 120px);
        }
        .privacy-shell {
          width: min(100%, 1180px);
          margin: 0 auto;
        }
        .privacy-hero {
          display: grid;
          grid-template-columns: minmax(220px, 0.78fr) minmax(320px, 1fr) auto;
          gap: clamp(28px, 7vw, 120px);
          align-items: start;
        }
        .privacy-title {
          max-width: 500px;
          color: var(--blue);
          font-size: clamp(38px, 4vw, 56px);
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0;
          white-space: nowrap;
        }
        .privacy-title span {
          display: block;
          color: var(--orange);
        }
        .privacy-title-main {
          color: var(--blue);
        }
        .privacy-date {
          justify-self: end;
          color: rgba(13, 22, 47, 0.62);
          font-size: 11px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
        }
        .privacy-content {
          grid-column: 2;
          display: grid;
          gap: clamp(42px, 5.3vw, 72px);
          padding-top: clamp(116px, 12vw, 178px);
        }
        .privacy-section {
          max-width: 560px;
        }
        .privacy-section h2 {
          color: var(--blue);
          font-size: clamp(20px, 1.45vw, 26px);
          font-weight: 700;
          line-height: 100%;
          letter-spacing: 0;
        }
        .privacy-section p,
        .privacy-section li {
          color: rgba(13, 22, 47, 0.66);
          font-size: clamp(12px, 0.9vw, 15px);
          font-weight: 500;
          line-height: 120%;
          letter-spacing: 0;
        }
        .privacy-section p {
          margin-top: 14px;
        }
        .privacy-section ul {
          display: grid;
          gap: 10px;
          margin: 14px 0 0;
          padding-left: 18px;
        }
        .privacy-section li::marker {
          color: var(--orange);
        }
        @media (max-width: 980px) {
          .privacy-hero {
            grid-template-columns: 1fr auto;
            gap: 28px;
          }
          .privacy-content {
            grid-column: 1 / -1;
            width: min(100%, 620px);
            padding-top: 70px;
          }
        }
        @media (max-width: 620px) {
          .privacy-page {
            padding: 104px 18px 72px;
          }
          .privacy-hero {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .privacy-date {
            justify-self: start;
          }
          .privacy-content {
            gap: 38px;
            padding-top: 42px;
          }
          .privacy-title {
            font-size: clamp(36px, 12vw, 48px);
            white-space: normal;
          }
        }
      `}</style>

      <section className="privacy-shell" aria-labelledby="privacy-title">
        <div className="privacy-hero">
          <h1 id="privacy-title" className="privacy-title">
            <span className="privacy-title-main">Privacy Policy &</span>
            <span>Data Protection</span>
          </h1>

          <div className="privacy-content">
            {policySections.map((section) => (
              <section className="privacy-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.copy ? <p>{section.copy}</p> : null}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.outro ? <p>{section.outro}</p> : null}
              </section>
            ))}
          </div>

          <p className="privacy-date">Last Updated: 11/06/2026</p>
        </div>
      </section>
    </main>
  );
}
