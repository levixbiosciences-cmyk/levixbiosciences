import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Microscope,
  CheckCircle2,
  Activity,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Brain,
  Pill,
  Factory,
  Quote,
  HeartPulse,
} from 'lucide-react';

import { NeuralSignalNetwork } from '../common/NeuralSignalNetwork';

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

interface SlideData {
  id: string;
  badgeIcon: React.ReactNode;
  badgeText: string;
  badgeTheme: 'purple' | 'gold' | 'cyan';
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  quote?: string;
  primaryBtnText: string;
  primaryAction: 'formulations' | 'quality' | 'contact' | 'certificate';
  secondaryBtnText: string;
  secondaryAction: 'contact' | 'formulations' | 'certificate';
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  imageCategory: string;
  imageTitle: string;
  highlights: string[];
  floatingBadge: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  };
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick = () => {
    document.getElementById('formulations')?.scrollIntoView({ behavior: 'smooth' });
  },
  onContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  },
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      id: 'slide-corporate',
      badgeIcon: <Award className="w-3.5 h-3.5 text-[#D49B24]" />,
      badgeText: 'ISO-9001-2015 Certified Company • Levix Pharma Subsidiary',
      badgeTheme: 'gold',
      titleLead: 'Science You Trust,',
      titleAccent: 'Health You Feel.',
      subtitle: 'LEVIX Biosciences Pvt Ltd • Subsidiary of Levix Pharma (Est. 2022)',
      description:
        "LEVIX Biosciences Pvt Ltd An ISO-9001-2015 Certified Company, And It's a Subsidiary of parent company Levix Pharma (established in 2022), is a dedicated healthcare and specialized formulations company based in Kolathur, Chennai. We blend pharmaceutical rigor with modern bioactive delivery platforms to provide healthcare professionals and patients with formulations that deliver measurable clinical results.",
      quote:
        "Levix Biosciences Pvt.Ltd one of the best and a reliable pharma company in India and a healthcare partner. We are not only committed to developing innovative technologies, but also we Committed to provide the best services to medical fraternities across the Country ..Thereby improving the quality of a patient's life; helping them live a normal, happy & active life.",
      primaryBtnText: 'Explore Formulations',
      primaryAction: 'formulations',
      secondaryBtnText: 'View Certificate PDF',
      secondaryAction: 'certificate',
      image: '/iso_9001_certificate.jpg',
      imageAlt: 'LEVIX Biosciences ISO 9001:2015 Official Certificate UBML-QMS-2809026005',
      imageFit: 'contain',
      imageCategory: 'ISO 9001:2015 Certified',
      imageTitle: 'UBML-QMS-2809026005 • Universal Benchmarking Ltd',
      highlights: [
        'ISO-9001-2015 Certified',
        'GST: 33AAHCL0903B1Z9',
        'Kolathur, Chennai HQ',
        'Measurable Clinical Results',
      ],
      floatingBadge: {
        icon: <ShieldCheck className="w-4 h-4 text-[#7137A5]" />,
        title: 'ISO 9001:2015 Certified',
        subtitle: 'UBML-QMS-2809026005',
      },
    },
    {
      id: 'slide-healthcare-partner',
      badgeIcon: <HeartPulse className="w-3.5 h-3.5 text-[#7137A5]" />,
      badgeText: 'Reliable Healthcare Partner Across India',
      badgeTheme: 'purple',
      titleLead: 'Committed to Medical Fraternities,',
      titleAccent: 'Transforming Patient Lives.',
      subtitle: 'Levix Biosciences Pvt. Ltd • Healthcare Partner in India',
      description:
        "Levix Biosciences Pvt.Ltd one of the best and a reliable pharma company in India and a healthcare partner. We are not only committed to developing innovative technologies, but also we Committed to provide the best services to medical fraternities across the Country ..Thereby improving the quality of a patient's life; helping them live a normal, happy & active life.",
      quote:
        '“Science You Trust, Health You Feel.” — Blending pharmaceutical rigor with modern bioactive delivery platforms to deliver clinical excellence nationwide.',
      primaryBtnText: 'Our Formulations',
      primaryAction: 'formulations',
      secondaryBtnText: 'Partner With Us',
      secondaryAction: 'contact',
      image: '/hero_medical_innovation.jpg',
      imageAlt: 'Healthcare partner serving medical fraternities across India',
      imageFit: 'cover',
      imageCategory: 'Pan-India Medical Network',
      imageTitle: 'Dedicated Services to Medical Fraternities & Patients',
      highlights: [
        'Best & Reliable Pharma Partner',
        'Services to Medical Fraternities',
        'Innovative Technologies',
        'Improving Patient Quality of Life',
      ],
      floatingBadge: {
        icon: <Award className="w-4 h-4 text-[#D49B24]" />,
        title: 'Healthcare Partner India',
        subtitle: 'Serving Medical Fraternities',
      },
    },
    {
      id: 'slide-neurovascular',
      badgeIcon: <Brain className="w-3.5 h-3.5 text-[#7137A5]" />,
      badgeText: 'Neurovascular & Penumbra Recovery',
      badgeTheme: 'purple',
      titleLead: 'Advancing',
      titleAccent: 'Neurovascular Health.',
      subtitle: 'Flagship Therapy: Brainvive™ Softgel Capsules',
      description:
        'Targeted multi-mechanistic microvascular remodeling and mitochondrial energy rescue with 3-N-Butylphthalide (3NBP) 200mg, CoQ10 100mg, L-Methylfolate, and EPA + DHA 1000mg to salvage viable brain tissue.',
      primaryBtnText: 'Explore Brainvive™',
      primaryAction: 'formulations',
      secondaryBtnText: 'Consult Chennai Desk',
      secondaryAction: 'contact',
      image: '/hero_neurovascular_brain.jpg',
      imageAlt: '3D Holographic Brain & Active Neural Action Potentials',
      imageCategory: 'Cerebrovascular & Penumbra Salvage',
      imageTitle: 'Active Synaptic Transmission & Cellular Repair',
      highlights: [
        '3NBP Collateral Microcirculation',
        'Mitochondrial ATP Restoration',
        'eNOS Nitric Oxide Vasodilation',
        'Blood-Brain Barrier Resolvins',
      ],
      floatingBadge: {
        icon: <Activity className="w-4 h-4 text-[#0284C7]" />,
        title: '3NBP 200mg + CoQ10',
        subtitle: 'Synergistic Ischemic Salvage',
      },
    },
    {
      id: 'slide-nerve-health',
      badgeIcon: <Pill className="w-3.5 h-3.5 text-[#D49B24]" />,
      badgeText: 'Peripheral Nerve Regeneration',
      badgeTheme: 'gold',
      titleLead: 'Science Behind',
      titleAccent: 'Better Health.',
      subtitle: 'Advanced Formulation: Synovia-Plus™ Tablets',
      description:
        'Dual-targeted structural nerve repair combining rate-limiting pyrimidine precursors (CMP + UMP) for myelin regeneration with endogenous anti-neuroinflammatory PEA 300mg and bioflavonoids.',
      primaryBtnText: 'Explore Synovia-Plus™',
      primaryAction: 'formulations',
      secondaryBtnText: 'Medical Affairs Inquiry',
      secondaryAction: 'contact',
      image: '/hero_pharma_formulations.jpg',
      imageAlt: 'Pharmaceutical Softgel Capsules and Precision Tablets',
      imageCategory: 'Structural Myelin Reconstruction',
      imageTitle: 'Pyrimidine Salvage & PEA / PPAR-α Agonism',
      highlights: [
        'Kennedy Pathway Substrates (CMP+UMP)',
        'PEA Mast Cell Downregulation',
        'Neuropathic Pain Modulation',
        'Luteolin & Curcumin Protection',
      ],
      floatingBadge: {
        icon: <Award className="w-4 h-4 text-[#B47B13]" />,
        title: 'PEA 300mg + CMP + UMP',
        subtitle: 'Dual Neuro-Targeted Matrix',
      },
    },
    {
      id: 'slide-formulation-rigor',
      badgeIcon: <Factory className="w-3.5 h-3.5 text-[#7137A5]" />,
      badgeText: 'State-of-the-Art Cleanroom Infrastructure',
      badgeTheme: 'purple',
      titleLead: 'Innovative',
      titleAccent: 'Pharmaceutical Formulations.',
      subtitle: 'Analytical Rigor • Kolathur, Chennai Headquarters',
      description:
        'Class 10,000 cleanrooms, automated continuous blister lines, and 100% compendial HPLC batch purity testing ensure clinical efficacy and safety from manufacturing to patient administration.',
      primaryBtnText: 'Quality Infrastructure',
      primaryAction: 'quality',
      secondaryBtnText: 'Corporate Office',
      secondaryAction: 'contact',
      image: '/pharma_cleanroom_facility.jpg',
      imageAlt: 'Automated Cleanroom Packaging and Stainless Steel Bioreactors',
      imageCategory: 'Class 10,000 ISO Cleanroom',
      imageTitle: 'Automated Continuous Blister & Softgel Packaging',
      highlights: [
        'HPLC Purity Verified ≥ 99.0%',
        'HEPA Multi-Stage Cleanrooms',
        'Full Batch CoA Traceability',
        'Fast-Track Chennai Dispatch',
      ],
      floatingBadge: {
        icon: <Zap className="w-4 h-4 text-[#D49B24]" />,
        title: 'Assay Purity ≥ 99.0%',
        subtitle: 'Chromatographic Potency Release',
      },
    },
  ];

  // Auto-play timer: advances automatically every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleBtnAction = (action: 'formulations' | 'quality' | 'contact' | 'certificate') => {
    if (action === 'formulations') {
      onExploreClick();
    } else if (action === 'quality') {
      document.getElementById('quality')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'certificate') {
      window.open('/iso_9001_certificate.pdf', '_blank');
    } else {
      onContactClick();
    }
  };

  const active = slides[currentSlide];

  return (
    <section
      id="home"
      className="
        relative
        min-h-[88vh]
        lg:min-h-[92vh]
        flex
        items-center
        overflow-hidden
        bg-white
        text-[#17121F]
        pt-8
        pb-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =========================================================
          BACKGROUND AMBIENCE & ADAPTIVE NEURAL SIGNAL NETWORK
      ========================================================== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#FCFAFE] to-[#F5ECFB]" />

      {/* Luminous Glow Orbs */}
      <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-[#7137A5]/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#D49B24]/8 blur-[110px] pointer-events-none" />

      {/* Subtle Grid Lattice */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
          bg-[linear-gradient(to_right,#7137A5_1px,transparent_1px),linear-gradient(to_bottom,#7137A5_1px,transparent_1px)]
          bg-[size:44px_44px]
        "
      />

      {/* Real-time Biological Neural Signal Network */}
      <NeuralSignalNetwork variant="light" opacity={0.25} />

      {/* =========================================================
          MAIN SLIDER CONTAINER
      ========================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* SLIDE CARD: SLOPED / DIAGONAL SPLIT ARCHITECTURE */}
        <div className="relative rounded-[36px] overflow-hidden bg-white/80 backdrop-blur-md border border-[#E9DCF2] shadow-[0_20px_70px_rgba(61,25,85,0.08)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[620px] items-stretch">
            
            {/* ===================================================
                LEFT: TEXT & SCIENTIFIC CONTENT SIDE
            =================================================== */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between relative z-10">
              
              <div>
                {/* 1. Category / Focus Pill */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    px-4
                    py-2
                    rounded-full
                    bg-white
                    border
                    border-[#D49B24]/40
                    shadow-sm
                    mb-6
                    transition-all
                    duration-500
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-[#7137A5] animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-[#7137A5]">
                    {active.badgeText}
                  </span>
                </div>

                {/* 2. Main Scientific Heading with Smooth Fade Transition */}
                <div key={active.id + '-heading'} className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-500">
                  <h1
                    className="
                      text-2xl
                      sm:text-4xl
                      lg:text-4xl
                      xl:text-5xl
                      font-serif
                      font-bold
                      tracking-tight
                      leading-[1.12]
                      text-[#17121F]
                    "
                  >
                    {active.titleLead}
                    <span className="block text-[#7137A5] mt-1">
                      {active.titleAccent}
                    </span>
                  </h1>

                  {/* Brand Subhead Divider */}
                  <div className="flex items-center gap-3 pt-0.5">
                    <span className="w-8 h-[2px] bg-[#D49B24]" />
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#786780]">
                      {active.subtitle}
                    </p>
                  </div>

                  {/* Scientific Description */}
                  <p className="pt-1.5 text-xs sm:text-sm lg:text-base text-[#524858] max-w-xl leading-relaxed">
                    {active.description}
                  </p>

                  {/* Optional Quote Card */}
                  {active.quote && (
                    <div className="mt-3.5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#FAF4FD] via-[#FCFAFE] to-[#FFFDF7] border-l-4 border-[#D49B24] border-t border-r border-b border-[#EEDBFA]/80 shadow-sm max-w-xl">
                      <div className="flex items-start gap-2.5">
                        <Quote className="w-4 h-4 text-[#7137A5] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-[13px] text-[#44364D] italic leading-relaxed font-medium">
                          {active.quote}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Action Buttons */}
              <div className="pt-8">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                  {/* Primary CTA */}
                  <button
                    onClick={() => handleBtnAction(active.primaryAction)}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      px-7
                      py-3.5
                      rounded-full
                      bg-[#7137A5]
                      text-white
                      text-sm
                      font-bold
                      shadow-lg
                      shadow-[#7137A5]/25
                      hover:bg-[#5D278C]
                      hover:-translate-y-0.5
                      transition-all
                      duration-300
                      group
                    "
                  >
                    <span>{active.primaryBtnText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Secondary CTA */}
                  <button
                    onClick={() => handleBtnAction(active.secondaryAction)}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2.5
                      px-7
                      py-3.5
                      rounded-full
                      bg-white
                      text-[#7137A5]
                      border
                      border-[#D9C5E6]
                      text-sm
                      font-bold
                      hover:bg-[#FAF4FD]
                      hover:border-[#7137A5]/40
                      transition-all
                      duration-300
                    "
                  >
                    <span>{active.secondaryBtnText}</span>
                  </button>
                </div>

                {/* 4. Trust Highlights Strip */}
                <div className="mt-8 pt-6 border-t border-[#EFE5F4] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {active.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B24] shrink-0" />
                      <span className="text-[11px] font-semibold text-[#514459] truncate">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ===================================================
                RIGHT: SLOPED / DIAGONAL VISUAL SHOWCASE
            =================================================== */}
            <div className="lg:col-span-5 relative overflow-hidden bg-[#180829] group min-h-[340px] sm:min-h-[420px] lg:min-h-full">
              
              {/* Sloped / Diagonal Boundary on Desktop */}
              <div
                className="
                  hidden
                  lg:block
                  absolute
                  inset-0
                  pointer-events-none
                  z-20
                "
                style={{
                  background:
                    'linear-gradient(108deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.0) 14%)',
                }}
              />

              {/* Glowing Diagonal Light Ribbon */}
              <div className="hidden lg:block absolute -top-10 -bottom-10 left-[4%] w-1.5 bg-gradient-to-b from-[#7137A5]/40 via-[#D49B24] to-[#7137A5]/40 transform rotate-6 z-20 opacity-70 pointer-events-none shadow-[0_0_15px_rgba(212,155,36,0.5)]" />

              {/* High-Resolution Slide Image with Smooth Crossfade */}
              <div key={active.id + '-image'} className="relative w-full h-full animate-in fade-in duration-700 flex items-center justify-center">
                {active.imageFit === 'contain' ? (
                  <div className="relative w-full h-full p-4 sm:p-6 lg:p-7 flex items-center justify-center bg-gradient-to-br from-[#230B3A] via-[#1A062B] to-[#0E0317] overflow-hidden">
                    {/* Glowing radial backlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,155,36,0.22)_0%,transparent_70%)] pointer-events-none" />
                    
                    {/* Certificate Presentation Frame */}
                    <a
                      href="/iso_9001_certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Click to view full ISO 9001:2015 Certificate PDF"
                      className="relative block max-h-full max-w-[320px] sm:max-w-[370px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.65)] border-2 border-[#D49B24]/70 bg-white transition-all duration-500 hover:scale-[1.02] hover:border-[#D49B24] cursor-pointer group/cert z-10"
                    >
                      <img
                        src={active.image}
                        alt={active.imageAlt}
                        className="w-full h-auto max-h-[440px] sm:max-h-[490px] object-contain mx-auto"
                      />
                      
                      {/* Hover Overlay with View Icon */}
                      <div className="absolute inset-0 bg-[#32164F]/30 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7137A5] text-white text-xs font-bold shadow-xl border border-white/30">
                          <ShieldCheck className="w-4 h-4 text-[#D49B24]" />
                          <span>View Official PDF</span>
                        </span>
                      </div>
                    </a>
                  </div>
                ) : (
                  <>
                    <img
                      src={active.image}
                      alt={active.imageAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />

                    {/* Ambient Cinematic Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F0A33]/95 via-[#1F0A33]/25 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7137A5]/25 to-transparent mix-blend-overlay" />
                  </>
                )}

                {/* Category Pill Over Image */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#180829]/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-[#10B981] -ml-3" />
                  <span>{active.imageCategory}</span>
                </div>

                {/* Bottom Visual Caption */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white pointer-events-none">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8C56A]">
                    LEVIX Biosciences
                  </p>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-white mt-0.5 leading-snug">
                    {active.imageTitle}
                  </h4>
                </div>
              </div>

              {/* Floating Dynamic Science Badge */}
              <div className="hidden sm:flex absolute top-6 left-6 z-30 items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9DCF2] shadow-xl animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-[#FAF5FD] flex items-center justify-center text-[#7137A5]">
                  {active.floatingBadge.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#32164F]">
                    {active.floatingBadge.title}
                  </p>
                  <p className="text-[9px] text-[#867590]">
                    {active.floatingBadge.subtitle}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* =====================================================
              AUTO-PLAY LINEAR PROGRESS BAR
          ===================================================== */}
          <div className="w-full h-1 bg-[#F1E8F7] overflow-hidden relative">
            <div
              key={`progress-bar-${currentSlide}`}
              className="h-full bg-gradient-to-r from-[#7137A5] via-[#A855F7] to-[#D49B24] rounded-r-full"
              style={{
                animation: 'heroSlideProgress 6s linear forwards',
              }}
            />
          </div>

          {/* =====================================================
              SLIDER CONTROLS BAR: ARROWS, DOTS, PROGRESS
          ===================================================== */}
          <div className="px-6 py-4 bg-[#FCFAFE] border-t border-[#EEE5F4] flex items-center justify-between">
            
            {/* Slide Index Counter */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7137A5]">
              <span>0{currentSlide + 1}</span>
              <span className="text-[#B9A8C4]">/</span>
              <span className="text-[#8F7E9B]">0{slides.length}</span>
            </div>

            {/* Navigation Dots with Active Progress */}
            <div className="flex items-center gap-2">
              {slides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`
                      relative
                      h-2.5
                      rounded-full
                      overflow-hidden
                      transition-all
                      duration-300
                      cursor-pointer
                      ${isActive ? 'w-10 sm:w-14 bg-[#E9DDF0]' : 'w-2.5 bg-[#DDCFE3] hover:bg-[#BFA8C9]'}
                    `}
                  >
                    {isActive && (
                      <span
                        key={`dot-prog-${currentSlide}`}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7137A5] to-[#D49B24]"
                        style={{
                          animation: 'heroSlideProgress 6s linear forwards',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded-full bg-white border border-[#E2D2EB] hover:bg-[#7137A5] hover:text-white hover:border-[#7137A5] text-[#7137A5] flex items-center justify-center transition-all shadow-sm cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-8 h-8 rounded-full bg-white border border-[#E2D2EB] hover:bg-[#7137A5] hover:text-white hover:border-[#7137A5] text-[#7137A5] flex items-center justify-center transition-all shadow-sm cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM GOLD ACCENT LINE
      ========================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D49B24] to-transparent opacity-40" />

    </section>
  );
};