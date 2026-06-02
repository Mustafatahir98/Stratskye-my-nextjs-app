"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ductTape = "/images/8 1.png";
const hangingLogo = "/images/stratskye-animate.png";
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
        rotate: -5.5,
        transformOrigin: "50% 0%",
      });

      gsap.to(".tenth-hanging-group", {
        rotate: 7,
        x: 12,
        duration: 4.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".tenth-bg-image",
        { yPercent: -2, scale: 1.04 },
        {
          yPercent: 2,
          scale: 1.08,
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
          <a href="/contact-form" className="tenth-cta">
            <span className="tenth-cta-text">LETS CONNECT</span>
            <span className="tenth-cta-arrow" aria-hidden="true" />
          </a>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[2] = el;
          }}
          className="tenth-hanging-group"
        >
          <span className="tenth-connector tenth-connector-left" aria-hidden="true" />
          <span className="tenth-connector tenth-connector-right" aria-hidden="true" />
          <img src={hangingLogo} alt="StratSkye hanging logo" className="tenth-logo-orb" />
        </div>

        <div
          ref={(el) => {
            itemRefs.current[3] = el;
          }}
          className="tenth-footer-left"
        >
          Stop <span>duct-taping</span> your
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
          <span>+92 331 6547886</span>
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
          min-height: 760px;
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
          height: 44%;
          object-fit: cover;
          object-position: center top;
          pointer-events: none;
          opacity: 0.98;
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.42) 8%, #000 20%);
          mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.42) 8%, #000 20%);
          will-change: transform;
        }
        .tenth-bg-dim {
          position: absolute;
          z-index: 1;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(6, 15, 34, 0.02) 0%, rgba(6, 15, 34, 0) 50%, rgba(6, 15, 34, 0.22) 69%, rgba(6, 15, 34, 0.12) 100%);
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
          height: 760px;
          max-width: none;
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
          z-index: 3;
          left: 0;
          right: 0;
          bottom: 0;
          height: 48%;
          background: linear-gradient(180deg, transparent 0%, rgba(6, 15, 34, 0.12) 30%, rgba(6, 15, 34, 0.3) 100%);
          pointer-events: none;
        }
        .tenth-tape-wrap {
          position: absolute;
          top: 56px;
          left: 50%;
          z-index: 6;
          width: 154px;
          height: 76px;
          margin-left: -77px;
          transform-origin: 50% 0%;
        }
        .tenth-top-string {
          position: absolute;
          left: 50%;
          top: -54px;
          width: 1px;
          height: 62px;
          background: linear-gradient(180deg, transparent, rgba(211, 223, 250, 0.2), rgba(211, 223, 250, 0.06));
          transform-origin: bottom center;
          animation: tenthTapeString 4.6s ease-in-out infinite;
          will-change: transform;
        }
        .tenth-tape {
          position: absolute;
          left: 0;
          top: 0;
          width: 154px;
          height: auto;
          filter: drop-shadow(0 16px 22px rgba(0, 0, 0, 0.24));
          animation: tenthTape 4.6s ease-in-out infinite;
        }
        .tenth-copy {
          position: absolute;
          top: 150px;
          left: 50%;
          z-index: 7;
          width: min(560px, 92vw);
          transform: translateX(-50%);
          text-align: center;
        }
        .tenth-copy h2 {
          margin: 0;
          color: #f5f7ff;
          font-size: clamp(34px, 2.35vw, 44px);
          font-weight: 650;
          line-height: 0.98;
          letter-spacing: 0;
          white-space: nowrap;
        }
        .tenth-copy h2 span {
          color: rgba(245, 247, 255, 0.48);
          font-weight: 400;
        }
        .tenth-copy p {
          margin: 24px auto 0;
          width: min(238px, 76vw);
          color: rgba(229, 236, 255, 0.68);
          font-size: clamp(9px, 1.25vw, 11px);
          line-height: 1.12;
        }
        .tenth-copy .tenth-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          margin-top: 42px;
          color: #B6BED4;
          leading-trim: both;
          text-edge: cap;
          font-family: "MONTECH V.02", "Google Sans Flex", sans-serif;
          font-size: clamp(10px, 0.92vw, 14px);
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: 2.35px;
          text-decoration: none;
          text-transform: uppercase;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.34);
        }
        .tenth-cta-text {
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-skip-ink: auto;
          text-decoration-thickness: auto;
          text-underline-offset: auto;
          text-underline-position: from-font;
        }
        .tenth-cta-arrow {
          position: relative;
          width: 19px;
          height: 19px;
          flex: 0 0 19px;
          transform: translateY(-2px);
        }
        .tenth-cta-arrow::before {
          content: "";
          position: absolute;
          inset: 0;
          border-top: 2px solid #FF6B28;
          border-right: 2px solid #FF6B28;
        }
        .tenth-cta-arrow::after {
          content: "";
          position: absolute;
          right: 1px;
          top: 1px;
          width: 27px;
          height: 2px;
          background: #FF6B28;
          transform: rotate(-45deg);
          transform-origin: right center;
        }
        .tenth-copy .tenth-cta:hover .tenth-cta-arrow,
        .tenth-copy .tenth-cta:focus-visible .tenth-cta-arrow {
          transform: translate(3px, -5px);
        }
        .tenth-hanging-group {
          position: absolute;
          top: 386px;
          left: 50%;
          z-index: 6;
          width: 78px;
          height: 78px;
          margin-left: -39px;
          will-change: transform;
        }
        .tenth-connector {
          position: absolute;
          bottom: 72%;
          width: 1px;
          height: 280px;
          background: linear-gradient(180deg, rgba(211, 223, 250, 0.02), rgba(211, 223, 250, 0.22) 48%, rgba(211, 223, 250, 0.07));
          transform-origin: bottom center;
          animation: tenthStringSway 4.8s ease-in-out infinite;
          pointer-events: none;
        }
        .tenth-connector-left {
          left: 47.8%;
          transform: rotate(-0.8deg);
        }
        .tenth-connector-right {
          left: 52.2%;
          transform: rotate(0.8deg);
          animation-delay: -1.1s;
        }
        .tenth-logo-orb {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.26));
          animation: tenthLogoBob 3.9s ease-in-out infinite;
          will-change: transform;
        }
        .tenth-footer-left {
          position: absolute;
          z-index: 7;
          left: clamp(32px, 4vw, 74px);
          top: 72.5%;
          color: #FFF;
          leading-trim: both;
          text-edge: cap;
          font-family: "Google Sans Flex";
          font-size: clamp(20px, 1.75vw, 28px);
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          letter-spacing: -0.84px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.58);
        }
        .tenth-footer-left span {
          color: rgba(245, 247, 255, 0.48);
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
          z-index: 7;
          left: min(66vw, 1010px);
          top: 72.5%;
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: rgba(255, 255, 255, 0.92);
          font-family: "Google Sans Flex";
          font-size: clamp(11px, 0.86vw, 14px);
          font-weight: 500;
          line-height: 1.18;
          letter-spacing: 0;
          text-shadow: 0 2px 7px rgba(0, 0, 0, 0.58);
        }
        .tenth-social {
          position: absolute;
          z-index: 7;
          left: auto;
          right: clamp(32px, 4vw, 74px);
          top: 72.5%;
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: rgba(255, 255, 255, 0.92);
          font-family: "Google Sans Flex";
          font-size: clamp(11px, 0.86vw, 14px);
          font-weight: 500;
          line-height: 1.18;
          letter-spacing: 0;
          text-shadow: 0 2px 7px rgba(0, 0, 0, 0.58);
        }
        .tenth-giant-word {
          position: absolute;
          z-index: 2;
          left: -0.8vw;
          right: -0.8vw;
          bottom: -8px;
          width: auto;
          color: rgba(185, 206, 255, 0.19);
          font-size: clamp(82px, 11.8vw, 190px);
          font-weight: 750;
          letter-spacing: 0;
          line-height: 0.72;
          white-space: nowrap;
          pointer-events: none;
          display: flex;
          justify-content: space-between;
        }
        .tenth-giant-word span {
          display: inline-block;
          color: rgba(185, 206, 255, 0.19);
          text-shadow: none;
          animation: none;
        }
        .tenth-copyright {
          position: absolute;
          z-index: 8;
          left: 50%;
          bottom: 22px;
          transform: translateX(-50%);
          color: #FFF;
          font-family: "Google Sans Flex";
          font-size: clamp(10px, 0.74vw, 12px);
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.12px;
          white-space: nowrap;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.68);
        }
        @keyframes tenthTape {
          0%, 100% { transform: rotate(-1.4deg) translateY(0); }
          50% { transform: rotate(1.2deg) translateY(-2px); }
        }
        @keyframes tenthTapeString {
          0%, 100% { transform: translateX(-50%) rotate(-1.1deg); opacity: 0.56; }
          50% { transform: translateX(-50%) rotate(1.1deg); opacity: 0.86; }
        }
        @keyframes tenthLetterGlow {
          0%, 100% {
            opacity: 0.74;
            text-shadow:
              0 0 9px rgba(109, 159, 255, 0.48),
              0 0 22px rgba(85, 137, 255, 0.34),
              0 0 42px rgba(242, 110, 53, 0.18);
          }
          50% {
            opacity: 1;
            text-shadow:
              0 0 14px rgba(150, 186, 255, 0.78),
              0 0 34px rgba(92, 148, 255, 0.58),
              0 0 62px rgba(242, 110, 53, 0.34);
          }
        }
        @keyframes tenthLogoBob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.03); }
        }
        @keyframes tenthStringSway {
          0%, 100% { opacity: 0.62; }
          50% { opacity: 0.95; }
        }
        @media (min-width: 900px) {
          .tenth-section {
            min-height: 760px;
            padding-block: 0;
          }
          .tenth-canvas {
            transform: none;
            width: 100%;
            max-width: none;
            height: 760px;
          }
          .tenth-wordmark {
            display: none;
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
          .tenth-copy .tenth-cta {
            margin-top: 30px;
            gap: 9px;
            font-size: 10px;
            letter-spacing: 1.9px;
          }
          .tenth-cta-arrow {
            width: 16px;
            height: 16px;
            flex-basis: 16px;
          }
          .tenth-cta-arrow::after {
            width: 23px;
          }
          .tenth-hanging-group {
            top: 364px;
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
          .tenth-top-string {
            top: -44px;
            height: 52px;
          }
          .tenth-tape {
            width: 112px;
          }
          .tenth-copy {
            top: 182px;
            width: calc(100vw - 40px);
          }
          .tenth-copy h2 {
            font-size: clamp(28px, 8.5vw, 36px);
            line-height: 0.98;
            white-space: normal;
          }
          .tenth-copy p {
            margin-top: 18px;
            width: min(280px, 74vw);
            font-size: 12px;
          }
          .tenth-copy .tenth-cta {
            margin-top: 24px;
            gap: 8px;
            font-size: 9px;
            letter-spacing: 1.7px;
          }
          .tenth-cta-arrow {
            width: 14px;
            height: 14px;
            flex-basis: 14px;
          }
          .tenth-cta-arrow::before {
            border-top-width: 1.8px;
            border-right-width: 1.8px;
          }
          .tenth-cta-arrow::after {
            width: 20px;
            height: 1.8px;
          }
          .tenth-hanging-group {
            top: 340px;
            width: 122px;
            height: 122px;
            margin-left: -61px;
          }
          .tenth-connector {
            bottom: 70%;
            height: 214px;
          }
          .tenth-logo-orb {
            left: 0;
            width: 100%;
            height: 100%;
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
            top: 338px;
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
