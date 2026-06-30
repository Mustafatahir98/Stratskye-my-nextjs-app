"use client";

import { usePathname } from "next/navigation";
import TenthSection from "./tenthsection";

export default function PageFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div id="contact">
      <TenthSection />
    </div>
  );
}
