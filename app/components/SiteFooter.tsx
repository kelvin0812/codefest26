"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, sectionHref } from "./navLinks";

/* `home` is true on the homepage, where quick links stay as in-page "#anchors" */
export default function SiteFooter({ home = false }: { home?: boolean }) {
  return (
    <footer style={{ background: "#0a2a2a", color: "#fff", padding: "56px 24px 32px" }}>
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <Image src="/logo.png" alt="CodeFest '26 Logo" width={40} height={40} style={{ filter: "brightness(0) invert(1)" }} />
              <span style={{ fontWeight: 900, fontSize: "1.1rem", fontFamily: "'Mokoto', monospace" }}>
                CODEFEST <span style={{ color: "#00e5a0" }}>&apos;26</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontSize: "0.875rem", maxWidth: "280px" }}>
              Innovating for the People, by the People. A national-level coding competition by SYNTECH Organization at UTP.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "20px" }}>
              {/* CodeFest IG */}
              <a href="https://www.instagram.com/codefestsyntech?igsh=emNhNG9xNTJreWNh" target="_blank" rel="noopener noreferrer" title="CodeFest Instagram" style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.1 4.1 0 011.522.99 4.1 4.1 0 01.99 1.522c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.1 4.1 0 01-.99 1.522 4.1 4.1 0 01-1.522.99c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.1 4.1 0 01-1.522-.99 4.1 4.1 0 01-.99-1.522c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.1 4.1 0 01.99-1.522 4.1 4.1 0 011.522-.99c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a6.27 6.27 0 00-2.265 1.474A6.27 6.27 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.151.558 2.913a6.27 6.27 0 001.474 2.265 6.27 6.27 0 002.265 1.474c.762.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.151-.261 2.913-.558a6.27 6.27 0 002.265-1.474 6.27 6.27 0 001.474-2.265c.297-.762.5-1.635.558-2.913C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.151-.558-2.913a6.27 6.27 0 00-1.474-2.265A6.27 6.27 0 0019.86.63C19.098.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
                <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>utp_codefest</span>
              </a>
              {/* SYNTECH IG */}
              <a href="https://www.instagram.com/utpsyntech?igsh=MTFvbzlnOXNxeXZzMQ==" target="_blank" rel="noopener noreferrer" title="SYNTECH Instagram" style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.1 4.1 0 011.522.99 4.1 4.1 0 01.99 1.522c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.1 4.1 0 01-.99 1.522 4.1 4.1 0 01-1.522.99c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.1 4.1 0 01-1.522-.99 4.1 4.1 0 01-.99-1.522c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.1 4.1 0 01.99-1.522 4.1 4.1 0 011.522-.99c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a6.27 6.27 0 00-2.265 1.474A6.27 6.27 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.151.558 2.913a6.27 6.27 0 001.474 2.265 6.27 6.27 0 002.265 1.474c.762.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.151-.261 2.913-.558a6.27 6.27 0 002.265-1.474 6.27 6.27 0 001.474-2.265c.297-.762.5-1.635.558-2.913C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.151-.558-2.913a6.27 6.27 0 00-1.474-2.265A6.27 6.27 0 0019.86.63C19.098.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
                <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>utpsyntech</span>
              </a>
              {/* SYNTECH LinkedIn */}
              <a href="https://www.linkedin.com/company/syntech-organization/" target="_blank" rel="noopener noreferrer" title="SYNTECH LinkedIn" style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>UTP SYNTECH Organisation</span>
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.45, marginBottom: "16px" }}>Quick Links</div>
            {NAV_LINKS.map((link) => (
              <a key={link} href={sectionHref(link, home)} style={{ display: "block", color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "10px", fontSize: "0.875rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00e5a0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
                {link}
              </a>
            ))}
            <Link href="/results" style={{ display: "block", color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "10px", fontSize: "0.875rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00e5a0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
              Results
            </Link>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.45, marginBottom: "16px" }}>Organisers</div>
            {["SYNTECH Organization", "Department of Computing (DC)", "Student Affairs (SA)", "YUTP"].map((org) => (
              <div key={org} style={{ color: "rgba(255,255,255,0.55)", marginBottom: "10px", fontSize: "0.875rem" }}>{org}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>© 2026 CodeFest &apos;26 · SYNTECH Organization · Universiti Teknologi PETRONAS</div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>32610 Bandar Seri Iskandar, Perak, Malaysia</div>
        </div>
      </div>
    </footer>
  );
}
