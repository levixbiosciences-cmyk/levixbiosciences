import React from 'react';
import {
  ShieldCheck,
  Award,
  Microscope,
  CheckCircle2,
  Factory,
  Activity,
  FileCheck2,
  Sparkles,
  Dna,
} from 'lucide-react';

export const QualityMinimal: React.FC = () => {
  const qualityCards = [
    {
      icon: <Microscope className="w-6 h-6 text-[#7137A5]" />,
      title: 'HPLC / GC-MS Analytical Purity',
      description:
        'Every raw bioactive and finished batch is verified for potency, dissolution kinetics, and zero chemical impurities.',
      badge: '100% Validated',
    },
    {
      icon: <Factory className="w-6 h-6 text-[#7137A5]" />,
      title: 'WHO-GMP Cleanroom Environments',
      description:
        'Class 10,000 (ISO 7) and Class 1,000 (ISO 6) classified cleanrooms with HEPA multi-stage filtration to eliminate contamination.',
      badge: 'ISO / WHO-GMP',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#7137A5]" />,
      title: 'Compendial Monograph Compliance',
      description:
        'Formulation stability and bioequivalence aligned with standard Indian Pharmacopoeia (IP) and USP/EP criteria.',
      badge: 'IP / USP Standards',
    },
    {
      icon: <Award className="w-6 h-6 text-[#7137A5]" />,
      title: 'Full Batch Traceability',
      description:
        'Complete certificate of analysis (CoA) documentation and tracking from raw source material to finished packaging.',
      badge: 'Full Traceability',
    },
  ];

  return (
    <section
      id="quality"
      className="relative overflow-hidden bg-transparent py-16 sm:py-24 text-[#17121F] border-b border-[#EEE6F2]/60"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7137A5]/10 border border-[#7137A5]/20 text-[#7137A5] text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D49B24]" />
            <span>Quality Assurance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#32164F] tracking-tight leading-tight font-['Manrope']">
            Pharmaceutical Precision
            <span className="block text-[#7137A5]">
              &amp; Standards
            </span>
          </h2>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#D49B24]" />
            <span className="h-[2px] w-3 bg-[#D49B24]/40" />
          </div>

          <p className="text-sm sm:text-base text-[#756B7B] mt-5 leading-relaxed max-w-2xl">
            Our quality infrastructure ensures that every capsule, softgel,
            and suspension meets the highest standards of safety, efficacy,
            and clinical consistency.
          </p>
        </div>

        {/* Quality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {qualityCards.map((card, idx) => (
            <div
              key={idx}
              className="
                group relative
                rounded-[1.75rem]
                bg-white
                border border-[#EEE6F2]
                p-6
                shadow-[0_10px_35px_rgba(50,22,79,0.05)]
                hover:shadow-[0_18px_45px_rgba(50,22,79,0.10)]
                hover:-translate-y-1
                hover:border-[#7137A5]/30
                transition-all duration-300
                flex flex-col justify-between
                min-h-[310px]
              "
            >
              {/* Gold top accent */}
              <div
                className="
                  absolute top-0 left-7 right-7 h-[2px]
                  bg-gradient-to-r from-[#D49B24]/20
                  via-[#D49B24]
                  to-[#D49B24]/20
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              <div className="space-y-5">

                {/* Icon + Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="
                      relative w-12 h-12 rounded-2xl
                      bg-[#F5EFF9]
                      border border-[#E9DDF0]
                      flex items-center justify-center
                      group-hover:border-[#7137A5]/40
                      group-hover:shadow-md
                      transition-all duration-300
                    "
                  >
                    <div className="text-[#7137A5]">
                      {card.icon}
                    </div>

                    {/* Gold corner */}
                    <span
                      className="
                        absolute -top-1 -right-1
                        w-2.5 h-2.5 rounded-full
                        bg-[#D49B24]
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[9px] sm:text-[10px]
                      font-bold uppercase tracking-wide
                      px-2.5 py-1
                      rounded-full
                      bg-[#F5EFF9]
                      text-[#7137A5]
                      border border-[#E9DDF0]
                      whitespace-nowrap
                    "
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Number */}
                <div className="relative">
                  <span
                    className="
                      absolute -top-4 -right-1
                      text-5xl font-black
                      text-[#7137A5]/[0.035]
                      select-none
                    "
                  >
                    0{idx + 1}
                  </span>

                  <h3 className="relative text-base sm:text-lg font-bold text-[#32164F] leading-snug font-['Manrope']">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#756B7B] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Verification */}
              <div className="pt-5 mt-5 border-t border-[#F0EAF3]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#7137A5]">
                  <div className="w-6 h-6 rounded-full bg-[#7137A5]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7137A5]" />
                  </div>

                  <span>Verified Standard</span>

                  <span className="ml-auto w-8 h-px bg-[#D49B24]/50 group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            HPLC ANALYTICAL TESTING & CHROMATOGRAPHY FEATURE PANEL
        ===================================================== */}

        <div className="mt-12 sm:mt-16 overflow-hidden rounded-[32px] bg-white border border-[#EEE6F2] shadow-[0_15px_45px_rgba(50,22,79,0.06)] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Visual HPLC Testing Lab Screen */}
            <div className="lg:col-span-6 relative group">
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-[#E9DCF2] bg-[#10071C]">
                <img
                  src="/quality_analytical_testing.jpg"
                  alt="HPLC Spectrometry and Analytical Quality Testing"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140624]/90 via-[#140624]/20 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A0A2E]/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-[#10B981] -ml-3" />
                  <span>Chromatographic Assay: 99.8%</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#D49B24] font-bold">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>Validated Analytical Release</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-serif mt-1">
                    Precision Spectrometry &amp; Dissolution Profiling
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-1 mt-0.5">
                    Zero chemical impurities and complete potency validation across all active pharmaceutical ingredients.
                  </p>
                </div>
              </div>
            </div>

            {/* Analytical Rigor Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7137A5]/10 text-[#7137A5] text-[10px] font-bold uppercase tracking-wider mb-2.5">
                  <Microscope className="w-3.5 h-3.5 text-[#7137A5]" />
                  <span>Compendial Release Protocols</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#32164F] tracking-tight font-['Manrope']">
                  Scientific Assurance in Every Dosage Unit
                </h3>

                <p className="text-xs sm:text-sm text-[#756B7B] mt-2.5 leading-relaxed">
                  Before any batch leaves our Chennai packaging hub, it is subjected to four levels of analytical testing to ensure complete clinical safety and therapeutic bioequivalence.
                </p>
              </div>

              {/* 4-Step Analytical Pillars */}
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#F0EAF3] hover:border-[#7137A5]/30 transition-colors">
                  <div className="w-8 h-8 shrink-0 rounded-xl bg-[#7137A5]/10 flex items-center justify-center text-[#7137A5] mt-0.5">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#32164F]">
                      HPLC &amp; GC-MS Assay Purity (≥ 99.0%)
                    </h5>
                    <p className="text-[11px] text-[#7E6F87] leading-relaxed mt-0.5">
                      Verifies exact milligram potencies of 3NBP, CoQ10, PEA, CMP, and UMP without degradation peaks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#F0EAF3] hover:border-[#7137A5]/30 transition-colors">
                  <div className="w-8 h-8 shrink-0 rounded-xl bg-[#D49B24]/10 flex items-center justify-center text-[#B47B13] mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#32164F]">
                      Heavy Metal &amp; Microbial Bio-Burden Clearance
                    </h5>
                    <p className="text-[11px] text-[#7E6F87] leading-relaxed mt-0.5">
                      Strict ICP-MS analysis ensuring lead, cadmium, mercury, and microbial parameters are below USP limits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#F0EAF3] hover:border-[#7137A5]/30 transition-colors">
                  <div className="w-8 h-8 shrink-0 rounded-xl bg-[#7137A5]/10 flex items-center justify-center text-[#7137A5] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#32164F]">
                      Batch Certificate of Analysis (CoA) Traceability
                    </h5>
                    <p className="text-[11px] text-[#7E6F87] leading-relaxed mt-0.5">
                      Every blister pack is stamped with traceable batch numbers backed by validated documentation.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ISO 9001:2015 Official Certification Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E9DCF2] shadow-[0_15px_40px_rgba(61,25,85,0.06)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a
              href="/iso_9001_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Click to view full ISO 9001:2015 Certificate PDF"
              className="relative shrink-0 w-20 h-28 sm:w-24 sm:h-32 rounded-xl overflow-hidden shadow-md border-2 border-[#D49B24]/60 bg-white hover:scale-105 transition-transform"
            >
              <img
                src="/iso_9001_certificate.jpg"
                alt="ISO 9001:2015 Certificate"
                className="w-full h-full object-contain"
              />
            </a>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D49B24]/10 text-[#B47B13] text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 9001:2015 Certified Management System</span>
              </div>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-[#17121F]">
                LEVIX Biosciences Private Limited
              </h4>
              <p className="text-xs sm:text-sm text-[#625A68] mt-1 max-w-xl">
                Certified by Universal Benchmarking Limited (UK) • Certificate No:{' '}
                <strong className="text-[#7137A5]">UBML-QMS-2809026005</strong>. Scope includes marketing, trading, relabelling, distribution, and supply of pharmaceutical and healthcare formulations.
              </p>
            </div>
          </div>
          <a
            href="/iso_9001_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#7137A5] hover:bg-[#5D278C] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#7137A5]/25 transition-all"
          >
            <Award className="w-4 h-4 text-[#D49B24]" />
            <span>Download Official Certificate</span>
          </a>
        </div>

        {/* Bottom Quality Statement */}
        <div className="mt-8 sm:mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#32164F] px-6 py-7 sm:px-8 sm:py-8">

            {/* Decorative glow */}
            <div className="absolute -right-16 -top-20 w-56 h-56 rounded-full bg-[#7137A5]/30 blur-3xl" />
            <div className="absolute -left-20 -bottom-24 w-64 h-64 rounded-full bg-[#D49B24]/10 blur-3xl" />

            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#D49B24]" />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Quality Built Into Every Stage
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">
                    From raw material verification to finished-product
                    packaging, quality control remains integral to our
                    manufacturing process.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#D49B24]" />
                <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#D49B24]">
                  Quality First
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};