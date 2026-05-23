"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headingStyle: React.CSSProperties & { leadingTrim?: string; textEdge?: string } = {
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: '"Google Sans Flex"',
    fontSize: "clamp(28px, 4.7vw, 56px)", // Tweaked mobile baseline slightly for safety
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
    const cardsRef = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();
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
                        duration: 1.2,
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
                        duration: 1.2,
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
                        duration: 1.2,
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

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=170%",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    },
                });

                tl.addLabel("spread")
                    .to(cards[0], {
                        autoAlpha: 1,
                        x: () => -getFanX(),
                        y: () => -getFanY(),
                        rotationZ: -33,
                        scale: 1,
                        duration: 1.15,
                        ease: "power3.inOut",
                    }, "spread")
                    .to(cards[1], {
                        x: 0,
                        y: 0,
                        rotationZ: 0,
                        scale: 1,
                        duration: 1.15,
                        ease: "power3.inOut",
                    }, "spread")
                    .to(cards[2], {
                        autoAlpha: 1,
                        x: () => getFanX(),
                        y: () => getFanY(),
                        rotationZ: -31,
                        scale: 1,
                        duration: 1.15,
                        ease: "power3.inOut",
                    }, "spread")
                    .addLabel("row")
                    .to(cards[0], {
                        x: () => -getRowOffset(),
                        y: () => window.innerHeight * 0.08,
                        rotationZ: 0,
                        duration: 0.9,
                        ease: "power3.inOut",
                    }, "row+=0.18")
                    .to(cards[1], {
                        y: () => window.innerHeight * 0.08,
                        duration: 0.9,
                        ease: "power3.inOut",
                    }, "row+=0.18")
                    .to(cards[2], {
                        x: () => getRowOffset(),
                        y: () => window.innerHeight * 0.08,
                        rotationZ: 0,
                        duration: 0.9,
                        ease: "power3.inOut",
                    }, "row+=0.18");
            });

        }, sectionRef);

        return () => ctx.revert();
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
                    <img
                        key={card.src}
                        ref={(el) => {
                            cardsRef.current[index] = el;
                        }}
                        src={card.src}
                        alt={`Card ${index + 1}`}
                        className={`eight-card ${card.className}`}
                    />
                ))}
            </div>

            {/* Connect Link Call to Action */}
            <div className="link-wrapper z-20">
                <a href="#" style={linkStyle}>
                    LETS CONNECT
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
                    height: auto;
                    object-fit: contain;
                    will-change: transform;
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
                        padding-inline: 0;
                        margin-bottom: 0;
                    }
                    .heading-container {
                        position: absolute;
                        top: 13.5%;
                        padding-inline: 0;
                        margin-bottom: 0;
                    }
                    .cards-main-container {
                        display: block;
                        position: relative;
                        width: w-full;
                        height: w-full;
                        padding-inline: 0;
                        pointer-events: none;
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

                @keyframes subtlePulse {
                    0% { opacity: 0.85; text-shadow: 0 0 6px rgba(255, 255, 255, 0.5); }
                    100% { opacity: 1; text-shadow: 0 0 12px rgba(255, 255, 255, 0.8), 0 0 22px rgba(255, 107, 40, 0.4); }
                }
            `}</style>
        </section>
    );
}
