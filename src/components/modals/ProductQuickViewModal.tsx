import React, { useState, useEffect } from 'react';
import {
  X,
  ShoppingBag,
  MessageSquare,
  Mail,
  Check,
  ShieldCheck,
  Zap,
  Pill,
  ExternalLink,
  ChevronRight,
  Info,
  Clock,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { Product } from '../../types';
import { products } from '../../data/products';

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product) => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  isOpen,
  onClose,
  product: initialProduct,
  onAddToCart,
  onSelectProduct,
}) => {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(initialProduct);
  const [activeTab, setActiveTab] = useState<'composition' | 'benefits' | 'mechanism' | 'dosage'>('composition');
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setCurrentProduct(initialProduct);
    }
  }, [initialProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !currentProduct) return null;

  const handleProductSwitch = (prod: Product) => {
    setCurrentProduct(prod);
    setActiveTab('composition');
    if (onSelectProduct) onSelectProduct(prod);
  };

  const handleAddToCart = () => {
    onAddToCart(currentProduct);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const price = currentProduct.price || 0;
  const mrp = currentProduct.mrp || 0;
  const savings = mrp > price ? mrp - price : 0;
  const discountPercent = mrp > 0 ? Math.round((savings / mrp) * 100) : 0;

  // WhatsApp order URL (desktop + mobile universal)
  const whatsappMessage = encodeURIComponent(
    `*FORMULATION INQUIRY & ORDER - LEVIX BIOSCIENCES*\n----------------------------------------\n*Medicine:* ${currentProduct.name}\n*Packaging:* ${currentProduct.packSize}\n*Price:* ₹${price.toLocaleString('en-IN')}\n*Dosage Form:* ${currentProduct.dosageForm}\n----------------------------------------\nPlease confirm stock availability, sample requests, and dispatch schedule. Thank you!`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=918870889620&text=${whatsappMessage}`;

  // Gmail Web direct link
  const emailSubject = encodeURIComponent(`Inquiry for ${currentProduct.name} - LEVIX Biosciences`);
  const emailBody = encodeURIComponent(
    `Dear LEVIX Biosciences Team,\n\nI am inquiring about your formulation ${currentProduct.name} (${currentProduct.dosageForm}, ${currentProduct.packSize}).\n\nPlease share institutional pricing, clinical monograph, and distribution availability.\n\nThank you.\n---\nLEVIX Biosciences Pvt. Ltd.`
  );
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=levixbiosciences@gmail.com&su=${emailSubject}&body=${emailBody}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#17121F]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(50,22,79,0.25)] border border-[#EEE6F2] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================================================
            TOP BAR: MEDICINE SWITCHER & CLOSE
        ========================================================== */}
        <div className="px-5 py-4 bg-[#FAF8FC] border-b border-[#EEE6F2] flex items-center justify-between gap-3 shrink-0">
          {/* Medicine Switcher Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-0.5">
            <span className="text-[10px] uppercase font-bold text-[#8A7C91] tracking-wider hidden sm:inline mr-1">
              Select Medicine:
            </span>
            {products.map((p) => {
              const isSelected = p.id === currentProduct.id;
              return (
                <button
                  key={p.id}
                  onClick={() => handleProductSwitch(p)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#7137A5] text-white shadow-sm'
                      : 'bg-white text-[#5F4E68] border border-[#E9DDF0] hover:bg-[#F5EFF9] hover:text-[#7137A5]'
                  }`}
                >
                  <Pill className="w-3 h-3" />
                  <span>{p.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-[#FAF8FC] text-[#8A7C91]'}`}>
                    {p.dosageForm.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-[#F5EFF9] text-[#756B7B] hover:text-[#7137A5] border border-[#EEE6F2] transition-colors shrink-0 touch-target"
            aria-label="Close product details popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* =========================================================
            SCROLLABLE MODAL BODY
        ========================================================== */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">

          {/* Top Hero Section: Image + Primary Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

            {/* Left: Product Image Box */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#F7F1FA] via-white to-[#FCF8F2] border border-[#EFE8F5] p-6 flex items-center justify-center min-h-[240px] sm:min-h-[270px] overflow-hidden group">
                {/* Decorative circles */}
                <div className="absolute w-44 h-44 rounded-full border border-[#7137A5]/10 pointer-events-none" />
                <div className="absolute w-32 h-32 rounded-full border border-[#D49B24]/10 pointer-events-none" />

                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (currentProduct.id === 'prod-brainvive' && !target.src.includes('BrainVIve')) {
                      target.src = '/BrainVIve_1.jpeg';
                    } else if (currentProduct.id === 'prod-synovia-plus' && !target.src.includes('Synovia')) {
                      target.src = '/Synovia-Plus.jpeg';
                    }
                  }}
                  className="relative z-10 max-h-48 sm:max-h-56 max-w-[85%] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dosage Pill */}
                <div className="absolute bottom-3 right-3 z-20">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#32164F] text-white shadow-sm">
                    {currentProduct.dosageForm}
                  </span>
                </div>

                {/* In Stock Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    In Stock
                  </span>
                </div>
              </div>

              {/* Delivery Tech Badge */}
              {currentProduct.deliveryTechnology && (
                <div className="p-2.5 rounded-xl bg-[#FAF8FC] border border-[#EEE6F2] flex items-center gap-2 text-xs text-[#5F4E68]">
                  <Sparkles className="w-4 h-4 text-[#D49B24] shrink-0" />
                  <span className="text-[11px] font-medium leading-tight">
                    <strong className="text-[#32164F]">Platform:</strong> {currentProduct.deliveryTechnology}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Title, Pricing & Highlights */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#7137A5]/10 text-[#7137A5] border border-[#7137A5]/20 inline-block mb-2">
                  {currentProduct.category}
                </span>

                <h2 id="quickview-title" className="text-2xl sm:text-3xl font-extrabold text-[#32164F] font-['Manrope'] leading-tight">
                  {currentProduct.name}
                </h2>

                <p className="text-xs sm:text-sm font-semibold text-[#7137A5] mt-1 leading-snug">
                  {currentProduct.tagline}
                </p>

                <p className="text-xs text-[#5F4E68] mt-2.5 leading-relaxed">
                  {currentProduct.description}
                </p>

                <div className="mt-2 text-[11px] text-[#8A7C91] flex items-center gap-2">
                  <span className="font-semibold text-[#32164F]">Packaging:</span>
                  <span className="bg-[#FAF8FC] px-2 py-0.5 rounded border border-[#EEE6F2]">
                    {currentProduct.packSize}
                  </span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#EEE6F2] flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#8A7C91] font-bold block mb-0.5">
                    Price per pack (Inclusive of taxes)
                  </span>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-2xl sm:text-3xl font-black text-[#32164F] font-['Manrope']">
                      ₹{price.toLocaleString('en-IN')}
                    </span>
                    {mrp > price && (
                      <span className="text-sm text-[#A99EAC] line-through font-semibold">
                        MRP ₹{mrp.toLocaleString('en-IN')}
                      </span>
                    )}
                    {discountPercent > 0 && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[11px] text-[#7137A5] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#D49B24]" />
                  <span>Levix Verified Formulation</span>
                </div>
              </div>

              {/* Quick Actions in Hero */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#7137A5] hover:bg-[#5D278C] text-white hover:shadow-md'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart (₹{price})</span>
                    </>
                  )}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Order</span>
                </a>
              </div>
            </div>

          </div>

          {/* =========================================================
              NAVIGATION TABS
          ========================================================== */}
          <div className="border-b border-[#EEE6F2] flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('composition')}
              className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'composition'
                  ? 'border-[#7137A5] text-[#7137A5]'
                  : 'border-transparent text-[#756B7B] hover:text-[#32164F]'
              }`}
            >
              Active Composition ({currentProduct.keyIngredients.length})
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'benefits'
                  ? 'border-[#7137A5] text-[#7137A5]'
                  : 'border-transparent text-[#756B7B] hover:text-[#32164F]'
              }`}
            >
              Clinical Indications &amp; Benefits
            </button>
            <button
              onClick={() => setActiveTab('mechanism')}
              className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'mechanism'
                  ? 'border-[#7137A5] text-[#7137A5]'
                  : 'border-transparent text-[#756B7B] hover:text-[#32164F]'
              }`}
            >
              Mechanism of Action
            </button>
            <button
              onClick={() => setActiveTab('dosage')}
              className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'dosage'
                  ? 'border-[#7137A5] text-[#7137A5]'
                  : 'border-transparent text-[#756B7B] hover:text-[#32164F]'
              }`}
            >
              Dosage &amp; Safety
            </button>
          </div>

          {/* =========================================================
              TAB CONTENTS
          ========================================================== */}

          {/* 1. COMPOSITION TAB */}
          {activeTab === 'composition' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#32164F] font-['Manrope']">
                  Key Active Ingredients &amp; Quantified Milligrams
                </h4>
                <span className="text-[10px] font-mono text-[#7137A5] bg-[#7137A5]/10 px-2 py-0.5 rounded-full font-bold">
                  Pharma-Grade Actives
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentProduct.keyIngredients.map((ing, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#EEE6F2] hover:border-[#D9C2E6] transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="text-sm font-bold text-[#32164F] font-['Manrope']">
                          {ing.name}
                        </h5>
                        {ing.standardization && (
                          <span className="text-[10px] font-mono text-[#7137A5] block mt-0.5">
                            {ing.standardization}
                          </span>
                        )}
                      </div>
                      <span className="shrink-0 text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-[#7137A5] text-white">
                        {ing.potency}
                      </span>
                    </div>

                    <p className="text-xs text-[#5F4E68] leading-relaxed">
                      {ing.function}
                    </p>

                    {ing.clinicalReference && (
                      <p className="text-[10px] text-[#8A7C91] italic pt-1 border-t border-[#EEE6F2]">
                        Ref: {ing.clinicalReference}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. BENEFITS & INDICATIONS TAB */}
          {activeTab === 'benefits' && (
            <div className="space-y-4 animate-fadeIn">
              {currentProduct.indicationFocus && (
                <div className="p-3.5 rounded-2xl bg-[#7137A5]/5 border border-[#7137A5]/20 text-xs text-[#32164F] leading-relaxed">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7137A5] font-bold block mb-1">
                    Therapeutic Indication Focus
                  </span>
                  <p className="font-semibold text-xs leading-relaxed">
                    {currentProduct.indicationFocus}
                  </p>
                </div>
              )}

              {/* Benefit Sections */}
              {currentProduct.benefitSections && currentProduct.benefitSections.length > 0 ? (
                <div className="space-y-3.5">
                  {currentProduct.benefitSections.map((sec, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-2xl bg-white border border-[#EEE6F2] space-y-2.5 shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#7137A5]" />
                        <h5 className="text-xs font-bold text-[#32164F] font-['Manrope'] uppercase tracking-wider">
                          {sec.category}
                        </h5>
                      </div>

                      <div className="space-y-2.5 pl-3 border-l-2 border-[#7137A5]/20">
                        {sec.items.map((item, iIdx) => (
                          <div key={iIdx} className="space-y-1">
                            <p className="text-xs font-bold text-[#7137A5]">
                              {item.title}
                            </p>
                            <ul className="space-y-1">
                              {item.points.map((pt, pIdx) => (
                                <li key={pIdx} className="text-xs text-[#5F4E68] leading-relaxed flex items-start gap-1.5">
                                  <span className="text-[#D49B24] shrink-0 mt-1 font-bold">•</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-[#32164F] uppercase tracking-wider">
                    Indications
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentProduct.indications.map((ind, idx) => (
                      <li key={idx} className="p-2.5 rounded-xl bg-[#FAF8FC] border border-[#EEE6F2] text-xs text-[#5F4E68] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* 3. MECHANISM TAB */}
          {activeTab === 'mechanism' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#EEE6F2] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7137A5] font-bold block">
                  Pharmacological Mechanism of Action
                </span>
                <p className="text-xs text-[#32164F] leading-relaxed font-medium">
                  {currentProduct.mechanismOfAction}
                </p>
              </div>

              {currentProduct.scientificRationale && (
                <div className="p-4 rounded-2xl bg-white border border-[#EEE6F2] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D49B24] font-bold block">
                    Scientific &amp; Clinical Rationale
                  </span>
                  <p className="text-xs text-[#5F4E68] leading-relaxed">
                    {currentProduct.scientificRationale}
                  </p>
                </div>
              )}

              {/* Target Pathways */}
              {currentProduct.targetPathways && currentProduct.targetPathways.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-[#32164F] font-['Manrope'] uppercase tracking-wider">
                    Targeted Biological Pathways
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentProduct.targetPathways.map((path, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-[#FAF8FC] border border-[#EEE6F2] flex items-center gap-2 text-xs text-[#32164F]">
                        <Zap className="w-3.5 h-3.5 text-[#7137A5] shrink-0" />
                        <span className="font-medium text-[11px]">{path}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. DOSAGE & SAFETY TAB */}
          {activeTab === 'dosage' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#EEE6F2] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#7137A5] font-bold block">
                    Standard Dosage
                  </span>
                  <p className="text-sm font-bold text-[#32164F]">
                    {currentProduct.dosage.standardDosage}
                  </p>
                  <p className="text-xs text-[#5F4E68]">
                    Route: {currentProduct.dosage.administrationRoute}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#EEE6F2] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#7137A5] font-bold block">
                    Administration Timing
                  </span>
                  <p className="text-sm font-bold text-[#32164F]">
                    {currentProduct.dosage.timing}
                  </p>
                  <p className="text-xs text-[#5F4E68]">
                    Duration: {currentProduct.dosage.duration}
                  </p>
                </div>
              </div>

              {currentProduct.contraindications && (
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-800 font-bold block flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Contraindications &amp; Precautions
                  </span>
                  <p className="leading-relaxed">
                    {currentProduct.contraindications}
                  </p>
                </div>
              )}

              {currentProduct.storageConditions && (
                <div className="p-3.5 rounded-xl bg-[#FAF8FC] border border-[#EEE6F2] text-xs text-[#5F4E68] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8A7C91] shrink-0" />
                  <span><strong>Storage:</strong> {currentProduct.storageConditions}</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* =========================================================
            MODAL FOOTER: DIRECT INQUIRY & ACTION BAR
        ========================================================== */}
        <div className="p-4 sm:p-5 bg-[#FAF8FC] border-t border-[#EEE6F2] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#756B7B]">
            <span>Need institutional pricing or quotes?</span>
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7137A5] font-bold hover:underline flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              <span>Email Desk</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF8FC] text-[#5F4E68] border border-[#EEE6F2] text-xs font-bold transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleAddToCart}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#7137A5] hover:bg-[#5D278C] text-white hover:shadow-md'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart (₹{price})</span>
                </>
              )}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all touch-target"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
