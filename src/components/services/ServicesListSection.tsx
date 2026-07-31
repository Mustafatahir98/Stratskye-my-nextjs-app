import Image from "next/image";

const services = [
  {
    label: "01 /",
    title: "Demand Generation",
    description:
      "The goal here is simple: get the right people into your pipeline and give your team qualified conversations to close. We build the systems that make that happen on a predictable schedule rather than a lucky week.",
    points: [
      "Lead generation and lead nurturing",
      "Conversion rate optimization",
      "Landing page strategy and direction",
      "Paid search marketing",
      "Funnel strategy and appointment setting",
      "Marketing analytics and reporting",
    ],
    image: "/images/services/demand-generation.jpg",
    imageAlt: "Marketing team reviewing a campaign presentation in a meeting",
  },
  {
    label: "02 /",
    title: "Content and Thought Leadership",
    description:
      "Buyers form an opinion about you before they ever send a message. The content sitting on your website and LinkedIn either builds that case or weakens it. We create content that puts the right impression in front of the right people at the right stage of their decision.",
    points: [
      "Long-form content and SEO blogs",
      "Executive and founder-led content",
      "Whitepapers and industry reports",
      "Video scripts and short-form content",
      "LinkedIn content strategy",
      "Content calendars and editorial planning",
    ],
    image: "/images/services/content-thought-leadership.jpg",
    imageAlt: "Writer developing content ideas and notes at a desk",
  },
  {
    label: "03 /",
    title: "Account Based Marketing",
    description:
      "When the accounts you want are specific and high-value, broad campaigns waste the budget. ABM lets you go after the companies that actually move the needle, with outreach and content built around their specific context rather than a general audience brief.",
    points: [
      "Target account identification and list building",
      "Personalized outreach campaigns",
      "Multi-channel account engagement",
      "Sales and marketing alignment",
      "ABM reporting and account tracking",
      "Enterprise-focused content and sales assets",
    ],
    image: "/images/services/account-based-marketing.jpg",
    imageAlt: "Business team discussing a targeted account strategy",
  },
  {
    label: "04 /",
    title: "Brand and Positioning Strategy",
    description:
      "Founders often know their product better than anyone in their market and still struggle to explain why a buyer should choose them over a competitor. Positioning strategy closes that gap by finding the angle that is both genuinely true and genuinely compelling to the people making purchase decisions.",
    points: [
      "Brand identity and messaging frameworks",
      "Competitive positioning analysis",
      "Value proposition development",
      "Audience and persona research",
      "Brand voice and tone guidelines",
      "Pitch decks and sales narrative support",
    ],
    image: "/images/services/brand-positioning.jpg",
    imageAlt: "Strategist organizing brand ideas on a wall of notes",
  },
  {
    label: "05 /",
    title: "Digital and Growth Marketing",
    description:
      "Organic visibility built on a solid technical foundation compounds in a way paid channels cannot replicate. We handle the SEO, site performance, and conversion infrastructure so your digital presence keeps pulling in qualified traffic without requiring more budget every month to maintain it.",
    points: [
      "SEO strategy and technical optimization",
      "Website performance improvements",
      "Organic traffic and keyword growth",
      "Conversion path optimization",
      "Growth campaign planning",
      "Performance tracking and reporting",
    ],
    image: "/images/services/digital-growth-marketing.jpg",
    imageAlt: "Digital marketing analytics dashboard displayed on a laptop",
  },
  {
    label: "06 /",
    title: "Email Marketing",
    description:
      "An email list is one of the few marketing assets a company fully owns, and most B2B businesses are barely using theirs. We build the sequences and workflows that turn subscriber lists into active, converting audiences rather than contacts sitting in a CRM going cold.",
    points: [
      "Nurture sequences and drip campaigns",
      "Newsletter strategy and production",
      "Segmentation and audience targeting",
      "Automated workflow setup",
      "Subject line and copy testing",
      "Campaign performance analysis",
    ],
    image: "/images/services/email-marketing.jpg",
    imageAlt: "Email inbox open on a laptop screen",
  },
];

