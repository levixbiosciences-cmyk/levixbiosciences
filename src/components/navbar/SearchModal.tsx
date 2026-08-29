import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, Pill, Activity, Dna, FileText, Briefcase } from 'lucide-react';
import { products } from '../../data/products';
import { therapeuticAreas } from '../../data/therapeuticAreas';
import { sciencePlatforms, patentsPortfolio, scientificPapers } from '../../data/research';
import { jobOpenings } from '../../data/careers';
import { PageRoute } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute, params?: { productId?: string; areaId?: string }) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();

    const matchedProducts = products.filter(
      p => p.name.toLowerCase().includes(q) || 
           p.category.toLowerCase().includes(q) ||
           p.description.toLowerCase().includes(q) ||
           p.targetPathways.some(t => t.toLowerCase().includes(q))
    );

    const matchedAreas = therapeuticAreas.filter(
      a => a.title.toLowerCase().includes(q) || 
           a.description.toLowerCase().includes(q) ||
           a.keyMolecules.some(m => m.toLowerCase().includes(q))
    );

    const matchedPlatforms = sciencePlatforms.filter(
      s => s.title.toLowerCase().includes(q) || 
           s.code.toLowerCase().includes(q) ||
           s.shortDesc.toLowerCase().includes(q)
    );

    const matchedPatents = patentsPortfolio.filter(
      pat => pat.title.toLowerCase().includes(q) || 
             pat.patentNumber.toLowerCase().includes(q) ||
             pat.therapeuticField.toLowerCase().includes(q)
    );

    const matchedJobs = jobOpenings.filter(
      j => j.title.toLowerCase().includes(q) ||
           j.department.toLowerCase().includes(q) ||
           j.skills.some(s => s.toLowerCase().includes(q))
    );

    return {
      products: matchedProducts,
      areas: matchedAreas,
      platforms: matchedPlatforms,
      patents: matchedPatents,
      jobs: matchedJobs
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults = results 
    ? results.products.length + results.areas.length + results.platforms.length + results.patents.length + results.jobs.length 
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#071521]/80 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-[#0B1F33] border border-[#B9D8D6]/20 rounded-2xl shadow-2xl overflow-hidden text-white transition-all transform animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Input header */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-[#087F8C] shrink-0" />
          <input
            type="text"
            placeholder="Search products, molecules, therapeutic areas, patents..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-white text-base sm:text-lg placeholder:text-[#66737F] font-medium"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-[#66737F] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2 py-1 text-xs uppercase tracking-wider rounded bg-white/10 text-[#B9D8D6] hover:bg-white/20 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!query.trim() ? (
            <div className="py-8 text-center text-[#66737F]">
              <p className="text-sm font-medium mb-3">Suggested Quick Searches</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Neurovia', 'Cardivex', 'Liposomal Choline', '40:1 Inositol', 'eNOS Endothelial', 'Clinical Trials', 'Patents'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#B9D8D6] hover:bg-[#087F8C]/20 hover:border-[#087F8C] transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-[#66737F]">
              <p className="text-base text-white mb-1">No matching results for &ldquo;{query}&rdquo;</p>
              <p className="text-sm">Try searching for a molecular target, product brand name, or therapeutic domain.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Products */}
              {results && results.products.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087F8C] mb-2">
                    <Pill className="w-3.5 h-3.5" />
                    <span>Therapeutic Products ({results.products.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.products.map(prod => (
                      <button
                        key={prod.id}
                        onClick={() => {
                          onNavigate('product-detail', { productId: prod.slug });
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-[#087F8C]/20 border border-white/5 hover:border-[#087F8C]/40 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white group-hover:text-[#B9D8D6] transition-colors">{prod.name}</span>
                            <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#B9D8D6]">{prod.category}</span>
                          </div>
                          <p className="text-xs text-[#66737F] line-clamp-1 mt-0.5">{prod.tagline}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#66737F] group-hover:text-[#087F8C] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Therapeutic Areas */}
              {results && results.areas.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E9AA6] mb-2">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Therapeutic Areas ({results.areas.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.areas.map(area => (
                      <button
                        key={area.id}
                        onClick={() => {
                          onNavigate('therapeutic-areas', { areaId: area.id });
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-[#0E9AA6]/20 border border-white/5 hover:border-[#0E9AA6]/40 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <span className="font-semibold text-white group-hover:text-[#B9D8D6]">{area.title}</span>
                          <p className="text-xs text-[#66737F] line-clamp-1 mt-0.5">{area.subtitle}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#66737F] group-hover:text-[#0E9AA6] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Science Platforms & Patents */}
              {results && results.platforms.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B9D8D6] mb-2">
                    <Dna className="w-3.5 h-3.5" />
                    <span>Research Platforms ({results.platforms.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.platforms.map(plat => (
                      <button
                        key={plat.id}
                        onClick={() => {
                          onNavigate('research');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">{plat.title}</span>
                            <span className="text-[11px] font-mono text-[#087F8C]">{plat.code}</span>
                          </div>
                          <p className="text-xs text-[#66737F] line-clamp-1">{plat.shortDesc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#66737F] group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Jobs */}
              {results && results.jobs.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B9D8D6] mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Careers ({results.jobs.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.jobs.map(job => (
                      <button
                        key={job.id}
                        onClick={() => {
                          onNavigate('careers');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <span className="font-semibold text-white">{job.title}</span>
                          <p className="text-xs text-[#66737F]">{job.department} • {job.location}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#66737F] group-hover:text-white transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#071521] border-t border-white/10 text-xs text-[#66737F] flex items-center justify-between">
          <span>Search index includes all clinical formulations & research dossiers</span>
          <span className="text-[11px] font-mono text-[#B9D8D6]">Demo Scientific Database</span>
        </div>
      </div>
    </div>
  );
};
