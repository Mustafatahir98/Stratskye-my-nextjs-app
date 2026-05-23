import Image from "next/image";

const contactCards = [
  {
    icon: "/images/lucide_phone.svg",
    label: "Phone number",
    value: "(00) 123 456",
    href: "tel:+00123456",
  },
  {
    icon: "/images/lucide_mail-open.svg",
    label: "Email address",
    value: "admin@stratskye.com",
    href: "mailto:admin@stratskye.com",
  },
];

export default function ContactDirectSection() {
  return (
    <section className="contact-direct-section" aria-labelledby="contact-direct-title">
      <style>{`
        .contact-direct-section {
          --blue: #0D162F;
          --orange: #F26E35;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(72px, 8vw, 124px) clamp(28px, 4vw, 72px) clamp(92px, 10vw, 150px);
        }
        .contact-direct-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(130px, 0.42fr) minmax(0, 1fr);
          gap: clamp(34px, 7vw, 130px);
          align-items: start;
        }
        .contact-direct-kicker {
          color: var(--orange);
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.22px;
          text-transform: uppercase;
          padding-top: 4px;
        }
        .contact-direct-content {
          min-width: 0;
        }
        .contact-direct-title {
          max-width: 650px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(34px, 3.6vw, 48px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -1.44px;
        }
        .contact-direct-copy {
          max-width: 660px;
          margin-top: 32px;
          color: rgba(13, 22, 47, 0.60);
          font-family: "Google Sans Flex";
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.54px;
        }
        .contact-direct-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 54px;
        }
        .contact-direct-card {
          min-height: clamp(300px, 32vw, 430px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(26px, 3vw, 36px);
          border: 1px solid rgba(13, 22, 47, 0.04);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 16px 34px rgba(13, 22, 47, 0.06);
          text-decoration: none;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .contact-direct-card:hover,
        .contact-direct-card:focus-visible {
          transform: translateY(-3px);
          border-color: rgba(242, 110, 53, 0.24);
          box-shadow: 0 20px 42px rgba(13, 22, 47, 0.10);
          outline: none;
        }
        .contact-direct-icon {
          width: 40px;
          height: 40px;
          display: block;
        }
        .contact-direct-card-bottom {
          display: grid;
          gap: 18px;
        }
        .contact-direct-label {
          color: rgba(13, 22, 47, 0.60);
          font-family: "Google Sans Flex";
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.54px;
        }
        .contact-direct-value {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: min(clamp(26px, 3vw, 42px), 3.4cqw);
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: -1.26px;
          white-space: nowrap;
        }
        .contact-direct-card {
          container-type: inline-size;
        }
        @media (max-width: 980px) {
          .contact-direct-shell {
            grid-template-columns: 1fr;
            gap: 22px;
          }
          .contact-direct-cards {
            grid-template-columns: 1fr;
          }
          .contact-direct-card {
            min-height: 280px;
          }
        }
        @media (max-width: 620px) {
          .contact-direct-section {
            padding: 66px 18px 92px;
          }
          .contact-direct-title {
            font-size: 34px;
            letter-spacing: -1.02px;
          }
          .contact-direct-copy {
            margin-top: 24px;
            font-size: 16px;
            letter-spacing: -0.42px;
          }
          .contact-direct-cards {
            margin-top: 40px;
          }
          .contact-direct-card {
            min-height: 240px;
            padding: 24px;
          }
          .contact-direct-value {
            font-size: min(clamp(20px, 6vw, 30px), 8cqw);
            letter-spacing: -0.9px;
          }
        }
      `}</style>

      <div className="contact-direct-shell">
        <div className="contact-direct-kicker">(We&apos;ve got you. Lazy approved.)</div>

        <div className="contact-direct-content">
          <h2 id="contact-direct-title" className="contact-direct-title">
            Forms aren&apos;t your thing? Contact us directly and let&apos;s make it simple.
          </h2>
          <p className="contact-direct-copy">
            Some conversations are better without forms. If you&apos;d rather keep it
            simple, give us a call or send over an email, we&apos;re ready when you are.
          </p>

          <div className="contact-direct-cards">
            {contactCards.map((card) => (
              <a className="contact-direct-card" href={card.href} key={card.href}>
                <Image
                  className="contact-direct-icon"
                  src={card.icon}
                  width={40}
                  height={40}
                  alt=""
                />
                <span className="contact-direct-card-bottom">
                  <span className="contact-direct-label">{card.label}</span>
                  <span className="contact-direct-value">{card.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
