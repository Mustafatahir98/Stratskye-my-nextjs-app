"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Articles", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-form" },
];

const socialItems = [
  { label: "Instagram", href: "https://www.instagram.com/stratskye/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/stratskye/" },
  { label: "Terms of Service", href: "/terms-of-services" },
];

type IpLocationResponse = {
  city?: string;
  country_code?: string;
  country_name?: string;
  timezone?: string;
};

type ReverseLocationResponse = {
  city?: string;
  locality?: string;
  localityName?: string;
  principalSubdivision?: string;
  countryCode?: string;
  countryName?: string;
  timezone?: string;
};

const timezoneCountryFallbacks: Record<string, string> = {
  "Asia/Karachi": "Pakistan",
};

const getFallbackLocation = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const country = timezoneCountryFallbacks[timeZone];

  if (country) {
    return {
      label: country.toUpperCase(),
      timeZone,
    };
  }

  const city = timeZone.split("/").pop()?.replace(/_/g, " ") || "Local";
  const region = timeZone.split("/")[0] || "Local";

  return {
    label: `${city}, ${region}`.toUpperCase(),
    timeZone,
  };
};

const formatLocationLabel = (city?: string, country?: string) => {
  const parts = [city, country].map((part) => part?.trim()).filter(Boolean);
  return (parts.length > 0 ? parts.join(", ") : getFallbackLocation().label).toUpperCase();
};

const fetchJsonWithTimeout = async <T,>(url: string, timeoutMs: number) => {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error("Location lookup failed");
    return (await response.json()) as T;
  } finally {
    window.clearTimeout(timeout);
  }
};

const getBrowserPosition = () =>
  new Promise<GeolocationPosition>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Browser geolocation unavailable"));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      maximumAge: 300000,
      timeout: 9000,
    });
  });

