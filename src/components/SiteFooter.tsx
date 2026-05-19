import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Hjem" },
  { href: "/saadan-spiller-du", label: "Sådan spiller du" },
  { href: "/#ansvarligt-spil", label: "Ansvarligt Spil" },
  { href: "/fortrolighed", label: "Fortrolighed & Vilkår" },
];

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0 40px" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {footerLinks.map(link => (
                <Link key={link.href} href={link.href} style={{
                  padding: "9px 12px", borderRadius: 10, border: "1px solid var(--border)",
                  background: "rgba(255,255,255,.03)", color: "var(--muted)", fontWeight: 700, fontSize: 13,
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(255,107,53,.1)", border: "1px solid rgba(255,107,53,.2)",
              borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: "var(--accent)",
            }}>
              KUN 18+ | INGEN RIGTIGE PENGE | KUN TIL UNDERHOLDNING
            </div>
          </div>

          <div style={{ color: "var(--muted)", fontSize: 12, maxWidth: 420, lineHeight: 1.6 }}>
            Vi tilbyder ingen mulighed for at vinde eller hæve rigtige penge. Virtuel valuta har
            ingen reel værdi.
            <br /><br />
            <strong>Juridiske oplysninger:</strong><br />
            Dette er en social spilplatform til underholdning.<br />
            Ingen hasardspil med rigtige penge — ingen licens påkrævet i henhold til dansk spillelov.<br />
            Brug for hjælp? Ring 70 22 28 25 eller besøg rofus.nu.
          </div>
        </div>
      </div>
    </footer>
  );
}
