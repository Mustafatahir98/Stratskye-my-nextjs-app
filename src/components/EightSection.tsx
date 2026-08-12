"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headingStyle: React.CSSProperties & { leadingTrim?: string; textEdge?: string } = {
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: '"Google Sans Flex"',
    fontSize: "clamp(28px, 3.2vw, 44px)",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "112%",
    letterSpacing: "0",
};

const linkStyle: React.CSSProperties & { leadingTrim?: string; textEdge?: string } = {
    color: "#E9EDF7",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: '"Google Sans Flex"',
    fontSize: "clamp(10px, 0.8vw, 12px)",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "140%",
    letterSpacing: "1.8px",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
};

export default function EightSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();
        const cleanupFns: Array<() => void> = [];
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter(Boolean);

            // --- MOBILE ANIMATIONS (Up to 767px) ---
            mm.add("(max-width: 767px)", () => {
                // Safe clear calculations for desktop absolute positioning resets
                gsap.set(cards, { clearProps: "all" });

                // Card 1: Left se slide ho kar center aayega
                gsap.fromTo(cards[0], 
                    { x: "-100vw", autoAlpha: 0, scale: 0.9 },
                    {
                        x: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: cards[0],
                            start: "top 82%",
                            toggleActions: "play none none none"
                        }
                    }
                );

                // Card 2: Right se slide ho kar center aayega
                gsap.fromTo(cards[1], 
                    { x: "100vw", autoAlpha: 0, scale: 0.9 },
                    {
                        x: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: cards[1],
                            start: "top 82%",
                            toggleActions: "play none none none"
                        }
                    }
                );

                // Card 3: Left se slide ho kar center aayega
                gsap.fromTo(cards[2], 
                    { x: "-100vw", autoAlpha: 0, scale: 0.9 },
                    {
                        x: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: cards[2],
                            start: "top 82%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });

            // --- DESKTOP ANIMATIONS (768px and up) ---
            mm.add("(min-width: 768px)", () => {
                const getRowOffset = () => {
                    const cardWidth = cards[1]?.offsetWidth ?? 0;
                    const viewportGap = 34;
                    return cardWidth + viewportGap;
                };
                const getFanX = () => (cards[1]?.offsetWidth ?? 0) * 0.5;
                const getFanY = () => (cards[1]?.offsetHeight ?? 0) * 0.5;

                gsap.set(cards, {
                    xPercent: -50,
                    yPercent: -50,
                    left: "50%",
                    top: "50%",
                    x: 0,
                    y: 0,
                    rotationZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    transformPerspective: 1200,
                    transformOrigin: "50% 50%",
                });

                gsap.set(cards[0], { autoAlpha: 0, zIndex: 30, rotationZ: -8, scale: 0.96 });
                gsap.set(cards[1], { autoAlpha: 1, zIndex: 20 });
                gsap.set(cards[2], { autoAlpha: 0, zIndex: 10, rotationZ: 8, scale: 0.96 });

                const tl = gsap.timeline({ paused: true });

                tl.addLabel("spread")
                    .to(cards[0], {
                        autoAlpha: 1,
                        x: () => -getFanX(),
                        y: () => -getFanY(),
                        rotationZ: -33,
                        scale: 1,
                        duration: 0.78,
                        ease: "power3.inOut",
                    }, "spread")
                    .to(cards[1], {
                        x: 0,
                        y: 0,
                        rotationZ: 0,
                        scale: 1,
                        duration: 0.78,
                        ease: "power3.inOut",
                    }, "spread")
                    .to(cards[2], {
                        autoAlpha: 1,
                        x: () => getFanX(),
                        y: () => getFanY(),
                        rotationZ: -31,
                        scale: 1,
                        duration: 0.78,
                        ease: "power3.inOut",
                    }, "spread")
                    .addLabel("row")
                    .to(cards[0], {
                        x: () => -getRowOffset(),
                        y: () => window.innerHeight * 0.08,
                        rotationZ: 0,
                        duration: 0.58,
                        ease: "power3.inOut",
                    }, "row+=0.08")
                    .to(cards[1], {
                        y: () => window.innerHeight * 0.08,
                        duration: 0.58,
                        ease: "power3.inOut",
                    }, "row+=0.08")
                    .to(cards[2], {
                        x: () => getRowOffset(),
                        y: () => window.innerHeight * 0.08,
                        rotationZ: 0,
                        duration: 0.58,
                        ease: "power3.inOut",
                    }, "row+=0.08");

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
                    tl.timeScale(0.88).play(0);
                };

                cleanupFns.push(unlockScroll);

                presentationTrigger = ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=950",
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

            });

        }, sectionRef);

        return () => {
            cleanupFns.forEach((cleanup) => cleanup());
            ctx.revert();
            mm.revert();
        };
    }, []);

    const cardImages = [
        { src: "/images/The Audit.png", className: "eight-card-a" },
        { src: "/images/Frame 8.png", className: "eight-card-b" },
        { src: "/images/The Growth Engine.png", className: "eight-card-c" },
    ];

    return (
        <section
            ref={sectionRef}
            className="eight-section post-shutter-section relative w-full overflow-hidden flex flex-col items-center z-20"
        >
            <div className="eight-bg-grid" aria-hidden="true" />

            {/* Header Content Area */}
            <div className="header-wrapper w-full flex flex-col items-center">
                <div className="eyebrow-container w-full px-6 md:px-[2.8%] flex justify-between items-center z-10 text-[#E9EDF7] font-bold text-[9px] tracking-[0.22em] uppercase opacity-90">
                    <div className="glow-eyebrow flex items-center gap-3">
                        <span>[</span>
                        <span className="glow-text">HOW IT WORKS</span>
                        <span>]</span>
                    </div>
                    <span>02 / 03</span>
                </div>

                <div className="heading-container w-full text-center z-10 pointer-events-none flex flex-col items-center justify-center px-6">
                    <h2 style={headingStyle}>
                        <span className="text-[#E9EDF7] opacity-80">And here&apos;s</span>
                        <br />
                        <span className="text-[#FF6B28]">how we do it.</span>
                    </h2>
                </div>
            </div>

            {/* Responsive Cards Wrapper */}
            <div className="cards-main-container relative w-full z-20">
                {cardImages.map((card, index) => (
                    <div
                        key={card.src}
                        ref={(el) => {
                            cardsRef.current[index] = el;
                        }}
                        className={`eight-card ${card.className}`}
                    >
                        <Image
                            src={card.src}
                            alt={`Card ${index + 1}`}
                            width={479}
                            height={457}
                            sizes="(max-width: 767px) min(320px, calc(100vw - 48px)), min(25.2vw, 280px)"
                            className="eight-card-image"
                            onPointerEnter={() => setHoveredCard(index)}
                            onPointerLeave={() => setHoveredCard(null)}
                            style={hoveredCard === index ? {
                                transform: "translateY(-18px) scale(1.065) rotateX(2deg)",
                                filter: "brightness(1.04) drop-shadow(0 30px 38px rgba(3, 7, 18, 0.5)) drop-shadow(0 0 24px rgba(255, 107, 40, 0.38))",
                                boxShadow: "0 0 0 2px rgba(255, 107, 40, 0.72), 0 18px 50px rgba(255, 107, 40, 0.18)",
                            } : undefined}
                        />
                    </div>
                ))}
            </div>

            {/* Connect Link Call to Action */}
            <div className="link-wrapper z-20">
                <a href="/contact-form" style={linkStyle}>
                    LET&apos;S CONNECT
                </a>
            </div>

            <style>{`
                /* Core Layout Structure */
                .eight-section {
                    background: var(--post-shutter-bg);
                    min-height: 100vh;
                }
                .eight-bg-grid {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(90deg, rgba(186, 198, 224, 0.07) 1px, transparent 1px);
                    background-size: 19.8% 100%;
                    pointer-events: none;
                }

                /* --- Glow Eyebrow Effect --- */
                .glow-eyebrow {
                    color: rgba(233, 237, 247, 0.6);
                }
                .glow-text {
                    color: #fff;
                    text-shadow: 
                        0 0 8px rgba(255, 255, 255, 0.6),
                        0 0 20px rgba(255, 107, 40, 0.3);
                    animation: subtlePulse 4s ease-in-out infinite alternate;
                }

                /* --- MOBILE SPECIFIC STYLES (Default / Mobile-First) --- */
                .header-wrapper {
                    margin-top: 3.5rem;
                }
                .eyebrow-container {
                    margin-bottom: 2rem;
                    width: calc(100% - 32px);
                    max-width: 420px;
                    padding-inline: 24px;
                    gap: 18px;
                    font-size: 8px;
                    letter-spacing: 0.16em;
                    line-height: 1;
                }
                .glow-eyebrow {
                    min-width: 0;
                    gap: 8px;
                    white-space: nowrap;
                }
                .eyebrow-container > span {
                    flex-shrink: 0;
                    white-space: nowrap;
                }
                .heading-container {
                    margin-bottom: 3.5rem;
                }
                .cards-main-container {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    padding-inline: 24px;
                    align-items: center;
                    width: 100%;
                }
                .eight-card {
                    width: 100%;
                    max-width: 320px; /* High fidelity full size display on mobile */
                    pointer-events: auto;
                    will-change: transform;
                }
                .eight-card-image {
                    display: block;
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    border-radius: 14px;
                    filter: drop-shadow(0 14px 24px rgba(3, 7, 18, 0.18));
                    box-shadow: 0 0 0 0 rgba(255, 107, 40, 0);
                    cursor: pointer;
                    pointer-events: auto;
                    transition:
                        transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
                        filter 420ms ease,
                        box-shadow 420ms ease;
                    will-change: transform, filter, box-shadow;
                }
                .link-wrapper {
                    margin-top: 4rem;
                    margin-bottom: 4rem;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                /* --- DESKTOP STYLES OVERRIDE (768px and up) --- */
                @media (min-width: 768px) {
                    .eight-section {
                        height: 100vh;
                        justify-content: center;
                    }
                    .header-wrapper {
                        margin-top: 0;
                    }
                    .eyebrow-container {
                        position: absolute;
                        top: 15%;
                        width: 100%;
                        max-width: none;
                        padding-inline: 2.8%;
                        margin-bottom: 0;
                        gap: 0;
                        font-size: 9px;
                        letter-spacing: 0.22em;
                    }
                    .glow-eyebrow {
                        gap: 12px;
                    }
                    .heading-container {
                        position: absolute;
                        top: 13.5%;
                        padding-inline: 2.8%;
                        margin-bottom: 0;
                    }
                    .cards-main-container {
                        display: block;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        padding-inline: 0;
                        pointer-events: auto;
                        max-width: none;
                    }
                    .eight-card {
                        position: absolute;
                        width: clamp(178px, 25.2vw, 280px);
                        max-width: none;
                        pointer-events: auto;
                        transform-style: preserve-3d;
                    }
                    .link-wrapper {
                        position: absolute;
                        bottom: 18%;
                        left: 50%;
                        transform: translateX(-50%);
                        width: auto;
                        margin-top: 0;
                        margin-bottom: 0;
                    }
                }

                .eight-card:hover {
                    z-index: 50 !important;
                }
                .eight-card:hover .eight-card-image {
                    transform: translateY(-18px) scale(1.065) rotateX(2deg);
                    filter:
                        brightness(1.04)
                        drop-shadow(0 30px 38px rgba(3, 7, 18, 0.5))
                        drop-shadow(0 0 24px rgba(255, 107, 40, 0.38));
                    box-shadow:
                        0 0 0 2px rgba(255, 107, 40, 0.72),
                        0 18px 50px rgba(255, 107, 40, 0.18);
                }

                @media (prefers-reduced-motion: reduce) {
                    .eight-card-image {
                        transition-duration: 1ms;
                    }
                }

                @keyframes subtlePulse {
                    0% { opacity: 0.85; text-shadow: 0 0 6px rgba(255, 255, 255, 0.5); }
                    100% { opacity: 1; text-shadow: 0 0 12px rgba(255, 255, 255, 0.8), 0 0 22px rgba(255, 107, 40, 0.4); }
                }
            `}</style>
        </section>
    );
}
