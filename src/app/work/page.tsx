import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Work | StratSkye",
  description: "Projects that move businesses forward with brand, web, and growth systems.",
};

const projects = [
  ["NovaSync", "Rebranding a SaaS platform for faster growth."],
  ["CipherWave", "Building trust for a modern cybersecurity brand."],
  ["VoltGrid AI", "Creating momentum for an AI infrastructure company."],
  ["CoreStack Labs", "Simplifying complex tech through branding."],
  ["ApexIQ", "Designing a scalable growth-focused brand system."],
  ["InfraPulse", "Strengthening visibility for a cloud tech company."],
  ["QuantumOps", "Crafting a premium enterprise software identity."],
  ["DataForm", "Turning analytics into a clear digital experience."],
  ["Nexum Systems", "Refreshing a tech brand for expansion."],
  ["SecureLayer", "Building a stronger presence for enterprise trust."],
  ["StackPilot", "Helping a B2B startup scale with confidence."],
  ["OmniLoop", "Building a modern brand for a tech company."],
];

export default function WorkPage() {
  return (
    <main className="work-page">
      <style>{`
        .work-page {
          --blue: #0D162F;
          --orange: #F26E35;
          min-height: 100vh;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
        }
        .work-hero {
          min-height: 100vh;
          padding: clamp(118px, 10vw, 150px) clamp(18px, 4vw, 72px) clamp(42px, 5vw, 78px);
        }
        .work-shell {
          width: min(100%, 1180px);
          margin: 0 auto;
        }
        .work-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.95fr);
          gap: clamp(24px, 5vw, 84px);
          align-items: start;
        }
        .work-title {
          max-width: 510px;
          color: var(--blue);
          font-size: clamp(42px, 5.6vw, 72px);
          font-style: normal;
          font-weight: 600;
          line-height: 94%;
          letter-spacing: 0;
          text-rendering: geometricPrecision;
        }
        .work-title span {
          display: block;
          color: var(--orange);
        }
        .work-signature {
          width: min(100%, 420px);
          height: auto;
          margin-top: clamp(6px, 1.4vw, 18px);
          justify-self: start;
        }
        .work-intro {
          width: min(100%, 340px);
          margin: clamp(36px, 4.8vw, 66px) auto 0;
          color: rgba(13, 22, 47, 0.68);
          font-size: 12px;
          font-weight: 500;
          line-height: 118%;
          letter-spacing: 0;
        }
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(18px, 2.1vw, 28px);
          margin-top: clamp(56px, 6.4vw, 82px);
        }
        .work-card {
          position: relative;
          display: block;
          min-width: 0;
          overflow: hidden;
          border-radius: 18px;
          background: #d6d0ca;
          color: inherit;
          text-decoration: none;
          aspect-ratio: 559 / 560;
          box-shadow: 0 18px 36px rgba(13, 22, 47, 0.08);
        }
        .work-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(13, 22, 47, 0.08);
          pointer-events: none;
        }
        .work-card:nth-child(3n) {
          box-shadow: 0 0 0 4px #2f8df5, 0 18px 36px rgba(13, 22, 47, 0.08);
        }
        .work-card:nth-child(3n)::after {
          border-color: rgba(242, 110, 53, 0.95);
          border-width: 4px;
        }
        .work-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .work-card-copy {
          position: absolute;
          left: clamp(8px, 1.1vw, 14px);
          right: clamp(8px, 1.1vw, 14px);
          bottom: clamp(8px, 1.1vw, 14px);
          min-height: clamp(58px, 5.4vw, 78px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          padding: clamp(12px, 1.35vw, 18px) clamp(14px, 1.4vw, 20px);
          border-radius: 14px;
          background: rgba(247, 242, 238, 0.96);
          box-shadow: 0 8px 22px rgba(13, 22, 47, 0.08);
        }
        .work-card-title {
          color: var(--blue);
          font-size: clamp(13px, 1vw, 16px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0;
        }
        .work-card-description {
          color: rgba(13, 22, 47, 0.66);
          font-size: clamp(10px, 0.78vw, 12px);
          font-weight: 500;
          line-height: 112%;
          letter-spacing: 0;
        }
        .work-together {
          padding: clamp(74px, 8vw, 118px) clamp(18px, 4vw, 72px) clamp(92px, 9vw, 140px);
          background: #f7f2ee;
        }
        .work-together-shell {
          width: min(100%, 1180px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(220px, 0.72fr) minmax(280px, 1fr);
          gap: clamp(34px, 11vw, 180px);
          align-items: start;
        }
        .work-together-title {
          max-width: 310px;
          color: var(--blue);
          font-size: clamp(38px, 4.1vw, 58px);
          font-weight: 700;
          line-height: 92%;
          letter-spacing: 0;
        }
        .work-together-copy {
          max-width: 430px;
          color: rgba(13, 22, 47, 0.58);
          font-size: 14px;
          font-weight: 500;
          line-height: 118%;
          letter-spacing: 0;
        }
        .work-together-link {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 48px;
          color: rgba(13, 22, 47, 0.68);
          font-family: "Google Sans Flex";
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
        }
        .work-together-link span {
          display: inline-grid;
          width: 20px;
          height: 20px;
          place-items: center;
          border-radius: 999px;
          color: var(--blue);
          transition: transform 0.2s ease;
        }
        .work-together-link:hover span,
        .work-together-link:focus-visible span {
          transform: translateX(4px);
        }
        @media (max-width: 980px) {
          .work-heading-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .work-signature {
            width: min(82vw, 380px);
          }
          .work-intro {
            margin-left: 0;
          }
          .work-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .work-together-shell {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .work-together-title {
            max-width: 360px;
          }
          .work-together-link {
            margin-top: 34px;
          }
        }
        @media (max-width: 620px) {
          .work-hero {
            padding: 104px 18px 46px;
          }
          .work-title {
            max-width: 360px;
            font-size: clamp(38px, 12vw, 52px);
            line-height: 96%;
          }
          .work-intro {
            width: min(100%, 310px);
            margin-top: 26px;
            font-size: 12px;
          }
          .work-grid {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 38px;
          }
          .work-card {
            border-radius: 16px;
          }
          .work-card-copy {
            border-radius: 12px;
            min-height: 62px;
          }
          .work-together {
            padding: 64px 18px 86px;
          }
          .work-together-title {
            font-size: clamp(34px, 11vw, 44px);
          }
          .work-together-copy {
            font-size: 13px;
          }
        }
      `}</style>

      <section className="work-hero" aria-labelledby="work-title">
        <div className="work-shell">
          <div className="work-heading-row">
            <h1 id="work-title" className="work-title">
              Projects That Move <span>Businesses Forward</span>
            </h1>

            <Image
              className="work-signature"
              src="/images/Built to Perform.png"
              width={660}
              height={118}
              alt="Built to Perform"
              priority
            />
          </div>

          <p className="work-intro">
            Our clients range from fast-growing tech startups to industry leaders,
            all looking for branding that creates real impact.
          </p>

          <div className="work-grid" aria-label="Selected StratSkye projects">
            {projects.map(([name, description]) => (
              <article className="work-card" key={name}>
                <Image
                  className="work-card-image"
                  src="/images/Frame 1171275785.png"
                  width={559}
                  height={560}
                  alt=""
                  sizes="(max-width: 620px) calc(100vw - 36px), (max-width: 980px) calc((100vw - 64px) / 2), 360px"
                />
                <div className="work-card-copy">
                  <h2 className="work-card-title">{name}</h2>
                  <p className="work-card-description">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-together" aria-labelledby="work-together-title">
        <div className="work-together-shell">
          <h2 id="work-together-title" className="work-together-title">
            Let&apos;s work together
          </h2>

          <div>
            <p className="work-together-copy">
              Work with us if blending in was never the goal. Bring the vision,
              we&apos;ll build the momentum.
            </p>
            <a className="work-together-link" href="/contact-form">
              You can say hello
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
