"use client";

import { Arch } from "./Arch";
import { siteConfig } from "../data/site-config";

export function RegisterCTA() {
  const { event } = siteConfig;

  return (
    <section id="register" className="hero-bg section register-section">
      <div className="arch-cta arch-float-slow">
        <Arch size={500} strokeColor="#1a1f6e" />
      </div>

      <div className="container-narrow register-content">
        <span className="register-badge">
          Registration Opens 10 August 2026
        </span>
        <h2 className="register-heading">
          Ready to Build Something<br />That Actually Matters?
        </h2>
        <p className="register-desc">
          Assemble your team, register for {event.registrationFee.replace(" / team", "")}, and compete on a national stage at {event.university}.
        </p>
        <div className="register-actions">
          <a
            href="#"
            className="btn-primary"
            onMouseEnter={(e) => (e.currentTarget.style.background = "#243040")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1f6e")}
          >
            Register Your Team
          </a>
          <a href="#" className="btn-outline">Download Rulebook</a>
        </div>
      </div>
    </section>
  );
}
