"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const proofCards = [
  {
    className: "proof-card-cyber",
    src: "/images/Cybersecurity SaaS.png",
    alt: "Cybersecurity SaaS social proof",
    lineClass: "proof-anchor-cyber",
  },
  {
    className: "proof-card-fintech",
    src: "/images/The Committee Veto.png",
    alt: "FinTech Platform social proof",
    lineClass: "proof-anchor-fintech",
  },
  {
    className: "proof-card-infra",
    src: "/images/Infrastructure Hardware.png",
    alt: "Infrastructure Hardware social proof",
    lineClass: "proof-anchor-infra",
  },
];

export default function SeventhSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const moonGroupRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const mountainRef = useRef<HTMLImageElement>(null);
  const mountainCoverRef = useRef<HTMLImageElement>(null);
  const starsRef = useRef<HTMLImageElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const anchorRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) {
      return;
    }

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };
          const cards = cardRefs.current.filter(Boolean);
          const anchors = anchorRefs.current.filter(Boolean);

          gsap.set(panelRef.current, { transformOrigin: "50% 50%" });
          gsap.set(bgRef.current, { autoAlpha: 0, scale: 1.04 });
          gsap.set(moonGroupRef.current, {
            autoAlpha: 0,
            yPercent: isMobile ? 10 : 8,
            scale: isMobile ? 0.94 : 0.9,
            transformOrigin: "50% 50%",
          });
          gsap.set([haloRef.current, raysRef.current], {
            autoAlpha: 0,
            scale: isMobile ? 0.96 : 0.92,
            transformOrigin: "50% 50%",
          });
          gsap.set(mountainRef.current, {
            autoAlpha: 0,
            yPercent: 28,
            scale: 1.02,
            transformOrigin: "50% 100%",
          });
          gsap.set(mountainCoverRef.current, {
            autoAlpha: 0,
            yPercent: 28,
            scale: 1.02,
            transformOrigin: "50% 100%",
          });
          gsap.set(starsRef.current, { autoAlpha: 0, scale: 1.08 });
          gsap.set([labelRef.current, headingRef.current, linkRef.current], {
            autoAlpha: 0,
            y: isMobile ? 18 : 16,
          });
          gsap.set(cards, {
            autoAlpha: 0,
            y: isMobile ? 28 : 24,
            scale: isMobile ? 0.94 : 0.96,
          });
          gsap.set(anchors, {
            autoAlpha: 0,
            y: -4,
            scaleY: 0.6,
            transformOrigin: "50% 0%",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: isMobile ? "+=340%" : "+=210%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(bgRef.current, { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 0)
            .to(
              [haloRef.current, raysRef.current],
              { autoAlpha: 1, scale: 1, duration: 1.3, ease: "power2.out" },
              0.03
            )
            .to(
              moonGroupRef.current,
              { autoAlpha: 1, yPercent: 0, scale: 1, duration: 1.45, ease: "power3.out" },
              0.05
            )
            .to(
              [mountainCoverRef.current, mountainRef.current],
              { autoAlpha: 1, yPercent: 0, scale: 1, duration: 1.2, ease: "power3.out" },
              0.38
            )
            .to(starsRef.current, { autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out" }, 0.58)
            .to(labelRef.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, 0.72)
            .to(
              headingRef.current,
              { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" },
              isMobile ? 1.05 : 1.15
            )
            .to(
              linkRef.current,
              { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" },
              isMobile ? 1.25 : 1.28
            );

          cards.forEach((card, index) => {
            const start = isMobile ? 1.55 + index * 0.72 : 1.25 + index * 0.34;
            tl.to(
              card,
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.72, ease: "back.out(1.35)" },
              start
            ).to(
              anchors[index],
              { autoAlpha: 1, y: 0, scaleY: 1, duration: 0.48, ease: "power2.out" },
              start + 0.18
            );
          });
        }
      );
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section id="social-proof" ref={sectionRef} className="seventh-section post-shutter-section">
      <div ref={panelRef} className="social-proof-panel">
        <img ref={bgRef} className="proof-bg" src="/images/moon-bg.png" alt="" aria-hidden="true" />
        <div ref={moonGroupRef} className="proof-moon-group" aria-hidden="true">
          <div ref={haloRef} className="proof-moon-halo" />
          <div ref={raysRef} className="proof-moon-rays" />
          <img ref={moonRef} className="proof-moon" src="/images/Moon.png" alt="" />
        </div>
        <img
          ref={mountainCoverRef}
          className="proof-mountain-cover"
          src="/images/mountain-st.png"
          alt=""
          aria-hidden="true"
        />
        <img
          ref={mountainRef}
          className="proof-mountain"
          src="/images/mountain-st.png"
          alt=""
          aria-hidden="true"
        />
        <img ref={starsRef} className="proof-stars" src="/images/Stars.png" alt="" aria-hidden="true" />
        <div className="proof-color-wash" aria-hidden="true" />
        <div className="proof-grain" aria-hidden="true" />
        <div className="proof-grid" aria-hidden="true" />

        <div ref={labelRef} className="proof-label">
          <span>SOCIAL PROOF</span>
        </div>

        <div className="proof-card-layer" role="list" aria-label="Client outcomes">
          {proofCards.map((card, index) => (
            <div
              key={card.src}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={`proof-card-wrap ${card.className}`}
              role="listitem"
            >
              <img src={card.src} alt={card.alt} className="proof-card-img" />
              <span
                ref={(node) => {
                  anchorRefs.current[index] = node;
                }}
                className={`proof-card-anchor ${card.lineClass}`}
                aria-hidden="true"
              >
                <span className="proof-card-line" />
                <span className="proof-card-dot" />
              </span>
            </div>
          ))}
        </div>

        <h2 ref={headingRef} className="proof-heading">
          We&apos;ve done this
          <br />
          before.
        </h2>

        <a ref={linkRef} className="proof-link" href="/contact-form">
          <span>LETS CONNECT</span>
          <span className="proof-link-arrow" aria-hidden="true" />
        </a>
      </div>

      <style>{`
        .seventh-section {
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
          background: var(--post-shutter-bg);
          overflow: hidden;
        }
        .social-proof-panel {
          position: relative;
          width: 100%;
          height: min(100svh, 720px);
          min-height: 477px;
          overflow: hidden;
          border-radius: clamp(34px, 4.4vw, 56px);
          background:
            radial-gradient(circle at 43% 6%, rgba(246, 249, 255, 0.82) 0 10%, rgba(203, 216, 244, 0.62) 30%, rgba(123, 150, 218, 0.45) 50%, rgba(57, 87, 176, 0.48) 78%),
            linear-gradient(145deg, #cbd7ef 0%, #adc0e5 36%, #7694d7 64%, #476ec5 100%);
          color: #fff;
          isolation: isolate;
        }
        .proof-bg,
        .proof-moon-group,
        .proof-mountain-cover,
        .proof-mountain,
        .proof-stars,
        .proof-color-wash,
        .proof-grain,
        .proof-grid {
          position: absolute;
          pointer-events: none;
          user-select: none;
        }
        .proof-bg {
          z-index: 0;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.54;
          filter: invert(1) brightness(0.92) contrast(1.08);
          mix-blend-mode: soft-light;
        }
        .proof-moon-group {
          z-index: 3;
          left: 50%;
          top: -14%;
          width: min(84%, 920px);
          transform: translateX(-50%);
          isolation: isolate;
        }
        .proof-moon-halo,
        .proof-moon-rays {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 999px;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .proof-moon-halo {
          z-index: 0;
          background: radial-gradient(
            circle at 50% 44%,
            rgba(255, 255, 255, 0.62) 0%,
            rgba(228, 238, 255, 0.34) 28%,
            rgba(196, 214, 255, 0.14) 46%,
            transparent 58%
          );
          filter: blur(14px);
          opacity: 0.9;
          -webkit-mask-image: radial-gradient(circle at 50% 42%, #000 0%, #000 46%, transparent 62%);
          mask-image: radial-gradient(circle at 50% 42%, #000 0%, #000 46%, transparent 62%);
        }
        .proof-moon-rays {
          z-index: 0;
          opacity: 0.38;
          background:
            conic-gradient(
              from 205deg at 50% 50%,
              transparent 0deg,
              rgba(255, 255, 255, 0.2) 18deg,
              transparent 36deg,
              rgba(185, 210, 255, 0.14) 76deg,
              transparent 104deg,
              rgba(255, 255, 255, 0.16) 154deg,
              transparent 192deg,
              rgba(255, 255, 255, 0.1) 244deg,
              transparent 282deg,
              rgba(201, 220, 255, 0.12) 318deg,
              transparent 360deg
            ),
            radial-gradient(circle at 50% 44%, transparent 0 44%, rgba(255, 255, 255, 0.22) 52%, transparent 64%);
          filter: blur(8px);
          -webkit-mask-image: radial-gradient(circle at 50% 42%, #000 0%, #000 44%, transparent 60%);
          mask-image: radial-gradient(circle at 50% 42%, #000 0%, #000 44%, transparent 60%);
        }
        .proof-moon {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          opacity: 0.68;
          mix-blend-mode: multiply;
          filter: saturate(1.04) contrast(1.06);
        }
        .proof-mountain-cover {
          z-index: 7;
          left: -6%;
          bottom: -1px;
          width: 112%;
          height: 90%;
          object-fit: fill;
          opacity: 0.92;
          mix-blend-mode: normal;
          filter: brightness(0.72) saturate(1.28) contrast(1.12);
        }
        .proof-mountain {
          z-index: 8;
          left: -6%;
          bottom: -1px;
          width: 112%;
          height: 90%;
          object-fit: fill;
          opacity: 0.96;
          mix-blend-mode: multiply;
          filter: saturate(1.08) contrast(1.04);
        }
        .proof-stars {
          z-index: 4;
          left: 0;
          top: 0;
          width: 100%;
          height: 70%;
          object-fit: cover;
          opacity: 0.64;
          mix-blend-mode: screen;
          filter: brightness(1.35) contrast(1.04);
        }
        .proof-color-wash {
          z-index: 5;
          inset: 0;
          background:
            radial-gradient(circle at 52% 17%, rgba(255, 255, 255, 0.33) 0 14%, rgba(173, 198, 240, 0.18) 30%, transparent 47%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(58, 89, 179, 0.06) 46%, rgba(24, 59, 150, 0.24) 100%);
        }
        .proof-grain {
          z-index: 10;
          inset: 0;
          opacity: 0.34;
          background-image:
            radial-gradient(circle at 7% 45%, rgba(255, 255, 255, 0.85) 0 1px, transparent 1.8px),
            radial-gradient(circle at 40% 16%, rgba(255, 255, 255, 0.7) 0 1px, transparent 1.8px),
            radial-gradient(circle at 61% 43%, rgba(255, 255, 255, 0.86) 0 1px, transparent 1.8px),
            radial-gradient(circle at 95% 36%, rgba(255, 255, 255, 0.72) 0 1px, transparent 1.8px),
            radial-gradient(circle at 52% 53%, rgba(255, 255, 255, 0.95) 0 1px, transparent 1.8px);
        }
        .proof-grid {
          z-index: 11;
          inset: 0;
          background-image: linear-gradient(90deg, rgba(17, 26, 49, 0.13) 1px, transparent 1px);
          background-size: 19.8% 100%;
          opacity: 0.42;
        }
        .proof-label {
          position: absolute;
          z-index: 16;
          left: 4.55%;
          top: 12.2%;
          width: fit-content;
          color: #111a31;
          font-family: "MONTECH V.02", "Google Sans Flex", monospace;
          font-size: clamp(8px, 0.76vw, 12px);
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1;
          text-transform: uppercase;
        }
        .proof-label::before,
        .proof-label::after,
        .proof-label span::before,
        .proof-label span::after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          opacity: 0.56;
        }
        .proof-label::before {
          left: -11px;
          top: -8px;
          border-left: 1px solid #111a31;
          border-top: 1px solid #111a31;
        }
        .proof-label::after {
          right: -11px;
          top: -8px;
          border-right: 1px solid #111a31;
          border-top: 1px solid #111a31;
        }
        .proof-label span::before {
          left: -11px;
          bottom: -8px;
          border-left: 1px solid #111a31;
          border-bottom: 1px solid #111a31;
        }
        .proof-label span::after {
          right: -11px;
          bottom: -8px;
          border-right: 1px solid #111a31;
          border-bottom: 1px solid #111a31;
        }
        .proof-card-layer {
          position: absolute;
          z-index: 15;
          inset: 0;
        }
        .proof-card-wrap {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: clamp(248px, 31.5vw, 348px);
          filter: drop-shadow(0 14px 24px rgba(13, 23, 47, 0.12));
        }
        .proof-card-img {
          display: block;
          width: 100%;
          height: auto;
        }
        .proof-card-anchor {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: -1px;
        }
        .proof-card-line {
          display: block;
          width: 1px;
          border-left: 1px dashed rgba(255, 255, 255, 0.7);
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.58));
        }
        .proof-card-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid rgba(101, 126, 183, 0.56);
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.18),
            0 0 16px rgba(255, 255, 255, 0.88),
            0 0 26px rgba(142, 169, 231, 0.6);
        }
        .proof-card-cyber {
          left: 19.4%;
          top: 38.2%;
        }
        .proof-card-fintech {
          left: 56.5%;
          top: 24.9%;
        }
        .proof-card-infra {
          right: 2.8%;
          top: 43.7%;
          width: clamp(258px, 32.5vw, 360px);
        }
        .proof-anchor-cyber .proof-card-line {
          height: clamp(72px, 8.1vw, 92px);
        }
        .proof-anchor-fintech .proof-card-line {
          height: clamp(30px, 4.3vw, 49px);
        }
        .proof-anchor-infra .proof-card-line {
          height: clamp(34px, 4.9vw, 56px);
        }
        .proof-heading {
          position: absolute;
          z-index: 16;
          left: 4.4%;
          bottom: 9.8%;
          margin: 0;
          color: #fff;
          font-family: "Google Sans Flex";
          font-size: clamp(36px, 4.05vw, 58px);
          font-weight: 500;
          line-height: 0.96;
          letter-spacing: -0.04em;
          transition:
            transform 280ms ease,
            filter 280ms ease,
            text-shadow 280ms ease;
          cursor: default;
          will-change: transform;
        }
        .proof-heading:hover {
          transform: translateY(-4px);
          text-shadow: 0 0 18px rgba(255, 255, 255, 0.34);
          filter: brightness(1.06);
        }
        .proof-link {
          position: absolute;
          z-index: 16;
          right: 4.3%;
          bottom: 11.2%;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #fff;
          font-family: "MONTECH V.02", "Google Sans Flex", monospace;
          font-size: clamp(9px, 0.78vw, 12px);
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.22em;
          text-decoration: none;
          text-transform: uppercase;
          transition:
            color 240ms ease,
            gap 240ms ease,
            transform 240ms ease,
            filter 240ms ease;
        }
        .proof-link:hover {
          gap: 11px;
          color: #f7fbff;
          transform: translateY(-3px);
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.48));
        }
        .proof-link:hover .proof-link-arrow {
          transform: translate(3px, -4px);
        }
        .proof-link span:first-child {
          text-decoration: underline;
          text-underline-position: from-font;
          text-underline-offset: 2px;
        }
        .proof-link-arrow {
          position: relative;
          width: 11px;
          height: 11px;
          transform: translateY(-1px);
          transition: transform 240ms ease;
        }
        .proof-link-arrow::before {
          content: "";
          position: absolute;
          inset: 0;
          border-top: 1px solid currentColor;
          border-right: 1px solid currentColor;
        }
        .proof-link-arrow::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 15px;
          height: 1px;
          background: currentColor;
          transform: rotate(-45deg);
          transform-origin: right center;
        }
        @media (min-width: 1200px) {
          .social-proof-panel {
            height: min(100svh, 760px);
          }
        }
        @media (max-width: 900px) and (min-width: 769px) {
          .social-proof-panel {
            height: 58vw;
          }
        }
        @media (max-width: 768px) {
          .seventh-section {
            align-items: stretch;
          }
          .social-proof-panel {
            width: 100%;
            height: max(790px, 100svh);
            min-height: 0;
            border-radius: 0 0 28px 28px;
            background:
              radial-gradient(circle at 42% 6%, rgba(246, 249, 255, 0.78) 0 12%, rgba(199, 215, 245, 0.64) 34%, rgba(108, 138, 208, 0.48) 61%, rgba(49, 80, 171, 0.52) 100%),
              linear-gradient(155deg, #d4def1 0%, #a6bae3 40%, #6e8fda 72%, #436dc5 100%);
          }
          .proof-bg {
            object-position: 38% center;
            opacity: 0.6;
            filter: invert(1) brightness(0.9) contrast(1.08);
          }
          .proof-moon-group {
            top: 1.8%;
            width: min(178%, 720px);
          }
          .proof-moon-halo {
            filter: blur(16px);
          }
          .proof-moon-rays {
            opacity: 0.34;
            filter: blur(10px);
          }
          .proof-moon {
            opacity: 0.64;
          }
          .proof-mountain {
            left: -78%;
            bottom: 0;
            width: 236%;
            height: 80%;
            opacity: 0.97;
          }
          .proof-mountain-cover {
            left: -78%;
            bottom: 0;
            width: 236%;
            height: 80%;
            opacity: 0.92;
          }
          .proof-stars {
            height: 68%;
            opacity: 0.62;
          }
          .proof-grid {
            background-size: 33.333% 100%;
            opacity: 0.38;
          }
          .proof-label {
            left: 10.4%;
            top: 5.6%;
            font-size: 12px;
          }
          .proof-card-wrap {
            width: 51.8%;
            max-width: 236px;
          }
          .proof-card-cyber {
            left: 0.4%;
            top: 44.2%;
          }
          .proof-card-fintech {
            left: auto;
            right: 0.2%;
            top: 42.4%;
          }
          .proof-card-infra {
            left: auto;
            right: 3.4%;
            top: 60.7%;
            width: 54.4%;
            max-width: 248px;
          }
          .proof-card-dot {
            width: 9px;
            height: 9px;
          }
          .proof-anchor-cyber .proof-card-line {
            height: 82px;
          }
          .proof-anchor-fintech .proof-card-line {
            height: 46px;
          }
          .proof-anchor-infra .proof-card-line {
            height: 58px;
          }
          .proof-heading {
            left: 4.2%;
            bottom: 3.4%;
            font-size: clamp(25px, 7.8vw, 32px);
            line-height: 0.98;
          }
          .proof-link {
            right: 4.6%;
            bottom: 4.3%;
            gap: 7px;
            font-size: 10px;
            letter-spacing: 0.2em;
          }
        }
        @media (max-width: 380px) {
          .social-proof-panel {
            height: max(742px, 100svh);
          }
          .proof-card-wrap {
            width: 52.4%;
          }
          .proof-card-cyber {
            top: 43.5%;
          }
          .proof-card-fintech {
            top: 41.9%;
          }
          .proof-card-infra {
            top: 60.1%;
          }
          .proof-anchor-cyber .proof-card-line,
          .proof-anchor-fintech .proof-card-line {
            height: 76px;
          }
        }
      `}</style>
    </section>
  );
}
