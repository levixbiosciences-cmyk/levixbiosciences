import { ResearchPrinciple, SciencePlatform, Patent, ScientificPaper } from '../types';

export const researchPrinciples: ResearchPrinciple[] = [
  {
    id: 'principle-mechanism',
    number: '01',
    title: 'Mechanism-Oriented Design',
    description: 'We deconstruct disease pathophysiology to the cellular level, identifying rate-limiting biochemical pathways rather than formulating for superficial symptom masking.',
    iconName: 'Network',
    keyAspects: [
      'Identification of target intracellular receptors & enzyme cascades',
      'Evaluation of biological pathway crosstalk and counter-regulatory mechanisms',
      'Targeting underlying cellular energetic and structural deficits'
    ]
  },
  {
    id: 'principle-evidence',
    number: '02',
    title: 'Evidence-Led Formulation',
    description: 'Every ingredient, dose, and enantiomeric isomer is selected strictly based on peer-reviewed human clinical trials and pharmacokinetic bioequivalence studies.',
    iconName: 'FileCheck2',
    keyAspects: [
      'Standardization to scientifically active biomarker fractions',
      'Utilization of bioactive co-enzyme forms bypassing genetic polymorphisms',
      'Clinical trial dose alignment without sub-therapeutic dusting'
    ]
  },
  {
    id: 'principle-synergy',
    number: '03',
    title: 'Synergistic Combinations',
    description: 'We engineer multi-target molecular complexes where active compounds protect, regenerate, or potentiate each other for amplified therapeutic response.',
    iconName: 'Layers',
    keyAspects: [
      'Dual antioxidant networks (lipophilic + hydrophilic electron shuttles)',
      'Stereoisomer ratio optimization (e.g. 40:1 Myo to D-Chiro Inositol)',
      'Bioavailability enhancers and efflux pump inhibitors'
    ]
  },
  {
    id: 'principle-safety',
    number: '04',
    title: 'Safety-Focused Development',
    description: 'Formulations undergo rigorous toxicology screens, gut mucosal barrier compatibility testing, stability studies, and heavy metal testing surpassing pharmacopeial standards.',
    iconName: 'ShieldCheck',
    keyAspects: [
      'Zero synthetic excipient toxicity or harsh chemical colorants',
      'Accelerated and real-time stability testing under ICH conditions',
      'Hypoallergenic, cleanroom-manufactured delivery matrices'
    ]
  }
];

export const clinicalTrialSteps = [
  {
    step: '01',
    title: 'Target Discovery & Pathophysiology',
    description: 'Deconstruct chronic disease etiology to identify rate-limiting receptor and cellular pathways.',
    deliverable: 'Target Validation Dossier'
  },
  {
    step: '02',
    title: 'Molecular Modeling & Pre-Formulation',
    description: 'Screening bioactive stereoisomers, co-crystal matrices, and lipid carrier solubility kinetics.',
    deliverable: 'Pre-Formulation Report'
  },
  {
    step: '03',
    title: 'Bioavailability Enhancement (LMPDS / SMEDDS)',
    description: 'Engineering self-microemulsifying and liposomal matrices for >300% gastrointestinal absorption.',
    deliverable: 'In-Vitro Dissolution Mapping'
  },
  {
    step: '04',
    title: 'Translational Clinical Trials',
    description: 'Multi-center, randomized, double-blind human trials evaluating surrogate biomarkers and clinical endpoints.',
    deliverable: 'Peer-Reviewed Clinical Data'
  },
  {
    step: '05',
    title: 'WHO-GMP Scale-Up & Commercial Registry',
    description: 'Validation of cleanroom manufacturing, automated packaging, and active post-market surveillance.',
    deliverable: 'Commercial Drug Master File'
  }
];

