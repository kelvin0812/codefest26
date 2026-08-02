import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #00c4cc 0%, #00d4aa 50%, #00e5a0 100%)",
        color: "#fff",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          fontSize: "8rem",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "#1a1f6e",
          marginBottom: "16px",
        }}
      >
        404
      </div>
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "12px",
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          color: "rgba(255,255,255,0.85)",
          marginBottom: "32px",
          maxWidth: "400px",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          background: "#1a1f6e",
          color: "#fff",
          padding: "13px 32px",
          borderRadius: "8px",
          fontWeight: 700,
          fontSize: "0.95rem",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
