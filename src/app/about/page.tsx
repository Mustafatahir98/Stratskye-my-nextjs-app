import type { Metadata } from "next";
import AboutAnimations from "@/components/AboutAnimations";

export const metadata: Metadata = {
  title: "About | StratSkye",
  description: "About StratSkye and how we turn uncertainty into growth decisions.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <style>{`
        .about-page {
          --blue: #0D162F;
          --orange: #F26E35;
          min-height: 100vh;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(104px, 9vw, 132px) clamp(28px, 4vw, 72px) clamp(28px, 4vw, 72px);
        }
        .about-shell {
          width: min(100%, 1180px);
          margin: 0 auto;
        }
        .about-reveal {
          opacity: 0;
          transform: translateY(28px);
          filter: blur(8px);
        }
        .about-team-image,
        .about-outcome-card {
          opacity: 0;
          transform: translateY(28px);
          filter: blur(8px);
        }
        .about-title {
          max-width: 930px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 80px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -2.4px;
          font-optical-sizing: auto;
          font-variation-settings: "opsz" 96, "wdth" 104, "GRAD" 0, "ROND" 0;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .about-title span {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: 80px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -2.4px;
        }
        .about-hero-media {
          position: relative;
          display: block;
          width: 100%;
          margin-top: 24px;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 1120 / 585;
          background: var(--blue);
        }
        .about-hero-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-hero-momentum {
          position: absolute;
          z-index: 2;
          left: 0;
          right: 0;
          bottom: -12px;
          overflow: hidden;
          pointer-events: none;
        }
        .about-hero-momentum::before,
        .about-hero-momentum::after {
          content: "";
          position: absolute;
          top: -42px;
          bottom: -24px;
          width: min(30vw, 330px);
          z-index: 2;
          opacity: 0.74;
          filter: blur(24px);
          mix-blend-mode: screen;
        }
        .about-hero-momentum::before {
          left: -12vw;
          background:
            radial-gradient(ellipse at left bottom, rgba(68, 151, 255, 0.48), rgba(68, 151, 255, 0.18) 42%, transparent 72%),
            linear-gradient(90deg, rgba(7, 17, 44, 0.58), transparent 72%);
        }
        .about-hero-momentum::after {
          right: -12vw;
          background:
            radial-gradient(ellipse at right bottom, rgba(68, 151, 255, 0.48), rgba(68, 151, 255, 0.18) 42%, transparent 72%),
            linear-gradient(270deg, rgba(7, 17, 44, 0.58), transparent 72%);
        }
        .about-hero-momentum-track {
          display: flex;
          width: max-content;
          animation: aboutHeroMomentumMarquee 28s linear infinite;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
        }
        .about-hero-momentum-text {
          color: #F7F2EE;
          font-family: "Google Sans Flex";
          font-size: clamp(92px, 12.5vw, 190px);
          font-style: normal;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: -4px;
          white-space: nowrap;
          padding-right: 62px;
          transform: translateY(12px);
          text-shadow:
            0 0 18px rgba(247, 242, 238, 0.18),
            0 0 42px rgba(68, 151, 255, 0.18);
        }
        @keyframes aboutHeroMomentumMarquee {
          0% { transform: translateX(-5%); }
          100% { transform: translateX(-55%); }
        }
        .about-content-grid {
          display: grid;
          grid-template-columns: 118px minmax(0, 1fr) 300px;
          column-gap: clamp(28px, 5vw, 76px);
          align-items: start;
          margin-top: 38px;
        }
        .about-kicker {
          color: var(--orange);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0;
          text-transform: lowercase;
        }
        .about-copy h2 {
          max-width: 670px;
          color: var(--blue);
          font-size: clamp(34px, 4vw, 46px);
          font-weight: 700;
          line-height: 92%;
          letter-spacing: -1.6px;
        }
        .about-copy p {
          max-width: 620px;
          margin-top: 30px;
          color: rgba(13, 22, 47, 0.60);
          font-family: "Google Sans Flex";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          letter-spacing: -0.72px;
        }
        .about-side-card {
          align-self: end;
          justify-self: end;
          width: min(100%, 280px);
          margin-top: 154px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-card-frame {
          width: 100%;
          padding: 16px;
          border-radius: 14px;
          background: rgba(242, 110, 53, 0.10);
        }
        .about-card-image {
          display: block;
          width: 100%;
          border-radius: 10px;
          border: 7px solid #27a7ff;
          object-fit: cover;
        }
        .about-signature {
          width: min(100%, 238px);
          margin-top: 18px;
          align-self: flex-end;
          transform-origin: 50% 50%;
        }
        .about-team-section {
          width: min(100%, 1180px);
          margin: clamp(110px, 14vw, 180px) auto 0;
          display: grid;
          grid-template-columns: 118px minmax(0, 1fr);
          column-gap: clamp(28px, 5vw, 76px);
          align-items: start;
        }
        .about-team-content {
          width: min(100%, 930px);
          display: grid;
          grid-template-columns: minmax(0, 1fr);
        }
        .about-team-title {
          max-width: 760px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 64px;
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -1.92px;
        }
        .about-team-copy-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 34px 58px;
          width: min(100%, 640px);
          margin-top: 84px;
          margin-left: min(27%, 250px);
        }
        .about-team-copy-grid p {
          color: rgba(13, 22, 47, 0.60);
          font-family: "Google Sans Flex";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          letter-spacing: -0.72px;
        }
        .about-team-images {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          width: min(100%, 640px);
          margin-top: 106px;
          margin-left: min(27%, 250px);
        }
        .about-team-image {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 22px;
          object-fit: cover;
        }
        .about-outcome-section {
          width: min(100%, 1180px);
          margin: clamp(120px, 15vw, 190px) auto 0;
          display: grid;
          grid-template-columns: 118px minmax(0, 1fr);
          column-gap: clamp(28px, 5vw, 76px);
          align-items: start;
          background: var(--post-shutter-bg);
          color: #f5f7ff;
          border-radius: clamp(18px, 2vw, 32px);
          overflow: hidden;
          padding: clamp(38px, 5vw, 72px) clamp(28px, 4vw, 58px) clamp(84px, 9vw, 140px);
        }
        .about-outcome-content {
          min-width: 0;
        }
        .about-outcome-title {
          max-width: 780px;
          color: #f5f7ff;
          font-family: "Google Sans Flex";
          font-size: clamp(44px, 5.2vw, 64px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -1.92px;
        }
        .about-outcome-copy {
          max-width: 520px;
          margin-top: 60px;
          color: rgba(229, 236, 255, 0.62);
          font-family: "Google Sans Flex";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          letter-spacing: -0.72px;
        }
        .about-outcome-cards {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 108px;
        }
        .about-outcome-card {
          display: block;
          width: 100%;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
        }
        .about-outcome-statement {
          grid-column: 1 / -1;
          max-width: 760px;
          margin: clamp(90px, 12vw, 150px) auto 0;
          color: rgba(245, 247, 255, 0.88);
          text-align: center;
          font-family: "Google Sans Flex";
          font-size: clamp(44px, 5vw, 64px);
          font-style: normal;
          font-weight: 700;
          line-height: 96%;
          letter-spacing: -2px;
          text-transform: uppercase;
        }
        .about-outcome-statement span {
          color: rgba(245, 247, 255, 0.36);
        }
        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-signature,
          .about-team-image,
          .about-outcome-card {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
        }
        @media (max-width: 980px) {
          .about-title,
          .about-title span {
            font-size: clamp(44px, 9vw, 72px);
            letter-spacing: -1.8px;
          }
          .about-content-grid {
            grid-template-columns: 1fr;
            row-gap: 18px;
          }
          .about-side-card {
            justify-self: start;
            margin-top: 18px;
            width: min(360px, 100%);
          }
          .about-team-section {
            grid-template-columns: 1fr;
            row-gap: 18px;
          }
          .about-team-content {
            grid-template-columns: 1fr;
          }
          .about-team-title {
            font-size: clamp(40px, 8vw, 56px);
          }
          .about-team-copy-grid {
            margin-top: 38px;
            margin-left: 0;
          }
          .about-team-images {
            width: min(620px, 100%);
            margin-top: 48px;
            margin-left: 0;
          }
          .about-outcome-section {
            grid-template-columns: 1fr;
            row-gap: 18px;
          }
          .about-outcome-copy {
            margin-top: 34px;
          }
          .about-outcome-cards {
            margin-top: 62px;
          }
        }
        @media (max-width: 620px) {
          .about-page {
            padding: 104px 18px 42px;
          }
          .about-title,
          .about-title span {
            font-size: clamp(36px, 12vw, 52px);
            line-height: 112%;
            letter-spacing: -1.2px;
          }
          .about-hero-media {
            border-radius: 14px;
            aspect-ratio: 4 / 3;
          }
          .about-hero-momentum {
            bottom: 0;
            overflow: visible;
          }
          .about-hero-momentum-track {
            animation-duration: 22s;
          }
          .about-hero-momentum-text {
            font-size: clamp(58px, 17vw, 86px);
            letter-spacing: 0;
            padding-right: 28px;
            transform: translateY(10px);
          }
          .about-copy h2 {
            font-size: 30px;
            line-height: 96%;
          }
          .about-copy p {
            font-size: 18px;
            letter-spacing: -0.42px;
          }
          .about-team-section {
            margin-top: 90px;
          }
          .about-team-title {
            font-size: 38px;
            letter-spacing: -1.14px;
          }
          .about-team-copy-grid {
            grid-template-columns: 1fr;
          }
          .about-team-copy-grid p {
            font-size: 18px;
            letter-spacing: -0.42px;
          }
          .about-team-images {
            gap: 10px;
          }
          .about-team-image {
            border-radius: 16px;
          }
          .about-outcome-section {
            margin-top: 92px;
            padding: 34px 18px 78px;
          }
          .about-outcome-title {
            font-size: 38px;
            letter-spacing: -1.14px;
          }
          .about-outcome-copy {
            font-size: 18px;
            letter-spacing: -0.42px;
          }
          .about-outcome-cards {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .about-outcome-statement {
            font-size: 34px;
            letter-spacing: -1.1px;
          }
        }
      `}</style>
      <AboutAnimations />

      <section className="about-shell about-animate-section">
        <h1 className="about-title about-reveal">
          Helping business uncertainty into clear; data backed{" "}
          <span>growth decisions</span>
        </h1>

        <div className="about-hero-media about-reveal">
          <img
            className="about-hero-image"
            src="/images/About-main.png"
            alt="Modern office workspace with people collaborating"
          />
          <div className="about-hero-momentum" aria-hidden="true">
            <div className="about-hero-momentum-track">
              <div className="about-hero-momentum-text">About us is momentum.</div>
              <div className="about-hero-momentum-text">About us is momentum.</div>
              <div className="about-hero-momentum-text">About us is momentum.</div>
            </div>
          </div>
        </div>

        <div className="about-content-grid">
          <div className="about-kicker about-reveal">[about]</div>

          <div className="about-copy about-reveal">
            <h2>
              What if your tech didn&apos;t just exist,
              <br />
              but actually got trusted &amp; bought?
            </h2>

            <p>It gets more trust &amp; faster decisions.</p>

            <p>
              At StratSkye, we turn strong products into high-converting brands
              so you can focus on building. It starts with how you&apos;re perceived.
              Even the best tech struggles if the brand around it doesn&apos;t signal
              trust, clarity, and authority.
            </p>

            <p>
              Then we build the infrastructure that sells. From high-converting
              websites to a credible, consistent presence, everything is designed
              to move buyers forward, not just attract attention.
            </p>

            <p>
              Finally, we keep your pipeline moving. With the right positioning
              and ongoing execution, your product doesn&apos;t just get noticed, it gets
              championed, approved, and closed.
            </p>
          </div>

          <aside
            className="about-side-card about-reveal"
            aria-label="StratSkye visual card"
          >
            <div className="about-card-frame">
              <img
                className="about-card-image"
                src="/images/Rectangle 4306.png"
                alt="Office detail card"
              />
            </div>
            <img
              className="about-signature"
              src="/images/StratSkye.png"
              alt="StratSkye"
            />
          </aside>
        </div>
      </section>

      <section className="about-team-section about-animate-section" aria-labelledby="about-team-title">
        <div className="about-kicker about-reveal">[team]</div>

        <div className="about-team-content">
          <h2 id="about-team-title" className="about-team-title about-reveal">
            The team behind brands that get noticed and bought, because great tech deserves momentum.
          </h2>

          <div className="about-team-copy-grid">
            <p className="about-reveal">
              Our team is equal parts strategy, creativity, and execution. We care deeply about the people behind the product, and we put that same energy into helping every brand grow with purpose.
            </p>
            <p className="about-reveal">
              Our structure is built for speed and impact, a core team leading strategy, creative, and operations, backed by a handpicked network of senior specialists chosen for both expertise and alignment.
            </p>
            <p className="about-reveal">
              We build momentum by bringing clarity, consistency, and high-converting systems to teams that need their market to understand them faster.
            </p>
            <p className="about-reveal">
              Clients get the focus of an in-house team with the reach and expertise of a global creative network.
            </p>
          </div>

          <div className="about-team-images">
            {[0, 1, 2, 3].map((item) => (
              <img
                key={item}
                className="about-team-image"
                src="/images/Rectangle 4307.png"
                alt=""
              />
            ))}
          </div>
        </div>
      </section>

      <section className="about-outcome-section about-animate-section" aria-labelledby="about-outcome-title">
        <div className="about-kicker about-reveal">[outcome]</div>

        <div className="about-outcome-content">
          <h2 id="about-outcome-title" className="about-outcome-title about-reveal">
            Real results, backed by numbers that prove how strategy and design drive growth.
          </h2>

          <p className="about-outcome-copy about-reveal">
            We don&apos;t just make brands look better, we help them perform better. Every number reflects stronger trust, faster growth, and results that actually move the business forward.
          </p>
        </div>

        <div className="about-outcome-cards">
          {[
            "/images/Frame 1171275677.png",
            "/images/Frame 1171275682.png",
            "/images/Frame 1171275683.png",
          ].map((src) => (
            <img
              key={src}
              className="about-outcome-card"
              src={src}
              alt=""
            />
          ))}
        </div>

        <h3 className="about-outcome-statement about-reveal">
          Every great idea needs the <span>right people, process, &amp; systems behind it.</span>
        </h3>
      </section>
    </main>
  );
}
