const SkillBar = ({ label, fillPercent }: { label: string; fillPercent: string }) => (
  <div style={{ marginBottom: 12 }}>
    <div style={{
      fontFamily: "'Rajdhani', sans-serif", fontSize: 13, fontWeight: 500,
      color: "rgba(255,255,255,0.6)", marginBottom: 4, letterSpacing: 0.5,
    }}>
      {label}
    </div>
    <div style={{
      width: "100%", height: 18, background: "rgba(0,0,0,0.4)",
      borderRadius: 4, border: "1px solid rgba(74,222,128,0.15)",
      overflow: "hidden", position: "relative",
    }}>
      <div style={{
        width: fillPercent, height: "100%", borderRadius: 4,
        background: "linear-gradient(90deg, #16a34a 0%, #22c55e 30%, #4ade80 60%, #86efac 85%, #bbf7d0 100%)",
        animation: "greenPulse 2s ease-in-out infinite",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 2, left: "5%", right: "15%", height: 4,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          borderRadius: 2,
        }} />
      </div>
    </div>
  </div>
);

const AvatarSkillRow = () => (
  <div className="flex gap-3.5 items-start" style={{ padding: "16px 14px 0" }}>
    {/* PORTRAIT */}
    <div className="shrink-0" style={{ width: 130 }}>
      <div
        style={{
          width: 122, height: 144, margin: "0 auto",
          borderRadius: "50% / 42%",
          border: "2.5px solid rgba(90,55,160,0.5)",
          background: "radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.25) 0%, rgba(90,50,180,0.12) 35%, rgba(10,8,20,1) 70%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", animation: "auraPulse 3s ease-in-out infinite",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 5, borderRadius: "50% / 42%", border: "1px solid rgba(139,92,246,0.1)" }} />
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50% / 42%",
          background: "radial-gradient(ellipse at 50% 25%, rgba(168,85,247,0.2) 0%, transparent 55%)",
        }} />
        <div className="relative z-[2] flex items-center justify-center" style={{ width: 80, height: 100, borderRadius: "50% / 42%" }}>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif", fontSize: 9,
            color: "rgba(139,92,246,0.4)", letterSpacing: 2,
            textTransform: "uppercase", textAlign: "center", lineHeight: 1.4,
          }}>
            PROFILE<br />PHOTO
          </div>
        </div>
      </div>
    </div>

    {/* SKILL POINTS */}
    <div className="flex-1 pt-1.5">
      <div style={{
        fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 800,
        color: "#e8e4f0", letterSpacing: 2, marginBottom: 16,
      }}>
        SKILL POINTS
      </div>

      <SkillBar label="Creativity" fillPercent="72%" />
      <SkillBar label="Health" fillPercent="99%" />

      <div className="flex justify-between items-baseline">
        <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.45)" }}>495/500</span>
        <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: 1 }}>4,533,012</span>
      </div>
    </div>
  </div>
);

export default AvatarSkillRow;
