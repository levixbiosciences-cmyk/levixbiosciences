export interface QualityPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  metric: string;
  details: string[];
}

export const qualityPillars: QualityPillar[] = [
  {
    id: 'pillar-qc',
    number: '01',
    title: 'Rigorous Quality Control',
    description: 'Every raw active ingredient and finished batch undergoes rigorous testing via High-Performance Liquid Chromatography (HPLC) and Gas Chromatography-Mass Spectrometry (GC-MS).',
    iconName: 'Microscope',
    metric: '99.8% Batch Purity Rating',
    details: [
      'Raw material identity verification via FTIR Spectroscopy',
      'Assay purity testing against USP / EP reference standards',
      'Elemental impurity quantification by ICP-MS (Lead, Cadmium, Arsenic, Mercury)',
      'Total dissolution & disintegration mapping in multi-pH simulated buffers'
    ]
  },
  {
    id: 'pillar-compliance',
    number: '02',
    title: 'Global Regulatory Compliance',
    description: 'Our manufacturing facilities operate in strict accordance with WHO-GMP, US FDA WHO-GMP (21 CFR Part 111/211), and ISO 22000 / ISO 9001 certified cleanroom environments.',
    iconName: 'ShieldCheck',
    metric: '100% WHO-GMP Cleanroom Compliant',
    details: [
      'Grade A & B laminar airflow aseptic processing suites',
      'Class 100,000 cleanroom HVAC positive pressure systems',
      'Fully validated electronic batch record documentation',
      'Regular comprehensive audits by independent certified registrars'
    ]
  },
  {
    id: 'pillar-safety',
    number: '03',
    title: 'Pharmacovigilance & Safety Focus',
    description: 'We maintain proactive post-marketing surveillance and pharmacovigilance protocols, ensuring patient safety through continuous adverse event monitoring and signal detection.',
    iconName: 'HeartPulse',
    metric: 'Zero Critical Safety Signals',
    details: [
      'Dedicated 24/7 Medical Information & Safety Reporting desk',
      'Systematic literature and real-world evidence screening',
      'Standard Operating Procedures aligned with ICH E2A and E2E guidelines',
      'Periodic Safety Update Reports (PSUR) generated quarterly'
    ]
  },
  {
    id: 'pillar-improvement',
    number: '04',
    title: 'Continuous Innovation & Improvement',
    description: 'Quality is a dynamic discipline. We continuously refine analytical methods, invest in automated inspection, and improve sustainable packaging matrices.',
    iconName: 'TrendingUp',
    metric: 'Continuous Method Optimization',
    details: [
      'Statistical Process Control (SPC) across all tableting and encapsulation lines',
      'Annual Product Quality Reviews (APQR) to identify optimization levers',
      'ICH Q10 Pharmaceutical Quality System integration',
      'Green chemistry initiatives minimizing environmental carbon footprint'
    ]
  }
];

export const testingStandards = [
  {
    testName: 'Potency & Active Biomarker Assay',
    method: 'HPLC / UHPLC with Diode Array Detector',
    acceptanceCriteria: '98.0% - 102.0% of labeled claim',
    status: 'Every Batch'
  },
  {
    testName: 'Elemental Heavy Metals',
    method: 'Inductively Coupled Plasma Mass Spectrometry (ICP-MS)',
    acceptanceCriteria: 'Lead < 0.5 ppm, Arsenic < 0.5 ppm, Cadmium < 0.2 ppm, Mercury < 0.1 ppm',
    status: 'Every Raw Material & Batch'
  },
  {
    testName: 'Microbiological Bio-Burden',
    method: 'Membrane Filtration / USP <61> & <62>',
    acceptanceCriteria: 'TAMC < 1000 CFU/g, TYMC < 100 CFU/g, E. coli / Salmonella Absent',
    status: 'Every Batch'
  },
  {
    testName: 'Residual Solvents',
    method: 'Headspace Gas Chromatography (GC-FID/MS)',
    acceptanceCriteria: 'Compliant with USP <467> / ICH Q3C Guidelines (Class 1 & 2)',
    status: 'Every Active Batch'
  },
  {
    testName: 'Dissolution & Gastro-Resistance',
    method: 'USP Apparatus 2 (Paddle) at 37°C ± 0.5°C',
    acceptanceCriteria: 'Enteric intact in 0.1N HCl > 120 mins; >85% release in pH 6.8 buffer < 45 mins',
    status: 'Finished Softgels & DRcaps'
  },
  {
    testName: 'Stability in Climatic Zone IVb',
    method: 'ICH Stability Chambers (30°C / 75% RH & 40°C / 75% RH)',
    acceptanceCriteria: '36-month shelf-life real-time stability verification',
    status: 'Ongoing Protocol'
  }
];

export const cleanroomSpecs = [
  {
    zone: 'Zone A (Core Filling & Blending)',
    cleanlinessClass: 'ISO Class 5 / Grade A',
    particleLimit: '< 3,520 particles/m³ (≥0.5µm)',
    hepaEfficiency: '99.997%'
  },
  {
    zone: 'Zone B (Encapsulation Suite)',
    cleanlinessClass: 'ISO Class 7 / Grade B',
    particleLimit: '< 352,000 particles/m³ (≥0.5µm)',
    hepaEfficiency: '99.995%'
  },
  {
    zone: 'Zone C (Secondary Packaging)',
    cleanlinessClass: 'ISO Class 8 / Grade C',
    particleLimit: '< 3,520,000 particles/m³ (≥0.5µm)',
    hepaEfficiency: '99.95%'
  },
  {
    zone: 'Zone D (Analytical QC Suite)',
    cleanlinessClass: 'ISO Class 7 Controlled',
    particleLimit: 'Positive pressure cascade >15 Pa',
    hepaEfficiency: '99.99%'
  }
];
