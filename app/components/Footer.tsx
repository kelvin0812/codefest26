import Image from "next/image";
import { siteConfig } from "../data/site-config";

export function Footer() {
  const { navigation, footer, event } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <Image
                src="/logo.png"
                alt="CodeFest '26 Logo"
                width={40}
                height={40}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="footer-brand-text">
                CODEFEST <span className="accent-green">&apos;26</span>
              </span>
            </div>
            <p className="footer-desc">
              {event.tagline}. A national-level coding competition by {event.organizer} at UTP.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-heading">Quick Links</div>
            {navigation.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
                {link}
              </a>
            ))}
          </div>

          {/* Organisers */}
          <div>
            <div className="footer-heading">Organisers</div>
            {footer.organisers.map((org) => (
              <div key={org} className="footer-org">{org}</div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 CodeFest &apos;26 · {event.organizer} · {event.university}
          </div>
          <div className="footer-address">{event.address}</div>
        </div>
      </div>
    </footer>
  );
}
