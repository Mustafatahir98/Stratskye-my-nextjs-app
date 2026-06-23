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
            invalidateOnRefresh: true,
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
        gsap.set(mobileCards, { autoAlpha: 0, xPercent: 60, scale: 0.96, filter: "blur(4px)" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=280%",
            scrub: 0.85,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
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
            autoAlpha: 1,
            xPercent: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          })
          .to({}, { duration: 0.18 })
          .to(mobileCards[1], {
            autoAlpha: 1,
            xPercent: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          })
          .to({}, { duration: 0.18 })
          .to(mobileCards[2], {
            autoAlpha: 1,
            xPercent: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
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
            top: 92px;
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
            left: 16px;
            right: 16px;
            top: clamp(220px, 30svh, 270px);
            bottom: 18px;
            width: auto;
            z-index: 8;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
            overflow: hidden;
          }
          .work-mobile-card {
            position: relative;
            flex: 1;
            min-height: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 4px;
            padding: 14px 18px 14px 56px;
            border-radius: 14px;
            box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
            overflow: hidden;
            transform-origin: center right;
            will-change: transform, opacity, filter;
          }
          .work-mobile-card::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background:
              linear-gradient(135deg, rgba(0, 0, 0, 0) 0 43%, rgba(255, 255, 255, 0.07) 43% 43.6%, rgba(0, 0, 0, 0) 43.6%),
              radial-gradient(circle at 72% 22%, rgba(255, 255, 255, 0.1), transparent 32%);
            mix-blend-mode: soft-light;
            pointer-events: none;
          }
          .work-mobile-card::after {
            content: "";
            position: absolute;
            z-index: 1;
            left: -22%;
            right: -22%;
            top: 20%;
            height: 80%;
            background: rgba(255, 255, 255, 0.08);
            transform: rotate(-42deg);
            transform-origin: center;
            pointer-events: none;
          }
          .work-mobile-card--1 {
            background: #F26E35;
            color: #FFFFFF;
          }
          .work-mobile-card--1::after {
            background: rgba(255, 255, 255, 0.1);
          }
          .work-mobile-card--2 {
            background: #F3F1EE;
            color: #071431;
          }
          .work-mobile-card--2::after {
            background: rgba(242, 110, 53, 0.1);
          }
          .work-mobile-card--3 {
            background: #4B5A73;
            color: #FFFFFF;
          }
          .work-mobile-card--3::after {
            background: rgba(255, 255, 255, 0.07);
          }
          .work-mobile-card-number {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 3;
            display: block;
            color: currentColor;
            opacity: 0.22;
            font-family: "Google Sans Flex";
            font-size: clamp(30px, 8vw, 42px);
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0.04em;
          }
          .work-mobile-card-kicker {
            position: relative;
            z-index: 2;
            color: currentColor;
            opacity: 0.6;
            font-family: "Google Sans Flex";
            font-size: clamp(7px, 1.8vw, 9px);
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }
          .work-mobile-card-title {
            position: relative;
            z-index: 2;
            margin: 0;
            color: currentColor;
            font-family: "Google Sans Flex";
            font-size: clamp(19px, 5.2vw, 28px);
            font-weight: 500;
            line-height: 1.08;
            letter-spacing: -0.01em;
          }
          .work-mobile-nowrap {
            white-space: normal;
          }
          .work-mobile-card--3 .work-mobile-card-title {
            font-size: clamp(17px, 4.8vw, 24px);
          }
          .work-mobile-card-body {
            position: relative;
            z-index: 2;
            margin: 0;
            color: currentColor;
            opacity: 0.78;
            font-family: "Google Sans Flex";
            font-size: clamp(11px, 2.8vw, 14px);
            font-weight: 500;
            line-height: 1.28;
            letter-spacing: 0;
          }
        }
        @media (max-width: 560px) {
          .work-copy {
            top: 88px;
            left: 20px;
            max-width: calc(100vw - 40px);
          }
          .work-kicker {
            font-size: 8px;
            letter-spacing: 0.16em;
            gap: 6px;
          }
          .work-heading {
            margin-top: 10px;
            font-size: clamp(28px, 8.2vw, 38px);
            line-height: 1;
          }
          .work-mobile-cards {
            left: 12px;
            right: 12px;
            top: clamp(190px, 26svh, 230px);
            bottom: 14px;
            gap: 8px;
          }
          .work-mobile-card {
            padding: 12px 14px 12px 48px;
            border-radius: 12px;
            gap: 3px;
          }
          .work-mobile-card-number {
            left: 12px;
            font-size: clamp(26px, 7vw, 36px);
          }
          .work-mobile-card-title {
            font-size: clamp(17px, 4.6vw, 24px);
          }
          .work-mobile-card--3 .work-mobile-card-title {
            font-size: clamp(15px, 4.2vw, 21px);
          }
          .work-mobile-card-body {
            font-size: clamp(10px, 2.6vw, 13px);
          }
          .work-mobile-card-kicker {
            font-size: clamp(6px, 1.6vw, 8px);
          }
        }
        @media (max-width: 560px) and (max-height: 740px) {
          .work-copy {
            top: 84px;
          }
          .work-heading {
            font-size: clamp(26px, 7.8vw, 34px);
          }
          .work-mobile-cards {
            top: 174px;
            bottom: 10px;
            gap: 6px;
          }
          .work-mobile-card {
            gap: 2px;
            padding: 10px 12px 10px 44px;
          }
          .work-mobile-card-number {
            font-size: clamp(22px, 6vw, 30px);
          }
          .work-mobile-card-title {
            font-size: clamp(15px, 4.2vw, 20px);
          }
          .work-mobile-card--3 .work-mobile-card-title {
            font-size: clamp(14px, 3.8vw, 18px);
          }
          .work-mobile-card-body {
            font-size: clamp(9px, 2.4vw, 11px);
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
