import React from 'react';
import { ArrowRight, CheckCircle2, FlaskConical, Target, Award } from 'lucide-react';
import { PageRoute } from '../../types';

interface AboutEditorialProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutEditorial: React.FC<AboutEditorialProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F9F8] text-[#17212B] relative overflow-hidden subtle-grid-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#087F8C] font-mono mb-4">
          <span className="w-6 h-[2px] bg-[#087F8C]" />
          <span>ABOUT NOVATHERA LIFE SCIENCES</span>
        </div>

        {/* Asymmetric 2-column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Philosophy (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] tracking-tight leading-[1.15] font-['Manrope']">
              Science Beyond <br />
              <span className="text-[#087F8C]">Symptom Relief.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#66737F] leading-relaxed">
              <p>
                NovaThera Life Sciences is a science-driven pharmaceutical company focused on developing differentiated therapeutic solutions for complex and chronic healthcare conditions across neurology, cardiology, metabolic medicine, and women&apos;s health.
              </p>
              <p>
                Through rigorous molecular research, proprietary formulation science, and extensive clinical collaboration with leading academic medical centers, we translate deep biological understanding into meaningful, patient-centric healthcare interventions.
              </p>
            </div>

            {/* Scientific Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
                <FlaskConical className="w-5 h-5 text-[#087F8C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F33] font-['Manrope']">Translational Focus</h4>
                  <p className="text-xs text-[#66737F]">Bench-to-bedside clinical formulation rigor.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
                <Target className="w-5 h-5 text-[#0E9AA6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F33] font-['Manrope']">Targeted Bioavailability</h4>
                  <p className="text-xs text-[#66737F]">Proprietary lipid-matrix delivery systems.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-base font-bold text-[#087F8C] hover:text-[#0B1F33] transition-colors group"
                id="about-learn-more-link"
              >
                <span>Learn About Our Heritage & Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Asymmetric Image & Highlight Box (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0]">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
                alt="NovaThera Life Sciences Laboratory and Formulation Cleanroom"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B1F33]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-[#B9D8D6] uppercase tracking-wider">WHO-GMP Formulation Facility</p>
                  <p className="text-sm sm:text-base font-bold font-['Manrope']">Class 100,000 Cleanroom Certified</p>
                </div>
                <Award className="w-6 h-6 text-[#087F8C]" />
              </div>
            </div>

            {/* Secondary floating stat badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl text-left">
              <span className="text-2xl font-black text-[#087F8C] font-['Manrope']">100%</span>
              <p className="text-xs font-bold text-[#0B1F33] font-['Manrope']">Batch Verification</p>
              <p className="text-[10px] text-[#66737F]">HPLC Purity Tested</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
