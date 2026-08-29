import { TherapeuticArea } from '../types';

export const therapeuticAreas: TherapeuticArea[] = [
  {
    id: 'neurology',
    number: '01',
    title: 'Neurology & Brain Health',
    subtitle: 'Targeting Neuro-Metabolic Balance & Synaptic Resilience',
    iconName: 'Brain',
    description: 'Developing targeted neuroprotective and cognitive-supportive molecules designed to support neurogenesis, mitochondrial bioenergetics, and synaptic integrity in chronic neurological conditions.',
    clinicalRationale: 'Chronic neurodegeneration and cognitive impairment involve multifaceted pathophysiological drivers including neuroinflammation, impaired bioenergetic flux, and oxidative stress across the blood-brain barrier.',
    pathophysiologyFocus: [
      'Microglial hyperactivation & central neuroinflammation',
      'Cerebral microvascular endothelial integrity',
      'Mitochondrial dysfunction in cortical and hippocampal neurons',
      'Neurotransmitter synthesis & acetylcholine preservation'
    ],
    keyMolecules: ['Citicoline Sodium Liposomal', 'Bio-Active Resveratrol', 'Phosphatidylserine Matrix', 'Alpha-GPC Enhanced Complex'],
    activePipelineCount: 4,
    marketedProductsCount: 3,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#087F8C',
    featuredIndication: 'Neurovascular Recovery & Age-Related Cognitive Resilience'
  },
  {
    id: 'cardiology',
    number: '02',
    title: 'Cardiology & Vascular Health',
    subtitle: 'Endothelial Protection & Arterial Elasticity Modulation',
    iconName: 'Activity',
    description: 'Advancing evidence-led cardiovascular therapeutics engineered to optimize vascular endothelial nitric oxide bioavailability, reduce arterial stiffness, and stabilize lipid peroxides.',
    clinicalRationale: 'Endothelial dysfunction represents the initiating step in ischemic cascade. Our formulations target microvascular shear resistance, homocysteine metabolism, and mitochondrial energy delivery in cardiomyocytes.',
    pathophysiologyFocus: [
      'Endothelial Nitric Oxide Synthase (eNOS) uncoupling',
      'Vascular smooth muscle cell calcification pathways',
      'Elevated asymmetric dimethylarginine (ADMA) levels',
      'Lipid peroxidation & oxidized LDL subfraction management'
    ],
    keyMolecules: ['Ubiquinol Enhanced Microemulsion', 'Bioactive Menatetrenone (MK-7)', 'L-Citrulline Bio-Complex', 'Standardized Terminalia Extract'],
    activePipelineCount: 3,
    marketedProductsCount: 4,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#0E9AA6',
    featuredIndication: 'Endothelial Function & Microvascular Tone Optimization'
  },
  {
    id: 'womens-health',
    number: '03',
    title: "Women's Health & Endocrinology",
    subtitle: 'Precision Endocrine Modulation & Oocyte Bioenergetics',
    iconName: 'HeartHandshake',
    description: 'Pioneering scientific interventions addressing insulin-endocrine crosstalk, luteal phase support, metabolic reproductive health, and bone mineral matrix preservation across life stages.',
    clinicalRationale: 'Hormonal equilibrium in conditions like PCOS and perimenopausal transition requires dual metabolic and ovarian cellular support, specifically inositol stereoisomer ratios and folate-folinic methyl-donors.',
    pathophysiologyFocus: [
      'Ovarian theca cell insulin resistance & steroidogenesis',
      'Myo-Inositol to D-Chiro-Inositol physiologic plasma ratios (40:1)',
      'Homocysteine clearance during gestational vascular remodeling',
      'Osteoblast-osteoclast uncoupling in post-reproductive health'
    ],
    keyMolecules: ['Myo/D-Chiro Inositol 40:1 Phytosome', 'L-Methylfolate Glucosamine Salt', 'Coenzyme Q10 Sustained-Release', 'Bio-Active Vitamin K2+D3'],
    activePipelineCount: 3,
    marketedProductsCount: 3,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#087F8C',
    featuredIndication: 'Ovarian Metabolic Balance & Gestational Micronutrient Delivery'
  },
  {
    id: 'nephrology',
    number: '04',
    title: 'Nephrology & Metabolic Care',
    subtitle: 'Glomerular Filtration Support & Glycemic Homeostasis',
    iconName: 'ShieldAlert',
    description: 'Therapeutic solutions targeted at mitigating renal tubular oxidative stress, systemic advanced glycation end-products (AGEs), and maintaining tubulointerstitial integrity in chronic metabolic stress.',
    clinicalRationale: 'The kidney experiences profound hemodynamic and glycemic shear stress. Our formulations modulate podocyte slit diaphragm proteins and decrease systemic uremic toxin buildup.',
    pathophysiologyFocus: [
      'Glomerular hyperfiltration & podocyte effacement',
      'Advanced Glycation End-Product (AGE) accumulation',
      'Renal tubular mitochondrial swelling & ATP depletion',
      'Systemic acid-base buffer modulation in subclinical azotemia'
    ],
    keyMolecules: ['Alpha-Lipoic Acid R-Enantiomer', 'Benfotiamine Lipophilic Derivative', 'Targeted Probiotic Uremic Cleanser', 'Taurine-NAC Chelate'],
    activePipelineCount: 4,
    marketedProductsCount: 2,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#0E9AA6',
    featuredIndication: 'Renal Glomerular Microvascular Defense & Metabolic Buffer'
  },
  {
    id: 'pediatrics',
    number: '05',
    title: 'Pediatrics & Neurodevelopment',
    subtitle: 'Bioavailable Nutritionals for Early Neurological & Immune Maturation',
    iconName: 'Sparkles',
    description: 'Carefully engineered, taste-optimized, high-compliance formulations for pediatric neurodevelopment, gut mucosal barrier strengthening, and cellular immune priming.',
    clinicalRationale: 'Pediatric biological systems require pure, allergen-tested, microencapsulated micronutrients capable of crossing metabolic barriers without gastrointestinal distress or compliance barriers.',
    pathophysiologyFocus: [
      'Early synaptic myelination & phospholipid membrane incorporation',
      'Intestinal epithelial tight junction formation in early childhood',
      'Iron bioavailability without oxidative gastric irritation',
      'Adaptive immune cell maturation & mucosal sIgA production'
    ],
    keyMolecules: ['Microencapsulated Liposomal Ferric Pyrophosphate', 'Algal DHA Triglyceride (40%)', 'Zinc Bisglycinate Chelate', 'Human Milk Oligosaccharide (2\'-FL)'],
    activePipelineCount: 2,
    marketedProductsCount: 3,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#087F8C',
    featuredIndication: 'Pediatric Neuro-Synaptogenesis & Gentle Iron Absorption'
  }
];