export const sciencePlatforms: SciencePlatform[] = [
  {
    id: 'platform-1',
    title: 'Neuro-Metabolic Modulation',
    code: 'NMM-Matrix™',
    category: 'Central Nervous System',
    shortDesc: 'Enhancing cerebral bioenergetics, blood-brain barrier transport, and neurotransmitter balance.',
    deepDescription: 'Focuses on stabilizing neuronal membrane phospholipids, facilitating choline neurotransmission, and downregulating neuroinflammatory microglial activation across chronic neurological challenges.',
    biologicalTarget: 'Kennedy Pathway Enzymes, Acetylcholine Synthetase, SIRT1',
    formulationLead: 'Neurovia / Cerebrostat XR',
    clinicalPhase: 'Marketed & Phase III Expansion',
    publicationsCount: 14
  },
  {
    id: 'platform-2',
    title: 'Cardio-Renal Protection',
    code: 'CRP-Shield™',
    category: 'Cardiovascular & Renal',
    shortDesc: 'Synergistic microvascular endothelial protection and nitrogenous metabolite clearance.',
    deepDescription: 'Combines bio-dispersible ubiquinol, vascular-protective menaquinone-7, and enteric gut-kidney cleansing probiotic matrices to reduce arterial stiffness and renal tubulointerstitial stress.',
    biologicalTarget: 'eNOS Activation, Matrix Gla Protein, Colonic Urease Clearance',
    formulationLead: 'Cardivex / Renovia Plus',
    clinicalPhase: 'Marketed & Phase II Trials',
    publicationsCount: 19
  },
  {
    id: 'platform-3',
    title: 'Mitochondrial Bioenergetics',
    code: 'MBE-Core™',
    category: 'Metabolic & Cellular Aging',
    shortDesc: 'Restoring electron transport chain efficiency and cellular NAD+/NADH homeostasis.',
    deepDescription: 'Harnesses co-enzymatic substrates to optimize ATP synthase flux, prevent permeability transition pore opening, and blunt oxidative mitochondrial membrane lipid peroxidation.',
    biologicalTarget: 'Complex I & IV, PGC-1α, Sirtuin Pathway',
    formulationLead: 'Metabion / Mitocel Pro',
    clinicalPhase: 'Phase III Multicenter Trial',
    publicationsCount: 11
  },
  {
    id: 'platform-4',
    title: 'Endocrine Stereoisomer Synchronization',
    code: 'ESS-Balance™',
    category: "Women's Health",
    shortDesc: 'Physiologic 40:1 ratio signaling for follicular maturation and insulin sensitizing.',
    deepDescription: 'Utilizes precision co-crystallized ratios of Myo-Inositol and D-Chiro-Inositol alongside active L-methylfolate to re-establish ovarian microenvironment homeostasis in metabolic PCOS.',
    biologicalTarget: 'Inositol Phosphoglycan Second Messengers, GLUT4 Translocation',
    formulationLead: 'Insovia Pure / Ovafine DS',
    clinicalPhase: 'Marketed Globally',
    publicationsCount: 22
  },
  {
    id: 'platform-5',
    title: 'Advanced Lipid-Matrix Delivery',
    code: 'LMPDS™ Platform',
    category: 'Drug Delivery Technology',
    shortDesc: 'Proprietary phospholipid encapsulation preventing gastric degradation and boosting cellular absorption.',
    deepDescription: 'Protects sensitive biomolecules from harsh gastric acid while facilitating lymphatic and enterocyte uptake through specialized lipid micelle transcytosis.',
    biologicalTarget: 'Enterocyte Brush Border, Transcellular Lymphatic Transport',
    formulationLead: 'Applied across 8 Portfolio Formulations',
    clinicalPhase: 'Patented Technology Platform',
    publicationsCount: 27
  },
  {
    id: 'platform-6',
    title: 'Self-Microemulsifying Systems',
    code: 'SMEDDS™ Platform',
    category: 'Bioavailability Enhancement',
    shortDesc: 'Isotropic pre-concentrates that spontaneously form sub-50nm droplets upon contact with gastric fluids.',
    deepDescription: 'Dramatically overcomes the low water-solubility of lipophilic compounds like CoQ10, carotenoids, and fat-soluble vitamins without relying on dietary fat intake.',
    biologicalTarget: 'GI Lumen Aqueous Phase Solubilization',
    formulationLead: 'Cardivex / CoQ10 High-Bio',
    clinicalPhase: 'Patented Formulation Technology',
    publicationsCount: 16
  }
];

