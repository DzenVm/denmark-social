"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import GameSymbol, { REEL_ICONS, ICON_LABELS, type ReelIcon } from "./GameSymbol";
import styles from "./spil.module.css";

type Tile = ReelIcon | "?";

const SLOT_THEMES = {
  pharaoh: {
    name: "Socialt slot: Det gamle Egypten",
    tab: "Egypten",
    desc: "Et klassisk socialt slot inspireret af det gamle Egypten. Spil udelukkende med virtuel valuta uden reel værdi og uden rigtige penge.",
  },
  cleopatra: {
    name: "Socialt slot: Egyptiske dronninger",
    tab: "Egyptiske dronninger",
    desc: "Socialt slot med kongelige symboler. Alle belønninger er virtuelle — der er ingen indskud, hævninger eller finansielle gevinster.",
  },
  aztec: {
    name: "Socialt slot: Aztekiske civilisationer",
    tab: "Aztekerne",
    desc: "En social oplevelse inspireret af aztekiske legender. Kun underholdning, ingen gevinster med reel værdi.",
  },
  bonanza: {
    name: "Socialt slot: Vild eventyr",
    tab: "Vild eventyr",
    desc: "Vild social slot til sjov. Ingen indskud og ingen udbetalinger; valutaen forbliver altid virtuel.",
  },
} as const;

type ThemeKey = keyof typeof SLOT_THEMES;

const START_BALANCE = 1000;
const BET_LEVELS = [10, 20, 50, 100];

const pickIcon = (): ReelIcon => REEL_ICONS[Math.floor(Math.random() * REEL_ICONS.length)];
const blankBoard = (): Tile[][] => [
  ["?", "?", "?"],
  ["?", "?", "?"],
  ["?", "?", "?"],
];

interface RoundLog {
  combo: string;
  win: number;
}
interface StatusNote {
  text: string;
  type: "info" | "win" | "error";
}

const SUPPORT_LINKS = [
  { label: "StopSpillet", href: "https://www.stopspillet.dk/" },
  { label: "Center for Ludomani", href: "https://ludomani.dk/" },
  { label: "ROFUS", href: "https://www.rofus.nu/" },
];

