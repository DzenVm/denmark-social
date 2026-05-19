"use client";

const adviceBlocks = [
  {
    title: "Yderligere information",
    text: "Adgang begrænset til voksne: Kun personer på 18 år eller derover må bruge denne hjemmeside. Vi opfordrer til ansvarligt spil. Gældende vilkår findes på siden. Hjælp tilgængelig: Ring 70 22 28 25 eller besøg rofus.nu.",
  },
  {
    title: "Forsvarligt spil — anbefalinger",
    text: "Hold styr på både tid og penge under spil. Spil kun for beløb, du har råd til at tabe, og brug ikke midler tilrettelagt andre vigtige formål.",
  },
  {
    title: "Risiko for spilafhængighed",
    text: "Spil er designet som underholdning, men for nogle udvikler det sig til afhængighed. Varselstegn inkluderer: spillet påvirker job, økonomi eller relationer — eller du føler behov for at låne penge for at fortsætte.",
  },
];

const supportOrgs = [
  { label: "Gambling Therapy", href: "https://www.gamblingtherapy.org/" },
  { label: "Spillemyndigheden", href: "https://www.spillemyndigheden.dk/" },
  { label: "StopSpillet", href: "https://www.stopspillet.dk/" },
  { label: "Center for Ludomani", href: "https://ludomani.dk/" },
  { label: "ROFUS", href: "https://www.rofus.nu/" },
];

export default function GamblingAwareness() {
  return (
    <section id="ansvarligt-spil" style={{ padding: "0 0 80px" }}>
      <div className="container">
        <div style={{
          background: "rgba(15,26,46,.65)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: 28,
        }}>
          <h2 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 900, letterSpacing: "-.02em" }}>
            Ressourcer til Ansvarligt Spil
          </h2>
          <p style={{ margin: "0 0 20px", color: "var(--muted)", fontSize: 14 }}>
            Spil kan skabe vaner. Vær ansvarlig ved spil.
          </p>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 20 }}
            className="awareness-grid"
          >
            {adviceBlocks.map(block => (
              <div key={block.title} style={{
                padding: "16px 18px", borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)", background: "rgba(255,255,255,.02)",
              }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 800, color: "var(--text)" }}>
                  {block.title}
                </h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 13, lineHeight: 1.65 }}>
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "stretch", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "0 18px", minHeight: 50, borderRadius: "var(--radius-md)",
              border: "1px solid rgba(220,38,38,.35)",
              background: "linear-gradient(135deg, #dc2626, #ff6b35)",
              fontWeight: 900, fontSize: 22, color: "#fff",
              boxShadow: "0 12px 32px rgba(220,38,38,.22)",
              flexShrink: 0,
            }}>
              18+
            </div>
            {supportOrgs.map(org => (
              <a
                key={org.label}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "0 16px", minHeight: 50, flex: "1 1 130px", minWidth: 130,
                  borderRadius: "var(--radius-md)", border: "1px solid var(--border)",
                  background: "rgba(255,255,255,.04)", fontWeight: 800,
                  fontSize: "clamp(12px,1.4vw,15px)", color: "var(--text)", whiteSpace: "nowrap",
                  transition: "transform var(--transition), border-color var(--transition)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,53,.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                {org.label}
              </a>
            ))}
          </div>

          <p style={{ margin: "0 0 14px", color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>
            Disse organisationer tilbyder støtte og ressourcer til ansvarligt spil. Denne platform
            tilbyder ikke hasardspil med rigtige penge og kræver ingen licens fra Spillemyndigheden.
          </p>

          <div style={{
            padding: "16px 18px", borderRadius: "var(--radius-md)",
            border: "1px solid var(--border)", background: "rgba(255,255,255,.02)", marginBottom: 18,
          }}>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7, fontSize: 13 }}>
              <strong>Juridisk disclaimer i henhold til dansk lovgivning:</strong> Denne platform
              tilbyder sociale spil udelukkende til underholdningsformål. I henhold til den danske
              spillelov er platforme, der ikke tilbyder spil om penge eller gevinster med reel
              værdi, ikke omfattet af kravet om licens fra Spillemyndigheden. Dette er en social
              spilplatform — der er ingen hasardspil med rigtige penge tilgængeligt. Alle spil
              bruger kun virtuel valuta uden reel værdi. Du kan ikke indbetale, vinde eller hæve
              rigtige penge. Virtuel valuta har ingen reel værdi og kan ikke veksles til rigtige
              penge. Platformen er beregnet til brugere på 18 år og derover.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .awareness-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
