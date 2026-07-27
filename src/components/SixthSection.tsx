"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
    {
        image: "/images/Group 513058.png",
        title: "Lead Generation",
        description: "We manage your presence to ensure you’re the loudest, most trusted voice in the industry."
    },
    {
        image: "/images/Group 513054.png",
        title: "High-Octane Branding",
        description: "Positioning that makes you look like the category leader, not a startup.",
    },
    {
        image: "/images/Group 513059.png",
        title: "Authority Socials",
        description: "We manage your presence to ensure you’re the loudest, most trusted voice in the industry.",
    },
];

export default function SixthSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const outerRingRef = useRef<HTMLImageElement>(null);
    const dottedRingRef = useRef<HTMLImageElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cleanupFns: Array<() => void> = [];
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Handle Desktop and Mobile layouts individually inside matchMedia
            mm.add({
                isMobile: "(max-width: 768px)",
                isDesktop: "(min-width: 769px)"
            }, (context) => {
                const { isMobile } = context.conditions as { isMobile: boolean };
                const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

                const tl = gsap.timeline({ paused: true });

                gsap.set(outerRingRef.current, { rotation: 0, opacity: 0, scale: 0.96, transformOrigin: "50% 50%", force3D: true });
                gsap.set(dottedRingRef.current, { rotation: 0, opacity: 0, scale: 0.9, transformOrigin: "50% 50%", force3D: true });
                gsap.set(cards, { autoAlpha: 0, xPercent: 0, y: isMobile ? 20 : 28, scale: 0.78, rotateX: -14, zIndex: 0, transformOrigin: "50% 62%", force3D: true });

                tl.to(outerRingRef.current, { opacity: 0.42, rotation: 0, scale: 1, duration: 1.2, ease: "power2.out" }, 0)
                    .to(dottedRingRef.current, { opacity: 0.9, rotation: 0, scale: 1, duration: 1.2, ease: "power2.out" }, 0);

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

                const createPresentationTrigger = (duration: number, timeScale: number) => {
                    const playPresentation = () => {
                        if (hasPresented) {
                            if (hasCompleted) {
                                tl.progress(1);
                            }
                            return;
                        }

                        hasPresented = true;
                        lockScroll();
                        tl.eventCallback("onComplete", () => {
                            hasCompleted = true;
                            tl.progress(1);
                            if (presentationTrigger) {
                                jumpToScroll(Math.max(presentationTrigger.start, presentationTrigger.end - 2));
                            }
                            window.requestAnimationFrame(unlockScroll);
                        });
                        tl.timeScale(timeScale).play(0);
                    };

                    cleanupFns.push(unlockScroll);

                    presentationTrigger = ScrollTrigger.create({
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=${duration}`,
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
                                tl.progress(1);
                                unlockScroll();
                            } else {
                                jumpToScroll(presentationTrigger?.start ?? window.scrollY);
                            }
                        },
                        onEnterBack: () => {
                            hasPresented = true;
                            hasCompleted = true;
                            tl.progress(1);
                        },
                        onLeaveBack: unlockScroll,
                    });

                };

                const carouselTl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.12 });

                cards.forEach((card) => {
                    carouselTl
                        .set(cards, { autoAlpha: 0, zIndex: 0 })
                        .set(card, { autoAlpha: 0, zIndex: 2, xPercent: 0, y: isMobile ? 18 : 24, scale: 0.94, rotateX: -8 })
                        .to(card, { autoAlpha: 1, y: 0, scale: 1, rotateX: 0, duration: 0.52, ease: "power3.out" })
                        .to(card, { y: -4, duration: 2.05, ease: "sine.inOut" })
                        .to(card, { autoAlpha: 0, y: -20, scale: 0.96, duration: 0.42, ease: "power2.in" })
                        .set(card, { autoAlpha: 0, zIndex: 0 });
                });

                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top 78%",
                    end: "bottom 22%",
                    onEnter: () => {
                        tl.restart();
                        carouselTl.restart();
                    },
                    onEnterBack: () => carouselTl.play(),
                    onLeave: () => carouselTl.pause(),
                    onLeaveBack: () => carouselTl.pause(0),
                });

                return;

                const finalPositions = [
                        { xPercent: -76, y: 0, scale: 0.72 },
                        { xPercent: 0, y: 0, scale: 0.72 },
                        { xPercent: 76, y: 0, scale: 0.72 },
                    ];

                tl.set(cards, { autoAlpha: 0, xPercent: 0, y: isMobile ? 20 : 30, scale: isMobile ? 0.44 : 0.6, rotateX: -10, zIndex: 3 }, 0.4);

                cards.forEach((card, index) => {
                    tl.to(card, {
                        autoAlpha: 1,
                        xPercent: finalPositions[index].xPercent,
                        y: finalPositions[index].y,
                        scale: finalPositions[index].scale,
                        rotateX: 0,
                        duration: 0.6,
                        ease: "back.out(1.25)",
                    }, 0.72);
                });

                tl.to(cards, { y: "+=4", duration: 0.7, ease: "sine.inOut" }, 1.35);

                createPresentationTrigger(900, 0.9);
            });

        }, containerRef);

        return () => {
            cleanupFns.forEach((cleanup) => cleanup());
            ctx.revert();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="sixth-section post-shutter-section relative w-full h-[100vh] h-[100svh] overflow-hidden flex flex-col items-center justify-start z-20"
        >
            <style>{`
        .sixth-section {
          background:
            radial-gradient(circle at 70% 38%, rgba(29, 49, 88, 0.3), transparent 58%),
            #0d172f;
        }
        .sixth-bg-noise {
          display: none;
        }
        .sixth-crosshair::before,
        .sixth-crosshair::after {
          content: "";
          position: absolute;
          pointer-events: none;
        }
        .sixth-crosshair::before {
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
        }
        .sixth-crosshair::after {
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent);
        }
        .sixth-ring-plane {
          transform: translate(-50%, -50%) scaleY(0.9);
          transform-origin: center;
          transform-style: flat;
        }
        .sixth-heading {
          margin-top: clamp(34px, 5vh, 52px);
        }
        .sixth-heading h2 {
          margin: 0;
          color: #fff;
          font-family: "Google Sans Flex";
          font-size: clamp(34px, 4vw, 40px);
          font-weight: 400;
          line-height: 0.94;
          letter-spacing: -0.045em;
        }
        .sixth-card-image {
          width: clamp(360px, 61vw, 520px);
          height: auto;
          object-fit: contain;
          filter: none;
        }
        .sixth-service-title {
          color: #F26E35;
          font-family: "Google Sans Flex";
          font-size: clamp(18px, 2vw, 21px);
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.25px;
        }
        .sixth-service-copy {
          color: rgba(205, 214, 236, 0.72);
          font-family: "Google Sans Flex";
          font-size: clamp(11px, 1.25vw, 13px);
          font-weight: 400;
          line-height: 142%;
        }
        .sixth-platform-grid {
          position: absolute;
          left: 50%;
          top: 49%;
          width: min(36vw, 430px);
          aspect-ratio: 1;
          transform: translate(-50%, -50%) rotateX(62deg) rotateZ(45deg);
          transform-origin: center;
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.35;
          mask-image: radial-gradient(circle, #000 0 58%, transparent 72%);
          pointer-events: none;
          display: none;
        }
        .sixth-crosshair { display: none; }
        .sixth-cards-stage {
          position: absolute;
          left: 50%;
          top: 24%;
          width: min(90vw, 620px);
          height: 500px;
          transform: translateX(-50%);
          z-index: 10;
        }
        .sixth-service-card { inset: 0; }

        /* --- MOBILE SPECIFIC OVERRIDES --- */
        @media (max-width: 760px) {
          .sixth-heading {
            margin-top: clamp(104px, 14svh, 126px);
            padding-inline: 24px;
          }
          .sixth-card-image {
            width: clamp(280px, 80vw, 360px);
          }
          .sixth-service-title {
            margin: 0;
            font-size: clamp(25px, 7vw, 29px);
            font-weight: 550;
            line-height: 1.06;
            letter-spacing: -0.02em;
          }
          .sixth-service-copy {
            max-width: min(84vw, 340px);
            font-size: clamp(14px, 4vw, 16px);
            line-height: 1.38;
            color: rgba(213, 221, 240, 0.8);
          }
          .sixth-platform-grid {
            width: 70vw; 
          }
          .sixth-heading h2 {
            font-size: clamp(38px, 10.5vw, 46px);
            line-height: 0.92;
            letter-spacing: -0.045em;
          }
          .sixth-cards-stage {
            top: clamp(230px, 29svh, 270px);
            width: calc(100vw - 32px);
            height: calc(100svh - 250px);
          }
          .sixth-card-content {
            margin-top: clamp(12px, 2.2svh, 20px);
          }
          .sixth-card-content .sixth-service-copy {
            margin-top: 10px;
          }
        }
        @media (max-width: 760px) and (max-height: 740px) {
          .sixth-heading {
            margin-top: 92px;
          }
          .sixth-heading h2 {
            font-size: 38px;
          }
          .sixth-card-image {
            width: clamp(260px, 74vw, 310px);
          }
          .sixth-cards-stage {
            top: 200px;
            height: calc(100svh - 214px);
          }
          .sixth-card-content {
            margin-top: 8px;
          }
          .sixth-service-title {
            font-size: clamp(23px, 6.6vw, 26px);
          }
          .sixth-service-copy {
            max-width: min(86vw, 330px);
            font-size: clamp(13px, 3.8vw, 15px);
            line-height: 1.34;
          }
        }
      `}</style>

            <div className="absolute inset-0 sixth-bg-noise" />
            <div className="absolute inset-0 sixth-crosshair opacity-80 pointer-events-none" />

            <div className="sixth-heading relative z-20 text-center">
                <h2>
                    What we do<br />for you
                </h2>
            </div>

            <div className="absolute left-1/2 top-[50%] w-[138vw] max-w-[1540px] min-w-[940px] pointer-events-none sixth-ring-plane z-[1]">
                <img
                    ref={outerRingRef}
                    src="/images/flat-liner.png"
                    alt=""
                    className="absolute left-0 top-0 w-full h-auto object-contain opacity-70"
                />
                <img
                    ref={dottedRingRef}
                    src="/images/IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
                    alt=""
                    className="relative w-full h-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]"
                />
            </div>

            <div className="sixth-platform-grid z-[2]" aria-hidden="true" />

            <div className="sixth-cards-stage flex items-start justify-center">
                <div
                    ref={card1Ref}
                    className="sixth-service-card absolute flex w-full flex-col items-center text-center opacity-0 invisible"
                    style={{ perspective: "900px", willChange: "transform, opacity" }}
                >
                    <img
                        src={services[0].image}
                        alt={services[0].title}
                        className="sixth-card-image"
                    />
                    <div className="sixth-card-content mt-[3vh] flex flex-col items-center">
                        <h3 className="sixth-service-title">{services[0].title}</h3>
                        <p className="sixth-service-copy mt-3 max-w-[360px]">{services[0].description}</p>
                    </div>
                </div>

                <div
                    ref={card2Ref}
                    className="sixth-service-card absolute flex w-full flex-col items-center text-center opacity-0 invisible"
                    style={{ perspective: "900px", willChange: "transform, opacity" }}
                >
                    <img
                        src={services[1].image}
                        alt={services[1].title}
                        className="sixth-card-image"
                    />
                    <div className="sixth-card-content mt-[3vh] flex flex-col items-center">
                        <h3 className="sixth-service-title">{services[1].title}</h3>
                        <p className="sixth-service-copy mt-3 max-w-[360px]">{services[1].description}</p>
                    </div>
                </div>

                <div
                    ref={card3Ref}
                    className="sixth-service-card absolute flex w-full flex-col items-center text-center opacity-0 invisible"
                    style={{ perspective: "900px", willChange: "transform, opacity" }}
                >
                    <img
                        src={services[2].image}
                        alt={services[2].title}
                        className="sixth-card-image"
                    />
                    <div className="sixth-card-content mt-[3vh] flex flex-col items-center">
                        <h3 className="sixth-service-title">{services[2].title}</h3>
                        <p className="sixth-service-copy mt-3 max-w-[360px]">{services[2].description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
