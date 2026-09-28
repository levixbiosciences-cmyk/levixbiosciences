import React from 'react';
import {
  Brain,
  Factory,
  Building2,
  Microscope,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface ServicesMinimalProps {
  onContactClick?: () => void;
  onExploreFormulations?: () => void;
}

export const ServicesMinimal: React.FC<ServicesMinimalProps> = ({
  onContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  },
  onExploreFormulations = () => {
    document.getElementById('formulations')?.scrollIntoView({ behavior: 'smooth' });
  },
}) => {
  const services = [
    {
      icon: <Brain className="w-6 h-6 text-[#7137A5]" />,
      title: 'Targeted Neuro Formulation Development',
      tagline: 'Translational Neuroscience & Bioactive R&D',
      description:
        'Proprietary formulation engineering focusing on ischemic penumbra microvascular recovery, mitochondrial bioenergetics, and nucleotide-driven peripheral nerve regeneration.',
      highlights: [
        'Lipid-BioActive Matrix Delivery',
        'Dual Neuro-Targeted Formulations',
        'Verified Biological Target Pathways',
      ],
      badge: 'Flagship R&D',
    },
    {
      icon: <Factory className="w-6 h-6 text-[#7137A5]" />,
      title: 'WHO-GMP Cleanroom Contract Manufacturing',
      tagline: 'High-Volume Softgel & Tablet Formulation',
      description:
        'State-of-the-art Class 10,000 (ISO 7) cleanrooms equipped with automated continuous blister packaging lines and micro-environmental contamination control.',
      highlights: [
        'HEPA Multi-Stage Filtration',
        'Continuous Blister Packaging Lines',
        'ISO 22000 & WHO-GMP Certified',
      ],
      badge: 'Certified Production',
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#7137A5]" />,
      title: 'Institutional & Hospital Direct Supply',
      tagline: 'Rapid Logistics from Chennai Headquarters',
      description:
        'Direct supply chains connecting our Kolathur, Chennai facility with specialty neuro-clinics, rehabilitation hospitals, pharmacies, and commercial partners across India.',
      highlights: [
        '24-48h Fast-Track Dispatch',
        'Direct Cold-Chain & Blister Integrity',
        'WhatsApp & Desk Order Support',
      ],
      badge: 'Direct Supply',
    },
    {
      icon: <Microscope className="w-6 h-6 text-[#7137A5]" />,
      title: 'Analytical Quality Testing & Batch Monograph',
      tagline: 'Chromatographic Potency & Safety Assurance',
      description:
        'Every single batch undergoes rigorous HPLC and GC-MS chromatography, verifying ≥ 99.0% active bioactive assay, ICP-MS heavy metal clearance, and complete CoA documentation.',
      highlights: [
        'HPLC Assay Purity ≥ 99.0%',
        'USP / IP Compendial Monograph Compliance',
        'Traceable Batch Certificate of Analysis',
      ],
      badge: '100% Validated',
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-transparent py-20 sm:py-24 lg:py-28 text-[#17121F] border-b border-[#EEE6F2]/60"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =======================================================
            HEADER
        ======================================================= */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5EDF9] border border-[#E2D2EB] text-[#7137A5] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#D49B24]" />
            <span>Pharma Capabilities &amp; Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#17121F] tracking-tight leading-[1.08]">
            Comprehensive Healthcare
            <span className="block text-[#7137A5] mt-1.5">
              &amp; Pharmaceutical Services
            </span>
          </h2>

          <div className="flex items-center gap-3 mt-6">
            <span className="w-10 h-[2px] bg-[#D49B24]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#D49B24]" />
            <span className="w-16 h-px bg-[#E8DCCB]" />
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-[#625A68] mt-6 leading-relaxed max-w-2xl">
            LEVIX Biosciences provides end-to-end capabilities spanning specialized neuroscience formulation development, WHO-GMP cleanroom contract packaging, and fast-track hospital logistics.
          </p>
        </div>

        {/* =======================================================
            SERVICES CARDS GRID
        ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-[28px] bg-white border border-[#EEE6F2] p-7 sm:p-9 shadow-[0_10px_35px_rgba(50,22,79,0.04)] hover:shadow-[0_20px_50px_rgba(50,22,79,0.09)] hover:-translate-y-1 hover:border-[#7137A5]/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#7137A5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#FAF6FC] border border-[#EFE5F5] flex items-center justify-center group-hover:border-[#7137A5]/40 group-hover:shadow-md transition-all duration-300 shadow-sm p-3">
                    <div className="text-[#7137A5]">
                      {service.icon}
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#FAF6FC] text-[#7137A5] border border-[#EAE0F0]">
                    {service.badge}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#D49B24] mb-1.5">
                  {service.tagline}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2A153E] leading-snug mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6C5E73] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Highlights & Assurance */}
              <div className="pt-6 border-t border-[#F2EBF5] space-y-2.5">
                {service.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2.5 text-xs text-[#524459]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =======================================================
            BOTTOM CALLOUT STRIP
        ======================================================= */}
        <div className="rounded-[28px] bg-gradient-to-r from-[#2F1449] via-[#431B68] to-[#2F1449] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#E8C56A] font-bold mb-2">
              <Zap className="w-3.5 h-3.5 text-[#D49B24]" />
              <span>Direct Partnership Inquiries</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Interested in Institutional Supply or Contract Formulations?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 mt-1.5 leading-relaxed">
              Connect with our Chennai corporate medical affairs team for monograph specifications, formulation dossiers, or bulk pricing terms.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#7137A5] hover:bg-[#FAF6FC] text-xs sm:text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Contact Medical Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
