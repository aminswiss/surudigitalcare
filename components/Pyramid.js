
export default function Pyramid({ size = 160, className = '' }) {
  const style = { width: size + 'px', height: 'auto', display: 'block' };
  return (
    <svg className={className} style={style} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gold pyramid logo">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#f6d06b"/>
          <stop offset="1" stopColor="#d4a400"/>
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0a3b20" floodOpacity="0.25"/>
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <path d="M100 18 L28 98 L100 178 L172 98 Z" fill="url(#g1)" stroke="#b88400" strokeWidth="2"/>
        <path d="M100 18 L100 178" stroke="#c98f00" strokeWidth="2" opacity="0.35"/>
        <path d="M62 102 L138 102" stroke="#c98f00" strokeWidth="2" opacity="0.28"/>
      </g>
    </svg>
  );
}
