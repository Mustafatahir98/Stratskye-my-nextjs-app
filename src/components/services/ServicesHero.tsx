import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="services-hero" aria-labelledby="services-hero-title">
      <style>{`
        .services-hero {
          --blue: #0D162F;
          --orange: #F26E35;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(112px, 9vw, 150px) clamp(28px, 4vw, 72px) clamp(44px, 5vw, 76px);
        }
        .services-hero-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .services-hero-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(220px, 42%);
          gap: clamp(28px, 5vw, 76px);
          align-items: start;
        }
        .services-hero-title {
          max-width: 820px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(58px, 5.9vw, 80px);
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0;
          font-optical-sizing: auto;
          font-variation-settings: "opsz" 96, "wdth" 104, "GRAD" 0, "ROND" 0;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .services-hero-title span {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: clamp(58px, 5.9vw, 80px);
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0;
        }
        .services-scroll-note {
          width: min(100%, 430px);
          height: auto;
          justify-self: end;
          margin-top: 12px;
          animation: servicesScrollNoteFloat 4s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes servicesScrollNoteFloat {
          0%,
          100% {
            transform: translate3d(0, -6px, 0);
          }
          50% {
            transform: translate3d(0, 6px, 0);
          }
        }
        .services-hero-media-row {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(260px, 0.95fr);
          gap: clamp(28px, 3vw, 36px);
          align-items: end;
          margin-top: clamp(38px, 5vw, 58px);
        }
        .services-hero-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
          object-fit: cover;
        }
        .services-hero-intro {
          max-width: 410px;
          padding-bottom: 4px;
        }
        .services-hero-intro h2 {
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 32px;
          font-style: normal;
          font-weight: 600;
          line-height: 120%;
          letter-spacing: 0;
        }
        .services-hero-intro p {
          margin-top: 18px;
          color: rgba(13, 22, 47, 0.62);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 145%;
          letter-spacing: 0;
        }
        .services-hero-copy-row {
          display: grid;
          grid-template-columns: minmax(120px, 0.45fr) minmax(0, 1fr);
          gap: clamp(28px, 10vw, 220px);
          margin-top: clamp(82px, 9vw, 124px);
          align-items: start;
        }
        .services-hero-kicker {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: 0;
          text-transform: uppercase;
        }
        .services-hero-copy {
          max-width: 720px;
          color: rgba(13, 22, 47, 0.62);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 145%;
          letter-spacing: 0;
        }
        .services-hero-durability {
          margin-top: clamp(104px, 11vw, 156px);
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.72fr);
          gap: clamp(28px, 6vw, 92px);
          align-items: end;
        }
        .services-hero-statement {
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: clamp(44px, 4.7vw, 64px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0;
        }
        .services-hero-statement span {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: clamp(44px, 4.7vw, 64px);
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0;
        }
        .services-hero-durability p {
          max-width: 470px;
          color: rgba(13, 22, 47, 0.62);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 145%;
          letter-spacing: 0;
        }
        @media (max-width: 980px) {
          .services-hero-top,
          .services-hero-media-row,
          .services-hero-copy-row,
          .services-hero-durability {
            grid-template-columns: 1fr;
          }
          .services-scroll-note {
            justify-self: start;
            width: min(78vw, 360px);
            margin-top: 0;
          }
          .services-hero-intro {
            max-width: 640px;
          }
          .services-hero-title,
          .services-hero-title span {
            font-size: clamp(48px, 9vw, 72px);
            letter-spacing: 0;
          }
          .services-hero-statement,
          .services-hero-statement span {
            font-size: clamp(42px, 7vw, 58px);
            letter-spacing: 0;
          }
        }
        @media (max-width: 620px) {
          .services-hero {
            padding: 104px 18px 46px;
          }
          .services-hero-title,
          .services-hero-title span {
            font-size: clamp(38px, 12vw, 52px);
            letter-spacing: 0;
          }
          .services-hero-media-row {
            margin-top: 30px;
          }
          .services-hero-image {
            border-radius: 14px;
          }
          .services-hero-intro h2 {
            font-size: 26px;
            letter-spacing: 0;
          }
          .services-hero-copy-row {
            margin-top: 58px;
            gap: 18px;
          }
          .services-hero-statement,
          .services-hero-statement span {
            font-size: 36px;
            letter-spacing: 0;
          }
        }
      `}</style>

      <div className="services-hero-shell">
        <div className="services-hero-top">
          <h1 id="services-hero-title" className="services-hero-title">
            Good marketing should bring deals in. <span>Let&apos;s make sure yours does.</span>
          </h1>
          <Image
            className="services-scroll-note"
            src="/images/Scroll down _) 1.webp"
            width={584}
            height={120}
            alt="Scroll down"
            priority
          />
        </div>

        <div className="services-hero-media-row">
          <Image
            className="services-hero-image"
            src="/images/service-main 1.webp"
            width={1093}
            height={434}
            alt="Team collaborating around a laptop in a bright office"
            priority
          />

          <div className="services-hero-intro">
            <h2>
              Stratskye works with B2B companies that have a strong product and a
              pipeline that should be fuller than it is.
            </h2>
            <p>
              We build the marketing around what you already have and make it work
              properly.
            </p>
          </div>
        </div>

        <div className="services-hero-copy-row">
          <div className="services-hero-kicker">Where thinking meets doing</div>
          <p className="services-hero-copy">
            A lot of agencies are good at one or the other. Strategy sessions that
            produce decks nobody executes, or execution teams running campaigns
            without a clear reason behind them. Stratskye runs both under the same
            roof, so the plan and the work stay connected from week one.
          </p>
        </div>

        <div className="services-hero-durability">
          <h2 className="services-hero-statement">
            Built to last past <span>month three</span>
          </h2>
          <p>
            Most marketing programs plateau after an initial burst because they
            were built for momentum, not for consistency. Every engagement
            Stratskye runs is structured to produce compounding results, where
            month six outperforms month two because the system behind it keeps
            improving. Short-term wins matter. Sustained pipeline matters more.
          </p>
        </div>
      </div>
    </section>
  );
}
