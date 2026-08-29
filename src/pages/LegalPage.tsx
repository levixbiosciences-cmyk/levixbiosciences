import React, { useState } from 'react';
import { Shield, FileText, Lock, AlertTriangle, ArrowLeft } from 'lucide-react';
import { PageRoute } from '../types';

interface LegalPageProps {
  initialTab?: 'disclaimer' | 'privacy' | 'terms';
  onNavigate: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'disclaimer', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'disclaimer' | 'privacy' | 'terms'>(initialTab);

  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-20 relative overflow-hidden -mt-28 mb-12 subtle-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase text-[#087F8C]">REGULATORY &amp; COMPLIANCE POLICIES</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Manrope']">
              Legal &amp; Medical Disclaimers
            </h1>
            <p className="text-sm text-[#B9D8D6]/85">
              Official institutional disclosures, medical advisory notices, and privacy governance for NovaThera Life Sciences.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex gap-2 p-1.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
          {[
            { id: 'disclaimer', label: 'Medical & Healthcare Disclaimer' },
            { id: 'privacy', label: 'Privacy Policy & Data Security' },
            { id: 'terms', label: 'Terms of Use & IP Notice' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center ${activeTab === tab.id
                  ? 'bg-[#0B1F33] text-white shadow-xs'
                  : 'text-[#66737F] hover:text-[#0B1F33] hover:bg-[#F8FAFC]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-6 text-sm text-[#66737F] leading-relaxed">

          {activeTab === 'disclaimer' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-base font-['Manrope'] pb-2 border-b border-[#E2E8F0]">
                <AlertTriangle className="w-5 h-5" />
                <span>Important Medical Information Notice</span>
              </div>
              <p>
                <strong>1. Institutional Demonstration Notice:</strong> NovaThera Life Sciences is a fictional pharmaceutical and healthcare corporate brand created as a demonstration of high-tier pharmaceutical UI/UX design, corporate information architecture, and evidence-informed formulation concepts.
              </p>
              <p>
                <strong>2. Not Medical Advice:</strong> The content provided on this website—including product descriptions, mechanisms of action, scientific papers, dosage tables, and clinical trial overviews—is for educational, informational, and professional demonstration purposes only. It is not intended to substitute for direct clinical medical advice, professional diagnosis, or treatment.
              </p>
              <p>
                <strong>3. Professional Consultation:</strong> Always seek the direct counsel of a qualified physician or registered healthcare provider with any questions you may have regarding a medical condition, prescription schedule, or therapeutic regimen. Never disregard professional medical advice or delay seeking it because of information viewed on this site.
              </p>
              <p>
                <strong>4. Regulatory Approvals:</strong> Specific claims, formulation strengths, and clinical indications are subject to local country health authority registrations (CDSCO, US FDA, EMA, TGA).
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#087F8C] font-bold text-base font-['Manrope'] pb-2 border-b border-[#E2E8F0]">
                <Lock className="w-5 h-5" />
                <span>Corporate Privacy Policy &amp; Data Governance</span>
              </div>
              <p>
                NovaThera Life Sciences is committed to protecting the confidentiality and privacy of medical practitioners, institutional buyers, and site visitors.
              </p>
              <h4 className="font-bold text-[#0B1F33] font-['Manrope']">1. Information Collection</h4>
              <p>
                We only collect personally identifiable information (such as name, professional email, hospital affiliation, and phone number) when voluntarily provided through our verified sample request and institutional inquiry forms.
              </p>
              <h4 className="font-bold text-[#0B1F33] font-['Manrope']">2. Data Utilization &amp; Compliance</h4>
              <p>
                Your information is exclusively used to fulfill requested scientific dossiers, verify clinical credentials, and transmit required regulatory monograph files. We never sell, lease, or monetize your professional data.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#0B1F33] font-bold text-base font-['Manrope'] pb-2 border-b border-[#E2E8F0]">
                <FileText className="w-5 h-5" />
                <span>Terms of Use &amp; Intellectual Property</span>
              </div>
              <p>
                By accessing this corporate portal, you agree to comply with international intellectual property laws. All trademarks (including Neurovia™, Cardivex™, Metabion™, Renovia™, Insovia Pure™, LMPDS™, and SMEDDS™) and technical content are protected under applicable patent, copyright, and trademark statutes.
              </p>
              <p>
                Unauthorized duplication, extraction, or commercial re-distribution of product monographs or technical clinical dossiers without prior written authorization from NovaThera Life Sciences is strictly prohibited.
              </p>
            </div>
          )}

          <div className="pt-6 border-t border-[#F1F5F9] flex justify-between items-center">
            <span className="text-xs font-mono text-[#66737F]">Last Updated: August 2026</span>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087F8C] hover:text-[#0B1F33]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
