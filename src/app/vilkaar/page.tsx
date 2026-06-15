import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { BASE_URL, COMPANY, SUPPORT_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vilkår og betingelser",
  alternates: { canonical: "/vilkaar" },
  openGraph: { url: `${BASE_URL}/vilkaar` },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Vilkår og betingelser" lastUpdated="15. juni 2026">
      <LegalSection title="1. Accept af vilkår">
        <p>
          Ved at bruge dengaleme.online («Tjenesten») accepterer du disse vilkår.
          Tjenesten drives af {COMPANY.name}, {COMPANY.street},{" "}
          {COMPANY.postalCode} {COMPANY.city}, {COMPANY.country}
          {" "}(IČO: {COMPANY.regNo}).
        </p>
      </LegalSection>

      <LegalSection title="2. Tjenestens art — sociale spil">
        <p>
          Tjenesten er en <strong>social spilleplatform udelukkende til
          underholdning</strong>. Alle spil anvender virtuel valuta uden
          nogen reel pengeværdi. Det er ikke muligt at:
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 6 }}>Indbetale rigtige penge.</li>
          <li style={{ marginBottom: 6 }}>Hæve eller overføre virtuel valuta.</li>
          <li style={{ marginBottom: 6 }}>Vinde penge, præmier eller genstande med reel værdi.</li>
          <li style={{ marginBottom: 6 }}>Konvertere virtuel valuta til nogen form for kontantækvivalent.</li>
        </ul>
        <p style={{ marginTop: 10 }}>
          Tjenesten udgør ikke hasardspil i lovens forstand. Den er ikke
          underlagt krav om licens fra Spillemyndigheden, da der ikke udbydes
          spil om penge eller gevinster med reel pengeværdi, jf. dansk
          spillelovgivning.
        </p>
      </LegalSection>

      <LegalSection title="3. Alderskrav — kun 18+">
        <p>
          <strong>Adgang er strengt forbeholdt personer på 18 år eller
          derover.</strong> Mindreårige må ikke bruge Tjenesten. Brugere
          bekræfter ved adgang, at de er fyldt 18 år. Vi forbeholder os
          retten til at suspendere adgang for brugere, der mistænkes for at
          være under 18 år.
        </p>
      </LegalSection>

      <LegalSection title="4. Virtuel valuta">
        <p>
          Den virtuelle valuta i Tjenesten:
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 6 }}>Har ingen reel pengeværdi.</li>
          <li style={{ marginBottom: 6 }}>Kan ikke sælges, overføres eller bytttes.</li>
          <li style={{ marginBottom: 6 }}>Kan ikke købes med rigtige penge.</li>
          <li style={{ marginBottom: 6 }}>Fungerer udelukkende som et element i den sociale spiloplevelse.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Billeder og navne på spil">
        <p>
          Navne og illustrationer på spiltemaer er fiktive og udelukkende
          brugt til underholdningsformål. De er ikke tilknyttet, sponsoreret
          af eller associeret med nogen producent af spil om rigtige penge,
          brands, logoer eller produkter relateret til hasardspil.
        </p>
      </LegalSection>

      <LegalSection title="6. Tilladt brug">
        <p>
          Du må bruge Tjenesten til personlig, ikke-kommerciel underholdning.
          Det er ikke tilladt at:
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 6 }}>Forsøge at omgå aldersbekræftelsen.</li>
          <li style={{ marginBottom: 6 }}>Bruge Tjenesten til kommercielle formål uden skriftlig aftale.</li>
          <li style={{ marginBottom: 6 }}>Manipulere spilresultater eller software.</li>
          <li style={{ marginBottom: 6 }}>Bruge Tjenesten på vegne af en mindreårig.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Ansvarligt spil">
        <p>
          Vi opfordrer til ansvarligt spil. Selvom Tjenesten ikke tilbyder
          hasardspil, kan overdreven brug af spil påvirke hverdagen negativt.
          Kontakt følgende organisationer for hjælp:
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 6 }}>
            <strong>StopSpillet</strong>:{" "}
            <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8" }}>
              stopspillet.dk
            </a>
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>ROFUS</strong>:{" "}
            <a href="https://www.rofus.nu/" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8" }}>
              rofus.nu
            </a>{" "}
            — Ring <strong>{SUPPORT_PHONE}</strong>
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Center for Ludomani</strong>:{" "}
            <a href="https://ludomani.dk/" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8" }}>
              ludomani.dk
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Fraskrivelse af garanti">
        <p>
          Tjenesten leveres «som den er». Vi garanterer ikke uafbrudt adgang
          og påtager os intet ansvar for tab forårsaget af tekniske fejl.
        </p>
      </LegalSection>

      <LegalSection title="9. Lovvalg">
        <p>
          Disse vilkår er underlagt tjekkisk ret. Tvister søges løst i mindelighed;
          forbrugere i Danmark kan også anvende klagemulighederne ved
          Forbrugerklagenævnet eller EU&#8209;s online tvistbilæggelsesplatform.
        </p>
      </LegalSection>

      <LegalSection title="10. Kontakt">
        <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
          <strong>{COMPANY.name}</strong><br />
          {COMPANY.street}, {COMPANY.district}<br />
          {COMPANY.postalCode} {COMPANY.city}, {COMPANY.country}<br />
          IČO: {COMPANY.regNo}
        </address>
      </LegalSection>
    </LegalLayout>
  );
}
