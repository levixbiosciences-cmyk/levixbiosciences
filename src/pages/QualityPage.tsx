import React from 'react';
import {
  ShieldCheck, Award, CheckCircle2, Factory,
  Search, FileSpreadsheet, ArrowRight
} from 'lucide-react';
import { qualityPillars, testingStandards, cleanroomSpecs } from '../data/quality';
import { PageRoute } from '../types';

interface QualityPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenSampleModal: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden -mt-28 mb-16 subtle-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#B9D8D6] text-xs font-mono uppercase">
              <span>UNCOMPROMISING PHARMACEUTICAL RIGOR</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Manrope']">
              Quality Assurance &amp; <br />
              <span className="text-[#B9D8D6]">Regulatory Integrity.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B9D8D6]/85 leading-relaxed">
              Every NovaThera formulation is manufactured in certified ISO and WHO-GMP cleanroom environments, tested with HPLC/GC-MS chromatography, and backed by full batch traceability.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Quality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
            OUR ASSURANCE FRAMEWORK
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope'] mt-1">
            The 4 Pillars of Pharmaceutical Quality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualityPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#B9D8D6] font-mono">{pillar.number}</span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#EAF5F7] text-[#087F8C] font-semibold">
                  {pillar.metric}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1F33] font-['Manrope']">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#66737F] leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                {pillar.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#17212B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F8C] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analytical Testing Standards Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
              PHARMACOPEIAL VALIDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope'] mt-1">
              Compendial Batch Release Testing Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#66737F] mt-2">
              Every production lot is subjected to rigorous laboratory verification aligned with IP, USP, and EP compendial monographs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-xs font-mono text-[#66737F] uppercase">
                  <th className="py-3.5 px-4 font-semibold">Test Parameter</th>
                  <th className="py-3.5 px-4 font-semibold">Analytical Methodology</th>
                  <th className="py-3.5 px-4 font-semibold">Release Acceptance Criteria</th>
                  <th className="py-3.5 px-4 font-semibold">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {testingStandards.map((test, index) => (
                  <tr key={index} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#0B1F33] font-['Manrope']">{test.testName}</td>
                    <td className="py-4 px-4 text-[#66737F] font-mono text-xs">{test.method}</td>
                    <td className="py-4 px-4 text-[#17212B] font-medium">{test.acceptanceCriteria}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF5F7] text-[#087F8C]">
                        {test.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cleanroom Facility Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1F33] text-white border border-[#B9D8D6]/20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
              FACILITY INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope'] mt-1">
              Classified Cleanroom Environment
            </h2>
            <p className="text-xs sm:text-sm text-[#B9D8D6]/80 mt-2">
              Multi-stage HEPA filtration and differential pressure cascade design ensure zero cross-contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleanroomSpecs.map((spec) => (
              <div key={spec.zone} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h4 className="text-sm font-bold font-['Manrope'] text-white">{spec.zone}</h4>
                <div className="text-xs font-mono text-[#087F8C]">{spec.cleanlinessClass}</div>
                <p className="text-xs text-[#B9D8D6]/80">{spec.particleLimit}</p>
                <div className="text-[11px] font-mono text-emerald-400">HEPA: {spec.hepaEfficiency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#0B1F33] font-['Manrope']">
              Need a Batch Certificate of Analysis (CoA)?
            </h3>
            <p className="text-xs sm:text-sm text-[#66737F]">
              Hospital pharmacists and institutional distributors can request verified third-party laboratory release dossiers.
            </p>
          </div>
          <button
            onClick={onOpenSampleModal}
            className="px-6 py-3 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white text-xs font-semibold shadow-sm transition-colors whitespace-nowrap"
          >
            Request Batch Certificate
          </button>
        </div>
      </section>

    </div>
  );
};
