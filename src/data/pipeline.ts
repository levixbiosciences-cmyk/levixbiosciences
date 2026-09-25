import { PipelineProgram } from '../types';

export const pipelinePrograms: PipelineProgram[] = [
  {
    id: 'pipe-01',
    moleculeCode: 'NT-101',
    proposedName: 'Neurovia XR',
    therapeuticArea: 'Neurology',
    targetIndication: 'Post-Ischemic Neurovascular Rehabilitation & Executive Memory Support',
    mechanism: 'Lipid-Matrix Citicoline + Active Phosphatidylserine Delivery',
    phase: 'Marketed',
    timelineTarget: 'Current',
    milestone: 'Commercial distribution in 12 global territories; post-marketing observational trial active.',
    partnerSupport: 'NovaThera R&D Lab'
  },
  {
    id: 'pipe-02',
    moleculeCode: 'NT-102',
    proposedName: 'Cardivex Duo',
    therapeuticArea: 'Cardiology',
    targetIndication: 'Endothelial Flow-Mediated Dilation & Vascular Calcification Defense',
    mechanism: 'Self-Microemulsifying Ubiquinol + All-Trans MK-7',
    phase: 'Marketed',
    timelineTarget: 'Current',
    milestone: 'Expanded into specialty cardiology clinics; ongoing arterial compliance registry.',
    partnerSupport: 'CardioVasc Consortium'
  },
  {
    id: 'pipe-03',
    moleculeCode: 'NT-103',
    proposedName: 'Insovia Pure',
    therapeuticArea: "Women's Health",
    targetIndication: 'Polycystic Ovary Syndrome & Follicular Metabolic Synchronization',
    mechanism: 'Physiological 40:1 Inositol Phytosome + Quatrefolic®',
    phase: 'Marketed',
    timelineTarget: 'Current',
    milestone: 'Established leadership in clinical endocrinology & reproductive medicine.',
    partnerSupport: 'EndoSync Research'
  },
  {
    id: 'pipe-04',
    moleculeCode: 'NT-201',
    proposedName: 'Cerebrostat Pro',
    therapeuticArea: 'Neurology',
    targetIndication: 'Mild Cognitive Impairment (MCI) & Synaptic Synuclein Clearance',
    mechanism: 'Dual-Target Alpha-Synuclein Inhibitor + Bioactive Resveratrol Matrix',
    phase: 'Phase III',
    timelineTarget: '12-24 Months',
    milestone: 'Phase III multicenter enrollment (n=450) completed across 14 hospital sites; primary endpoint readout Q4 2026.',
    partnerSupport: 'National Neuro Science Institute'
  },
  {
    id: 'pipe-05',
    moleculeCode: 'NT-202',
    proposedName: 'Renovia Ultra',
    therapeuticArea: 'Nephrology',
    targetIndication: 'Stage 3-4 Chronic Kidney Disease Uremic Sarcopenia & Microalbuminuria',
    mechanism: 'Targeted Enteric Probiotic Consortium + Taurine-NAC Chelate',
    phase: 'Phase III',
    timelineTarget: '12-24 Months',
    milestone: 'Phase III trial ongoing; FDA orphan drug fast-track designation submitted in trial protocol.',
    partnerSupport: 'Global Renal Foundation'
  },
  {
    id: 'pipe-06',
    moleculeCode: 'NT-301',
    proposedName: 'PulmoThera Aerosol',
    therapeuticArea: 'Pulmonology',
    targetIndication: 'Chronic Obstructive Pulmonary Bronchial Fibrosis & Micro-Endothelial Repair',
    mechanism: 'Inhaled Liposomal Phospholipid Surfactant + Antioxidant Cascade',
    phase: 'Phase II',
    timelineTarget: '24-36 Months',
    milestone: 'Phase II dose escalation safety and spirometry FEV1 improvements documented in 120 patients.',
    partnerSupport: 'Pulmonary Innovation Labs'
  },
  {
    id: 'pipe-07',
    moleculeCode: 'NT-302',
    proposedName: 'ImmunoVasc Core',
    therapeuticArea: 'Immunometabolism',
    targetIndication: 'Systemic Microvascular Vasculitis & Endothelial Permeability',
    mechanism: 'Pro-Resolving Lipid Mediator Mimetic (Resolvin-E1 Analog)',
    phase: 'Phase II',
    timelineTarget: '24-36 Months',
    milestone: 'Pre-clinical validation published; Phase IIa biomarker assessment initiated.',
    partnerSupport: 'ImmunoThera Alliance'
  },
  {
    id: 'pipe-08',
    moleculeCode: 'NT-401',
    proposedName: 'MitoRegen Nano',
    therapeuticArea: 'Cellular Senescence',
    targetIndication: 'Mitochondrial Aging & Sarcopenic Muscle Loss',
    mechanism: 'Targeted Mitochondrial Complex I Electron Shuttle + Urolithin-A Nano-Encapsulation',
    phase: 'Phase I',
    timelineTarget: 'Long-Term Innovation',
    milestone: 'Phase I healthy volunteer pharmacokinetic and tolerability assessment underway.',
    partnerSupport: 'Cellular Bioenergetics Hub'
  },
  {
    id: 'pipe-09',
    moleculeCode: 'NT-402',
    proposedName: 'Pediatrix Synapto-Plus',
    therapeuticArea: 'Pediatrics',
    targetIndication: 'Pediatric Attention Spectrum & Myelination Delay',
    mechanism: 'Liposomal Phosphatidylserine + Bio-Identical 2\'-Fucosyllactose HMO',
    phase: 'Pre-Clinical',
    timelineTarget: 'Long-Term Innovation',
    milestone: 'Preclinical animal model synaptogenesis and neuronal dendritic spine density verified.',
    partnerSupport: 'Pediatric Neuro Discovery Group'
  }
];

