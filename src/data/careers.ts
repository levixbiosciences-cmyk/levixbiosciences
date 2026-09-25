import { JobOpening } from '../types';

export const careerCulture = [
  {
    icon: '🔬',
    title: 'Science First Culture',
    description: 'We reward scientific rigor, mechanistic curiosity, and evidence-driven hypothesis testing.'
  },
  {
    icon: '🌱',
    title: 'Continuous Development',
    description: 'Generous funding for international conference attendance, patent incentives, and continuing education.'
  },
  {
    icon: '🤝',
    title: 'Interdisciplinary Collaboration',
    description: 'Seamless synergy between formulation chemists, clinical investigators, and medical liaisons.'
  },
  {
    icon: '⚖️',
    title: 'Integrity & Transparency',
    description: 'Uncompromising adherence to ICH-GCP ethics, regulatory compliance, and equal opportunity workplace values.'
  }
];

export const jobOpenings: JobOpening[] = [
  {
    id: 'job-01',
    title: 'Senior Research Scientist — Formulation Chemistry',
    department: 'R&D / Discovery',
    location: 'Mumbai R&D Innovation Center, India',
    employmentType: 'Full-Time',
    experienceLevel: '5+ Years in Pharma R&D / Ph.D. or M.Pharm',
    summary: 'Lead the design and characterization of next-generation lipid-matrix (LMPDS™) and self-microemulsifying drug delivery systems (SMEDDS) for neurovascular and metabolic compounds.',
    responsibilities: [
      'Formulate novel oral solid and liquid delivery matrices for poorly bioavailable active biomolecules.',
      'Design and execute pre-formulation, excipient compatibility, and accelerated stability studies.',
      'Operate advanced analytical instrumentation (UHPLC, Malvern Zetasizer, Differential Scanning Calorimetry).',
      'Collaborate with intellectual property counsel on patent disclosures and claims drafting.'
    ],
    qualifications: [
      'Ph.D. or Master of Pharmacy in Pharmaceutics, Pharmaceutical Chemistry, or related science discipline.',
      'Proven expertise in lipid nanoparticle formulation, microemulsions, or cyclodextrin complexes.',
      'Strong publication or patent track record in translational pharmaceutics.'
    ],
    skills: ['Formulation R&D', 'HPLC / LC-MS', 'Lipid Nanotechnology', 'ICH Stability', 'Patent Drafting']
  },
  {
    id: 'job-02',
    title: 'Clinical Research Associate (CRA) — Specialty Therapeutics',
    department: 'Clinical Affairs',
    location: 'Mumbai / Hybrid',
    employmentType: 'Full-Time',
    experienceLevel: '3-6 Years in Clinical Trial Management',
    summary: 'Oversee multi-center Phase II & Phase III clinical trials across neurology, cardiology, and endocrinology investigator sites in accordance with GCP and ICH guidelines.',
    responsibilities: [
      'Conduct site qualification, initiation, routine monitoring, and close-out visits for hospital partner sites.',
      'Ensure strict protocol compliance, investigator file integrity, and prompt adverse event reporting.',
      'Interface with Institutional Ethics Committees (IEC/IRB) for protocol submissions and annual renewals.',
      'Manage electronic data capture (EDC) systems and resolve clinical data queries with principal investigators.'
    ],
    qualifications: [
      'Bachelor or Master degree in Life Sciences, Pharmacology, Nursing, or Medicine.',
      'Certified GCP training with minimum 3 years of on-site monitoring experience in hospital settings.',
      'Exceptional interpersonal communication and clinical documentation rigor.'
    ],
    skills: ['GCP Compliance', 'Site Monitoring', 'EDC / CTMS', 'Ethics Submissions', 'Protocol Oversight']
  },
  {
    id: 'job-03',
    title: 'Product Manager — Neuro & Metabolic Portfolio',
    department: 'Commercial & Strategy',
    location: 'Mumbai Corporate HQ, India',
    employmentType: 'Full-Time',
    experienceLevel: '4-7 Years in Specialty Pharma Brand Management',
    summary: 'Drive strategic product lifecycle marketing, medical education symposia, and clinical positioning for our core neuroprotective (Neurovia) and metabolic (Metabion) product lines.',
    responsibilities: [
      'Develop evidence-based scientific promotional campaigns targeting key opinion leader (KOL) neurologists and endocrinologists.',
      'Create high-impact clinical monographs, mechanism-of-action visualizers, and CME conference programs.',
      'Analyze therapy area epidemiology, prescription trends, and competitor product dynamics.',
      'Partner closely with Medical Affairs and field scientific liaisons to optimize brand clinical adoption.'
    ],
    qualifications: [
      'B.Pharm / B.Sc with MBA in Marketing / Pharmaceutical Management.',
      'Minimum 4 years of proven product management track record in CNS, cardiology, or metabolic therapy areas.',
      'Demonstrated ability to translate complex molecular pharmacology into physician-relevant clinical value propositions.'
    ],
    skills: ['Brand Strategy', 'KOL Engagement', 'Therapy Area Marketing', 'Medical Communications', 'P&L Management']
  },
  {
    id: 'job-04',
    title: 'Manager — Quality Assurance & Regulatory Compliance',
    department: 'Regulatory & QA',
    location: 'Navi Mumbai WHO-GMP Facility, India',
    employmentType: 'On-Site',
    experienceLevel: '6-10 Years in Pharma QA / WHO-GMP Cleanroom Operations',
    summary: 'Lead site quality systems, audit readiness, electronic batch record reviews, and regulatory submissions for domestic (CDSCO) and international export territories.',
    responsibilities: [
      'Maintain site Quality Management System (QMS) covering deviations, CAPA, change controls, and OOS investigations.',
      'Direct Class 100,000 cleanroom environmental monitoring protocols and HVAC qualification reviews.',
      'Host client audits, WHO-GMP regulatory inspections, and third-party registrar certifications.',
      'Review Certificate of Analysis (CoA) releases and ensure total compliance with USP/EP compendial standards.'
    ],
    qualifications: [
      'M.Pharm / M.Sc in Chemistry or Quality Assurance.',
      'Extensive hands-on knowledge of 21 CFR Part 210/211, WHO-GMP, and ISO 9001/22000 standards.',
      'Strong leadership with experience managing cross-functional QC/QA analytical teams.'
    ],
    skills: ['WHO-GMP Cleanroom QA', 'QMS & CAPA', 'Regulatory Submissions', 'Audit Defense', 'Batch Release']
  },
  {
    id: 'job-05',
    title: 'Medical Science Liaison (MSL) — Cardio-Renal Domain',
    department: 'Medical Affairs',
    location: 'Delhi / North India Field',
    employmentType: 'Hybrid',
    experienceLevel: '3+ Years in Medical Affairs / MBBS / PharmD / MD',
    summary: 'Serve as the primary peer-to-peer scientific conduit connecting NovaThera clinical research with leading cardiologists, nephrologists, and academic medical centers.',
    responsibilities: [
      'Deliver non-promotional scientific presentations on endothelial function, SMEDDS biokinetics, and clinical trial datasets.',
      'Facilitate investigator-initiated clinical studies (IIS) and gather therapeutic insights from clinical advisory boards.',
      'Provide medical review for educational symposia, conference proceedings, and medical training materials.',
      'Address unsolicited medical inquiries regarding off-label pharmacology and special patient populations.'
    ],
    qualifications: [
      'Pharm.D., M.D., or Ph.D. in Pharmacology / Biomedical Sciences.',
      'Prior MSL experience in cardiology, nephrology, or internal medicine preferred.',
      'Outstanding presentation skills with the ability to discuss complex biochemical pathways with KOL clinicians.'
    ],
    skills: ['Peer Scientific Dialogue', 'KOL Advisory Boards', 'Clinical Trial Navigation', 'Medical Education']
  }
];