export default function SlotGameClient() {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>("pharaoh");
  const theme = SLOT_THEMES[activeTheme];

  const [balance, setBalance] = useState(START_BALANCE);
  const [wager, setWager] = useState(20);
  const [board, setBoard] = useState<Tile[][]>(blankBoard);
  const [reelSpinning, setReelSpinning] = useState([false, false, false]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastPayout, setLastPayout] = useState(0);
  const [roundCount, setRoundCount] = useState(0);
  const [log, setLog] = useState<RoundLog[]>([]);
  const [winRow, setWinRow] = useState([false, false, false]);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [note, setNote] = useState<StatusNote>({
    text: "Vælg din virtuelle indsats og tryk Drej for at starte demonstrationen.",
    type: "info",
  });

  const timersRef = useRef<number[]>([]);
  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => {
      window.clearInterval(id);
      window.clearTimeout(id);
    });
    timersRef.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const resolveRound = useCallback(
    (final: ReelIcon[]) => {
      const [a, b, c] = final;
      let row: [boolean, boolean, boolean] = [false, false, false];
      let win = 0;
      if (a === b && b === c) {
        row = [true, true, true];
        win = a === "seven" ? wager * 8 : wager * 6;
      } else if (a === b) {
        row = [true, true, false];
        win = wager * 2;
      } else if (b === c) {
        row = [false, true, true];
        win = wager * 2;
      } else if (a === c) {
        row = [true, false, true];
        win = wager * 2;
      }

      setBalance((bal) => bal + win);
      setLastPayout(win);
      setRoundCount((r) => r + 1);
      setWinRow(row);
      setIsSpinning(false);
      if (win > 0) {
        setBannerVisible(true);
        setNote({ text: `Virtuel belønning: +${win} mønter. Tillykke!`, type: "win" });
      } else {
        setNote({ text: "Ingen vinderkombination på midterlinjen. Prøv igen!", type: "info" });
      }
      setLog((entries) =>
        [{ combo: final.map((s) => ICON_LABELS[s]).join(" · "), win }, ...entries].slice(0, 6)
      );
    },
    [wager]
  );

  const handleSpin = useCallback(() => {
    if (isSpinning) return;
    if (balance < wager) {
      setNote({ text: "Utilstrækkelig virtuel saldo. Tryk Nulstil for at fortsætte demonstrationen.", type: "error" });
      return;
    }

    clearTimers();
    setBalance((bal) => bal - wager);
    setLastPayout(0);
    setWinRow([false, false, false]);
    setBannerVisible(false);
    setIsSpinning(true);
    setReelSpinning([true, true, true]);
    setNote({ text: "Hjulene drejer... virtuelt resultat på vej.", type: "info" });

    const final: ReelIcon[] = [pickIcon(), pickIcon(), pickIcon()];

    for (let col = 0; col < 3; col++) {
      const iv = window.setInterval(() => {
        setBoard((b) => {
          const nb = b.map((c) => [...c]);
          nb[col] = [pickIcon(), pickIcon(), pickIcon()];
          return nb;
        });
      }, 75);
      timersRef.current.push(iv);

      const stop = window.setTimeout(() => {
        window.clearInterval(iv);
        setBoard((b) => {
          const nb = b.map((c) => [...c]);
          nb[col] = [pickIcon(), final[col], pickIcon()];
          return nb;
        });
        setReelSpinning((rs) => {
          const nrs = [...rs];
          nrs[col] = false;
          return nrs;
        });
        if (col === 2) {
          const fin = window.setTimeout(() => resolveRound(final), 200);
          timersRef.current.push(fin);
        }
      }, 650 + col * 360);
      timersRef.current.push(stop);
    }
  }, [isSpinning, balance, wager, clearTimers, resolveRound]);

  const handleReset = () => {
    if (isSpinning) return;
    clearTimers();
    setBalance(START_BALANCE);
    setWager(20);
    setBoard(blankBoard());
    setReelSpinning([false, false, false]);
    setLastPayout(0);
    setRoundCount(0);
    setWinRow([false, false, false]);
    setBannerVisible(false);
    setLog([]);
    setNote({ text: "Demonstration nulstillet. Virtuel saldo: 1000. Kun til underholdning.", type: "info" });
  };

  const handleThemeChange = (key: ThemeKey) => {
    if (key === activeTheme || isSpinning) return;
    clearTimers();
    setActiveTheme(key);
    setBoard(blankBoard());
    setReelSpinning([false, false, false]);
    setLastPayout(0);
    setWinRow([false, false, false]);
    setBannerVisible(false);
    setLog([]);
    setNote({ text: "Nyt spil valgt. Tryk Drej for at starte.", type: "info" });
  };

  const machineWin = winRow.some(Boolean);
  const noteClass =
    note.type === "win" ? styles.statusMsgWin : note.type === "error" ? styles.statusMsgError : "";

  return (
    <div className={styles.pageWrap}>
      <div className={styles.alertBar}>
        <div className={styles.alertPills}>
          <span className={`${styles.alertPill} ${styles.alertDanger}`}>18+ KUN FOR VOKSNE</span>
          <span className={styles.alertPill}>INGEN RIGTIGE PENGE</span>
          <span className={styles.alertPill}>KUN VIRTUEL VALUTA</span>
        </div>
        <Link href="/" className={styles.backLink}>
          &larr; Tilbage til forsiden
        </Link>
      </div>

      <main>
        <div className="container">
          <header className={styles.gameHead}>
            <h1 className={styles.gameTitle}>{theme.name}</h1>
            <p className={styles.gameDesc}>{theme.desc}</p>
            <div className={styles.gameTabs}>
              {(Object.keys(SLOT_THEMES) as ThemeKey[]).map((key) => (
                <button
                  key={key}
                  className={`${styles.gameTab} ${key === activeTheme ? styles.gameTabActive : ""}`}
                  onClick={() => handleThemeChange(key)}
                  disabled={isSpinning}
                >
                  {SLOT_THEMES[key].tab}
                </button>
              ))}
            </div>
          </header>

          <div className={styles.gameLayout}>
            <section>
              <div className={`${styles.slotMachine} ${machineWin ? styles.slotMachineWin : ""}`}>
                {bannerVisible && lastPayout > 0 && (
                  <div className={styles.jackpotBanner}>GEVINST +{lastPayout} VIRTUELLE MØNTER</div>
                )}
                <div className={styles.slotMachineInner}>
                  <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                      <div className={styles.statBoxLabel}>Virtuel saldo</div>
                      <div
                        className={`${styles.statBoxValue} ${
                          balance <= 0 ? styles.statBoxDanger : balance <= 100 ? styles.statBoxWarn : ""
                        }`}
                      >
                        {balance.toLocaleString("da-DK")}
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <div className={styles.statBoxLabel}>Gevinst sidste omgang</div>
                      <div className={`${styles.statBoxValue} ${lastPayout > 0 ? styles.statBoxWin : ""}`}>
                        {lastPayout}
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <div className={styles.statBoxLabel}>Omgange i alt</div>
                      <div className={styles.statBoxValue}>{roundCount}</div>
                    </div>
                  </div>

                  <div className={styles.reelScreen}>
                    <span className={`${styles.reelMark} ${styles.reelMarkLeft}`} />
                    <span className={`${styles.reelMark} ${styles.reelMarkRight}`} />
                    <div className={styles.reelGrid}>
                      {[0, 1, 2].map((col) => (
                        <div
                          key={col}
                          className={`${styles.reelCol} ${reelSpinning[col] ? styles.reelColSpinning : ""}`}
                        >
                          {[0, 1, 2].map((row) => (
                            <div
                              key={row}
                              className={`${styles.reelCell} ${row === 1 ? styles.reelCellMid : ""} ${
                                row === 1 && winRow[col] ? styles.reelCellWin : ""
                              }`}
                            >
                              <GameSymbol name={board[col][row]} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${styles.statusMsg} ${noteClass}`}>{note.text}</div>

                  <div className={styles.gameControls}>
                    <div className={styles.betButtons}>
                      {BET_LEVELS.map((level) => (
                        <button
                          key={level}
                          className={`${styles.betButton} ${level === wager ? styles.betButtonActive : ""}`}
                          onClick={() => setWager(level)}
                          disabled={isSpinning}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                    <div className={styles.actionButtons}>
                      <button
                        className={styles.spinButton}
                        onClick={handleSpin}
                        disabled={isSpinning || balance < wager}
                      >
                        <span>{isSpinning ? "DREJER..." : "DREJ"}</span>
                        <span className={styles.spinBetLabel}>Virtuel indsats: {wager}</span>
                      </button>
                      <button className={styles.resetButton} onClick={handleReset} disabled={isSpinning}>
                        Nulstil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside className={styles.gameSidebar}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Virtuel gevinsttabel</h3>
                <div className={styles.paytableRow}>
                  <span className={styles.paytableSym}>
                    <GameSymbol name="seven" /> Tre Syv-symboler
                  </span>
                  <span className={styles.paytableVal}>Indsats × 8</span>
                </div>
                <div className={styles.paytableRow}>
                  <span className={styles.paytableSym}>
                    <GameSymbol name="star" /> Tre ens symboler
                  </span>
                  <span className={styles.paytableVal}>Indsats × 6</span>
                </div>
                <div className={styles.paytableRow}>
                  <span className={styles.paytableSym}>
                    <GameSymbol name="diamond" /> To ens symboler
                  </span>
                  <span className={styles.paytableVal}>Indsats × 2</span>
                </div>
                <div className={styles.paytableRow}>
                  <span className={styles.paytableSym}>Ingen match på linjen</span>
                  <span className={styles.paytableVal}>0</span>
                </div>
                <p className={styles.sideCardNote} style={{ marginTop: 10 }}>
                  Gevinster evalueres kun på midterlinjen. Alle værdier er i virtuel valuta uden
                  reel værdi.
                </p>
              </div>

              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Drejehistorik (seneste 6)</h3>
                {log.length === 0 ? (
                  <p className={styles.spinHistoryEmpty}>
                    Ingen drej i denne session endnu. Tryk Drej for at starte.
                  </p>
                ) : (
                  <div className={styles.spinHistory}>
                    {log.map((entry, i) => (
                      <div key={i} className={styles.spinHistoryItem}>
                        <span className={styles.spinHistoryCombo}>{entry.combo}</span>
                        <span className={entry.win > 0 ? styles.spinHistoryWin : styles.spinHistoryZero}>
                          {entry.win > 0 ? `+${entry.win}` : "0"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Ansvarligt spil</h3>
                <p className={styles.sideCardNote} style={{ marginBottom: 12 }}>
                  Selvom platformen ikke tilbyder spil med rigtige penge, støtter vi ansvarligt
                  spil. Hvis du eller nogen, du kender, har bekymringer, så kontakt:
                </p>
                <div className={styles.helpLinks}>
                  {SUPPORT_LINKS.map((org) => (
                    <a
                      key={org.label}
                      className={styles.helpLink}
                      href={org.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {org.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className={styles.legalNote}>
            <p className={styles.legalNoteText}>
              <strong>Juridisk disclaimer:</strong> Dette spil er en social oplevelse, der
              udelukkende er beregnet til underholdning. Der er ingen hasardspil med rigtige
              penge tilgængeligt. Alle resultater genereres tilfældigt til demonstration og
              afspejler ikke virkelige gevinstsandsynligheder. Virtuel valuta har ingen reel
              værdi og kan ikke købes, hæves eller veksles til rigtige penge eller præmier. Du
              kan ikke indbetale eller vinde rigtige penge. Platformen er beregnet til personer
              på 18 år og derover.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
