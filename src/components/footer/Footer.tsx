import React from 'react';
import { Dna, ArrowRight, Mail, Phone, MapPin, Shield, CheckCircle, ExternalLink, Globe } from 'lucide-react';
import { PageRoute } from '../../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#071521] text-white py-12 px-4 sm:px-6 lg:px-12 border-t border-[#E5E7EB]/10 relative overflow-hidden shrink-0">
      {/* Background radial accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#087F8C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#0E9AA6]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column (Col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#0E9AA6] rounded flex items-center justify-center shadow-sm">
                <Dna className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Manrope']">
                NovaThera<span className="text-[#087F8C]">.</span>
              </span>
            </div>

            <p className="text-[#B9D8D6] text-xs max-w-sm leading-relaxed">
              © 2026 NovaThera Life Sciences. Science-driven solutions for better health through clinical collaboration, translational biotechnology, and rigorous formulation standards.
            </p>

            <div className="space-y-1.5 text-xs text-[#66737F] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#087F8C] shrink-0" />
                <span>NovaThera Tower, BKC, Mumbai 400051, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#087F8C] shrink-0" />
                <span className="font-mono">medical.affairs@novathera.example</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#087F8C] shrink-0" />
                <span className="font-mono">+91 (022) 8800-4500</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-[#B9D8D6] font-mono">
                <Shield className="w-3 h-3 text-[#087F8C]" /> WHO-GMP Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-[#B9D8D6] font-mono">
                <Globe className="w-3 h-3 text-[#0E9AA6]" /> 12 Global Territories
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#0E9AA6] text-[10px] font-bold uppercase tracking-widest mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="text-xs flex flex-col gap-2.5 text-[#B9D8D6]/80">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('research')} className="hover:text-white transition-colors">
                  Research & Pipeline
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors">
                  Careers & Culture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Quality */}
          <div>
            <h4 className="text-[#0E9AA6] text-[10px] font-bold uppercase tracking-widest mb-4 font-mono">
              Compliance
            </h4>
            <ul className="text-xs flex flex-col gap-2.5 text-[#B9D8D6]/80">
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-white transition-colors">
                  Quality Control
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-white transition-colors">
                  Pharmacovigilance Desk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-white transition-colors">
                  Regulatory Affairs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('disclaimer')} className="hover:text-white transition-colors">
                  Medical Disclaimers
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Featured */}
          <div>
            <h4 className="text-[#0E9AA6] text-[10px] font-bold uppercase tracking-widest mb-4 font-mono">
              Connect
            </h4>
            <div className="flex gap-2.5 mb-6">
              <a
                href="#linkedin"
                onClick={e => e.preventDefault()}
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0E9AA6] text-white cursor-pointer transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#twitter"
                onClick={e => e.preventDefault()}
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0E9AA6] text-white cursor-pointer transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#mail"
                onClick={e => { e.preventDefault(); onNavigate('contact'); }}
                aria-label="Email Medical Desk"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0E9AA6] text-white cursor-pointer transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-2 px-3 rounded-md bg-[#087F8C] hover:bg-[#0E9AA6] text-xs font-semibold text-white transition-colors text-center shadow-sm"
            >
              Medical Enquiry Desk
            </button>
          </div>
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#66737F] leading-relaxed mb-6">
          <p className="font-semibold text-[#B9D8D6] mb-1">
            Institutional Notice &amp; Medical Disclaimer:
          </p>
          <p>
            NovaThera Life Sciences is a fictional specialty pharmaceutical company model engineered for demonstration purposes. Product monographs, clinical trials, dosages, molecular targets, and patent citations displayed on this website represent conceptual scientific illustrative models. Healthcare professionals should consult national regulatory drug registers and medical guidelines before prescribing therapies.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#66737F]">
          <div>
            © 2026 NovaThera Life Sciences Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
              Terms of Use
            </button>
            <button onClick={() => onNavigate('disclaimer')} className="hover:text-white transition-colors">
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
