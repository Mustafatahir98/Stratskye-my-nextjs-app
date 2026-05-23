import Link from "next/link";

export default function CaseStudyNextSection() {
  return (
    <section className="case-study-next" aria-labelledby="case-study-next-title">
      <style>{`
        .case-study-next {
          --blue: #0D162F;
          --orange: #F26E35;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: 0 clamp(28px, 4vw, 72px) clamp(78px, 9vw, 128px);
        }
        .case-study-next-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
          border-top: 1px solid rgba(13, 22, 47, 0.58);
          padding-top: clamp(120px, 14vw, 190px);
        }
        .case-study-next-card {
          width: min(100%, 530px);
          min-height: clamp(270px, 25vw, 390px);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(24px, 3vw, 34px);
          border: 1px solid rgba(13, 22, 47, 0.04);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 18px 34px rgba(13, 22, 47, 0.06);
          color: var(--blue);
          text-decoration: none;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .case-study-next-card:hover,
        .case-study-next-card:focus-visible {
          transform: translateY(-3px);
          border-color: rgba(242, 110, 53, 0.28);
          box-shadow: 0 24px 46px rgba(13, 22, 47, 0.10);
          outline: none;
        }
        .case-study-next-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
        }
        .case-study-next-eyebrow {
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -0.72px;
        }
        .case-study-next-arrow {
          color: var(--blue);
          font-size: 24px;
          line-height: 1;
          transition: transform 180ms ease;
        }
        .case-study-next-card:hover .case-study-next-arrow,
        .case-study-next-card:focus-visible .case-study-next-arrow {
          transform: translate(4px, -4px);
        }
        .case-study-next-project {
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(34px, 3.8vw, 48px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -1.44px;
        }
        .case-study-next-cta {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.8fr);
          gap: clamp(40px, 11vw, 220px);
          align-items: start;
          margin-top: clamp(130px, 15vw, 210px);
        }
        .case-study-next-cta h2 {
          max-width: 430px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(46px, 6vw, 72px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -2.16px;
        }
        .case-study-next-copy {
          max-width: 410px;
          padding-top: 8px;
        }
        .case-study-next-copy p {
          color: rgba(13, 22, 47, 0.62);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%;
          letter-spacing: -0.32px;
        }
        .case-study-next-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 42px;
          color: rgba(13, 22, 47, 0.74);
          text-decoration: none;
          font-size: 10px;
          font-style: normal;
          font-weight: 700;
          line-height: 120%;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }
        .case-study-next-link span:last-child {
          font-size: 16px;
          line-height: 1;
          transition: transform 180ms ease;
        }
        .case-study-next-link:hover span:last-child,
        .case-study-next-link:focus-visible span:last-child {
          transform: translateX(4px);
        }
        .case-study-next-link:focus-visible {
          outline: 1px solid rgba(242, 110, 53, 0.8);
          outline-offset: 8px;
        }
        @media (max-width: 980px) {
          .case-study-next-shell {
            padding-top: 96px;
          }
          .case-study-next-cta {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-top: 110px;
          }
          .case-study-next-copy {
            padding-top: 0;
          }
        }
        @media (max-width: 620px) {
          .case-study-next {
            padding: 0 18px 86px;
          }
          .case-study-next-shell {
            padding-top: 72px;
          }
          .case-study-next-card {
            min-height: 260px;
            padding: 22px;
          }
          .case-study-next-eyebrow {
            font-size: 20px;
            letter-spacing: -0.6px;
          }
          .case-study-next-project {
            font-size: 34px;
            letter-spacing: -1.02px;
          }
          .case-study-next-cta {
            margin-top: 86px;
          }
          .case-study-next-cta h2 {
            font-size: 42px;
            letter-spacing: -1.26px;
          }
          .case-study-next-copy p {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="case-study-next-shell">
        <Link className="case-study-next-card" href="/case-study">
          <span className="case-study-next-card-top">
            <span className="case-study-next-eyebrow">Next Project</span>
            <span className="case-study-next-arrow" aria-hidden="true">
              ↗
            </span>
          </span>
          <span id="case-study-next-title" className="case-study-next-project">
            BC3 Enclave
          </span>
        </Link>

        <div className="case-study-next-cta">
          <h2>Let&apos;s work together</h2>

          <div className="case-study-next-copy">
            <p>
              Work with us if blending in was never the goal. Bring the vision,
              we&apos;ll build the momentum.
            </p>
            <Link className="case-study-next-link" href="/contact-form">
              <span>You can say hello!</span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
