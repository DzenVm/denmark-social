import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import SlotGameClient from "./SlotGameClient";

export const metadata: Metadata = {
  title: "Spil Gratis Sociale Slots",
  description:
    "Spil gratis sociale spillemaskiner. Ingen rigtige penge — kun virtuel valuta uden reel værdi. Kun 18+.",
  alternates: { canonical: "/spil" },
  openGraph: { url: `${BASE_URL}/spil` },
};

export default function SpilPage() {
  return <SlotGameClient />;
}
