const GothicTopBorder = () => (
  <svg viewBox="0 0 400 44" className="w-full block" style={{ height: 44 }}>
    <defs>
      <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3d2d5c" />
        <stop offset="40%" stopColor="#261c3e" />
        <stop offset="100%" stopColor="#140e24" />
      </linearGradient>
      <linearGradient id="tgH" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1a1230" />
        <stop offset="50%" stopColor="#3d2d5c" />
        <stop offset="100%" stopColor="#1a1230" />
      </linearGradient>
      <filter id="gf">
        <feGaussianBlur stdDeviation="0.8" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <path
      d="M0,44 L8,44 L12,36 L16,44 L36,44 L40,30 L44,44 L70,44 L76,28 L80,36 L86,18 L90,30 L96,22 L102,44 L126,44 L132,26 L136,34 L142,14 L146,24 L152,6 L156,18 L162,10 L168,18 L174,4 L180,14 L186,8 L192,16 L200,0 L208,16 L214,8 L220,14 L226,4 L232,18 L238,10 L244,18 L248,6 L254,24 L258,14 L264,34 L268,26 L274,44 L298,44 L304,22 L308,30 L314,18 L318,36 L324,28 L330,44 L356,44 L360,30 L364,44 L384,44 L388,36 L392,44 L400,44"
      fill="url(#tg)" stroke="rgba(139,92,246,0.3)" strokeWidth="0.6" filter="url(#gf)"
    />
    <rect x="20" y="42" width="360" height="1.5" rx="0.75" fill="url(#tgH)" opacity="0.6" />
  </svg>
);

const GothicBottomBorder = () => (
  <svg viewBox="0 0 400 40" className="w-full block" style={{ height: 40, marginTop: 4 }}>
    <rect x="20" y="0" width="360" height="1.5" rx="0.75" fill="url(#tgH)" opacity="0.6" />
    <path
      d="M0,0 L8,0 L12,8 L16,0 L36,0 L40,14 L44,0 L70,0 L76,16 L80,8 L86,26 L90,14 L96,22 L102,0 L126,0 L132,18 L136,10 L142,30 L146,20 L152,38 L156,26 L162,34 L168,26 L174,40 L180,30 L186,36 L192,28 L200,44 L208,28 L214,36 L220,30 L226,40 L232,26 L238,34 L244,26 L248,38 L254,20 L258,30 L264,10 L268,18 L274,0 L298,0 L304,22 L308,14 L314,26 L318,8 L324,16 L330,0 L356,0 L360,14 L364,0 L384,0 L388,8 L392,0 L400,0"
      fill="url(#tg)" stroke="rgba(139,92,246,0.3)" strokeWidth="0.6" filter="url(#gf)"
    />
  </svg>
);

export { GothicTopBorder, GothicBottomBorder };
