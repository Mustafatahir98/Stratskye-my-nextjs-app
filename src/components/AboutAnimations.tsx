"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>(
        ".about-reveal, .about-team-image, .about-outcome-card"
      );

      gsap.set(revealItems, {
        autoAlpha: 0,
        y: 34,
        filter: "blur(10px)",
      });

      gsap.utils.toArray<HTMLElement>(".about-animate-section").forEach((section) => {
        const sectionItems = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll(".about-reveal, .about-team-image, .about-outcome-card")
        );

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        }).to(sectionItems, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          stagger: 0.14,
          ease: "power3.out",
        });
      });

      gsap.to(".about-signature", {
        y: -8,
        rotate: 1.4,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
