import React from 'react';
import { Hero } from '../components/hero/Hero';
import { StatStrip } from '../components/sections/StatStrip';
import { AboutEditorial } from '../components/sections/AboutEditorial';
import { TherapeuticAreasSection } from '../components/sections/TherapeuticAreasSection';
import { SciencePlatformsSection } from '../components/sections/SciencePlatformsSection';
import { InnovationIPSection } from '../components/sections/InnovationIPSection';
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection';
import { QualitySection } from '../components/sections/QualitySection';
import { PipelineSection } from '../components/sections/PipelineSection';
import { MedicalAffairsCTA } from '../components/sections/MedicalAffairsCTA';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute, params?: { productId?: string; areaId?: string }) => void;
  onOpenSampleModal: () => void;
  onOpenMechanismModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenSampleModal,
  onOpenMechanismModal,
}) => {
  return (
    <div className="w-full">
      <Hero 
        onNavigate={onNavigate} 
        onOpenMechanismModal={onOpenMechanismModal} 
      />
      <StatStrip />
      <AboutEditorial onNavigate={onNavigate} />
      <TherapeuticAreasSection onNavigate={onNavigate} />
      <SciencePlatformsSection onNavigate={onNavigate} />
      <InnovationIPSection onNavigate={onNavigate} />
      <FeaturedProductsSection onNavigate={onNavigate} />
      <QualitySection onNavigate={onNavigate} />
      <PipelineSection onNavigate={onNavigate} />
      <MedicalAffairsCTA 
        onNavigate={onNavigate} 
        onOpenSampleModal={onOpenSampleModal} 
      />
    </div>
  );
};
