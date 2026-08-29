import React, { useState } from 'react';
import {
  FileText, Download, Award, ArrowRight, Dna,
  Layers, ShieldCheck, Microscope, Search, CheckCircle2
} from 'lucide-react';
import { researchPrinciples, sciencePlatforms, patentsPortfolio, scientificPapers, clinicalTrialSteps } from '../data/research';
import { PageRoute, ScientificPaper } from '../types';

interface ResearchPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenWhitepaperModal: (paper: ScientificPaper) => void;
  onOpenMechanismModal: () => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({
  onNavigate,
  onOpenWhitepaperModal,
  onOpenMechanismModal
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [patentSearch, setPatentSearch] = useState('');

  const domains = ['All', 'Neurology', 'Cardiology', 'Nephrology', "Women's Health", 'Metabolic Care', 'Pulmonology', 'Pediatrics'];

  const filteredPatents = patentsPortfolio.filter(pat => {
    const matchesDomain = selectedDomain === 'All' || pat.therapeuticField.toLowerCase().includes(selectedDomain.toLowerCase()) || selectedDomain.toLowerCase().includes(pat.therapeuticField.toLowerCase());
    const matchesSearch = pat.title.toLowerCase().includes(patentSearch.toLowerCase()) ||
      pat.patentNumber.toLowerCase().includes(patentSearch.toLowerCase()) ||
      pat.abstract.toLowerCase().includes(patentSearch.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden -mt-28 mb-16 subtle-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#B9D8D6] text-xs font-mono uppercase">
              <span>TRANSLATIONAL FORMULATION SCIENCE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Manrope']">
              Research, Innovation &amp; <br />
              <span className="text-[#B9D8D6]">Drug Delivery Platforms.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B9D8D6]/85 leading-relaxed">
              Explore how NovaThera pioneers next-generation lipid nanoparticles, self-microemulsifying systems (SMEDDS), and stereoisomer complexes to overcome physiological absorption barriers.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Research Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
            OUR SCIENTIFIC COMPASS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope'] mt-1">
            4 Core Principles of Translational Formulation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchPrinciples.map((principle) => (
            <div
              key={principle.id}
              className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-2xl font-black text-[#B9D8D6] font-mono">{principle.number}</span>
                <h3 className="text-lg font-bold text-[#0B1F33] font-['Manrope']">
                  {principle.title}
                </h3>
                <p className="text-xs text-[#66737F] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] space-y-1.5">
                {principle.keyAspects.slice(0, 2).map((aspect, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#17212B]">
                    <CheckCircle2 className="w-3 h-3 text-[#087F8C] shrink-0 mt-0.5" />
                    <span>{aspect}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proprietary Delivery Platforms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
              PROPRIETARY TECHNOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope'] mt-1">
              Scientific Delivery Platforms
            </h2>
          </div>
          <button
            onClick={onOpenMechanismModal}
            className="px-5 py-2.5 rounded-xl bg-[#0B1F33] hover:bg-[#0E2842] text-white text-xs font-semibold flex items-center gap-2"
          >
            <Dna className="w-4 h-4 text-[#087F8C]" />
            <span>Interactive Pathway Visualizer</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sciencePlatforms.map((platform) => (
            <div
              key={platform.id}
              className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#EAF5F7] text-[#087F8C] font-semibold">
                    {platform.category}
                  </span>
                  <span className="text-xs font-mono text-[#66737F]">
                    {platform.publicationsCount} Papers
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1F33] font-['Manrope']">
                  {platform.title}
                </h3>
                <span className="text-xs font-mono text-[#087F8C] font-semibold block">
                  {platform.code}
                </span>
                <p className="text-xs text-[#66737F] leading-relaxed">
                  {platform.deepDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] space-y-1.5 text-xs">
                <div className="text-[#66737F]">
                  <span className="font-semibold text-[#17212B]">Target: </span>
                  {platform.biologicalTarget}
                </div>
                <div className="text-[#66737F]">
                  <span className="font-semibold text-[#17212B]">Lead: </span>
                  {platform.formulationLead}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Trial Methodology Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1F33] text-white border border-[#B9D8D6]/20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
              RESEARCH PIPELINE LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope'] mt-1">
              From Molecular Target to Clinical Bedside
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {clinicalTrialSteps.map((step) => (
              <div key={step.step} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xl font-mono font-bold text-[#087F8C]">{step.step}</span>
                <h4 className="text-xs font-bold text-white font-['Manrope']">{step.title}</h4>
                <p className="text-[11px] text-[#B9D8D6]/80 leading-relaxed">{step.description}</p>
                <div className="pt-2 text-[10px] font-mono text-emerald-400">Output: {step.deliverable}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents & IP Registry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
              INTELLECTUAL PROPERTY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope'] mt-1">
              Patents &amp; Formulation Claims
            </h2>
          </div>

          {/* Search bar & domain pills */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-[#66737F] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search patent numbers, claims..."
                value={patentSearch}
                onChange={(e) => setPatentSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs focus:outline-none focus:border-[#087F8C] w-60"
              />
            </div>
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 scrollbar-none">
          {domains.map(dom => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${selectedDomain === dom
                  ? 'bg-[#0B1F33] text-white shadow-xs'
                  : 'bg-white hover:bg-[#EAF5F7] text-[#66737F] border border-[#E2E8F0]'
                }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Patents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatents.map((pat) => (
            <div
              key={pat.id}
              className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#087F8C]">{pat.patentNumber}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAF5F7] text-[#087F8C]">
                    {pat.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#0B1F33] font-['Manrope']">{pat.title}</h3>
                <p className="text-xs text-[#66737F] leading-relaxed">{pat.abstract}</p>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#66737F]">
                <span>{pat.therapeuticField}</span>
                <span className="font-mono">{pat.filingYear}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scientific Publications Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
              PEER-REVIEWED RESEARCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope'] mt-1">
              Scientific Papers &amp; Clinical Publications
            </h2>
          </div>

          <div className="space-y-4">
            {scientificPapers.map((paper) => (
              <div
                key={paper.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-[#F1F5F9] transition-colors"
              >
                <div className="space-y-2 max-w-4xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#EAF5F7] text-[#087F8C] font-semibold">
                      {paper.category}
                    </span>
                    <span className="text-xs font-mono text-[#66737F]">{paper.journal} &bull; {paper.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F33] font-['Manrope']">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-[#66737F] line-clamp-2">
                    {paper.abstract}
                  </p>
                  <div className="text-[11px] font-mono text-[#66737F]">
                    Authors: {paper.authors} | DOI: {paper.doi}
                  </div>
                </div>

                <button
                  onClick={() => onOpenWhitepaperModal(paper)}
                  className="px-5 py-2.5 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shrink-0 shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Abstract &amp; Monograph</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
