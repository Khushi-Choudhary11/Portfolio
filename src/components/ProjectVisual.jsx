// Representative line-art illustrations for project cards (not screenshots).
// Drawn in the site palette so every card reads as part of the same system.

const G = "#E8C982", G2 = "#B99553", L = "rgba(218,182,113,0.22)", P = "#151410", I = "#F5EBDD";

const Frame = ({ children, label }) => (
  <svg viewBox="0 0 320 200" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="pv-glow" cx="70%" cy="20%" r="80%">
        <stop offset="0" stopColor="#E8C982" stopOpacity="0.14" />
        <stop offset="1" stopColor="#E8C982" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="200" fill="#0C0C0A" />
    <rect width="320" height="200" fill="url(#pv-glow)" />
    {/* window chrome */}
    <rect x="16" y="14" width="288" height="176" rx="8" fill={P} stroke={L} />
    <circle cx="28" cy="25" r="2.5" fill={G2} /><circle cx="37" cy="25" r="2.5" fill={L} /><circle cx="46" cy="25" r="2.5" fill={L} />
    <line x1="16" y1="35" x2="304" y2="35" stroke={L} />
    {children}
  </svg>
);

const Bar = ({ x, y, w, o = 0.25, h = 4 }) => <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={I} opacity={o} />;

