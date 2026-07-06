import { siteConfig } from "../data/site-config";

export function Prizes() {
  const { prizes } = siteConfig;

  return (
    <section id="prizes" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Prizes & Recognition</span>
          <h2 className="section-heading">Win Big, Build Bigger</h2>
        </div>

        {/* Main prizes */}
        <div className="prizes-podium">
          <div className="prize-runner">
            <div className="prize-emoji">🥈</div>
            <div className="prize-place">2nd Place</div>
            <div className="prize-amount">{prizes.second.amount}</div>
            <div className="prize-extras">{prizes.second.extras}</div>
          </div>

          <div className="prize-first">
            <div className="prize-emoji-lg">🏆</div>
            <div className="prize-champion-label">Champion</div>
            <div className="prize-champion-amount">{prizes.champion.amount}</div>
            <div className="prize-champion-extras">{prizes.champion.extras}</div>
          </div>

          <div className="prize-third">
            <div className="prize-emoji">🥉</div>
            <div className="prize-place prize-place-navy">3rd Place</div>
            <div className="prize-amount">{prizes.third.amount}</div>
            <div className="prize-extras">{prizes.third.extras}</div>
          </div>
        </div>

        {/* Supplementary prizes */}
        <div className="prizes-extra">
          <div className="prize-extra-card prize-extra-choice">
            <div className="prize-extra-emoji">❤️</div>
            <div className="prize-extra-title">People&apos;s Choice</div>
            <div className="prize-extra-amount">{prizes.peoplesChoice.amount}</div>
          </div>
          <div className="prize-extra-card prize-extra-cert">
            <div className="prize-extra-emoji">📜</div>
            <div>
              <div className="prize-extra-title">Certificate of Participation</div>
              <div className="prize-extra-desc">
                Awarded to all teams who complete the full competition cycle
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
