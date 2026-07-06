"use client";

import Image from "next/image";
import { Arch } from "./Arch";
import { CountdownTimer } from "./Countdown";
import { siteConfig } from "../data/site-config";

export function Hero() {
  const { event, stats } = siteConfig;

  return (
    <section className="hero-bg hero-section">
      {/* Decorative arches */}
      <div className="arch-top-right arch-float-slow">
        <Arch size={300} strokeColor="#2e3491" />
      </div>
      <div className="arch-bottom-left arch-float">
        <Arch size={420} strokeColor="#2e3491" />
      </div>

      <div className="container hero-content">
        {/* Top label */}
        <div className="hero-org-label">
          <Image
            src="/logo.png"
            alt="CodeFest '26 Logo"
            width={48}
            height={48}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="hero-org-text">{event.organizer}</span>
        </div>

        <div className="hero-grid">
          {/* Left column */}
          <div>
            <div className="hero-title">CODEFEST</div>
            <div className="hero-year">
              <span>2</span>
              <span className="hero-year-circle">
                <span className="hero-year-dot" />
              </span>
              <span>26</span>
            </div>

            <div className="hero-badge">National Coding Competition</div>

            <p className="hero-description">
              {event.description}
              <br /><br />
              <em className="hero-tagline">
                &ldquo;{event.tagline}&rdquo;
              </em>
            </p>

            <div className="hero-actions">
              <a href="#register" className="btn-primary">Register Now →</a>
              <a href="#about" className="btn-outline">Learn More</a>
            </div>

            {/* Info chips */}
            <div className="hero-chips">
              {[
                { icon: "📅", text: event.dateRange },
                { icon: "📍", text: event.location },
                { icon: "💰", text: event.registrationFee },
              ].map(({ icon, text }) => (
                <span key={text} className="chip">
                  {icon} {text}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — countdown + stats */}
          <div className="hero-right">
            <CountdownTimer targetDate={event.registrationOpenDate} />

            <div className="stats-grid">
              {stats.map(({ value, label }) => (
                <div key={label} className="stat-box">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
