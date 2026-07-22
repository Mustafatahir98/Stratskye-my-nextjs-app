"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CapTrimStyle = CSSProperties & {
    leadingTrim?: string;
    textEdge?: string;
};

export default function FifthSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shutterGradientRef = useRef<HTMLDivElement>(null);
    const shutterLeftRef = useRef<HTMLDivElement>(null);
    const shutterRightRef = useRef<HTMLDivElement>(null);
    const solutionStageRef = useRef<HTMLDivElement>(null);
    const topRingRef = useRef<HTMLImageElement>(null);
    const solutionTextRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLImageElement>(null);
    const bottomRingOuterRef = useRef<HTMLImageElement>(null);
    const bottomRingInnerRef = useRef<HTMLImageElement>(null);
    const mainTextRef = useRef<HTMLHeadingElement>(null);
    const subTextRef = useRef<HTMLParagraphElement>(null);
    const animateLogoRef = useRef<HTMLImageElement>(null);
    const logoGlowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const isMobile = window.matchMedia("(max-width: 767px)").matches;

            const tl = gsap.timeline({ paused: true });

            // INITIAL STATES
            gsap.set([shutterLeftRef.current, shutterRightRef.current], {
                xPercent: 0,
                autoAlpha: 1,
                force3D: true,
            });
            gsap.set(shutterGradientRef.current, { autoAlpha: 0 });
            gsap.set(solutionStageRef.current, { left: "50%", top: "49%", xPercent: -50, yPercent: -50, opacity: 1 });
            gsap.set(".fs-energy-field", { xPercent: -50, yPercent: -50, rotation: -6, opacity: 0.72, scale: 0.92, transformOrigin: "50% 50%" });
            gsap.set(".fs-stage-halo", { opacity: 0.62, scale: 0.92, transformOrigin: "50% 50%" });
            gsap.set(".fs-ring-flare", { opacity: 0, scale: 0.86, transformOrigin: "50% 50%" });
            gsap.set(".fs-orbit-sparks", { rotation: -6, scale: 1, transformOrigin: "50% 50%", force3D: true });
            gsap.set(".fs-orbit-spark", { autoAlpha: 1, scale: 1, transformOrigin: "50% 50%" });
            gsap.set(".fs-text-aura", { opacity: 0, scale: 0.82, transformOrigin: "50% 50%" });
            gsap.set(topRingRef.current, { rotation: 0, opacity: 1, scale: 0.84, transformOrigin: "50% 50%", force3D: true });
            gsap.set(solutionTextRef.current, { left: "50%", top: "50%", xPercent: -50, yPercent: -50, opacity: 1, y: 0, scale: 1, force3D: true });
            gsap.set(lineRef.current, { scaleY: 0, opacity: 0, transformOrigin: "top center", force3D: true });
            gsap.set(bottomRingOuterRef.current, { rotation: 0, opacity: 0, scale: 0.9, transformOrigin: "50% 50%", force3D: true });
            gsap.set(bottomRingInnerRef.current, { rotation: 0, opacity: 0, scale: 0.9, transformOrigin: "50% 50%", force3D: true });
            gsap.set(".fs-bottom-connector", { opacity: 0 });
            gsap.set([mainTextRef.current, subTextRef.current], { opacity: 0, y: 26, force3D: true });
            gsap.set(".fs-crosshair", { opacity: 0 });
            gsap.set(animateLogoRef.current, { opacity: 0, rotation: -18, scale: 0.7, force3D: true });
            gsap.set(logoGlowRef.current, { opacity: 0, scale: 0.72, rotation: -12, force3D: true });

            const shutterTl = gsap.timeline({ paused: true });

            shutterTl.to(shutterLeftRef.current, { xPercent: -100, duration: 0.95, ease: "power3.inOut" }, 0)
                .to(shutterRightRef.current, { xPercent: 100, duration: 0.95, ease: "power3.inOut" }, 0)
                .to([shutterLeftRef.current, shutterRightRef.current], { autoAlpha: 0, duration: 0.18, ease: "power2.out" }, 0.72);

            // A deterministic three-state sequence. Scrubbing makes reverse motion
            // follow the exact same path instead of competing time-based tweens.
            tl.to(topRingRef.current, { rotation: 10, scale: 0.88, duration: 0.9, ease: "sine.inOut" }, 0)
                .to(lineRef.current, { scaleY: 1, opacity: 0.58, duration: 0.68, ease: "power2.out" }, 0.12)
                .to({}, { duration: 0.35 }, 0.9)
                .to(solutionTextRef.current, { opacity: 0, y: -8, scale: 0.96, duration: 0.34, ease: "power2.out" }, 1.18)
                .to(lineRef.current, { opacity: 0, scaleY: 0.08, duration: 0.3, ease: "power2.out" }, 1.18)
                .to(topRingRef.current, { opacity: 0, scale: 1.04, rotation: 24, duration: 0.52, ease: "power2.out" }, 1.14)
                .to(bottomRingOuterRef.current, { opacity: 0.28, scale: 1.14, duration: 0.68, ease: "power3.out" }, 1.34)
                .to(bottomRingInnerRef.current, { opacity: 0.76, scale: 1.1, duration: 0.68, ease: "power3.out" }, 1.38)
                .to([".fs-bottom-connector", ".fs-crosshair"], { opacity: 1, duration: 0.45, ease: "power2.out" }, 1.4)
                .to(mainTextRef.current, { opacity: 1, y: 0, duration: 0.56, ease: "power2.out" }, 1.55)
                .to({}, { duration: 0.62 }, 2.1)
                .to(mainTextRef.current, { opacity: 0, y: -12, duration: 0.4, ease: "power2.inOut" }, 2.72)
                .to(".fs-bottom-connector", { opacity: 0, duration: 0.34, ease: "power2.out" }, 2.72)
                .to(bottomRingOuterRef.current, { scale: 2.3, opacity: 0.34, duration: 1.0, ease: "power2.inOut" }, 2.82)
                .to(bottomRingInnerRef.current, { scale: 2.2, opacity: 0.72, duration: 1.0, ease: "power2.inOut" }, 2.82)
                .to(logoGlowRef.current, { opacity: 0.72, scale: 1.08, rotation: 0, duration: 0.78, ease: "power2.out" }, 2.96)
                .to(animateLogoRef.current, { opacity: 1, rotation: 0, scale: 1, duration: 0.9, ease: "power3.out" }, 2.96)
                .to({}, { duration: 0.18 }, 3.82);

            tl.timeScale(tl.duration() / (isMobile ? 4.8 : 4.4));

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: isMobile ? "top 82%" : "top 72%",
                end: "top top",
                invalidateOnRefresh: true,
                onEnter: () => shutterTl.timeScale(shutterTl.duration() / 0.9).play(),
                onLeave: () => {
                    shutterTl.progress(1).pause();
                },
                onLeaveBack: () => {
                    shutterTl.timeScale(shutterTl.duration() / 0.75).reverse();
                },
            });

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${Math.round(window.innerHeight * (window.innerWidth <= 767 ? 2.2 : 2.6))}`,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                animation: tl,
                toggleActions: "play complete reverse reset",
            });

        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div id="solution" ref={containerRef} className="fifth-section post-shutter-section relative w-full h-[100svh] lg:h-[100dvh] overflow-hidden flex flex-col items-center z-30">
            <style>{`
        .fifth-section {
          background:
            radial-gradient(circle at 72% 44%, rgba(30, 51, 91, 0.34), transparent 58%),
            #0d172f;
          isolation: isolate;
        }
        .fifth-shutter-gradient {
          position: absolute;
          inset: 0;
          z-index: 30;
          background: var(--post-shutter-bg);
          will-change: opacity;
          pointer-events: none;
        }
        .fifth-shutter {
          position: absolute;
          inset: 0;
          z-index: 31;
          overflow: hidden;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          backface-visibility: hidden;
          mix-blend-mode: screen;
          will-change: transform, opacity;
          pointer-events: none;
        }
        .fifth-shutter-left {
          background-image: url("/images/left-shutter.png");
          transform-origin: left center;
        }
        .fifth-shutter-right {
          background-image: url("/images/right-shutter.png");
          transform-origin: right center;
        }
        .fs-crosshair::before,
        .fs-crosshair::after {
          content: "";
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          pointer-events: none;
        }
        .fs-crosshair::before {
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          z-index: 0;
        }
        .fs-crosshair::after {
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          z-index: 0;
          display: none;
        }
        .fs-energy-field,
        .fs-stage-halo,
        .fs-ring-flare,
        .fs-orbit-sparks,
        .fs-corner-glow,
        .fs-text-aura { display: none; }
        .fs-energy-field {
          width: min(88vh, 820px);
          height: min(88vh, 820px);
          border-radius: 9999px;
          background:
            conic-gradient(from 90deg, transparent 0deg, rgba(242,110,53,0.42) 42deg, transparent 86deg, rgba(117,157,230,0.34) 152deg, transparent 214deg, rgba(255,255,255,0.26) 288deg, transparent 360deg);
          -webkit-mask: radial-gradient(circle, transparent 0 49%, #000 50% 52%, transparent 55% 100%);
          mask: radial-gradient(circle, transparent 0 49%, #000 50% 52%, transparent 55% 100%);
          filter: blur(1px) drop-shadow(0 0 28px rgba(242,110,53,0.28));
          pointer-events: none;
        }
        .fs-stage-halo {
          position: absolute;
          inset: -18%;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 31%),
            radial-gradient(circle at 50% 50%, rgba(242,110,53,0.18) 0%, transparent 52%);
          filter: blur(10px);
          pointer-events: none;
        }
        .fs-ring-flare {
          position: absolute;
          inset: -5%;
          border-radius: 9999px;
          border: 1px solid rgba(255, 215, 178, 0.62);
          box-shadow:
            0 0 22px rgba(242, 110, 53, 0.36),
            inset 0 0 24px rgba(255, 255, 255, 0.12);
          pointer-events: none;
        }
        .fs-energy-field,
        .fs-stage-halo,
        .fs-ring-flare,
        .fs-solution-stage > img,
        .fs-bottom-stage > img,
        .fs-logo-glow {
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        .fs-orbit-spark {
          position: absolute;
          left: calc(50% + var(--fs-orbit-x));
          top: calc(50% + var(--fs-orbit-y));
          width: 7px;
          height: 7px;
          margin: -3.5px 0 0 -3.5px;
          border-radius: 9999px;
          background: #f7b17b;
          box-shadow: 0 0 14px rgba(242,110,53,0.92), 0 0 34px rgba(113,153,230,0.38);
          pointer-events: none;
          will-change: transform, opacity;
        }
        .fs-orbit-sparks {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          transform-origin: 50% 50%;
          will-change: transform;
        }
        .fs-orbit-spark-1 { --fs-orbit-x: 0%; --fs-orbit-y: -41%; }
        .fs-orbit-spark-2 { --fs-orbit-x: 35.51%; --fs-orbit-y: -20.5%; background: #dce8ff; }
        .fs-orbit-spark-3 { --fs-orbit-x: 35.51%; --fs-orbit-y: 20.5%; }
        .fs-orbit-spark-4 { --fs-orbit-x: 0%; --fs-orbit-y: 41%; background: #dce8ff; }
        .fs-orbit-spark-5 { --fs-orbit-x: -35.51%; --fs-orbit-y: 20.5%; }
        .fs-orbit-spark-6 { --fs-orbit-x: -35.51%; --fs-orbit-y: -20.5%; background: #dce8ff; }
        .fs-solution-text {
          position: absolute;
          left: 50%;
          top: 50%;
          padding: 9px 11px;
          font-size: 11px;
          letter-spacing: 0.22em;
          color: rgba(199, 210, 232, 0.88);
          font-family: "Google Sans Flex";
          font-weight: 500;
          text-transform: uppercase;
          text-shadow: none;
        }
        .fs-label-corner { position: absolute; width: 5px; height: 5px; border-style: solid; border-color: rgba(190, 203, 229, 0.62); }
        .fs-label-corner-tl { top: 4px; left: 2px; border-width: 1px 0 0 1px; }
        .fs-label-corner-tr { top: 4px; right: 2px; border-width: 1px 1px 0 0; }
        .fs-label-corner-bl { bottom: 4px; left: 2px; border-width: 0 0 1px 1px; }
        .fs-label-corner-br { right: 2px; bottom: 4px; border-width: 0 1px 1px 0; }
        .fs-main-text {
          color: #FFF;
          text-align: center;
          font-family: "Google Sans Flex";
          font-size: clamp(28px, 4.1vw, 42px);
          font-style: normal;
          font-weight: 400;
          line-height: 106%;
          letter-spacing: -1.65px;
        }
        .fs-main-text .accent {
          color: #F26E35;
          font-family: "Google Sans Flex";
          font-size: inherit;
          font-style: normal;
          font-weight: 400;
          line-height: 106%;
          letter-spacing: -1.65px;
        }
        .fs-corner-glow {
          position: absolute;
          inset: auto;
          width: 34vw;
          height: 42vh;
          pointer-events: none;
          filter: blur(42px);
          mix-blend-mode: screen;
          opacity: 0.75;
        }
        .fs-corner-glow-left {
          left: -14vw;
          bottom: -8vh;
          background: radial-gradient(circle, rgba(242,110,53,0.46) 0%, rgba(255,183,128,0.22) 32%, transparent 68%);
        }
        .fs-corner-glow-right {
          right: -13vw;
          top: 12vh;
          background: radial-gradient(circle, rgba(242,110,53,0.36) 0%, rgba(122,155,222,0.18) 36%, transparent 70%);
        }
        .fs-text-aura {
          position: absolute;
          inset: -26% -14%;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 50% 48%, rgba(242,110,53,0.22), transparent 42%),
            radial-gradient(circle at 50% 55%, rgba(101,144,228,0.16), transparent 56%);
          filter: blur(18px);
          pointer-events: none;
        }
        .fs-logo-glow {
          background:
            radial-gradient(circle at 33% 66%, rgba(255, 208, 139, 0.72) 0%, rgba(242, 110, 53, 0.32) 21%, transparent 46%),
            radial-gradient(circle at 68% 36%, rgba(255, 171, 119, 0.58) 0%, rgba(242, 110, 53, 0.28) 24%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(190, 216, 255, 0.45) 0%, rgba(114, 153, 220, 0.16) 36%, transparent 66%);
          filter: blur(34px);
          mix-blend-mode: screen;
          opacity: 0.72;
        }
        .fs-solution-stage {
          width: min(66vh, 660px);
          height: min(66vh, 660px);
          min-width: 410px;
          min-height: 410px;
        }
        .fs-bottom-stage {
          width: min(70vh, 660px);
          height: min(70vh, 660px);
          min-width: 410px;
          min-height: 410px;
        }
        .fs-bottom-ring-inner {
          inset: 11%;
          width: 78%;
          height: 78%;
        }
        .fs-center-copy {
          width: min(112%, 500px);
        }
        .fs-sub-text { display: none; }
        .fs-intro-connector { position: absolute; top: 50%; bottom: 0; left: 50%; z-index: 3; width: 1px; transform: translateX(-50%); }
        .fs-intro-connector img { width: 1px; height: 100%; object-fit: fill; transform-origin: top center; opacity: 0.58; }
        .fs-bottom-connector { position: absolute; left: 50%; bottom: 100%; width: 1px; height: 55vh; transform: translateX(-50%); background: rgba(128, 148, 188, 0.22); }
        @media (max-width: 767px) {
          .fs-energy-field {
            width: min(108vw, 500px);
            height: min(108vw, 500px);
          }
          .fs-solution-stage {
            width: min(104vw, 500px);
            height: min(104vw, 500px);
            min-width: 0;
            min-height: 0;
          }
          .fs-bottom-stage {
            width: min(104vw, 500px);
            height: min(104vw, 500px);
            min-width: 0;
            min-height: 0;
          }
          .fs-bottom-ring-inner {
            inset: 14%;
            width: 72%;
            height: 72%;
          }
          .fs-orbit-spark-1 { --fs-orbit-x: 0%; --fs-orbit-y: -31%; }
          .fs-orbit-spark-2 { --fs-orbit-x: 26.85%; --fs-orbit-y: -15.5%; }
          .fs-orbit-spark-3 { --fs-orbit-x: 26.85%; --fs-orbit-y: 15.5%; }
          .fs-orbit-spark-4 { --fs-orbit-x: 0%; --fs-orbit-y: 31%; }
          .fs-orbit-spark-5 { --fs-orbit-x: -26.85%; --fs-orbit-y: 15.5%; }
          .fs-orbit-spark-6 { --fs-orbit-x: -26.85%; --fs-orbit-y: -15.5%; }
          .fs-center-copy {
            width: min(58vw, 270px);
            gap: 16px;
          }
          .fs-main-text {
            font-size: clamp(17px, 4.65vw, 22px);
            line-height: 1.1;
            letter-spacing: -0.28px;
          }
          .fs-main-text .accent {
            letter-spacing: -0.28px;
          }
          .fs-sub-text {
            max-width: min(54vw, 250px);
            font-size: clamp(11px, 3vw, 13px);
            line-height: 1.34;
          }
        }
      `}</style>
            <div ref={shutterGradientRef} className="fifth-shutter-gradient" aria-hidden="true" />
            <div ref={shutterLeftRef} className="fifth-shutter fifth-shutter-left" aria-hidden="true" />
            <div ref={shutterRightRef} className="fifth-shutter fifth-shutter-right" aria-hidden="true" />
            <div className="absolute inset-0 fs-crosshair pointer-events-none" />
            <div className="fs-corner-glow fs-corner-glow-left" aria-hidden="true" />
            <div className="fs-corner-glow fs-corner-glow-right" aria-hidden="true" />
            <div className="fs-energy-field absolute left-1/2 top-[49%] z-[1]" aria-hidden="true" />

            {/* SOLUTION RING */}
            <div
                ref={solutionStageRef}
                className="fs-solution-stage absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-[4]"
            >
                <div className="fs-stage-halo" aria-hidden="true" />
                <div className="fs-ring-flare" aria-hidden="true" />
                <div className="fs-orbit-sparks" aria-hidden="true">
                    <span className="fs-orbit-spark fs-orbit-spark-1" />
                    <span className="fs-orbit-spark fs-orbit-spark-2" />
                    <span className="fs-orbit-spark fs-orbit-spark-3" />
                    <span className="fs-orbit-spark fs-orbit-spark-4" />
                    <span className="fs-orbit-spark fs-orbit-spark-5" />
                    <span className="fs-orbit-spark fs-orbit-spark-6" />
                </div>
                <img
                    ref={topRingRef}
                    src="/images/lllllllllllllll.svg"
                    alt="Top Ring"
                    className="relative z-[1] w-full h-full object-contain"
                />
                <div ref={solutionTextRef} className="absolute z-[2] flex items-center fs-solution-text whitespace-nowrap">
                    <span className="fs-label-corner fs-label-corner-tl" />
                    <span className="fs-label-corner fs-label-corner-tr" />
                    <span className="fs-label-corner fs-label-corner-bl" />
                    <span className="fs-label-corner fs-label-corner-br" />
                    <span>THE SOLUTION</span>
                </div>
            </div>

            {/* CONNECTING LINE */}
            <div className="fs-intro-connector">
                <img
                    ref={lineRef}
                    src="/images/Line 90.png"
                    alt="Connecting Line"
                    className="h-full w-auto object-contain origin-top drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                />
            </div>

            {/* BOTTOM RINGS & TEXT */}
            <div className="fs-bottom-stage absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <span className="fs-bottom-connector" aria-hidden="true" />
                {/* Outer Ring */}
                <img
                    ref={bottomRingOuterRef}
                    src="/images/Ellipse 6.png"
                    alt="Bottom Ring Outer"
                    className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Inner Ring */}
                <img
                    ref={bottomRingInnerRef}
                    src="/images/IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
                    alt="Bottom Ring Inner"
                    className="fs-bottom-ring-inner absolute object-contain"
                />

                {/* Animated Logo */}
                <div
                    ref={logoGlowRef}
                    className="absolute inset-[-18%] rounded-full fs-logo-glow"
                    aria-hidden="true"
                    style={{ willChange: "transform, opacity" }}
                />
                <img
                    ref={animateLogoRef}
                    src="/images/stratskye-animate.png"
                    alt="Animated Logo"
                    className="absolute inset-[-20%] w-[140%] h-[140%] object-contain"
                    style={{ willChange: "transform, opacity" }}
                />

                {/* Texts */}
                <div className="fs-center-copy absolute z-10 flex flex-col items-center justify-center text-center gap-3 md:gap-4">
                    <div className="fs-text-aura" aria-hidden="true" />
                    <h2
                        ref={mainTextRef}
                        className="relative fs-main-text"
                        style={{ leadingTrim: "both", textEdge: "cap" } as CapTrimStyle}
                    >
                        You need a &quot;Full-Stack&quot;<br />
                        <span className="accent">Growth Machine.</span> And we<br />
                        are here to build it.
                    </h2>
                    <p ref={subTextRef} className="fs-sub-text relative text-[#9ba8c6] text-[clamp(11px,1.2vw,13px)] max-w-[280px] leading-relaxed">
                        Throwing money on ad or a website revamp won&apos;t fix your problems.
                    </p>
                </div>
            </div>

        </div>
    );
}
