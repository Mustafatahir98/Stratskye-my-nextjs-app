"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ductTape = "/images/8 1.png";
const hangingLogo = "/images/ChatGPT Image Jan 22, 2026, 05_35_04 PM 1 1 (1).png";
const sectionBg = "/images/footer-landing.png";
const wordmarkIcon = "/images/Union-logo.svg";
const wordmarkText = "/images/Text (1).png";

export default function TenthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLElement | HTMLImageElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(itemRefs.current, { autoAlpha: 0, y: 28, filter: "blur(8px)" });

      gsap.to(itemRefs.current, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.set(".tenth-hanging-group", {
        rotate: -2.2,
        transformOrigin: "50% 0%",
      });

      gsap.to(".tenth-hanging-group", {
        rotate: 3.8,
        x: 6,
        duration: 5.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".tenth-bg-image",
        { yPercent: -5, scale: 1.08 },
        {
          yPercent: 6,
          scale: 1.14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="tenth-section post-shutter-section relative z-20 w-full overflow-hidden">
      <img className="tenth-bg-image" src={sectionBg} alt="" aria-hidden="true" />
      <div className="tenth-bg-dim" aria-hidden="true" />
      <div className="tenth-grid" aria-hidden="true" />

      <div className="tenth-canvas relative mx-auto h-[558px] w-full max-w-[628px] text-white">
        <div
          ref={(el) => {
            itemRefs.current[0] = el;
          }}
          className="tenth-tape-wrap"
        >
          <span className="tenth-top-string" aria-hidden="true" />
          <img src={ductTape} alt="" className="tenth-tape" />
        </div>

        <div
          ref={(el) => {
            itemRefs.current[1] = el;
          }}
          className="tenth-copy"
        >
          <h2>
            Stop <span>duct-taping</span> your
            <br />
            marketing together.
          </h2>
          <p>StratSkye can build the professional growth machine your tech deserves.</p>
          <a href="#contact">LETS CONNECT</a>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[2] = el;
          }}
          className="tenth-hanging-group"
        >
          <span className="tenth-string" aria-hidden="true" />
          <img src={hangingLogo} alt="StratSkye hanging logo" className="tenth-logo-orb" />
        </div>

        <div
          ref={(el) => {
            itemRefs.current[3] = el;
          }}
          className="tenth-footer-left"
        >
          Stop duct-taping your
          <br />
          marketing together.
        </div>

        <div
          ref={(el) => {
            itemRefs.current[4] = el;
          }}
          className="tenth-wordmark"
        >
          <img src={wordmarkIcon} alt="" className="tenth-wordmark-icon" />
          <img src={wordmarkText} alt="StratSkye" className="tenth-wordmark-text" />
        </div>

        <div
          ref={(el) => {
            itemRefs.current[5] = el;
          }}
          className="tenth-contact"
        >
          <span>+92 331 6547856</span>
          <span>admin@stratskye.com</span>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[6] = el;
          }}
          className="tenth-social"
        >
          <span>instagram</span>
          <span>linkedin</span>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[7] = el;
          }}
          className="tenth-giant-word"
          aria-hidden="true"
        >
          {"STRATSKYE".split("").map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>

        <div className="tenth-copyright">Copyright 2026 StratSkye. All rights reserved.</div>
      </div>

      <style>{`
        .tenth-section {
          min-height: 558px;
          background: var(--post-shutter-bg);
          margin-top: -1px;
        }
        .tenth-bg-image {
          position: absolute;
          z-index: 0;
          left: 0;
          right: 0;
          bottom: -1px;
          width: 100%;
          height: 43%;
          object-fit: cover;
          object-position: center bottom;
          pointer-events: none;
          opacity: 0.98;
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.16) 12%, rgba(0, 0, 0, 0.72) 24%, #000 38%);
          mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.16) 12%, rgba(0, 0, 0, 0.72) 24%, #000 38%);
          will-change: transform;
        }
        .tenth-bg-dim {
          position: absolute;
          z-index: 1;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(13, 23, 47, 0) 0%, rgba(13, 23, 47, 0) 54%, rgba(13, 23, 47, 0.12) 74%, rgba(13, 23, 47, 0.26) 100%);
          pointer-events: none;
        }
        .tenth-grid {
          position: absolute;
          z-index: 2;
          inset: 0;
          background-image: linear-gradient(90deg, rgba(186, 198, 224, 0.07) 1px, transparent 1px);
          background-size: 19.8% 100%;
          pointer-events: none;
        }
        .tenth-canvas {
          z-index: 3;
          transform-origin: top center;
        }
        .tenth-canvas::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 8% 91%, rgba(52, 80, 159, 0.45), transparent 5%),
            radial-gradient(circle at 90% 88%, rgba(255, 255, 255, 0.45) 0 1px, transparent 2px),
            radial-gradient(circle at 8% 71%, rgba(255, 255, 255, 0.75) 0 1px, transparent 2px),
            radial-gradient(circle at 93% 73%, rgba(255, 255, 255, 0.75) 0 1px, transparent 2px),
            radial-gradient(circle at 18% 64%, rgba(255, 255, 255, 0.28) 0 1px, transparent 2px),
            radial-gradient(circle at 72% 78%, rgba(255, 255, 255, 0.35) 0 1px, transparent 2px),
            radial-gradient(circle at 40% 68%, rgba(255, 255, 255, 0.4) 0 1px, transparent 2px);
          pointer-events: none;
        }
        .tenth-canvas::after {
          content: "";
          position: absolute;
          z-index: 1;
          left: 50%;
          bottom: -82px;
          width: 455px;
          height: 220px;
          transform: translateX(-50%);
          border-radius: 999px 999px 0 0;
          background:
            radial-gradient(ellipse at 50% 86%, rgba(255, 224, 112, 0.62), rgba(255, 128, 35, 0.42) 35%, rgba(255, 128, 35, 0.14) 62%, transparent 78%);
          filter: blur(18px);
          pointer-events: none;
        }
        .tenth-tape-wrap {
          position: absolute;
          top: 78px;
          left: 50%;
          width: 126px;
          height: 96px;
          margin-left: -63px;
          transform-origin: 50% 0%;
        }
        .tenth-top-string {
          position: absolute;
          left: 50%;
          top: -28px;
          width: 1px;
          height: 38px;
          background: linear-gradient(180deg, transparent, rgba(211, 223, 250, 0.17), rgba(211, 223, 250, 0.08));
        }
        .tenth-tape {
          position: absolute;
          left: 0;
          top: 39px;
          width: 126px;
          height: auto;
          filter: drop-shadow(0 14px 20px rgba(0, 0, 0, 0.22));
          animation: tenthTape 4.6s ease-in-out infinite;
        }
        .tenth-copy {
          position: absolute;
          top: 188px;
          left: 50%;
          width: 330px;
          transform: translateX(-50%);
          text-align: center;
        }
        .tenth-copy h2 {
          color: #f5f7ff;
          font-size: 25px;
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: 0;
        }
        .tenth-copy h2 span {
          color: rgba(245, 247, 255, 0.46);
          font-weight: 400;
        }
        .tenth-copy p {
          margin: 20px auto 0;
          width: 190px;
          color: rgba(229, 236, 255, 0.52);
          font-size: 8px;
          line-height: 1.35;
        }
        .tenth-copy a {
          display: inline-block;
          margin-top: 29px;
          color: rgba(245, 247, 255, 0.66);
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .tenth-copy a::after {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          margin-left: 5px;
          border-top: 1px solid #ff7a35;
          border-right: 1px solid #ff7a35;
          transform: translateY(-1px) rotate(45deg);
        }
        .tenth-hanging-group {
          position: absolute;
          top: 333px;
          left: 50%;
          z-index: 4;
          width: 158px;
          height: 128px;
          margin-left: -79px;
          will-change: transform;
        }
        .tenth-string {
          position: absolute;
          left: 50%;
          bottom: 74px;
          width: 1px;
          height: 218px;
          background: linear-gradient(180deg, rgba(211, 223, 250, 0.02), rgba(211, 223, 250, 0.16), rgba(211, 223, 250, 0.08));
          transform-origin: bottom center;
        }
        .tenth-logo-orb {
          position: absolute;
          left: 18px;
          top: 6px;
          width: 122px;
          height: 122px;
          object-fit: contain;
          filter:
            drop-shadow(0 0 28px rgba(103, 169, 255, 0.74))
            drop-shadow(0 16px 24px rgba(0, 0, 0, 0.26));
        }
        .tenth-footer-left {
          position: absolute;
          left: 24px;
          top: 454px;
          color: #f4f7ff;
          font-size: 8px;
          line-height: 1.12;
        }
        .tenth-wordmark {
          position: absolute;
          left: 50%;
          top: 456px;
          display: flex;
          align-items: center;
          gap: 5px;
          transform: translateX(-50%);
          filter: brightness(0) invert(1) drop-shadow(0 6px 12px rgba(0, 0, 0, 0.18));
        }
        .tenth-wordmark-icon {
          width: 12px;
          height: auto;
          display: block;
        }
        .tenth-wordmark-text {
          width: 84px;
          height: auto;
          display: block;
        }
        .tenth-contact {
          position: absolute;
          left: 414px;
          top: 454px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          color: rgba(245, 247, 255, 0.54);
          font-size: 6px;
          line-height: 1.1;
        }
        .tenth-social {
          position: absolute;
          left: 567px;
          top: 454px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          color: rgba(245, 247, 255, 0.54);
          font-size: 6px;
          line-height: 1.1;
        }
        .tenth-giant-word {
          position: absolute;
          z-index: 1;
          left: 0;
          bottom: -8px;
          width: 100%;
          color: rgba(65, 99, 190, 0.34);
          font-size: 58px;
          font-weight: 800;
          letter-spacing: 0;
          line-height: 1;
          white-space: nowrap;
          pointer-events: none;
          display: flex;
          justify-content: space-between;
        }
        .tenth-copyright {
          position: absolute;
          z-index: 3;
          left: 50%;
          bottom: 13px;
          transform: translateX(-50%);
          color: rgba(33, 35, 45, 0.66);
          font-size: 5px;
          white-space: nowrap;
        }
        @keyframes tenthTape {
          0%, 100% { transform: rotate(-1.4deg) translateY(0); }
          50% { transform: rotate(1.2deg) translateY(-2px); }
        }
        @media (min-width: 900px) {
          .tenth-section {
            min-height: max(100vh, 905px);
            padding-block: 0 max(28px, calc((100vh - 905px) / 2));
          }
          .tenth-canvas {
            transform: scale(1.62);
          }
          .tenth-giant-word {
            left: 50%;
            width: calc(100vw / 1.62);
            transform: translateX(-50%);
            font-size: clamp(44px, 5.95vw, 86px);
          }
        }

        @media (max-width: 899px) {
          .tenth-section {
            min-height: 720px;
          }
          .tenth-bg-image {
            height: 39%;
          }
          .tenth-bg-dim {
            background:
              linear-gradient(180deg, rgba(13, 23, 47, 0) 0%, rgba(13, 23, 47, 0) 56%, rgba(13, 23, 47, 0.18) 100%);
          }
          .tenth-grid {
            background-size: 25% 100%;
          }
          .tenth-canvas {
            height: 720px;
            max-width: min(628px, 100%);
          }
          .tenth-tape-wrap {
            top: 82px;
          }
          .tenth-copy {
            top: 202px;
          }
          .tenth-copy h2 {
            font-size: 31px;
          }
          .tenth-copy p {
            width: 260px;
            font-size: 12px;
            line-height: 1.45;
          }
          .tenth-copy a {
            font-size: 10px;
          }
          .tenth-hanging-group {
            top: 374px;
          }
          .tenth-footer-left {
            top: 580px;
            left: clamp(24px, 8vw, 70px);
            font-size: 10px;
          }
          .tenth-wordmark {
            top: 578px;
          }
          .tenth-wordmark-icon {
            width: 16px;
          }
          .tenth-wordmark-text {
            width: 112px;
          }
          .tenth-contact {
            top: 578px;
            left: auto;
            right: clamp(24px, 8vw, 70px);
            font-size: 8px;
          }
          .tenth-social {
            top: 628px;
            left: auto;
            right: clamp(24px, 8vw, 70px);
            font-size: 8px;
          }
          .tenth-giant-word {
            bottom: 46px;
            color: rgba(82, 120, 216, 0.24);
            font-size: clamp(50px, 13vw, 82px);
          }
          .tenth-copyright {
            bottom: 24px;
            color: rgba(245, 247, 255, 0.5);
            font-size: 8px;
          }
        }

        @media (max-width: 640px) {
          .tenth-section {
            min-height: 690px;
          }
          .tenth-canvas {
            width: 100%;
            max-width: 100%;
            height: 690px;
            transform: none;
          }
          .tenth-canvas::after {
            bottom: -44px;
            width: 88vw;
            height: 165px;
            opacity: 0.72;
          }
          .tenth-tape-wrap {
            top: 68px;
            width: 112px;
            margin-left: -56px;
          }
          .tenth-tape {
            width: 112px;
          }
          .tenth-copy {
            top: 188px;
            width: calc(100vw - 40px);
          }
          .tenth-copy h2 {
            font-size: clamp(28px, 8.5vw, 36px);
            line-height: 0.98;
          }
          .tenth-copy p {
            margin-top: 18px;
            width: min(280px, 74vw);
            font-size: 12px;
          }
          .tenth-copy a {
            margin-top: 26px;
            font-size: 10px;
          }
          .tenth-hanging-group {
            top: 360px;
            width: 136px;
            height: 112px;
            margin-left: -68px;
          }
          .tenth-string {
            bottom: 66px;
            height: 172px;
          }
          .tenth-logo-orb {
            left: 14px;
            width: 108px;
            height: 108px;
          }
          .tenth-footer-left,
          .tenth-contact,
          .tenth-social {
            top: auto;
            left: 24px;
            right: auto;
            font-size: 9px;
          }
          .tenth-footer-left {
            bottom: 122px;
          }
          .tenth-contact {
            bottom: 82px;
          }
          .tenth-social {
            bottom: 82px;
            left: auto;
            right: 24px;
            text-align: right;
          }
          .tenth-wordmark {
            top: auto;
            bottom: 122px;
          }
          .tenth-wordmark-icon {
            width: 14px;
          }
          .tenth-wordmark-text {
            width: 98px;
          }
          .tenth-giant-word {
            bottom: 36px;
            font-size: clamp(40px, 13vw, 64px);
          }
          .tenth-copyright {
            bottom: 18px;
            width: 90%;
            font-size: 7px;
            text-align: center;
          }
        }

        @media (max-width: 380px) {
          .tenth-section {
            min-height: 660px;
          }
          .tenth-canvas {
            height: 660px;
          }
          .tenth-copy h2 {
            font-size: 27px;
          }
          .tenth-hanging-group {
            top: 350px;
          }
          .tenth-footer-left,
          .tenth-wordmark {
            bottom: 116px;
          }
          .tenth-contact,
          .tenth-social {
            bottom: 78px;
          }
        }
      `}</style>
    </section>
  );
}
