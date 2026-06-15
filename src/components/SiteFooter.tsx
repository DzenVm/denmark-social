import Link from "next/link";
import { COMPANY, SUPPORT_PHONE } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Hjem" },
  { href: "/#hvordan-det-virker", label: "Sådan fungerer det" },
  { href: "/#ansvarligt-spil", label: "Ansvarligt Spil" },
  { href: "/fortrolighed", label: "Fortrolighedspolitik" },
  { href: "/vilkaar", label: "Vilkår & Betingelser" },
];

const cellStyle: React.CSSProperties = {
  color: "rgba(233,238,252,.55)",
  fontSize: 12,
  lineHeight: 1.65,
};

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(233,238,252,.12)", padding: "28px 0 44px" }}>
      <div className="container">
        {/* Top row: nav + badge */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          gap: 20, flexWrap: "wrap", alignItems: "flex-start",
          marginBottom: 22,
        }}>
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
              {footerLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "9px 12px", borderRadius: 10,
                    border: "1px solid rgba(233,238,252,.12)",
                    background: "rgba(255,255,255,.03)",
                    color: "rgba(233,238,252,.72)", fontWeight: 700, fontSize: 13,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* 18+ badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(14,165,165,.1)", border: "1px solid rgba(14,165,165,.2)",
              borderRadius: 8, padding: "6px 12px",
              fontSize: 12, fontWeight: 700, color: "var(--accent)",
            }}>
              KUN 18+ | INGEN RIGTIGE PENGE | KUN TIL UNDERHOLDNING
            </div>
          </div>

          {/* Responsible gaming quick info */}
          <div style={cellStyle}>
            <strong style={{ color: "rgba(233,238,252,.85)" }}>Brug for hjælp?</strong><br />
            Ring <strong>{SUPPORT_PHONE}</strong> eller besøg{" "}
            <a
              href="https://www.rofus.nu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(14,165,165,.9)" }}
            >
              rofus.nu
            </a>
            <br />
            Spil kan skabe vaner. Vær ansvarlig.
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid rgba(233,238,252,.07)", margin: "0 0 18px" }} />

        {/* Bottom row: company info + image disclaimer */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }} className="footer-legal-grid">
          <div style={cellStyle}>
            <strong style={{ color: "rgba(233,238,252,.85)" }}>Juridiske oplysninger</strong><br />
            Vi tilbyder ingen mulighed for at vinde eller hæve rigtige penge.
            Virtuel valuta har ingen reel værdi og kan ikke konverteres.<br /><br />
            <strong style={{ color: "rgba(233,238,252,.72)" }}>{COMPANY.name}</strong><br />
            {COMPANY.street}, {COMPANY.district}<br />
            {COMPANY.postalCode} {COMPANY.city}, {COMPANY.country}<br />
            Reg.nr. (IČO): {COMPANY.regNo}
          </div>

          <div style={cellStyle}>
            <strong style={{ color: "rgba(233,238,252,.85)" }}>Ansvarsfraskrivelse — billeder</strong><br />
            Navne og illustrationer på spiltemaer er fiktive og udelukkende brugt til
            underholdningsformål. De er ikke tilknyttet, sponsoreret af eller associeret
            med nogen producent af spil om rigtige penge, brands, logoer eller produkter
            relateret til hasardspil.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-legal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
