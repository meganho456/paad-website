// Home page — replaces the stats band. Drop photos into /public/images/.
import Image from "next/image";
import Link from "next/link";

const gold = "#D4A843";
const serif = "var(--font-newsreader), Georgia, serif";

export default function FamilyNote() {
  return (
    <section style={{ background: "#1D1D1F", color: "#f2efe8", padding: "clamp(64px,8vw,104px) clamp(24px,7vw,96px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(48px,6vw,80px)", alignItems: "center" }}>
        <div style={{ position: "relative", height: 460, maxWidth: 420, width: "100%" }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: "70%", height: 360, transform: "rotate(-2deg)", overflow: "hidden", background: "#2a2a2a" }}>
            <Image src="/images/dr-james-ho-2005.jpg" alt="Dr. James Ho in 2005" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "absolute", right: 0, bottom: 0, width: "62%", height: 300, transform: "rotate(2.5deg)", border: "8px solid #f2efe8", boxShadow: "0 12px 40px rgba(0,0,0,.5)", overflow: "hidden", background: "#3a3222" }}>
            <Image src="/images/james-and-ryan-ho.jpg" alt="Dr. James Ho and Dr. Ryan Ho today" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: gold }}>4191 El Camino Real · since 2005</div>
          <blockquote style={{ margin: 0, fontFamily: serif, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.15, textWrap: "pretty" as any }}>
            “Some of the kids I treated in 2005 now bring their own kids. My son Ryan was one of those Palo Alto kids.”
          </blockquote>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "#b8b3aa", maxWidth: 560 }}>
            Two doctors, one family, the same corner of El Camino for two decades.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
            <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 26, color: gold }}>James &amp; Ryan Ho</div>
            <Link href="/doctors" className="paad-pill">Meet the doctors →</Link>
          </div>
        </div>
      </div>
      <style>{`.paad-pill{font-size:16px;font-weight:600;color:#f2efe8;border:1px solid #444;border-radius:999px;padding:12px 24px;text-decoration:none;transition:.2s}.paad-pill:hover{border-color:${gold};color:${gold}}`}</style>
    </section>
  );
}