export default function SiteHeader() {
  const [time, setTime] = useState("LOADING...");
  const [locationLabel, setLocationLabel] = useState("DETECTING...");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let active = true;
    let timeZone = getFallbackLocation().timeZone;

    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
          .format(new Date())
          .toUpperCase()
      );
    };

    const updateLocation = async () => {
      const fallback = getFallbackLocation();
      setLocationLabel(fallback.label);

      try {
        const position = await getBrowserPosition();
        const params = new URLSearchParams({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
          localityLanguage: "en",
        });
        const data = await fetchJsonWithTimeout<ReverseLocationResponse>(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?${params.toString()}`,
          4500
        );
        if (!active) return;

        if (data.timezone) {
          timeZone = data.timezone;
        }

        const city =
          data.city?.trim() ||
          data.locality?.trim() ||
          data.localityName?.trim() ||
          data.principalSubdivision?.trim();
        const country = data.countryName?.trim() || data.countryCode?.trim();

        setLocationLabel(formatLocationLabel(city, country));
        updateTime();
        return;
      } catch {
        if (!active) return;
      }

      try {
        const data = await fetchJsonWithTimeout<IpLocationResponse>("https://ipapi.co/json/", 3500);
        if (!active) return;

        if (data.timezone) {
          timeZone = data.timezone;
        }

        setLocationLabel(formatLocationLabel(data.city, data.country_name || data.country_code));
        updateTime();
      } catch {
        if (!active) return;
        setLocationLabel(fallback.label);
        updateTime();
      }
    };

    updateTime();
    updateLocation();
    const interval = window.setInterval(updateTime, 1000);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflowY = menuOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflowY = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html, body { scroll-behavior: smooth; scroll-padding-top: 92px; }
        .noise-overlay { position: fixed; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); opacity: 0.15; pointer-events: none; z-index: 60; mix-blend-mode: overlay; }
        .navbar { position: fixed; top: 0; left: 0; right: 0; height: 80px; z-index: 120; display: flex; align-items: center; }
        .navbar-bg { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(13,19,38,0.9), transparent); z-index: -1; pointer-events: none; }
        .logo { position: absolute; left: 10%; display: flex; align-items: center; text-decoration: none; padding-left: 10px; z-index: 10; }
        .logo-image { width: clamp(118px, 10vw, 156px); height: auto; display: block; object-fit: contain; filter: drop-shadow(0 8px 18px rgba(0,0,0,0.18)); }
        .nav-center { position: absolute; left: 32%; right: 32%; height: 100%; display: flex; align-items: center; justify-content: center; gap: 18px; font-size: 11px; font-weight: 600; font-family: "Google Sans Flex"; letter-spacing: 0.15em; color: rgba(255, 255, 255, 0.95); text-transform: uppercase; mix-blend-mode: difference; white-space: nowrap; }
        .nav-location { max-width: 190px; overflow: hidden; text-overflow: ellipsis; }
        .nav-time { display: inline-flex; align-items: center; gap: 8px; color: rgb(254 215 170); }
        .nav-time svg { flex: 0 0 auto; }
        .nav-separator { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.8); }
        .nav-menu { position: absolute; right: calc(10% + 12px); width: 48px; height: 48px; display: grid; place-items: center; cursor: pointer; border: 0; background: transparent; padding: 0; z-index: 130; mix-blend-mode: difference; color: #ffffff; }
        .nav-menu.is-open { mix-blend-mode: normal; color: #0a1128; }
        .nav-menu:focus-visible { outline: 1px solid rgba(255,255,255,0.85); outline-offset: 5px; }
        .nav-menu-stack { position: relative; width: 32px; height: 18px; display: block; }
        .nav-menu-line { position: absolute; right: 0; width: 32px; height: 2px; border-radius: 999px; background: currentColor; transition: transform 0.35s cubic-bezier(.22,1,.36,1), top 0.35s cubic-bezier(.22,1,.36,1), width 0.35s cubic-bezier(.22,1,.36,1), opacity 0.25s ease; }
        .nav-menu-line:first-child { top: 4px; }
        .nav-menu-line:last-child { top: 13px; width: 21px; }
        .nav-menu.is-open .nav-menu-line:first-child { top: 9px; transform: rotate(42deg); }
        .nav-menu.is-open .nav-menu-line:last-child { top: 9px; width: 32px; transform: rotate(-42deg); }
        .menu-overlay { position: fixed; inset: 0; z-index: 110; pointer-events: none; opacity: 0; visibility: hidden; transition: opacity 0.25s ease, visibility 0.25s ease; }
        .menu-overlay.is-open { pointer-events: auto; opacity: 1; visibility: visible; }
        .menu-backdrop { position: absolute; inset: 0; background: transparent; }
        .menu-panel { position: absolute; top: 5px; right: 10%; width: min(376px, calc(100vw - 32px)); min-height: 448px; display: flex; flex-direction: column; padding: 26px 14px 24px 28px; border: 1px solid rgba(155,171,219,0.82); border-radius: 12px; background: #f2eee9; box-shadow: 0 18px 44px rgba(10,17,40,0.18); color: #0a1128; transform: translate(12px, -14px) scale(0.94); transform-origin: top right; opacity: 0; transition: transform 0.42s cubic-bezier(.16,1,.3,1), opacity 0.28s ease; }
        .menu-overlay.is-open .menu-panel { transform: translate(0, 0) scale(1); opacity: 1; }
        .menu-list { list-style: none; display: flex; flex-direction: column; gap: 2px; margin: 0; padding: 0 58px 0 0; }
        .menu-link { position: relative; display: inline-flex; align-items: center; min-height: 40px; color: #6f7283; text-decoration: none; font-size: 34px; font-weight: 500; line-height: 1; letter-spacing: 0; transform: translateY(8px); opacity: 0; transition: color 0.22s ease, transform 0.34s cubic-bezier(.22,1,.36,1), opacity 0.34s ease; }
        .menu-overlay.is-open .menu-link { transform: translateY(0); opacity: 1; }
        .menu-overlay.is-open .menu-list li:nth-child(1) .menu-link { transition-delay: 45ms; }
        .menu-overlay.is-open .menu-list li:nth-child(2) .menu-link { transition-delay: 80ms; }
        .menu-overlay.is-open .menu-list li:nth-child(3) .menu-link { transition-delay: 115ms; }
        .menu-overlay.is-open .menu-list li:nth-child(4) .menu-link { transition-delay: 150ms; }
        .menu-overlay.is-open .menu-list li:nth-child(5) .menu-link { transition-delay: 185ms; }
        .menu-overlay.is-open .menu-list li:nth-child(6) .menu-link { transition-delay: 220ms; }
        .menu-link:hover, .menu-link:focus-visible, .menu-link.is-active { color: #0a1128; outline: none; }
        .menu-link.is-active::before { content: ""; position: absolute; left: -18px; top: 50%; width: 8px; height: 8px; border-radius: 50%; background: #f26e35; transform: translateY(-50%); }
        .menu-social { margin-top: auto; padding-top: 28px; }
        .menu-social::before { content: ""; display: block; height: 1px; margin: 0 0 26px; background: rgba(155,171,219,0.74); }
        .menu-social-list { list-style: none; display: grid; gap: 4px; margin: 0; padding: 0; }
        .menu-social-link { color: #6f7283; font-size: 20px; font-weight: 500; line-height: 1.12; text-decoration: underline; text-underline-offset: 2px; transition: color 0.2s ease; }
        .menu-social-link:hover, .menu-social-link:focus-visible { color: #0a1128; outline: none; }
        @media (max-width: 900px) {
          .logo { left: 20px; }
          .nav-menu { right: 16px; }
          .nav-center { display: none; }
          .nav-menu.is-open { right: 16px; top: 12px; }
          .menu-panel { inset: 0; width: 100%; min-height: 100dvh; border: 0; border-radius: 0; padding: max(96px, env(safe-area-inset-top)) 28px max(30px, env(safe-area-inset-bottom)); transform: translateY(-18px); }
          .menu-list { gap: clamp(4px, 1.2vh, 10px); padding-right: 56px; }
          .menu-link { min-height: clamp(40px, 8vh, 58px); font-size: clamp(36px, 12vw, 56px); }
          .menu-social { padding-top: 30px; }
          .menu-social-link { font-size: clamp(20px, 6vw, 28px); }
        }
      `}</style>

      <div className="noise-overlay" />

      <nav className="navbar px-8">
        <div className="navbar-bg" />
        <Link className="logo" href="/" onClick={() => setMenuOpen(false)} aria-label="StratSkye home">
          <img className="logo-image" src="/images/Logo Container.png" alt="StratSkye" />
        </Link>
        <div className="nav-center">
          <span className="nav-location" title={locationLabel}>{locationLabel}</span>
          <div className="nav-separator" />
          <div className="nav-time">
            <Clock size={14} className="animate-pulse" />
            <span>{time}</span>
          </div>
        </div>
        <button
          type="button"
          className={`nav-menu ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-menu-stack" aria-hidden="true">
            <span className="nav-menu-line" />
            <span className="nav-menu-line" />
          </span>
        </button>
      </nav>

      <div id="site-menu" className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="menu-panel">
          <ul className="menu-list">
            {menuItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    className={`menu-link ${isActive ? "is-active" : ""}`}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <nav className="menu-social" aria-label="Social links">
            <ul className="menu-social-list">
              {socialItems.map((item) => (
                <li key={item.href}>
                  <Link className="menu-social-link" href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
