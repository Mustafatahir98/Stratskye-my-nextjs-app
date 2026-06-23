"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const frames = [
  "/images/work-with-us-1.png",
  "/images/work-with-us-2.png",
  "/images/work-with-us-3.png",
];

const mobileWays = [
  {
    label: "01",
    title: "Stratskye Growth Engine",
    body: "Positioning, website, socials, leads. We build and run the entire growth infrastructure so you never have to think about it.",
    tag: "Senior strategy, on demand.",
  },
  {
    label: "02",
    title: "Social Signal Accelerator",
    body: "Done-for-you content that makes prospects stop wondering if you're still in business and start booking demos.",
    tag: "Your brand, active and credible.",
  },
  {
    label: "03",
    title: (
      <>
        <span className="work-mobile-nowrap">Founder Strategy</span>
        <br />
        Advisory
      </>
    ),
    body: "A weekly call, a clear action plan, and straight feedback on what's working. No fluff. Just answers.",
    tag: "Senior strategy, on demand.",
  },
];

export default function WorkWithUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLImageElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const frameItems = frameRefs.current.filter(Boolean);
      const mobileCards = mobileCardRefs.current.filter(Boolean);

      mm.add("(min-width: 861px)", () => {
        gsap.set(mobileCards, { autoAlpha: 0 });
        gsap.set(copyRef.current, { autoAlpha: 0, y: 22, filter: "blur(7px)" });
        gsap.set(frameItems[0], {
          autoAlpha: 0,
          xPercent: -8,
          yPercent: 0,
          scale: 1.01,
          filter: "blur(8px)",
        });
        gsap.set(frameItems.slice(1), {
          autoAlpha: 0,
          xPercent: 13,
          yPercent: 0,
          scale: 1.01,
          filter: "blur(8px)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=340%",
            scrub: 0.9,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(copyRef.current, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
        });

        tl.to(frameItems[0], {
          autoAlpha: 1,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        })
          .to({}, { duration: 0.45 })
          .to(frameItems[1], {
            autoAlpha: 1,
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          })
          .to({}, { duration: 0.45 })
          .to(frameItems[2], {
            autoAlpha: 1,
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          })
          .to({}, { duration: 0.5 });

        return () => tl.kill();
      });

      mm.add("(max-width: 860px)", () => {
        gsap.set(frameItems, { autoAlpha: 0 });
        gsap.set(copyRef.current, { autoAlpha: 0, y: 18, filter: "blur(6px)" });
        gsap.set(mobileCards, { autoAlpha: 1, xPercent: 116, y: 0, scale: 1, filter: "blur(0px)" });
        gsap.set(mobileCards[0], { zIndex: 1 });
        gsap.set(mobileCards[1], { zIndex: 2 });
        gsap.set(mobileCards[2], { zIndex: 3 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=260%",
            scrub: 0.85,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(copyRef.current, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
          ease: "power3.out",
        })
          .to(mobileCards[0], {
            xPercent: 0,
            duration: 0.9,
            ease: "power3.out",
          })
          .to({}, { duration: 0.28 })
          .to(mobileCards[1], {
            xPercent: 0,
            duration: 0.95,
            ease: "power3.out",
          })
          .to({}, { duration: 0.28 })
          .to(mobileCards[2], {
            xPercent: 0,
            duration: 0.95,
            ease: "power3.out",
          })
          .to({}, { duration: 0.45 });

        return () => tl.kill();
      });
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="work-section post-shutter-section relative z-20 h-screen w-full overflow-hidden">
      <style>{`
        .work-section {
          background: var(--post-shutter-bg);
          min-height: 100svh;
        }
        .work-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(90deg, rgba(184, 197, 224, 0.075) 1px, transparent 1px);
          background-size: 20.45% 100%;
          pointer-events: none;
        }
        .work-copy {
          position: absolute;
          left: clamp(28px, 4.2vw, 70px);
          top: clamp(122px, 15vh, 154px);
          z-index: 12;
          color: #E9EDF7;
          will-change: transform, opacity, filter;
        }
        .work-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(233, 237, 247, 0.72);
          font-family: "Google Sans Flex";
          font-size: clamp(8px, 0.72vw, 11px);
          font-weight: 700;
          font-style: normal;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .work-kicker span {
          color: rgba(233, 237, 247, 0.42);
        }
        .work-kicker em {
          font-style: normal;
        }
        .work-heading {
          margin-top: clamp(18px, 3.2vh, 28px);
          color: #F6F7FC;
          font-family: "Google Sans Flex";
          font-size: clamp(36px, 4.15vw, 76px);
          font-weight: 500;
          line-height: 0.98;
          letter-spacing: -0.02em;
        }
        .work-heading strong {
          display: block;
          color: #F26E35;
          font-weight: 500;
        }
        .work-frame-stage {
          position: absolute;
          left: 0;
          right: 0;
          top: 68px;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
        }
        .work-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: right bottom;
          transform-origin: center bottom;
          transform: scale(1.035);
          will-change: transform, opacity, filter;
        }
        .work-frame--3 {
          left: auto;
          right: 0;
          width: 100%;
        }
        .work-mobile-cards {
          display: none;
        }
        @media (max-width: 860px) {
          .work-copy {
            top: clamp(42px, 7svh, 74px);
            left: 26px;
          }
          .work-heading {
            font-size: clamp(34px, 7.6vw, 58px);
            letter-spacing: 0;
          }
          .work-frame-stage {
            display: none;
          }
          .work-mobile-cards {
            position: absolute;
            right: 0;
            bottom: clamp(66px, 9svh, 98px);
            top: clamp(230px, 33svh, 292px);
            width: 100vw;
            z-index: 8;
            display: block;
            pointer-events: none;
          }
          .work-mobile-card {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: var(--work-mobile-offset, 0px);
            overflow-y: auto;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: clamp(10px, 2.2svh, 18px);
            padding: clamp(24px, 5.5vw, 34px) clamp(18px, 5vw, 30px) clamp(30px, 5.5svh, 52px);
            border-radius: 18px 0 0 18px;
            box-shadow: 0 24px 48px rgba(0, 0, 0, 0.26);
            transform-origin: right center;
            will-change: transform;
            scrollbar-width: none;
          }
          .work-mobile-card::-webkit-scrollbar {
            display: none;
          }
          .work-mobile-card--2 {
            --work-mobile-offset: 42px;
          }
          .work-mobile-card--3 {
            --work-mobile-offset: 84px;
          }
          .work-mobile-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(135deg, rgba(0, 0, 0, 0) 0 43%, rgba(255, 255, 255, 0.08) 43% 43.6%, rgba(0, 0, 0, 0) 43.6%),
              radial-gradient(circle at 62% 28%, rgba(255, 255, 255, 0.12), transparent 28%);
            mix-blend-mode: soft-light;
            pointer-events: none;
          }
          .work-mobile-card::after {
            content: "";
            position: absolute;
            z-index: 1;
            left: -22%;
            right: -22%;
            top: 37%;
            height: clamp(92px, 19svh, 150px);
            background: rgba(255, 255, 255, 0.16);
            transform: rotate(-42deg);
            transform-origin: center;
            pointer-events: none;
          }
          .work-mobile-card--1 {
            background: #F26E35;
            color: #FFFFFF;
          }
          .work-mobile-card--1::after {
            background: rgba(255, 255, 255, 0.14);
          }
          .work-mobile-card--2 {
            background: #F3F1EE;
            color: #071431;
          }
          .work-mobile-card--2::after {
            background: rgba(242, 110, 53, 0.16);
          }
          .work-mobile-card--3 {
            background: #4B5A73;
            color: #FFFFFF;
          }
          .work-mobile-card--3::after {
            background: rgba(255, 255, 255, 0.11);
          }
          .work-mobile-card-number {
            position: absolute;
            left: clamp(10px, 2.8vw, 14px);
            top: clamp(18px, 5vw, 28px);
            z-index: 3;
            display: block;
            color: currentColor;
            font-family: "Google Sans Flex";
            font-size: clamp(26px, 7vw, 38px);
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.04em;
          }
          .work-mobile-card-kicker {
            position: relative;
            align-self: stretch;
            max-width: 100%;
            z-index: 2;
            color: currentColor;
            opacity: 0.72;
            font-family: "Google Sans Flex";
            font-size: clamp(8px, 2.1vw, 11px);
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: 0.12em;
            text-align: right;
            text-transform: uppercase;
            overflow-wrap: anywhere;
          }
          .work-mobile-card-title {
            position: relative;
            z-index: 2;
            max-width: 100%;
            margin-left: 0;
            margin-top: clamp(24px, 5svh, 58px);
            color: currentColor;
            font-family: "Google Sans Flex";
            font-size: clamp(27px, 7.4vw, 40px);
            font-weight: 500;
            line-height: 1.05;
            letter-spacing: 0;
            text-align: right;
            overflow-wrap: anywhere;
          }
          .work-mobile-nowrap {
            white-space: normal;
          }
          .work-mobile-card--3 .work-mobile-card-title {
            font-size: clamp(25px, 6.8vw, 36px);
            margin-left: 0;
          }
          .work-mobile-card--3 .work-mobile-card-body {
            max-width: 100%;
          }
          .work-mobile-card-body {
            position: relative;
            z-index: 2;
            max-width: 100%;
            margin: 0 0 0 auto;
            color: currentColor;
            opacity: 0.82;
            font-family: "Google Sans Flex";
            font-size: clamp(13px, 3.45vw, 17px);
            font-weight: 500;
            line-height: 1.28;
            letter-spacing: 0;
            text-align: right;
            overflow-wrap: anywhere;
          }
        }
        @media (max-width: 560px) {
          .work-copy {
            top: clamp(18px, 5svh, 44px);
            left: 20px;
            max-width: calc(100vw - 40px);
          }
          .work-kicker {
            font-size: 8px;
            letter-spacing: 0.16em;
            gap: 6px;
          }
          .work-heading {
            margin-top: 12px;
            font-size: clamp(29px, 8.7vw, 39px);
            line-height: 1;
          }
          .work-mobile-cards {
            top: clamp(164px, 27svh, 218px);
            bottom: clamp(58px, 8svh, 82px);
            width: 100vw;
          }
          .work-mobile-card {
            padding: 22px 18px clamp(30px, 5.8svh, 54px);
            border-radius: 16px 0 0 16px;
          }
          .work-mobile-card--2 {
            --work-mobile-offset: 34px;
          }
          .work-mobile-card--3 {
            --work-mobile-offset: 68px;
          }
          .work-mobile-card-number {
            left: 10px;
            top: 20px;
          }
          .work-mobile-card-title {
            font-size: clamp(24px, 7.1vw, 34px);
            margin-left: 0;
            margin-top: clamp(20px, 4.8svh, 46px);
          }
          .work-mobile-card--3 .work-mobile-card-title {
            font-size: clamp(22px, 6.4vw, 30px);
            margin-left: 0;
          }
          .work-mobile-card--3 .work-mobile-card-body {
            max-width: 100%;
          }
          .work-mobile-card-body {
            max-width: 100%;
            font-size: clamp(12px, 3.45vw, 15px);
          }
        }
        @media (max-width: 560px) and (max-height: 740px) {
          .work-copy {
            top: 16px;
          }
          .work-heading {
            font-size: clamp(27px, 8.2vw, 35px);
          }
          .work-mobile-cards {
            top: 150px;
            bottom: 52px;
            width: 100vw;
          }
          .work-mobile-card {
            gap: 10px;
            padding: 18px 15px 38px;
          }
          .work-mobile-card-title {
            font-size: clamp(22px, 6.6vw, 30px);
            margin-left: 0;
            margin-top: clamp(16px, 4svh, 34px);
          }
          .work-mobile-card--3 .work-mobile-card-title {
            font-size: clamp(20px, 5.8vw, 26px);
            margin-left: 0;
          }
          .work-mobile-card--3 .work-mobile-card-body {
            max-width: 100%;
          }
          .work-mobile-card-body {
            font-size: clamp(11px, 3.2vw, 13px);
            line-height: 1.22;
          }
        }
      `}</style>

      <div className="work-bg-grid" aria-hidden="true" />

      <div ref={copyRef} className="work-copy">
        <div className="work-kicker">
          <span>{`[`}</span>
          <em>CAPABILITIES</em>
          <span>{`]`}</span>
        </div>
        <h2 className="work-heading">
          Three ways to
          <strong>work with us.</strong>
        </h2>
      </div>

      <div className="work-frame-stage" aria-hidden="true">
        {frames.map((src, index) => (
          <img
            key={`${src}-${index}`}
            ref={(el) => {
              frameRefs.current[index] = el;
            }}
            className={`work-frame work-frame--${index + 1}`}
            src={src}
            alt=""
            style={{ zIndex: index + 1 }}
          />
        ))}
      </div>

      <div className="work-mobile-cards" role="list" aria-label="Ways to work with StratSkye">
        {mobileWays.map((way, index) => (
          <div
            key={way.label}
            ref={(el) => {
              mobileCardRefs.current[index] = el;
            }}
            className={`work-mobile-card work-mobile-card--${index + 1}`}
            role="listitem"
          >
            <span className="work-mobile-card-number">{way.label}</span>
            <span className="work-mobile-card-kicker">{way.tag}</span>
            <h3 className="work-mobile-card-title">{way.title}</h3>
            <p className="work-mobile-card-body">{way.body}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
