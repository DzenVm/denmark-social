import Link from "next/link";
import Image from "next/image";
import styles from "./LandingHero.module.css";

const trustItems = [
  "Ingen indskud",
  "Ingen udbetalinger",
  "Virtuel valuta",
  "Kun 18+",
  "Direkte adgang via browser",
];

export default function LandingHero() {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroFold}>
          <h1 className={styles.heroTitle}>
            Sociale Spillemaskiner <span className={styles.heroAccent}>Online</span>
          </h1>

          <Link
            href="/spil"
            className={styles.heroImageWrap}
            aria-label="Spil det sociale slot nu"
          >
            <Image
              src="/images/landing-hero.webp"
              alt="Sociale onlinespil — virtuel valuta til underholdning"
              width={560}
              height={520}
              priority
              className={styles.heroImg}
            />
          </Link>

          <Link href="/spil" className={`btn cta-glow ${styles.heroCta}`}>
            Spil Nu
          </Link>
        </div>

        <div className={styles.heroRest}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Sikker Platform · 18+ · Ingen Rigtige Penge
          </div>

          <p className={styles.heroDesc}>
            Disse spil er udelukkende til underholdning. Vi tilbyder ingen mulighed for at vinde
            rigtige penge eller præmier med reel værdi. Alt spilles med virtuel valuta uden
            reel værdi.
          </p>

          <p className={styles.heroNote}>
            Dette er socialt spilindhold. Besøg{" "}
            <Link href="/#ansvarligt-spil" className={styles.heroNoteLink}>
              siden for ansvarligt spil
            </Link>{" "}
            for mere information.
          </p>
        </div>

        <div className={styles.heroTrust}>
          {trustItems.map(text => (
            <span key={text} className={styles.heroTrustItem}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
