import React from 'react';
import {
  ShieldCheck,
  Award,
  Microscope,
  CheckCircle2,
  Factory,
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
      className="relative overflow-hidden bg-[#FAF8FC] py-16 sm:py-24 text-[#17121F]"
    >
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#7137A5]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#D49B24]/5 blur-3xl pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#7137A5 0.7px, transparent 0.7px)',
          backgroundSize: '24px 24px',
        }}
      />

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
                      group-hover:bg-[#7137A5]
                      group-hover:border-[#7137A5]
                      transition-all duration-300
                    "
                  >
                    <div className="text-[#7137A5] group-hover:text-white transition-colors duration-300">
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

        {/* Bottom Quality Statement */}
        <div className="mt-10 sm:mt-14">
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