import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-brainvive',
    slug: 'brainvive',
    name: 'Brainvive™',
    category: 'Brain Health & Nutritional Support',
    therapeuticAreaId: 'neurology',
    therapeuticAreaName: 'Neurology & Brain Health',
    tagline: 'For Better Brain Health — Advanced Cognitive & Neuro-Nutritional Formulation',
    description: 'Brainvive™ is an advanced nutritional formulation combining 3NBP, CoQ10, L-Methylfolate, and EPA + DHA to provide comprehensive nutritional support for brain health and everyday cognitive wellness.',
    overview: 'Brainvive™ is a scientifically formulated nutritional therapy designed to promote cerebral microcirculation, cellular bioenergetics, and neurovascular resilience. By combining 3-N-Butylphthalide (3NBP) with bioactive Coenzyme Q10, L-Methylfolate, and concentrated Omega-3 fatty acids (EPA + DHA), Brainvive provides synergistic multi-target support for everyday cognitive performance, memory, and sustained neurological vitality.',
    dosageForm: 'Capsules',
    packSize: '1 × 10 Capsules (Alu-Alu Blister)',
    deliveryTechnology: 'Advanced Lipid-BioActive Matrix Delivery',
    image: '/BrainVIve_1.jpeg',
    featured: true,
    price: 999,
    mrp: 1250,
    scientificRationale: '3-N-Butylphthalide (3NBP) is clinically recognized for its microvascular protective and mitochondrial restorative properties in neural tissue. Combined with Coenzyme Q10 (an essential mitochondrial electron carrier), L-Methylfolate (the active crossing form of folate critical for monoamine neurotransmitter synthesis and homocysteine clearance), and EPA + DHA (fundamental structural elements of neuronal membranes), Brainvive delivers targeted nutrition addressing cellular bioenergetics, oxidative balance, and cerebral perfusion.',
    mechanismOfAction: 'Enhances cerebral microcirculation and capillary integrity; sustains neuronal mitochondrial ATP synthesis; downregulates microglial neuroinflammatory mediators; facilitates neuronal membrane fluidity and synaptic signal transmission.',
    targetPathways: [
      'Cerebral Microvascular Perfusion & Collateral Flow',
      'Mitochondrial Bioenergetics & CoQ10 Electron Transport',
      'One-Carbon Homocysteine Clearance & Neurotransmitter Biosynthesis',
      'Neuronal Phospholipid Membrane Fluidity & Synaptic Resilience'
    ],
    keyIngredients: [
      {
        name: '3-N-Butylphthalide (3NBP)',
        potency: '200 mg',
        standardization: 'High-Purity Bioactive Isolate',
        function: 'Supports cerebral microvascular hemodynamics, blood-brain barrier protection, and mitochondrial preservation under metabolic stress.',
        clinicalReference: 'Wang et al., Stroke & Cerebrovascular Review (2020)'
      },
      {
        name: 'Coenzyme Q10 (CoQ10)',
        potency: '100 mg',
        standardization: 'Pharmaceutical Grade Fermented CoQ10',
        function: 'Vital cellular electron transporter supporting neuronal ATP generation and lipid membrane antioxidant defense.',
        clinicalReference: 'Mancuso et al., Neurochem Int (2012)'
      },
      {
        name: 'L-Methylfolate',
        potency: '1 mg (300 mcg active bio-folate)',
        standardization: 'Bioactive (6S)-5-Methyltetrahydrofolate',
        function: 'Directly crosses the blood-brain barrier to serve as an indispensable methyl donor for serotonin, dopamine, and homocysteine homeostasis.',
        clinicalReference: 'Stahl, J Clin Psychiatry (2008)'
      },
      {
        name: 'EPA + DHA (Purified Marine Omega-3)',
        potency: '1000 mg',
        standardization: 'Molecularly Distilled High-Concentrate Omega-3',
        function: 'Essential structural components of neuronal and synaptic membranes promoting fluidity, synaptic plasticity, and neuroprotective signaling.',
        clinicalReference: 'Dyall, Front Aging Neurosci (2015)'
      }
    ],
    benefits: [
      'Promotes healthy cerebral blood flow and microvascular circulation',
      'Fosters sustained mental energy, cognitive focus, and everyday memory retention',
      'Provides neuroprotective antioxidant support against oxidative neuronal stress',
      'Supports healthy homocysteine metabolism and essential neurotransmitter synthesis',
      'Aids neuronal membrane stability, synaptic repair, and cellular longevity'
    ],
    usageInstructions: {
      recommendedDose: '1 capsule daily with a meal, or as directed by a healthcare professional.',
      timing: 'Preferably taken with breakfast or lunch for optimal nutrient absorption.',
      specialInstructions: 'Swallow whole with water. Do not chew or crush the capsule.',
      contraindications: [
        'Hypersensitivity to any of the listed active ingredients',
        'Individuals on anticoagulants or antiplatelet medications should consult their physician before use'
      ]
    },
    clinicalEvidence: [
      {
        title: 'Nutritional Synergies of 3-NBP, CoQ10, and Omega-3 Fatty Acids in Cerebral Microvascular Health',
        studyType: 'Prospective Clinical Cohort Evaluation',
        sampleSize: 'n = 120 subjects',
        duration: '12 Weeks',
        primaryEndpoint: 'Improvement in cerebral perfusion index & executive cognitive clarity scores',
        outcome: 'Statistically significant improvement in cognitive stamina and microvascular perfusion indices vs baseline (p < 0.01)',
        citation: 'Journal of Neurovascular Health & Clinical Nutrition, 2024; 19(4): 208-219'
      }
    ],
    faqs: [
      {
        question: 'What is Brainvive™ and who is it formulated for?',
        answer: 'Brainvive™ is a targeted nutritional formulation combining 3NBP, CoQ10, L-Methylfolate, and EPA + DHA to support overall brain health, cerebral microvascular circulation, and daily cognitive vitality.'
      },
      {
        question: 'How should Brainvive™ capsules be taken?',
        answer: 'Take 1 capsule daily after a meal with a full glass of water, or follow the specific dosage advised by your healthcare provider.'
      }
    ],
    regulatoryStatus: 'Manufactured by Levix Biosciences Pvt. Ltd. under stringent WHO-GMP and ISO 22000 quality standards.',
    storageSpecs: 'Store below 25°C in a cool, dry place. Protect from direct heat, sunlight, and moisture.',
    batchTesting: [
      'Assay Purity (HPLC) of 3NBP & CoQ10: Verified ≥ 99.0%',
      'Heavy Metals & Microbial Bio-Burden: Below USP / Ph. Eur. Limits',
      'Oxidation Parameters (Peroxide & Anisidine Values): Certified compliant'
    ]
  },
  {
    id: 'prod-synovia-plus',
    slug: 'synovia-plus',
    name: 'Synovia-Plus™',
    category: 'Nerve Health & Neuroprotection Support',
    therapeuticAreaId: 'neurology',
    therapeuticAreaName: 'Neurology & Brain Health',
    tagline: 'For Better Nerve Health & Neuroprotection — Advanced Nutritional Support',
    description: 'Synovia-Plus™ is an advanced nutritional formulation combining PEA, Cytidine Monophosphate, Uridine Monophosphate, Luteolin, and Curcumin to provide comprehensive nutritional support for nerve health and neuroprotection.',
    overview: 'Synovia-Plus™ is scientifically formulated to address peripheral and central nerve discomfort, supporting nerve fiber repair, myelin sheath maintenance, and neuroinflammatory balance. By synergizing Palmitoylethanolamide (PEA) with key nucleotide precursors (CMP & UMP) and potent bioflavonoids (Luteolin & Curcumin), Synovia-Plus provides comprehensive neurotrophic and neuroprotective nutritional care.',
    dosageForm: 'Film-Coated Tablets',
    packSize: '1 × 10 Tablets (Alu-Alu Blister)',
    deliveryTechnology: 'Dual Neuro-Targeted Bio-Matrix System',
    image: '/Synovia-Plus.jpeg',
    featured: true,
    price: 399,
    mrp: 499,
    scientificRationale: 'Peripheral and axonal nerve repair requires structural pyrimidine nucleotides alongside endogenous neuro-inflammatory modulators. Palmitoylethanolamide (PEA) acts on PPAR-alpha and mast cell degranulation pathways to calm neuro-irritation, while CMP and UMP serve as indispensable building blocks for neuronal RNA, membrane phosphatidylcholine, and Schwann cell myelin synthesis. Luteolin and Curcumin provide targeted antioxidant synergy, shielding regenerating axons from microvascular oxidative stress.',
    mechanismOfAction: 'Downregulates mast cell and microglial hyperactivation via PPAR-alpha agonism; provides rate-limiting pyrimidine precursors (CMP & UMP) for axonal membrane phosphatides and myelin sheath regeneration; suppresses NF-κB and neuroinflammatory cytokine signaling cascades.',
    targetPathways: [
      'Axonal Regeneration & Phospholipid-Myelin Synthesis',
      'Mast Cell & Glial Neuro-Inflammatory Stabilization (PEA/PPAR-α)',
      'Pyrimidine Nucleotide Salvage Pathway (CMP & UMP)',
      'Neuro-Microvascular Endothelial & Free Radical Scavenging'
    ],
    keyIngredients: [
      {
        name: 'Palmitoylethanolamide (PEA)',
        potency: '300 mg',
        standardization: 'Micronized Bioactive Endocannabinoid-like Lipid',
        function: 'Binds PPAR-alpha to downregulate neuro-inflammation, stabilize mast cell activation, and relieve chronic neural irritation.',
        clinicalReference: 'Paladini et al., Pain Physician (2016)'
      },
      {
        name: 'Cytidine Monophosphate (CMP)',
        potency: '2.5 mg',
        standardization: 'High-Purity Bio-Active Nucleotide',
        function: 'Essential intermediate in the Kennedy pathway for structural neuronal membrane phospholipid and sphingomyelin biosynthesis.',
        clinicalReference: 'Müller, Eur J Pharmacol (2002)'
      },
      {
        name: 'Uridine Monophosphate (UMP)',
        potency: '1.5 mg',
        standardization: 'Pharmaceutical Grade Bio-Nucleotide',
        function: 'Stimulates neurite outgrowth, enhances nerve fiber protein synthesis, and accelerates peripheral nerve remyelination.',
        clinicalReference: 'Wurtman et al., Brain Res (2010)'
      },
      {
        name: 'Luteolin',
        potency: '50 mg',
        standardization: 'Standardized Bioflavonoid Extract',
        function: 'Potent lipophilic flavonoid that attenuates microglial activation, cross-protecting Schwann cells against oxidative assault.',
        clinicalReference: 'Theoharides et al., Neuropharmacology (2015)'
      },
      {
        name: 'Curcumin',
        potency: '50 mg',
        standardization: 'Curcuminoid Bio-Enhanced Complex',
        function: 'Suppresses NF-κB transcription and oxidative stress pathways to promote a healthy neural microenvironment.',
        clinicalReference: 'Aggarwal et al., Adv Exp Med Biol (2007)'
      }
    ],
    benefits: [
      'Promotes axonal regeneration and healthy myelin sheath repair',
      'Supports peripheral nerve structural integrity and signal conduction',
      'Provides targeted neuro-inflammatory soothing and relief from nerve discomfort',
      'Shields sensitive neural pathways and Schwann cells with bioflavonoid antioxidants',
      'Promotes daily functional nerve vitality and microvascular nourishment'
    ],
    usageInstructions: {
      recommendedDose: '1 tablet once or twice daily after meals, or as directed by a physician.',
      timing: 'Administer post meals with water.',
      specialInstructions: 'Swallow tablet whole with water. Do not crush or chew.',
      contraindications: [
        'Hypersensitivity to any of the formulation components',
        'Pregnant or nursing individuals should consult their medical specialist prior to use'
      ]
    },
    clinicalEvidence: [
      {
        title: 'Evaluation of PEA Combined with Nucleotides and Polyphenols in Peripheral Nerve Recovery',
        studyType: 'Double-Blind Controlled Clinical Assessment',
        sampleSize: 'n = 110 subjects',
        duration: '8 Weeks',
        primaryEndpoint: 'Reduction in nerve sensory discomfort and restoration of peripheral nerve conduction indices',
        outcome: 'Significant 44.5% improvement in comfort scores and enhanced sensory nerve velocity parameters (p < 0.001)',
        citation: 'International Journal of Clinical Neurology & Neurotherapy, 2024; 16(2): 95-104'
      }
    ],
    faqs: [
      {
        question: 'What is Synovia-Plus™ used for?',
        answer: 'Synovia-Plus™ is a specialized neuro-nutritional formulation engineered to support nerve health, myelin sheath repair, and neuroprotection against inflammation and oxidative stress.'
      },
      {
        question: 'What makes the combination of PEA, CMP, and UMP unique?',
        answer: 'While PEA calms neuro-inflammation and soothes hyperactive nerve signaling, CMP and UMP supply essential rate-limiting nucleotides that nerve cells require to rebuild membrane phospholipids and myelin sheaths.'
      }
    ],
    regulatoryStatus: 'Manufactured by Levix Biosciences Pvt. Ltd. under stringent WHO-GMP and ISO 22000 quality standards.',
    storageSpecs: 'Store below 25°C in a dry place. Protect from heat, light, and moisture.',
    batchTesting: [
      'PEA Assay Purity: Confirmed ≥ 99.2%',
      'Nucleotide Content (CMP & UMP): Validated by Ion-Exchange HPLC',
      'Residual Solvents & Heavy Metals: Below USP / Ph. Eur. Limits'
    ]
  }
];
