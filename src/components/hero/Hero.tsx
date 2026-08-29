import React from 'react';
import { 
  ArrowRight, ShieldCheck, Award, Microscope, 
  Sparkles, CheckCircle2, Dna, Activity, Zap
} from 'lucide-react';
import { MolecularParticles } from './MolecularParticles';

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick = () => {
    document.getElementById('formulations')?.scrollIntoView({ behavior: 'smooth' });
  },
  onContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}) => {
  return (
    <section 
      id="home"
      className="relative min-h-[85vh] lg:min-h-[88vh] bg-gradient-to-b from-[#060B14] via-[#0B1324] to-[#0F172A] text-white flex items-center overflow-hidden py-14 sm:py-20 lg:py-24"
    >
      {/* Background Interactive Particle Canvas */}
      <MolecularParticles />

      {/* Radial Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] h-[350px] sm:h-[600px] bg-[#0066CC]/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00D2FF]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-[#0066CC]/15">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
              <span className="text-xs sm:text-sm font-bold text-[#38BDF8] tracking-wide">
                &quot;Science you trust, health you feel.&quot;
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight font-['Manrope'] leading-[1.08]">
                Science You Trust, <br />
                <span className="bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#FFFFFF] bg-clip-text text-transparent">
                  Health You Feel.
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-[#94A3B8] font-medium tracking-wide">
                LEVIX bio science pvt ltd • Chennai, India
              </p>
            </div>

            {/* Scientific Description */}
            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl leading-relaxed">
              We design and manufacture evidence-informed pharmaceutical and specialized therapeutic formulations engineered for maximum cellular bioavailability and clinical trust.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0066CC] to-[#0A84FF] hover:from-[#0052CC] hover:to-[#0066CC] text-white text-sm font-bold shadow-lg shadow-[#0066CC]/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group touch-target"
                id="hero-explore-btn"
              >
                <span>Explore Formulations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-bold transition-all duration-300 touch-target shadow hover:scale-[1.02]"
                id="hero-contact-btn"
              >
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#CBD5E1] border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                <span>cGMP Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Microscope className="w-4 h-4 text-[#38BDF8]" />
                <span>HPLC 100% Tested</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#00D2FF]" />
                <span>WHO-GMP Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#38BDF8]" />
                <span>High Bioavailability</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Molecular Showcase & Science Metrics (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-[#0066CC]/20 text-center space-y-6">
              
              {/* Glowing Centerpiece Icon */}
              <div className="relative mx-auto w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0066CC] to-[#00D2FF] opacity-25 animate-pulse blur-2xl" />
                
                {/* 3D LB SVG Emblem */}
                <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-[#060B14] border border-[#38BDF8]/40 p-4 shadow-2xl flex items-center justify-center group hover:scale-105 transition-transform">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    {/* Blue L */}
                    <path
                      d="M 22 22 L 36 22 L 36 68 L 56 68 C 58 68 59 70 59 73 C 59 76 58 78 56 78 L 22 78 C 20 78 18 76 18 73 C 18 70 20 68 22 68 L 26 68 L 26 28 L 22 28 Z"
                      fill="#0088FF"
                    />
                    {/* Silver B */}
                    <path
                      d="M 44 22 L 66 22 C 77 22 83 28 83 36 C 83 42 79 47 72 49 C 81 51 86 57 86 66 C 86 75 79 80 66 80 L 44 80 Z M 54 30 L 54 45 L 65 45 C 71 45 74 42 74 37 C 74 33 71 30 65 30 Z M 54 54 L 54 72 L 66 72 C 73 72 77 68 77 63 C 77 57 73 54 66 54 Z"
                      fill="#E2E8F0"
                    />
                    {/* Glowing DNA Spiral */}
                    <path
                      d="M 40 20 Q 32 35 48 50 Q 64 65 44 82"
                      stroke="#00D2FF"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <path
                      d="M 48 20 Q 64 35 40 50 Q 28 65 52 82"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Title & Tagline in Showcase */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-['Manrope'] text-white">
                  LEVIX bio science pvt ltd
                </h3>
                <p className="text-xs text-[#38BDF8] font-mono uppercase tracking-wider">
                  PRECISION BIOACTIVE FORMULATIONS
                </p>
              </div>

              {/* 4 Scientific Metric Pills */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 text-left">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Bioavailability</span>
                  <div className="text-sm font-bold font-mono text-[#00D2FF]">&gt;300% AUC</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Purity Verification</span>
                  <div className="text-sm font-bold font-mono text-emerald-400">100% HPLC</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Manufacturing</span>
                  <div className="text-sm font-bold font-mono text-[#38BDF8]">cGMP / ISO</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Formulations</span>
                  <div className="text-sm font-bold font-mono text-white">25+ Brands</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
