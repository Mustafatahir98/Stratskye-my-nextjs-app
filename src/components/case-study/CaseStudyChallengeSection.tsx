import Image from "next/image";

export default function CaseStudyChallengeSection() {
  return (
    <section
      className="case-study-challenge"
      aria-labelledby="case-study-challenge-title"
    >
      <style>{`
        .case-study-challenge {
          --blue: #0D162F;
          --orange: #F26E35;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(36px, 5vw, 76px) clamp(28px, 4vw, 72px) clamp(84px, 10vw, 150px);
        }
        .case-study-challenge-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .case-study-challenge-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 22px;
          object-fit: cover;
        }
        .case-study-challenge-content {
          display: grid;
          grid-template-columns: minmax(120px, 0.34fr) minmax(0, 1fr) minmax(110px, 0.34fr);
          gap: clamp(28px, 5vw, 82px);
          margin-top: clamp(78px, 8vw, 112px);
          align-items: start;
        }
        .case-study-challenge-kicker {
          color: var(--orange);
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.22px;
          text-transform: uppercase;
          padding-top: 4px;
        }
        .case-study-challenge-copy {
          min-width: 0;
        }
        .case-study-challenge-title {
          max-width: 760px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(30px, 3.2vw, 42px);
          font-style: normal;
          font-weight: 600;
          line-height: 90%;
          letter-spacing: -1.26px;
        }
        .case-study-challenge-text {
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
          .case-study-challenge-content {
            grid-template-columns: 1fr;
            gap: 22px;
          }
          .case-study-challenge-title {
            max-width: 780px;
          }
        }
        @media (max-width: 620px) {
          .case-study-challenge {
            padding: 34px 18px 86px;
          }
          .case-study-challenge-image {
            border-radius: 16px;
            aspect-ratio: 4 / 3;
            object-fit: cover;
          }
          .case-study-challenge-content {
            margin-top: 52px;
          }
          .case-study-challenge-title {
            font-size: 28px;
            letter-spacing: -0.84px;
            line-height: 94%;
          }
          .case-study-challenge-text {
            margin-top: 26px;
            font-size: 15px;
            letter-spacing: -0.36px;
          }
        }
      `}</style>

      <div className="case-study-challenge-shell">
        <Image
          className="case-study-challenge-image"
          src="/images/Rectangle 4303.png"
          width={1756}
          height={944}
          alt="Open office workspace with people collaborating"
        />

        <div className="case-study-challenge-content">
          <div className="case-study-challenge-kicker">(Challenges)</div>

          <div className="case-study-challenge-copy">
            <h2
              id="case-study-challenge-title"
              className="case-study-challenge-title"
            >
              Outdated branding, inconsistent messaging, and a digital presence
              that failed to reflect the quality of the product made it difficult
              to build trust and convert interest into real opportunities.
            </h2>

            <p className="case-study-challenge-text">
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
