"use client";

import { usePathname } from "next/navigation";
import { type ComponentType, useEffect, useRef, useState } from "react";

export default function PageFooter() {
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [Footer, setFooter] = useState<ComponentType | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        void import("./tenthsection").then((module) => setFooter(() => module.default));
        observer.disconnect();
      },
      { rootMargin: "500px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  if (pathname === "/") return null;

  return (
    <div id="contact" ref={sentinelRef} style={{ minHeight: 760 }}>
      {Footer ? <Footer /> : null}
    </div>
  );
}
