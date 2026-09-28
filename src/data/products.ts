import { Product } from '../types';
import brainviveImg from '../assets/BrainVIve_1.jpeg';
import synoviaPlusImg from '../assets/Synovia-Plus.jpeg';

export const products: Product[] = [
  {
    id: 'prod-brainvive',
    slug: 'brainvive',
    name: 'Brainvive™',
    category: 'Brain Health & Nutritional Support',
    therapeuticAreaId: 'neurology',
    therapeuticAreaName: 'Neurology & Brain Health',
    tagline: 'Comprehensive Neuroprotective Formulation — For Cerebral Ischemia, Mitochondrial Recovery & Neuronal Repair',
    description: 'Brainvive™ is a comprehensive neuroprotective formulation by LEVIX Biosciences Pvt. Ltd., designed to target cerebral ischemia, mitochondrial energy depletion, and neuronal injury. It combines standard neuro-nutrients with targeted vascular and metabolic agents — 3-N-Butylphthalide (3NBP) 200 mg, Coenzyme Q10 100 mg, L-Methylfolate 1 mg, and EPA + DHA 1000 mg — for synergistic multi-target neuroprotection.',
    overview: 'Brainvive™ is a scientifically engineered neuroprotective therapy addressing the multi-mechanistic pathophysiology of acute ischemic stroke (AIS) and chronic neurodegenerative injury. Through its four-component architecture, it restores microcirculatory blood flow to the ischemic penumbra (3NBP), rescues mitochondrial ATP synthesis in energy-depleted neurons (CoQ10 + 3NBP), suppresses excitotoxicity and ischemia-reperfusion injury, corrects hyperhomocysteinemia and endothelial dysfunction (L-Methylfolate), and resolves neuroinflammation while structurally reinforcing neuronal membranes (EPA + DHA). Indicated for post-stroke rehabilitation, acute ischemic stroke adjuvant therapy, vascular cognitive impairment, and primary neuroprotective therapy.',
    dosageForm: 'Softgel Capsules',
    packSize: '1 × 10 Softgel Capsules (Alu-Alu Blister)',
    deliveryTechnology: 'Advanced Lipid-BioActive Matrix Delivery',
    image: brainviveImg,
    featured: true,
    price: 999,
    mrp: 1250,
    scientificRationale: '3-N-Butylphthalide (3NBP) is clinically recognized for promoting microvascular remodeling and enhancing collateral blood flow to the ischemic penumbra, salvaging viable brain tissue surrounding the infarct core, while reducing platelet aggregation and inhibiting thrombosis. Coenzyme Q10 restores mitochondrial ATP synthesis in ischemic neurons and inhibits the opening of the mitochondrial permeability transition pore (mPTP), preventing early apoptotic cell death. L-Methylfolate reduces plasma hyperhomocysteinemia — a key risk factor for recurrent stroke — and enhances eNOS activity to promote nitric oxide-mediated vasodilation. EPA + DHA downregulate pro-inflammatory cytokines (TNF-α, IL-1β, IL-6), generate neuroprotective resolvins and protectins, and as major phospholipid components of neuronal membranes, support dendritic spine density, synaptic transmission, and long-term potentiation (LTP).',
    mechanismOfAction: 'Promotes microvascular remodeling and collateral circulation to the ischemic penumbra; inhibits thrombosis and platelet aggregation (3NBP); restores mitochondrial ATP synthesis and blocks mPTP opening to prevent apoptosis (CoQ10 + 3NBP); suppresses intracellular calcium overload, glutamate excitotoxicity, and ROS generated during ischemia-reperfusion (3NBP + CoQ10); reduces hyperhomocysteinemia and enhances eNOS-mediated vasodilation (L-Methylfolate); downregulates TNF-α, IL-1β, IL-6 and promotes BBB repair via resolvins and protectins (EPA + DHA); supports DHA-rich neuronal membrane integrity, synaptic plasticity, and BDNF upregulation.',
    targetPathways: [
      'Microvascular Remodeling & Collateral Circulation to Ischemic Penumbra',
      'Mitochondrial Bioenergetics, mPTP Inhibition & Anti-Apoptotic Defense',
      'Excitotoxicity & Ischemia-Reperfusion Injury Suppression',
      'Homocysteine Clearance & eNOS-Mediated Endothelial Vasodilation',
      'Neuroinflammation Resolution & Blood-Brain Barrier Repair (EPA/DHA)',
      'Synaptic Plasticity, LTP & BDNF Neurotrophic Upregulation'
    ],
    keyIngredients: [
      {
        name: '3-N-Butylphthalide (3NBP)',
        potency: '200 mg',
        standardization: 'High-Purity Bioactive Isolate',
        function: 'Promotes microvascular remodeling and enhances collateral blood flow to the ischemic penumbra, salvaging viable brain tissue. Reduces platelet aggregation and inhibits thrombosis without significantly increasing systemic hemorrhage risk. Restores mitochondrial ATP synthesis in ischemic neurons, inhibits mPTP opening, suppresses intracellular calcium overload and glutamate excitotoxicity, and scavenges ROS during ischemia-reperfusion injury.',
        clinicalReference: 'Wang et al., Stroke & Cerebrovascular Review (2020)'
      },
      {
        name: 'Coenzyme Q10 (CoQ10)',
        potency: '100 mg',
        standardization: 'Pharmaceutical Grade Fermented CoQ10',
        function: 'Restores mitochondrial ATP synthesis in ischemic neurons, mitigating metabolic crisis and energetic failure. Inhibits the mitochondrial permeability transition pore (mPTP) opening to prevent early apoptotic cell death. Synergizes with 3NBP to attenuate oxidative stress-induced DNA damage, stabilize mitochondrial membrane potential, and promote BDNF upregulation.',
        clinicalReference: 'Mancuso et al., Neurochem Int (2012)'
      },
      {
        name: 'L-Methylfolate',
        potency: '1 mg (300 mcg active bio-folate)',
        standardization: 'Bioactive (6S)-5-Methyltetrahydrofolate',
        function: 'Reduces plasma hyperhomocysteinemia — a key risk factor for recurrent stroke and endothelial dysfunction. Enhances endothelial nitric oxide synthase (eNOS) activity to promote nitric oxide-mediated vasodilation. Directly crosses the blood-brain barrier as an indispensable methyl donor for serotonin, dopamine biosynthesis, and one-carbon metabolism.',
        clinicalReference: 'Stahl, J Clin Psychiatry (2008)'
      },
      {
        name: 'EPA + DHA (Purified Marine Omega-3)',
        potency: '1000 mg',
        standardization: 'Molecularly Distilled High-Concentrate Omega-3',
        function: 'Downregulates pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) and reduces neuroinflammation in glia and astrocytes. Resolvins and protectins derived from EPA/DHA active metabolites promote neuronal repair and restore blood-brain barrier (BBB) integrity. DHA as a major phospholipid component of neuronal membranes supports dendritic spine density, synaptic transmission, long-term potentiation (LTP), and functional neurological recovery post-stroke.',
        clinicalReference: 'Dyall, Front Aging Neurosci (2015)'
      }
    ],
    indicationFocus: 'Post-stroke rehabilitation, acute ischemic stroke adjuvant therapy, vascular cognitive impairment, and primary neuroprotective therapy.',
    benefits: [
      'Restores microvascular blood flow and enhances collateral circulation to the ischemic penumbra in acute ischemic stroke',
      'Reduces platelet aggregation and inhibits thrombosis without significantly increasing hemorrhage risk',
      'Rescues mitochondrial ATP synthesis and blocks mPTP-mediated apoptosis in energy-depleted ischemic neurons',
      'Suppresses excitotoxicity, intracellular calcium overload, and ROS during ischemia-reperfusion injury',
      'Reduces plasma hyperhomocysteinemia and enhances eNOS-mediated endothelial vasodilation',
      'Resolves neuroinflammation via EPA/DHA-derived resolvins and protectins; restores blood-brain barrier integrity',
      'Supports dendritic spine density, synaptic plasticity, and long-term potentiation (LTP) for functional neurological recovery',
      'Promotes BDNF upregulation and cellular longevity through synergistic CoQ10 + 3NBP anti-apoptotic action',
      'Indicated for post-stroke rehabilitation, acute ischemic stroke adjuvant therapy, vascular cognitive impairment, and primary neuroprotective therapy'
    ],
    benefitSections: [
      {
        category: 'Benefits in Acute Ischemic Stroke (AIS)',
        items: [
          {
            title: 'Microcirculatory Restoration & Collateral Circulation (3NBP)',
            points: [
              'Promotes microvascular remodeling and enhances collateral blood flow to the ischemic penumbra, helping salvage viable brain tissue surrounding the infarct core.',
              'Reduces platelet aggregation and inhibits thrombosis without significantly increasing systemic hemorrhage risk.'
            ]
          },
          {
            title: 'Mitochondrial Protection & Energy Recovery (CoQ10 + 3NBP)',
            points: [
              'Restores mitochondrial ATP synthesis in ischemic neurons, mitigating metabolic crisis and energetic failure.',
              'Inhibits the opening of the mitochondrial permeability transition pore (mPTP), preventing early apoptotic cell death.'
            ]
          },
          {
            title: 'Inhibition of Excitotoxicity & Ischemia-Reperfusion Injury',
            points: [
              'Suppresses excessive intracellular calcium overload and glutamate release.',
              'Scavenges reactive oxygen species (ROS) produced rapidly during ischemia and post-thrombolysis reperfusion.'
            ]
          },
          {
            title: 'Vascular Endothelial Support & Homocysteine Control (L-Methylfolate)',
            points: [
              'Reduces plasma hyperhomocysteinemia, a key risk factor for recurrent stroke and endothelial dysfunction.',
              'Enhances endothelial nitric oxide synthase (eNOS) activity, promoting nitric oxide-mediated vasodilation.'
            ]
          }
        ]
      },
      {
        category: 'Benefits in Neuroprotection & Long-Term Brain Health',
        items: [
          {
            title: 'Anti-Inflammatory Response (EPA + DHA)',
            points: [
              'High-dose Omega-3 fatty acids (EPA/DHA) downregulate pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) and reduce neuroinflammation in glia and astrocytes.',
              'Resolvins and protectins derived from EPA/DHA active metabolites promote neuronal repair and repair blood-brain barrier (BBB) integrity.'
            ]
          },
          {
            title: 'Structural Membrane Integrity & Synaptic Plasticity',
            points: [
              'DHA is a major phospholipid component of neuronal membranes; supplementation supports dendritic spine density, synaptic transmission, and long-term potentiation (LTP).',
              'Promotes neuroregeneration and functional neurological recovery post-stroke.'
            ]
          },
          {
            title: 'Cellular Longevity & Anti-Apoptotic Defense',
            points: [
              'Synergistic action of CoQ10 and 3NBP attenuates oxidative stress-induced DNA damage and stabilizes mitochondrial membrane potential.',
              'Promotes the upregulation of neurotrophic factors such as BDNF (Brain-Derived Neurotrophic Factor).'
            ]
          }
        ]
      }
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
        title: 'Adjuvant Role of 3-NBP + CoQ10 + Omega-3 in Acute Ischemic Stroke: Penumbra Salvage and Mitochondrial Recovery',
        studyType: 'Randomized Double-Blind Placebo-Controlled Clinical Trial',
        sampleSize: 'n = 180 subjects (AIS within 72 h of onset)',
        duration: '90 Days',
        primaryEndpoint: 'NIHSS score improvement, infarct volume reduction on MRI, and mRS functional outcome at Day 90',
        outcome: 'Significant reduction in NIHSS scores (p < 0.001), 28% reduction in infarct volume, and improved mRS functional independence vs placebo; no significant increase in hemorrhagic transformation',
        citation: 'Journal of Cerebrovascular & Brain Medicine, 2024; 11(3): 145-158'
      },
      {
        title: 'Nutritional Synergies of 3-NBP, CoQ10, and Omega-3 Fatty Acids in Cerebral Microvascular Health & Cognitive Recovery',
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
        answer: 'Brainvive™ is a comprehensive neuroprotective formulation by LEVIX Biosciences Pvt. Ltd. designed for patients requiring acute ischemic stroke (AIS) adjuvant therapy, post-stroke rehabilitation, vascular cognitive impairment management, and primary neuroprotective support. It combines 3-N-Butylphthalide (3NBP) 200 mg, CoQ10 100 mg, L-Methylfolate 1 mg, and EPA + DHA 1000 mg for multi-target cerebrovascular and mitochondrial protection.'
      },
      {
        question: 'How does Brainvive™ help in acute ischemic stroke (AIS)?',
        answer: '3NBP promotes microvascular remodeling and enhances collateral blood flow to the ischemic penumbra, helping salvage viable brain tissue. Combined with CoQ10, it restores mitochondrial ATP synthesis, inhibits mPTP-mediated apoptosis, suppresses calcium overload and glutamate excitotoxicity, and scavenges ROS generated during ischemia-reperfusion injury. L-Methylfolate reduces hyperhomocysteinemia and enhances endothelial vasodilation, while EPA + DHA resolve neuroinflammation and repair the blood-brain barrier.'
      },
      {
        question: 'What is the role of EPA + DHA in Brainvive™?',
        answer: 'High-dose Omega-3 fatty acids (EPA + DHA 1000 mg) downregulate pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) and reduce neuroinflammation in glia and astrocytes. Their active metabolites — resolvins and protectins — promote neuronal repair and restore blood-brain barrier integrity. DHA, as a major structural phospholipid of neuronal membranes, supports dendritic spine density, synaptic transmission, long-term potentiation (LTP), and functional neurological recovery post-stroke.'
      },
      {
        question: 'How should Brainvive™ softgel capsules be taken?',
        answer: 'Take 1 softgel capsule daily after a meal with a full glass of water, or follow the specific dosage advised by your healthcare provider. Swallow whole — do not chew or crush.'
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
    tagline: 'Advanced Neuroprotective & Nerve Support Formulation — For Peripheral & Central Neuropathies',
    description: 'Synovia-Plus™ is an advanced neuroprotective and nerve support formulation by LEVIX Biosciences Pvt. Ltd., designed to address nerve degeneration, chronic neuroinflammation, and neuropathic pain in both central and peripheral nervous system disorders. It combines nucleotide-driven structural nerve regeneration (CMP + UMP) with targeted anti-neuroinflammatory bioactives (PEA + Luteolin + Curcumin).',
    overview: 'Synovia-Plus™ is scientifically formulated to treat complex neuropathic conditions across both the peripheral and central nervous systems. By combining rate-limiting pyrimidine nucleotides (Cytidine Monophosphate & Uridine Monophosphate) with the endogenous anti-neuroinflammatory lipid Palmitoylethanolamide (PEA) and potent bioflavonoids (Luteolin & Curcumin), Synovia-Plus delivers synergistic efficacy — restoring structural myelin/axonal integrity while calming microglial hyperactivity and neuropathic pain sensitization.',
    dosageForm: 'Film-Coated Tablets',
    packSize: '1 × 10 Film-Coated Tablets (Alu-Alu Strip)',
    deliveryTechnology: 'Dual Neuro-Targeted Bio-Matrix System',
    image: synoviaPlusImg,
    featured: true,
    price: 399,
    mrp: 499,
    scientificRationale: 'Synovia-Plus™ operates on a dual-mechanism paradigm for peripheral and central neuropathies: structural neuro-regeneration and neuro-inflammatory downregulation. Peripheral axonal regeneration and myelin sheath reconstruction are fundamentally rate-limited by the availability of pyrimidine nucleotides; Cytidine Monophosphate (CMP) and Uridine Monophosphate (UMP) provide critical biochemical substrates for the Kennedy pathway, directly fueling the synthesis of membrane phosphatidylcholine, phosphatidylethanolamine, and Schwann cell myelin sheaths. Simultaneously, chronic neuropathic pain and nerve degradation are perpetuated by microglial and mast cell hyperactivation. Palmitoylethanolamide (PEA), an endogenous bioactive lipid acting via nuclear PPAR-α receptors, downregulates neuroinflammatory cytokine release, stabilizes mast cell degranulation, and dampens spinal nociceptive transmission. Luteolin and Curcumin provide synergistic lipophilic bioflavonoid protection, suppressing NF-κB transcription and shielding regenerating axonal membranes from microvascular oxidative degradation.',
    mechanismOfAction: 'Downregulates mast cell and microglial hyperactivation via PPAR-alpha agonism; provides rate-limiting pyrimidine precursors (CMP & UMP) for axonal membrane phosphatides and myelin sheath regeneration; suppresses NF-κB and neuroinflammatory cytokine signaling cascades (TNF-α, IL-1β); modulates central sensitization and neuropathic nociceptive signaling at spinal cord and cortical levels.',
    targetPathways: [
      'Axonal Regeneration & Phospholipid-Myelin Synthesis (Kennedy Pathway)',
      'Mast Cell & Glial Neuro-Inflammatory Stabilization (PEA / PPAR-α)',
      'Central & Peripheral Neuropathic Pain Pathway Modulation',
      'Pyrimidine Nucleotide Salvage Pathway (CMP & UMP)',
      'Neuro-Microvascular Endothelial & Free Radical Scavenging (Luteolin + Curcumin)'
    ],
    keyIngredients: [
      {
        name: 'Palmitoylethanolamide (PEA)',
        potency: '300 mg',
        standardization: 'Micronized Bioactive Endocannabinoid-like Lipid',
        function: 'Binds PPAR-alpha to downregulate neuro-inflammation, stabilize mast cell activation, and relieve chronic neural irritation and neuropathic pain.',
        clinicalReference: 'Paladini et al., Pain Physician (2016)'
      },
      {
        name: 'Cytidine Monophosphate (CMP)',
        potency: '2.5 mg',
        standardization: 'High-Purity Bio-Active Nucleotide',
        function: 'Essential intermediate in the Kennedy pathway for structural neuronal membrane phospholipid and Schwann cell myelin sheath biosynthesis.',
        clinicalReference: 'Müller, Eur J Pharmacol (2002)'
      },
      {
        name: 'Uridine Monophosphate (UMP)',
        potency: '1.5 mg',
        standardization: 'Pharmaceutical Grade Bio-Nucleotide',
        function: 'Stimulates neurite outgrowth, enhances nerve fiber protein synthesis, and accelerates peripheral nerve remyelination and axonal regeneration.',
        clinicalReference: 'Wurtman et al., Brain Res (2010)'
      },
      {
        name: 'Luteolin',
        potency: '50 mg',
        standardization: 'Standardized Bioflavonoid Extract',
        function: 'Potent lipophilic flavonoid that attenuates microglial activation, cross-protecting Schwann cells against oxidative assault and neurotoxicity.',
        clinicalReference: 'Theoharides et al., Neuropharmacology (2015)'
      },
      {
        name: 'Curcumin',
        potency: '50 mg',
        standardization: 'Curcuminoid Bio-Enhanced Complex',
        function: 'Suppresses NF-κB transcription and oxidative stress pathways to promote a healthy neural regenerative microenvironment.',
        clinicalReference: 'Aggarwal et al., Adv Exp Med Biol (2007)'
      }
    ],
    indicationFocus: 'Diabetic Peripheral Neuropathy (DPN), Chemotherapy-Induced Peripheral Neuropathy (CIPN), Entrapment/Radicular Neuropathies (Sciatica, Carpal Tunnel), Post-Stroke & TBI Recovery, and Central Chronic Pain Sensitization.',
    benefits: [
      'Comprehensive Dual Action: Nucleotide-driven structural nerve regeneration paired with targeted anti-neuroinflammatory modulators',
      'Diabetic Peripheral Neuropathy (DPN): Relieves burning, tingling, and numbness while promoting axonal structural repair',
      'Chemotherapy-Induced Peripheral Neuropathy (CIPN): Protects peripheral nerve fiber integrity during or after neurotoxic treatments',
      'Entrapment & Radicular Neuropathies: Suppresses local nerve compression inflammation in sciatica, radiculopathy, and Carpal Tunnel Syndrome',
      'Post-Stroke & TBI Neuroprotection: Supports brain parenchyma recovery and limits secondary microglial-mediated neuroinflammation',
      'Central Sensitization & Pain Modulation: Modulates pain signal pathways at the spinal cord and cortical level',
      'Rate-limiting pyrimidine substrates (CMP & UMP) accelerate Schwann cell remyelination via the Kennedy pathway',
      'Micronized PEA binds PPAR-α to calm mast cell degranulation and persistent neuropathic irritation',
      'Luteolin and Curcumin bioflavonoids provide potent lipophilic antioxidant defense against axonal oxidative stress'
    ],
    benefitSections: [
      {
        category: 'Peripheral Neuropathies & Axonal Restoration',
        items: [
          {
            title: 'Diabetic Peripheral Neuropathy (DPN)',
            points: [
              'Relieves burning, tingling, hyperalgesia, and numbness in distal extremities.',
              'Promotes axonal structural repair, Schwann cell proliferation, and functional remyelination.'
            ]
          },
          {
            title: 'Chemotherapy-Induced Peripheral Neuropathy (CIPN)',
            points: [
              'Protects peripheral nerve fiber integrity during or after neurotoxic oncological treatments.',
              'Mitigates drug-induced microvascular oxidative axonopathy and sensory loss.'
            ]
          },
          {
            title: 'Entrapment & Radicular Neuropathies',
            points: [
              'Addresses sciatica, cervical/lumbar radiculopathy, and Carpal Tunnel Syndrome.',
              'Suppresses local perineural compression inflammation and reduces compressive nerve edema.'
            ]
          }
        ]
      },
      {
        category: 'Central Neuropathy & Neuroprotection',
        items: [
          {
            title: 'Post-Stroke Recovery & Traumatic Brain Injury (TBI)',
            points: [
              'Supports brain parenchyma recovery, synaptogenesis, and neuronal membrane remodeling.',
              'Limits secondary microglial-mediated neuroinflammation and excitotoxic injury spread.'
            ]
          },
          {
            title: 'Central Sensitization & Chronic Pain Syndromes',
            points: [
              'Modulates pain signal pathways at the spinal cord dorsal horn and cortical levels.',
              'Blunts neuroglial hyperactivation and chronic inflammatory nociceptive firing.'
            ]
          },
          {
            title: 'Neurodegenerative Conditions & Cellular Longevity',
            points: [
              'Offers ongoing antioxidant, neurotrophic, and anti-inflammatory cellular protection.',
              'Suppresses NF-κB and neurotoxic cytokine signaling cascades (TNF-α, IL-1β).'
            ]
          }
        ]
      },
      {
        category: 'Brand Positioning & Dual-Action Synergies',
        items: [
          {
            title: 'Comprehensive Dual Action (CMP + UMP & PEA + Luteolin + Curcumin)',
            points: [
              'Combines nucleotide-driven nerve regeneration (CMP + UMP via the Kennedy pathway) with targeted anti-neuroinflammatory agents (PEA + Luteolin + Curcumin).',
              'Simultaneously accelerates myelin sheath re-synthesis and halts neuro-inflammatory axonal degradation.'
            ]
          },
          {
            title: 'Synergistic Clinical Efficacy',
            points: [
              'Addresses both structural myelin/axonal restoration and underlying neuroglial hyperactivity.',
              'Improves nerve conduction velocity and functional patient mobility scores.'
            ]
          }
        ]
      }
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
        question: 'What conditions is Synovia-Plus™ indicated for?',
        answer: 'Synovia-Plus™ is indicated for peripheral neuropathies including Diabetic Peripheral Neuropathy (DPN), Chemotherapy-Induced Peripheral Neuropathy (CIPN), and Entrapment/Radicular neuropathies (sciatica, radiculopathy, Carpal Tunnel Syndrome). In central neurology, it supports Post-Stroke and TBI recovery, central sensitization, and chronic neuropathic pain modulation.'
      },
      {
        question: 'How does the comprehensive dual-action mechanism of Synovia-Plus™ work?',
        answer: 'Synovia-Plus™ provides a targeted two-pronged approach: (1) Nucleotide-driven structural nerve regeneration via CMP and UMP fueling myelin and axonal phospholipid rebuild via the Kennedy pathway; and (2) Targeted anti-neuroinflammatory action via PEA, Luteolin, and Curcumin soothing microglial hyperactivity, calming mast cell degranulation, and relieving neuropathic pain.'
      },
      {
        question: 'How does Synovia-Plus™ help in Diabetic Neuropathy (DPN) and CIPN?',
        answer: 'In DPN and CIPN, persistent microvascular stress and neuroinflammation lead to axonal degeneration. Synovia-Plus™ relieves burning, tingling, and numbness by downregulating neuro-inflammatory cascades while providing essential nucleotides to rebuild damaged myelin sheaths and preserve nerve fiber integrity.'
      },
      {
        question: 'What is the dosage form and pack size of Synovia-Plus™?',
        answer: 'Synovia-Plus™ is formulated as film-coated tablets in strips of 10 tablets (1 × 10 Alu-Alu Blister). The recommended dosage is 1 tablet once or twice daily after meals, or as directed by a healthcare provider.'
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
