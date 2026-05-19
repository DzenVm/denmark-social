import { Suspense } from "react";
import SlotGameClient from "./SlotGameClient";

export default function SpilPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)" }}>Indlæser...</div>}>
      <SlotGameClient />
    </Suspense>
  );
}
