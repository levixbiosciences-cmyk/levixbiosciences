import React, { useState } from 'react';
import {
  ArrowLeft, FileText, CheckCircle2, ShieldCheck,
  Dna, HelpCircle, Pill, AlertCircle, Award, ChevronRight
} from 'lucide-react';
import { products } from '../data/products';
import { PageRoute } from '../types';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (route: PageRoute, params?: { productId?: string; areaId?: string }) => void;
  onOpenSampleModal: (productSlug?: string) => void;
  onOpenMechanismModal: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onNavigate,
  onOpenSampleModal,
  onOpenMechanismModal
}) => {
  const [activeTab, setActiveTab] = useState<'mechanism' | 'ingredients' | 'clinical' | 'dosage' | 'faqs'>('mechanism');
  const [rationaleExpanded, setRationaleExpanded] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const product = products.find(p => p.slug === productId) || products[0];

  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#66737F]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#087F8C] transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('products')} className="hover:text-[#087F8C] transition-colors">Commercial Products</button>
          <span>/</span>
          <span className="text-[#0B1F33] font-bold">{product.name}</span>
        </div>
      </div>

      {/* Top Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left - Image & Pack Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#EAF5F7] to-[#F8FAFC] border border-[#E2E8F0] p-8 flex items-center justify-center min-h-[360px]">
                <img src={product.image} alt={product.name} className="max-h-72 object-contain drop-shadow-xl" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#087F8C] border border-[#B9D8D6] shadow-xs">
                    {product.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0B1F33] text-white">
                    {product.packSize}
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs text-[#66737F]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#087F8C]" />
                  <span>HPLC Tested &bull; WHO-GMP Certified</span>
                </div>
                <span className="font-mono text-[#0B1F33] font-semibold">{product.dosageForm}</span>
              </div>
            </div>

            {/* Right - Clinical Specification */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#087F8C] tracking-wider mb-2">
                  <span>Therapeutic Area: {product.therapeuticAreaName}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] font-['Manrope']">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-[#0E9AA6] mt-1">{product.tagline}</p>
              </div>

              <p className="text-sm sm:text-base text-[#66737F] leading-relaxed">{product.description}</p>

              {/* Clinical Overview block */}
              <div className="p-4 rounded-2xl bg-[#EAF5F7] border border-[#B9D8D6]">
                <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold mb-1">Clinical Overview</p>
                <p className="text-xs sm:text-sm text-[#17212B] leading-relaxed">{product.overview}</p>
              </div>

              {/* Delivery Technology */}
              <div className="p-4 rounded-2xl bg-[#0B1F33] text-white border border-[#B9D8D6]/20 flex items-start gap-3">
                <Dna className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-[#087F8C] uppercase">Delivery Technology</span>
                  <p className="text-sm font-bold font-['Manrope'] text-[#B9D8D6]">{product.deliveryTechnology}</p>
                </div>
              </div>

              {/* Indication Focus */}
              {product.indicationFocus && (
                <div className="p-3.5 rounded-2xl bg-[#EAF5F7] border border-[#B9D8D6] flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#087F8C] font-bold block mb-0.5">
                      Indication Focus
                    </span>
                    <p className="text-xs sm:text-sm text-[#0B1F33] font-semibold leading-relaxed">
                      {product.indicationFocus}
                    </p>
                  </div>
                </div>
              )}

              {/* Benefits */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold">Key Therapeutic Endpoints &amp; Benefits</p>
                  {product.benefitSections && (
                    <span className="text-[11px] font-mono text-[#66737F]">
                      {product.benefitSections.length} Clinical Domains
                    </span>
                  )}
                </div>

                {product.benefitSections && product.benefitSections.length > 0 ? (
                  <div className="space-y-3">
                    {product.benefitSections.map((sec, sIdx) => (
                      <div key={sIdx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#087F8C]" />
                          <h4 className="text-xs sm:text-sm font-bold text-[#0B1F33] font-['Manrope']">{sec.category}</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {sec.items.map((item, iIdx) => (
                            <div key={iIdx} className="p-3 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
                              <p className="text-xs font-bold text-[#087F8C] font-['Manrope']">{item.title}</p>
                              <ul className="space-y-1">
                                {item.points.map((pt, pIdx) => (
                                  <li key={pIdx} className="text-[11px] text-[#66737F] leading-snug flex items-start gap-1.5">
                                    <span className="text-[#087F8C] shrink-0 mt-0.5">•</span>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#17212B]">
                        <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenSampleModal(product.slug)}
                  className="px-6 py-3.5 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#087F8C]/20 transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Physician Sample / Dossier</span>
                </button>
                <button
                  onClick={onOpenMechanismModal}
                  className="px-5 py-3.5 rounded-xl bg-[#0B1F33] hover:bg-[#0E2842] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
                >
                  <Dna className="w-4 h-4 text-[#087F8C]" />
                  <span>View Cellular Pathway</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tabs Navigation Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex overflow-x-auto gap-2 p-1.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs scrollbar-none">
          {[
            { id: 'mechanism',   label: 'Mechanism of Action' },
            { id: 'ingredients', label: 'Formulation Composition' },
            { id: 'clinical',    label: 'Clinical Evidence' },
            { id: 'dosage',      label: 'Dosage & Administration' },
            { id: 'faqs',        label: 'Medical FAQs' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#0B1F33] text-white shadow-sm'
                  : 'text-[#66737F] hover:text-[#0B1F33] hover:bg-[#F8FAFC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Panels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-6 sm:p-10">

          {/* 1. MECHANISM OF ACTION */}
          {activeTab === 'mechanism' && (
            <div className="space-y-8 max-w-4xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Pharmacodynamics</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">Mechanism of Action</h3>
              </div>

              <p className="text-base text-[#66737F] leading-relaxed">{product.mechanismOfAction}</p>

              {/* Target Pathways */}
              <div>
                <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold mb-3">Targeted Biological Pathways</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.targetPathways.map((pathway, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#087F8C]/40 hover:bg-[#EAF5F7] transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#087F8C]/10 text-[#087F8C] text-[10px] font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-[#17212B] leading-snug">{pathway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Rationale with Read More */}
              <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden">
                <div className="p-5 bg-[#F8FAFC]">
                  <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold mb-2">Scientific Rationale</p>
                  <p className={`text-sm text-[#66737F] leading-relaxed transition-all ${rationaleExpanded ? '' : 'line-clamp-3'}`}>
                    {product.scientificRationale}
                  </p>
                  <button
                    onClick={() => setRationaleExpanded(r => !r)}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#087F8C] hover:text-[#0B1F33] transition-colors"
                  >
                    {rationaleExpanded ? 'Show Less \u2191' : 'Read More \u2193'}
                  </button>
                </div>
              </div>

              {/* PK Profile */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
                <h4 className="text-sm font-bold text-[#0B1F33] font-['Manrope']">Bioavailability &amp; Pharmacokinetic Profile</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Tmax', value: '1.5 \u2013 2.0 Hours', sub: 'Rapid peak plasma absorption' },
                    { label: 'Bioavailability Gain', value: '>300% AUC', sub: 'Compared to standard salts' },
                    { label: 'Elimination Half-Life', value: '6.4 \u2013 8.2 Hours', sub: 'Sustained cellular availability' },
                  ].map(pk => (
                    <div key={pk.label} className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                      <span className="text-[11px] font-mono text-[#66737F] uppercase">{pk.label}</span>
                      <p className="text-base font-bold text-[#087F8C] font-['Manrope']">{pk.value}</p>
                      <p className="text-[10px] text-[#66737F]">{pk.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. FORMULATION COMPOSITION */}
          {activeTab === 'ingredients' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Active Pharmaceutical Ingredients</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">Active Ingredients &amp; Bioactive Potencies</h3>
              </div>

              <div className="space-y-4">
                {product.keyIngredients.map((ing, i) => (
                  <div key={ing.name} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-[#E2E8F0]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#087F8C]/10 text-[#087F8C] text-xs font-bold font-mono flex items-center justify-center shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#0B1F33] font-['Manrope']">{ing.name}</p>
                          {ing.standardization && (
                            <p className="text-[11px] text-[#66737F] font-mono">{ing.standardization}</p>
                          )}
                        </div>
                      </div>
                      <span className="text-sm font-black text-[#087F8C] font-mono bg-[#EAF5F7] px-3 py-1 rounded-lg whitespace-nowrap">
                        {ing.potency}
                      </span>
                    </div>
                    <div className="px-5 py-4 space-y-3">
                      <div>
                        <p className="text-[10px] font-mono uppercase text-[#66737F] mb-1">Pharmacological Role</p>
                        <p className="text-sm text-[#17212B] leading-relaxed">{ing.function}</p>
                      </div>
                      {ing.clinicalReference && (
                        <div className="flex items-center gap-2 pt-2 border-t border-[#E2E8F0]">
                          <Award className="w-3.5 h-3.5 text-[#087F8C] shrink-0" />
                          <p className="text-[11px] font-mono text-[#66737F]">
                            <span className="font-semibold text-[#0B1F33]">Clinical Reference: </span>
                            {ing.clinicalReference}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Batch Testing */}
              <div className="p-5 rounded-2xl bg-[#0B1F33] text-white space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#087F8C]" />
                  <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold">Batch Quality Certifications</p>
                </div>
                <div className="space-y-2">
                  {product.batchTesting.map((test, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#B9D8D6]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#66737F] pt-2 border-t border-white/10">{product.regulatoryStatus}</p>
              </div>
            </div>
          )}

          {/* 3. CLINICAL EVIDENCE */}
          {activeTab === 'clinical' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Evidence-Based Medicine</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">Clinical Evidence &amp; Study Outcomes</h3>
              </div>

              <div className="space-y-5">
                {product.clinicalEvidence.map((ev, i) => (
                  <div key={i} className="rounded-2xl border border-[#E2E8F0] overflow-hidden">
                    <div className="px-5 py-4 bg-[#0B1F33] flex flex-wrap items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-white font-['Manrope'] leading-snug">{ev.title}</h4>
                      <span className="text-[10px] font-mono bg-[#087F8C]/20 text-[#087F8C] px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                        {ev.studyType}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#E2E8F0]">
                      <div className="bg-[#F8FAFC] px-4 py-3">
                        <p className="text-[10px] font-mono text-[#66737F] uppercase">Sample Size</p>
                        <p className="text-xs font-bold text-[#0B1F33] mt-0.5">{ev.sampleSize}</p>
                      </div>
                      <div className="bg-[#F8FAFC] px-4 py-3">
                        <p className="text-[10px] font-mono text-[#66737F] uppercase">Duration</p>
                        <p className="text-xs font-bold text-[#0B1F33] mt-0.5">{ev.duration}</p>
                      </div>
                      <div className="bg-[#F8FAFC] px-4 py-3 col-span-2 sm:col-span-1">
                        <p className="text-[10px] font-mono text-[#66737F] uppercase">Primary Endpoint</p>
                        <p className="text-xs font-bold text-[#0B1F33] mt-0.5">{ev.primaryEndpoint}</p>
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-white space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                        <p className="text-sm text-[#17212B] leading-relaxed">
                          <strong className="text-[#087F8C]">Outcome: </strong>{ev.outcome}
                        </p>
                      </div>
                      <p className="text-[11px] font-mono text-[#66737F] pl-6">\ud83d\udcc4 {ev.citation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. DOSAGE & ADMINISTRATION */}
          {activeTab === 'dosage' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Posology &amp; Administration</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">Dosage Guidelines &amp; Precautions</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#EAF5F7] border border-[#B9D8D6] space-y-4">
                  <div className="flex items-center gap-2 text-[#087F8C] font-bold text-sm font-['Manrope']">
                    <Pill className="w-5 h-5" />
                    <span>Recommended Posology</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] font-mono text-[#66737F] uppercase">Recommended Dose</p>
                      <p className="text-sm font-semibold text-[#0B1F33] mt-0.5">{product.usageInstructions.recommendedDose}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#66737F] uppercase">Timing</p>
                      <p className="text-sm text-[#17212B] mt-0.5">{product.usageInstructions.timing}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#66737F] uppercase">Special Instructions</p>
                      <p className="text-sm text-[#17212B] mt-0.5">{product.usageInstructions.specialInstructions}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-amber-200 space-y-4">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm font-['Manrope']">
                    <AlertCircle className="w-5 h-5" />
                    <span>Safety &amp; Contraindications</span>
                  </div>
                  {product.usageInstructions.contraindications && product.usageInstructions.contraindications.length > 0 ? (
                    <ul className="space-y-2">
                      {product.usageInstructions.contraindications.map((ci, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-amber-900">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          {ci}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-amber-900 leading-relaxed">
                      Contraindicated in patients with known hypersensitivity to any formulation component.
                    </p>
                  )}
                  <p className="text-[11px] text-amber-700 border-t border-amber-200 pt-3">
                    Always use under physician supervision. Keep out of reach of children.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold mb-1">Storage Specifications</p>
                  <p className="text-sm text-[#17212B]">{product.storageSpecs}</p>
                </div>
              </div>
            </div>
          )}

          {/* 5. MEDICAL FAQs */}
          {activeTab === 'faqs' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Practitioner Questions</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">Frequently Asked Medical Questions</h3>
              </div>

              <div className="space-y-3">
                {product.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      openFaqIndex === i ? 'border-[#087F8C]/40 bg-[#EAF5F7]' : 'border-[#E2E8F0] bg-[#F8FAFC]'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                    >
                      <div className="flex items-start gap-3">
                        <HelpCircle className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${openFaqIndex === i ? 'text-[#087F8C]' : 'text-[#66737F]'}`} />
                        <span className={`text-sm font-bold font-['Manrope'] transition-colors ${openFaqIndex === i ? 'text-[#0B1F33]' : 'text-[#17212B]'}`}>
                          {faq.question}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 text-[#087F8C] transition-transform duration-200 ${openFaqIndex === i ? 'rotate-90' : ''}`}
                      />
                    </button>

                    {openFaqIndex === i && (
                      <div className="px-5 pb-5 pl-12">
                        <p className="text-sm text-[#66737F] leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Back to catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button
          onClick={() => onNavigate('products')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#087F8C] hover:text-[#0B1F33] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </button>
        <button
          onClick={() => onOpenSampleModal(product.slug)}
          className="px-5 py-2.5 rounded-xl bg-[#087F8C] text-white text-xs font-semibold hover:bg-[#0E9AA6] transition-colors"
        >
          Request Product Dossier
        </button>
      </div>

    </div>
  );
};
