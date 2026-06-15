"use client";

import { useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "dk_age_18_ok";
const GATE_EVENT = "dk-age-gate-update";

function subscribeGate(cb: () => void) {
  window.addEventListener(GATE_EVENT, cb);
  window.addEventListener("storage", cb); // cross-tab sync
  return () => {
    window.removeEventListener(GATE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function readConfirmed(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function confirmAge() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore — private mode */
  }
  window.dispatchEvent(new Event(GATE_EVENT));
}

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const confirmed = useSyncExternalStore(
    subscribeGate,
    readConfirmed,
    () => false, // server snapshot: always show gate until client confirms
  );
  const router = useRouter();

  if (confirmed) return <>{children}</>;

  return (
    <>
      {/* blurred content behind the overlay */}
      <div aria-hidden="true" style={{ filter: "blur(8px)", pointerEvents: "none", userSelect: "none" }}>
        {children}
      </div>

      {/* modal overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0,0,0,.80)", backdropFilter: "blur(6px)",
        }}
      >
        <div style={{
          background: "#0f1c2e",
          border: "1px solid rgba(14,165,165,.35)",
          borderRadius: 20,
          padding: "40px 32px",
          maxWidth: 380,
          width: "90%",
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 64, fontWeight: 900, lineHeight: 1,
            color: "#ef4444", marginBottom: 10,
          }}>
            18+
          </div>

          <h2
            id="age-gate-title"
            style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 900 }}
          >
            Kun for voksne
          </h2>

          <p style={{
            margin: "0 0 8px", color: "rgba(233,238,252,.72)",
            fontSize: 14, lineHeight: 1.65,
          }}>
            Disse sociale spil er udelukkende beregnet til underholdning
            for personer på <strong>18 år eller derover</strong>.
          </p>
          <p style={{
            margin: "0 0 24px", color: "rgba(233,238,252,.72)",
            fontSize: 14, lineHeight: 1.65,
          }}>
            Ingen rigtige penge — kun virtuel valuta uden reel værdi. Ingen
            indskud, ingen udbetalinger.
          </p>

          <button
            onClick={confirmAge}
            style={{
              display: "block", width: "100%",
              padding: "15px", marginBottom: 10,
              borderRadius: 13, border: "none",
              background: "linear-gradient(135deg,#0ea5a5,#38bdf8)",
              color: "#04141a", fontWeight: 900, fontSize: 16,
              cursor: "pointer", letterSpacing: ".01em",
            }}
          >
            Jeg er 18+ — Spil Nu
          </button>

          <button
            onClick={() => router.push("/")}
            style={{
              display: "block", width: "100%",
              padding: "13px", marginBottom: 16,
              borderRadius: 13,
              border: "1px solid rgba(233,238,252,.15)",
              background: "transparent",
              color: "rgba(233,238,252,.72)",
              fontWeight: 700, fontSize: 14, cursor: "pointer",
            }}
          >
            Jeg er under 18 — Forlad
          </button>

          <p style={{
            margin: 0, color: "rgba(233,238,252,.45)",
            fontSize: 11, lineHeight: 1.55,
          }}>
            Spil kan skabe vaner. Brug for hjælp? Ring{" "}
            <strong>70 22 28 25</strong> eller besøg{" "}
            <a
              href="https://www.rofus.nu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(14,165,165,.9)", textDecoration: "underline" }}
            >
              rofus.nu
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
