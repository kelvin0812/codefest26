import { siteConfig } from "../data/site-config";

export function Timeline() {
  const { phases } = siteConfig;

  return (
    <section id="timeline" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Competition Phases</span>
          <h2 className="section-heading">Your Path to the Grand Finale</h2>
        </div>

        <div className="phases-grid">
          {phases.map((phase) => (
            <div key={phase.number} className="phase-card">
              <div className="phase-number">{phase.number}</div>
              <h3 className="phase-name">{phase.name}</h3>
              <div className="phase-date">{phase.date}</div>
              <p className="phase-desc">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
