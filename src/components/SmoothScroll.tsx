"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    const updateScrollTrigger = () => ScrollTrigger.update();
    const tick = (time: number) => lenis.raf(time * 1000);

    let refreshTimeout: number | null = null;
    let refreshFrame = 0;
    let ratioQuery: MediaQueryList | null = null;
    let removeRatioListener: (() => void) | null = null;

    const runRefresh = () => {
      const activePinnedTrigger = ScrollTrigger.getAll().find(
        (trigger) => trigger.isActive && Boolean(trigger.vars.pin)
      );
      const activeProgress = activePinnedTrigger?.progress;

      lenis.stop();
      lenis.resize();

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.animation?.invalidate();
      });

      ScrollTrigger.refresh(true);

      if (activePinnedTrigger && activeProgress !== undefined) {
        const scrollTarget =
          activePinnedTrigger.start +
          (activePinnedTrigger.end - activePinnedTrigger.start) * activeProgress;

        lenis.scrollTo(scrollTarget, { immediate: true, force: true });
      }

      ScrollTrigger.update();
      lenis.start();
    };

    const refreshLayout = (delay = 180) => {
      if (refreshTimeout) {
        window.clearTimeout(refreshTimeout);
      }

      if (refreshFrame) {
        window.cancelAnimationFrame(refreshFrame);
      }

      refreshTimeout = window.setTimeout(() => {
        refreshFrame = window.requestAnimationFrame(() => {
          runRefresh();
          refreshFrame = window.requestAnimationFrame(() => {
            runRefresh();
            refreshFrame = 0;
          });
        });

        refreshTimeout = null;
      }, delay);
    };

    const watchDevicePixelRatio = () => {
      removeRatioListener?.();
      ratioQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);

      const handleRatioChange = () => {
        refreshLayout(240);
        watchDevicePixelRatio();
      };

      ratioQuery.addEventListener("change", handleRatioChange);
      removeRatioListener = () => {
        ratioQuery?.removeEventListener("change", handleRatioChange);
      };
    };
    const handleViewportChange = () => refreshLayout();

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("orientationchange", handleViewportChange);
    window.visualViewport?.addEventListener("resize", handleViewportChange);
    watchDevicePixelRatio();
    window.requestAnimationFrame(() => refreshLayout(0));

    return () => {
      if (refreshTimeout) {
        window.clearTimeout(refreshTimeout);
      }
      if (refreshFrame) {
        window.cancelAnimationFrame(refreshFrame);
      }

      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("orientationchange", handleViewportChange);
      window.visualViewport?.removeEventListener("resize", handleViewportChange);
      removeRatioListener?.();
      gsap.ticker.remove(tick);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
