import React, { useState } from 'react';
import { Network, FileCheck2, Layers, ShieldCheck, ArrowRight, Dna, CheckCircle2, ChevronRight } from 'lucide-react';
import { researchPrinciples, sciencePlatforms } from '../../data/research';
import { PageRoute } from '../../types';

interface SciencePlatformsSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const SciencePlatformsSection: React.FC<SciencePlatformsSectionProps> = ({ onNavigate }) => {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>(sciencePlatforms[0].id);

  const activePlatform = sciencePlatforms.find(p => p.id === selectedPlatformId) || sciencePlatforms[0];

  const getPrincipleIcon = (name: string) => {
    switch (name) {
      case 'Network': return <Network className="w-6 h-6 text-[#087F8C]" />;
      case 'FileCheck2': return <FileCheck2 className="w-6 h-6 text-[#087F8C]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#087F8C]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#087F8C]" />;
      default: return <Dna className="w-6 h-6 text-[#087F8C]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#071521] text-white relative overflow-hidden subtle-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#087F8C] font-mono mb-3">
            <span className="w-6 h-[2px] bg-[#087F8C]" />
            <span>R&D METHODOLOGY & PLATFORMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Manrope'] mb-4">
            Science at the Core.
          </h2>
          <p className="text-base sm:text-lg text-[#B9D8D6]/85 leading-relaxed">
            Every formulation begins with a clear understanding of biological mechanisms, peer-reviewed evidence, and specific clinical patient needs.
          </p>
        </div>

        {/* 4 Research Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchPrinciples.map((principle) => (
            <div
              key={principle.id}
              className="p-6 rounded-2xl bg-[#0B1F33]/80 border border-white/10 hover:border-[#087F8C]/60 transition-all duration-300 flex flex-col justify-between group hover:bg-[#0B1F33]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#0E9AA6]">
                    {principle.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#087F8C]/20 transition-colors">
                    {getPrincipleIcon(principle.iconName)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-['Manrope'] mb-2 group-hover:text-[#B9D8D6] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#66737F] leading-relaxed mb-4">
                  {principle.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs text-[#B9D8D6]">
                {principle.keyAspects.slice(0, 2).map((aspect, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight line-clamp-1">{aspect}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Science Platforms Interactive Hub */}
        <div className="rounded-3xl bg-[#0B1F33]/90 border border-[#B9D8D6]/20 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
                Proprietary Translational Technology
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
                Active Science Platforms
              </h3>
            </div>
            <button
              onClick={() => onNavigate('research')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087F8C] hover:text-[#B9D8D6] transition-colors"
            >
              <span>Deep-Dive R&D Whitepapers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Platform Tab Strip */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-none">
            {sciencePlatforms.map((platform) => {
              const isSelected = platform.id === selectedPlatformId;
              return (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatformId(platform.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${isSelected
                      ? 'bg-[#087F8C] text-white shadow-md shadow-[#087F8C]/30'
                      : 'bg-white/5 hover:bg-white/10 text-[#B9D8D6] border border-white/5'
                    }`}
                >
                  <span>{platform.title}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/20 text-white' : 'bg-white/10 text-[#0E9AA6]'}`}>
                    {platform.code}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Platform Dynamic Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/5">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-[#087F8C]/20 text-[#B9D8D6] border border-[#087F8C]/30">
                  {activePlatform.category}
                </span>
                <span className="text-xs font-mono text-[#66737F]">
                  Clinical Status: {activePlatform.clinicalPhase}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white font-['Manrope']">
                {activePlatform.title} ({activePlatform.code})
              </h4>

              <p className="text-sm sm:text-base text-[#B9D8D6]/90 leading-relaxed">
                {activePlatform.deepDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-[11px] font-mono text-[#66737F] uppercase">Biological Targets</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{activePlatform.biologicalTarget}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-[11px] font-mono text-[#66737F] uppercase">Formulation Lead</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#0E9AA6] mt-0.5">{activePlatform.formulationLead}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-[#071521] to-[#0B1F33] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#66737F] uppercase">Publication Evidence</span>
                <span className="text-xs font-bold text-[#087F8C]">{activePlatform.publicationsCount} Indexed Studies</span>
              </div>

              <p className="text-xs text-[#B9D8D6]/80 leading-relaxed">
                Validated in preclinical pharmacology and randomized clinical trials with peer-reviewed publications.
              </p>

              <button
                onClick={() => onNavigate('research')}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#087F8C] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
              >
                <span>View Full Platform Dossier</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
