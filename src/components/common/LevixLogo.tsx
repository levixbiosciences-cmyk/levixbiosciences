import React from 'react';
import levixLogoSrc from './LEvix-loGo.jpeg';

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
      {/* LB Logo Image */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconDimensions.w, height: iconDimensions.h }}
      >
        <img
          src={levixLogoSrc}
          alt="LEVIX Bio Science Logo"
          className="w-full h-full object-contain drop-shadow-md"
          draggable={false}
        />
      </div>

      {/* Typography: LEVIX BIO SCIENCE PVT LTD */}
      {variant !== 'symbol' && (
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black tracking-wider text-[#0E0818] font-['Manrope']">
              LEVIX
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#7B1FA2]">.</span>
          </div>

          <div className="flex items-center gap-1.5 -mt-0.5">
            <div className="h-[1px] w-2.5 bg-[#7B1FA2]" />
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#475569] font-mono whitespace-nowrap">
              BIO SCIENCE PVT LTD
            </span>
            <div className="h-[1px] w-2.5 bg-[#7B1FA2]" />
          </div>

          {showTagline && (
            <span className="text-[10px] italic text-[#7B1FA2] font-semibold mt-0.5 tracking-tight">
              &quot;Science you trust, health you feel.&quot;
            </span>
          )}
        </div>
      )}
    </div>
  );
};
