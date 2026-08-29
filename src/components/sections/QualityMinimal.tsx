import React from 'react';
import { ShieldCheck, Award, Microscope, CheckCircle2, Factory, FileSpreadsheet } from 'lucide-react';

export const QualityMinimal: React.FC = () => {
  const qualityCards = [
    {
      icon: <Microscope className="w-6 h-6 text-[#0066CC]" />,
      title: "HPLC / GC-MS Analytical Purity",
      description: "Every raw bioactive and finished batch is verified for potency, dissolution kinetics, and zero chemical impurities.",
      badge: "100% Validated"
    },
    {
      icon: <Factory className="w-6 h-6 text-[#0066CC]" />,
      title: "cGMP Cleanroom Environments",
      description: "Class 10,000 (ISO 7) and Class 1,000 (ISO 6) classified cleanrooms with HEPA multi-stage filtration to eliminate contamination.",
      badge: "ISO / cGMP"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0066CC]" />,
      title: "Compendial Monograph Compliance",
      description: "Formulation stability and bioequivalence aligned with standard Indian Pharmacopoeia (IP) and USP/EP criteria.",
      badge: "IP / USP Standards"
    },
    {
      icon: <Award className="w-6 h-6 text-[#0066CC]" />,
      title: "Full Batch Traceability",
      description: "Complete certificate of analysis (CoA) documentation and tracking from raw source material to finished packaging.",
      badge: "Full Traceability"
    }
  ];

  return (
    <section id="quality" className="py-16 sm:py-24 bg-white text-[#0B1324] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066CC]/10 border border-[#0066CC]/20 text-[#0066CC] text-xs font-mono font-bold uppercase mb-2">
            <span>QUALITY ASSURANCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1324] tracking-tight font-['Manrope']">
            Pharmaceutical Precision &amp; Standards
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
            Our quality infrastructure ensures that every capsule, softgel, and suspension meets the highest standards of safety, efficacy, and clinical consistency.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {qualityCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0066CC] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#0066CC]/10 text-[#0066CC] font-bold">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B1324] font-['Manrope']">
                  {card.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#0066CC] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
