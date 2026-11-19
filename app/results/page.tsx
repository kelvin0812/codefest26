import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: "Judging Results | UTP CodeFest '26",
  description: "Teams can view their CodeFest '26 judging scoresheets for the Preliminary Round and the Grand Finale.",
};

export default function ResultsPage() {
  return (
    <>
      <SiteNav />

      {/* ── HERO ── */}
      <section className="hero-bg" style={{ padding: "136px 24px 136px", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 2, maxWidth: "40rem", margin: "0 auto" }}>
          <span className="register-badge">Judging Results</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#1a1f6e", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px" }}>
            See How the Judges Scored Your Team
          </h1>
          <p style={{ color: "rgba(255,255,255,0.92)", lineHeight: 1.75, fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
            Every judge&apos;s scoresheet from the Preliminary Round, plus the Grand Finale for finalists. Only your team can open your folder.
          </p>
        </div>
      </section>

      {/* ── LOOKUP ── */}
      <main style={{ flex: 1, background: "#f0fdfb", padding: "0 16px 96px" }}>
        <ResultsClient />
      </main>

      <SiteFooter />
    </>
  );
}
