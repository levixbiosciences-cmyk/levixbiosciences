import React from 'react';

interface LevixLogoProps {
  variant?: 'full' | 'symbol' | 'horizontal';
  theme?: 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const LevixLogo: React.FC<LevixLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = false,
}) => {
  const iconDimensions = {
    sm: { w: 34, h: 34 },
    md: { w: 44, h: 44 },
    lg: { w: 56, h: 56 },
    xl: { w: 72, h: 72 },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* 3D Intertwined LB Monogram with DNA Helix */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconDimensions.w, height: iconDimensions.h }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Electric Blue Gradient for "L" and DNA strands */}
            <linearGradient id="levixBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0088FF" />
              <stop offset="40%" stopColor="#0066CC" />
              <stop offset="100%" stopColor="#003B7A" />
            </linearGradient>

            {/* Deep Blue Specular */}
            <linearGradient id="levixBlueHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#0066CC" />
              <stop offset="100%" stopColor="#002D62" />
            </linearGradient>

            {/* Metallic Platinum Silver Gradient for "B" */}
            <linearGradient id="levixSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            {/* Drop Shadows */}
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0066CC" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Background Badge for dark/light contrast */}
          <rect width="100" height="100" rx="22" fill="#0B1324" />
          <rect width="98" height="98" x="1" y="1" rx="21" stroke="url(#levixSilverGrad)" strokeWidth="1.2" strokeOpacity="0.35" />

          {/* Left Serif Stem: "L" (Electric Blue) */}
          <path
            d="M 22 22 L 36 22 L 36 68 L 56 68 C 58 68 59 70 59 73 C 59 76 58 78 56 78 L 22 78 C 20 78 18 76 18 73 C 18 70 20 68 22 68 L 26 68 L 26 28 L 22 28 Z"
            fill="url(#levixBlueGrad)"
            filter="url(#glowFilter)"
          />

          {/* Right Serif Body: "B" (Metallic Chrome Silver) */}
          <path
            d="M 44 22 L 66 22 C 77 22 83 28 83 36 C 83 42 79 47 72 49 C 81 51 86 57 86 66 C 86 75 79 80 66 80 L 44 80 Z M 54 30 L 54 45 L 65 45 C 71 45 74 42 74 37 C 74 33 71 30 65 30 Z M 54 54 L 54 72 L 66 72 C 73 72 77 68 77 63 C 77 57 73 54 66 54 Z"
            fill="url(#levixSilverGrad)"
          />

          {/* Intertwined Central DNA Double-Helix Strand */}
          <g strokeWidth="2.4" strokeLinecap="round">
            {/* Strand 1 (Blue Spiral) */}
            <path
              d="M 40 20 Q 32 35 48 50 Q 64 65 44 82"
              stroke="url(#levixBlueHighlight)"
              fill="none"
            />
            {/* Strand 2 (Silver Spiral) */}
            <path
              d="M 48 20 Q 64 35 40 50 Q 28 65 52 82"
              stroke="url(#levixSilverGrad)"
              fill="none"
            />

            {/* Base Pairs / Rungs */}
            <line x1="38" y1="26" x2="52" y2="28" stroke="#00D2FF" strokeWidth="1.8" />
            <line x1="35" y1="36" x2="55" y2="38" stroke="#E2E8F0" strokeWidth="1.8" />
            <line x1="42" y1="46" x2="46" y2="48" stroke="#00D2FF" strokeWidth="2" />
            <line x1="37" y1="58" x2="57" y2="56" stroke="#E2E8F0" strokeWidth="1.8" />
            <line x1="36" y1="68" x2="54" y2="70" stroke="#00D2FF" strokeWidth="1.8" />
            <line x1="42" y1="76" x2="48" y2="78" stroke="#E2E8F0" strokeWidth="1.8" />
          </g>

          {/* Glowing Molecular Nodes */}
          <circle cx="48" cy="20" r="2.2" fill="#00D2FF" />
          <circle cx="44" cy="50" r="2.5" fill="#FFFFFF" />
          <circle cx="44" cy="82" r="2.2" fill="#00D2FF" />
        </svg>
      </div>

      {/* Typography: LEVIX BIO SCIENCE PVT LTD */}
      {variant !== 'symbol' && (
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black tracking-wider text-[#0B1324] font-['Manrope']">
              LEVIX
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#0066CC]">.</span>
          </div>

          <div className="flex items-center gap-1.5 -mt-0.5">
            <div className="h-[1px] w-2.5 bg-[#0066CC]" />
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#475569] font-mono whitespace-nowrap">
              BIO SCIENCE PVT LTD
            </span>
            <div className="h-[1px] w-2.5 bg-[#0066CC]" />
          </div>

          {showTagline && (
            <span className="text-[10px] italic text-[#0066CC] font-semibold mt-0.5 tracking-tight">
              &quot;Science you trust, health you feel.&quot;
            </span>
          )}
        </div>
      )}
    </div>
  );
};
