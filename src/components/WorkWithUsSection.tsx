"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const frames = [
  "/images/work-with-us-1.png",
  "/images/work-with-us-2.png",
  "/images/work-with-us-3.png",
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
        gsap.set(mobileCards, {
          autoAlpha: 0,
          y: 26,
          scale: 0.97,
          filter: "blur(7px)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=190%",
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
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power3.out",
          })
          .to(mobileCards[1], {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power3.out",
          })
          .to(mobileCards[2], {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power3.out",
          })
          .to({}, { duration: 0.35 });

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
          top: clamp(38px, 8.2vh, 74px);
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
          top: 0;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
        }
        .work-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          object-position: center bottom;
          transform-origin: center bottom;
          will-change: transform, opacity, filter;
        }
        .work-frame--3 {
          left: auto;
          right: 0;
          width: 96.5104167%;
        }
        .work-mobile-cards {
          display: none;
        }
        @media (max-width: 860px) {
          .work-copy {
            top: clamp(74px, 9svh, 96px);
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
            top: clamp(230px, 34svh, 292px);
            bottom: 18px;
            z-index: 8;
            display: grid;
            grid-template-rows: repeat(3, minmax(0, 1fr));
            gap: 10px;
            pointer-events: none;
          }
          .work-mobile-card {
            position: relative;
            min-height: 0;
            overflow: hidden;
            border: 1px solid rgba(233, 237, 247, 0.13);
            border-radius: 6px;
            background: rgba(8, 18, 42, 0.42);
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.16);
            will-change: transform, opacity, filter;
          }
          .work-mobile-card img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center bottom;
          }
          .work-mobile-card--3 img {
            width: 96.5104167%;
            margin-left: auto;
          }
        }
        @media (max-width: 560px) {
          .work-copy {
            top: clamp(68px, 9svh, 84px);
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
            left: 10px;
            right: 10px;
            top: clamp(205px, 31svh, 248px);
            bottom: 14px;
            gap: 8px;
          }
          .work-mobile-card {
            border-radius: 5px;
          }
        }
        @media (max-width: 560px) and (max-height: 740px) {
          .work-copy {
            top: 62px;
          }
          .work-heading {
            font-size: clamp(27px, 8.2vw, 35px);
          }
          .work-mobile-cards {
            top: 184px;
            bottom: 10px;
            gap: 6px;
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

      <div className="work-mobile-cards" aria-hidden="true">
        {frames.map((src, index) => (
          <div
            key={`mobile-${src}-${index}`}
            ref={(el) => {
              mobileCardRefs.current[index] = el;
            }}
            className={`work-mobile-card work-mobile-card--${index + 1}`}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>

    </section>
  );
}
