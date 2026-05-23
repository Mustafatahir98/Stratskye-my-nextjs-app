"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FourthSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.set([leftImgRef.current, rightImgRef.current], {
        xPercent: 0,
        force3D: true,
      });
      gsap.set(gradientRef.current, { scale: 1, transformOrigin: "50% 50%" });

      tl.to(leftImgRef.current, { xPercent: -100, ease: "power3.inOut" }, 0);
      tl.to(rightImgRef.current, { xPercent: 100, ease: "power3.inOut" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fourth-section post-shutter-section relative w-full h-[100vh] z-20 overflow-hidden"
    >
      <style>{`
        .fourth-section {
          background: var(--post-shutter-bg);
          isolation: isolate;
        }
        .fourth-gradient {
          position: absolute;
          inset: 0;
          background: var(--post-shutter-bg);
          will-change: transform;
        }
        .fourth-shutter {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          backface-visibility: hidden;
          mix-blend-mode: screen;
          will-change: transform;
        }
        .fourth-shutter-left {
          background-image: url("/images/left-shutter.png");
          transform-origin: left center;
        }
        .fourth-shutter-right {
          background-image: url("/images/right-shutter.png");
          transform-origin: right center;
        }
      `}</style>

      <div ref={gradientRef} className="fourth-gradient" aria-hidden="true" />
      <div
        ref={leftImgRef}
        className="fourth-shutter fourth-shutter-left"
        aria-hidden="true"
      />
      <div
        ref={rightImgRef}
        className="fourth-shutter fourth-shutter-right"
        aria-hidden="true"
      />
    </section>
  );
}
