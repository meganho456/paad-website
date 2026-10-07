// Doctors page — edit the `doctors` arrays below.
const gold = "#D4A843";
const serif = "var(--font-newsreader), Georgia, serif";

const languages = [
  { hello: "Hello", label: "English", serif: true, doctors: ["All doctors"] },
  { hello: "Hola", label: "Español", serif: true, doctors: ["Dr. Pedro Avendaño"] },
  { hello: "你好", label: "中文 · 廣東話", doctors: ["Dr. Shane Huang"] },
  { hello: "こんにちは", label: "日本語", doctors: ["Dr. James Ho"], small: true },
  { hello: "سلام", label: "فارسی", doctors: ["Dr. Sara Hamed-Negahdar"], rtl: true },
];

export default function LanguageDoctors() {
  return (
    <section style={{ background: "#000", color: "#f2efe8", padding: "clamp(64px,8vw,96px) clamp(24px,7vw,96px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: gold }}>Your dentist speaks your language</div>
            <h2 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: "clamp(34px,4vw,48px)", lineHeight: 1.1, maxWidth: 620 }}>Explain what hurts in the language you think in.</h2>
          </div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#b8b3aa", maxWidth: 340 }}>Ask for your language when you book and we&apos;ll match you with the right doctor.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
          {languages.map((l) => (
            <div key={l.label} style={{ background: "#1D1D1F", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
              <div lang="" dir={l.rtl ? "rtl" : undefined} style={{ height: 56, display: "flex", alignItems: "center", justifyContent: l.rtl ? "flex-end" : undefined, whiteSpace: "nowrap", fontFamily: l.serif ? serif : undefined, fontWeight: l.serif ? 400 : 500, fontSize: l.small ? 26 : l.serif ? 40 : 38 }}>{l.hello}</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: gold }}>{l.label}</div>
              <div style={{ height: 1, background: "#333" }} />
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 10px", fontSize: 15, lineHeight: 1.5, color: "#b8b3aa" }}>
                {l.doctors.map((d, index) => (
                  <>
                    <span key={d}>{d}</span>
                    {index < l.doctors.length - 1 && <span aria-hidden="true" style={{ color: "#7c766e" }}>•</span>}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
