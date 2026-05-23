import Image from "next/image";

const images = Array.from({ length: 4 }, (_, index) => index);

export default function CaseStudySummarySection() {
  return (
    <section className="case-study-summary-section" aria-labelledby="case-study-summary-title">
      <style>{`
        .case-study-summary-section {
          --blue: #0D162F;
          --orange: #F26E35;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(34px, 5vw, 76px) clamp(28px, 4vw, 72px) clamp(88px, 10vw, 150px);
        }
        .case-study-summary-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .case-study-summary-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .case-study-summary-image {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 870 / 750;
          border-radius: 18px;
          object-fit: cover;
        }
        .case-study-summary-content {
          display: grid;
          grid-template-columns: minmax(120px, 0.34fr) minmax(0, 1fr) minmax(110px, 0.34fr);
          gap: clamp(28px, 5vw, 82px);
          margin-top: clamp(76px, 8vw, 112px);
          align-items: start;
        }
        .case-study-summary-kicker {
          color: var(--orange);
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.22px;
          text-transform: uppercase;
          padding-top: 4px;
        }
        .case-study-summary-copy {
          min-width: 0;
        }
        .case-study-summary-title {
          max-width: 760px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(30px, 3.2vw, 42px);
          font-style: normal;
          font-weight: 600;
          line-height: 90%;
          letter-spacing: -1.26px;
        }
        .case-study-summary-text {
          max-width: 725px;
          margin-top: 36px;
          color: rgba(13, 22, 47, 0.60);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.48px;
        }
        @media (max-width: 980px) {
          .case-study-summary-content {
            grid-template-columns: 1fr;
            gap: 22px;
          }
        }
        @media (max-width: 620px) {
          .case-study-summary-section {
            padding: 34px 18px 88px;
          }
          .case-study-summary-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .case-study-summary-image {
            border-radius: 16px;
          }
          .case-study-summary-content {
            margin-top: 54px;
          }
          .case-study-summary-title {
            font-size: 28px;
            letter-spacing: -0.84px;
            line-height: 94%;
          }
          .case-study-summary-text {
            margin-top: 26px;
            font-size: 15px;
            letter-spacing: -0.36px;
          }
        }
      `}</style>

      <div className="case-study-summary-shell">
        <div className="case-study-summary-grid">
          {images.map((item) => (
            <Image
              key={item}
              className="case-study-summary-image"
              src="/images/Rectangle 4305.png"
              width={870}
              height={750}
              alt=""
            />
          ))}
        </div>

        <div className="case-study-summary-content">
          <div className="case-study-summary-kicker">(Summary)</div>

          <div className="case-study-summary-copy">
            <h2 id="case-study-summary-title" className="case-study-summary-title">
              Rolla costa emerged with a brand and e-commerce experience that
              rivals the best in the industry.
            </h2>

            <p className="case-study-summary-text">
              Great tech deserves more than visibility. It deserves trust,
              traction, and momentum. At StratSkye, we don&apos;t just offer
              marketing services, we build growth systems. Branding. Websites.
              Social authority. Lead generation. Whether you need a stronger
              presence, a website that actually converts, or a brand people
              instantly trust, we step in where it matters most. Everything works
              together with one goal: moving your business forward. Built to earn
              attention. Designed to close deals.
            </p>
          </div>

          <div aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
