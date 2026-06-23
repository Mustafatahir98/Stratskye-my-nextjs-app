"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ductTape = "/images/8 1.png";
const hangingLogo = "/images/stratskye-animate.png";
const sectionBg = "/images/image 9.png";
const wordmarkIcon = "/images/stratskye-footer-logo.svg";
const wordmarkText = "/images/Text.png";
const instagramUrl = "https://www.instagram.com/stratskye?igsh=MXd4eDVieWw2bzY4Zw%3D%3D";
const linkedInUrl = "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGe1p6w0mMtMgAAAZ7zplnQRcb0HyobHNWVctVbGuXOCniiT21f1yzoDn8blbd5xE6i8gBP3v3UQE_LwnagVyV3Md1F0toBKlS2QWmCBhOfNcYFhiV5Ml3YJvqc1bnbCPSYW2k=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F101893541%2Fadmin%2Fdashboard%2F";

export default function PageFooter() {
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (pathname === "/" || !footerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = itemRefs.current.filter((item): item is HTMLElement => Boolean(item));
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(items, { autoAlpha: 1, clearProps: "transform,filter" });
        return;
      }

      gsap.set(items, { autoAlpha: 0, y: 28, filter: "blur(8px)" });

      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.set(".page-footer-hanging-group", {
        rotate: -5.5,
        transformOrigin: "50% 0%",
      });

      gsap.to(".page-footer-hanging-group", {
        rotate: 7,
        x: 12,
        duration: 4.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".page-footer-bg-image",
        { yPercent: -2, scale: 1.04 },
        {
          yPercent: 2,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, [pathname]);

  if (pathname === "/") return null;

  return (
    <footer ref={footerRef} className="page-footer" aria-label="Site footer">
      <Image
        className="page-footer-bg-image"
        src={sectionBg}
        width={1920}
        height={493}
        alt=""
        aria-hidden="true"
      />
      <div className="page-footer-bg-dim" aria-hidden="true" />
      <div className="page-footer-grid" aria-hidden="true" />

      <div className="page-footer-canvas">
        <div
          ref={(el) => {
            itemRefs.current[0] = el;
          }}
          className="page-footer-tape-wrap"
        >
          <span className="page-footer-top-string" aria-hidden="true" />
          <Image className="page-footer-tape" src={ductTape} width={154} height={76} alt="" aria-hidden="true" />
        </div>

        <div
          ref={(el) => {
            itemRefs.current[1] = el;
          }}
          className="page-footer-copy"
        >
          <h2>
            Stop <span>duct-taping</span> your
            <br />
            marketing together.
          </h2>
          <p>StratSkye can build the professional growth machine your tech deserves.</p>
          <Link href="/contact-form" className="page-footer-cta">
            <span className="page-footer-cta-text">LETS CONNECT</span>
            <span className="page-footer-cta-arrow" aria-hidden="true" />
          </Link>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[2] = el;
          }}
          className="page-footer-hanging-group"
        >
          <span className="page-footer-connector page-footer-connector-left" aria-hidden="true" />
          <span className="page-footer-connector page-footer-connector-right" aria-hidden="true" />
          <Link href="/" aria-label="StratSkye home">
            <Image
              className="page-footer-logo-orb"
              src={hangingLogo}
              width={122}
              height={122}
              alt="StratSkye hanging logo"
            />
          </Link>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[3] = el;
          }}
          className="page-footer-left"
        >
          Stop <span>duct-taping</span> your
          <br />
          marketing together.
        </div>

        <Link
          ref={(el) => {
            itemRefs.current[4] = el;
          }}
          href="/"
          className="page-footer-wordmark"
          aria-label="StratSkye home"
        >
          <Image className="page-footer-wordmark-icon" src={wordmarkIcon} width={16} height={16} alt="" />
          <Image className="page-footer-wordmark-text" src={wordmarkText} width={112} height={14} alt="StratSkye" />
        </Link>

        <div
          ref={(el) => {
            itemRefs.current[5] = el;
          }}
          className="page-footer-contact"
        >
          <a href="mailto:admin@stratskye.com">admin@stratskye.com</a>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[6] = el;
          }}
          className="page-footer-social"
        >
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            instagram
          </a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            linkedin
          </a>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[7] = el;
          }}
          className="page-footer-giant-word"
          aria-hidden="true"
        >
          {"STRATSKYE".split("").map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>

        <div className="page-footer-copyright">Copyright 2026 StratSkye. All rights reserved.</div>
      </div>

      <style>{`
        .page-footer {
          --footer-bg: #f8f3ee;
          --footer-ink: #111a31;
          --footer-muted: rgba(17, 26, 49, 0.62);
          --footer-soft: rgba(17, 26, 49, 0.34);
          position: relative;
          z-index: 20;
          width: 100%;
          min-height: 760px;
          margin-top: -1px;
          overflow: hidden;
          background: var(--footer-bg);
          color: var(--footer-ink);
          border-top: 1px solid rgba(17, 26, 49, 0.06);
          font-family: "Google Sans Flex";
        }
        .page-footer-bg-image {
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
        .page-footer-bg-dim {
          position: absolute;
          z-index: 1;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(248, 243, 238, 0.02) 0%, rgba(248, 243, 238, 0) 50%, rgba(248, 243, 238, 0.28) 69%, rgba(248, 243, 238, 0.14) 100%);
          pointer-events: none;
        }
        .page-footer-grid {
          position: absolute;
          z-index: 2;
          inset: 0;
          background-image: linear-gradient(90deg, rgba(215, 196, 183, 0.34) 1px, transparent 1px);
          background-size: 19.8% 100%;
          pointer-events: none;
        }
        .page-footer-canvas {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 760px;
          max-width: none;
          margin: 0 auto;
          color: var(--footer-ink);
          transform-origin: top center;
        }
        .page-footer-canvas::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 8% 91%, rgba(17, 26, 49, 0.12), transparent 5%),
            radial-gradient(circle at 90% 88%, rgba(255, 255, 255, 0.6) 0 1px, transparent 2px),
            radial-gradient(circle at 8% 71%, rgba(17, 26, 49, 0.18) 0 1px, transparent 2px),
            radial-gradient(circle at 93% 73%, rgba(17, 26, 49, 0.18) 0 1px, transparent 2px),
            radial-gradient(circle at 18% 64%, rgba(17, 26, 49, 0.12) 0 1px, transparent 2px),
            radial-gradient(circle at 72% 78%, rgba(17, 26, 49, 0.12) 0 1px, transparent 2px),
            radial-gradient(circle at 40% 68%, rgba(17, 26, 49, 0.12) 0 1px, transparent 2px);
          pointer-events: none;
        }
        .page-footer-canvas::after {
          content: "";
          position: absolute;
          z-index: 3;
          left: 0;
          right: 0;
          bottom: 0;
          height: 48%;
          background: linear-gradient(180deg, transparent 0%, rgba(248, 243, 238, 0.1) 30%, rgba(248, 243, 238, 0.34) 100%);
          pointer-events: none;
        }
        .page-footer-tape-wrap {
          position: absolute;
          top: 56px;
          left: 50%;
          z-index: 6;
          width: 154px;
          height: 76px;
          margin-left: -77px;
          transform-origin: 50% 0%;
        }
        .page-footer-top-string {
          position: absolute;
          left: 50%;
          top: -54px;
          width: 1px;
          height: 62px;
          background: linear-gradient(180deg, transparent, rgba(17, 26, 49, 0.2), rgba(17, 26, 49, 0.06));
          transform-origin: bottom center;
          animation: pageFooterTapeString 4.6s ease-in-out infinite;
          will-change: transform;
        }
        .page-footer-tape {
          position: absolute;
          left: 0;
          top: 0;
          width: 154px;
          height: auto;
          filter: drop-shadow(0 16px 22px rgba(17, 26, 49, 0.16));
          animation: pageFooterTape 4.6s ease-in-out infinite;
        }
        .page-footer-copy {
          position: absolute;
          top: 150px;
          left: 50%;
          z-index: 7;
          width: min(560px, 92vw);
          transform: translateX(-50%);
          text-align: center;
        }
        .page-footer-copy h2 {
          margin: 0;
          color: var(--footer-ink);
          font-size: clamp(34px, 2.35vw, 44px);
          font-weight: 650;
          line-height: 0.98;
          letter-spacing: 0;
          white-space: nowrap;
        }
        .page-footer-copy h2 span {
          color: var(--footer-muted);
          font-weight: 400;
        }
        .page-footer-copy p {
          width: min(238px, 76vw);
          margin: 24px auto 0;
          color: var(--footer-muted);
          font-size: clamp(9px, 1.25vw, 11px);
          line-height: 1.12;
        }
        .page-footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          margin-top: 42px;
          color: var(--footer-muted);
          font-family: "MONTECH V.02", "Google Sans Flex", sans-serif;
          font-size: clamp(10px, 0.92vw, 14px);
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: 2.35px;
          text-decoration: none;
          text-transform: uppercase;
        }
        .page-footer-cta-text {
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-skip-ink: auto;
          text-decoration-thickness: auto;
          text-underline-offset: auto;
          text-underline-position: from-font;
        }
        .page-footer-cta-arrow {
          position: relative;
          width: 19px;
          height: 19px;
          flex: 0 0 19px;
          transform: translateY(-2px);
          transition: transform 220ms ease;
        }
        .page-footer-cta-arrow::before {
          content: "";
          position: absolute;
          inset: 0;
          border-top: 2px solid #ff6b28;
          border-right: 2px solid #ff6b28;
        }
        .page-footer-cta-arrow::after {
          content: "";
          position: absolute;
          right: 1px;
          top: 1px;
          width: 27px;
          height: 2px;
          background: #ff6b28;
          transform: rotate(-45deg);
          transform-origin: right center;
        }
        .page-footer-cta:hover .page-footer-cta-arrow,
        .page-footer-cta:focus-visible .page-footer-cta-arrow {
          transform: translate(3px, -5px);
        }
        .page-footer-hanging-group {
          position: absolute;
          top: 386px;
          left: 50%;
          z-index: 6;
          width: 78px;
          height: 78px;
          margin-left: -39px;
          will-change: transform;
        }
        .page-footer-hanging-group a {
          display: block;
          width: 100%;
          height: 100%;
        }
        .page-footer-connector {
          position: absolute;
          bottom: 72%;
          width: 1px;
          height: 280px;
          background: linear-gradient(180deg, rgba(17, 26, 49, 0.02), rgba(17, 26, 49, 0.22) 48%, rgba(17, 26, 49, 0.07));
          transform-origin: bottom center;
          animation: pageFooterStringSway 4.8s ease-in-out infinite;
          pointer-events: none;
        }
        .page-footer-connector-left {
          left: 47.8%;
          transform: rotate(-0.8deg);
        }
        .page-footer-connector-right {
          left: 52.2%;
          transform: rotate(0.8deg);
          animation-delay: -1.1s;
        }
        .page-footer-logo-orb {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 10px 16px rgba(242, 110, 53, 0.18));
          animation: pageFooterLogoBob 3.9s ease-in-out infinite;
          will-change: transform;
        }
        .page-footer-left {
          position: absolute;
          z-index: 7;
          left: clamp(32px, 4vw, 74px);
          top: 72.5%;
          color: var(--footer-ink);
          font-family: "Google Sans Flex";
          font-size: clamp(20px, 1.75vw, 28px);
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          letter-spacing: 0;
        }
        .page-footer-left span {
          color: var(--footer-muted);
        }
        .page-footer-wordmark {
          position: absolute;
          left: 50%;
          top: 456px;
          display: flex;
          align-items: center;
          gap: 5px;
          transform: translateX(-50%);
          text-decoration: none;
          filter: drop-shadow(0 6px 12px rgba(17, 26, 49, 0.1));
        }
        .page-footer-wordmark-icon {
          width: 12px;
          height: auto;
          display: block;
        }
        .page-footer-wordmark-text {
          width: 84px;
          height: auto;
          display: block;
        }
        .page-footer-contact {
          position: absolute;
          z-index: 7;
          left: min(66vw, 1010px);
          top: 72.5%;
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: var(--footer-muted);
          font-family: "Google Sans Flex";
          font-size: clamp(11px, 0.86vw, 14px);
          font-weight: 500;
          line-height: 1.18;
          letter-spacing: 0;
        }
        .page-footer-social {
          position: absolute;
          z-index: 7;
          left: auto;
          right: clamp(32px, 4vw, 74px);
          top: 72.5%;
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: var(--footer-muted);
          font-family: "Google Sans Flex";
          font-size: clamp(11px, 0.86vw, 14px);
          font-weight: 500;
          line-height: 1.18;
          letter-spacing: 0;
        }
        .page-footer-contact a,
        .page-footer-social a {
          color: inherit;
          text-decoration: none;
        }
        .page-footer-contact a:hover,
        .page-footer-contact a:focus-visible,
        .page-footer-social a:hover,
        .page-footer-social a:focus-visible {
          color: #f26e35;
        }
        .page-footer-giant-word {
          position: absolute;
          z-index: 2;
          left: -0.8vw;
          right: -0.8vw;
          bottom: -8px;
          width: auto;
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.66);
          font-size: clamp(82px, 11.8vw, 190px);
          font-weight: 750;
          line-height: 0.72;
          letter-spacing: 0;
          white-space: nowrap;
          pointer-events: none;
        }
        .page-footer-giant-word span {
          display: inline-block;
          color: rgba(255, 255, 255, 0.66);
          text-shadow: none;
          animation: none;
        }
        .page-footer-copyright {
          position: absolute;
          z-index: 8;
          left: 50%;
          bottom: 22px;
          transform: translateX(-50%);
          color: rgba(17, 26, 49, 0.56);
          font-family: "Google Sans Flex";
          font-size: clamp(10px, 0.74vw, 12px);
          font-weight: 500;
          line-height: 120%;
          letter-spacing: 0;
          white-space: nowrap;
        }
        @keyframes pageFooterTape {
          0%, 100% { transform: rotate(-1.4deg) translateY(0); }
          50% { transform: rotate(1.2deg) translateY(-2px); }
        }
        @keyframes pageFooterTapeString {
          0%, 100% { transform: translateX(-50%) rotate(-1.1deg); opacity: 0.56; }
          50% { transform: translateX(-50%) rotate(1.1deg); opacity: 0.86; }
        }
        @keyframes pageFooterLogoBob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.03); }
        }
        @keyframes pageFooterStringSway {
          0%, 100% { opacity: 0.62; }
          50% { opacity: 0.95; }
        }
        @media (min-width: 900px) {
          .page-footer {
            min-height: 760px;
            padding-block: 0;
          }
          .page-footer-canvas {
            width: 100%;
            max-width: none;
            height: 760px;
            transform: none;
          }
          .page-footer-wordmark {
            display: none;
          }
        }
        @media (max-width: 899px) {
          .page-footer {
            min-height: 720px;
          }
          .page-footer-bg-image {
            height: 39%;
          }
          .page-footer-bg-dim {
            background:
              linear-gradient(180deg, rgba(248, 243, 238, 0) 0%, rgba(248, 243, 238, 0) 56%, rgba(248, 243, 238, 0.32) 100%);
          }
          .page-footer-grid {
            background-size: 25% 100%;
          }
          .page-footer-canvas {
            height: 720px;
            max-width: min(628px, 100%);
          }
          .page-footer-tape-wrap {
            top: 82px;
          }
          .page-footer-copy {
            top: 202px;
          }
          .page-footer-copy h2 {
            font-size: 31px;
          }
          .page-footer-copy p {
            width: 260px;
            font-size: 12px;
            line-height: 1.45;
          }
          .page-footer-cta {
            margin-top: 30px;
            gap: 9px;
            font-size: 10px;
            letter-spacing: 1.9px;
          }
          .page-footer-cta-arrow {
            width: 16px;
            height: 16px;
            flex-basis: 16px;
          }
          .page-footer-cta-arrow::after {
            width: 23px;
          }
          .page-footer-hanging-group {
            top: 364px;
          }
          .page-footer-left {
            top: 580px;
            left: clamp(24px, 8vw, 70px);
            font-size: 10px;
          }
          .page-footer-wordmark {
            top: 578px;
          }
          .page-footer-wordmark-icon {
            width: 16px;
          }
          .page-footer-wordmark-text {
            width: 112px;
          }
          .page-footer-contact {
            top: 578px;
            left: auto;
            right: clamp(24px, 8vw, 70px);
            font-size: 8px;
          }
          .page-footer-social {
            top: 628px;
            left: auto;
            right: clamp(24px, 8vw, 70px);
            font-size: 8px;
          }
          .page-footer-giant-word {
            bottom: 46px;
            color: rgba(255, 255, 255, 0.62);
            font-size: clamp(50px, 13vw, 82px);
          }
          .page-footer-giant-word span {
            color: rgba(255, 255, 255, 0.62);
          }
          .page-footer-copyright {
            bottom: 24px;
            color: rgba(17, 26, 49, 0.5);
            font-size: 8px;
          }
        }
        @media (max-width: 640px) {
          .page-footer {
            min-height: 690px;
          }
          .page-footer-canvas {
            width: 100%;
            max-width: 100%;
            height: 690px;
            transform: none;
          }
          .page-footer-canvas::after {
            bottom: -44px;
            width: 88vw;
            height: 165px;
            opacity: 0.72;
          }
          .page-footer-tape-wrap {
            top: 68px;
            width: 112px;
            margin-left: -56px;
          }
          .page-footer-top-string {
            top: -44px;
            height: 52px;
          }
          .page-footer-tape {
            width: 112px;
          }
          .page-footer-copy {
            top: 182px;
            width: calc(100vw - 40px);
          }
          .page-footer-copy h2 {
            font-size: clamp(28px, 8.5vw, 36px);
            line-height: 0.98;
            white-space: normal;
          }
          .page-footer-copy p {
            width: min(280px, 74vw);
            margin-top: 18px;
            font-size: 12px;
          }
          .page-footer-cta {
            margin-top: 24px;
            gap: 8px;
            font-size: 9px;
            letter-spacing: 1.7px;
          }
          .page-footer-cta-arrow {
            width: 14px;
            height: 14px;
            flex-basis: 14px;
          }
          .page-footer-cta-arrow::before {
            border-top-width: 1.8px;
            border-right-width: 1.8px;
          }
          .page-footer-cta-arrow::after {
            width: 20px;
            height: 1.8px;
          }
          .page-footer-hanging-group {
            top: 340px;
            width: 122px;
            height: 122px;
            margin-left: -61px;
          }
          .page-footer-connector {
            bottom: 70%;
            height: 214px;
          }
          .page-footer-logo-orb {
            left: 0;
            width: 100%;
            height: 100%;
          }
          .page-footer-left,
          .page-footer-contact,
          .page-footer-social {
            top: auto;
            left: 24px;
            right: auto;
            font-size: 9px;
          }
          .page-footer-left {
            bottom: 122px;
          }
          .page-footer-contact {
            bottom: 82px;
          }
          .page-footer-social {
            bottom: 82px;
            left: auto;
            right: 24px;
            text-align: right;
          }
          .page-footer-wordmark {
            top: auto;
            bottom: 122px;
          }
          .page-footer-wordmark-icon {
            width: 14px;
          }
          .page-footer-wordmark-text {
            width: 98px;
          }
          .page-footer-giant-word {
            bottom: 36px;
            font-size: clamp(40px, 13vw, 64px);
          }
          .page-footer-copyright {
            bottom: 18px;
            width: 90%;
            font-size: 7px;
            text-align: center;
          }
        }
        @media (max-width: 380px) {
          .page-footer {
            min-height: 660px;
          }
          .page-footer-canvas {
            height: 660px;
          }
          .page-footer-copy h2 {
            font-size: 27px;
          }
          .page-footer-hanging-group {
            top: 338px;
          }
          .page-footer-left,
          .page-footer-wordmark {
            bottom: 116px;
          }
          .page-footer-contact,
          .page-footer-social {
            bottom: 78px;
          }
        }
      `}</style>
    </footer>
  );
}
