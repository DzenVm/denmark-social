const infoCards = [
  {
    title: "Sådan fungerer platformen",
    desc: "Platformen er udelukkende til underholdning for brugere på 18+. Spillene bruger kun virtuel valuta uden reel værdi, så oplevelsen forbliver social og uden finansiel risiko.",
    items: [
      "Adgang til spillet direkte fra browseren.",
      "Modtag og brug kun virtuel valuta.",
      "Ingen indskud, udbetalinger eller konvertering til rigtige penge.",
    ],
  },
  {
    title: "Hvorfor vælger brugere denne platform",
    desc: "Grænsefladen er optimeret til mobil, tablet og desktop, og spilsessionerne er designet til hurtig adgang, klar navigation og gennemsigtig information om regler og ansvarligt spil.",
    items: [
      "Klar og brugervenlig design.",
      "Gennemsigtig indhold om begrænsninger og 18+.",
      "Direkte links til ressourcer for ansvarligt spil.",
    ],
  },
  {
    title: "Sikkerhed og gennemsigtighed",
    desc: "Vi fokuserer på klar kommunikation: hvad platformen tilbyder, hvad den ikke tilbyder, og hvor du finder de juridiske oplysninger til ansvarlig brug.",
    items: [
      "Politikker og vilkår tilgængelige i sidefoden.",
      "Synlige beskeder om 18+ og 'ingen rigtige penge'.",
      "Anbefalede eksterne ressourcer til ansvarligt spil.",
    ],
  },
];

const faqItems = [
  {
    q: "Kan jeg vinde rigtige penge på denne platform?",
    a: "Nej, under ingen omstændigheder. Platformen fungerer udelukkende som et socialt spil — alle spil bruger virtuel valuta uden nogen reel finansiel værdi. Der er ingen mekanismer for pengepræmier, der tildeles ingen kontantpræmier, og der er ingen mulighed for at konvertere virtuel valuta til rigtige penge.",
  },
  {
    q: "Kan man foretage indskud eller hævninger?",
    a: "Nej. Platformen accepterer og behandler ingen form for betalinger eller finansielle overførsler. Den virtuelle valuta tilbydes gratis til demonstration og kan ikke konverteres, overføres eller hæves på nogen måde.",
  },
  {
    q: "Hvad er virtuel valuta, og hvordan fungerer det?",
    a: "Virtuel valuta er et spilelement, der udelukkende bruges inden for vores platform. Det fungerer som en intern score — du kan satse med den, vinde eller tabe den i spillet, men den har ingen værdi uden for platformen.",
  },
  {
    q: "Er platformen tilladt for mindreårige?",
    a: "Nej. Adgang er strengt forbeholdt personer, der er fyldt 18 år. Vi opfordrer forældre og værger til at overvåge mindreåriges onlineaktivitet.",
  },
  {
    q: "Er tilmelding eller en konto nødvendig?",
    a: "Det er ikke obligatorisk at oprette en konto for at få adgang til demonstrationsspillene. Du kan spille direkte fra browseren uden at angive personlige eller finansielle oplysninger.",
  },
  {
    q: "Kræver platformen licens fra myndighederne?",
    a: "Nej. I henhold til dansk lovgivning er platforme, der ikke tilbyder mulighed for at satse eller vinde rigtige penge, ikke underlagt bestemmelserne om hasardspil.",
  },
  {
    q: "Afspejler spillene de virkelige sandsynligheder for spillemaskiner?",
    a: "Nej. Spillene på denne platform er forenklede sociale versioner, der er skabt udelukkende til demonstration og underholdning. Resultaterne genereres tilfældigt til rekreative formål.",
  },
  {
    q: "Hvor finder jeg information om ansvarligt spil?",
    a: "I sektionen 'Ressourcer til ansvarligt spil' på denne side finder du links til specialiserede organisationer til støtte. Hvis du eller nogen du kender viser tegn på afhængighed, opfordrer vi dig til at kontakte en af disse organisationer.",
  },
];

export default function ContentSection() {
  return (
    <section id="hvordan-det-virker" style={{ padding: "0 0 80px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 20 }} className="content-info-grid">
          {infoCards.map(card => (
            <article key={card.title} style={{
              background: "rgba(15,26,46,.58)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", padding: 20,
            }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 20, letterSpacing: "-.02em" }}>{card.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.65 }}>{card.desc}</p>
              <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
                {card.items.map(item => <li key={item} style={{ margin: "6px 0" }}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <article style={{
          background: "rgba(15,26,46,.58)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "28px 28px 12px",
        }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 22, letterSpacing: "-.02em" }}>Ofte stillede spørgsmål (FAQ)</h3>
          <p style={{ margin: "0 0 20px", color: "var(--muted)", fontSize: 14 }}>
            Alt hvad du behøver at vide om denne sociale spilplatform.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }} className="content-faq-grid">
            {faqItems.map((faq, i) => (
              <div key={i} style={{
                padding: "16px 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(233,238,252,.09)",
              }}>
                <strong style={{ display: "block", marginBottom: 8, fontSize: 15, color: "var(--text)" }}>{faq.q}</strong>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .content-info-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .content-faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
