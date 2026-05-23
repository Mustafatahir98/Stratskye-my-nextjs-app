import Image from "next/image";

const caseMeta = [
  { label: "Client", value: "Hontech" },
  { label: "Duration", value: "4 weeks" },
  { label: "Date", value: "Mar 12, 2025" },
];

const services = ["Strategy", "Brand Vision", "Experience Design", "Production"];

export default function CaseStudyHero() {
  return (
    <section className="case-study-hero" aria-labelledby="case-study-title">
      <style>{`
        .case-study-hero {
          --blue: #0D162F;
          --orange: #F26E35;
          min-height: 100vh;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(112px, 9vw, 146px) clamp(28px, 4vw, 72px) clamp(76px, 9vw, 126px);
        }
        .case-study-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .case-study-intro {
          display: grid;
          grid-template-columns: minmax(110px, 0.34fr) minmax(0, 1fr) minmax(110px, 0.34fr);
          gap: clamp(28px, 5vw, 82px);
          align-items: start;
        }
        .case-study-meta {
          display: grid;
          gap: 34px;
          padding-top: 58px;
        }
        .case-study-meta-item {
          display: grid;
          gap: 9px;
          color: var(--blue);
        }
        .case-study-meta-label {
          color: rgba(13, 22, 47, 0.62);
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.22px;
        }
        .case-study-meta-value {
          color: var(--blue);
          font-size: 11px;
          font-style: normal;
          font-weight: 800;
          line-height: 120%;
          letter-spacing: 0.72px;
          text-transform: uppercase;
        }
        .case-study-head {
          min-width: 0;
        }
        .case-study-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          margin-bottom: 44px;
          color: rgba(13, 22, 47, 0.58);
          font-size: 11px;
          font-style: normal;
          font-weight: 800;
          line-height: 120%;
          letter-spacing: 0.92px;
          text-transform: uppercase;
        }
        .case-study-title {
          max-width: 790px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(50px, 5.4vw, 80px);
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: -2.4px;
          font-optical-sizing: auto;
          font-variation-settings: "opsz" 96, "wdth" 104, "GRAD" 0, "ROND" 0;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .case-study-title span {
          color: var(--orange);
        }
        .case-study-summary {
          max-width: 650px;
          margin-top: 34px;
          color: rgba(13, 22, 47, 0.62);
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.54px;
        }
        .case-study-image {
          display: block;
          width: 100%;
          height: auto;
          margin-top: clamp(78px, 8vw, 118px);
          border-radius: 22px;
          object-fit: cover;
        }
        .case-study-bottom {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(310px, 0.78fr);
          gap: clamp(44px, 9vw, 150px);
          margin-top: clamp(76px, 8vw, 112px);
          align-items: start;
        }
        .case-study-kicker {
          color: var(--orange);
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.22px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .case-study-brief {
          max-width: 650px;
          color: var(--blue);
          font-size: clamp(26px, 3vw, 38px);
          font-style: normal;
          font-weight: 600;
          line-height: 92%;
          letter-spacing: -1.14px;
        }
        .case-study-services {
          min-width: 0;
        }
        .case-study-service-list {
          list-style: none;
          display: grid;
          margin: 0;
          padding: 0;
        }
        .case-study-service-list li {
          color: var(--blue);
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.36px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(13, 22, 47, 0.12);
        }
        .case-study-service-list li:first-child {
          padding-top: 0;
        }
        @media (max-width: 980px) {
          .case-study-intro {
            grid-template-columns: 1fr;
            gap: 34px;
          }
          .case-study-meta {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
            padding-top: 0;
            order: 2;
          }
          .case-study-title {
            font-size: clamp(44px, 9vw, 68px);
            letter-spacing: -1.8px;
          }
          .case-study-bottom {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 620px) {
          .case-study-hero {
            padding: 104px 18px 82px;
          }
          .case-study-tags {
            gap: 18px;
            margin-bottom: 30px;
          }
          .case-study-title {
            font-size: clamp(38px, 12vw, 52px);
            letter-spacing: -1.2px;
          }
          .case-study-summary {
            font-size: 16px;
            letter-spacing: -0.42px;
          }
          .case-study-meta {
            grid-template-columns: 1fr;
          }
          .case-study-image {
            margin-top: 54px;
            border-radius: 16px;
            aspect-ratio: 4 / 3;
            object-fit: cover;
          }
          .case-study-brief {
            font-size: 28px;
            letter-spacing: -0.84px;
          }
          .case-study-service-list li {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="case-study-shell">
        <div className="case-study-intro">
          <div className="case-study-meta" aria-label="Case study details">
            {caseMeta.map((item) => (
              <div className="case-study-meta-item" key={item.label}>
                <span className="case-study-meta-label">{item.label}</span>
                <span className="case-study-meta-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="case-study-head">
            <div className="case-study-tags" aria-label="Project categories">
              <span>#Design</span>
              <span>#Branding</span>
            </div>

            <h1 id="case-study-title" className="case-study-title">
              Redesigning a Brand Built for <span>Enterprise Deals</span>
            </h1>

            <p className="case-study-summary">
              Building a bold brand identity and digital experience for a
              performance focused sports brand made to inspire movement and
              ambition.
            </p>
          </div>

          <div aria-hidden="true" />
        </div>

        <Image
          className="case-study-image"
          src="/images/Rectangle 4303.png"
          width={1756}
          height={944}
          alt="Modern office with team members collaborating"
          priority
        />

        <div className="case-study-bottom">
          <div>
            <div className="case-study-kicker">(Project Brief)</div>
            <p className="case-study-brief">
              As the company evolved into its next phase, the goal was to create
              a unified brand experience that reflected its new vision,
              strengthened internal culture, and highlighted the voices driving
              innovation forward.
            </p>
          </div>

          <div className="case-study-services">
            <div className="case-study-kicker">(Services)</div>
            <ul className="case-study-service-list">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
