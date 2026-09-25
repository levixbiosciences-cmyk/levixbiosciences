import React, { useState } from 'react';
import {
  ArrowLeft, FileText, Download, CheckCircle2, ShieldCheck,
  Dna, HelpCircle, Pill, AlertCircle, Share2, Award, ChevronRight
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

  const product = products.find(p => p.slug === productId) || products[0];

  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#66737F]">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#087F8C] transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate('products')}
            className="hover:text-[#087F8C] transition-colors"
          >
            Commercial Products
          </button>
          <span>/</span>
          <span className="text-[#0B1F33] font-bold">{product.name}</span>
        </div>
      </div>

      {/* Main Top Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Image & Pack Information (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#EAF5F7] to-[#F8FAFC] border border-[#E2E8F0] p-8 flex items-center justify-center min-h-[360px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-72 object-contain drop-shadow-xl"
                />
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

              {/* Quality verification bar */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs text-[#66737F]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#087F8C]" />
                  <span>HPLC Tested &bull; WHO-GMP Certified</span>
                </div>
                <span className="font-mono text-[#0B1F33] font-semibold">{product.dosageForm}</span>
              </div>
            </div>

            {/* Right Clinical Specification (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#087F8C] tracking-wider mb-2">
                  <span>Therapeutic Area: {product.therapeuticAreaName}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] font-['Manrope']">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-[#0E9AA6] mt-1">
                  {product.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#66737F] leading-relaxed">
                {product.description}
              </p>

              {/* Delivery Technology Highlight */}
              <div className="p-4.5 rounded-2xl bg-[#0B1F33] text-white border border-[#B9D8D6]/20 flex items-start gap-3">
                <Dna className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#087F8C] uppercase">Delivery Technology</span>
                  </div>
                  <p className="text-sm font-bold font-['Manrope'] text-[#B9D8D6]">{product.deliveryTechnology}</p>
                </div>
              </div>

              {/* Clinical Benefits */}
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold">
                  Key Therapeutic Endpoints &amp; Benefits
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#17212B]">
                      <CheckCircle2 className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
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
            { id: 'mechanism', label: 'Mechanism of Action' },
            { id: 'ingredients', label: 'Formulation Composition' },
            { id: 'clinical', label: 'Clinical Evidence' },
            { id: 'dosage', label: 'Dosage & Administration' },
            { id: 'faqs', label: 'Medical FAQs' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
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

          {/* 1. Mechanism Tab */}
          {activeTab === 'mechanism' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Pharmacodynamics</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">
                  Mechanism of Action
                </h3>
              </div>
              <p className="text-base text-[#66737F] leading-relaxed">
                {product.mechanismOfAction}
              </p>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
                <h4 className="text-sm font-bold text-[#0B1F33] font-['Manrope']">
                  Bioavailability &amp; Pharmacokinetic Profile
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="text-[11px] font-mono text-[#66737F] uppercase">Tmax</span>
                    <p className="text-base font-bold text-[#087F8C] font-['Manrope']">1.5 - 2.0 Hours</p>
                    <p className="text-[10px] text-[#66737F]">Rapid peak plasma absorption</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="text-[11px] font-mono text-[#66737F] uppercase">Bioavailability Gain</span>
                    <p className="text-base font-bold text-[#087F8C] font-['Manrope']">&gt;300% AUC</p>
                    <p className="text-[10px] text-[#66737F]">Compared to standard salts</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="text-[11px] font-mono text-[#66737F] uppercase">Elimination Half-Life</span>
                    <p className="text-base font-bold text-[#087F8C] font-['Manrope']">6.4 - 8.2 Hours</p>
                    <p className="text-[10px] text-[#66737F]">Sustained cellular availability</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Ingredients Tab */}
          {activeTab === 'ingredients' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Active Pharmaceutical Ingredients</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">
                  Active Ingredients &amp; Bioactive Potencies
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-xs font-mono text-[#66737F] uppercase">
                      <th className="py-3.5 px-4 font-semibold">Active Ingredient</th>
                      <th className="py-3.5 px-4 font-semibold">Potency / Strength</th>
                      <th className="py-3.5 px-4 font-semibold">Pharmacological Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F1F5F9]">
                    {product.keyIngredients.map((ing) => (
                      <tr key={ing.name} className="hover:bg-[#F8FAFC] transition-colors">
                        <td className="py-4 px-4 font-bold text-[#0B1F33] font-['Manrope']">{ing.name}</td>
                        <td className="py-4 px-4 font-mono font-bold text-[#087F8C]">{ing.potency}</td>
                        <td className="py-4 px-4 text-[#66737F]">{ing.function}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. Clinical Evidence Tab */}
          {activeTab === 'clinical' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Evidence-Based Medicine</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">
                  Clinical Evidence &amp; Study Outcomes
                </h3>
              </div>

              <div className="space-y-4">
                {product.clinicalEvidence.map((ev, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#0B1F33] font-['Manrope']">{ev.title}</h4>
                      <span className="text-xs font-mono text-[#087F8C]">{ev.studyType}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#17212B] leading-relaxed">
                      <strong>Primary Outcome: </strong>{ev.outcome}
                    </p>
                    <p className="text-[11px] font-mono text-[#66737F]">
                      Citation: {ev.citation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Dosage Tab */}
          {activeTab === 'dosage' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Posology &amp; Administration</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">
                  Dosage Guidelines &amp; Precautions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#EAF5F7] border border-[#B9D8D6] space-y-3">
                  <div className="flex items-center gap-2 text-[#087F8C] font-bold text-sm font-['Manrope']">
                    <Pill className="w-5 h-5" />
                    <span>Recommended Posology</span>
                  </div>
                  <p className="text-sm font-semibold text-[#0B1F33]">{product.usageInstructions.recommendedDose}</p>
                  <p className="text-xs text-[#66737F]">{product.usageInstructions.timing} &bull; {product.usageInstructions.specialInstructions}</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-amber-200 space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm font-['Manrope']">
                    <AlertCircle className="w-5 h-5" />
                    <span>Safety &amp; Contraindications</span>
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    Contraindicated in patients with known hypersensitivity to any formulation component. Monitor serum levels in severe organ impairment. Keep out of reach of children.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. FAQs Tab */}
          {activeTab === 'faqs' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#087F8C]">Practitioner Questions</span>
                <h3 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mt-1">
                  Frequently Asked Medical Questions
                </h3>
              </div>

              <div className="space-y-4">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <h4 className="text-sm font-bold text-[#0B1F33] font-['Manrope'] flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#66737F] pl-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Back to catalog button */}
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
