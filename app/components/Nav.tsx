"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface NavProps {
  links: readonly string[];
}

export function Nav({ links }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? "nav-scrolled shadow-lg" : "nav-blur"}`}>
      <div className="nav-inner">
        <div className="nav-brand">
          <Image
            src="/logo.png"
            alt="CodeFest '26 Logo"
            width={36}
            height={36}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="nav-brand-text">
            CODEFEST <span className="accent-green">&apos;26</span>
          </span>
        </div>

        <div className="nav-links">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <a href="#register" className="nav-cta">
          Register Now
        </a>
      </div>
    </nav>
  );
}
