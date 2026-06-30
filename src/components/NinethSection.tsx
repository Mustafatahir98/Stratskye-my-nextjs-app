"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const bgCardImage =
  "/images/freepik_ultrarealistic-cinematic-golf-lifestyle-editorial-image-set-in-a-tropical-caribbean-golf-environment-bright-natural-daylight-with-humid-haze-wideangle-composition-candid-moment-of-a-golfe_0001 1.png";

const statCards = [
  {
    src: "/images/Frame 86.png",
    alt: "Value created: $140M",
    className: "stat-one",
  },
  {
    src: "/images/Frame 85.png",
    alt: "Return client rate: 94%",
    className: "stat-two",
  },
  {
    src: "/images/Frame 26.png",
    alt: "Projects delivered: +124",
    className: "stat-three",
  },
];

const testimonials = [
  {
    quote:
      "Before StratSkye, our marketing was a mess of different freelancers. They came in, fixed our branding, rebuilt our site, and started delivering leads that actually close. They are our outsourced CMO.",
    author: "Sarah J.",
    role: "CEO of CloudSecure",
    initials: "S",
  },
  {
    quote:
      "The team tightened our funnel, cleaned up the story, and gave sales a pipeline they could trust. Within weeks, the conversations felt warmer and far more qualified.",
    author: "Marcus L.",
    role: "Founder of LedgerPeak",
    initials: "M",
  },
  {
    quote:
      "StratSkye brought strategy and execution into one rhythm. We stopped guessing, launched cleaner campaigns, and finally had reporting that made decisions obvious.",
    author: "Anika R.",
    role: "COO of Northline Labs",
    initials: "A",
  },
];

