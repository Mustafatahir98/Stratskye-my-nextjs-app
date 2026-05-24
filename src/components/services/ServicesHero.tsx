import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="services-hero" aria-labelledby="services-hero-title">
      <style>{`
        .services-hero {
          --blue: #0D162F;
          --orange: #F26E35;
          min-height: 100vh;
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
          max-width: 520px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 80px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: -2.4px;
          font-optical-sizing: auto;
          font-variation-settings: "opsz" 96, "wdth" 104, "GRAD" 0, "ROND" 0;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .services-hero-title span {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: 80px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: -2.4px;
        }
        .services-scroll-note {
          width: min(100%, 430px);
          height: auto;
          justify-self: end;
          margin-top: 12px;
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
          letter-spacing: -0.96px;
        }
        .services-hero-intro p {
          margin-top: 18px;
          color: rgba(13, 22, 47, 0.62);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%;
          letter-spacing: -0.32px;
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
          letter-spacing: -0.22px;
          text-transform: uppercase;
        }
        .services-hero-copy {
          max-width: 720px;
          color: rgba(13, 22, 47, 0.62);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%;
          letter-spacing: -0.32px;
        }
        .services-hero-statement {
          max-width: 860px;
          margin-top: clamp(104px, 11vw, 156px);
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 64px;
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -1.92px;
        }
        .services-hero-statement span {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: 64px;
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -1.92px;
        }
        @media (max-width: 980px) {
          .services-hero-top,
          .services-hero-media-row,
          .services-hero-copy-row {
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
            letter-spacing: -1.8px;
          }
          .services-hero-statement,
          .services-hero-statement span {
            font-size: clamp(42px, 7vw, 58px);
            letter-spacing: -1.55px;
          }
        }
        @media (max-width: 620px) {
          .services-hero {
            padding: 104px 18px 46px;
          }
          .services-hero-title,
          .services-hero-title span {
            font-size: clamp(38px, 12vw, 52px);
            letter-spacing: -1.2px;
          }
          .services-hero-media-row {
            margin-top: 30px;
          }
          .services-hero-image {
            border-radius: 14px;
          }
          .services-hero-intro h2 {
            font-size: 26px;
            letter-spacing: -0.72px;
          }
          .services-hero-copy-row {
            margin-top: 58px;
            gap: 18px;
          }
          .services-hero-statement,
          .services-hero-statement span {
            font-size: 36px;
            letter-spacing: -1.08px;
          }
        }
      `}</style>

      <div className="services-hero-shell">
        <div className="services-hero-top">
          <h1 id="services-hero-title" className="services-hero-title">
            Turning bold ideas into real market <span>momentum</span>
          </h1>
          <Image
            className="services-scroll-note"
            src="/images/Scroll down _).png"
            width={584}
            height={120}
            alt="Scroll down"
            priority
          />
        </div>

        <div className="services-hero-media-row">
          <Image
            className="services-hero-image"
            src="/images/service-main.png"
            width={1093}
            height={434}
            alt="Team collaborating around a laptop in a bright office"
            priority
          />

          <div className="services-hero-intro">
            <h2>
              Part strategy, part execution, fully focused on helping brands grow
              with confidence.
            </h2>
            <p>
              From perception to conversion, everything we do is built to move
              business forward.
            </p>
          </div>
        </div>

        <div className="services-hero-copy-row">
          <div className="services-hero-kicker">(Launch. Scale. Repeat)</div>
          <p className="services-hero-copy">
            Great tech deserves more than visibility. It deserves trust, traction,
            and momentum. At StratSkye, we don&apos;t just offer marketing services,
            we build growth systems. Branding. Websites. Social authority. Lead
            generation. Whether you need a stronger presence, a website that
            actually converts, or a brand people instantly trust, we step in where
            it matters most. Everything works together with one goal: moving your
            business forward. Built to earn attention. Designed to close deals.
          </p>
        </div>

        <h2 className="services-hero-statement">
          Growth doesn&apos;t happen by accident. It&apos;s built{" "}
          <span>strategically, consistently and intentionally</span>
        </h2>
      </div>
    </section>
  );
}
