import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Work | Stratskye",
  description: "Projects that move businesses forward with brand, web, and growth systems.",
};

const projects = [
  {
    name: "NovaSync",
    description: "Rebranding a SaaS platform for faster growth.",
    image: "/images/work/novasync 1.webp",
    imageAlt: "Illuminated digital circuit board representing a connected SaaS platform",
  },
  {
    name: "CipherWave",
    description: "Building trust for a modern cybersecurity brand.",
    image: "/images/work/cipherwave 1.webp",
    imageAlt: "Encrypted green data streams representing cybersecurity",
  },
  {
    name: "VoltGrid AI",
    description: "Creating momentum for an AI infrastructure company.",
    image: "/images/work/voltgrid-ai 1.webp",
    imageAlt: "Blue illuminated computer keyboard representing AI infrastructure",
  },
  {
    name: "CoreStack Labs",
    description: "Simplifying complex tech through branding.",
    image: "/images/work/corestack-labs 1.webp",
    imageAlt: "Software developer working across multiple code displays",
  },
  {
    name: "ApexIQ",
    description: "Designing a scalable growth-focused brand system.",
    image: "/images/work/apexiq 1.webp",
    imageAlt: "Brand strategist organizing a wall of colorful planning notes",
  },
  {
    name: "InfraPulse",
    description: "Strengthening visibility for a cloud tech company.",
    image: "/images/work/infrapulse 1.webp",
    imageAlt: "Colorful software code representing cloud technology",
  },
  {
    name: "QuantumOps",
    description: "Crafting a premium enterprise software identity.",
    image: "/images/work/quantumops 1.webp",
    imageAlt: "Enterprise data center with rows of server infrastructure",
  },
  {
    name: "DataForm",
    description: "Turning analytics into a clear digital experience.",
    image: "/images/work/dataform 1.webp",
    imageAlt: "Analytics dashboard with performance charts on a laptop",
  },
  {
    name: "Nexum Systems",
    description: "Refreshing a tech brand for expansion.",
    image: "/images/work/nexum-systems 1.webp",
    imageAlt: "Technology team planning together around laptops and notes",
  },
  {
    name: "SecureLayer",
    description: "Building a stronger presence for enterprise trust.",
    image: "/images/work/securelayer 1.webp",
    imageAlt: "Connected network cables inside secure infrastructure",
  },
  {
    name: "StackPilot",
    description: "Helping a B2B startup scale with confidence.",
    image: "/images/work/stackpilot 1.webp",
    imageAlt: "Startup team collaborating around a shared table",
  },
  {
    name: "OmniLoop",
    description: "Building a modern brand for a tech company.",
    image: "/images/work/omniloop 1.webp",
    imageAlt: "Connected world viewed from space at night",
  },
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
          animation: workSignatureFloat 2.8s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes workSignatureFloat {
          0%,
          100% {
            transform: translate3d(0, -7px, 0);
          }
          50% {
            transform: translate3d(0, 7px, 0);
          }
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
          transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 320ms ease;
          will-change: transform;
        }
        .work-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(13, 22, 47, 0.08);
          pointer-events: none;
          transition: border-color 280ms ease;
        }
        .work-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 320ms ease;
          will-change: transform;
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
          transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 320ms ease;
        }
        @media (hover: hover) {
          .work-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 28px 54px rgba(13, 22, 47, 0.16);
          }
          .work-card:hover::after {
            border-color: rgba(242, 110, 53, 0.34);
          }
          .work-card:hover .work-card-image {
            transform: scale(1.065);
            filter: saturate(1.08) contrast(1.03);
          }
          .work-card:hover .work-card-copy {
            transform: translateY(-4px);
            box-shadow: 0 14px 30px rgba(13, 22, 47, 0.14);
          }
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
              src="/images/Built to Perform 1.webp"
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

          <div className="work-grid" aria-label="Selected Stratskye projects">
            {projects.map((project) => (
              <article className="work-card" key={project.name}>
                <Image
                  className="work-card-image"
                  src={project.image}
                  width={559}
                  height={560}
                  alt={project.imageAlt}
                  sizes="(max-width: 620px) calc(100vw - 36px), (max-width: 980px) calc((100vw - 64px) / 2), 360px"
                />
                <div className="work-card-copy">
                  <h2 className="work-card-title">{project.name}</h2>
                  <p className="work-card-description">{project.description}</p>
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
              YOU CAN SAY HELLO
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
