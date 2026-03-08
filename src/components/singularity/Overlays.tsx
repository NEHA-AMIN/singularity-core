interface GodQuoteOverlayProps {
  onDismiss: () => void;
  quote: { text: string; by: string };
}

export const GodQuoteOverlay = ({ onDismiss, quote }: GodQuoteOverlayProps) => (
  <div
    onClick={onDismiss}
    className="fixed inset-0 z-[999] flex items-center justify-center cursor-pointer"
    style={{ background: "rgba(0,0,0,0.93)", backdropFilter: "blur(20px)" }}
  >
    <div style={{ animation: "godIn 0.8s ease", textAlign: "center", padding: 28, maxWidth: 320 }}>
      <div style={{ fontSize: 48, marginBottom: 18, filter: "drop-shadow(0 0 15px rgba(139,92,246,0.6))" }}>∞</div>
      <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 15, color: "#a78bfa", letterSpacing: 5, marginBottom: 10, textShadow: "0 0 20px rgba(139,92,246,0.4)" }}>
        {quote.by}
      </div>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.9, fontStyle: "italic" }}>
        "{quote.text}"
      </div>
      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.18)", letterSpacing: 4, marginTop: 22, textTransform: "uppercase" }}>
        Tap to enter
      </div>
    </div>
  </div>
);

interface SanctuaryOverlayProps {
  onDismiss: () => void;
}

export const SanctuaryOverlay = ({ onDismiss }: SanctuaryOverlayProps) => (
  <div
    className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
    style={{ background: "rgba(0,0,0,0.96)", animation: "sanctFade 0.8s ease", backdropFilter: "blur(30px)" }}
  >
    <div style={{ textAlign: "center", padding: 28, maxWidth: 340, animation: "godIn 1s ease" }}>
      <div style={{ fontSize: 60, marginBottom: 18, animation: "tridentFloat 3s ease-in-out infinite", filter: "drop-shadow(0 0 20px rgba(125,211,252,0.5))" }}>🔱</div>
      <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 18, color: "#7dd3fc", letterSpacing: 5, marginBottom: 8, textShadow: "0 0 25px rgba(125,211,252,0.4)" }}>LORD SHIVA</div>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 2, fontStyle: "italic", marginBottom: 32 }}>
        "In destruction lies creation. In stillness lies infinite power. Be still. Then strike."
      </div>
      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: 3, marginBottom: 18, textTransform: "uppercase" }}>
        What do you need?
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {["🛌 Rest", "🍜 Food", "🤫 Silence", "💬 Talk"].map(o => (
          <button
            key={o}
            onClick={onDismiss}
            style={{
              background: "rgba(125,211,252,0.06)", border: "1px solid rgba(125,211,252,0.2)",
              borderRadius: 8, padding: "8px 15px", color: "#7dd3fc",
              fontFamily: "'Rajdhani', sans-serif", fontSize: 12, cursor: "pointer",
            }}
          >
            {o}
          </button>
        ))}
      </div>
      <button
        onClick={onDismiss}
        style={{
          marginTop: 28, background: "none", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8, padding: "6px 20px", color: "rgba(255,255,255,0.2)",
          fontFamily: "'Rajdhani', sans-serif", fontSize: 10, letterSpacing: 2,
          cursor: "pointer", textTransform: "uppercase",
        }}
      >
        Return to Battle
      </button>
    </div>
  </div>
);
