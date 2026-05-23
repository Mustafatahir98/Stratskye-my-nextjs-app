"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CapTrimStyle = CSSProperties & {
  leadingTrim?: string;
  textEdge?: string;
};

export default function SeventhSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const moonGlowRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLImageElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const textTopLeftRef = useRef<HTMLDivElement>(null);
  const textBottomLeftRef = useRef<HTMLDivElement>(null);
  const textBottomRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      
      mm.add({
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)"
      }, (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            // Mobile ko scroll duration zyada di hai taake strict one-by-one sequence smoothly chalay
            end: isMobile ? "+=500%" : "+=200%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Shared Initial States
        gsap.set(moonRef.current, { xPercent: -50, yPercent: 12, scale: 0.9, opacity: 0 });
        gsap.set(moonGlowRef.current, { xPercent: -50, yPercent: 8, scale: 0.86, opacity: 0 });
        gsap.set(starsRef.current, { xPercent: -50, scale: 1.12, opacity: 0 });
        gsap.set(mountainRef.current, { yPercent: 55, scale: 1.03, opacity: 0, transformOrigin: "50% 100%" });
        gsap.set([textTopLeftRef.current, textBottomLeftRef.current, textBottomRightRef.current], { opacity: 0, y: 20 });

        // Responsive Cards Initial State
        if (isMobile) {
          // xPercent: -50 ensure karega ke cards mobile par bilkul center align hon
          gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { opacity: 0, y: 40, xPercent: -50, scale: 0.85 });
        } else {
          gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { opacity: 0, y: 30, xPercent: 0, scale: 0.9 });
        }

        // Shared Background Animations
        tl.to(moonRef.current, { yPercent: 0, scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }, 0)
          .to(moonGlowRef.current, { yPercent: 0, scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }, 0)
          .to(starsRef.current, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }, 0.2)
          .to(mountainRef.current, { yPercent: 0, scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" }, 0.4);

        if (isMobile) {
          // --- MOBILE: STRICT ONE-BY-ONE SEQUENCE ---
          // Card 1 Aayega, rukega, aur phir chala jayega
          tl.to(card1Ref.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" }, 1.2)
            .to(card1Ref.current, { opacity: 0, y: -40, scale: 1.05, duration: 0.6, ease: "power2.in" }, 2.6)
            
          // Card 1 ke jane ke baad Card 2 aayega
            .to(card2Ref.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" }, 3.0)
            .to(card2Ref.current, { opacity: 0, y: -40, scale: 1.05, duration: 0.6, ease: "power2.in" }, 4.4)
            
          // Card 2 ke jane ke baad Card 3 aayega
            .to(card3Ref.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" }, 4.8);
            
          tl.to([textTopLeftRef.current, textBottomLeftRef.current, textBottomRightRef.current], { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }, 1.5);
          
        } else {
          // --- DESKTOP: Original Simultaneous Sequence ---
          tl.to(card1Ref.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" }, 1.2)
            .to(card2Ref.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" }, 1.6)
            .to(card3Ref.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" }, 2.0)
            .to([textTopLeftRef.current, textBottomLeftRef.current, textBottomRightRef.current], { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }, 1.5);
        }
      });

    }, containerRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="post-shutter-section relative w-full h-[100vh] h-[100svh] overflow-hidden z-10"
    >
      <style>{`
        /* --- DESKTOP DEFAULT STYLES --- */
        .ss-mountain { bottom: 0; left: 0; width: 100%; height: auto; }
        .ss-card-1 { left: 30%; top: 36%; }
        .ss-card-2 { right: 26%; top: 20%; }
        .ss-card-3 { right: 12%; top: 42%; }
        .ss-line-1 { height: 40px; }
        .ss-line-2 { height: 50px; }
        .ss-line-3 { height: 30px; }

        /* --- MOBILE RESPONSIVE OVERRIDES --- */
        @media (max-width: 768px) {
          .ss-mountain {
            width: 260%;
            left: -80%;  
          }
          
          /* Cards ko neechay laya gaya hai (top: 45%) taake lines theek se mountain ko hit karein */
          .ss-card-1, .ss-card-2, .ss-card-3 { 
            left: 50% !important; 
            right: auto !important; 
            top: 45% !important; 
          }
          
          /* Card ka size optimal rakha gaya hai */
          .ss-card-img { 
            width: 85vw !important; 
            max-width: 380px !important; 
          }
          
          /* Anchor lines ki height barha di hai taake cards se nikal kar theek peak par lagain */
          .ss-anchor { 
            display: flex !important; 
          }
          .ss-line-1, .ss-line-2, .ss-line-3 {
            height: 60px !important; 
          }

          /* Text sizes wazeh aur adjusted */
          .ss-text-main {
            font-size: clamp(34px, 10vw, 42px) !important;
            line-height: 105% !important;
            bottom: 12% !important;
          }
          .ss-text-sub {
            font-size: 14px !important;
            bottom: 12% !important;
            letter-spacing: 1.5px !important;
          }
          .ss-text-proof {
            top: 12% !important;
            font-size: 9px !important;
          }
        }
      `}</style>

      {/* 1. TEXTURE */}
      <img
        src="/images/Texture.png"
        alt=""
        className="absolute hidden w-[110%] h-[110%] -top-[5%] -left-[5%] object-cover z-0 pointer-events-none opacity-50 mix-blend-overlay"
      />

      {/* 2. MOON */}
      <div
        ref={moonGlowRef}
        aria-hidden="true"
        className="absolute left-1/2 top-[3%] z-[1] h-[42vw] max-h-[520px] min-h-[280px] w-[42vw] min-w-[280px] max-w-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.78) 0%, rgba(203,221,255,0.38) 34%, rgba(147,177,230,0.12) 58%, transparent 74%)",
          filter: "blur(28px)",
          mixBlendMode: "screen",
        }}
      />

      <img
        ref={moonRef}
        src="/images/Moon.png"
        alt=""
        className="absolute z-[1] pointer-events-none"
        style={{
          top: "-5%",
          left: "50%",
          width: "75%",
          maxWidth: "1000px",
          mixBlendMode: "screen",
          filter: "brightness(1.18) contrast(1.08) drop-shadow(0 0 42px rgba(255,255,255,0.55))",
          WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 75%)",
          maskImage: "radial-gradient(circle, black 50%, transparent 75%)",
        }}
      />

      {/* 3. STARS */}
      <img
        ref={starsRef}
        src="/images/Stars.png"
        alt=""
        className="absolute z-[2] pointer-events-none"
        style={{
          top: "-5%",
          left: "50%",
          width: "110%",
          height: "70%",
          objectFit: "cover",
          opacity: 0.9,
          mixBlendMode: "screen",
          filter: "brightness(1.75) contrast(1.18) drop-shadow(0 0 8px rgba(255,255,255,0.75))",
        }}
      />

      {/* 4. MOUNTAIN */}
      <img
        ref={mountainRef}
        src="/images/mountain-st.png"
        alt=""
        className="absolute z-[3] pointer-events-none ss-mountain"
      />

      {/* 5. CARDS floating over the mountain */}

      <div
        ref={card1Ref}
        className="absolute z-[5] flex flex-col items-center ss-card-1"
      >
        <img
          src="/images/Cybersecurity SaaS.png"
          alt="Cybersecurity SaaS"
          className="w-[clamp(180px,22vw,320px)] ss-card-img h-auto object-contain drop-shadow-lg"
        />
        <div className="ss-anchor flex flex-col items-center mt-1">
          <div className="ss-line-1" style={{ width: "1px", borderLeft: "1px dashed rgba(255,255,255,0.5)" }} />
          <img src="/images/Ellipse 10 (1).svg" alt="" className="w-[6px] h-[6px]" />
        </div>
      </div>

      <div
        ref={card2Ref}
        className="absolute z-[5] flex flex-col items-center ss-card-2"
      >
        <img
          src="/images/The Committee Veto.png"
          alt="FinTech Platform"
          className="w-[clamp(180px,22vw,320px)] ss-card-img h-auto object-contain drop-shadow-lg"
        />
        <div className="ss-anchor flex flex-col items-center mt-1">
          <div className="ss-line-2" style={{ width: "1px", borderLeft: "1px dashed rgba(255,255,255,0.5)" }} />
          <img src="/images/Ellipse 10 (1).svg" alt="" className="w-[6px] h-[6px]" />
        </div>
      </div>

      <div
        ref={card3Ref}
        className="absolute z-[5] flex flex-col items-center ss-card-3"
      >
        <img
          src="/images/Infrastructure Hardware.png"
          alt="Infrastructure Hardware"
          className="w-[clamp(180px,22vw,320px)] ss-card-img h-auto object-contain drop-shadow-lg"
        />
        <div className="ss-anchor flex flex-col items-center mt-1">
          <div className="ss-line-3" style={{ width: "1px", borderLeft: "1px dashed rgba(255,255,255,0.5)" }} />
          <img src="/images/Ellipse 10 (1).svg" alt="" className="w-[6px] h-[6px]" />
        </div>
      </div>

      {/* TEXT ELEMENTS */}
      <div 
        ref={textTopLeftRef} 
        className="absolute top-[8%] left-[5%] z-[20] flex items-center justify-center text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/80 ss-text-proof"
      >
        <span className="absolute left-0 top-0 w-1.5 h-1.5 border-t border-l border-white/70"></span>
        <span className="absolute right-0 top-0 w-1.5 h-1.5 border-t border-r border-white/70"></span>
        <span className="absolute left-0 bottom-0 w-1.5 h-1.5 border-b border-l border-white/70"></span>
        <span className="absolute right-0 bottom-0 w-1.5 h-1.5 border-b border-r border-white/70"></span>
        <span className="px-3 py-1.5">SOCIAL PROOF</span>
      </div>

      <div 
        ref={textBottomLeftRef} 
        className="absolute bottom-[15%] left-[5%] z-[20] transition-all duration-500 hover:scale-[1.03] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] cursor-default ss-text-main"
        style={{
          color: "#FFF",
          fontFamily: '"Google Sans Flex"',
          fontSize: "80px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "104%",
          letterSpacing: "-2.4px",
          leadingTrim: "both",
          textEdge: "cap"
        } as CapTrimStyle}
      >
        We&apos;ve done this<br />before.
      </div>

      <div 
        ref={textBottomRightRef} 
        className="absolute bottom-[15%] right-[5%] z-[20] flex items-center gap-2 transition-all duration-300 hover:scale-[1.1] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-pointer ss-text-sub"
        style={{
          color: "#FFF",
          fontFamily: '"Google Sans Flex"',
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "140%",
          letterSpacing: "3.2px",
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationSkipInk: "auto",
          textDecorationThickness: "auto",
          textUnderlineOffset: "auto",
          textUnderlinePosition: "from-font",
          leadingTrim: "both",
          textEdge: "cap"
        } as CapTrimStyle}
      >
        LETS CONNECT <span className="text-2xl leading-none">↗</span>
      </div>

    </div>
  );
}
