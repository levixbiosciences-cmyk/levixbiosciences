import React, { useState } from 'react';
import { Brain, Activity, HeartHandshake, ShieldAlert, Sparkles, ArrowRight, CheckCircle2, Pill } from 'lucide-react';
import { therapeuticAreas } from '../data/therapeuticAreas';
import { products } from '../data/products';
import { PageRoute } from '../types';

interface TherapeuticAreasPageProps {
  initialAreaId?: string;
  onNavigate: (route: PageRoute, params?: { productId?: string; areaId?: string }) => void;
}

export const TherapeuticAreasPage: React.FC<TherapeuticAreasPageProps> = ({
  initialAreaId,
  onNavigate
}) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(initialAreaId || 'all');

  const getAreaIcon = (name: string) => {
    switch (name) {
      case 'Brain': return <Brain className="w-6 h-6 text-[#087F8C]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#087F8C]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#087F8C]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#087F8C]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#087F8C]" />;
      default: return <Brain className="w-6 h-6 text-[#087F8C]" />;
    }
  };

  const displayedAreas = selectedAreaId === 'all'
    ? therapeuticAreas
    : therapeuticAreas.filter(a => a.id === selectedAreaId);

  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">
      
      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden -mt-28 mb-12 subtle-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#B9D8D6] text-xs font-mono uppercase">
              <span>CLINICAL FOCUS DOMAINS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Manrope']">
              Therapeutic Areas &amp; <br />
              <span className="text-[#B9D8D6]">Clinical Portfolios.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B9D8D6]/85 leading-relaxed">
              Targeting cellular mechanisms across five specialized clinical disciplines to deliver differentiated patient outcomes in chronic and acute healthcare management.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedAreaId('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedAreaId === 'all'
                ? 'bg-[#0B1F33] text-white shadow-sm'
                : 'bg-white hover:bg-[#EAF5F7] text-[#66737F] border border-[#E2E8F0]'
            }`}
          >
            All Therapeutic Areas ({therapeuticAreas.length})
          </button>
          {therapeuticAreas.map(area => (
            <button
              key={area.id}
              onClick={() => setSelectedAreaId(area.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedAreaId === area.id
                  ? 'bg-[#087F8C] text-white shadow-sm'
                  : 'bg-white hover:bg-[#EAF5F7] text-[#66737F] border border-[#E2E8F0]'
              }`}
            >
              {area.title.split('&')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Area Deep Dive Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {displayedAreas.map((area) => {
          const areaProducts = products.filter(p => p.therapeuticAreaId === area.id);

          return (
            <div
              key={area.id}
              id={`area-card-${area.id}`}
              className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm overflow-hidden p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Area Overview (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#EAF5F7]">
                        {getAreaIcon(area.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#087F8C]">
                          Domain {area.number}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope']">
                          {area.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-[#0E9AA6] uppercase font-semibold">
                    {area.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#66737F] leading-relaxed">
                    {area.description}
                  </p>

                  {/* Clinical Rationale Box */}
                  <div className="p-4.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <h4 className="text-xs font-mono uppercase text-[#0B1F33] font-bold">
                      Pathophysiological Rationale
                    </h4>
                    <p className="text-xs sm:text-sm text-[#66737F] leading-relaxed">
                      {area.clinicalRationale}
                    </p>
                  </div>

                  {/* Pathophysiology focus list */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold">
                      Key Molecular &amp; Cellular Targets
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {area.pathophysiologyFocus.map((focus, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#17212B]">
                          <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Molecules tags */}
                  <div className="pt-2">
                    <p className="text-[11px] font-mono text-[#66737F] uppercase mb-2">
                      Active Biomolecules in Development &amp; Market
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.keyMolecules.map((mol) => (
                        <span
                          key={mol}
                          className="text-xs px-3 py-1 rounded-lg bg-[#EAF5F7] border border-[#B9D8D6] text-[#087F8C] font-semibold"
                        >
                          {mol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Visual & Product Connect (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-md h-56 relative">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <p className="text-xs font-mono text-[#B9D8D6] uppercase">Core Indication</p>
                      <p className="text-sm font-bold font-['Manrope']">{area.featuredIndication}</p>
                    </div>
                  </div>

                  {/* Associated Products */}
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase text-[#0B1F33]">
                        Available Formulations
                      </span>
                      <span className="text-xs font-mono text-[#087F8C]">
                        {areaProducts.length} Product{areaProducts.length > 1 ? 's' : ''}
                      </span>
                    </div>

                    {areaProducts.length === 0 ? (
                      <p className="text-xs text-[#66737F]">Formulations in Phase II/III clinical pipeline.</p>
                    ) : (
                      <div className="space-y-2">
                        {areaProducts.map(p => (
                          <button
                            key={p.id}
                            onClick={() => onNavigate('product-detail', { productId: p.slug })}
                            className="w-full p-3 rounded-xl bg-white hover:bg-[#EAF5F7] border border-[#E2E8F0] hover:border-[#087F8C]/40 text-left transition-all flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-2.5">
                              <Pill className="w-4 h-4 text-[#087F8C]" />
                              <div>
                                <p className="text-xs font-bold text-[#0B1F33] group-hover:text-[#087F8C] transition-colors">{p.name}</p>
                                <p className="text-[11px] text-[#66737F] line-clamp-1">{p.tagline}</p>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#66737F] group-hover:text-[#087F8C] group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
