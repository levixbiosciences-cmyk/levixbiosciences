import React, { useState } from 'react';
import { 
  ShoppingBag, MessageSquare, Plus, Check, 
  Search, ArrowRight, ShieldCheck, Zap 
} from 'lucide-react';
import { products } from '../../data/products';
import { Product } from '../../types';

interface FormulationsMinimalProps {
  onAddToCart: (product: Product) => void;
  cartProductIds?: { [key: string]: number };
  onOpenCart?: () => void;
}

export const FormulationsMinimal: React.FC<FormulationsMinimalProps> = ({ 
  onAddToCart,
  cartProductIds = {},
  onOpenCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = ['All', 'Advanced Neuro Support', 'Cardio-Metabolic Support', 'Metabolic & Glycemic Care', 'Renal & Cellular Protection', "Endocrine & Women's Health", 'Pediatric Development'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase());
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  // Instant Single-Item Direct WhatsApp Buy
  const handleSingleItemWhatsApp = (product: Product) => {
    const targetWhatsAppNumber = "919655053327";
    const price = product.price || 0;
    
    let message = `*INSTANT ORDER REQUEST - LEVIX BIO SCIENCE*\n`;
    message += `----------------------------------------\n`;
    message += `*Product:* ${product.name}\n`;
    message += `*Packaging:* ${product.packSize}\n`;
    message += `*Price:* ₹${price.toLocaleString('en-IN')}\n`;
    message += `*Dosage Form:* ${product.dosageForm}\n`;
    message += `----------------------------------------\n`;
    message += `Please share availability, payment details, and dispatch schedule. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${targetWhatsAppNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="formulations" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#0B1324] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066CC]/10 border border-[#0066CC]/20 text-[#0066CC] text-xs font-mono font-bold uppercase mb-2">
              <span>SPECIALIZED FORMULATIONS CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1324] tracking-tight font-['Manrope']">
              Featured Formulations &amp; Direct Order
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1.5 leading-relaxed">
              Order directly via WhatsApp or add items to your cart for bulk dispatch from our Chennai facility.
            </p>
          </div>

          {/* Search bar & Cart Trigger */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search formulations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#0066CC] shadow-xs"
              />
            </div>

            {onOpenCart && (
              <button
                onClick={onOpenCart}
                className="px-4 py-2.5 rounded-full bg-[#0066CC] hover:bg-[#0052CC] text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-[#0066CC]/20 transition-all touch-target shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">View Cart</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-8 scrollbar-none text-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all touch-target ${
                selectedCategory === cat
                  ? 'bg-[#0066CC] text-white shadow-md'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#0066CC] hover:text-[#0066CC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {filteredProducts.map((p) => {
            const countInCart = cartProductIds[p.id] || 0;
            const isJustAdded = justAddedId === p.id;
            const price = p.price || 0;
            const mrp = p.mrp || 0;

            return (
              <div
                key={p.id}
                className="group rounded-3xl bg-white border border-[#CBD5E1] hover:border-[#0066CC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header */}
                <div className="relative h-52 bg-gradient-to-b from-[#F1F5F9] to-white p-5 flex items-center justify-center overflow-hidden border-b border-[#F1F5F9]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-40 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[#0066CC] border border-[#CBD5E1] shadow-xs">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B1324] text-[#E2E8F0]">
                      {p.dosageForm}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-bold text-[#0B1324] font-['Manrope'] group-hover:text-[#0066CC] transition-colors">
                        {p.name}
                      </h3>
                      <span className="text-xs font-mono text-[#64748B]">
                        {p.packSize}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#0066CC] mb-2 line-clamp-1">
                      {p.tagline}
                    </p>

                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>

                  {/* Price & Delivery Specs */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#64748B] uppercase block">Price per pack</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-bold font-mono text-[#0B1324]">
                          ₹{price.toLocaleString('en-IN')}
                        </span>
                        {mrp > price && (
                          <span className="text-xs text-[#94A3B8] line-through font-mono">
                            ₹{mrp.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      In Stock • Chennai
                    </span>
                  </div>

                  {/* Dual Action Buttons (Add to Cart + Buy on WhatsApp) */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAdd(p)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm touch-target ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : countInCart > 0
                          ? 'bg-[#0066CC] text-white'
                          : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0B1324] border border-[#CBD5E1]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : countInCart > 0 ? (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>In Cart ({countInCart})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
