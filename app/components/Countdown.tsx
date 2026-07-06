"use client";

import { useEffect, useState } from "react";

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

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const targetMs = new Date(targetDate).getTime();
  const countdown = useCountdown(targetMs);

  return (
    <div style={{ textAlign: "center" }}>
      <p className="countdown-heading">Registration Opens In</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <CountdownBox value={countdown.days} label="Days" />
        <CountdownBox value={countdown.hours} label="Hours" />
        <CountdownBox value={countdown.minutes} label="Mins" />
        <CountdownBox value={countdown.seconds} label="Secs" />
      </div>
    </div>
  );
}
