import Image from "next/image";

const services = [
  {
    label: "01/service",
    title: "Demand Generation",
    description:
      "We build demand generation systems that attract the right audience, convert prospects into qualified leads, and support long-term revenue growth. Our approach combines data-driven campaigns with continuous optimization to make your demand engine customer acquisition performance.",
    points: [
      "Lead generation and lead nurturing",
      "Conversion rate optimization",
      "Landing pages, strategy and direction",
      "Paid search marketing",
      "Funnel strategy and appointment",
      "Marketing analytics and reporting",
    ],
  },
  {
    label: "02/service",
    title: "Content & Thought Leadership",
    description:
      "Strong brands lead conversation, not just campaigns. We create high-value content that positions your company as an authority your audience trusts, educates, engages, and converts your audience across multiple channels.",
    points: [
      "B2B pitch and lead magnet content",
      "Webinars, ebooks, and resource reports",
      "Executive thought leadership content",
      "Case studies and customer success stories",
      "Video marketing and podcast production",
      "Content strategy and distribution",
    ],
  },
  {
    label: "03/service",
    title: "Account Based Marketing",
    description:
      "For companies targeting high-value accounts, our ABM strategies create personalized experiences that improve engagement, shorten sales cycles, and strengthen relationships with decision makers.",
    points: [
      "Targeted paid demand campaigns",
      "Personalized outreach sequences",
      "Account segmentation and buyer persona",
      "Sales enablement assets",
      "LinkedIn and email based ABM campaigns",
      "CRM and intent data integration",
    ],
  },
  {
    label: "04/service",
    title: "Brand & Positioning Strategy",
    description:
      "Your brand is more than visuals. It is how your audience perceives your value. We help businesses refine their positioning, clarify messaging, and build a strong, credible presence that resonates with the right market.",
    points: [
      "Brand messaging and differentiation",
      "Positioning strategy",
      "Brand identity and visual system",
      "Website messaging and UX optimization",
      "Competitor market analysis",
      "Brand guidelines and content direction",
    ],
  },
  {
    label: "05/service",
    title: "Digital & Growth Marketing",
    description:
      "We combine organic growth strategies with performance-driven execution to help brands increase visibility, build communities, and scale sustainably across digital channels.",
    points: [
      "SEO and organic growth strategies",
      "Social media marketing and community building",
      "Paid advertising campaigns",
      "Marketing automation and CRM integration",
      "Analytics and growth reporting",
      "Multi-channel campaign management",
    ],
  },
  {
    label: "06/service",
    title: "Email Marketing",
    description:
      "Email remains one of the highest performing marketing channels when executed strategically. We create personalized email campaigns that improve engagement, nurture leads, and drive customer retention.",
    points: [
      "Campaign strategy and execution",
      "Drip campaigns and nurture sequences",
      "Newsletter creation and publishing",
      "A/B testing and performance optimization",
      "Audience segmentation and automation",
      "Email copywriting and design",
    ],
  },
];

export default function ServicesListSection() {
  return (
    <section className="services-list-section" aria-labelledby="services-list-title">
      <style>{`
        .services-list-section {
          --blue: #0D162F;
          --orange: #F26E35;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(28px, 4vw, 72px) clamp(28px, 4vw, 72px) clamp(80px, 10vw, 150px);
        }
        .services-list-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .services-list-heading {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .service-item {
          display: grid;
          grid-template-columns: minmax(78px, 0.32fr) minmax(0, 1.25fr) minmax(190px, 0.55fr);
          column-gap: clamp(28px, 5vw, 88px);
          align-items: start;
          padding: clamp(36px, 5vw, 68px) 0;
          border-top: 1px solid rgba(13, 22, 47, 0.08);
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
          letter-spacing: -0.22px;
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
          color: var(--blue);
          text-align: left;
          font-family: "Google Sans Flex";
          font-size: clamp(34px, 4.2vw, 64px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -1.92px;
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
          max-height: 420px;
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
          color: rgba(13, 22, 47, 0.62);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%;
          letter-spacing: -0.32px;
        }
        .service-points {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px clamp(28px, 5vw, 72px);
          margin-top: clamp(40px, 5vw, 70px);
          list-style: none;
        }
        .service-points li {
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 11px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
          letter-spacing: 0.72px;
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
          box-shadow: 0 18px 34px rgba(13, 22, 47, 0.12);
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
            padding: 22px 18px 78px;
          }
          .service-title-button {
            font-size: 34px;
            letter-spacing: -1.02px;
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
          Services
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
                src="/images/Rectangle 4311.png"
                width={420}
                height={240}
                alt=""
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
