"use client";

import Image from "next/image";
import Link from "next/link";

const games = [
  {
    slug: "pharaoh",
    name: "Socialt slot: Det gamle Egypten",
    desc: "Et klassisk og populært socialt slot. Ingen rigtige penge — kun virtuel valuta.",
    image: "/images/slot-pharaoh.jpg",
  },
  {
    slug: "cleopatra",
    name: "Socialt slot: Egyptiske dronninger",
    desc: "Et populært socialt slot med klassiske symboler. Ingen gevinster i rigtige penge.",
    image: "/images/slot-cleopatra.jpg",
  },
  {
    slug: "aztec",
    name: "Socialt slot: Aztekiske civilisationer",
    desc: "En social slot-oplevelse inspireret af legender. Kun underholdning, ingen reel værdi.",
    image: "/images/slot-aztec.jpg",
  },
  {
    slug: "bonanza",
    name: "Socialt slot: Vild eventyr",
    desc: "Vild social slot til sjov. Ingen indskud og ingen udbetalinger; valutaen forbliver virtuel.",
    image: "/images/slot-bonanza.jpg",
  },
];

export default function GameGrid() {
  return (
    <section id="spil" style={{ padding: "80px 0" }}>
      <div className="container">
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ margin: "0 0 8px", fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, letterSpacing: "-.02em" }}>
            Vælg et socialt spil
          </h2>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>
            Gratis sociale spillemaskiner — ingen rigtige penge, kun virtuel valuta
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="game-tiles">
          {games.map(game => (
            <article
              key={game.slug}
              style={{
                background: "rgba(15,26,46,.65)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", overflow: "hidden", display: "flex", flexDirection: "column",
                transition: "transform var(--transition), box-shadow var(--transition), border-color var(--transition)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(14,165,165,.14), 0 8px 24px rgba(0,0,0,.28)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,165,.28)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div style={{ padding: "14px 16px 0" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "6px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(255,255,255,.04)", fontWeight: 800, fontSize: 12,
                }}>
                  Socialt · Gratis
                </span>
              </div>

              <div style={{
                margin: "14px 16px 0", borderRadius: "var(--radius-md)",
                border: "1px solid rgba(255,255,255,.1)", overflow: "hidden",
                aspectRatio: "19/11", position: "relative",
              }}>
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>

              <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 900, letterSpacing: "-.01em" }}>{game.name}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, flex: 1, lineHeight: 1.5 }}>{game.desc}</p>
                <div style={{ paddingTop: 4 }}>
                  <Link
                    href="/spil"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "12px 14px", borderRadius: "var(--radius-md)", width: "100%",
                      fontWeight: 900, fontSize: 15,
                      background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                      border: "1px solid rgba(56,189,248,.25)", color: "#04141a",
                      boxShadow: "0 10px 24px rgba(14,165,165,.16)",
                    }}
                  >
                    Spil
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .game-tiles { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
