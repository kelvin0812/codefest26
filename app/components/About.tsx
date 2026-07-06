import { Arch } from "./Arch";
import { siteConfig } from "../data/site-config";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          {/* Left content */}
          <div>
            <span className="section-eyebrow">About the Event</span>
            <h2 className="section-heading">{about.headline}</h2>
            <p className="about-text">
              <strong className="text-navy">SYNTECH</strong> {about.syntechDescription.replace("SYNTECH ", "")}
            </p>
            <p className="about-text">{about.eventDescription}</p>

            <div className="sdg-list">
              {about.sdgGoals.map(({ badge, text }) => (
                <div key={badge} className="sdg-item">
                  <span className="sdg-badge">{badge}</span>
                  <span className="sdg-text">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — past event card */}
          <div className="about-card-wrapper">
            <div className="about-card">
              <div className="about-card-arch">
                <Arch size={200} strokeColor="#1a1f6e" />
              </div>
              <div className="about-card-label">Past Success</div>
              <h3 className="about-card-title">{about.pastEvent.title}</h3>
              <p className="about-card-desc">{about.pastEvent.description}</p>
              <div className="about-card-stats">
                {about.pastEvent.stats.map(({ value, label }) => (
                  <div key={label} className="about-card-stat">
                    <div className="about-card-stat-value">{value}</div>
                    <div className="about-card-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
