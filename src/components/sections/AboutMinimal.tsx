import React from 'react';
import { ShieldCheck, Dna, Microscope, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutMinimalProps {
  onContactClick?: () => void;
}

export const AboutMinimal: React.FC<AboutMinimalProps> = ({ onContactClick }) => {
  const pillars = [
    {
      icon: <Dna className="w-6 h-6 text-[#0066CC]" />,
      title: "Translational Cellular Science",
      description: "Our formulations are designed around verified physiological pathways, optimizing cellular uptake and targeted bioavailability.",
    },
    {
      icon: <Microscope className="w-6 h-6 text-[#0066CC]" />,
      title: "Bioavailability Optimization",
      description: "We utilize advanced lipid carriers, stereoisomer matrices, and microemulsifying delivery systems for superior absorption.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0066CC]" />,
      title: "100% Quality & Purity Testing",
      description: "Every production batch undergoes strict HPLC/GC-MS chromatography testing aligned with compendial monographs.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-[#0B1324] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066CC]/10 border border-[#0066CC]/20 text-[#0066CC] text-xs font-mono font-bold uppercase mb-3">
            <span>ABOUT LEVIX</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1324] tracking-tight font-['Manrope']">
            Science You Trust, <br />
            <span className="text-[#0066CC]">Health You Feel.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
            <strong>LEVIX bio science pvt ltd</strong> is a dedicated healthcare and specialized formulations company based in Kolathur, Chennai. We blend pharmaceutical rigor with modern bioactive delivery platforms to provide healthcare professionals and patients with formulations that deliver measurable clinical results.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left mb-12">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0066CC] shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#CBD5E1] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#0066CC]/10 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1324] font-['Manrope']">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate Trust Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1324] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase text-[#38BDF8] font-bold">
              CHENNAI HEADQUARTERS &amp; PRODUCTION RIGOR
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-['Manrope'] text-white">
              Compliant with cGMP &amp; ISO Analytical Standards
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1]">
              Registered corporate facility located at Kolathur, Chennai. Available for institutional partnerships &amp; inquiries.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="px-6 py-3 rounded-xl bg-[#0066CC] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap touch-target flex items-center gap-2 self-start md:self-auto"
          >
            <span>Contact Chennai Office</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
