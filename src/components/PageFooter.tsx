"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="page-footer" aria-label="Site footer">
      <style>{`
        .page-footer {
          --footer-ink: #111a31;
          --footer-muted: rgba(17, 26, 49, 0.62);
          position: relative;
          min-height: clamp(320px, 34vw, 500px);
          overflow: hidden;
          background: #f8f3ee;
          color: var(--footer-ink);
          font-family: "Google Sans Flex";
          border-top: 1px solid rgba(17, 26, 49, 0.06);
        }
        .page-footer::before {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 0;
          background-image: linear-gradient(90deg, rgba(215, 196, 183, 0.34) 1px, transparent 1px);
          background-size: 12.5% 100%;
          pointer-events: none;
        }
        .page-footer::after {
          content: "";
          position: absolute;
          z-index: 2;
          inset: 0;
          background:
            linear-gradient(180deg, #f8f3ee 0%, rgba(248, 243, 238, 0.9) 18%, rgba(248, 243, 238, 0.12) 46%, rgba(248, 243, 238, 0) 72%),
            radial-gradient(circle at 50% 16%, rgba(255, 255, 255, 0.7), transparent 18%);
          pointer-events: none;
        }
        .page-footer-bg {
          position: absolute;
          z-index: 0;
          left: 0;
          right: 0;
          bottom: -1px;
          width: 100%;
          height: 78%;
          object-fit: cover;
          object-position: center bottom;
          pointer-events: none;
        }
        .page-footer-logo {
          position: absolute;
          z-index: 4;
          top: clamp(46px, 8.2vw, 104px);
          left: 50%;
          width: clamp(52px, 5.8vw, 92px);
          height: clamp(52px, 5.8vw, 92px);
          transform: translateX(-50%);
          display: block;
          text-decoration: none;
          animation: pageFooterFloat 5.6s ease-in-out infinite;
        }
        .page-footer-logo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 12px 18px rgba(242, 110, 53, 0.18));
        }
        .page-footer-inner {
          position: absolute;
          z-index: 5;
          left: 0;
          right: 0;
          bottom: clamp(98px, 10vw, 150px);
          width: min(100%, 1440px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(210px, 1fr) minmax(220px, auto);
          gap: clamp(42px, 18vw, 360px);
          align-items: start;
          padding: 0 clamp(26px, 4vw, 58px);
        }
        .page-footer-tagline {
          max-width: 250px;
          color: var(--footer-ink);
          font-size: clamp(14px, 0.98vw, 18px);
          font-style: normal;
          font-weight: 500;
          line-height: 108%;
          letter-spacing: 0;
        }
        .page-footer-right {
          display: grid;
          grid-template-columns: minmax(140px, auto) minmax(78px, auto);
          gap: clamp(46px, 10vw, 180px);
          justify-self: end;
          color: var(--footer-muted);
          font-size: clamp(10px, 0.68vw, 13px);
          font-style: normal;
          font-weight: 400;
          line-height: 145%;
          letter-spacing: 0;
        }
        .page-footer-contact,
        .page-footer-social {
          display: grid;
          gap: 5px;
        }
        .page-footer-right a {
          color: inherit;
          text-decoration: none;
        }
        .page-footer-right a:hover,
        .page-footer-right a:focus-visible {
          color: #f26e35;
        }
        .page-footer-giant {
          position: absolute;
          z-index: 3;
          left: -0.8vw;
          right: -0.8vw;
          bottom: clamp(-26px, -1.7vw, -12px);
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.66);
          font-size: clamp(74px, 11.8vw, 190px);
          font-weight: 700;
          line-height: 0.72;
          letter-spacing: 0;
          pointer-events: none;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .page-footer-copyright {
          position: absolute;
          z-index: 6;
          left: 50%;
          bottom: clamp(22px, 3.2vw, 46px);
          transform: translateX(-50%);
          width: min(90%, 420px);
          color: rgba(17, 26, 49, 0.56);
          text-align: center;
          font-size: clamp(8px, 0.58vw, 11px);
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          letter-spacing: 0;
        }
        @keyframes pageFooterFloat {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(-2deg); }
          50% { transform: translateX(-50%) translateY(-5px) rotate(2deg); }
        }
        @media (max-width: 900px) {
          .page-footer {
            min-height: 560px;
          }
          .page-footer-bg {
            height: 68%;
            object-position: center bottom;
          }
          .page-footer-logo {
            top: 76px;
            width: 82px;
            height: 82px;
          }
          .page-footer-inner {
            bottom: 126px;
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 26px;
            padding: 0 24px;
            text-align: center;
          }
          .page-footer-tagline {
            max-width: 280px;
            font-size: 18px;
          }
          .page-footer-right {
            justify-self: center;
            grid-template-columns: repeat(2, minmax(116px, auto));
            gap: 34px;
            text-align: left;
            font-size: 12px;
          }
          .page-footer-giant {
            bottom: -10px;
            font-size: clamp(54px, 14vw, 110px);
          }
        }
        @media (max-width: 560px) {
          .page-footer {
            min-height: 620px;
          }
          .page-footer::before {
            background-size: 25% 100%;
          }
          .page-footer-bg {
            height: 64%;
            width: 150%;
            max-width: none;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
          }
          .page-footer-logo {
            top: 86px;
            width: 76px;
            height: 76px;
          }
          .page-footer-inner {
            bottom: 132px;
            gap: 24px;
            padding: 0 20px;
          }
          .page-footer-tagline {
            font-size: 20px;
            line-height: 1;
          }
          .page-footer-right {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 16px;
            text-align: center;
            font-size: 12px;
          }
          .page-footer-contact,
          .page-footer-social {
            gap: 6px;
          }
          .page-footer-giant {
            left: -10vw;
            right: -10vw;
            bottom: 10px;
            font-size: clamp(44px, 17vw, 76px);
          }
          .page-footer-copyright {
            bottom: 42px;
            font-size: 9px;
          }
        }
      `}</style>

      <Image
        className="page-footer-bg"
        src="/images/image 9.png"
        width={1920}
        height={493}
        alt=""
        aria-hidden="true"
      />

      <Link className="page-footer-logo" href="/" aria-label="StratSkye home">
        <Image src="/images/footer-stratskye-logo.png" width={160} height={160} alt="" />
      </Link>

      <div className="page-footer-inner">
        <p className="page-footer-tagline">
          Stop duct-taping your
          <br />
          marketing together.
        </p>

        <div className="page-footer-right">
          <div className="page-footer-contact">
            <a href="tel:+923316547886">+92 331 6547886</a>
            <a href="mailto:admin@stratskye.com">admin@stratskye.com</a>
          </div>
          <div className="page-footer-social">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              instagram
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              linkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="page-footer-giant" aria-hidden="true">
        {"STRATSKYE".split("").map((letter, index) => (
          <span key={`${letter}-${index}`}>{letter}</span>
        ))}
      </div>

      <p className="page-footer-copyright">
        Copyright 2026 StratSkye. All rights reserved.
      </p>
    </footer>
  );
}
