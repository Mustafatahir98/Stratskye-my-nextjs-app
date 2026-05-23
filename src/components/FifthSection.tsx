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
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=470%",
                    scrub: 1.25,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // INITIAL STATES
            gsap.set(solutionStageRef.current, { opacity: 1 });
            gsap.set(".fs-energy-field", { xPercent: -50, yPercent: -50, rotation: -18, opacity: 0, scale: 0.74, transformOrigin: "50% 50%" });
            gsap.set(".fs-stage-halo", { opacity: 0, scale: 0.76, transformOrigin: "50% 50%" });
            gsap.set(".fs-ring-flare", { opacity: 0, scale: 0.86, transformOrigin: "50% 50%" });
            gsap.set(".fs-orbit-sparks", { rotation: -18, scale: 0.6, transformOrigin: "50% 50%", force3D: true });
            gsap.set(".fs-orbit-spark", { autoAlpha: 0, scale: 0.35, transformOrigin: "50% 50%" });
            gsap.set(".fs-text-aura", { opacity: 0, scale: 0.82, transformOrigin: "50% 50%" });
            gsap.set(topRingRef.current, { rotation: -160, opacity: 0, scale: 0.46, filter: "blur(7px)", transformOrigin: "50% 50%" });
            gsap.set(solutionTextRef.current, { opacity: 0, y: 10, scale: 0.68, filter: "blur(5px)" });
            gsap.set(lineRef.current, { scaleY: 0, opacity: 0, transformOrigin: "top center" });
            gsap.set(bottomRingOuterRef.current, { rotation: 135, opacity: 0, scale: 0.76, filter: "blur(8px)", transformOrigin: "50% 50%" });
            gsap.set(bottomRingInnerRef.current, { rotation: -175, opacity: 0, scale: 0.72, filter: "blur(8px)", transformOrigin: "50% 50%" });
            gsap.set([mainTextRef.current, subTextRef.current], { opacity: 0, y: 26, filter: "blur(6px)" });
            gsap.set(animateLogoRef.current, { opacity: 0, rotation: -180, filter: "grayscale(100%) blur(5px)", scale: 0.46 });
            gsap.set(logoGlowRef.current, { opacity: 0, scale: 0.52, rotation: -36 });

            // SEQUENCE
            tl.to(".fs-energy-field", { opacity: 0.92, scale: 1, rotation: 0, duration: 1.05, ease: "power3.out" })
                .to(".fs-stage-halo", { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" }, "<")
                .to(topRingRef.current, { rotation: -8, opacity: 1, scale: 0.6, filter: "blur(0px)", duration: 1.15, ease: "expo.out" }, "<+=0.12")
                .to(".fs-orbit-spark", { autoAlpha: 1, scale: 1, duration: 0.58, stagger: 0.045, ease: "power2.out" }, "-=0.54")
                .to(solutionTextRef.current, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.72, ease: "back.out(1.7)" }, "-=0.32")
                .to(".fs-ring-flare", { opacity: 0.92, scale: 1.04, duration: 0.42, ease: "power2.out" }, "<")
                .to(".fs-ring-flare", { opacity: 0, scale: 1.22, duration: 0.58, ease: "power2.out" })
                .to(topRingRef.current, { rotation: 44, scale: 1.14, duration: 1.7, ease: "sine.inOut" }, "-=0.2")
                .to(".fs-orbit-sparks", { rotation: 72, scale: 1.14, duration: 1.7, ease: "sine.inOut", force3D: true }, "<")
                .to(lineRef.current, { scaleY: 1, opacity: 1, duration: 0.86, ease: "power3.out" }, "<+=0.34")
                .to(solutionTextRef.current, { opacity: 0, y: -10, scale: 0.84, filter: "blur(4px)", duration: 0.45, ease: "power2.out" }, "<+=0.58")
                .to(bottomRingOuterRef.current, { rotation: -8, opacity: 1, scale: 1.02, filter: "blur(0px)", duration: 1.08, ease: "power3.out" }, "<+=0.22")
                .to(bottomRingInnerRef.current, { rotation: 8, opacity: 1, scale: 0.98, filter: "blur(0px)", duration: 1.08, ease: "power3.out" }, "<+=0.08")
                .to(bottomRingOuterRef.current, { rotation: 42, scale: 1.08, duration: 1.45, ease: "sine.inOut" }, "<")
                .to(bottomRingInnerRef.current, { rotation: -48, scale: 1.04, duration: 1.45, ease: "sine.inOut" }, "<")
                .to(topRingRef.current, { opacity: 0.12, scale: 1.22, rotation: 92, duration: 0.72, ease: "power2.out" }, "<+=0.5")
                .to(".fs-stage-halo", { opacity: 0.38, scale: 1.16, duration: 0.72, ease: "power2.out" }, "<")
                // 4. Texts fade in
                .to(".fs-text-aura", { opacity: 1, scale: 1, duration: 0.72, ease: "power2.out" }, "-=0.18")
                .to(mainTextRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.82, ease: "power2.out" }, "<+=0.08")
                .to(subTextRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.82, ease: "power2.out" }, "-=0.42")
                // 5. Fade out earlier elements
                .to([mainTextRef.current, subTextRef.current, solutionStageRef.current, lineRef.current], { opacity: 0, y: -14, duration: 0.55, ease: "power2.out" }, "+=0.58")
                .to(".fs-text-aura", { opacity: 0, scale: 1.15, duration: 0.55, ease: "power2.out" }, "<")
                // 6. Expand bottom rings
                .to(".fs-energy-field", { opacity: 0.34, scale: 1.24, rotation: 18, duration: 1.45, ease: "power2.inOut" }, "<")
                .to(bottomRingOuterRef.current, { rotation: 116, scale: 3.85, opacity: 0.7, duration: 1.55, ease: "power2.inOut" }, "<")
                .to(bottomRingInnerRef.current, { rotation: -124, scale: 3.65, opacity: 0.62, duration: 1.55, ease: "power2.inOut" }, "<")
                // 7. Show logo, rotate, grayscale to color
                .to(logoGlowRef.current, { opacity: 1, scale: 1.08, rotation: 0, duration: 1.2, ease: "power2.out" }, "-=1.05")
                .to(animateLogoRef.current, { opacity: 1, rotation: 0, filter: "grayscale(0%) blur(0px)", scale: 1, duration: 1.5, ease: "power3.out" }, "-=1.1")
                .to(".fs-energy-field", { opacity: 0.12, scale: 1.34, duration: 0.8, ease: "power2.out" }, "<");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fifth-section post-shutter-section relative w-full h-screen overflow-hidden flex flex-col items-center z-30">
            <style>{`
        .fifth-section {
          background: var(--post-shutter-bg);
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
          background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.12) 26%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 74%, transparent 100%);
        }
        .fs-energy-field {
          width: min(82vh, 760px);
          height: min(82vh, 760px);
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
        .fs-orbit-spark-1 { --fs-orbit-x: 0%; --fs-orbit-y: -42%; }
        .fs-orbit-spark-2 { --fs-orbit-x: 36.37%; --fs-orbit-y: -21%; background: #dce8ff; }
        .fs-orbit-spark-3 { --fs-orbit-x: 36.37%; --fs-orbit-y: 21%; }
        .fs-orbit-spark-4 { --fs-orbit-x: 0%; --fs-orbit-y: 42%; background: #dce8ff; }
        .fs-orbit-spark-5 { --fs-orbit-x: -36.37%; --fs-orbit-y: 21%; }
        .fs-orbit-spark-6 { --fs-orbit-x: -36.37%; --fs-orbit-y: -21%; background: #dce8ff; }
        .fs-solution-text {
          font-size: 12px;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.9);
          font-family: "Google Sans Flex";
          font-weight: 500;
          text-transform: uppercase;
          text-shadow: 0 0 18px rgba(255,255,255,0.42);
        }
        .fs-bracket {
          color: rgba(255,255,255,0.55);
        }
        .fs-main-text {
          color: #FFF;
          text-align: center;
          font-family: "Google Sans Flex";
          font-size: clamp(26px, 3.3vw, 44px);
          font-style: normal;
          font-weight: 400;
          line-height: 102%;
          letter-spacing: -1.35px;
        }
        .fs-main-text .accent {
          color: #F26E35;
          font-family: "Google Sans Flex";
          font-size: inherit;
          font-style: normal;
          font-weight: 400;
          line-height: 102%;
          letter-spacing: -1.35px;
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
          filter: blur(26px);
          mix-blend-mode: screen;
        }
      `}</style>
            <div className="absolute inset-0 fs-crosshair opacity-80 pointer-events-none" />
            <div className="fs-corner-glow fs-corner-glow-left" aria-hidden="true" />
            <div className="fs-corner-glow fs-corner-glow-right" aria-hidden="true" />
            <div className="fs-energy-field absolute left-1/2 top-[49%] z-[1]" aria-hidden="true" />

            {/* SOLUTION RING */}
            <div
                ref={solutionStageRef}
                className="absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[64vh] h-[64vh] min-w-[390px] min-h-[390px] max-w-[660px] max-h-[660px] z-[4]"
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
                <div ref={solutionTextRef} className="absolute z-[2] flex gap-2 items-center fs-solution-text whitespace-nowrap">
                    <span className="fs-bracket">[</span>
                    <span>THE SOLUTION</span>
                    <span className="fs-bracket">]</span>
                </div>
            </div>

            {/* CONNECTING LINE */}
            <div className="absolute top-[26vh] left-1/2 -translate-x-1/2 h-[19vh] min-h-[90px] max-h-[210px] flex justify-center">
                <img
                    ref={lineRef}
                    src="/images/Line 90.png"
                    alt="Connecting Line"
                    className="h-full w-auto object-contain origin-top drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                />
            </div>

            {/* BOTTOM RINGS & TEXT */}
            <div className="absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[54vh] h-[54vh] min-w-[350px] min-h-[350px] max-w-[520px] max-h-[520px]">
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
                    className="absolute inset-[10%] w-[80%] h-[80%] object-contain"
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
                    className="absolute inset-[-20%] w-[140%] h-[140%] object-contain scale-125"
                    style={{ willChange: "transform, filter, opacity" }}
                />

                {/* Texts */}
                <div className="absolute z-10 flex flex-col items-center justify-center w-[88%] text-center gap-3 md:gap-4">
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
                    <p ref={subTextRef} className="relative text-[#9ba8c6] text-[clamp(11px,1.2vw,13px)] max-w-[280px] leading-relaxed">
                        In Tech, you can&apos;t solve a sales problem<br />
                        with just an ad or just a website.
                    </p>
                </div>
            </div>

        </div>
    );
}
