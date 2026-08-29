import React from 'react';
import { Microscope, ShieldCheck, HeartPulse, TrendingUp, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { qualityPillars } from '../../data/quality';
import { PageRoute } from '../../types';

interface QualitySectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onNavigate }) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Microscope': return <Microscope className="w-5 h-5 text-[#087F8C]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#087F8C]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#087F8C]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#087F8C]" />;
      default: return <Award className="w-5 h-5 text-[#087F8C]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0B1F33] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#087F8C] font-mono mb-3">
              <span className="w-6 h-[2px] bg-[#087F8C]" />
              <span>PHARMACEUTICAL RIGOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Manrope'] mb-3">
              Quality Without Compromise.
            </h2>
            <p className="text-base sm:text-lg text-[#B9D8D6]/85 max-w-2xl leading-relaxed">
              Every formulation is verified through advanced chromatography, rigorous stability testing, and validated cleanroom manufacturing standards.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => onNavigate('quality')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/15 hover:border-white/30 transition-all"
              id="view-quality-specs-btn"
            >
              <span>Explore Analytical Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid with High-Res Visual Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left 4 Pillars Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {qualityPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#087F8C]/60 hover:bg-white/[0.07] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#0E9AA6]">{pillar.number}</span>
                    <div className="p-2 rounded-lg bg-white/5">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-['Manrope'] mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#B9D8D6]/80 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#66737F]">Verified Standard</span>
                  <span className="text-xs font-mono font-bold text-[#087F8C]">{pillar.metric}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Visual QC Cleanroom Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#B9D8D6]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1000&q=80"
                alt="NovaThera Analytical Laboratory and Quality Assurance Facility"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521] via-[#071521]/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0B1F33]/95 backdrop-blur-md border border-white/15 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#087F8C] font-semibold">Testing Standard</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#B9D8D6]">HPLC / GC-MS</span>
                </div>
                <p className="text-sm font-bold text-white font-['Manrope']">
                  Dual-Stage Release Protocol
                </p>
                <div className="space-y-1 text-xs text-[#B9D8D6]/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#087F8C]" />
                    <span>Raw Botanical &amp; Synthetic Active Purity</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#087F8C]" />
                    <span>Finished Pack Dissolution &amp; Heavy Metal Clearance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
