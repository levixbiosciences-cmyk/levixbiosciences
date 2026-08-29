export type PageRoute = 
  | 'home' 
  | 'about' 
  | 'therapeutic-areas' 
  | 'products' 
  | 'product-detail' 
  | 'research' 
  | 'quality' 
  | 'careers' 
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer';

export interface TherapeuticArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  clinicalRationale: string;
  pathophysiologyFocus: string[];
  keyMolecules: string[];
  activePipelineCount: number;
  marketedProductsCount: number;
  image: string;
  colorAccent: string;
  featuredIndication: string;
}

export interface Ingredient {
  name: string;
  potency: string;
  standardization?: string;
  function: string;
  clinicalReference?: string;
}

export interface ClinicalTrialEvidence {
  title: string;
  studyType: string;
  sampleSize: string;
  duration: string;
  primaryEndpoint: string;
  outcome: string;
  citation: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  therapeuticAreaId: string;
  therapeuticAreaName: string;
  tagline: string;
  description: string;
  overview: string;
  dosageForm: string;
  packSize: string;
  deliveryTechnology: string;
  image: string;
  featured: boolean;
  price?: number;
  mrp?: number;
  scientificRationale: string;
  mechanismOfAction: string;
  targetPathways: string[];
  keyIngredients: Ingredient[];
  benefits: string[];
  usageInstructions: {
    recommendedDose: string;
    timing: string;
    specialInstructions: string;
    contraindications?: string[];
  };
  clinicalEvidence: ClinicalTrialEvidence[];
  faqs: { question: string; answer: string }[];
  regulatoryStatus: string;
  storageSpecs: string;
  batchTesting: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ResearchPrinciple {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  keyAspects: string[];
}

export interface SciencePlatform {
  id: string;
  title: string;
  code: string;
  category: string;
  shortDesc: string;
  deepDescription: string;
  biologicalTarget: string;
  formulationLead: string;
  clinicalPhase: string;
  publicationsCount: number;
}

export interface Patent {
  id: string;
  patentNumber: string;
  title: string;
  filingYear: string;
  category: string;
  status: 'Granted' | 'Under Review' | 'PCT Filed';
  abstract: string;
  therapeuticField: string;
}

export interface PipelineProgram {
  id: string;
  moleculeCode: string;
  proposedName: string;
  therapeuticArea: string;
  indication: string;
  currentPhase: 'Discovery' | 'Preclinical' | 'Phase I' | 'Phase II' | 'Phase III' | 'Filed / NDA';
  deliveryPlatform: string;
  expectedCompletion: string;
  patentStatus: string;
  leadInvestigatorSite: string;
  summary: string;
}

export interface QualityPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  metric: string;
  details: string[];
}

export interface AnalyticalStandard {
  testName: string;
  method: string;
  acceptanceCriteria: string;
  status: 'Passed' | 'Validated' | 'Continuous';
}

export interface CleanroomSpec {
  zone: string;
  cleanlinessClass: string;
  particleLimit: string;
  hepaEfficiency: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract';
  experience: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface ScientificPaper {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string;
  doi: string;
  abstract: string;
  category: string;
  pdfUrl?: string;
}
