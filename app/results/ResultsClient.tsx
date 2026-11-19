"use client";

import { useEffect, useState, type FormEvent } from "react";

// Google Apps Script backend (CodeFest 26 Results Gate). It checks the member's
// name server-side and returns only that team's Drive folder link; the folder list stays private.
const RESULTS_API =
  "https://script.google.com/macros/s/AKfycbxvxzDCPAa6b7n2DjQ8E50-RyfnoRX127vIfXtyKoTjzY1_UeygeYaYhaVB1vHIAm2JnQ/exec";

// Used only if the teams request fails, so the shared rubric is still reachable
const FALLBACK_RUBRIC_URL = "https://drive.google.com/drive/folders/1jR5-QIudt9ucVKJNFRuYFJjQQ0Em0cPG";

type Status =
  | { kind: "idle" }
  | { kind: "checking" }
  | { kind: "ok"; team: string; url: string }
  | { kind: "error"; message: string };

const labelClass = "block font-bold text-[0.9rem] text-[#1a1f6e] mb-1.5";
const fieldClass =
  "w-full text-base px-3.5 py-3 rounded-[10px] border-[1.5px] border-[#d6e4e8] bg-white text-[#1a1f6e] transition-[border-color,box-shadow] " +
  "focus:outline-none focus:border-[#00c4cc] focus:ring-[3px] focus:ring-[#00c4cc]/35 " +
  "disabled:bg-[#f5f8f9] disabled:text-[#5b6170] disabled:cursor-not-allowed";
const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1f6e]";

export default function ResultsClient() {
  const [teams, setTeams] = useState<string[]>([]);
  const [rubricUrl, setRubricUrl] = useState(FALLBACK_RUBRIC_URL);
  const [loadError, setLoadError] = useState(false);
  const [team, setTeam] = useState("");
  const [leader, setLeader] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    let cancelled = false;
    fetch(`${RESULTS_API}?action=teams`)
      .then((r) => r.json())
      .then((data: { teams?: string[]; rubricUrl?: string }) => {
        if (cancelled) return;
        if (!data.teams?.length) throw new Error("no teams");
        setTeams(data.teams);
        if (data.rubricUrl) setRubricUrl(data.rubricUrl);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Editing either field clears an old result so it never sits next to different details
  function resetStatus() {
    if (status.kind === "ok" || status.kind === "error") setStatus({ kind: "idle" });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status.kind === "checking") return;
    if (!team || !leader.trim()) {
      setStatus({ kind: "error", message: "Please choose your team and type your full name." });
      return;
    }
    setStatus({ kind: "checking" });
    try {
      // text/plain keeps this a "simple" request, so the browser doesn't send a CORS preflight
      const res = await fetch(RESULTS_API, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ team, name: leader.trim() }),
      });
      const data: { ok: boolean; url?: string; team?: string; message?: string } = await res.json();
      if (data.ok && data.url) setStatus({ kind: "ok", team: data.team || team, url: data.url });
      else setStatus({ kind: "error", message: data.message || "Details don't match. Contact the organisers if you need help." });
    } catch {
      setStatus({ kind: "error", message: "Couldn't reach the results service. Please check your connection and try again." });
    }
  }

  const checking = status.kind === "checking";
  const teamsReady = teams.length > 0;

  return (
    <>
      <div
        className="relative mx-auto -mt-20 max-w-[30rem] bg-white p-6 sm:p-8"
        style={{ borderRadius: "16px", border: "1px solid #b2eee9", boxShadow: "0 20px 50px rgba(26, 31, 110, 0.12)" }}
      >
        <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1a1f6e", marginBottom: "6px" }}>Open your team&apos;s results</h2>
        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "22px" }}>
          Choose your team and type your full name, as registered. Any team member can open the results.
        </p>

        <form onSubmit={onSubmit} noValidate>
          <label htmlFor="team" className={labelClass}>Team name</label>
          <select
            id="team"
            value={team}
            onChange={(e) => {
              setTeam(e.target.value);
              resetStatus();
            }}
            disabled={!teamsReady}
            aria-describedby={loadError ? "team-error" : undefined}
            className={`${fieldClass} mb-1`}
          >
            <option value="">{teamsReady ? "Select your team…" : loadError ? "Teams unavailable" : "Loading teams…"}</option>
            {teams.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {loadError && (
            <p id="team-error" role="alert" style={{ color: "#b42318", fontSize: "0.85rem", lineHeight: 1.5, marginTop: "4px" }}>
              Couldn&apos;t load the team list. Please refresh the page to try again.
            </p>
          )}

          <label htmlFor="leader" className={`${labelClass} mt-4`}>Your full name</label>
          <input
            id="leader"
            type="text"
            value={leader}
            onChange={(e) => {
              setLeader(e.target.value);
              resetStatus();
            }}
            autoComplete="off"
            spellCheck={false}
            aria-describedby="leader-hint"
            className={fieldClass}
          />
          <p id="leader-hint" style={{ color: "#666", fontSize: "0.82rem", marginTop: "6px" }}>
            Capital letters and &quot;bin/binti&quot; don&apos;t matter.
          </p>

          <button
            type="submit"
            className={`btn-primary ${focusRing} w-full mt-6 disabled:opacity-70 disabled:cursor-wait`}
            disabled={checking}
          >
            {checking ? "Checking…" : "Open our results"}
          </button>

          <div role="status" aria-live="polite" className="mt-4 text-[0.95rem] leading-normal" style={{ minHeight: "1.5em" }}>
            {checking && <span className="sr-only">Checking your details…</span>}
            {status.kind === "error" && <p style={{ color: "#b42318" }}>{status.message}</p>}
            {status.kind === "ok" && (
              <div style={{ background: "#f0fdfb", border: "1px solid #b2eee9", borderRadius: "12px", padding: "16px" }}>
                <p style={{ color: "#067647", fontWeight: 700, marginBottom: "12px" }}>Verified.</p>
                <a
                  href={status.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary ${focusRing} w-full text-center`}
                  style={{ padding: "13px 20px" }}
                >
                  Open {status.team}&apos;s results folder →
                </a>
              </div>
            )}
          </div>
        </form>
      </div>

      <p style={{ textAlign: "center", marginTop: "28px", fontSize: "0.95rem" }}>
        <a
          href={rubricUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-sm underline underline-offset-4 ${focusRing}`}
          style={{ color: "#007a7a", fontWeight: 700 }}
        >
          Scoring rubric for all teams ↗
        </a>
      </p>
      <p style={{ textAlign: "center", marginTop: "8px", color: "#888", fontSize: "0.85rem" }}>
        Trouble getting in? Contact the CodeFest &apos;26 organising committee.
      </p>
    </>
  );
}
