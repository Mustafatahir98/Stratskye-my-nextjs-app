"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __stratskyeLenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const lenis = new Lenis();
    window.__stratskyeLenis = lenis;
    const updateScrollTrigger = () => ScrollTrigger.update();
    const tick = (time: number) => lenis.raf(time * 1000);

    let refreshTimeout: number | null = null;
    let refreshFrame = 0;
    let ratioQuery: MediaQueryList | null = null;
    let removeRatioListener: (() => void) | null = null;
    let lastViewportWidth = window.innerWidth;
    let lastPixelRatio = window.devicePixelRatio;

    const runRefresh = () => {
      lenis.stop();
      lenis.resize();
      ScrollTrigger.refresh(true);
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
    const handleViewportChange = () => {
      const widthChanged = Math.abs(window.innerWidth - lastViewportWidth) > 1;
      const ratioChanged = window.devicePixelRatio !== lastPixelRatio;

      if (!widthChanged && !ratioChanged) {
        return;
      }

      lastViewportWidth = window.innerWidth;
      lastPixelRatio = window.devicePixelRatio;
      refreshLayout();
    };

    const handleOrientationChange = () => {
      lastViewportWidth = window.innerWidth;
      lastPixelRatio = window.devicePixelRatio;
      refreshLayout(320);
    };

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (navigationEntry?.type === "reload") {
      lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("orientationchange", handleOrientationChange);
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
      window.removeEventListener("orientationchange", handleOrientationChange);
      removeRatioListener?.();
      gsap.ticker.remove(tick);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
      if (window.__stratskyeLenis === lenis) {
        delete window.__stratskyeLenis;
      }
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return <>{children}</>;
}