export default function NinethSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const introRefs = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | HTMLImageElement | null)[]>([]);

  // Automatic testimonial loop
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 4800);

    return () => window.clearInterval(interval);
  }, []);

  // GSAP Responsive Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const cleanupFns: Array<() => void> = [];
    const ctx = gsap.context(() => {
      const introItems = introRefs.current.filter(Boolean);
      const statCardItems = cardRefs.current.slice(0, 3).filter(Boolean);
      const lowerCardItems = cardRefs.current.slice(3).filter(Boolean);
      const allCards = [...statCardItems, ...lowerCardItems];
      
      const rowPositions = [
        { left: 28, top: 285 },
        { left: 290, top: 285 },
        { left: 552, top: 285 },
      ];

      // --- MOBILE ANIMATIONS (Up to 767px) ---
      mm.add("(max-width: 767px)", () => {
        gsap.set(allCards, { clearProps: "left,top,transform" });

        gsap.fromTo(
          introItems,
          { autoAlpha: 0, y: 24, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        allCards.forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 45, scale: 0.95, filter: "blur(8px)" },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      // --- DESKTOP ANIMATIONS (768px and up) ---
      mm.add("(min-width: 768px)", () => {
        gsap.set(introItems, {
          autoAlpha: 0,
          y: 34,
          scale: 0.98,
          filter: "blur(8px)",
        });

        gsap.set(statCardItems, {
          autoAlpha: 0,
          y: 58,
          scale: 0.94,
          filter: "blur(10px)",
        });
        
        gsap.set(lowerCardItems, {
          autoAlpha: 0,
          y: 42,
          scale: 0.96,
          filter: "blur(10px)",
        });

        const revealTimeline = gsap.timeline({ paused: true });

        revealTimeline.to(introItems, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
        });

        statCardItems.forEach((card, index) => {
          revealTimeline.to(card, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.56,
            ease: "power3.out",
          });

          if (index < statCardItems.length - 1) {
            revealTimeline.to({}, { duration: 0.18 });
          }
        });

        revealTimeline
          .to({}, { duration: 0.16 })
          .to(
            statCardItems,
            {
              left: (index) => rowPositions[index].left,
              top: (index) => rowPositions[index].top,
              duration: 0.72,
              ease: "power3.inOut",
              stagger: 0.025,
            },
            "statsRow"
          )
          .to(
            lowerCardItems,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.62,
              ease: "power3.out",
              stagger: 0.08,
            },
            "statsRow+=0.08"
          );

        let hasPresented = false;
        let hasCompleted = false;
        let isScrollLocked = false;
        let presentationTrigger: ReturnType<typeof ScrollTrigger.create> | null = null;
        const scrollLockOptions = { passive: false, capture: true } as AddEventListenerOptions;
        const lockedKeys = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "]);
        const getLenis = () => window.__stratskyeLenis;

        const jumpToScroll = (top: number) => {
          const lenis = getLenis();

          if (lenis) {
            lenis.scrollTo(top, { immediate: true, force: true });
          } else {
            window.scrollTo({ top, behavior: "auto" });
          }

          ScrollTrigger.update();
        };

        const blockScroll = (event: Event) => {
          if (!isScrollLocked) return;
          event.preventDefault();
          event.stopImmediatePropagation();
        };

        const blockScrollKeys = (event: KeyboardEvent) => {
          if (!isScrollLocked || !lockedKeys.has(event.key)) return;
          event.preventDefault();
          event.stopImmediatePropagation();
        };

        const unlockScroll = () => {
          if (!isScrollLocked) return;
          isScrollLocked = false;
          window.removeEventListener("wheel", blockScroll, scrollLockOptions);
          window.removeEventListener("touchmove", blockScroll, scrollLockOptions);
          window.removeEventListener("keydown", blockScrollKeys, true);
          getLenis()?.start();
        };

        const lockScroll = () => {
          if (isScrollLocked) return;
          isScrollLocked = true;
          getLenis()?.stop();
          window.addEventListener("wheel", blockScroll, scrollLockOptions);
          window.addEventListener("touchmove", blockScroll, scrollLockOptions);
          window.addEventListener("keydown", blockScrollKeys, true);

          if (presentationTrigger) {
            jumpToScroll(presentationTrigger.start);
          }
        };

        const playPresentation = () => {
          if (hasPresented) {
            if (hasCompleted) {
              revealTimeline.progress(1);
            }
            return;
          }

          hasPresented = true;
          lockScroll();
          revealTimeline.eventCallback("onComplete", () => {
            hasCompleted = true;
            revealTimeline.progress(1);
            if (presentationTrigger) {
              jumpToScroll(Math.max(presentationTrigger.start, presentationTrigger.end - 2));
            }
            window.requestAnimationFrame(unlockScroll);
          });
          revealTimeline.timeScale(0.82).play(0);
        };

        cleanupFns.push(unlockScroll);

        presentationTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1050",
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onEnter: playPresentation,
          onUpdate: () => {
            if (isScrollLocked && !hasCompleted && presentationTrigger) {
              jumpToScroll(presentationTrigger.start);
            }
          },
          onLeave: () => {
            if (hasCompleted) {
              revealTimeline.progress(1);
              unlockScroll();
            } else {
              jumpToScroll(presentationTrigger?.start ?? window.scrollY);
            }
          },
          onEnterBack: () => {
            hasPresented = true;
            hasCompleted = true;
            revealTimeline.progress(1);
          },
          onLeaveBack: unlockScroll,
        });

      });

    }, sectionRef);

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      ctx.revert();
      mm.revert();
    };
  }, []);

  const testimonial = testimonials[activeTestimonial];

  return (
    <section ref={sectionRef} className="stats-section post-shutter-section relative z-20 w-full overflow-hidden px-6">
      <div className="stats-bg-grid" aria-hidden="true" />

      {/* Main Canvas Container */}
      <div className="stats-canvas relative mx-auto w-full text-white">
        
        {/* Intro Header Group */}
        <div className="text-center mb-12 md:mb-0">
          <div
            ref={(el) => {
              introRefs.current[0] = el;
            }}
            className="stats-eyebrow"
          >
            THE STATS
          </div>

          <h2
            ref={(el) => {
              introRefs.current[1] = el;
            }}
            className="stats-heading"
          >
            We don&apos;t chase attention <span>we</span>{" "}
            <br className="hidden md:inline" />
            <span>build results</span> that speak for{" "}
            <br className="hidden md:inline" />
            themselves.
          </h2>
        </div>

        {/* Dynamic Cards Container */}
        <div className="stats-cards-wrapper">
          {statCards.map((card, index) => (
            <img
              key={card.src}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              src={card.src}
              alt={card.alt}
              className={`stats-image-card ${card.className}`}
            />
          ))}

          <div
            ref={(el) => {
              cardRefs.current[3] = el;
            }}
            className="cloud-secure-card"
          >
            <img src={bgCardImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="cloud-sheen" aria-hidden="true" />
            <p>CLOUD SECURE</p>
          </div>

          <div
            ref={(el) => {
              cardRefs.current[4] = el;
            }}
            className="success-card"
          >
            <div className="success-label">SUCCESS STORIES</div>
            <div key={activeTestimonial} className="success-slide">
              <p>{testimonial.quote}</p>
              <div className="success-author">
                <span className="author-photo">{testimonial.initials}</span>
                <span>
                  <strong>{testimonial.author}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </div>
            </div>
            
            {/* Dots navigation wrapper */}
            <div className="dots-container">
              {testimonials.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  className={`testimonial-dot ${activeTestimonial === index ? "is-active" : ""}`}
                  aria-label={`Show testimonial from ${item.author}`}
                  aria-pressed={activeTestimonial === index}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        /* Core/Base styles */
        .stats-section {
          background: var(--post-shutter-bg);
          padding-top: 4rem;
          padding-bottom: 1.5rem;
        }
        .stats-bg-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(90deg, rgba(186, 198, 224, 0.07) 1px, transparent 1px);
          background-size: 19.8% 100%;
          pointer-events: none;
        }
        .stats-eyebrow::before,
        .stats-eyebrow::after,
        .success-label::before,
        .success-label::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 4px;
          height: 4px;
          border-color: currentColor;
          border-style: solid;
          opacity: 0.72;
        }

        /* --- MOBILE LAYOUTS (Default / Mobile-First) --- */
        .stats-canvas {
          max-width: 480px;
          width: 100%;
        }
        .stats-eyebrow {
          display: inline-block;
          position: relative;
          color: #b9c4d9;
          font-family: "Google Sans Flex";
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          margin-bottom: 14px;
        }
        .stats-eyebrow::before { left: -14px; border-width: 1px 0 0 1px; }
        .stats-eyebrow::after { right: -14px; border-width: 0 1px 1px 0; }
        
        .stats-heading {
          color: #f4f7ff;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: 0;
          width: 100%;
          padding-inline: 8px; /* Safe gutters inside mobile viewports */
          box-sizing: border-box;
        }
        .stats-heading span { color: #ff6f2f; }

        .stats-cards-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 40px;
          align-items: center;
          width: 100%;
        }

        .stats-image-card {
          width: 100%;
          max-width: 340px;
          height: auto;
          border-radius: 7px;
          filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.18));
        }

        .cloud-secure-card,
        .success-card {
          width: 100%;
          max-width: 340px;
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
        }

        .cloud-secure-card {
          position: relative;
          display: grid;
          place-items: center;
          background: #c6cede;
          padding: 40px 20px;
        }
        .cloud-secure-card img {
          opacity: 1;
          filter: contrast(1.06) brightness(1.02);
        }
        .cloud-secure-card p {
          position: relative;
          z-index: 2;
          color: rgba(255, 255, 255, 0.95);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.36em;
          text-shadow: 0 0 18px rgba(255, 255, 255, 0.85);
        }
        .cloud-sheen {
          position: absolute;
          inset: -20%;
          z-index: 1;
          background: linear-gradient(105deg, transparent 34%, rgba(255, 255, 255, 0.34) 48%, transparent 62%);
          transform: translateX(-80%);
          animation: cardScan 5.8s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        .success-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 20px 18px;
          background: #172852;
          box-shadow: inset 0 1px rgba(255, 255, 255, 0.04);
        }
        .success-label {
          position: relative;
          width: max-content;
          margin-left: 2px;
          color: #ff6f2f;
          font-family: "Google Sans Flex";
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.18em;
          margin-bottom: 12px;
        }
        .success-label::before { left: -10px; border-width: 1px 0 0 1px; }
        .success-label::after { right: -10px; border-width: 0 1px 1px 0; }

        .success-slide {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          animation: testimonialIn 0.48s ease both;
        }
        .success-card p {
          color: #f3f6ff;
          font-size: 12px;
          line-height: 1.45;
        }
        .success-author {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
          color: white;
        }
        .dots-container {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 14px;
        }
        .testimonial-dot {
          width: 20px;
          height: 4px;
          border: 0;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.22);
          cursor: pointer;
          transition: width 0.25s ease, background 0.25s ease;
        }
        .testimonial-dot.is-active {
          width: 32px;
          background: #ff6f2f;
        }
        .author-photo {
          display: grid;
          width: 28px;
          height: 28px;
          place-items: center;
          border-radius: 999px;
          border: 1.5px solid #ff8a45;
          background: linear-gradient(135deg, #f3c39c, #7c4a34);
          font-size: 12px;
          font-weight: 800;
        }
        .success-author strong {
          display: block;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.2;
        }
        .success-author small {
          display: block;
          color: rgba(255, 255, 255, 0.52);
          font-size: 9px;
          line-height: 1.2;
        }

        /* --- DESKTOP LAYOUT OVERRIDES (768px and up) --- */
        @media (min-width: 768px) {
          .stats-section {
            padding-top: 0;
            padding-bottom: 0;
          }
          .stats-canvas {
            --stats-canvas-x: 0px;
            height: 870px;
            max-width: 820px;
          }
          .stats-eyebrow {
            position: absolute;
            top: 113px;
            left: 50%;
            transform: translateX(-50%) scale(var(--stats-title-counter-scale, 1));
            transform-origin: top center;
            font-size: 8px;
            margin-bottom: 0;
          }
          .stats-eyebrow::before { left: -10px; }
          .stats-eyebrow::after { right: -10px; }

          .stats-heading {
            position: absolute;
            top: 155px;
            left: 50%;
            width: 390px;
            transform: translateX(-50%) scale(var(--stats-title-counter-scale, 1));
            transform-origin: top center;
            font-size: 24px;
            line-height: 1.08;
            padding-inline: 0;
          }

          .stats-cards-wrapper {
            display: block;
            margin-top: 0;
          }

          .stats-image-card {
            position: absolute;
            width: 240px;
            max-width: none;
            animation: statFloat 5.5s ease-in-out infinite;
          }
          .stat-one { left: 28px; top: 285px; animation-delay: 0s; }
          .stat-two { left: 290px; top: 365px; animation-delay: -1.6s; }
          .stat-three { left: 552px; top: 462px; animation-delay: -3.1s; }

          .cloud-secure-card,
          .success-card {
            position: absolute;
            top: 520px;
            height: 260px;
            max-width: none;
          }

          .cloud-secure-card { left: 28px; width: 388px; padding: 50px 24px; }
          .cloud-secure-card p { font-size: 13px; }

          .success-card { left: 428px; width: 384px; padding: 24px 20px 18px; }
          .success-label { font-size: 8px; margin-bottom: 0; }
          .success-slide { min-height: 188px; justify-content: flex-start; padding-bottom: 28px; }
          .success-card p { margin-top: 20px; font-size: 12px; line-height: 1.38; }
          .success-author { margin-top: 16px; gap: 9px; }
          .dots-container { position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); margin-top: 0; gap: 8px; }
          .testimonial-dot { width: 22px; height: 4px; }
          .testimonial-dot.is-active { width: 36px; }
          .author-photo { width: 28px; height: 28px; font-size: 12px; }
          .success-author strong { font-size: 10px; }
          .success-author small { font-size: 8px; }
        }

        @media (min-width: 900px) {
          .stats-section {
            min-height: 100vh;
            padding-top: 0;
            padding-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .stats-canvas {
            --stats-canvas-x: -12px;
            --stats-title-counter-scale: 0.98;
            transform: translate3d(var(--stats-canvas-x), -72px, 0) scale(1.02);
            transform-origin: top center;
            margin-bottom: 0;
          }
        }

        @media (min-width: 900px) and (min-height: 761px) {
          .stats-canvas {
            margin-top: 0;
          }
        }

        @media (min-width: 900px) and (max-height: 760px) {
          .stats-canvas {
            margin-top: 0;
          }
        }

        @media (min-width: 900px) and (max-height: 760px) {
          .stats-canvas {
            --stats-title-counter-scale: 1.087;
            transform: translate3d(var(--stats-canvas-x), -56px, 0) scale(0.92);
          }
        }

        @media (min-width: 1024px) and (min-height: 760px) {
          .stats-canvas {
            --stats-canvas-x: -12px;
            --stats-title-counter-scale: 0.962;
            transform: translate3d(var(--stats-canvas-x), -74px, 0) scale(1.04);
          }
        }

        @media (min-width: 1180px) and (min-height: 820px) {
          .stats-canvas {
            --stats-canvas-x: -14px;
            --stats-title-counter-scale: 0.926;
            transform: translate3d(var(--stats-canvas-x), -84px, 0) scale(1.08);
          }
        }

        @media (min-width: 1360px) and (min-height: 900px) {
          .stats-canvas {
            --stats-canvas-x: -16px;
            --stats-title-counter-scale: 0.847;
            transform: translate3d(var(--stats-canvas-x), -98px, 0) scale(1.18);
          }
        }

        @media (min-width: 1600px) and (min-height: 980px) {
          .stats-canvas {
            --stats-canvas-x: -18px;
            --stats-title-counter-scale: 0.758;
            transform: translate3d(var(--stats-canvas-x), -118px, 0) scale(1.32);
          }
        }

        /* Animations */
        @keyframes statFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -5px, 0); }
        }
        @keyframes cardScan {
          0%, 30% { transform: translateX(-80%); }
          64%, 100% { transform: translateX(80%); }
        }
        @keyframes testimonialIn {
          from {
            opacity: 0;
            transform: translateY(8px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
