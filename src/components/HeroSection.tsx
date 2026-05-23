"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroBgRef.current,
        { yPercent: -4, scale: 1.08 },
        {
          yPercent: 5,
          scale: 1.14,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.set(".hero-reveal", { opacity: 0, y: 34 });
      gsap.set(".hero-momentum-reveal", { opacity: 0, y: 90 });
      gsap.timeline({ delay: 0.35, defaults: { duration: 0.8, ease: "power3.out" } })
        .to(".hero-lead-left .hero-reveal", { opacity: 1, y: 0 })
        .to(".hero-lead-right .hero-reveal", { opacity: 1, y: 0 }, "+=0.08")
        .to(".hero-desc .hero-reveal", { opacity: 1, y: 0 }, "+=0.08")
        .to(".hero-momentum-reveal", { opacity: 1, y: 0, duration: 1 }, "+=0.02");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-root relative w-full h-screen min-h-screen overflow-hidden will-change-transform bg-[#07112c]">
      <style>{`
        .hero-root {
          isolation: isolate;
          font-family: "Google Sans Flex";
        }
        .hero-root::after {
          content: "";
          position: absolute;
          z-index: 2;
          inset: 0;
          background:
            radial-gradient(circle at 50% 42%, rgba(21, 44, 86, 0.08), transparent 28%),
            linear-gradient(180deg, rgba(7, 17, 44, 0.22) 0%, rgba(7, 17, 44, 0.1) 42%, rgba(7, 17, 44, 0.72) 100%);
          pointer-events: none;
        }
        .hero-bg-video {
          position: absolute;
          z-index: 0;
          inset: -6%;
          width: 112%;
          height: 112%;
          object-fit: cover;
          object-position: center;
          opacity: 1;
          pointer-events: none;
          will-change: transform;
        }
        
        .hero-lead {
          position: absolute;
          top: 50%;
          z-index: 15;
          margin: 0;
          transform: translate(-50%, -50%);
          color: #F7F2EE;
          text-align: center;
          font-family: "Google Sans Flex";
          font-size: 48px;
          font-style: normal;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: -0.96px;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .hero-lead-left { left: 20%; }
        .hero-lead-right { left: 80%; }
        .hero-reveal,
        .hero-momentum-reveal { display: inline-block; will-change: transform, opacity; }

        .hero-desc {
          position: absolute;
          top: 73.5%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 15;
          width: min(90vw, 440px);
          text-align: center;
          pointer-events: none;
        }
        .hero-desc p {
          margin: 0;
          color: #FFF;
          text-align: center;
          leading-trim: both;
          text-edge: cap;
          font-family: "Google Sans Flex";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          letter-spacing: -0.4px;
        }

        .giant-blur-wrapper { position: absolute; bottom: -12px; left: 0; width: 100%; overflow: hidden; z-index: 10; pointer-events: none; }
        .giant-blur-wrapper::before,
        .giant-blur-wrapper::after {
          content: "";
          position: absolute;
          top: -42px;
          bottom: -24px;
          width: min(30vw, 390px);
          z-index: 2;
          opacity: 0.78;
          filter: blur(28px);
          mix-blend-mode: screen;
          animation: edgeGlowPulse 5.5s ease-in-out infinite;
        }
        .giant-blur-wrapper::before {
          left: -12vw;
          background:
            radial-gradient(ellipse at left bottom, rgba(68, 151, 255, 0.56), rgba(68, 151, 255, 0.22) 42%, transparent 72%),
            linear-gradient(90deg, rgba(7, 17, 44, 0.62), transparent 72%);
        }
        .giant-blur-wrapper::after {
          right: -12vw;
          background:
            radial-gradient(ellipse at right bottom, rgba(68, 151, 255, 0.56), rgba(68, 151, 255, 0.22) 42%, transparent 72%),
            linear-gradient(270deg, rgba(7, 17, 44, 0.62), transparent 72%);
          animation-delay: -2.75s;
        }
        .giant-blur-track {
          display: flex;
          width: max-content;
          animation: textMarquee 28s linear infinite;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
        }
        @keyframes textMarquee { 0% { transform: translateX(-5%); } 100% { transform: translateX(-55%); } }
        @keyframes edgeGlowPulse {
          0%, 100% { opacity: 0.62; transform: scale(0.96); }
          50% { opacity: 0.86; transform: scale(1.04); }
        }
        .giant-blur-text { 
          color: #F7F2EE;
          text-align: center;
          leading-trim: both;
          text-edge: cap;
          font-family: "Google Sans Flex";
          font-size: 210px;
          font-style: normal;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: -6.3px;
          white-space: nowrap;
          padding-right: 70px;
          transform: translateY(12px);
          text-shadow:
            0 0 18px rgba(247, 242, 238, 0.18),
            0 0 42px rgba(68, 151, 255, 0.18);
        }

        @media (max-width: 900px) {
          .hero-bg-video {
            inset: -4%;
            width: 108%;
            height: 108%;
            object-position: center top;
            opacity: 1;
          }
          .hero-lead {
            left: 50%;
            width: min(88vw, 520px);
            font-size: clamp(42px, 8.8vw, 68px);
            line-height: 0.96;
            letter-spacing: 0;
            text-wrap: balance;
          }
          .hero-lead-left {
            top: 37%;
          }
          .hero-lead-right {
            top: calc(37% + clamp(44px, 9.2vw, 70px));
          }
          .hero-desc {
            top: 62%;
            width: min(82vw, 370px);
          }
          .hero-desc p {
            font-size: clamp(17px, 3.6vw, 22px);
            line-height: 1.18;
            letter-spacing: 0;
          }
          .giant-blur-wrapper {
            bottom: -6px;
          }
          .giant-blur-wrapper::before,
          .giant-blur-wrapper::after {
            width: 34vw;
            filter: blur(20px);
          }
          .giant-blur-track {
            animation-duration: 22s;
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
            mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
          }
          .giant-blur-text {
            font-size: clamp(88px, 18vw, 128px);
            letter-spacing: 0;
            padding-right: 42px;
            transform: translateY(8px);
          }
        }

        @media (max-width: 560px) {
          .hero-root {
            height: 100svh;
            min-height: 100svh;
            max-height: 100svh;
          }
          .hero-root::after {
            background:
              radial-gradient(circle at 50% 36%, rgba(39, 82, 147, 0.18), transparent 29%),
              linear-gradient(180deg, rgba(7, 17, 44, 0.28) 0%, rgba(7, 17, 44, 0.08) 34%, rgba(7, 17, 44, 0.82) 100%);
          }
          .hero-bg-video {
            inset: -8% -26%;
            width: 152%;
            height: 116%;
            object-position: center top;
            opacity: 1;
          }
          .hero-lead {
            width: calc(100vw - 40px);
            font-size: clamp(42px, 13.2vw, 56px);
            line-height: 0.94;
          }
          .hero-lead-left {
            top: 36%;
          }
          .hero-lead-right {
            top: calc(36% + clamp(42px, 13.5vw, 58px));
          }
          .hero-desc {
            top: 56%;
            width: calc(100vw - 56px);
          }
          .hero-desc p {
            font-size: 18px;
            line-height: 1.2;
          }
          .giant-blur-wrapper {
            bottom: 0;
            overflow: visible;
          }
          .giant-blur-wrapper::before,
          .giant-blur-wrapper::after {
            top: -54px;
            bottom: -30px;
            width: 64vw;
            opacity: 1;
            filter: blur(18px);
            mix-blend-mode: screen;
            animation: speedEdgeRush 1.05s ease-in-out infinite;
          }
          .giant-blur-wrapper::before {
            left: -34vw;
            background:
              repeating-linear-gradient(100deg, transparent 0 8px, rgba(122, 198, 255, 0.72) 9px 12px, transparent 13px 28px),
              linear-gradient(90deg, rgba(102, 178, 255, 0.92) 0%, rgba(52, 134, 255, 0.52) 32%, rgba(7, 17, 44, 0.54) 60%, transparent 88%);
          }
          .giant-blur-wrapper::after {
            right: -34vw;
            background:
              repeating-linear-gradient(80deg, transparent 0 8px, rgba(122, 198, 255, 0.72) 9px 12px, transparent 13px 28px),
              linear-gradient(270deg, rgba(102, 178, 255, 0.92) 0%, rgba(52, 134, 255, 0.52) 32%, rgba(7, 17, 44, 0.54) 60%, transparent 88%);
            animation-delay: -0.52s;
          }
          .giant-blur-text {
            font-size: clamp(70px, 22vw, 96px);
            padding-right: 28px;
            transform: translateY(12px);
            text-shadow:
              0 0 20px rgba(247, 242, 238, 0.24),
              0 0 48px rgba(68, 151, 255, 0.32);
          }
        }

        @keyframes speedEdgeRush {
          0%, 100% {
            opacity: 0.82;
            transform: translateX(0) scaleX(1.04);
          }
          50% {
            opacity: 1;
            transform: translateX(10px) scaleX(1.22);
          }
        }

        @media (max-width: 380px) {
          .hero-lead {
            font-size: 40px;
          }
          .hero-lead-left {
            top: 35%;
          }
          .hero-lead-right {
            top: calc(35% + 42px);
          }
          .hero-desc {
            top: 55%;
          }
          .hero-desc p {
            font-size: 16px;
          }
          .giant-blur-text {
            font-size: 66px;
            transform: translateY(10px);
          }
        }
      `}</style>

      <video
        ref={heroBgRef}
        className="hero-bg-video"
        poster="/images/image 5.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/images/hero-vide.mp4" type="video/mp4" />
      </video>
      
      <p className="hero-lead hero-lead-left">
        <span className="hero-reveal">You build.</span>
      </p>
      <p className="hero-lead hero-lead-right">
        <span className="hero-reveal">We drive</span>
      </p>

      <div className="hero-desc">
        <p className="hero-reveal">Because your product<br />deserves more than visibility.</p>
      </div>

      <div className="giant-blur-wrapper hero-momentum-reveal">
        <div className="giant-blur-track">
          <div className="giant-blur-text">It drives momentum</div>
          <div className="giant-blur-text">It drives momentum</div>
          <div className="giant-blur-text">It drives momentum</div>
        </div>
      </div>
    </section>
  );
}
