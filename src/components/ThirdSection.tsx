"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const cards = [
  {
    title: "The Site Sells You Short",
    body: 'They visit your website to "check you out," but it looks like a 2015 template. Trust drops.',
    bg: "/images/The Site Sells You Short.png",
    icon: "/images/Union.svg",
    className: "ts-card-1",
  },
  {
    title: "The Committee Veto",
    body: "Your champion tries to sell you internally, but they're unable to convince the CFO that it is an investment and not an expense.",
    bg: "/images/The Committee Veto (1).png",
    icon: "/images/Union (1).svg",
    className: "ts-card-2",
  },
  {
    title: "The Social Silence",
    body: 'They look for your brand on LinkedIn. You haven\'t posted in three months. "Are they still in business?" they wonder.',
    bg: "/images/The Social Silence.png",
    icon: "/images/Union (2).svg",
    className: "ts-card-3",
  },
];

export default function ThirdSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballLeftRef = useRef<HTMLImageElement>(null);
  const ballRightRef = useRef<HTMLImageElement>(null);
  const ovalRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add(
        {
          isMobile: "(max-width: 760px)",
          isDesktop: "(min-width: 761px)",
        },
        (context) => {
          const isMobile = context.conditions?.isMobile;
          const cardEnterY = isMobile ? 190 : 240;
          const cardExitY = isMobile ? -92 : -120;
          const textExitY = isMobile ? -12 : -18;
          const leftEntryPath = isMobile ? "#ts-left-path-mobile" : "#ts-left-path";
          const rightEntryPath = isMobile ? "#ts-right-path-mobile" : "#ts-right-path";

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: isMobile ? "+=430%" : "+=520%",
              scrub: isMobile ? 0.85 : 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          gsap.set([ballLeftRef.current, ballRightRef.current], {
            xPercent: -50,
            yPercent: -50,
            opacity: 1,
          });
          gsap.set(ovalRef.current, { autoAlpha: 0 });
          gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { y: cardEnterY, opacity: 0, rotate: 0 });
          gsap.set(".ts-phase-text", { autoAlpha: 0, y: 18 });
          gsap.set(".ts-text-hit", { autoAlpha: 1, y: 0 });

          // --- MOBILE vs DESKTOP BALL TIMELINE EXECUTION ---
          if (!isMobile) {
            // Original Desktop Logic (Unchanged)
            tl.to(ballLeftRef.current, {
              motionPath: { path: leftEntryPath, align: leftEntryPath, alignOrigin: [0.5, 0.5] },
              duration: 1,
              ease: "none",
            }, 0);

            tl.to(ballRightRef.current, {
              motionPath: { path: rightEntryPath, align: rightEntryPath, alignOrigin: [0.5, 0.5] },
              duration: 1,
              ease: "none",
            }, 0);

            tl.to(ovalRef.current, { autoAlpha: 1, duration: 0.42, ease: "power2.out" }, 1);

            tl.to(ballLeftRef.current, {
              motionPath: {
                path: "#ts-oval-path-left",
                align: "#ts-oval-path-left",
                alignOrigin: [0.5, 0.5],
              },
              duration: 4.2,
              ease: "none",
            }, 1);

            tl.to(ballRightRef.current, {
              motionPath: {
                path: "#ts-oval-path-right",
                align: "#ts-oval-path-right",
                alignOrigin: [0.5, 0.5],
              },
              duration: 4.2,
              ease: "none",
            }, 1);
          } else {
            // Clean Custom Mobile Logic (No Loop Back or Oval Reset After Merge)
            tl.to(ballLeftRef.current, {
              motionPath: { path: leftEntryPath, align: leftEntryPath, alignOrigin: [0.5, 0.5] },
              duration: 1.2,
              ease: "none",
            }, 0);

            tl.to(ballRightRef.current, {
              motionPath: { path: rightEntryPath, align: rightEntryPath, alignOrigin: [0.5, 0.5] },
              duration: 1.2,
              ease: "none",
            }, 0);

            // Hide balls smoothly right after merging into position
            tl.to([ballLeftRef.current, ballRightRef.current], {
              opacity: 0,
              duration: 0.2,
              ease: "none"
            }, 1.2);
          }

          // --- COMMON SCROLL PHASES (Text & Cards Triggering) ---
          tl.to(".ts-text-hit", { autoAlpha: 0, y: textExitY, duration: 0.28, ease: "power2.out" }, 1.1)
            .to(".ts-text-momentum", { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, 1.25)
            .to(card1Ref.current, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, 1.35)
            .to(card1Ref.current, { y: cardExitY, opacity: 0, duration: 0.34, ease: "power2.in" }, 2.05);

          tl.to(".ts-text-momentum", { autoAlpha: 0, y: textExitY, duration: 0.28, ease: "power2.out" }, 2.35)
            .to(".ts-text-pipeline", { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, 2.5)
            .to(card2Ref.current, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, 2.55)
            .to(card2Ref.current, { y: cardExitY, opacity: 0, duration: 0.34, ease: "power2.in" }, 3.25);

          tl.to(".ts-text-pipeline", { autoAlpha: 0, y: textExitY, duration: 0.28, ease: "power2.out" }, 3.55)
            .to(".ts-text-brand", { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, 3.7)
            .to(card3Ref.current, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, 3.75)
            .to(card3Ref.current, { y: cardExitY, opacity: 0, duration: 0.42, ease: "power2.in" }, 4.55)
            .to(".ts-text-brand", { autoAlpha: 0, y: textExitY, duration: 0.22, ease: "power2.in" }, 4.94)
            .to({}, { duration: 0.04 }, 5.16);
        }
      );
    }, containerRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="ts-main relative w-full h-[100vh] bg-[#f7f3ee] overflow-hidden">
      <style>{`
        .ts-main {
          color: #091532;
          --ts-left-lane: 19.3%;
          --ts-right-lane: 80.7%;
          --ts-line-color: rgba(9, 21, 50, 0.08);
          --ts-oval-width: min(98vw, 1280px, 118vh);
          --ts-oval-height: calc(var(--ts-oval-width) * 662 / 1549);
          --ts-oval-top: calc(50vh - (var(--ts-oval-height) / 2));
          --ts-oval-center: calc(var(--ts-oval-top) + (var(--ts-oval-height) / 2));
        }
        .ts-grid-line-v { position: absolute; top: 0; bottom: 0; width: 1px; background: var(--ts-line-color); }
        .ts-v-string { position: absolute; inset: 0 0 auto; width: 100%; height: var(--ts-oval-top); z-index: 3; pointer-events: none; overflow: visible; }
        .ts-oval-shell { position: absolute; top: var(--ts-oval-top); left: 50%; transform: translateX(-50%); width: var(--ts-oval-width); aspect-ratio: 1549 / 662; z-index: 7; pointer-events: none; }
        .ts-oval-image, .ts-oval-path-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .ts-oval-image { object-fit: contain; }
        .ts-oval-path-svg { opacity: 0; pointer-events: none; overflow: visible; }
        .ts-string-path { fill: none; stroke: rgba(9, 21, 50, 0.11); stroke-width: 1.25; vector-effect: non-scaling-stroke; }
        .ts-mobile-entry-path { opacity: 0; }
        .ts-hit-text-wrap,
        .ts-phase-text-wrap {
          position: absolute;
          top: var(--ts-oval-center);
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(86vw, 900px);
          height: clamp(96px, 14vw, 170px);
          text-align: center;
          z-index: 8;
          pointer-events: none;
        }
        .ts-phase-text {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          margin: 0;
          font-family: "Google Sans Flex";
          font-size: clamp(34px, 5vw, 60px);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -1.8px;
          color: #091532;
          will-change: transform, opacity;
        }
        .ts-text-hit {
          flex-direction: row;
          gap: 0.24em;
          white-space: nowrap;
        }
        .ts-orange { color: #f26e35; }
        .ts-ball { position: absolute; top: 0; left: 0; width: 18px; height: 18px; z-index: 30; filter: drop-shadow(0 4px 7px rgba(242, 110, 53, 0.34)); }
        .ts-card-layer { position: absolute; inset: 0; z-index: 14; pointer-events: none; }
        .ts-card-shell {
          --ts-card-width: clamp(210px, 24vw, 286px);
          --ts-card-half-height: clamp(113px, 12.96vw, 154.5px);
          position: absolute;
          width: var(--ts-card-width);
          aspect-ratio: 1 / 1.08;
          padding: clamp(22px, 2.4vw, 32px);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          pointer-events: auto;
          will-change: transform, opacity;
        }
        .ts-card-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: fill; border-radius: 10px; filter: drop-shadow(0 18px 30px rgba(9, 21, 50, 0.1)); }
        .ts-card-content { position: relative; z-index: 1; display: flex; flex-direction: column; height: 100%; }
        .ts-card-icon { width: clamp(45px, 4.6vw, 62px); height: clamp(45px, 4.6vw, 62px); object-fit: contain; margin-bottom: auto; }
        .ts-card-title { margin: 0 0 22px; color: #091532; font-family: "Google Sans Flex"; font-size: clamp(20px, 2vw, 25px); line-height: 1.05; letter-spacing: -0.8px; font-weight: 650; }
        .ts-card-body { margin: 0; color: rgba(9, 21, 50, 0.62); font-family: "Google Sans Flex"; font-size: clamp(13px, 1.2vw, 16px); line-height: 1.18; letter-spacing: -0.28px; max-width: 95%; }
        .ts-card-1 { left: clamp(42px, 9vw, 122px); top: calc(var(--ts-oval-center) - var(--ts-card-half-height)); }
        .ts-card-2 { right: clamp(42px, 8vw, 96px); top: calc(var(--ts-oval-center) - var(--ts-card-half-height)); }
        .ts-card-3 { left: clamp(70px, 16vw, 188px); top: calc(var(--ts-oval-center) - var(--ts-card-half-height)); }
        .ts-card-2 .ts-card-title, .ts-card-2 .ts-card-body { color: #091532; }
        .ts-card-2 .ts-card-body { color: rgba(9, 21, 50, 0.68); }
        
        @media (max-width: 760px) {
          .ts-main {
            width: 100vw;
            height: 100dvh;
            min-height: 100dvh;
            max-height: 100dvh;
            --ts-left-lane: 13%;
            --ts-right-lane: 87%;
            --ts-line-color: rgba(20, 32, 67, 0.075);
            --ts-oval-width: 176vw;
            --ts-oval-height: calc(var(--ts-oval-width) * 662 / 1549);
            --ts-oval-top: 25vh;
            --ts-oval-center: 41vh;
            background: #f7f3ee;
          }
          .ts-main::after {
            content: none;
            position: absolute;
            left: 0;
            right: 0;
            z-index: 16;
            height: 15vh;
            pointer-events: none;
          }
          .ts-grid-line-v {
            top: 0;
            background: var(--ts-line-color);
          }
          .ts-v-string {
            height: 100%;
            opacity: 0.72;
          }
          .ts-oval-shell {
            display: none !important; /* Mobile pe horizontal tracks or lines ka visual mess hatane k liye toggle */
          }
          .ts-string-path {
            stroke: var(--ts-line-color);
          }
          .ts-entry-path {
            opacity: 0;
          }
          .ts-mobile-entry-path {
            opacity: 1;
          }
          .ts-hit-text-wrap,
          .ts-phase-text-wrap {
            top: 28vh;
            width: calc(100vw - 24px);
            height: 96px;
            z-index: 18;
          }
          .ts-phase-text {
            font-size: clamp(22px, 6.4vw, 30px);
            line-height: 0.98;
            letter-spacing: 0;
            white-space: nowrap;
          }
          .ts-text-hit {
            font-size: clamp(25px, 7.8vw, 34px);
            flex-direction: row;
            gap: 0.24em;
            white-space: nowrap;
          }
          .ts-phase-text br {
            display: none;
          }
          .ts-text-pipeline {
            font-size: clamp(18px, 5.35vw, 25px);
          }
          .ts-text-brand {
            font-size: clamp(18px, 5.35vw, 25px);
          }
          .ts-ball {
            width: 16px;
            height: 16px;
            z-index: 20;
          }
          .ts-card-layer {
            z-index: 22;
          }
          .ts-card-shell {
            --ts-card-width: min(82vw, 320px);
            --ts-card-half-height: auto;
            left: 50%;
            right: auto;
            top: 39vh;
            margin-left: calc(var(--ts-card-width) / -2);
            min-height: 285px;
            aspect-ratio: auto;
            padding: clamp(22px, 6vw, 28px);
            overflow: hidden;
            border: 1px solid rgba(9, 21, 50, 0.08);
            border-radius: 18px;
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(255, 250, 244, 0.94)),
              #fffaf4;
            box-shadow: 0 18px 42px rgba(9, 21, 50, 0.14);
          }
          .ts-card-icon {
            width: 54px;
            height: 54px;
          }
          .ts-card-title {
            margin-bottom: 14px;
            font-size: clamp(21px, 6vw, 25px);
            line-height: 1.02;
            letter-spacing: 0;
          }
          .ts-card-body {
            max-width: 100%;
            font-size: clamp(13px, 3.7vw, 15px);
            line-height: 1.24;
            letter-spacing: 0;
          }
          .ts-card-bg {
            border-radius: 18px;
            opacity: 0.11;
            filter: saturate(0.9);
          }
          .ts-card-1,
          .ts-card-2,
          .ts-card-3 {
            left: 50%;
            right: auto;
            top: 39vh;
          }
        }

        @media (max-width: 390px) {
          .ts-main {
            --ts-oval-width: 190vw;
            --ts-oval-top: 26vh;
            --ts-oval-center: 42vh;
          }
          .ts-hit-text-wrap,
          .ts-phase-text-wrap {
            top: 27vh;
          }
          .ts-phase-text {
            font-size: 21px;
          }
          .ts-text-hit {
            font-size: 26px;
          }
          .ts-text-pipeline {
            font-size: 18px;
          }
          .ts-text-brand {
            font-size: 18px;
          }
          .ts-card-shell {
            --ts-card-width: min(84vw, 286px);
            top: 39vh;
            min-height: 270px;
            padding: 22px;
          }
          .ts-card-1,
          .ts-card-2,
          .ts-card-3 {
            top: 39vh;
          }
          .ts-card-icon {
            width: 48px;
            height: 48px;
          }
          .ts-card-title {
            font-size: 20px;
            margin-bottom: 10px;
          }
          .ts-card-body {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <div className="ts-grid-line-v" style={{ left: "var(--ts-left-lane)" }} />
        <div className="ts-grid-line-v" style={{ left: "50%" }} />
        <div className="ts-grid-line-v" style={{ left: "var(--ts-right-lane)" }} />
      </div>

      <svg viewBox="0 0 1000 760" preserveAspectRatio="none" className="ts-v-string">
        <path id="ts-left-path" className="ts-string-path ts-entry-path" d="M 193 72 L 193 204 C 193 338 250 432 360 510 C 440 568 496 646 500 760" />
        <path id="ts-right-path" className="ts-string-path ts-entry-path" d="M 807 72 L 807 204 C 807 338 750 432 640 510 C 560 568 504 646 500 760" />
        
        {/* Mobile path updated coordinates to start within grid safely without clipping */}
        <path id="ts-left-path-mobile" className="ts-string-path ts-mobile-entry-path" d="M 130 50 L 130 204 C 130 338 214 432 342 510 C 432 568 495 646 500 760" />
        <path id="ts-right-path-mobile" className="ts-string-path ts-mobile-entry-path" d="M 870 50 L 870 204 C 870 338 786 432 658 510 C 568 568 505 646 500 760" />
      </svg>

      <div ref={ovalRef} className="ts-oval-shell">
        <img src="/images/Container (4).png" alt="" className="ts-oval-image" />
        <svg viewBox="0 0 1549 662" preserveAspectRatio="none" className="ts-oval-path-svg">
          <path id="ts-oval-path-left" d="M 774 0 L 749 0 L 699 0 L 649 0 L 599 0 L 549 0 L 499 0 L 449 0 L 399 0 L 350 0 L 325 0 L 300 1 L 275 4 L 250 9 L 225 17 L 200 26 L 175 38 L 150 53 L 125 71 L 100 93 L 80 114 L 65 132 L 50 154 L 40 171 L 30 191 L 20 215 L 10 246 L 0 331 L 10 414 L 20 446 L 30 470 L 40 489 L 50 506 L 65 528 L 80 547 L 100 568 L 125 590 L 150 608 L 175 622 L 200 634 L 225 644 L 250 651 L 275 656 L 300 660 L 325 661 L 350 661 L 399 661 L 449 661 L 499 661 L 549 661 L 599 661 L 649 661 L 699 661 L 749 661 L 774 661 L 799 661 L 849 661 L 899 661 L 949 661 L 999 661 L 1049 661 L 1099 661 L 1149 661 L 1198 661 L 1223 661 L 1248 660 L 1273 656 L 1298 651 L 1323 644 L 1348 634 L 1373 622 L 1398 607 L 1423 589 L 1448 567 L 1463 552 L 1478 534 L 1498 506 L 1508 489 L 1518 469 L 1528 445 L 1538 412 L 1548 331 L 1538 248 L 1528 216 L 1518 192 L 1508 172 L 1498 155 L 1478 127 L 1463 109 L 1448 93 L 1423 71 L 1398 53 L 1373 38 L 1348 26 L 1323 17 L 1298 10 L 1273 4 L 1248 1 L 1223 0 L 1198 0 L 1149 0 L 1099 0 L 1049 0 L 999 0 L 949 0 L 899 0 L 849 0 L 799 0 L 774 0" fill="none" />
          <path id="ts-oval-path-right" d="M 774 0 L 799 0 L 849 0 L 899 0 L 949 0 L 999 0 L 1049 0 L 1099 0 L 1149 0 L 1198 0 L 1223 0 L 1248 1 L 1273 4 L 1298 10 L 1323 17 L 1348 26 L 1373 38 L 1398 53 L 1423 71 L 1448 93 L 1463 109 L 1478 127 L 1498 155 L 1508 172 L 1518 192 L 1528 216 L 1538 248 L 1548 331 L 1538 412 L 1528 445 L 1518 469 L 1508 489 L 1498 506 L 1478 534 L 1463 552 L 1448 567 L 1423 589 L 1398 607 L 1373 622 L 1348 634 L 1323 644 L 1298 651 L 1273 656 L 1248 660 L 1223 661 L 1198 661 L 1149 661 L 1099 661 L 1049 661 L 999 661 L 949 661 L 899 661 L 849 661 L 799 661 L 774 661 L 749 661 L 699 661 L 649 661 L 599 661 L 549 661 L 499 661 L 449 661 L 399 661 L 350 661 L 325 661 L 300 660 L 275 656 L 250 651 L 225 644 L 200 634 L 175 622 L 150 608 L 125 590 L 100 568 L 80 547 L 65 528 L 50 506 L 40 489 L 30 470 L 20 446 L 10 414 L 0 331 L 10 246 L 20 215 L 30 191 L 40 171 L 50 154 L 65 132 L 80 114 L 100 93 L 125 71 L 150 53 L 175 38 L 200 26 L 225 17 L 250 9 L 275 4 L 300 1 L 325 0 L 350 0 L 399 0 L 449 0 L 499 0 L 549 0 L 599 0 L 649 0 L 699 0 L 749 0 L 774 0" fill="none" />
        </svg>
      </div>

      <div className="ts-hit-text-wrap">
        <h2 className="ts-phase-text ts-text-hit">sh*t <span className="ts-orange">hits</span> the fan</h2>
      </div>

      <div className="ts-phase-text-wrap">
        <h2 className="ts-phase-text ts-text-momentum">The momentum <span className="ts-orange">dies.</span></h2>
        <h2 className="ts-phase-text ts-text-pipeline">The deal sits in<br /><span className="ts-orange">&ldquo;Pipeline Purgatory.&rdquo;</span></h2>
        <h2 className="ts-phase-text ts-text-brand">Your tech is ready,<br /><span className="ts-orange">your brand isn&apos;t.</span></h2>
      </div>

      <img ref={ballLeftRef} src="/images/smallball.png" alt="" className="ts-ball" />
      <img ref={ballRightRef} src="/images/smallball.png" alt="" className="ts-ball" />

      <div className="ts-card-layer">
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={index === 0 ? card1Ref : index === 1 ? card2Ref : card3Ref}
            className={`ts-card-shell ${card.className}`}
          >
            <img src={card.bg} alt="" className="ts-card-bg" />
            <div className="ts-card-content">
              <img src={card.icon} alt="" className="ts-card-icon" />
              <h3 className="ts-card-title">{card.title}</h3>
              <p className="ts-card-body">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
