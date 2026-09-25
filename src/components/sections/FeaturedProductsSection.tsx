import React, { useState } from 'react';
import { ArrowRight, Pill, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../../data/products';
import { PageRoute } from '../../types';

interface FeaturedProductsSectionProps {
  onNavigate: (route: PageRoute, params?: { productId?: string }) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ onNavigate }) => {
  const [expandedProductIds, setExpandedProductIds] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (productId: string) => {
    setExpandedProductIds(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const featuredList = products.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#F7F9F8] text-[#17212B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#087F8C] font-mono mb-3">
              <span className="w-6 h-[2px] bg-[#087F8C]" />
              <span>COMMERCIAL FORMULATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] tracking-tight font-['Manrope'] mb-2">
              Differentiated Therapeutic Brands.
            </h2>
            <p className="text-base sm:text-lg text-[#66737F] max-w-2xl">
              Science-backed formulations designed for targeted therapeutic applications with clinical-grade bioavailability.
            </p>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white text-sm font-semibold shadow-md shadow-[#087F8C]/20 transition-all self-start md:self-auto group"
            id="view-all-products-btn"
          >
            <span>View Full Product Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Premium Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredList.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#087F8C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Visual Container */}
              <div className="relative h-56 bg-gradient-to-b from-[#EAF5F7] to-white p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#087F8C] border border-[#B9D8D6] shadow-xs">
                    {product.category}
                  </span>
                </div>

                {/* Delivery Tech Pill */}
                <div className="absolute bottom-3 right-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B1F33]/80 text-[#B9D8D6] backdrop-blur-xs">
                    {product.dosageForm.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Product Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-xl font-bold text-[#0B1F33] font-['Manrope'] group-hover:text-[#087F8C] transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xs font-mono text-[#66737F]">
                      {product.packSize.split(' ')[0]} {product.packSize.split(' ')[1]}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#0E9AA6] mb-2 line-clamp-1">
                    {product.tagline}
                  </p>

                  <div>
                    <p
                      className={`text-xs text-[#66737F] leading-relaxed transition-all ${
                        expandedProductIds[product.id] ? 'line-clamp-none' : 'line-clamp-3'
                      }`}
                    >
                      {product.description}
                    </p>

                    {product.description && product.description.length > 90 && (
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

                {/* Key Actives preview */}
                <div className="pt-3 border-t border-[#F1F5F9] space-y-1.5">
                  <p className="text-[10px] font-mono uppercase text-[#66737F]">Key Active Substrates</p>
                  <div className="flex flex-wrap gap-1">
                    {product.keyIngredients.slice(0, 2).map((ing) => (
                      <span
                        key={ing.name}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#F7F9F8] border border-[#E2E8F0] text-[#17212B] font-medium"
                      >
                        {ing.name.split(' ')[0]} {ing.potency}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onNavigate('product-detail', { productId: product.slug })}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0B1F33] group-hover:bg-[#087F8C] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 mt-2"
                  id={`product-card-btn-${product.slug}`}
                >
                  <span>View Product Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
