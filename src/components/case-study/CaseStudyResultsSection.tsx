import Image from "next/image";

const resultCards = [
  { metric: "90k+", label: "[this that]" },
  { metric: "95%", label: "[this that]" },
  { metric: "25+", label: "[this that]" },
];

export default function CaseStudyResultsSection() {
  return (
    <section className="case-study-results" aria-labelledby="case-study-results-title">
      <style>{`
        .case-study-results {
          --blue: #0D162F;
          --orange: #F26E35;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(34px, 5vw, 76px) clamp(28px, 4vw, 72px) clamp(92px, 11vw, 170px);
        }
        .case-study-results-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .case-study-result-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(14px, 2vw, 24px);
        }
        .case-study-result-card {
          border-radius: 20px;
          background: rgba(242, 110, 53, 0.10);
          padding: clamp(20px, 2vw, 28px);
          box-shadow: 0 16px 32px rgba(13, 22, 47, 0.06);
        }
        .case-study-result-image {
          display: block;
          width: 100%;
          aspect-ratio: 511 / 472;
          height: auto;
          border-radius: 14px;
          object-fit: cover;
        }
        .case-study-result-stat {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-top: 22px;
          color: var(--blue);
        }
        .case-study-result-metric {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: clamp(42px, 5vw, 64px);
          font-style: normal;
          font-weight: 800;
          line-height: 90%;
          letter-spacing: -1.92px;
        }
        .case-study-result-label {
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 110%;
          letter-spacing: -0.36px;
        }
        .case-study-testimonial {
          max-width: 1120px;
          margin: clamp(132px, 15vw, 210px) auto 0;
          text-align: center;
        }
        .case-study-testimonial-kicker {
          color: var(--orange);
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.22px;
          text-transform: uppercase;
          margin-bottom: clamp(76px, 8vw, 112px);
        }
        .case-study-testimonial-quote {
          margin: 0;
          color: var(--blue);
          text-align: center;
          font-family: "Google Sans Flex";
          font-size: clamp(46px, 6vw, 72px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -2.16px;
          text-transform: uppercase;
          background: linear-gradient(180deg, #0D162F 0%, rgba(13, 22, 47, 0.20) 72%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .case-study-testimonial-meta {
          display: flex;
          justify-content: center;
          gap: clamp(28px, 6vw, 74px);
          margin-top: clamp(64px, 7vw, 94px);
          color: rgba(13, 22, 47, 0.48);
          font-size: 10px;
          font-style: normal;
          font-weight: 700;
          line-height: 120%;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }
        @media (max-width: 980px) {
          .case-study-result-cards {
            grid-template-columns: 1fr;
            width: min(100%, 560px);
            margin: 0 auto;
          }
          .case-study-testimonial-quote {
            font-size: clamp(40px, 8vw, 62px);
            letter-spacing: -1.7px;
          }
        }
        @media (max-width: 620px) {
          .case-study-results {
            padding: 34px 18px 92px;
          }
          .case-study-result-card {
            border-radius: 16px;
            padding: 18px;
          }
          .case-study-result-image {
            border-radius: 12px;
          }
          .case-study-result-stat {
            flex-wrap: wrap;
          }
          .case-study-result-metric {
            font-size: 42px;
            letter-spacing: -1.26px;
          }
          .case-study-result-label {
            font-size: 16px;
          }
          .case-study-testimonial {
            margin-top: 96px;
          }
          .case-study-testimonial-kicker {
            margin-bottom: 52px;
          }
          .case-study-testimonial-quote {
            font-size: 32px;
            letter-spacing: -0.96px;
          }
          .case-study-testimonial-meta {
            flex-direction: column;
            gap: 10px;
            margin-top: 44px;
          }
        }
      `}</style>

      <div className="case-study-results-shell">
        <div className="case-study-result-cards">
          {resultCards.map((card) => (
            <article className="case-study-result-card" key={card.metric}>
              <Image
                className="case-study-result-image"
                src="/images/Rectangle 4306 (1).png"
                width={511}
                height={472}
                alt=""
              />
              <div className="case-study-result-stat">
                <span className="case-study-result-metric">{card.metric}</span>
                <span className="case-study-result-label">{card.label}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="case-study-testimonial">
          <div className="case-study-testimonial-kicker">(Happy Client)</div>
          <blockquote
            id="case-study-results-title"
            className="case-study-testimonial-quote"
          >
            “Working with StratSkye felt like adding a true growth partner to our
            team. They were proactive, strategic, and helped us improve
            everything from our brand positioning to our digital presence. Highly
            recommend them to any tech company serious about scaling.”
          </blockquote>
          <div className="case-study-testimonial-meta">
            <span>Huzaifa Bin Ali</span>
            <span>Head of Design - Hontech</span>
          </div>
        </div>
      </div>
    </section>
  );
}
