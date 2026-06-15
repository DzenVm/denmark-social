"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import KeepParamsLink from "@/components/KeepParamsLink";

const navItems = [
  { href: "/#spil", label: "Spil" },
  { href: "/#hvordan-det-virker", label: "Sådan fungerer det" },
  { href: "/#ansvarligt-spil", label: "Ansvarligt Spil" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background .3s, border-color .3s",
        background: isScrolled ? "rgba(10,20,32,.96)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(233,238,252,.1)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", height: 64, justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="header-nav-links">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: "var(--muted)", fontWeight: 600, fontSize: 14, transition: "color .15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <KeepParamsLink href="/spil" className="btn" style={{ minWidth: "auto", padding: "10px 22px", fontSize: 14 }}>
          Spil Nu
        </KeepParamsLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: "var(--text)", fontSize: 24, cursor: "pointer" }}
          className="header-burger"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "rgba(10,20,32,.98)", borderTop: "1px solid var(--border)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: "var(--muted)", fontWeight: 600, padding: "8px 0", borderBottom: "1px solid var(--border)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <KeepParamsLink href="/spil" className="btn" style={{ textAlign: "center", marginTop: 8 }}>
            Spil Nu
          </KeepParamsLink>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .header-nav-links { display: none !important; }
          .header-burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