export default function ServicesListSection() {
  return (
    <section className="services-list-section" aria-labelledby="services-list-title">
      <style>{`
        .services-page {
          background: #f7f2ee;
        }
        .services-list-section {
          --blue: #0D162F;
          --service-ink: #F5F7FF;
          --service-muted: rgba(229, 236, 255, 0.62);
          --service-border: rgba(229, 236, 255, 0.08);
          --orange: #F26E35;
          position: relative;
          isolation: isolate;
          background: var(--post-shutter-bg);
          color: var(--service-ink);
          font-family: "Google Sans Flex";
          border-radius: clamp(28px, 4vw, 56px);
          overflow: hidden;
          padding: clamp(28px, 4vw, 72px) clamp(28px, 4vw, 72px) clamp(80px, 10vw, 150px);
        }
        .services-list-section::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 0;
          background-image: linear-gradient(
            90deg,
            rgba(229, 236, 255, 0.045) 1px,
            transparent 1px
          );
          background-size: 12.5% 100%;
          background-position: center top;
          pointer-events: none;
        }
        .services-list-shell {
          position: relative;
          z-index: 1;
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .services-list-heading {
          max-width: 620px;
          margin: 0 0 clamp(44px, 6vw, 86px);
          color: var(--service-ink);
          font-family: "Google Sans Flex";
          font-size: clamp(38px, 5vw, 72px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0;
          text-transform: uppercase;
        }
        .service-item {
          display: grid;
          grid-template-columns: minmax(78px, 0.32fr) minmax(0, 1.25fr) minmax(190px, 0.55fr);
          column-gap: clamp(28px, 5vw, 88px);
          align-items: start;
          padding: clamp(36px, 5vw, 68px) 0;
          border-top: 1px solid var(--service-border);
          transition: opacity 240ms ease;
        }
        .service-item:first-of-type {
          border-top: 0;
          padding-top: 0;
        }
        .services-list-shell:has(.service-item:hover) .service-item:not(:hover),
        .services-list-shell:has(.service-item:focus-within) .service-item:not(:focus-within) {
          opacity: 0.42;
        }
        .service-label {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: 0;
          text-transform: uppercase;
          padding-top: 10px;
        }
        .service-content {
          min-width: 0;
        }
        .service-title-button {
          display: block;
          width: 100%;
          appearance: none;
          border: 0;
          padding: 0;
          background: transparent;
          color: var(--service-ink);
          text-align: left;
          font-family: "Google Sans Flex";
          font-size: clamp(34px, 4.2vw, 64px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0;
          cursor: default;
        }
        .service-title-button:focus-visible {
          outline: 1px solid rgba(242, 110, 53, 0.8);
          outline-offset: 8px;
        }
        .service-details {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(-8px);
          transition: max-height 360ms ease, opacity 260ms ease, transform 260ms ease;
        }
        .service-item:first-of-type .service-details,
        .service-item:hover .service-details,
        .service-item:focus-within .service-details {
          max-height: 560px;
          opacity: 1;
          transform: translateY(0);
        }
        .services-list-shell:has(.service-item:hover) .service-item:first-of-type:not(:hover) .service-details,
        .services-list-shell:has(.service-item:focus-within) .service-item:first-of-type:not(:focus-within) .service-details {
          max-height: 0;
          opacity: 0;
          transform: translateY(-8px);
        }
        .service-description {
          max-width: 575px;
          margin-top: 24px;
          color: var(--service-muted);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 145%;
          letter-spacing: 0;
        }
        .service-points {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px clamp(28px, 5vw, 72px);
          margin-top: clamp(40px, 5vw, 70px);
          list-style: none;
        }
        .service-points li {
          color: var(--service-ink);
          font-family: "Google Sans Flex";
          font-size: 11px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
          letter-spacing: 0;
          text-transform: uppercase;
        }
        .service-media {
          justify-self: end;
          width: min(100%, 300px);
          padding-top: 4px;
        }
        .service-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 10px;
          object-fit: cover;
          transform-origin: center;
          transition: transform 260ms ease, box-shadow 260ms ease;
        }
        .service-item:hover .service-image,
        .service-item:focus-within .service-image {
          transform: scale(1.035);
          box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
        }
        @media (hover: none) {
          .services-list-shell:has(.service-item:hover) .service-item:not(:hover) {
            opacity: 1;
          }
          .service-details,
          .services-list-shell:has(.service-item:hover) .service-item:first-of-type:not(:hover) .service-details {
            max-height: none;
            opacity: 1;
            transform: none;
          }
        }
        @media (max-width: 980px) {
          .service-item {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: clamp(46px, 8vw, 72px) 0;
          }
          .service-label {
            padding-top: 0;
          }
          .service-media {
            justify-self: start;
            width: min(420px, 100%);
            order: 2;
          }
          .service-content {
            order: 1;
          }
          .service-details {
            max-height: none;
            opacity: 1;
            overflow: visible;
            transform: none;
          }
          .services-list-shell:has(.service-item:hover) .service-item:not(:hover),
          .services-list-shell:has(.service-item:focus-within) .service-item:not(:focus-within) {
            opacity: 1;
          }
          .services-list-shell:has(.service-item:hover) .service-item:first-of-type:not(:hover) .service-details,
          .services-list-shell:has(.service-item:focus-within) .service-item:first-of-type:not(:focus-within) .service-details {
            max-height: none;
            opacity: 1;
            transform: none;
          }
        }
        @media (max-width: 620px) {
          .services-list-section {
            border-radius: 28px;
            padding: 22px 18px 78px;
          }
          .services-list-section::before {
            background-size: 25% 100%;
          }
          .service-title-button {
            font-size: 34px;
            letter-spacing: 0;
          }
          .service-description {
            margin-top: 18px;
            font-size: 15px;
          }
          .service-points {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 30px;
          }
        }
      `}</style>

      <div className="services-list-shell">
        <h2 id="services-list-title" className="services-list-heading">
          THE PART WHERE YOU PICK WHAT YOU NEED
        </h2>

        {services.map((service) => (
          <article className="service-item" key={service.title}>
            <div className="service-label">({service.label})</div>

            <div className="service-content">
              <button className="service-title-button" type="button">
                {service.title}
              </button>

              <div className="service-details">
                <p className="service-description">{service.description}</p>
                <ul className="service-points">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="service-media">
              <Image
                className="service-image"
                src={service.image}
                width={420}
                height={240}
                alt={service.imageAlt}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
