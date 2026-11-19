"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, sectionHref } from "./navLinks";

/* `home` is true on the homepage, where section links stay as in-page "#anchors" */
export default function SiteNav({ home = false }: { home?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onResults = !home;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "nav-scrolled shadow-lg" : "nav-blur"}`}>
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }} aria-label="CodeFest '26 home">
          <Image src="/logo.png" alt="CodeFest '26 Logo" width={36} height={36} style={{ filter: "brightness(0) invert(1)" }} />
          <span style={{ fontWeight: 800, color: "#fff", fontSize: "1rem", letterSpacing: "-0.01em", textShadow: "0 1px 4px rgba(0,0,0,0.2)", fontFamily: "'Mokoto', monospace" }}>
            CODEFEST <span style={{ color: "#00e5a0" }}>&apos;26</span>
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-7 text-sm font-medium">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={sectionHref(item, home)}
              style={{ textDecoration: "none", color: "rgba(255,255,255,0.85)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00e5a0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Results stays visible in the bar at every width */}
          <Link
            href="/results"
            aria-current={onResults ? "page" : undefined}
            className="text-sm mr-1 sm:mr-3"
            style={{ textDecoration: "none", color: onResults ? "#fff" : "rgba(255,255,255,0.85)", fontWeight: 700, transition: "color 0.2s", textShadow: "0 1px 4px rgba(0,0,0,0.15)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00e5a0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = onResults ? "#fff" : "rgba(255,255,255,0.85)")}
          >
            Results
          </Link>

          <a
            href={home ? "#winners" : "/#winners"}
            onClick={() => setMenuOpen(false)}
            className="hidden sm:inline-block"
            style={{
              background: "#1a1f6e",
              color: "#fff",
              padding: "9px 22px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "background 0.2s",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#00c4cc")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1f6e")}
          >
            See Winners
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="xl:hidden flex flex-col"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", gap: "5px" }}
          >
            <span style={{ width: "22px", height: "2px", background: "#fff", transition: "transform 0.2s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ width: "22px", height: "2px", background: "#fff", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ width: "22px", height: "2px", background: "#fff", transition: "transform 0.2s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="xl:hidden flex flex-col" style={{ background: "rgba(0, 60, 80, 0.97)", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "8px 24px 20px" }}>
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={sectionHref(item, home)}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: "none", color: "rgba(255,255,255,0.9)", padding: "12px 0", fontSize: "1rem", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {item}
            </a>
          ))}
          <Link
            href="/results"
            onClick={() => setMenuOpen(false)}
            aria-current={onResults ? "page" : undefined}
            style={{ textDecoration: "none", color: "#00e5a0", padding: "12px 0", fontSize: "1rem", fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            Results
          </Link>
          <a
            href={home ? "#winners" : "/#winners"}
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: "16px", background: "#1a1f6e", color: "#fff", padding: "12px 22px", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", textAlign: "center" }}
          >
            See Winners
          </a>
        </div>
      )}
    </nav>
  );
}
