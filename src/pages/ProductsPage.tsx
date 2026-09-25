import React, { useState, useMemo } from 'react';
import { Search, Pill, Filter, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { therapeuticAreas } from '../data/therapeuticAreas';
import { PageRoute } from '../types';

interface ProductsPageProps {
  onNavigate: (route: PageRoute, params?: { productId?: string; areaId?: string }) => void;
  onOpenSampleModal: (productSlug?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenSampleModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedForm, setSelectedForm] = useState('all');
  const [expandedProductIds, setExpandedProductIds] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (productId: string) => {
    setExpandedProductIds(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const dosageForms = ['all', 'Softgels', 'Capsules', 'Tablets', 'Sachets', 'Suspension'];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.keyIngredients.some(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchArea = selectedArea === 'all' || p.therapeuticAreaId === selectedArea;
      const matchForm = selectedForm === 'all' || p.dosageForm.toLowerCase().includes(selectedForm.toLowerCase());

      return matchSearch && matchArea && matchForm;
    });
  }, [searchQuery, selectedArea, selectedForm]);

  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden -mt-28 mb-12 subtle-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#B9D8D6] text-xs font-mono uppercase">
              <span>COMMERCIAL PHARMACEUTICAL CATALOG</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Manrope']">
              Differentiated <br />
              <span className="text-[#B9D8D6]">Therapeutic Brands.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B9D8D6]/85 leading-relaxed">
              Explore our evidence-informed formulations engineered with patented bioavailability platforms across neurology, cardiovascular medicine, endocrinology, and nephrology.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-[#66737F] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by brand name, active substrate, or indication..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:bg-white focus:outline-none"
              />
            </div>

            {/* Therapeutic Area Select */}
            <div className="md:col-span-3">
              <select
                value={selectedArea}
                onChange={e => setSelectedArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:outline-none"
              >
                <option value="all">All Therapeutic Areas</option>
                {therapeuticAreas.map(a => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </select>
            </div>

            {/* Dosage Form Select */}
            <div className="md:col-span-3">
              <select
                value={selectedForm}
                onChange={e => setSelectedForm(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:outline-none capitalize"
              >
                <option value="all">All Dosage Forms</option>
                {dosageForms.filter(f => f !== 'all').map(form => (
                  <option key={form} value={form}>{form}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Active filters strip */}
          <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9] text-xs text-[#66737F]">
            <span>Showing <strong className="text-[#0B1F33]">{filteredProducts.length}</strong> formulation{filteredProducts.length !== 1 ? 's' : ''}</span>
            {(searchQuery || selectedArea !== 'all' || selectedForm !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedArea('all');
                  setSelectedForm('all');
                }}
                className="text-[#087F8C] font-semibold hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E2E8F0] p-8">
            <Pill className="w-12 h-12 text-[#66737F] mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-[#0B1F33]">No matching formulations found</h3>
            <p className="text-sm text-[#66737F] mt-1">Try resetting your search query or therapeutic filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#087F8C]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header */}
                <div className="relative h-60 bg-gradient-to-b from-[#EAF5F7] to-white p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#087F8C] border border-[#B9D8D6] shadow-xs">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[#0B1F33] text-[#B9D8D6]">
                      {product.dosageForm}
                    </span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] group-hover:text-[#087F8C] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs font-mono text-[#66737F]">
                        {product.packSize}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#0E9AA6] mb-2">
                      {product.tagline}
                    </p>

                    <div>
                      <p
                        className={`text-xs sm:text-sm text-[#66737F] leading-relaxed transition-all ${
                          expandedProductIds[product.id] ? 'line-clamp-none' : 'line-clamp-3'
                        }`}
                      >
                        {product.description}
                      </p>

                      {product.description && product.description.length > 100 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(product.id);
                          }}
                          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#087F8C] hover:text-[#065A63] hover:underline cursor-pointer transition-colors"
                          aria-expanded={!!expandedProductIds[product.id]}
                        >
                          <span>{expandedProductIds[product.id] ? 'Show less' : 'Read more'}</span>
                          {expandedProductIds[product.id] ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Delivery Technology */}
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                    <span className="text-[10px] font-mono uppercase text-[#66737F] block">Delivery System</span>
                    <span className="font-semibold text-[#0B1F33]">{product.deliveryTechnology}</span>
                  </div>

                  {/* Ingredients Preview */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase text-[#66737F]">Key Active Ingredients</p>
                    <div className="flex flex-wrap gap-1">
                      {product.keyIngredients.map(ing => (
                        <span key={ing.name} className="text-[11px] px-2 py-0.5 rounded bg-[#F7F9F8] border border-[#E2E8F0] text-[#17212B]">
                          {ing.name.split(' ')[0]} ({ing.potency})
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dual Actions */}
                  <div className="pt-3 border-t border-[#F1F5F9] grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onNavigate('product-detail', { productId: product.slug })}
                      className="py-2.5 px-3 rounded-xl bg-[#0B1F33] hover:bg-[#087F8C] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenSampleModal(product.slug)}
                      className="py-2.5 px-3 rounded-xl bg-[#EAF5F7] hover:bg-[#B9D8D6]/40 text-[#087F8C] text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Request Sample</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* Institutional Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-[#0B1F33] text-white border border-[#B9D8D6]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#087F8C] shrink-0" />
            <div>
              <p className="text-sm font-bold font-['Manrope']">Hospital &amp; Distributor Supply Requests</p>
              <p className="text-xs text-[#B9D8D6]/80">Commercial distribution available across 12 global territories under WHO-GMP compliance.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenSampleModal()}
            className="px-5 py-2.5 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white text-xs font-semibold whitespace-nowrap"
          >
            Institutional Inquiries
          </button>
        </div>
      </section>

    </div>
  );
};
