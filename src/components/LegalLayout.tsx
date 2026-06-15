import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const prose: React.CSSProperties = {
  color: "rgba(233,238,252,.72)",
  fontSize: 15,
  lineHeight: 1.75,
  maxWidth: "72ch",
};

const h2Style: React.CSSProperties = {
  margin: "32px 0 8px",
  fontSize: 18,
  fontWeight: 900,
  color: "#e9eefc",
  letterSpacing: "-.01em",
};

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={h2Style}>{title}</h2>
      <div style={prose}>{children}</div>
    </section>
  );
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container" style={{ paddingTop: 100, paddingBottom: 80 }}>
          <div style={{
            background: "rgba(15,28,46,.65)",
            border: "1px solid rgba(233,238,252,.12)",
            borderRadius: 20,
            padding: "36px 40px",
            maxWidth: 800,
            margin: "0 auto",
          }}>
            <p style={{ margin: "0 0 6px", fontSize: 12, color: "rgba(233,238,252,.4)" }}>
              Sidst opdateret: {lastUpdated}
            </p>
            <h1 style={{
              margin: "0 0 24px", fontSize: "clamp(24px,3vw,34px)",
              fontWeight: 900, letterSpacing: "-.02em",
            }}>
              {title}
            </h1>
            <hr style={{ border: "none", borderTop: "1px solid rgba(233,238,252,.1)", marginBottom: 24 }} />
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
