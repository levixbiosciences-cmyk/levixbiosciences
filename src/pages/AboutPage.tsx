import React from 'react';
import { Dna, ShieldCheck, Award, Users, Globe, Building2, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react';
import { executiveLeadership, scientificAdvisoryBoard } from '../data/company';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Hero Section */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden -mt-28 mb-16 subtle-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#B9D8D6] text-xs font-mono uppercase">
              <span>OUR HERITAGE &amp; VISION</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Manrope']">
              Advancing Science <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B9D8D6] via-white to-[#087F8C]">
                Beyond Symptoms.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#B9D8D6]/85 leading-relaxed">
              NovaThera Life Sciences was founded on a singular conviction: that chronic disease management requires addressing fundamental cellular bioenergetics and microvascular integrity rather than superficial symptom mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5F7] text-[#087F8C] flex items-center justify-center">
              <Dna className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1F33] font-['Manrope']">Our Scientific Purpose</h3>
            <p className="text-sm text-[#66737F] leading-relaxed">
              To discover, develop, and deliver differentiated therapeutic molecules with verified clinical bioavailability that measurably improve the trajectory of chronic human diseases.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5F7] text-[#0E9AA6] flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1F33] font-['Manrope']">Our Patient Commitment</h3>
            <p className="text-sm text-[#66737F] leading-relaxed">
              Every formulation is held to pharmaceutical WHO-GMP rigor—ensuring physicians can prescribe with total confidence and patients receive safe, bioactive therapies.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5F7] text-[#087F8C] flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1F33] font-['Manrope']">Our Global Horizon</h3>
            <p className="text-sm text-[#66737F] leading-relaxed">
              Headquartered in Mumbai, India, with clinical collaboration across Europe, Asia-Pacific, and North America, supporting over 12 international medical markets.
            </p>
          </div>

        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#087F8C] font-mono mb-2">
            <span className="w-6 h-[2px] bg-[#087F8C]" />
            <span>EXECUTIVE GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] font-['Manrope']">
            Leadership Dedicated to Scientific Integrity.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveLeadership.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl bg-white border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase text-[#B9D8D6] block">
                    {leader.specialty}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0B1F33] font-['Manrope']">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#087F8C]">
                    {leader.role}
                  </p>
                  <p className="text-[11px] font-mono text-[#66737F] mt-1">
                    {leader.qualifications}
                  </p>
                  <p className="text-xs text-[#66737F] leading-relaxed mt-2.5 line-clamp-4">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scientific Advisory Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-3xl bg-[#0B1F33] text-white p-8 sm:p-12 lg:p-14 border border-[#B9D8D6]/20 shadow-xl">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
              ACADEMIC COLLABORATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope'] mt-1">
              Scientific Advisory Board
            </h3>
            <p className="text-sm text-[#B9D8D6]/80 mt-2">
              Our clinical research priorities and study protocols are guided by internationally recognized clinical specialists and academic professors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scientificAdvisoryBoard.map((advisor) => (
              <div
                key={advisor.name}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-white/15"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white font-['Manrope']">
                      {advisor.name}
                    </h4>
                    <p className="text-xs text-[#087F8C] font-mono">
                      {advisor.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#B9D8D6]/75 font-mono">
                  {advisor.qualifications}
                </p>

                <p className="text-xs text-[#66737F] leading-relaxed">
                  {advisor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & ESG Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope']">
              Clean Energy &amp; Ethical Manufacturing Heritage
            </h3>
            <p className="text-sm text-[#66737F] leading-relaxed">
              Our Navi Mumbai manufacturing facilities utilize 40% rooftop solar energy, zero-liquid-discharge (ZLD) effluent treatment, and solvent-free supercritical CO2 extraction technology, reflecting our commitment to sustainable pharmaceutical stewardship.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#0B1F33]">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#087F8C]" /> Zero Solvent Effluent</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#087F8C]" /> ISO 14001 Environmental Certified</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#087F8C]" /> 100% Recyclable Alu-Alu Packaging</span>
            </div>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-[#0B1F33] hover:bg-[#087F8C] text-white text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