export const patentsPortfolio: Patent[] = [
  {
    id: 'pat-01',
    patentNumber: 'IN-PAT-2022-88412-A',
    title: 'Lipid-Matrix Phosphosome Carrier Composition for Choline Intermediates',
    filingYear: '2022',
    category: 'Drug Delivery Systems',
    status: 'Granted',
    abstract: 'A gastric-resistant, multi-lamellar phospholipid matrix formulation exhibiting superior stability and over 380% enhanced blood-brain barrier transport of Citicoline Sodium.',
    therapeuticField: 'Neurology'
  },
  {
    id: 'pat-02',
    patentNumber: 'IN-PAT-2023-51920-A',
    title: 'Synergistic 40:1 Inositol-Phytosomal Complex for Endocrine Follicular Support',
    filingYear: '2023',
    category: 'Formulation Chemistry',
    status: 'Granted',
    abstract: 'Novel stabilized co-crystallized matrix of Myo-Inositol and D-Chiro-Inositol exhibiting improved powder compressibility, rapid dissolution, and enhanced theca cell membrane interaction.',
    therapeuticField: "Women's Health"
  },
  {
    id: 'pat-03',
    patentNumber: 'PCT/IB2024/007321',
    title: 'Self-Microemulsifying Composition for Fat-Soluble Coenzyme Q10 and Menatetrenone',
    filingYear: '2024',
    category: 'Bioavailability Enhancement',
    status: 'Under Review',
    abstract: 'Microemulsion pre-concentrate that spontaneously generates sub-50nm droplet dispersions upon contact with gastric fluids, providing >400% bioavailability for Ubiquinol.',
    therapeuticField: 'Cardiology'
  },
  {
    id: 'pat-04',
    patentNumber: 'IN-PAT-2023-11048-C',
    title: 'Enteric Micro-Encapsulated Consortium for Nitrogenous Waste Clearance',
    filingYear: '2023',
    category: 'Microbiome Therapeutics',
    status: 'Granted',
    abstract: 'Multi-layer pH-triggered microcapsules harboring targeted urease-active bacterial strains for selective release in the distal ileum and cecum to intercept circulating blood urea nitrogen.',
    therapeuticField: 'Nephrology'
  },
  {
    id: 'pat-05',
    patentNumber: 'PCT/IB2025/001948',
    title: 'Dual-Phase Sustained Release Tablet Architecture for R-Alpha Lipoic Acid and Benfotiamine',
    filingYear: '2025',
    category: 'Modified Release Formulation',
    status: 'Under Review',
    abstract: 'Bilayer compressed matrix balancing immediate release lipophilic benfotiamine with 8-hour sustained zero-order diffusion of crystalline sodium R-lipoate.',
    therapeuticField: 'Metabolic Care'
  },
  {
    id: 'pat-06',
    patentNumber: 'IN-PAT-2022-77291-A',
    title: 'Stabilized Gastric-Shielded Liposomal Ferric Pyrophosphate Liquid Suspension',
    filingYear: '2022',
    category: 'Pediatric Delivery',
    status: 'Granted',
    abstract: 'Taste-masked, non-irritating phospholipid-enclosed ferric carrier demonstrating prolonged colloidal stability and zero tooth discoloration in pediatric suspensions.',
    therapeuticField: 'Pediatrics'
  },
  {
    id: 'pat-07',
    patentNumber: 'IN-PAT-2024-99120-D',
    title: 'Targeted Mitochondrial Complex I and IV Protective Polyphenol Complex',
    filingYear: '2024',
    category: 'Molecular Oncology / Aging',
    status: 'PCT Filed',
    abstract: 'Engineered bio-flavonoid complex optimizing electron transfer efficiency across inner mitochondrial cristae while minimizing ROS generation during cellular senescence.',
    therapeuticField: 'Metabolic Health'
  },
  {
    id: 'pat-08',
    patentNumber: 'IN-PAT-2025-00431-E',
    title: 'Enteric Coated Hydrophilic-Lipophilic Nano-Carrier for Pulmonary Endothelial Repair',
    filingYear: '2025',
    category: 'Respiratory Therapeutics',
    status: 'Under Review',
    abstract: 'Novel vesicular system for systemic distribution to alveolar microvasculature, dampening hyper-inflammatory cytokine release in bronchial pathways.',
    therapeuticField: 'Pulmonology'
  },
  {
    id: 'pat-09',
    patentNumber: 'IN-PAT-2024-33819-B',
    title: 'Precision Micro-Granular Sachet Dispensing System with Anti-Caking Nitrogen Purge',
    filingYear: '2024',
    category: 'Packaging & Stability',
    status: 'Granted',
    abstract: 'Specialized barrier foil structure guaranteeing 36-month shelf-life stability for hygroscopic inositol and methylated folates in tropical climates (Zone IVb).',
    therapeuticField: 'Drug Delivery'
  }
];

