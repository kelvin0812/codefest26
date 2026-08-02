"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

/* ── Arch SVG ── */
function Arch({ size = 260, strokeColor = "#2e3491", className = "" }: { size?: number; strokeColor?: string; className?: string }) {
  const count = 7;
  const gap = size / (count * 2.8);
  return (
    <svg width={size} height={size * 0.62} viewBox={`0 0 ${size} ${size * 0.62}`} fill="none" className={className} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const offset = i * gap;
        const rx = (size - offset * 2) / 2;
        const top = offset + rx;
        return (
          <path
            key={i}
            d={`M ${offset} ${size * 0.62} L ${offset} ${top} A ${rx} ${rx} 0 0 1 ${size - offset} ${top} L ${size - offset} ${size * 0.62}`}
            stroke={strokeColor}
            strokeWidth={2.2}
            fill="none"
          />
        );
      })}
    </svg>
  );
}

/* ── Countdown ── */
function useCountdown(targetMs: number) {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const tick = () => setDiff(Math.max(0, targetMs - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="countdown-box">
      <div className="countdown-num">{String(value).padStart(2, "0")}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );
}

/* ── Nav ── */
function Nav({ onRegister }: { onRegister: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled shadow-lg" : "nav-blur"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="CodeFest '26 Logo" width={36} height={36} style={{ filter: "brightness(0) invert(1)" }} />
          <span style={{ fontWeight: 800, color: "#fff", fontSize: "1rem", letterSpacing: "-0.01em", textShadow: "0 1px 4px rgba(0,0,0,0.2)", fontFamily: "'Mokoto', monospace" }}>
            CODEFEST <span style={{ color: "#00e5a0" }}>&apos;26</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["About", "Timeline", "Prizes", "Schedule", "Workshops", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ textDecoration: "none", color: "rgba(255,255,255,0.85)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00e5a0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#register"
          onClick={(e) => { e.preventDefault(); onRegister(); }}
          style={{
            background: "#1a1f6e",
            color: "#fff",
            padding: "9px 22px",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "0.85rem",
            textDecoration: "none",
            transition: "background 0.2s",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#00c4cc")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1f6e")}
        >
          Register Now
        </a>
      </div>
    </nav>
  );
}

/* ── Registration Modal ── */
function RegModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff", borderRadius: "20px", padding: "48px 40px",
          maxWidth: "440px", width: "100%", textAlign: "center",
          boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "none", border: "none", cursor: "pointer",
            fontSize: "1.4rem", color: "#999", lineHeight: 1,
          }}
        >×</button>

        {/* Icon */}
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📅</div>

        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1a1f6e", marginBottom: "12px" }}>
          Registration Opening Soon
        </h3>
        <p style={{ color: "#555", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: "28px" }}>
          Registration for CodeFest &apos;26 will open on{" "}
          <strong style={{ color: "#1a1f6e" }}>7th August 2026</strong>.
          <br />Stay tuned — we&apos;ll see you there!
        </p>

        <div style={{
          display: "inline-block",
          background: "linear-gradient(135deg, #00c4cc, #00e5a0)",
          color: "#1a1f6e", fontWeight: 800, fontSize: "1rem",
          padding: "10px 28px", borderRadius: "100px",
          letterSpacing: "0.02em",
        }}>
          7 August 2026
        </div>

        <div style={{ marginTop: "24px" }}>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "2px solid #d0f5f0", borderRadius: "8px",
              padding: "9px 24px", color: "#009999", fontWeight: 600,
              fontSize: "0.88rem", cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#f0fdfb"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

const REGISTRATION_OPEN_MS = new Date("2026-08-10T00:00:00").getTime();

/* ── Workshop Carousel ── */
const workshops = [
  { num: "01", title: "Workshop 1", desc: "Details coming soon" },
  { num: "02", title: "Workshop 2", desc: "Details coming soon" },
  { num: "03", title: "Workshop 3", desc: "Details coming soon" },
  { num: "04", title: "Workshop 4", desc: "Details coming soon" },
  { num: "05", title: "Workshop 5", desc: "Details coming soon" },
];

function WorkshopCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? workshops.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === workshops.length - 1 ? 0 : c + 1));

  const ws = workshops[current];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "24px", justifyContent: "center" }}>
      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous workshop"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "2px solid #00c4cc",
          background: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#00c4cc"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#1a1f6e"; }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Card */}
      <div style={{
        flex: 1,
        maxWidth: "520px",
        background: "#fff",
        border: "2px solid rgba(0,196,204,0.3)",
        borderRadius: "20px",
        padding: "48px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s",
        boxShadow: "0 8px 32px rgba(0, 196, 204, 0.12)",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "5px", background: "linear-gradient(90deg, #00c4cc, #00e5a0)", borderRadius: "20px 20px 0 0" }} />
        <div style={{ fontSize: "4rem", fontWeight: 900, color: "#d0f7f3", lineHeight: 1, marginBottom: "16px", letterSpacing: "-0.04em" }}>{ws.num}</div>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1a1f6e", marginBottom: "10px" }}>{ws.title}</h3>
        <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.75 }}>{ws.desc}</p>

        {/* Dots indicator */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "28px" }}>
          {workshops.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to workshop ${i + 1}`}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "100px",
                border: "none",
                background: i === current ? "#00c4cc" : "#d0f5f0",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next workshop"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "2px solid #00c4cc",
          background: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#00c4cc"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#1a1f6e"; }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

/* ── FAQ Accordion Item ── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="faq-item">
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "20px 0",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "1rem",
          color: isOpen ? "#008a8a" : "#1a1f6e",
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          textAlign: "left",
          transition: "color 0.3s ease",
        }}
      >
        <span>{question}</span>
        <span
          style={{
            fontSize: "1.3rem",
            color: "#00c4cc",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.3s ease",
          maxHeight: isOpen ? `${height}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="faq-body">
          {answer}
        </div>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function Page() {
  const [showRegModal, setShowRegModal] = useState(false);
  const countdown = useCountdown(REGISTRATION_OPEN_MS);

  const phases = [
    { num: "01", name: "Registration", date: "10 Aug – 19 Sep 2026", desc: "Form your team of 3–4 and sign up via the online portal. All Malaysian universities welcome." },
    { num: "02", name: "Development & Submission", date: "20 Sep – 21 Oct 2026", desc: "Build your working prototype or MVP addressing a real societal challenge. Submit all files by 21 Oct." },
    { num: "03", name: "Project Assessment", date: "22 – 28 Oct 2026", desc: "Judges evaluate submissions on creativity, technical skill, and real-world impact. Top teams proceed." },
    { num: "04", name: "Grand Finale", date: "14 Nov 2026 · Nadi@UTP", desc: "Selected finalists pitch live to industry judges. Winners announced at the award ceremony." },
  ];

  const schedule = [
    { time: "9:00 am", activity: "Arrival & Booth Setup", detail: "Finalists arrive and set up project booths" },
    { time: "10:00 am", activity: "Public Exhibition", detail: "Open to students & public — live demos" },
    { time: "11:30 am", activity: "Opening Ceremony", detail: "Judge introductions & pitching briefing" },
    { time: "12:15 pm", activity: "Lunch & Networking", detail: "Judges, guests & participants mingle" },
    { time: "1:30 pm", activity: "Final Pitching Session", detail: "Top teams present on stage to judges" },
    { time: "4:00 pm", activity: "Judges' Deliberation", detail: "Final scoring while closing video plays" },
    { time: "4:30 pm", activity: "Award Ceremony", detail: "Winners announced & prizes presented" },
    { time: "5:00 pm", activity: "Wrap-Up", detail: "Group photo & event close" },
  ];

  const faqs = [
    { q: "Who can participate in CodeFest '26?", a: "All undergraduate students from any Malaysian university. Teams must consist of 3 to 4 members." },
    { q: "What is the registration fee?", a: "RM 30 per team. Registration opens on 10 August 2026 via our online portal." },
    { q: "What kind of projects are expected?", a: "Functional prototypes or MVPs addressing societal challenges using AI, cloud computing, cybersecurity, or software engineering." },
    { q: "Is the competition fully online?", a: "Preliminary phases are online. The Grand Finale on 14 November 2026 is a physical event at Nadi@UTP, Universiti Teknologi PETRONAS." },
    { q: "What do winners receive?", a: "1st place RM 1,000 · 2nd place RM 700 · 3rd place RM 500 · People's Choice RM 100. All finishers receive a Certificate of Participation." },
    { q: "Who organizes CodeFest '26?", a: "SYNTECH Organization at UTP, co-organised by the Department of Computing (DC), supported by Student Affairs (SA) and YUTP." },
    { q: "When is the track and rulebook will be released?", a: "Rulebook and track details will be released after the registration phase." },
  ];

  return (
    <>
      {showRegModal && <RegModal onClose={() => setShowRegModal(false)} />}
      <Nav onRegister={() => setShowRegModal(true)} />

      {/* ── HERO ── */}
      <section className="hero-bg" style={{ paddingTop: "88px", paddingBottom: "80px", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Top-right arch */}
        <div style={{ position: "absolute", top: -20, right: -50, opacity: 0.9, zIndex: 1 }} className="arch-float-slow">
          <Arch size={300} strokeColor="#2e3491" />
        </div>
        {/* Bottom-left arch */}
        <div style={{ position: "absolute", bottom: -80, left: -60, opacity: 0.85, zIndex: 1 }} className="arch-float">
          <Arch size={420} strokeColor="#2e3491" />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full" style={{ position: "relative", zIndex: 2 }}>
          {/* Top label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <Image src="/logo.png" alt="CodeFest '26 Logo" width={48} height={48} style={{ filter: "brightness(0) invert(1)" }} />
            <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              SYNTECH ORGANISATION
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            {/* Left */}
            <div>
              {/* CODEFEST — tech style */}
              <div style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "0.08em",
                lineHeight: 1,
                textTransform: "uppercase",
                fontFamily: "'Mokoto', 'Courier New', monospace",
                textShadow: "0 2px 16px rgba(0,0,0,0.15)",
                marginBottom: "0",
              }}>
                CODEFEST
              </div>

              {/* 2026 with ⊙ */}
              <div style={{
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                fontWeight: 900,
                color: "#1a1f6e",
                letterSpacing: "0.06em",
                lineHeight: 1,
                fontFamily: "'Mokoto', 'Courier New', monospace",
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}>
                <span>20</span>


                <span>26</span>
              </div>

              {/* Programming Event banner */}
              <div style={{
                display: "inline-block",
                background: "#243040",
                color: "#fff",
                fontWeight: 600,
                fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
                letterSpacing: "0.05em",
                padding: "10px 20px",
                marginBottom: "32px",
              }}>
                UTP Annual Hackathon 1st Edition
              </div>

              <p style={{ color: "rgba(255,255,255,0.92)", lineHeight: 1.75, fontSize: "1.05rem", marginBottom: "36px", maxWidth: "420px" }}>
                This intervarsity coding competition invites university students to develop innovative digital solutions. Your mission is to build a website or app that solves real societal problems.
                <br /><br />
                <em style={{ fontStyle: "normal", fontWeight: 700, color: "#1a1f6e" }}>
                  &ldquo;Innovating for the People, by the People&rdquo;
                </em>
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}>
                <a href="#register" onClick={(e) => { e.preventDefault(); setShowRegModal(true); }} className="btn-primary">Register Now →</a>
                <a href="#about" className="btn-outline">Learn More</a>
              </div>

              {/* Chips */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { icon: "📅", text: "10 Aug – 14 Nov 2026" },
                  { icon: "📍", text: "Nadi@UTP, UTP" },
                  { icon: "💰", text: "RM 30 / team" },
                ].map(({ icon, text }) => (
                  <span key={text} style={{ background: "rgba(26,31,110,0.75)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "100px", padding: "7px 16px", fontSize: "0.8rem", fontWeight: 600, backdropFilter: "blur(8px)" }}>
                    {icon} {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — countdown + stats */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "12px" }}>
                  Registration Opens In
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <CountdownBox value={countdown.days} label="Days" />
                  <CountdownBox value={countdown.hours} label="Hours" />
                  <CountdownBox value={countdown.minutes} label="Mins" />
                  <CountdownBox value={countdown.seconds} label="Secs" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", width: "100%" }}>
                {[
                  { val: "Coming Soon", sub: "Total Prize Pool" },
                  { val: "30 Teams", sub: "Max Capacity" },
                  { val: "3 Months", sub: "Competition Duration" },
                  { val: "National", sub: "Level Competition" },
                ].map(({ val, sub }) => (
                  <div key={sub} className="stat-box">
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.02em" }}>{val}</div>
                    <div style={{ fontSize: "0.72rem", opacity: 0.65, marginTop: "4px", fontWeight: 500 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: "#f0fdfb", padding: "96px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <span className="section-eyebrow">About the Event</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1f6e", lineHeight: 1.2, marginBottom: "20px", letterSpacing: "-0.02em" }}>
                Where Code Meets Community
              </h2>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
                <strong style={{ color: "#1a1f6e" }}>SYNTECH Organization</strong> is a student-led technology club at Universiti Teknologi PETRONAS dedicated to bridging the gap between academic theory and industry practice. Our mission is to transform curiosity into impactful technology through hands-on experience and holistic leadership.
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "32px" }}>
                CodeFest &apos;26 is our flagship intervarsity coding competition organized under the theme "Innovating for the People, by the People". This initiative serves as a high-impact platform for university students across Malaysia to sharpen their technical expertise by developing a website or app that addresses specific societal challenges. Participants will also have the opportunity to engage directly with industry leaders in fields such as artificial intelligence, software engineering, and cybersecurity through corporate exhibitions and specialized workshops.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { sdg: "SDG 9", text: "Drive human-centric technical innovation" },
                  { sdg: "SDG 4 & 8", text: "Bridge academic theory with industry practice" },
                  { sdg: "SDG 17", text: "Cultivate future-ready entrepreneurial leadership" },
                ].map(({ sdg, text }) => (
                  <div key={sdg} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <span style={{ background: "linear-gradient(135deg,#00c4cc,#00e5a0)", color: "#1a1f6e", fontSize: "0.65rem", fontWeight: 800, padding: "4px 10px", borderRadius: "6px", flexShrink: 0, marginTop: "2px" }}>{sdg}</span>
                    <span style={{ color: "#444", fontWeight: 500 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ background: "linear-gradient(140deg, #00c4cc 0%, #00e5a0 100%)", borderRadius: "24px", color: "#1a1f6e", width: "100%", maxWidth: "380px", position: "relative", overflow: "hidden" }}>
                {/* Group photo */}
                <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                  <Image
                    src="/hackathon-group.jpeg"
                    alt="Secure Nex Hackathon 2025 — Group photo at Nadi@UTP"
                    width={380}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                {/* Card content */}
                <div style={{ padding: "32px 40px 48px", position: "relative" }}>
                  <div style={{ position: "absolute", bottom: -40, right: -40, opacity: 0.2 }}>
                    <Arch size={200} strokeColor="#1a1f6e" />
                  </div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.65, marginBottom: "12px" }}>Past Success</div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "16px", lineHeight: 1.3 }}>Secure Nex Hackathon 2025</h3>
                  <p style={{ opacity: 0.85, lineHeight: 1.75, fontSize: "0.9rem", marginBottom: "24px" }}>
                    Organized with PETRONAS, UTP &amp; CeRDaS. 15–16 Nov 2025. Top 10 teams competed in a high-stakes Grand Finale at Nadi@UTP.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {[{ v: "10", l: "Finalist Teams" }, { v: "2 Days", l: "Intensive Event" }].map(({ v, l }) => (
                      <div key={l} style={{ background: "rgba(26,31,110,0.12)", borderRadius: "10px", padding: "14px 16px" }}>
                        <div style={{ fontSize: "1.3rem", fontWeight: 800 }}>{v}</div>
                        <div style={{ fontSize: "0.72rem", opacity: 0.7, marginTop: "2px" }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section id="timeline" style={{ padding: "96px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-eyebrow">Competition Phases</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1f6e", letterSpacing: "-0.02em" }}>
              Your Journey to the Finale
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {phases.map((p) => (
              <div key={p.num} className="phase-card">
                <div style={{ fontSize: "3rem", fontWeight: 900, color: "#d0f7f3", lineHeight: 1, marginBottom: "12px", letterSpacing: "-0.04em" }}>{p.num}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1a1f6e", marginBottom: "6px" }}>{p.name}</h3>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#009999", marginBottom: "12px" }}>{p.date}</div>
                <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIZES ── */}
      <section id="prizes" style={{ background: "#f0fdfb", padding: "96px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-eyebrow">Prizes & Recognition</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1f6e", letterSpacing: "-0.02em" }}>
              Win Big, Build Bigger
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: "20px", alignItems: "center", maxWidth: "780px", margin: "0 auto" }}>
            <div className="prize-runner">
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🥈</div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#009999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>2nd Place</div>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#1a1f6e", letterSpacing: "-0.03em" }}>Coming Soon</div>
              <div style={{ fontSize: "0.8rem", color: "#666", marginTop: "8px" }}>+ Certificate</div>
            </div>
            <div className="prize-first">
              <div style={{ fontSize: "2.4rem", marginBottom: "14px" }}>🏆</div>
              <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75, marginBottom: "8px" }}>Champion</div>
              <div style={{ fontSize: "3.2rem", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }}>Coming Soon</div>
              <div style={{ fontSize: "0.8rem", marginTop: "10px", opacity: 0.75 }}>+ Plaque + Certificate</div>
            </div>
            <div className="prize-third">
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🥉</div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1a1f6e", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>3rd Place</div>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#1a1f6e", letterSpacing: "-0.03em" }}>Coming Soon</div>
              <div style={{ fontSize: "0.8rem", color: "#666", marginTop: "8px" }}>+ Certificate</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", maxWidth: "780px", margin: "28px auto 0" }}>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #b2eee9", borderRadius: "14px", padding: "24px", textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>❤️</div>
              <div style={{ fontWeight: 700, color: "#1a1f6e", marginBottom: "4px" }}>People&apos;s Choice</div>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#009999" }}>Coming Soon</div>
            </div>
            <div style={{ flex: 2, background: "#fff", border: "1px solid #b2eee9", borderRadius: "14px", padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ fontSize: "2rem" }}>📜</div>
              <div>
                <div style={{ fontWeight: 700, color: "#1a1f6e", marginBottom: "4px" }}>Certificate of Participation</div>
                <div style={{ fontSize: "0.85rem", color: "#666" }}>Awarded to all teams who complete the full hackathon cycle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section id="schedule" style={{ padding: "96px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-eyebrow">Grand Finale · 14 November 2026</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1f6e", letterSpacing: "-0.02em" }}>Day of the Finale</h2>
          </div>
          <div>
            {schedule.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "24px", padding: "24px 0", borderBottom: i < schedule.length - 1 ? "1px solid #d0f7f3" : "none", alignItems: "flex-start" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#009999", paddingTop: "2px" }}>{item.time}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#1a1f6e", marginBottom: "4px" }}>{item.activity}</div>
                  <div style={{ fontSize: "0.875rem", color: "#666" }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKSHOPS ── */}
      <section id="workshops" style={{ background: "#f0fdfb", padding: "96px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-eyebrow">Hands-On Learning</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1f6e", letterSpacing: "-0.02em" }}>
              Workshops
            </h2>
            <p style={{ color: "#666", maxWidth: "540px", margin: "16px auto 0", lineHeight: 1.75 }}>
              Sharpen your skills with 5 expert-led workshops designed to prepare you for the competition and beyond.
            </p>
          </div>
          <WorkshopCarousel />
        </div>
      </section>

      {/* ── REGISTER CTA ── */}
      <section id="register" className="hero-bg" style={{ padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -100, opacity: 0.25, zIndex: 1 }} className="arch-float-slow">
          <Arch size={500} strokeColor="#1a1f6e" />
        </div>
        <div className="max-w-3xl mx-auto" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span style={{ display: "inline-block", background: "rgba(26,31,110,0.2)", color: "#fff", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "100px", marginBottom: "20px", border: "1px solid rgba(255,255,255,0.3)" }}>
            Registration Opens 10 August 2026
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px", lineHeight: 1.15 }}>
            Ready to Build Something<br />That Matters?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75, fontSize: "1.05rem", marginBottom: "40px", maxWidth: "520px", margin: "0 auto 40px" }}>
            Form your team, register for RM 30, and compete on a national stage at Universiti Teknologi PETRONAS.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowRegModal(true); }} style={{ background: "#1a1f6e", color: "#fff", padding: "14px 36px", borderRadius: "8px", fontWeight: 800, fontSize: "1rem", textDecoration: "none", transition: "background 0.2s", display: "inline-block" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#243040")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1f6e")}>
              Register Your Team
            </a>
            {/* <a href="#" className="btn-outline">Download Rulebook</a>  */}
          </div>
        </div>
      </section>

      {/* ── COLLABORATORS ──
      <section id="collaborators" style={{ background: "#f0fdfb", padding: "96px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-eyebrow">Our Partners</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1f6e", letterSpacing: "-0.02em" }}>
              Collaborators
            </h2>
            <p style={{ color: "#666", maxWidth: "540px", margin: "16px auto 0", lineHeight: 1.75 }}>
              Organizations and institutions who make CodeFest &apos;26 possible.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px", alignItems: "center" }}>
            {["Collaborator 1", "Collaborator 2", "Collaborator 3", "Collaborator 4", "Collaborator 5"].map((name) => (
              <div key={name} style={{ background: "#fff", border: "1px solid #b2eee9", borderRadius: "16px", padding: "32px 48px", textAlign: "center", minWidth: "180px" }}>
                <div style={{ width: "80px", height: "80px", background: "#e8f9f7", borderRadius: "12px", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.75rem", color: "#999", fontWeight: 600 }}>Logo</span>
                </div>
                <div style={{ fontWeight: 700, color: "#1a1f6e", fontSize: "0.9rem" }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* <section id="sponsors" style={{ padding: "96px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-eyebrow">Backed By The Best</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1f6e", letterSpacing: "-0.02em" }}>
              Sponsors
            </h2>
          </div> */}

      {/* Gold
          <div style={{ marginBottom: "48px" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)", color: "#1a1f6e", fontSize: "0.72rem", fontWeight: 800, padding: "6px 18px", borderRadius: "100px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                🥇 Gold Sponsors
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
              {["Gold Sponsor 1"].map((name) => (
                <div key={name} style={{ background: "#fff", border: "2px solid #FFD700", borderRadius: "16px", padding: "36px 56px", textAlign: "center", minWidth: "200px" }}>
                  <div style={{ width: "100px", height: "100px", background: "#fffbe6", borderRadius: "12px", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.75rem", color: "#999", fontWeight: 600 }}>Logo</span>
                  </div>
                  <div style={{ fontWeight: 700, color: "#1a1f6e", fontSize: "0.95rem" }}>{name}</div>
                </div>
              ))}
            </div>
          </div> */}

      {/* Silver
          <div style={{ marginBottom: "48px" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{ background: "linear-gradient(135deg, #C0C0C0, #A0A0A0)", color: "#fff", fontSize: "0.72rem", fontWeight: 800, padding: "6px 18px", borderRadius: "100px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                🥈 Silver Sponsors
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
              {["Silver Sponsor 1", "Silver Sponsor 2"].map((name) => (
                <div key={name} style={{ background: "#fff", border: "2px solid #C0C0C0", borderRadius: "16px", padding: "28px 44px", textAlign: "center", minWidth: "180px" }}>
                  <div style={{ width: "80px", height: "80px", background: "#f5f5f5", borderRadius: "12px", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.75rem", color: "#999", fontWeight: 600 }}>Logo</span>
                  </div>
                  <div style={{ fontWeight: 700, color: "#1a1f6e", fontSize: "0.9rem" }}>{name}</div>
                </div>
              ))}
            </div>
          </div> */}

      {/* Bronze */}
      {/* <div>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{ background: "linear-gradient(135deg, #CD7F32, #A0522D)", color: "#fff", fontSize: "0.72rem", fontWeight: 800, padding: "6px 18px", borderRadius: "100px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                🥉 Bronze Sponsors
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
              {["Bronze Sponsor 1", "Bronze Sponsor 2", "Bronze Sponsor 3"].map((name) => (
                <div key={name} style={{ background: "#fff", border: "2px solid #CD7F32", borderRadius: "16px", padding: "24px 36px", textAlign: "center", minWidth: "160px" }}>
                  <div style={{ width: "64px", height: "64px", background: "#fdf5ee", borderRadius: "12px", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.75rem", color: "#999", fontWeight: 600 }}>Logo</span>
                  </div>
                  <div style={{ fontWeight: 700, color: "#1a1f6e", fontSize: "0.85rem" }}>{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "96px 24px" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-eyebrow">FAQ</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1f6e", letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0a2a2a", color: "#fff", padding: "56px 24px 32px" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "40px", marginBottom: "48px" }}>
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
                  <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>CodeFest</span>
                </a>
                {/* SYNTECH IG */}
                <a href="https://www.instagram.com/utpsyntech?igsh=MTFvbzlnOXNxeXZzMQ==" target="_blank" rel="noopener noreferrer" title="SYNTECH Instagram" style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.1 4.1 0 011.522.99 4.1 4.1 0 01.99 1.522c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.1 4.1 0 01-.99 1.522 4.1 4.1 0 01-1.522.99c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.1 4.1 0 01-1.522-.99 4.1 4.1 0 01-.99-1.522c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.1 4.1 0 01.99-1.522 4.1 4.1 0 011.522-.99c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a6.27 6.27 0 00-2.265 1.474A6.27 6.27 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.151.558 2.913a6.27 6.27 0 001.474 2.265 6.27 6.27 0 002.265 1.474c.762.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.151-.261 2.913-.558a6.27 6.27 0 002.265-1.474 6.27 6.27 0 001.474-2.265c.297-.762.5-1.635.558-2.913C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.151-.558-2.913a6.27 6.27 0 00-1.474-2.265A6.27 6.27 0 0019.86.63C19.098.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>SYNTECH</span>
                </a>
                {/* SYNTECH LinkedIn */}
                <a href="https://www.linkedin.com/company/syntech-organization/" target="_blank" rel="noopener noreferrer" title="SYNTECH LinkedIn" style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.45, marginBottom: "16px" }}>Quick Links</div>
              {["About", "Timeline", "Prizes", "Schedule", "Workshops", "FAQ"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{ display: "block", color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "10px", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00e5a0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
                  {link}
                </a>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.45, marginBottom: "16px" }}>Organisers</div>
              {["SYNTECH Organization", "UTP — Dept. of Computing", "Student Affairs (SA)", "YUTP"].map((org) => (
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
    </>
  );
}
