import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { BASE_URL, COMPANY, SUPPORT_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fortrolighedspolitik",
  alternates: { canonical: "/fortrolighed" },
  openGraph: { url: `${BASE_URL}/fortrolighed` },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Fortrolighedspolitik" lastUpdated="15. juni 2026">
      <LegalSection title="1. Introduktion">
        <p>
          Denne fortrolighedspolitik beskriver, hvordan {COMPANY.name} («vi», «os»,
          «vores») behandler oplysninger i forbindelse med brugen af websitet
          dengaleme.online («Tjenesten»). Tjenesten er en social spilleplatform
          udelukkende til underholdning — der indsamles eller behandles ingen
          finansielle oplysninger.
        </p>
      </LegalSection>

      <LegalSection title="2. Hvilke oplysninger indsamles">
        <p>
          Vi indsamler ikke personoplysninger som navn, e-mail eller betalingsdata.
          Din browser gemmer lokalt et anonym præferenceflag (aldersbekræftelse) via
          <code style={{ fontFamily: "monospace", fontSize: 13 }}> localStorage</code>.
          Dette flag forlader aldrig din enhed.
        </p>
        <p style={{ marginTop: 10 }}>
          Tjenesten bruger <strong>Google Analytics</strong> og{" "}
          <strong>Google Ads-konverteringssporing</strong>, som via cookies kan
          indsamle anonymiserede data om brugeradfærd (f.eks. sidevisninger, klik).
          Disse data behandles af Google LLC i henhold til Googles
          privatlivspolitik og EU&#8209;US Data Privacy Framework.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies og sporingsteknologier">
        <p>
          Vi anvender følgende kategorier af cookies:
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 6 }}>
            <strong>Nødvendige cookies</strong> — til grundlæggende sidefunktioner
            (ingen persondata).
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Analytiske cookies</strong> — Google Analytics (anonymiseret
            IP-adresse).
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Reklamecookies</strong> — Google Ads (gclid, UTM-parametre) til
            måling af annonceeffektivitet. Ingen adfærdsprofilering uden samtykke.
          </li>
        </ul>
        <p style={{ marginTop: 10 }}>
          Du kan til enhver tid administrere eller afvise cookies i din
          browserindstilling eller via{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#38bdf8" }}
          >
            Google Analytics Opt-out
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="4. Formål med databehandling">
        <p>
          De anonymiserede data bruges udelukkende til at:
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 6 }}>Forbedre og fejlsøge Tjenesten.</li>
          <li style={{ marginBottom: 6 }}>Måle reklameeffektivitet (Google Ads).</li>
          <li style={{ marginBottom: 6 }}>Overholde lovkrav om aldersbekræftelse (18+).</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Deling af data med tredjepart">
        <p>
          Vi sælger eller udlejer ingen personoplysninger. Anonymiserede
          sporingsdata deles med Google LLC som databehandler. Google opererer
          i overensstemmelse med EU&#8209;US Data Privacy Framework.
        </p>
      </LegalSection>

      <LegalSection title="6. Dine rettigheder (GDPR)">
        <p>
          Hvis du er bosiddende i EU/EØS, har du ret til indsigt, berigtigelse,
          sletning og dataportabilitet. Da vi ikke opbevarer personoplysninger
          på vores servere, er disse rettigheder automatisk opfyldt.
          For spørgsmål vedrørende Google-data henvises til{" "}
          <a
            href="https://myaccount.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#38bdf8" }}
          >
            Google-kontoindstillinger
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Dataopbevaring">
        <p>
          LocalStorage-flaget (aldersbekræftelse) slettes, når du rydder
          browserdata. Vi opbevarer ingen data på egne servere.
        </p>
      </LegalSection>

      <LegalSection title="8. Børn under 18 år">
        <p>
          Tjenesten er strengt forbeholdt personer på 18 år eller derover.
          Vi indsamler ikke bevidst data om mindreårige. Opdager vi, at en
          mindreårig har brugt Tjenesten, slettes alle relaterede data omgående.
        </p>
      </LegalSection>

      <LegalSection title="9. Kontakt">
        <p>
          Spørgsmål vedrørende denne politik kan rettes til:
        </p>
        <address style={{ fontStyle: "normal", marginTop: 8, lineHeight: 1.8 }}>
          <strong>{COMPANY.name}</strong><br />
          {COMPANY.street}, {COMPANY.district}<br />
          {COMPANY.postalCode} {COMPANY.city}, {COMPANY.country}<br />
          IČO: {COMPANY.regNo}<br />
          Ansvarligt spil: <strong>{SUPPORT_PHONE}</strong>
        </address>
      </LegalSection>
    </LegalLayout>
  );
}