export const rAndDTimeline = [
  {
    step: '01',
    title: 'Research & Mechanism Discovery',
    description: 'Deconstructing cellular pathophysiology, mapping disease biomarkers, and identifying rate-limiting metabolic targets with computer-aided molecular modeling.',
    duration: 'Months 0 - 6',
    deliverables: ['Target identification report', 'In vitro mechanism validation', 'Enantiomeric isomer purity profile']
  },
  {
    step: '02',
    title: 'Formulation & Delivery Engineering',
    description: 'Developing proprietary lipid-matrix, self-microemulsifying (SMEDDS), or enteric micro-encapsulation technologies to guarantee gastric stability and bioavailability.',
    duration: 'Months 6 - 14',
    deliverables: ['Bioavailability pharmacokinetic curves', 'Accelerated stability data under Zone IVb', 'Cleanroom scaling pilot batch']
  },
  {
    step: '03',
    title: 'Analytical & Safety Validation',
    description: 'Subjecting formulations to HPLC assay purity, heavy metals ICP-MS, residual solvent chromatography, and cellular cytotoxicity screens exceeding USP standards.',
    duration: 'Months 14 - 20',
    deliverables: ['ICH stability dossier', 'Toxicology clearance summary', 'Certificate of Analysis (CoA) validation']
  },
  {
    step: '04',
    title: 'Clinical Collaboration & Trials',
    description: 'Partnering with premier academic hospitals and medical societies to conduct double-blind, placebo-controlled trials demonstrating hard endpoint efficacy.',
    duration: 'Months 20 - 32',
    deliverables: ['Clinical trial registry publication', 'Peer-reviewed journal manuscript', 'Ethics committee approvals']
  },
  {
    step: '05',
    title: 'Market Readiness & Medical Affairs',
    description: 'Finalizing WHO-GMP commercial batch manufacturing, physician monograph publication, and regulatory compliance dossiers for healthcare distribution.',
    duration: 'Months 32 - 36+',
    deliverables: ['Commercial production release', 'Healthcare provider scientific dossiers', 'Post-marketing pharmacovigilance framework']
  }
];
