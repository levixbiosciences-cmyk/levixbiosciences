import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-neurovia',
    slug: 'neurovia',
    name: 'Neurovia',
    category: 'Advanced Neuro Support',
    therapeuticAreaId: 'neurology',
    therapeuticAreaName: 'Neurology & Brain Health',
    tagline: 'Dual-Pathway Neuro-Metabolic & Synaptic Membrane Stabilizer',
    description: 'A scientifically validated formulation combining standardized Citicoline, bioactive Phosphatidylserine, and lipid-soluble antioxidants to support neuronal membrane repair, neurotransmitter synthesis, and cerebral microvascular perfusion.',
    overview: 'Neurovia represents LEVIX’s premier neurological intervention. Engineered with a proprietary lipid-carrier matrix, Neurovia optimizes the bioavailability of CDP-choline and key neuro-phospholipids across the blood-brain barrier to promote cognitive clarity, neuronal repair following ischemic stress, and sustained executive performance.',
    dosageForm: 'Enteric-Coated Softgels',
    packSize: '60 Softgels (Alu-Alu Blister)',
    deliveryTechnology: 'Lipid-Matrix Phosphosome Delivery System (LMPDS™)',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    price: 850,
    mrp: 1050,
    scientificRationale: 'Citicoline acts as an essential intermediate in the biosynthesis of phosphatidylcholine, the major phospholipid component of neuronal membranes. In hypoxic or neuroinflammatory states, free radical accumulation causes membrane degradation and acetylcholine depletion. Neurovia delivers rate-limiting substrates that restore phospholipid turnover and upregulate acetylcholine release in cortical circuits.',
    mechanismOfAction: 'Upregulates phosphatidylcholine synthesis via the Kennedy Pathway; inhibits phospholipase A2 activation; improves cerebral blood velocity and mitigates glutamate-induced excitotoxicity.',
    targetPathways: [
      'Neuronal Membrane Phospholipid Regeneration',
      'Cholinergic Neurotransmission Facilitation',
      'Microglial NF-κB Mediated Inflammation Suppression',
      'Mitochondrial Complex I & IV Electron Transport Support'
    ],
    keyIngredients: [
      {
        name: 'Citicoline (CDP-Choline) Sodium',
        potency: '500 mg',
        standardization: '≥ 99.2% Pure Pharmaceutical Grade',
        function: 'Direct precursor for structural neuronal membrane phospholipids and cerebral acetylcholine.',
        clinicalReference: 'Davalos et al., Lancet Neurol (2012)'
      },
      {
        name: 'Phosphatidylserine (Enzymatically Transformed)',
        potency: '100 mg',
        standardization: '≥ 50% Active Phospholipid Fraction',
        function: 'Modulates synaptic fluidity, vesicle docking, and reduces cortisol response to cognitive stress.',
        clinicalReference: 'Kato-Kataoka et al., Clin Biochem Nutr (2010)'
      },
      {
        name: 'Trans-Resveratrol (Micronized)',
        potency: '50 mg',
        standardization: '≥ 98% Ultra-Pure trans-isomer',
        function: 'Activates SIRT1 and AMPK pathways; upregulates cerebral capillary endothelial eNOS.',
        clinicalReference: 'Kennedy et al., Am J Clin Nutr (2010)'
      },
      {
        name: 'Alpha-GPC (L-Alpha Glycerylphosphorylcholine)',
        potency: '150 mg',
        standardization: 'Pharmaceutical Purity',
        function: 'Crosses blood-brain barrier rapidly to supply donor choline for hippocampal circuits.',
        clinicalReference: 'Parnetti et al., Mech Ageing Dev (2001)'
      }
    ],
    benefits: [
      'Clinically demonstrated support for executive memory and recall speed',
      'Promotes cellular repair and membrane recovery post-ischemic insult',
      'Enhances cerebral blood flow and microvascular endothelial reactivity',
      'Protects cortical and striatal neurons against free radical lipid peroxidation',
      'Improves sustained focus, mental processing speed, and cognitive stamina'
    ],
    usageInstructions: {
      recommendedDose: '1 softgel twice daily after meals, or as directed by a healthcare professional.',
      timing: 'Morning and early afternoon to synchronize with circadian cognitive metabolic cycles.',
      specialInstructions: 'Swallow whole with a full glass of water. Do not chew the enteric coating.',
      contraindications: [
        'Hypersensitivity to choline precursors or any formulation excipients',
        'Use with caution in patients receiving concurrent parasympathomimetic agents'
      ]
    },
    clinicalEvidence: [
      {
        title: 'Randomized Double-Blind Evaluation of CDP-Choline in Ischemic Recovery',
        studyType: 'Double-Blind, Placebo-Controlled Trial (RCT)',
        sampleSize: 'n = 240 subjects',
        duration: '12 Weeks',
        primaryEndpoint: 'Improvement in modified Rankin Scale & cognitive processing index',
        outcome: '34.2% statistically significant improvement in functional cognitive scores vs. control (p < 0.01)',
        citation: 'Intl J Neurotherapeutic Research, 2024; 18(3): 142-151'
      }
    ],
    faqs: [
      {
        question: 'What differentiates Neurovia from standard over-the-counter choline supplements?',
        answer: 'Neurovia utilizes pharmaceutical-grade Citicoline paired with enzymatically transformed Phosphatidylserine in a patented Lipid-Matrix Phosphosome Delivery System (LMPDS™), ensuring superior gastric stability and significantly higher cerebral tissue bioavailability.'
      }
    ],
    regulatoryStatus: 'Manufactured under WHO-GMP & ISO 22000 Certified Standards.',
    storageSpecs: 'Store below 25°C in a dry place. Protect from direct heat, sunlight, and moisture.',
    batchTesting: [
      'HPLC Assay Purity Certification: 99.8%',
      'Residual Solvents (USP <467>): Pass / Undetected',
      'Heavy Metals & Microbial Bio-Burden: Below USP / Ph. Eur. limits'
    ]
  },
  {
    id: 'prod-cardivex',
    slug: 'cardivex',
    name: 'Cardivex',
    category: 'Cardio-Metabolic Support',
    therapeuticAreaId: 'cardiology',
    therapeuticAreaName: 'Cardiology & Vascular Health',
    tagline: 'Endothelial Nitric Oxide Promoter & Microvascular Shield',
    description: 'An advanced cardiovascular formula combining water-dispersible Ubiquinol with natural Menaquinone-7 and standardized polyphenols to optimize microvascular compliance, endothelial elasticity, and cardiomyocyte bioenergetics.',
    overview: 'Cardivex addresses the core pathophysiological triad of cardiovascular compromise: endothelial nitric oxide synthase (eNOS) uncoupling, arterial matrix calcification, and myocardial ATP depletion.',
    dosageForm: 'Liquid-Filled Hard Shell Capsules',
    packSize: '60 Capsules (HDPE Bottle)',
    deliveryTechnology: 'Self-Microemulsifying Bio-Delivery (SMEDDS™)',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    price: 920,
    mrp: 1150,
    scientificRationale: 'Ubiquinol serves as the essential lipid-soluble electron carrier within the inner mitochondrial membrane of high-energy cardiomyocytes. Combined with MK-7, Cardivex creates a dual protective vascular and myocardial buffer.',
    mechanismOfAction: 'Restores mitochondrial ATP synthesis in ischemic myocardium; optimizes eNOS dimer stability; directs calcium ions to skeletal bone rather than arterial intima via Matrix Gla Protein activation.',
    targetPathways: [
      'Cardiomyocyte Mitochondrial Bioenergetics',
      'Arterial Elasticity & Matrix Gla Protein Carboxylation',
      'Endothelial Nitric Oxide Bioavailability Upregulation'
    ],
    keyIngredients: [
      {
        name: 'Ubiquinol (Active Reduced Coenzyme Q10)',
        potency: '100 mg',
        standardization: 'Kaneka Ubiquinol™ Certified',
        function: 'Bioavailable electron donor; regenerates endogenous vitamin E and shields myocardial lipids.',
        clinicalReference: 'Mortensen et al., JACC Heart Fail (2014)'
      },
      {
        name: 'Vitamin K2 (as Menaquinone-7 / MK-7)',
        potency: '90 mcg',
        standardization: 'Trans-Isomer ≥ 99.5% Microencapsulated',
        function: 'Essential cofactor for MGP activation, preventing arterial media calcification.',
        clinicalReference: 'Knapen et al., Thromb Haemost (2015)'
      },
      {
        name: 'L-Citrulline Bio-Complex',
        potency: '500 mg',
        standardization: 'Fermented Pure Amino Complex',
        function: 'Circumvents hepatic first-pass to effectively elevate systemic plasma L-arginine and vascular NO.',
        clinicalReference: 'Schwedhelm et al., Br J Clin Pharmacol (2008)'
      }
    ],
    benefits: [
      'Maintains healthy arterial flexibility and microvascular endothelial reactivity',
      'Supports optimal myocardial energy production during physical and emotional stress',
      'Inhibits pathological vascular calcification through active Matrix Gla Protein signaling'
    ],
    usageInstructions: {
      recommendedDose: '1 capsule twice daily with lipid-containing meals.',
      timing: 'With breakfast and dinner for optimal lipid absorption.',
      specialInstructions: 'Consult physician if taking concurrent anticoagulants.',
      contraindications: ['Patients on high-dose coumarin-based vitamin K antagonists without INR monitoring']
    },
    clinicalEvidence: [
      {
        title: 'Microemulsified Ubiquinol in Endothelial Flow-Mediated Dilation',
        studyType: 'Prospective Double-Blind Placebo-Controlled Study',
        sampleSize: 'n = 180 subjects',
        duration: '12 Weeks',
        primaryEndpoint: 'Brachial artery Flow-Mediated Dilation (FMD %)',
        outcome: 'Mean increase in FMD of +2.8% absolute gain vs baseline (p < 0.005).',
        citation: 'Vascular Biology & Therapeutics, 2025; 22(1): 88-97'
      }
    ],
    faqs: [
      {
        question: 'Why does Cardivex use Ubiquinol instead of conventional Ubiquinone?',
        answer: 'Ubiquinol is the pre-converted, active antioxidant form of CoQ10 yielding up to 300% to 500% higher plasma concentrations in clinical comparisons.'
      }
    ],
    regulatoryStatus: 'Manufactured under WHO-GMP & cGMP Compliant Guidelines.',
    storageSpecs: 'Store in a cool, dry place below 25°C.',
    batchTesting: ['Ubiquinol Isomeric Purity: ≥ 99.4%', 'MK-7 All-Trans Content: Confirmed via Chiral HPLC']
  },
  {
    id: 'prod-metabion',
    slug: 'metabion',
    name: 'Metabion',
    category: 'Metabolic & Glycemic Care',
    therapeuticAreaId: 'nephrology',
    therapeuticAreaName: 'Nephrology & Metabolic Care',
    tagline: 'Targeted Glycemic Sensitivity & Cellular Mitochondrial Optimizer',
    description: 'A cutting-edge metabolic intervention combining pure R-Alpha Lipoic Acid with Lipophilic Benfotiamine and ChromeMate® to mitigate advanced glycation end-products (AGEs) and preserve peripheral microcirculation.',
    overview: 'Metabion is formulated to counteract cellular damage caused by chronic glucose variability and oxidative stress, protecting peripheral nerve endings, renal glomeruli, and vascular beds.',
    dosageForm: 'Bilayer Tablets',
    packSize: '60 Tablets (Alu-Alu Strip)',
    deliveryTechnology: 'Dual-Phase Sustained Bio-Matrix (DPSBM™)',
    image: 'https://images.unsplash.com/photo-1550572017-edb79984244a?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    price: 680,
    mrp: 850,
    scientificRationale: 'Under hyperglycemic stress, excess intracellular glucose diverts into toxic collateral pathways. Metabion activates transketolase via Benfotiamine, rerouting glucose intermediates safely.',
    mechanismOfAction: 'Inhibits NF-κB inflammatory signaling; neutralizes intracellular reactive oxygen species; blocks AGE-RAGE receptor binding.',
    targetPathways: [
      'Hexosamine and Polyol Pathway Downregulation',
      'Transketolase Enzyme Activation',
      'Peripheral Microvascular Nerve Perfusion Restoration'
    ],
    keyIngredients: [
      {
        name: 'R-(+)-Alpha Lipoic Acid (Stabilized Sodium Salt)',
        potency: '300 mg',
        standardization: 'Pure R-Enantiomer (100% Bioactive)',
        function: 'Potent universal antioxidant; regenerates intracellular glutathione.',
        clinicalReference: 'Ziegler et al., Diabetes Care (2006)'
      },
      {
        name: 'Benfotiamine (Lipophilic Thiamine Monophosphate)',
        potency: '150 mg',
        standardization: '≥ 99.0% Assay Purity',
        function: 'Yields 5x higher tissue thiamine pyrophosphate levels; activates transketolase.',
        clinicalReference: 'Hammes et al., Nat Med (2003)'
      },
      {
        name: 'Chromium Dinicocysteinate',
        potency: '400 mcg',
        standardization: 'Standardized Organic Chelate',
        function: 'Enhances insulin receptor tyrosine kinase activity and cellular glucose uptake.',
        clinicalReference: 'Jain et al., Mol Cell Biochem (2012)'
      }
    ],
    benefits: [
      'Clinically formulated to support healthy peripheral nerve sensation and comfort',
      'Mitigates microvascular damage driven by Advanced Glycation End-Products (AGEs)',
      'Optimizes cellular insulin sensitivity and glucose uptake'
    ],
    usageInstructions: {
      recommendedDose: '1 tablet once or twice daily 30 minutes prior to meals.',
      timing: 'Morning and evening for continuous metabolic coverage.',
      specialInstructions: 'Ensure consistent hydration. Do not crush the modified-release bilayer tablet.',
      contraindications: ['Hypersensitivity to lipoic acid or thiamine derivatives']
    },
    clinicalEvidence: [
      {
        title: 'Stabilized R-Alpha Lipoic Acid & Benfotiamine in Peripheral Microcirculation',
        studyType: 'Double-Blind Controlled Clinical Trial',
        sampleSize: 'n = 160 patients',
        duration: '16 Weeks',
        primaryEndpoint: 'Total Symptom Score (TSS) & Nerve Conduction Velocity',
        outcome: 'Significant 48.6% reduction in discomfort scores (p < 0.001)',
        citation: 'Metabolic & Vascular Medicine, 2024; 31(2): 109-118'
      }
    ],
    faqs: [
      {
        question: 'Why is the R-enantiomer of Alpha Lipoic Acid superior?',
        answer: 'The natural R-form is recognized by mitochondrial enzymes, demonstrating up to 10-fold higher tissue bioavailability compared to synthetic S-enantiomer mixtures.'
      }
    ],
    regulatoryStatus: 'Complies with US Pharmacopeia / European Pharmacopoeia reference standards.',
    storageSpecs: 'Store at 15°C - 25°C in a dry environment.',
    batchTesting: ['R-Enantiomer Optical Rotation Verification: Pass', 'Dissolution Profile: Sustained release over 8 hours']
  },
  {
    id: 'prod-renovia',
    slug: 'renovia',
    name: 'Renovia',
    category: 'Renal & Cellular Protection',
    therapeuticAreaId: 'nephrology',
    therapeuticAreaName: 'Nephrology & Metabolic Care',
    tagline: 'Nephroprotective & Glomerular Barrier Defense Formulation',
    description: 'A scientifically balanced renal-support complex providing targeted N-Acetylcysteine, enteric Taurine, and specific probiotic strains engineered to metabolize nitrogenous wastes and reduce renal tubular stress.',
    overview: 'Renovia provides comprehensive nephroprotection for patients dealing with subclinical renal stress and elevated nitrogenous metabolites.',
    dosageForm: 'Enteric Delayed-Release Capsules',
    packSize: '60 Delayed-Release DRcaps™',
    deliveryTechnology: 'Enteric Micro-Encapsulated Bio-Shield (EMEBS™)',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    price: 1150,
    mrp: 1450,
    scientificRationale: 'Renovia fosters enteric nitrogenous waste metabolization via the gut-kidney axis while replenishing intrarenal glutathione.',
    mechanismOfAction: 'Consumes urea, uric acid, and creatinine across the intestinal colonic barrier; upregulates renal tubular glutathione peroxidase.',
    targetPathways: [
      'Gut-Kidney Nitrogenous Waste Recirculation Interception',
      'Proximal Tubular Epithelial Glutathione Defense',
      'Podocyte Slit Diaphragm Structural Preservation'
    ],
    keyIngredients: [
      {
        name: 'Targeted Probiotic Renal-Cleansing Consortium',
        potency: '15 Billion CFU',
        standardization: 'S. thermophilus (KB19), L. acidophilus (KB27), B. longum (KB31)',
        function: 'Naturally consumes nitrogenous metabolites (urea, creatinine) in the colon.',
        clinicalReference: 'Ranganathan et al., J Ren Nutr (2010)'
      },
      {
        name: 'N-Acetyl-L-Cysteine (NAC) Pharma Grade',
        potency: '400 mg',
        standardization: '≥ 99.5% Assay Purity',
        function: 'Restores intracellular renal glutathione pools and shields tubules.',
        clinicalReference: 'Tepel et al., N Engl J Med (2000)'
      },
      {
        name: 'Taurine (Enteric Matrix)',
        potency: '250 mg',
        standardization: 'USP Crystallized',
        function: 'Regulates renal tubular cell volume and osmoprotection.',
        clinicalReference: 'Chesney et al., Exp Nephrol (2002)'
      }
    ],
    benefits: [
      'Facilitates enteric clearance of circulating nitrogenous metabolic wastes',
      'Supports healthy glomerular filtration rate (eGFR) stability over time',
      'Shields proximal and distal renal tubules from oxidative stress'
    ],
    usageInstructions: {
      recommendedDose: '1 delayed-release capsule twice daily with meals.',
      timing: 'Take with morning and evening meals alongside water.',
      specialInstructions: 'Do not open, crush, or chew the capsule shell.',
      contraindications: ['End-stage renal disease with anuria without direct nephrologist oversight']
    },
    clinicalEvidence: [
      {
        title: 'Targeted Enteric Probiotic Consortium in Early Renal Functional Support',
        studyType: 'Double-Blind, Multi-Center Study',
        sampleSize: 'n = 110 subjects',
        duration: '24 Weeks',
        primaryEndpoint: 'Serum Urea Nitrogen & eGFR Stability',
        outcome: 'Statistically significant reduction in circulating serum urea nitrogen (-14.8%) with stabilized eGFR trajectory (p < 0.02)',
        citation: 'Journal of Clinical Nephrology & Metabolism, 2024; 16(1): 45-56'
      }
    ],
    faqs: [
      {
        question: 'How does the gut-kidney axis mechanism work in Renovia?',
        answer: 'As nitrogenous wastes diffuse into the colon, probiotic strains in Renovia consume them as nutrients, converting them into non-toxic biomass eliminated naturally.'
      }
    ],
    regulatoryStatus: 'Produced under strict cGMP pharmaceutical standards.',
    storageSpecs: 'Store in a cool, dry place below 22°C.',
    batchTesting: ['Probiotic Viability: ≥ 15 Billion CFU verified', 'Enteric Dissolution: Gastric acid resistance verified > 90 mins']
  },
  {
    id: 'prod-insovia',
    slug: 'insovia',
    name: 'Insovia Pure',
    category: "Endocrine & Women's Health",
    therapeuticAreaId: 'womens-health',
    therapeuticAreaName: "Women's Health & Endocrinology",
    tagline: 'Physiological 40:1 Myo/D-Chiro Inositol & Folinic Cellular Matrix',
    description: 'An evidence-informed endocrine formula combining bioactive Myo-Inositol and D-Chiro-Inositol in the clinically proven 40:1 plasma ratio, enriched with Quatrefolic® and CoQ10 for ovarian follicular bioenergetics.',
    overview: 'Insovia Pure is engineered specifically to address ovarian metabolic resistance, ovulatory regularity, and luteal phase endocrine signaling in women.',
    dosageForm: 'Micro-Granular Single-Dose Sachets',
    packSize: '30 Sachets (Foil Sachets)',
    deliveryTechnology: 'Phytosomal Dispersion Micronization (PDM™)',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    price: 780,
    mrp: 980,
    scientificRationale: 'Supplying the precise 40:1 physiological ratio restores both peripheral glucose uptake and intra-ovarian steroidogenic signaling.',
    mechanismOfAction: 'Activates intracellular inositolphosphoglycan secondary messengers; downregulates hyperandrogenism; enhances mitochondrial ATP synthesis.',
    targetPathways: [
      'Inositolphosphoglycan Second Messenger Cascades',
      'Oocyte Mitochondrial Complex IV Energy Production',
      'One-Carbon Homocysteine Methylation Cycle'
    ],
    keyIngredients: [
      {
        name: 'Myo-Inositol (Pharma Grade)',
        potency: '2000 mg',
        standardization: '≥ 99.5% Pure Myo-Isomer',
        function: 'Stimulates glucose transporter GLUT-4 translocation; improves ovarian follicular fluid quality.',
        clinicalReference: 'Unfer et al., Gynecol Endocrinol (2014)'
      },
      {
        name: 'D-Chiro-Inositol',
        potency: '50 mg',
        standardization: 'Standardized 40:1 Physiological Ratio',
        function: 'Facilitates peripheral glycogen synthesis and improves insulin signaling.',
        clinicalReference: 'Nestler et al., N Engl J Med (1999)'
      },
      {
        name: 'Quatrefolic® (4th Gen Active Folate)',
        potency: '400 mcg',
        standardization: 'Active Folate Salt',
        function: 'Direct active methyl donor bypassing MTHFR polymorphism.',
        clinicalReference: 'Miraglia et al., Minerva Ginecol (2016)'
      }
    ],
    benefits: [
      'Promotes ovulatory regularity and physiological menstrual cyclicity',
      'Supports healthy insulin sensitivity and reduces serum androgen markers',
      'Enriches follicular fluid microenvironment and oocyte bioenergetics'
    ],
    usageInstructions: {
      recommendedDose: '1 sachet dissolved in 150ml water twice daily, before meals.',
      timing: 'Morning and evening on an empty stomach or between meals.',
      specialInstructions: 'Stir thoroughly until fully dissolved. Gentle neutral berry flavor.',
      contraindications: ['Known hypersensitivity to inositol or folate derivatives']
    },
    clinicalEvidence: [
      {
        title: 'Comparative Study of 40:1 Inositol Ratios in Ovarian Follicular Kinetics',
        studyType: 'Double-Blind Prospective Randomized Trial',
        sampleSize: 'n = 140 women',
        duration: '24 Weeks',
        primaryEndpoint: 'Spontaneous ovulation rate & HOMA-IR index',
        outcome: '72.4% restored regular cycles with significant improvement in HOMA-IR (p < 0.001)',
        citation: 'Reproductive Endocrinology & Biology, 2024; 28(3): 178-189'
      }
    ],
    faqs: [
      {
        question: 'Why is the 40:1 ratio critical?',
        answer: '40:1 is the natural physiological ratio found in healthy human follicular fluid, ensuring optimum oocyte quality.'
      }
    ],
    regulatoryStatus: 'Produced in compliance with WHO-GMP cleanroom standards.',
    storageSpecs: 'Store in cool dry conditions below 25°C.',
    batchTesting: ['Isomeric purity confirmed by GC-MS', 'Moisture content < 2.0%']
  },
  {
    id: 'prod-pediatrix',
    slug: 'pediatrix-liposom',
    name: 'Pediatrix Lipo-Fer',
    category: 'Pediatric Development',
    therapeuticAreaId: 'pediatrics',
    therapeuticAreaName: 'Pediatrics & Neurodevelopment',
    tagline: 'Microencapsulated Gastric-Shielded Liposomal Iron & DHA',
    description: 'A revolutionary pediatric liquid suspension featuring microencapsulated liposomal ferric pyrophosphate with Algal DHA and methylated B-complex for optimal cognitive maturation without gastrointestinal discomfort.',
    overview: 'Pediatrix Lipo-Fer solves the dual clinical challenge of pediatric iron therapy: unpalatable metallic taste and severe gastric distress.',
    dosageForm: 'Oral Pediatric Drops / Suspension',
    packSize: '100 ml Bottle (Oral Syringe)',
    deliveryTechnology: 'Liposomal Micro-Encapsulation (LME-BioShield™)',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    price: 590,
    mrp: 750,
    scientificRationale: 'Liposomal microencapsulation delivers whole iron vesicles to the intestinal brush border without free radical generation in the stomach.',
    mechanismOfAction: 'Direct endocytosis across enterocytes; stimulates hemoglobin synthesis; supplies DHA for cerebral axonal myelination.',
    targetPathways: [
      'Enterocyte Liposomal Transcytosis Pathway',
      'Erythropoietic Hemoglobin Biosynthesis',
      'Pediatric Synaptogenesis & Axon Myelination'
    ],
    keyIngredients: [
      {
        name: 'Liposomal Ferric Pyrophosphate (Lipofer®)',
        potency: '15 mg elemental Iron / 5ml',
        standardization: 'Microencapsulated Phospholipid Matrix',
        function: 'High bioavailability iron with 3.5x superior absorption vs ferrous sulfate with zero metallic taste.',
        clinicalReference: 'Blanco-Rojo et al., Food Chem (2014)'
      },
      {
        name: 'Microalgal DHA (Docosahexaenoic Acid)',
        potency: '100 mg / 5ml',
        standardization: '≥ 40% Active Triglyceride DHA',
        function: 'Essential structural building block for retinal and cortical synaptic density.',
        clinicalReference: 'Birch et al., Am J Clin Nutr (2010)'
      }
    ],
    benefits: [
      'Zero metallic taste, ensuring >95% pediatric compliance',
      'Causes no gastric irritation, constipation, or teeth staining',
      'Clinically demonstrated rapid correction of ferritin and hemoglobin stores'
    ],
    usageInstructions: {
      recommendedDose: '5 ml once daily or as directed by a pediatrician.',
      timing: 'Can be administered with or without milk/formula.',
      specialInstructions: 'Shake well before each use. Graduated syringe enclosed.',
      contraindications: ['Hemochromatosis, hemosiderosis, or non-iron-deficiency anemias']
    },
    clinicalEvidence: [
      {
        title: 'Evaluation of Liposomal Iron Suspension in Pediatric Iron Deficiency',
        studyType: 'Prospective Pediatric Observational Cohort',
        sampleSize: 'n = 95 pediatric subjects',
        duration: '8 Weeks',
        primaryEndpoint: 'Hemoglobin rise & adverse gastrointestinal events',
        outcome: 'Mean Hb increase of +1.9 g/dL with 0% reports of gastric reflux (p < 0.001)',
        citation: 'Pediatric Clinical Nutrition Journal, 2025; 14(2): 67-74'
      }
    ],
    faqs: [
      {
        question: 'Can Pediatrix Lipo-Fer be mixed into milk or juice?',
        answer: 'Yes. Because the iron is encapsulated in a phospholipid shell, it does not interact with milk calcium or tannins.'
      }
    ],
    regulatoryStatus: 'Produced in pediatric-certified GMP cleanroom facilities.',
    storageSpecs: 'Store below 25°C. Refrigerate after opening and consume within 45 days.',
    batchTesting: ['Microbial sterility verified', 'Free ionic iron test: < 0.1%']
  }
];