const visuals = {
  factcheck: (
    <Frame label="Illustration of a fact-checking dashboard with a claim and evidence cards">
      <rect x="28" y="46" width="120" height="132" rx="6" fill="#0F0F0D" stroke={L} />
      <Bar x={38} y={58} w={60} o={0.6} /><Bar x={38} y={70} w={96} /><Bar x={38} y={80} w={88} /><Bar x={38} y={90} w={70} />
      <rect x="38" y="104" width="100" height="40" rx="4" fill="none" stroke={G} strokeDasharray="3 3" opacity="0.6" />
      <Bar x={46} y={116} w={70} o={0.45} /><Bar x={46} y={126} w={54} o={0.3} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(160 ${46 + i * 45})`}>
          <rect width="132" height="38" rx="6" fill="#0F0F0D" stroke={i === 0 ? G : L} />
          <circle cx="16" cy="19" r="7" fill="none" stroke={i === 2 ? "#C9776B" : G} />
          {i !== 2 ? <path d="M12.5 19l2.5 2.5 4.5-5" stroke={G} fill="none" strokeWidth="1.4" /> : <path d="M13 16l6 6m0-6l-6 6" stroke="#C9776B" strokeWidth="1.4" />}
          <Bar x={30} y={12} w={70 - i * 10} o={0.5} /><Bar x={30} y={22} w={88} />
        </g>
      ))}
    </Frame>
  ),
  dashboard: (
    <Frame label="Illustration of a salon management dashboard with stats and charts">
      <rect x="16" y="35" width="56" height="155" fill="#0F0F0D" />
      {[0, 1, 2, 3, 4].map((i) => <Bar key={i} x={26} y={50 + i * 16} w={i === 1 ? 36 : 30} o={i === 1 ? 0.8 : 0.2} />)}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${84 + i * 72} 46)`}>
          <rect width="64" height="40" rx="5" fill="#0F0F0D" stroke={L} />
          <Bar x={8} y={10} w={30} o={0.3} /><rect x="8" y="20" width="26" height="10" rx="2" fill={G} opacity={0.85 - i * 0.2} />
        </g>
      ))}
      <rect x="84" y="94" width="136" height="84" rx="5" fill="#0F0F0D" stroke={L} />
      {[34, 50, 28, 60, 44, 66, 52].map((h, i) => <rect key={i} x={96 + i * 17} y={170 - h} width="10" height={h} rx="2" fill={i === 5 ? G : G2} opacity={i === 5 ? 1 : 0.45} />)}
      <rect x="228" y="94" width="64" height="84" rx="5" fill="#0F0F0D" stroke={L} />
      {[0, 1, 2, 3].map((i) => <g key={i}><circle cx="240" cy={110 + i * 18} r="5" fill={L} /><Bar x={250} y={108 + i * 18} w={32} /></g>)}
    </Frame>
  ),
  map: (
    <Frame label="Illustration of a map with routes, stations and status markers">
      <g opacity="0.35" stroke={L}>
        {[60, 90, 120, 150].map((y) => <line key={y} x1="16" y1={y} x2="304" y2={y} />)}
        {[70, 130, 190, 250].map((x) => <line key={x} x1={x} y1="35" x2={x} y2="190" />)}
      </g>
      <path d="M30 160 C 80 150, 90 90, 150 100 S 230 60, 290 70" stroke={G} strokeWidth="2" fill="none" />
      <path d="M40 70 C 100 80, 120 150, 190 140 S 260 160, 290 150" stroke={G2} strokeWidth="1.5" fill="none" strokeDasharray="5 4" />
      {[[30, 160], [95, 118], [150, 100], [215, 78], [290, 70]].map(([x, y], i) => (
        <g key={i}><circle cx={x} cy={y} r="5" fill="#0C0C0A" stroke={G} strokeWidth="1.5" />{i === 2 && <circle cx={x} cy={y} r="11" fill="none" stroke={G} opacity="0.4" />}</g>
      ))}
      <rect x="196" y="112" width="96" height="62" rx="6" fill="#0F0F0D" stroke={L} />
      <Bar x={206} y={124} w={50} o={0.6} /><Bar x={206} y={136} w={74} /><Bar x={206} y={146} w={62} />
      <rect x="206" y="156" width="40" height="10" rx="5" fill={G} opacity="0.85" />
    </Frame>
  ),
  pipeline: (
    <Frame label="Illustration of an ML pipeline: data, features, training, artifacts and inference">
      {["Data", "Features", "Train", "Artifacts", "Serve"].map((t, i) => {
        const x = 30 + i * 56, y = i % 2 ? 128 : 76;
        return (
          <g key={t}>
            {i < 4 && <path d={`M${x + 40} ${y + 14} C ${x + 52} ${y + 14}, ${x + 50} ${(i + 1) % 2 ? 142 : 90}, ${x + 56} ${(i + 1) % 2 ? 142 : 90}`} stroke={G2} fill="none" strokeDasharray="3 3" />}
            <rect x={x} y={y} width="44" height="28" rx="6" fill="#0F0F0D" stroke={i === 2 ? G : L} />
            <text x={x + 22} y={y + 18} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={i === 2 ? G : I} opacity="0.85">{t}</text>
          </g>
        );
      })}
      <Bar x={30} y={52} w={90} o={0.5} /><Bar x={30} y={170} w={150} o={0.15} />
    </Frame>
  ),
  chart: (
    <Frame label="Illustration of model evaluation charts">
      <line x1="40" y1="170" x2="190" y2="170" stroke={L} /><line x1="40" y1="50" x2="40" y2="170" stroke={L} />
      {Array.from({ length: 26 }, (_, i) => {
        const x = 50 + ((i * 37) % 130), y = 160 - ((i * 53) % 100);
        return <circle key={i} cx={x} cy={y} r="3" fill={i % 3 ? G2 : G} opacity={i % 3 ? 0.5 : 0.95} />;
      })}
      <path d="M45 150 Q 110 60 185 70" stroke={G} fill="none" strokeWidth="1.5" />
      <rect x="206" y="50" width="86" height="120" rx="6" fill="#0F0F0D" stroke={L} />
      {[[70, 0.9], [56, 0.6], [44, 0.45]].map(([w, o], i) => <g key={i}><Bar x={216} y={66 + i * 26} w={40} o={0.3} /><rect x="216" y={74 + i * 26} width={w} height="6" rx="3" fill={G} opacity={o} /></g>)}
      <text x="249" y="160" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="18" fill={G}>86.5%</text>
    </Frame>
  ),
};

export default function ProjectVisual({ kind }) {
  return visuals[kind] ?? visuals.chart;
}
