import Image from "next/image";
import Link from "next/link";

export default function ServicesTestimonialSection() {
  return (
    <section
      className="services-testimonial-section"
      aria-labelledby="services-testimonial-title"
    >
      <style>{`
        .services-testimonial-section {
          --blue: #0D162F;
          --orange: #F26E35;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(70px, 9vw, 140px) clamp(28px, 4vw, 72px) clamp(88px, 11vw, 160px);
        }
        .services-testimonial-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .services-testimonial-top {
          display: grid;
          grid-template-columns: minmax(86px, 0.42fr) minmax(0, 1fr) minmax(86px, 0.42fr);
          align-items: start;
          gap: clamp(24px, 4vw, 58px);
        }
        .services-testimonial-kicker {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.22px;
          text-transform: uppercase;
          padding-top: 4px;
        }
        .services-testimonial-portrait-wrap {
          justify-self: center;
          position: relative;
          width: clamp(210px, 20vw, 330px);
        }
        .services-testimonial-portrait {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1.12;
          height: auto;
          object-fit: cover;
          object-position: 50% 18%;
        }
        .services-testimonial-quote {
          max-width: 1120px;
          margin: clamp(58px, 7vw, 96px) auto 0;
          text-align: center;
          font-family: "Google Sans Flex";
          font-size: 72px;
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -2.16px;
          text-transform: uppercase;
          background: linear-gradient(180deg, #0D162F 0%, rgba(13, 22, 47, 0.20) 56.28%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .services-testimonial-meta {
          display: flex;
          justify-content: center;
          gap: clamp(28px, 6vw, 74px);
          margin-top: clamp(52px, 6vw, 78px);
          color: rgba(13, 22, 47, 0.46);
          font-size: 10px;
          font-style: normal;
          font-weight: 600;
          line-height: 120%;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }
        .services-testimonial-cta {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.8fr);
          gap: clamp(40px, 11vw, 220px);
          align-items: start;
          margin-top: clamp(110px, 13vw, 178px);
        }
        .services-testimonial-cta h2 {
          max-width: 430px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 72px;
          font-style: normal;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -2.16px;
        }
        .services-testimonial-cta-copy {
          max-width: 410px;
          padding-top: 12px;
        }
        .services-testimonial-cta-copy p {
          color: rgba(13, 22, 47, 0.62);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 125%;
          letter-spacing: -0.32px;
        }
        .services-testimonial-link {
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
        .services-testimonial-link span:last-child {
          font-size: 16px;
          line-height: 1;
          transition: transform 180ms ease;
        }
        .services-testimonial-link:hover span:last-child,
        .services-testimonial-link:focus-visible span:last-child {
          transform: translateX(4px);
        }
        .services-testimonial-link:focus-visible {
          outline: 1px solid rgba(242, 110, 53, 0.8);
          outline-offset: 8px;
        }
        @media (max-width: 980px) {
          .services-testimonial-top {
            grid-template-columns: 1fr;
            justify-items: center;
          }
          .services-testimonial-kicker {
            justify-self: start;
          }
          .services-testimonial-quote {
            font-size: clamp(42px, 8vw, 62px);
            letter-spacing: -1.7px;
          }
          .services-testimonial-cta {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .services-testimonial-cta h2 {
            font-size: clamp(44px, 8vw, 62px);
            letter-spacing: -1.7px;
          }
          .services-testimonial-cta-copy {
            padding-top: 0;
          }
        }
        @media (max-width: 620px) {
          .services-testimonial-section {
            padding: 66px 18px 92px;
          }
          .services-testimonial-portrait-wrap {
            width: min(72vw, 260px);
          }
          .services-testimonial-quote {
            margin-top: 46px;
            font-size: 34px;
            letter-spacing: -1.02px;
          }
          .services-testimonial-meta {
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-top: 38px;
            text-align: center;
          }
          .services-testimonial-cta {
            margin-top: 84px;
          }
          .services-testimonial-cta h2 {
            font-size: 42px;
            letter-spacing: -1.26px;
          }
          .services-testimonial-cta-copy p {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="services-testimonial-shell">
        <div className="services-testimonial-top">
          <div className="services-testimonial-kicker">(Happy Client)</div>

          <div className="services-testimonial-portrait-wrap">
            <Image
              className="services-testimonial-portrait"
              src="/images/mustafa.jpg"
              width={853}
              height={1356}
              alt="Portrait of a StratSkye client"
            />
          </div>

          <div aria-hidden="true" />
        </div>

        <blockquote
          id="services-testimonial-title"
          className="services-testimonial-quote"
        >
          “Working with StratSkye felt like adding a true growth partner to our
          team. They were proactive, strategic, and helped us improve everything
          from our brand positioning to our digital presence. Highly recommend
          them to any tech company serious about scaling.”
        </blockquote>

        <div className="services-testimonial-meta" aria-label="Client details">
          <span>Huzefeh Bin Ali</span>
          <span>Head of Design - Hontech</span>
        </div>

        <div className="services-testimonial-cta">
          <h2>Let&apos;s work together</h2>

          <div className="services-testimonial-cta-copy">
            <p>
              Work with us if blending in was never the goal. Bring the vision,
              we&apos;ll build the momentum.
            </p>
            <Link className="services-testimonial-link" href="/#contact">
              <span>You can say hello!</span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
