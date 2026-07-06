import { siteConfig } from "../data/site-config";

export function Schedule() {
  const { schedule } = siteConfig;

  return (
    <section id="schedule" className="section">
      <div className="container-narrow">
        <div className="section-header">
          <span className="section-eyebrow">Grand Finale · 14 November 2026</span>
          <h2 className="section-heading">Finale Day Schedule</h2>
        </div>

        <div className="schedule-list">
          {schedule.map((item, i) => (
            <div
              key={i}
              className={`schedule-item ${i < schedule.length - 1 ? "schedule-item-border" : ""}`}
            >
              <div className="schedule-time">{item.time}</div>
              <div>
                <div className="schedule-activity">{item.activity}</div>
                <div className="schedule-detail">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
