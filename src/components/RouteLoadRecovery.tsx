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

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return null;
}
