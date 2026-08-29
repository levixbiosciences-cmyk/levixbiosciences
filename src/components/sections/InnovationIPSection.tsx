import React from 'react';
import { ArrowRight, ShieldCheck, FileKey, Sparkles, Award } from 'lucide-react';
import { PageRoute } from '../../types';

interface InnovationIPSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const InnovationIPSection: React.FC<InnovationIPSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F9F8] text-[#17212B] relative overflow-hidden border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial IP Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Big Editorial Number Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1F33] text-white border border-[#B9D8D6]/20 shadow-2xl relative overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#087F8C]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono uppercase text-[#B9D8D6]">
                  <FileKey className="w-3.5 h-3.5 text-[#087F8C]" />
                  <span>Intellectual Property Strategy</span>
                </div>

                <div className="space-y-1">
                  <div className="text-7xl sm:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-[#B9D8D6] to-[#087F8C] font-['Manrope'] tracking-tighter leading-none">
                    09
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-[#B9D8D6] font-['Manrope']">
                    Patents &amp; Formulation Innovations
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#66737F] leading-relaxed">
                  Protecting novel lipid-matrix carriers, multi-target stereoisomer ratios, and enteric micro-encapsulation delivery systems across international patent offices (IPO &amp; PCT).
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#B9D8D6]">
                  <span>6 Granted</span>
                  <span>3 Under Review / PCT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Strategy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#087F8C] font-mono">
              <span className="w-6 h-[2px] bg-[#087F8C]" />
              <span>PROPRIETARY VALUE CREATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] tracking-tight leading-[1.15] font-['Manrope']">
              Protecting Ideas That <br />
              <span className="text-[#087F8C]">Move Healthcare Forward.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#66737F] leading-relaxed">
              At NovaThera Life Sciences, intellectual property is not merely defensive—it represents our commitment to solving long-standing pharmaceutical formulation barriers. From stabilizing hygroscopic methyl-folate matrices to achieving 400% higher gastro-intestinal absorption of lipophilic CoQ10, our patents protect therapies that offer true clinical differentiation.
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-[#087F8C] font-bold text-sm font-['Manrope']">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Delivery System IP</span>
                </div>
                <p className="text-xs text-[#66737F] leading-relaxed">
                  LMPDS™ (Lipid Matrix) &amp; SMEDDS™ self-microemulsifying carrier architectures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-[#0E9AA6] font-bold text-sm font-['Manrope']">
                  <Sparkles className="w-4 h-4" />
                  <span>Isomer Synergy IP</span>
                </div>
                <p className="text-xs text-[#66737F] leading-relaxed">
                  Precision stereoisomer ratios (40:1 inositol) and high-bioavailability active metabolites.
                </p>
              </div>
            </div>

            {/* Link Action */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('research')}
                className="inline-flex items-center gap-2 text-base font-bold text-[#087F8C] hover:text-[#0B1F33] transition-colors group"
                id="explore-innovation-link"
              >
                <span>Explore Our Innovation Portfolio &amp; Patent Filings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
