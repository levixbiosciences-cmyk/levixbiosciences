import React, { useState } from 'react';
import { ArrowRight, Dna, Activity, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { pipelinePrograms } from '../../data/pipeline';
import { PageRoute } from '../../types';

interface PipelineSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const PipelineSection: React.FC<PipelineSectionProps> = ({ onNavigate }) => {
  const [selectedPhase, setSelectedPhase] = useState<string>('All');

  const phases = ['All', 'Marketed', 'Phase III', 'Phase II', 'Phase I', 'Pre-Clinical'];

  const filteredPrograms = selectedPhase === 'All'
    ? pipelinePrograms
    : pipelinePrograms.filter(p => p.phase === selectedPhase);

  return (
    <section className="py-20 lg:py-28 bg-[#F7F9F8] text-[#17212B] relative border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#087F8C] font-mono mb-3">
              <span className="w-6 h-[2px] bg-[#087F8C]" />
              <span>CLINICAL DEVELOPMENT ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] tracking-tight font-['Manrope'] mb-2">
              Therapeutic Innovation Pipeline.
            </h2>
            <p className="text-base sm:text-lg text-[#66737F] max-w-2xl">
              Targeted pipeline assets addressing significant unmet therapeutic needs across neurology, cardio-renal protection, and mitochondrial medicine.
            </p>
          </div>

          <button
            onClick={() => onNavigate('research')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#0B1F33] text-[#0B1F33] hover:text-white border border-[#CBD5E1] text-sm font-semibold transition-all self-start md:self-auto group shadow-xs"
            id="explore-full-pipeline-btn"
          >
            <span>Full Clinical Pipeline Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-none">
          {phases.map((phase) => {
            const isSelected = selectedPhase === phase;
            return (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${isSelected
                    ? 'bg-[#0B1F33] text-white shadow-sm'
                    : 'bg-white hover:bg-[#EAF5F7] text-[#66737F] border border-[#E2E8F0]'
                  }`}
              >
                {phase}
              </button>
            );
          })}
        </div>

        {/* Pipeline Table / Cards */}
        <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm overflow-hidden divide-y divide-[#F1F5F9]">
          {/* Header Row */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-[#F8FAFC] text-xs font-mono font-bold text-[#66737F] uppercase tracking-wider">
            <div className="col-span-2">Molecule / Asset</div>
            <div className="col-span-2">Therapeutic Domain</div>
            <div className="col-span-3">Target Indication</div>
            <div className="col-span-3">Mechanism / Platform</div>
            <div className="col-span-2 text-right">Clinical Status</div>
          </div>

          {/* Program Rows */}
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="p-5 lg:px-6 lg:py-4.5 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center hover:bg-[#F8FAFC] transition-colors"
            >
              {/* Asset Name & Code */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#0B1F33] font-['Manrope']">{prog.proposedName}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#EAF5F7] text-[#087F8C] font-semibold border border-[#B9D8D6]/60">
                    {prog.moleculeCode}
                  </span>
                </div>
              </div>

              {/* Area */}
              <div className="lg:col-span-2 text-xs font-medium text-[#17212B]">
                <span className="lg:hidden text-[10px] font-mono text-[#66737F] uppercase block">Area:</span>
                {prog.therapeuticArea}
              </div>

              {/* Indication */}
              <div className="lg:col-span-3 text-xs text-[#66737F] leading-relaxed">
                <span className="lg:hidden text-[10px] font-mono text-[#66737F] uppercase block">Indication:</span>
                {prog.targetIndication}
              </div>

              {/* Mechanism */}
              <div className="lg:col-span-3 text-xs font-mono text-[#0E9AA6]">
                <span className="lg:hidden text-[10px] font-mono text-[#66737F] uppercase block">Mechanism:</span>
                {prog.mechanism}
              </div>

              {/* Status Badge */}
              <div className="lg:col-span-2 flex items-center lg:justify-end gap-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${prog.phase === 'Marketed'
                      ? 'bg-[#EAF5F7] text-[#087F8C] border-[#087F8C]/40'
                      : prog.phase === 'Phase III'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : prog.phase === 'Phase II'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                >
                  {prog.phase}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Stage Summary Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0]">
            <p className="text-[11px] font-mono uppercase text-[#087F8C]">Phase: Marketed</p>
            <p className="text-lg font-bold text-[#0B1F33] font-['Manrope']">3 Commercial Assets</p>
            <p className="text-xs text-[#66737F] mt-0.5">Active post-market registries</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0]">
            <p className="text-[11px] font-mono uppercase text-amber-600">Near Term (12-24 Mo)</p>
            <p className="text-lg font-bold text-[#0B1F33] font-['Manrope']">2 Phase III Trials</p>
            <p className="text-xs text-[#66737F] mt-0.5">Primary readouts 2026-2027</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0]">
            <p className="text-[11px] font-mono uppercase text-blue-600">Mid Term (24-36 Mo)</p>
            <p className="text-lg font-bold text-[#0B1F33] font-['Manrope']">2 Phase II Programs</p>
            <p className="text-xs text-[#66737F] mt-0.5">Translational biomarker studies</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0]">
            <p className="text-[11px] font-mono uppercase text-slate-600">Future Innovation</p>
            <p className="text-lg font-bold text-[#0B1F33] font-['Manrope']">2 Discovery Platforms</p>
            <p className="text-xs text-[#66737F] mt-0.5">Nanoparticle & HMO delivery</p>
          </div>
        </div>

      </div>
    </section>
  );
};
