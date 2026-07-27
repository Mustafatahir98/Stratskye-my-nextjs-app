"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function StorySection() {
  const storyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add(
        {
          isMobile: "(max-width: 640px)",
          isDesktop: "(min-width: 641px)",
        },
        (context) => {
          const isMobile = context.conditions?.isMobile;
          const leftLane = "19.3%";
          // Keep the mobile lane clear of the fixed header's 48px menu touch target.
          const rightLane = isMobile ? "78.5%" : "80.7%";
          const topLane = isMobile ? "12.6%" : "21vh";
          const bottomLane = isMobile ? "87.4%" : "78vh";
          const textShift = isMobile ? 38 : 70;
          const lowerEntryPath = isMobile ? "#story-entry-lower-motion-mobile" : "#story-entry-lower-motion";
          const upperEntryPath = isMobile ? "#story-entry-upper-motion-mobile" : "#story-entry-upper-motion";
          const upperEntryDuration = isMobile ? 2.35 : 1.9;
          const upperEntryFadeAt = isMobile ? 2.24 : 1.72;

          const storyTl = gsap.timeline({
            scrollTrigger: {
              trigger: storyRef.current,
              start: isMobile ? "top 80px" : "top top",
              end: "+=560%",
              scrub: 1.15,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            }
          });

      // --- INITIAL STATES ---
      gsap.set(".story-panel", { xPercent: 0, opacity: 1 });
      gsap.set(".story-text", { autoAlpha: 0, x: textShift });
      gsap.set(".story-text-1", { autoAlpha: 1, x: 0 });
      gsap.set(".story-icon", { autoAlpha: 0, y: 24, scale: 0.75, rotation: -10 });
      gsap.set(".story-dunk-ball", { x: "-360%", y: "78%", rotation: -95, scale: 0.98, transformOrigin: "50% 82%" });
      gsap.set(".dunk-impact", { autoAlpha: 0, scale: 0.45, rotation: -12 });
      gsap.set(".dunk-speed-line", { autoAlpha: 0, x: -18 });
      gsap.set(".dunk-net-line", { scaleY: 0.72, transformOrigin: "top center" });
      gsap.set(".story-ball-left", {
        top: 0,
        left: 0,
        force3D: true,
        filter: isMobile
          ? "drop-shadow(0 8px 12px rgba(242, 110, 53, 0.5))"
          : "drop-shadow(0 10px 15px rgba(255, 100, 0, 0.4))",
        motionPath: {
          path: lowerEntryPath,
          align: lowerEntryPath,
          alignOrigin: [0, 0],
          start: 0,
          end: 0,
        },
      });
      gsap.set(".story-ball-right", {
        top: 0,
        left: 0,
        force3D: true,
        motionPath: {
          path: upperEntryPath,
          align: upperEntryPath,
          alignOrigin: [0, 0],
          start: 0,
          end: 0,
        },
      });
      gsap.set(".story-horizontal-track", { opacity: 0 });
      gsap.set(".story-curve-right", { opacity: 0 });
      gsap.set(".story-curve-left", { opacity: 0 });

      // PHASE 0 & 1: Each ball follows the exact same continuous curve as its string.
      storyTl.addLabel("start")
             .to(".story-ball-left", {
               motionPath: {
                 path: lowerEntryPath,
                 align: lowerEntryPath,
                 alignOrigin: [0, 0],
                 start: 0,
                 end: 1,
               },
               duration: 2.7,
               ease: "none",
             }, "start")
             .to(".story-ball-right", {
               motionPath: {
                 path: upperEntryPath,
                 align: upperEntryPath,
                 alignOrigin: [0, 0],
                 start: 0,
                 end: 1,
               },
               duration: upperEntryDuration,
               ease: "none",
             }, "start")
             // Once the entry is complete, erase the curves and leave straight lanes behind.
             .to(".story-entry-track", { opacity: 0, duration: 0.45, ease: "power1.out" }, "start+=2.35")
             .to(".story-horizontal-track", { opacity: 1, duration: 0.45 }, "start+=2.35")
             .to(".story-text-1", { autoAlpha: 0, x: -textShift, duration: 0.8 }, "start+=2.35")
             .to(".story-text-2", { autoAlpha: 1, x: 0, duration: 1.1, ease: "power2.out" }, "<0.35")
             .to(".story-icon-2", { autoAlpha: 1, y: 0, scale: 1, rotation: 7, duration: 0.9, ease: "back.out(1.5)" }, "<0.15")
             .to(".story-ball-right", { autoAlpha: 0, duration: 0.18 }, `start+=${upperEntryFadeAt}`)
             .addLabel("entryComplete", "start+=2.7")
             .set(".story-ball-left", { clearProps: "x,y", left: rightLane, top: bottomLane }, "entryComplete")
             .set(".story-ball-right", { clearProps: "x,y", left: leftLane, top: topLane }, "entryComplete")
             .to(".story-ball-right", { autoAlpha: 1, left: isMobile ? "31%" : "32%", duration: 0.72, ease: "power2.out" }, "entryComplete");

      // PHASE 2: right to left / left to right
      storyTl.to([".story-text-2", ".story-icon-2"], { autoAlpha: 0, x: -textShift, duration: 1.1, delay: 0.15 })
             .to(".story-text-3", { autoAlpha: 1, x: 0, duration: 1.1, ease: "power2.out" }, "<0.35")
             .to(".story-icon-3", { autoAlpha: 1, y: 0, scale: 1, rotation: -5, duration: 0.9, ease: "back.out(1.5)" }, "<0.15")
             .to(".story-ball-left", { left: leftLane, top: bottomLane, duration: 1.7, ease: "sine.inOut" }, "<")
             .to(".story-ball-right", { autoAlpha: 1, left: rightLane, top: topLane, duration: 1.7, ease: "sine.inOut" }, "<");

      // PHASE 3: left to right / right to left
      storyTl.to([".story-text-3", ".story-icon-3"], { autoAlpha: 0, x: -textShift, duration: 1.1, delay: 0.15 })
             .to(".story-text-4", { autoAlpha: 1, x: 0, duration: 1.1, ease: "power2.out" }, "<0.35")
             .to(".story-icon-4", { autoAlpha: 1, y: 0, scale: 1, rotation: 8, duration: 0.9, ease: "back.out(1.5)" }, "<0.15")
             .to(".story-ball-left", { left: rightLane, top: bottomLane, duration: 1.7, ease: "sine.inOut" }, "<")
             .to(".story-ball-right", { left: leftLane, top: topLane, duration: 1.7, ease: "sine.inOut" }, "<");

      // PHASE 4: right to left / left to right
      storyTl.to([".story-text-4", ".story-icon-4"], { autoAlpha: 0, x: -textShift, duration: 1.1, delay: 0.15 })
             .to(".story-text-5", { autoAlpha: 1, x: 0, duration: 1.1, ease: "power2.out" }, "<0.35")
             .to(".story-icon-5", { autoAlpha: 1, y: 0, scale: 1, rotation: -2, duration: 0.9, ease: "back.out(1.5)" }, "<0.15")
             .to(".dunk-speed-line", { autoAlpha: 1, x: 0, duration: 0.18, stagger: 0.035, ease: "power2.out" }, "<0.05")
             .to(".story-dunk-ball", { x: "-265%", y: "26%", scaleX: 1, scaleY: 1, rotation: -64, duration: 0.24, ease: "power2.out" }, "<0.02")
             .to(".story-dunk-ball", { x: "-205%", y: "82%", scaleX: 1.12, scaleY: 0.88, rotation: -38, duration: 0.16, ease: "power2.in" }, ">")
             .to(".story-dunk-ball", { x: "-126%", y: "18%", scaleX: 0.94, scaleY: 1.08, rotation: -6, duration: 0.24, ease: "power2.out" }, ">")
             .to(".story-dunk-ball", { x: "-66%", y: "74%", scaleX: 1.1, scaleY: 0.9, rotation: 20, duration: 0.16, ease: "power2.in" }, ">")
             .to(".story-dunk-ball", { x: "-20%", y: "-24%", scaleX: 1, scaleY: 1, scale: 1.1, rotation: 44, duration: 0.3, ease: "power3.out" }, ">")
             .to(".story-dunk-ball", { x: "12%", y: "24%", scale: 1.2, rotation: 76, duration: 0.34, ease: "power4.in" }, ">")
             .to(".dunk-speed-line", { autoAlpha: 0, x: 22, duration: 0.24, stagger: 0.025, ease: "power2.in" }, "<0.04")
             .to(".story-dunk-rim", { y: 3, scaleX: 1.08, duration: 0.22, repeat: 1, yoyo: true, ease: "power2.out" }, "<0.24")
             .to(".dunk-net-line", { scaleY: 1.35, duration: 0.26, stagger: 0.025, repeat: 1, yoyo: true, ease: "power2.out" }, "<")
             .to(".dunk-impact", { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.22, ease: "power3.out" }, "<")
             .to(".dunk-impact", { autoAlpha: 0, scale: 1.25, duration: 0.38, ease: "power2.out" }, ">")
             .to(".story-ball-left", { left: leftLane, top: bottomLane, duration: 1.7, ease: "sine.inOut" }, "<")
             .to(".story-ball-right", { left: rightLane, top: topLane, duration: 1.7, ease: "sine.inOut" }, "<");

      // PHASE 5: strings become vertical; both balls drop as the "Then.." moment lands.
      storyTl.to([".story-text-5", ".story-icon-5"], { autoAlpha: 0, y: -30, duration: 1.1, delay: 0.15 })
             .to(".story-text-6", { autoAlpha: 1, x: 0, duration: 1.1 }, "<0.35")
             .to(".story-curve-right", { opacity: 0, duration: 0.55 }, "<")
             .to(".story-curve-left", { opacity: 0.4, duration: 0.55 }, "<")
             .to(".story-entry-track", { opacity: 0, duration: 0.85 }, "<")
             .to(".story-horizontal-track", { opacity: 0, duration: 0.85 }, "<")
             .to(".story-ball-left", { left: leftLane, top: isMobile ? "116%" : "116vh", duration: 1.5, ease: "power2.inOut" }, "<0.1")
             .to(".story-ball-right", { left: rightLane, top: isMobile ? "116%" : "116vh", duration: 1.5, ease: "power2.inOut" }, "<");
        }
      );

      requestAnimationFrame(() => ScrollTrigger.refresh());

    }, storyRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={storyRef} className="story-root relative w-full h-[100vh] bg-[#f7f3ee] z-20 overflow-hidden box-shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
      <style>{`
        .story-root {
          --story-left-lane: 19.3%;
          --story-right-lane: 80.7%;
          --story-top-lane: 21vh;
          --story-bottom-lane: 78vh;
          --story-copy-center: 49.5vh;
          font-family: "Google Sans Flex";
        }
        /* Vertical Grids */
        .story-panel { position: absolute; inset: 0; opacity: 1; transform: translateX(0); will-change: transform, opacity; }
        .story-grid .grid-line-v { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(20, 32, 67, 0.09); }
        .story-entry-track { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 6; pointer-events: none; overflow: visible; }
        .story-entry-track path { fill: none; stroke: #cbd1da; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; shape-rendering: geometricPrecision; opacity: 0.62; }
        .story-motion-path { stroke: transparent !important; }
        .story-entry-mobile { display: none; }
        .string-line-v { position: absolute; top: 0; bottom: 0; width: 1px; transform: translateX(-50%); z-index: 6; opacity: 0.16; filter: invert(1); pointer-events: none; }
        
        /* Dynamic Horizontal Strings */
        .story-horizontal-track { position: absolute; left: 0; right: 0; height: 1px; background: rgba(20, 32, 67, 0.09); z-index: 6; opacity: 0; }
        .story-string-h { position: absolute; left: 0; right: 0; height: 1px; opacity: 0; filter: invert(1); z-index: 6; pointer-events: none; }

        /* Perfected Curves matching intersections */
        .curve-img { position: absolute; width: 180px; height: 180px; object-fit: contain; z-index: 7; opacity: 0; pointer-events: none; filter: invert(1); }
        
        /* Typography */
        .story-text-container { position: absolute; top: var(--story-copy-center); left: 50%; transform: translate(-50%, -50%); width: 100%; text-align: center; z-index: 30; }
        .story-text { position: absolute; width: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; visibility: hidden; will-change: opacity, transform; }
        .story-text-1 { opacity: 1; visibility: visible; }
        
        .story-heading { font-family: "Google Sans Flex"; font-size: clamp(34px, 4.2vw, 58px); font-weight: 500; color: #091532; letter-spacing: -2.2px; line-height: 1.05; }
        .text-orange { color: #f26e35; }
        .text-italic { font-style: italic; }
        .text-grey { color: #091532; }
        .story-icon { position: absolute; z-index: 32; pointer-events: none; width: clamp(70px, 9vw, 118px); height: auto; opacity: 0; visibility: hidden; transform: translateY(24px) scale(0.75) rotate(-10deg); filter: drop-shadow(0 18px 26px rgba(242, 110, 53, 0.18)); will-change: transform, opacity; }
        .story-icon-2 { left: 62%; top: 26%; }
        .story-icon-3 { left: 66%; top: 24%; }
        .story-icon-4 { left: 61%; top: 22%; width: clamp(80px, 10vw, 135px); }
        .story-icon-5 { left: 65%; top: 48%; }
        .story-icon-mobile { display: none; }
        .story-dunk { width: clamp(155px, 17vw, 238px); aspect-ratio: 1.04; filter: none; }
        .story-dunk-backboard { position: absolute; top: 8%; right: 6%; width: 52%; height: 36%; border: 3px solid rgba(9, 21, 50, 0.28); border-radius: 7px; background: rgba(255, 255, 255, 0.36); box-shadow: inset 0 0 0 1px rgba(242, 110, 53, 0.13), 0 18px 28px rgba(9, 21, 50, 0.08); }
        .story-dunk-square { position: absolute; left: 31%; bottom: 15%; width: 38%; height: 42%; border: 2px solid rgba(242, 110, 53, 0.42); border-bottom: 0; border-radius: 4px 4px 0 0; }
        .story-dunk-rim { position: absolute; right: 18%; top: 42%; width: 42%; height: 11%; border: 5px solid #f26e35; border-top-color: #ff8c48; border-radius: 999px; box-shadow: 0 5px 0 rgba(151, 54, 18, 0.24), 0 14px 22px rgba(242, 110, 53, 0.22); transform-origin: center; z-index: 5; }
        .story-dunk-net { position: absolute; right: 23%; top: 50%; width: 32%; height: 37%; z-index: 3; display: flex; justify-content: space-between; padding: 0 6%; transform: perspective(120px) rotateX(10deg); }
        .dunk-net-line { display: block; width: 2px; height: 100%; background: linear-gradient(180deg, rgba(9, 21, 50, 0.38), rgba(9, 21, 50, 0.08)); transform-origin: top center; }
        .story-dunk-ball { position: absolute; left: 28%; top: 20%; width: 38%; height: auto; z-index: 7; transform: translate(-360%, 78%) rotate(-95deg); transform-origin: 50% 82%; filter: drop-shadow(0 18px 18px rgba(242, 110, 53, 0.32)); will-change: transform; }
        .dunk-impact { position: absolute; left: 6%; top: 0; width: 63%; height: 63%; z-index: 1; opacity: 0; visibility: hidden; transform: scale(0.45) rotate(-12deg); background: radial-gradient(circle, rgba(255, 255, 255, 0.98) 0 12%, transparent 13%), conic-gradient(from 10deg, transparent 0 8%, rgba(242, 110, 53, 0.76) 8% 11%, transparent 11% 20%, rgba(9, 21, 50, 0.28) 20% 22%, transparent 22% 34%, rgba(242, 110, 53, 0.58) 34% 37%, transparent 37% 48%, rgba(9, 21, 50, 0.22) 48% 50%, transparent 50% 64%, rgba(242, 110, 53, 0.62) 64% 67%, transparent 67% 100%); border-radius: 50%; mix-blend-mode: multiply; }
        .dunk-speed-line { position: absolute; left: 12%; top: 12%; width: 44%; height: 4px; border-radius: 999px; opacity: 0; visibility: hidden; background: linear-gradient(90deg, transparent, rgba(242, 110, 53, 0.55)); transform: translateX(-18px) rotate(-29deg); z-index: 2; }
        .dunk-speed-line:nth-of-type(2) { top: 26%; left: 0; width: 36%; opacity: 0.7; }
        .dunk-speed-line:nth-of-type(3) { top: 41%; left: 9%; width: 28%; opacity: 0.55; }

        /* Label Box */
        .problem-label { position: relative; color: #091532; font-family: "Google Sans Flex"; font-size: 13px; font-weight: 800; letter-spacing: 0.24em; text-transform: uppercase; display: inline-block; }
        .problem-label .bracket { position: absolute; width: 6px; height: 6px; border-color: #091532; border-style: solid; border-width: 0; opacity: 0.45; }
        .bracket.tl { top: -10px; left: -10px; border-top-width: 2px; border-left-width: 2px; }
        .bracket.tr { top: -10px; right: -10px; border-top-width: 2px; border-right-width: 2px; }
        .bracket.bl { bottom: -10px; left: -10px; border-bottom-width: 2px; border-left-width: 2px; }
        .bracket.br { bottom: -10px; right: -10px; border-bottom-width: 2px; border-right-width: 2px; }

        /* Pinned Balls */
        .story-ball-left, .story-ball-right { position: absolute; top: -8vh; width: 0; height: 0; z-index: 35; will-change: top, left, transform, filter; transition: filter 0.5s ease; filter: drop-shadow(0 10px 15px rgba(255, 100, 0, 0.4)); }
        .story-ball-image { position: absolute; top: 0; left: 0; width: 30px; height: 30px; max-width: none; transform: translate3d(-50%, -50%, 0); backface-visibility: hidden; }
        .story-ball-left { left: var(--story-left-lane); }
        .story-ball-right { left: var(--story-right-lane); }
        @media (max-width: 1024px) {
          .story-heading {
            max-width: min(78vw, 680px);
            margin: 0 auto;
            font-size: clamp(30px, 5.6vw, 48px);
            line-height: 1.02;
            letter-spacing: 0;
            text-wrap: balance;
          }
          .story-icon-desktop { display: none !important; }
          .story-text .story-icon-mobile {
            display: block;
            top: auto;
            bottom: calc(100% + clamp(12px, 2vw, 22px));
            left: calc(50% + clamp(64px, 12vw, 110px));
            translate: none;
          }
          .story-icon-5 {
            left: 50%;
            top: calc(var(--story-copy-center) + clamp(96px, 13svh, 132px));
            translate: -50% 0;
          }
        }

        @media (max-width: 640px) {
          .story-root {
            --story-left-lane: 19.3%;
            --story-right-lane: 78.5%;
            --story-top-lane: 12.6%;
            --story-bottom-lane: 87.4%;
            --story-copy-center: 44.55%;
            height: calc(100svh - 80px);
            min-height: calc(100svh - 80px);
            max-height: calc(100svh - 80px);
            background: #f7f3ee;
            box-shadow: 0 -80px 0 #f7f3ee;
          }
          .story-root::before,
          .story-root::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            z-index: 5;
            height: 18vh;
            pointer-events: none;
          }
          .story-root::before {
            top: 0;
            background: linear-gradient(180deg, #f7f3ee 0%, rgba(247, 243, 238, 0) 100%);
          }
          .story-root::after {
            bottom: 0;
            height: 9vh;
            background: linear-gradient(0deg, rgba(247, 243, 238, 0.22) 0%, rgba(247, 243, 238, 0) 100%);
          }
          .story-grid .grid-line-v {
            background: rgba(20, 32, 67, 0.075);
          }
          .story-horizontal-track {
            background: rgba(20, 32, 67, 0.075);
          }
          .string-line-v,
          .story-string-h {
            opacity: 0.1;
          }
          .curve-img {
            width: 118px;
            height: 118px;
            opacity: 0;
          }
          .story-text-container { width: calc(100vw - 36px); }
          .story-text {
            width: 100%;
          }
          .story-heading {
            max-width: 100%;
            font-size: clamp(35px, 11.3vw, 48px);
            line-height: 0.98;
          }
          .story-text-5 .story-heading {
            font-size: clamp(31px, 9.6vw, 42px);
          }
          .problem-label {
            font-size: 11px;
            letter-spacing: 0.18em;
          }
          .story-icon {
            width: clamp(52px, 16vw, 70px);
            filter: drop-shadow(0 12px 20px rgba(242, 110, 53, 0.2));
          }
          .story-text .story-icon-mobile {
            bottom: calc(100% + 14px);
            left: calc(50% + clamp(76px, 24vw, 104px));
          }
          .story-icon-4 { width: clamp(58px, 18vw, 78px); }
          .story-icon-5 {
            top: calc(var(--story-copy-center) + clamp(102px, 14svh, 128px));
          }
          .story-dunk {
            width: min(33vw, 124px);
          }
          .story-ball-image {
            width: 28px;
            height: 28px;
            filter: saturate(1.08) contrast(1.05);
          }
          .story-ball-right .story-ball-image {
            filter: saturate(1.35) contrast(1.14);
          }
          .story-ball-left,
          .story-ball-right {
            filter: drop-shadow(0 8px 12px rgba(242, 110, 53, 0.5));
          }
          .story-entry-desktop { display: none; }
          .story-entry-mobile { display: block; }
        }

        @media (max-width: 380px) {
          .story-heading {
            font-size: 34px;
          }
          .story-text-5 .story-heading {
            font-size: 30px;
          }
          .story-dunk {
            width: 112px;
          }
        }
      `}</style>

      <div className="story-panel">
        {/* Grid (Darker lines for cream background) */}
        <div className="grid-overlay story-grid absolute inset-0">
          <div className="grid-line-v" style={{ left: "var(--story-left-lane)" }} />
          <div className="grid-line-v" style={{ left: "50%" }} />
          <div className="grid-line-v" style={{ left: "var(--story-right-lane)" }} />
        </div>

        {/* The visible strings and the hidden ball paths share identical geometry. */}
        <svg className="story-entry-track" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
          <path className="story-entry-desktop" d="M 193 0 L 193 430 C 193 628 282 788 407 788 L 1100 788" />
          <path className="story-entry-desktop" d="M 807 0 C 807 118 854 213 930 213 L 1100 213" />
          <path id="story-entry-lower-motion" className="story-motion-path" d="M 193 -60 L 193 430 C 193 628 282 788 407 788 L 807 788" />
          <path id="story-entry-upper-motion" className="story-motion-path" d="M 807 -60 L 807 0 C 807 118 854 213 930 213 L 1100 213" />
          <path className="story-entry-mobile" d="M 193 0 L 193 510 C 193 730 320 874 500 874 L 1100 874" />
          <path className="story-entry-mobile" d="M 785 0 L 785 18 C 785 82 830 126 900 126 L 1100 126" />
          <path id="story-entry-lower-motion-mobile" className="story-motion-path" d="M 193 -60 L 193 510 C 193 730 320 874 500 874 L 785 874" />
          <path id="story-entry-upper-motion-mobile" className="story-motion-path" d="M 785 -60 L 785 18 C 785 82 830 126 900 126 L 1000 126" />
        </svg>

        {/* Strings Vertical */}
        <img src="/images/line.png" alt="" className="string-line-v" style={{ left: "var(--story-left-lane)" }} />
        <img src="/images/line.png" alt="" className="string-line-v" style={{ left: "var(--story-right-lane)" }} />

        {/* Strings Horizontal (Faded in GSAP) */}
        <div className="story-horizontal-track" style={{ top: "var(--story-top-lane)" }} />
        <div className="story-horizontal-track" style={{ top: "var(--story-bottom-lane)" }} />
        <img src="/images/line.png" alt="" className="story-string-h story-horizontal-track" style={{ top: "var(--story-top-lane)", transform: "rotate(90deg)" }} />
        <img src="/images/line.png" alt="" className="story-string-h story-horizontal-track" style={{ top: "var(--story-bottom-lane)", transform: "rotate(90deg)" }} />

        {/* ENTRY Curves */}
        <img src="/images/curved-string-large.png" alt="" className="curve-img story-curve-right" style={{ top: "var(--story-top-lane)", left: "var(--story-left-lane)", transform: "translate(0%, 0%)" }} />
        <img src="/images/curved-string-small.png" alt="" className="curve-img story-curve-right" style={{ top: "var(--story-bottom-lane)", right: "var(--story-left-lane)", transform: "translate(0%, -100%) rotate(180deg)" }} />
        
        {/* EXIT Curves */}
        <img src="/images/curved-string-large.png" alt="" className="curve-img story-curve-left" style={{ top: "var(--story-top-lane)", right: "var(--story-left-lane)", transform: "translate(0%, -100%) rotate(-90deg)" }} />
        <img src="/images/curved-string-small.png" alt="" className="curve-img story-curve-left" style={{ top: "var(--story-bottom-lane)", left: "var(--story-left-lane)", transform: "translate(-100%, 0%) rotate(90deg)" }} />

        {/* Story Sequence Balls */}
        <span className="story-ball-left" aria-hidden="true">
          <img src="/images/smallball.png" alt="" className="story-ball-image" />
        </span>
        <span className="story-ball-right" aria-hidden="true">
          <img src="/images/smallball.png" alt="" className="story-ball-image" />
        </span>

        <img src="/images/layer-2.png" alt="" className="story-icon story-icon-2 story-icon-desktop" />
        <img src="/images/layer-3.png" alt="" className="story-icon story-icon-3 story-icon-desktop" />
        <img src="/images/layer-4.png" alt="" className="story-icon story-icon-4 story-icon-desktop" />
        <div className="story-icon story-icon-5 story-dunk" aria-hidden="true">
          <span className="dunk-impact" />
          <span className="dunk-speed-line" />
          <span className="dunk-speed-line" />
          <span className="dunk-speed-line" />
          <span className="story-dunk-backboard"><span className="story-dunk-square" /></span>
          <span className="story-dunk-rim" />
          <span className="story-dunk-net">
            <span className="dunk-net-line" />
            <span className="dunk-net-line" />
            <span className="dunk-net-line" />
            <span className="dunk-net-line" />
            <span className="dunk-net-line" />
          </span>
          <img src="/images/layer-5.png" alt="" className="story-dunk-ball" />
        </div>

        {/* Text Sequences */}
        <div className="story-text-container">
        
        <div className="story-text story-text-1">
          <div className="problem-label">
            <span className="bracket tl" /><span className="bracket tr" /><span className="bracket bl" /><span className="bracket br" />
            <span>The Problem</span>
          </div>
        </div>

        <div className="story-text story-text-2">
          <img src="/images/layer-2.png" alt="" className="story-icon story-icon-2 story-icon-mobile" />
          <h2 className="story-heading">You just finished a <span className="text-orange">demo.</span></h2>
        </div>

        <div className="story-text story-text-3">
          <img src="/images/layer-3.png" alt="" className="story-icon story-icon-3 story-icon-mobile" />
          <h2 className="story-heading">The Technical Lead was <span className="text-orange text-italic">nodding.</span></h2>
        </div>

        <div className="story-text story-text-4">
          <img src="/images/layer-4.png" alt="" className="story-icon story-icon-4 story-icon-mobile" />
          <h2 className="story-heading">They called it a <span className="text-orange text-italic">game-changer</span></h2>
        </div>

        <div className="story-text story-text-5">
          <h2 className="story-heading">You hang up feeling like<br/>the deal is a <span className="text-orange text-italic">slam dunk.</span></h2>
        </div>

        <div className="story-text story-text-6">
          <h2 className="story-heading text-grey">Then..</h2>
        </div>

        </div>
      </div>
    </section>
  );
}
