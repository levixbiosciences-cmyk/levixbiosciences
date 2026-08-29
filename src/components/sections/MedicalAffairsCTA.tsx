import React from 'react';
import { ArrowRight, Mail, Phone, FileText, CheckCircle2, Shield } from 'lucide-react';
import { PageRoute } from '../../types';

interface MedicalAffairsCTAProps {
  onNavigate: (route: PageRoute) => void;
  onOpenSampleModal?: () => void;
}

export const MedicalAffairsCTA: React.FC<MedicalAffairsCTAProps> = ({ onNavigate, onOpenSampleModal }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#071521] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 subtle-grid-pattern opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#087F8C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1F33] via-[#0E2842] to-[#071521] border border-[#B9D8D6]/20 p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Text */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#B9D8D6] text-xs font-mono uppercase">
              <Shield className="w-3.5 h-3.5 text-[#087F8C]" />
              <span>Medical Affairs &amp; Institutional Partnerships</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
              Collaborate With Our Scientific &amp; Medical Affairs Teams.
            </h3>

            <p className="text-sm sm:text-base text-[#B9D8D6]/85 leading-relaxed">
              We welcome scientific inquiries from clinicians, academic hospital investigators, institutional distributors, and healthcare authorities seeking product dossiers or clinical study collaboration.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-[#B9D8D6]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C]" /> Physician Monograph Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C]" /> Clinical Trial Briefings
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#087F8C]" /> International Export Inquiries
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <button
              onClick={() => {
                if (onOpenSampleModal) {
                  onOpenSampleModal();
                } else {
                  onNavigate('contact');
                }
              }}
              className="px-7 py-4 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white font-semibold text-sm shadow-lg shadow-[#087F8C]/25 transition-all text-center flex items-center justify-center gap-2 group"
              id="cta-request-dossier-btn"
            >
              <FileText className="w-4 h-4" />
              <span>Request Scientific Dossier</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 hover:border-white/30 transition-all text-center flex items-center justify-center gap-2"
              id="cta-contact-medical-affairs-btn"
            >
              <Mail className="w-4 h-4 text-[#087F8C]" />
              <span>Contact Medical Desk</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