export const scientificPapers: ScientificPaper[] = [
  {
    id: 'paper-1',
    title: 'Efficacy of Lipid-Matrix Citicoline and Phosphatidylserine in Post-Stroke Cognitive Rehabilitation: A Double-Blind Multicenter Study',
    journal: 'Journal of Neuropharmacology & Translational Therapeutics (Demo)',
    year: 2025,
    authors: 'Mehta, S.K., Nair, R.V., Sharma, P. et al.',
    doi: '10.1016/j.jntt.2025.04.012',
    abstract: 'In a randomized multicenter cohort of 240 patients recovering from mild-to-moderate cerebral ischemic events, co-administration of liposomal citicoline with phosphatidylserine produced marked enhancements in executive memory and processing speed compared to placebo over 12 weeks.',
    category: 'Neurology'
  },
  {
    id: 'paper-2',
    title: 'Targeted 40:1 Inositol Stereoisomer Ratio Combined with (6S)-5-MTHF in Polycystic Ovary Syndrome: A 6-Month Endocrine Evaluation',
    journal: 'International Archives of Clinical Endocrinology & Metabolism (Demo)',
    year: 2024,
    authors: 'Deshmukh, A.P., Verma, K.L., Joshi, M.',
    doi: '10.1097/iacem.2024.11.087',
    abstract: 'Evaluating 140 women with metabolic PCOS, this investigation confirmed that a physiologic 40:1 Myo to D-Chiro inositol formulation significantly improved menstrual regularity, restored spontaneous ovulation, and normalized the HOMA-IR index.',
    category: "Women's Health"
  },
  {
    id: 'paper-3',
    title: 'Bioavailability and Endothelial Impact of a Self-Microemulsifying Ubiquinol-Menaquinone Formulation',
    journal: 'Vascular Medicine & Atherosclerosis Research (Demo)',
    year: 2025,
    authors: 'Kulkarni, V.G., Roy, S.B., Gupta, A.',
    doi: '10.1002/vmar.2025.02.045',
    abstract: 'This pharmacokinetic and clinical trial demonstrated a 4.6-fold higher area-under-curve (AUC0-24h) for SMEDDS-delivered ubiquinol with a concomitant +2.8% absolute improvement in brachial artery flow-mediated dilation.',
    category: 'Cardiology'
  },
  {
    id: 'paper-4',
    title: 'Enteric Microencapsulated Probiotic Strains and N-Acetylcysteine for Nitrogenous Metabolite Management in Stage 3 CKD',
    journal: 'Clinical Nephrology & Renal Care Journal (Demo)',
    year: 2024,
    authors: 'Bhattacharya, R.K., Sen, A., Patel, T.',
    doi: '10.1159/cnrcj.2024.08.019',
    abstract: 'A 24-week double-blind randomized study in non-dialysis CKD stage 3 participants demonstrated a 14.8% reduction in serum urea nitrogen alongside preservation of estimated glomerular filtration rate trajectory.',
    category: 'Nephrology'
  }
];
