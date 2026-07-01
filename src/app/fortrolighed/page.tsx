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
    <LegalLayout title="Fortrolighedspolitik" lastUpdated="1. juli 2026">
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
          <strong>Vi indsamler ingen personoplysninger.</strong> Du behøver ikke
          registrere en konto for at bruge Tjenesten, og vi beder aldrig om navn,
          e-mail, adresse eller betalingsdata.
        </p>
        <p style={{ marginTop: 10 }}>
          <strong>Ingen analyseværktøjer og ingen reklame-cookies.</strong>{" "}
          Tjenesten indeholder på nuværende tidspunkt ingen scripts fra Google
          Analytics, Google Ads, Meta, eller andre tredjepartsleverandører.
          Der placeres ingen cookies på din enhed.
        </p>
        <p style={{ marginTop: 10 }}>
          Vores webhostingudbyder kan af drifts- og sikkerhedsmæssige hensyn
          føre standard-adgangslogfiler (IP-adresse, tidspunkt, anmodet URL).
          Vi tilgår ikke disse logs til markedsføring eller profilering.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies">
        <p>
          Tjenesten placerer <strong>ingen cookies</strong>. Hvis dette ændrer
          sig i fremtiden (for eksempel hvis vi tilføjer analytics), vil denne
          politik blive opdateret på forhånd, og et samtykkebanner blive vist,
          før nogen ikke-nødvendig cookie placeres.
        </p>
      </LegalSection>

      <LegalSection title="4. Formål med databehandling">
        <p>
          Vi behandler ingen personoplysninger til marketing, profilering eller
          videresalg. Den eneste datastrøm er den anmodning din browser sender
          til vores server, når du henter en side — den nødvendige minimum for
          at levere HTML/CSS/JS til dig.
        </p>
      </LegalSection>

      <LegalSection title="5. Deling af data med tredjepart">
        <p>
          Vi deler, sælger eller udlejer ingen data til tredjeparter.
        </p>
      </LegalSection>

      <LegalSection title="6. Dine rettigheder (GDPR)">
        <p>
          Hvis du er bosiddende i EU/EØS, har du ret til indsigt, berigtigelse,
          sletning og dataportabilitet. Da vi ikke opbevarer personoplysninger,
          er der reelt ingen data at få indsigt i, berigtige eller slette. Du
          kan altid kontakte os for at bekræfte dette.
        </p>
      </LegalSection>

      <LegalSection title="7. Dataopbevaring">
        <p>
          Vi opbevarer ingen persondata. Standard-adgangslogfiler hos vores
          webhostingudbyder opbevares i den periode, som udbyderen normalt
          anvender af driftsmæssige og sikkerhedsmæssige årsager.
        </p>
      </LegalSection>

      <LegalSection title="8. Børn under 18 år">
        <p>
          Tjenesten er strengt forbeholdt personer på 18 år eller derover.
          Vi indsamler ikke bevidst data om mindreårige. Opdager vi, at en
          mindreårig har brugt Tjenesten, tager vi passende skridt så hurtigt
          som muligt.
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
          Ansvarligt spil (kontakt hos StopSpillet): <strong>{SUPPORT_PHONE}</strong>
        </address>
      </LegalSection>
    </LegalLayout>
  );
}
