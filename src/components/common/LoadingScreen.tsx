import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, CheckCircle2, Sparkles, ChevronRight, Zap } from 'lucide-react';
import levixLogoImg from './LEvix-LoGO.jpeg';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDisplayTimeMs?: number;
}

const PHASES = [
  { progress: 20, text: 'Initializing Bio-Molecular Matrix...' },
  { progress: 45, text: 'Calibrating Neuro-Therapeutic Formulations...' },
  { progress: 70, text: 'Validating ISO 9001:2015 Quality Protocols...' },
  { progress: 90, text: 'Synchronizing BrainVive™ & Synovia Plus™ Data...' },
  { progress: 100, text: 'LEVIX Bioscience Platform Verified' },
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minDisplayTimeMs = 2600,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(PHASES[0].text);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    let animationFrameId: number;

    const updateLoader = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min((elapsed / minDisplayTimeMs) * 100, 100);
      
      // Easing function for realistic laboratory calibration feel
      const easedProgress = Math.floor(rawProgress);
      setProgress(easedProgress);

      // Match phase text
      const matched = PHASES.find(p => easedProgress <= p.progress) || PHASES[PHASES.length - 1];
      setCurrentPhase(matched.text);

      if (rawProgress < 100) {
        animationFrameId = requestAnimationFrame(updateLoader);
      } else {
        // Trigger completion transition
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsFinished(true);
            document.body.style.overflow = '';
            onComplete?.();
          }, 650); // fade out duration
        }, 300);
      }
    };

    animationFrameId = requestAnimationFrame(updateLoader);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = '';
    };
  }, [minDisplayTimeMs, onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setCurrentPhase('LEVIX Bioscience Platform Verified');
    setIsExiting(true);
    setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = '';
      onComplete?.();
    }, 400);
  };

  if (isFinished) return null;

  return (
    <div
      id="levix-loading-screen"
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden transition-all duration-700 ease-out bg-[#060A12] text-white ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic Ambient Background Bio-Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Purple biotech nebula */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-[#7137A5]/35 via-[#087F8C]/20 to-transparent rounded-full blur-[100px] animate-pulse-slow" />
        
        {/* Cyan secondary glow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-b from-[#087F8C]/25 to-transparent rounded-full blur-[90px]" />
        
        {/* Futuristic Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Top Header Bar: LEVIX Branding & Skip Option */}
      <header className="relative z-10 w-full max-w-5xl flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md p-1.5 border border-white/20 shadow-[0_0_15px_rgba(113,55,165,0.35)] flex items-center justify-center">
            <img 
              src={levixLogoImg} 
              alt="LEVIX Bio Science" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold tracking-widest text-sm sm:text-base text-white font-['Manrope']">
                LEVIX
              </span>
              <span className="text-[#A855F7] font-black text-sm">.</span>
              <span className="text-[10px] text-purple-300 font-mono tracking-wider px-1.5 py-0.5 rounded bg-purple-950/70 border border-purple-500/30">
                BIO SCIENCE
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-tight hidden sm:block">
              Advanced Neuro & Therapeutic Formulations
            </p>
          </div>
        </div>

        {/* Skip / Enter Site Button */}
        <button
          onClick={handleSkip}
          className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-xs text-slate-300 hover:text-white backdrop-blur-md transition-all duration-300 cursor-pointer shadow-sm"
          title="Enter website immediately"
        >
          <span className="font-medium">Enter Site</span>
          <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </header>

      {/* Centerpiece: Glowing 3D DNA Double Helix Animation & Brand Logo */}
      <main className="relative z-10 flex flex-col items-center justify-center my-auto w-full max-w-lg">
        
        {/* Embossed 3D LB DNA Molecular Logo */}
        <div className="relative mb-5 flex items-center justify-center">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#7137A5] via-[#087F8C] to-[#A855F7] opacity-60 blur-lg animate-pulse" />
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 p-1.5 shadow-[0_0_35px_rgba(113,55,165,0.65)] border border-white/60 flex items-center justify-center transition-transform hover:scale-105 duration-300">
            <img 
              src={levixLogoImg} 
              alt="LEVIX Bio Science 3D DNA Logo" 
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </div>
        </div>

        {/* Holographic DNA Container with Animated Ring & Scanner */}
        <div className="relative flex items-center justify-center">
          
          {/* Outer Pulsing Aura Ring */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-purple-500/30 animate-ping opacity-20 pointer-events-none" style={{ animationDuration: '3s' }} />
          
          {/* Orbital Tech Dashed Ring */}
          <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-dashed border-cyan-400/35 animate-spin-very-slow pointer-events-none" />
          
          {/* Secondary Counter-rotating Ring */}
          <div 
            className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#7137A5]/40 pointer-events-none"
            style={{ animation: 'spin-very-slow 30s linear infinite reverse' }}
          />

          {/* Glowing Capsule / Viewport for the DNA GIF */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-3xl p-2 bg-gradient-to-b from-purple-900/30 via-[#071521]/80 to-teal-950/40 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(113,55,165,0.45)] overflow-hidden flex items-center justify-center">
            
            {/* Ambient Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#087F8C]/15 via-transparent to-[#7137A5]/20 pointer-events-none" />

            {/* Futuristic Vertical Scanning Laser Bar */}
            <div 
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 z-20 pointer-events-none shadow-[0_0_12px_#38bdf8]"
              style={{
                animation: 'scannerMove 2.2s ease-in-out infinite alternate',
              }}
            />

            {/* The Spectacular DNA GIF */}
            <img
              src="/dna.gif"
              alt="LEVIX Bio Science 3D DNA Helix"
              className="w-full h-full object-cover rounded-2xl relative z-10 transition-transform duration-700 hover:scale-105 filter drop-shadow-[0_0_16px_rgba(8,127,140,0.6)]"
              loading="eager"
            />

            {/* Corner Tech Reticles */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/80 z-20" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/80 z-20" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-400/80 z-20" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-400/80 z-20" />
          </div>
        </div>

        {/* Brand Slogan & Subheading */}
        <div className="text-center mt-6 sm:mt-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>MOLECULAR SCIENCE & NEURO-INNOVATION</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-['Manrope']">
            Science you trust, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-cyan-400">Health you feel</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto font-sans leading-relaxed">
            Formulating next-generation neuroprotective and therapeutic solutions.
          </p>
        </div>

        {/* Progress Bar & Status Section */}
        <div className="w-full mt-7 sm:mt-9 space-y-3">
          {/* Telemetry Status Line */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-2 text-cyan-300 truncate max-w-[280px] sm:max-w-xs">
              <Activity className="w-3.5 h-3.5 animate-pulse text-teal-400 shrink-0" />
              <span className="truncate">{currentPhase}</span>
            </span>
            <span className="font-bold text-white text-sm tracking-wider">
              {progress}%
            </span>
          </div>

          {/* High-tech Glowing Progress Track */}
          <div className="relative w-full h-2.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/10 p-0.5 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7137A5] via-[#0E9AA6] to-[#38BDF8] transition-all duration-150 ease-out relative shadow-[0_0_15px_rgba(14,154,166,0.6)]"
              style={{ width: `${progress}%` }}
            >
              {/* Animated Shimmer Flare */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Micro badges below progress */}
          <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>GMP Standards</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>BrainVive™ / Synovia Plus™</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer System Status */}
      <footer className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-mono border-t border-white/5 pt-4">
        <span>LEVIX BIO SCIENCE PVT LTD • CHENNAI, INDIA</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-slate-400">SECURE PHARMACEUTICAL GATEWAY</span>
        </div>
      </footer>

      {/* Inline Keyframes for scanner laser animation */}
      <style>{`
        @keyframes scannerMove {
          0% {
            top: 4px;
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            top: calc(100% - 6px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};
