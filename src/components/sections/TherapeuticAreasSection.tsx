import React, { useState } from 'react';
import { Brain, Activity, HeartHandshake, ShieldAlert, Sparkles, ArrowRight, Check } from 'lucide-react';
import { therapeuticAreas } from '../../data/therapeuticAreas';
import { PageRoute } from '../../types';

interface TherapeuticAreasSectionProps {
  onNavigate: (route: PageRoute, params?: { areaId?: string }) => void;
}

export const TherapeuticAreasSection: React.FC<TherapeuticAreasSectionProps> = ({ onNavigate }) => {
  const [activeCard, setActiveCard] = useState<string>('neurology');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0B1F33] text-white relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#087F8C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0E9AA6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#087F8C] font-mono mb-3">
              <span className="w-6 h-[2px] bg-[#087F8C]" />
              <span>CLINICAL SPECIALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Manrope']">
              Focused on the Conditions <br />
              <span className="text-[#B9D8D6]">That Matter Most.</span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate('therapeutic-areas')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/15 hover:border-white/30 transition-all self-start md:self-auto group"
            id="view-all-therapeutic-areas-btn"
          >
            <span>View All Therapeutic Portfolios</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5 Therapeutic Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapeuticAreas.map((area, index) => {
            const isSpan = index === 0 || index === 3;
            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveCard(area.id)}
                className={`group relative rounded-3xl bg-gradient-to-b from-[#0E2842]/90 to-[#071521]/95 border border-[#B9D8D6]/15 hover:border-[#087F8C]/80 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-[#087F8C]/10 ${isSpan ? 'lg:col-span-1' : ''
                  }`}
              >
                {/* Background Image subtle watermark on hover */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Top bar with number and icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-[#087F8C] group-hover:text-[#B9D8D6] transition-colors">
                      {area.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B9D8D6] group-hover:text-white group-hover:bg-[#087F8C] transition-all">
                      {getIcon(area.iconName)}
                    </div>
                  </div>

                  {/* Title & subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-['Manrope'] group-hover:text-[#B9D8D6] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs font-mono text-[#0E9AA6] mt-1">
                      {area.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#B9D8D6]/80 leading-relaxed line-clamp-3">
                    {area.description}
                  </p>

                  {/* Key molecules tag list */}
                  <div className="pt-2">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#66737F] mb-1.5">
                      Target Biomolecules
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.keyMolecules.slice(0, 2).map((mol) => (
                        <span
                          key={mol}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#B9D8D6]"
                        >
                          {mol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-[#66737F]">
                    <span className="text-white font-semibold">{area.marketedProductsCount}</span> Marketed • <span className="text-white font-semibold">{area.activePipelineCount}</span> In Trial
                  </div>

                  <button
                    onClick={() => onNavigate('therapeutic-areas', { areaId: area.id })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087F8C] group-hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Area</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
