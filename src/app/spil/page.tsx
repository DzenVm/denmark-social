import type { Metadata } from "next";
import { Suspense } from "react";
import { BASE_URL } from "@/lib/site";
import SlotGameClient from "./SlotGameClient";
import AgeGate from "@/components/AgeGate";

export const metadata: Metadata = {
  title: "Spil Gratis Sociale Slots",
  description:
    "Spil gratis sociale spillemaskiner. Ingen rigtige penge — kun virtuel valuta uden reel værdi. Kun 18+.",
  alternates: { canonical: "/spil" },
  openGraph: { url: `${BASE_URL}/spil` },
};

export default function SpilPage() {
  return (
    <AgeGate>
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "100svh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(233,238,252,.72)",
            }}
          >
            Indlæser...
          </div>
        }
      >
        <SlotGameClient />
      </Suspense>
    </AgeGate>
  );
}
