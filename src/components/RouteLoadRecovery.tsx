"use client";

import { useEffect } from "react";

const RECOVERY_KEY = "stratskye-route-load-recovered";

const isRouteLoadError = (reason: unknown) => {
  const message =
    reason instanceof Error
      ? `${reason.name} ${reason.message}`
      : typeof reason === "string"
        ? reason
        : "";

  return [
    "ChunkLoadError",
    "Loading chunk",
    "failed to fetch dynamically imported module",
    "Failed to fetch dynamically imported module",
    "Unable to preload CSS",
  ].some((pattern) => message.includes(pattern));
};

export default function RouteLoadRecovery() {
  useEffect(() => {
    const clearRecoveryFlag = () => {
      window.sessionStorage.removeItem(RECOVERY_KEY);
    };

    const recover = (reason: unknown) => {
      if (!isRouteLoadError(reason)) return;
      if (window.sessionStorage.getItem(RECOVERY_KEY) === "1") return;

      window.sessionStorage.setItem(RECOVERY_KEY, "1");
      window.location.reload();
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      recover(event.reason);
    };

    const handleError = (event: ErrorEvent) => {
      recover(event.error || event.message);
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);
    window.setTimeout(clearRecoveryFlag, 5000);

    // #region agent log
    const reportFonts = (phase: string) => {
      const bodyStyle = getComputedStyle(document.body);
      const sample = document.querySelector("h1, h2, .nav-link, a") as HTMLElement | null;
      const sampleStyle = sample ? getComputedStyle(sample) : null;
      const families = Array.from(document.fonts).map((f) => f.family);
      const uniqueFamilies = Array.from(new Set(families));
      const cssVar = bodyStyle.getPropertyValue("--font-google-sans-flex").trim();
      fetch("http://127.0.0.1:7465/ingest/6792a441-6ad4-4f4d-b926-ec5d5faa2292", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "ec12f7" },
        body: JSON.stringify({
          sessionId: "ec12f7",
          runId: "post-fix",
          hypothesisId: "A-E",
          location: "RouteLoadRecovery.tsx:reportFonts",
          message: "runtime font status",
          data: {
            phase,
            width: window.innerWidth,
            isMobileMq: window.matchMedia("(max-width: 767px)").matches,
            bodyFont: bodyStyle.fontFamily,
            sampleTag: sample?.tagName ?? null,
            sampleFont: sampleStyle?.fontFamily ?? null,
            cssVar,
            checkGoogleSans: document.fonts.check('16px "Google Sans Flex"'),
            checkCssVar: cssVar ? document.fonts.check(`16px ${cssVar}`) : false,
            checkArial: document.fonts.check('16px Arial'),
            fontCount: families.length,
            uniqueFamilies,
            status: document.fonts.status,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    };
    reportFonts("immediate");
    document.fonts.ready.then(() => reportFonts("fonts.ready")).catch(() => {});
    // #endregion

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return null;
}
