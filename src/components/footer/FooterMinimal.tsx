import React from 'react';
import { Phone, MapPin, Mail, ChevronRight, ShieldCheck } from 'lucide-react';
import { LevixLogo } from '../common/LevixLogo';
import { companyInfo } from '../../data/company';

interface FooterMinimalProps {
  onSectionClick?: (sectionId: string) => void;
}

export const FooterMinimal: React.FC<FooterMinimalProps> = ({ onSectionClick }) => {
  const handleNav = (id: string) => {
    if (onSectionClick) {
      onSectionClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#060B14] text-white border-t border-white/10 pt-12 pb-24 sm:pb-12 text-left relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0066CC]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-2.5 rounded-2xl inline-block shadow-md">
              <LevixLogo variant="horizontal" size="md" />
            </div>
            
            <p className="text-xs sm:text-sm text-[#38BDF8] italic font-semibold">
              &quot;Science you trust, health you feel.&quot;
            </p>

            <p className="text-xs text-[#CBD5E1] leading-relaxed max-w-sm">
              LEVIX bio science pvt ltd develops differentiated, evidence-informed pharmaceutical and therapeutic formulations engineered with high cellular bioavailability.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#38BDF8]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About LEVIX', id: 'about' },
                { label: 'Formulations', id: 'formulations' },
                { label: 'Quality Standards', id: 'quality' },
                { label: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none"
                  >
                    <ChevronRight className="w-3 h-3 text-[#0066CC]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#38BDF8]">
              Chennai Headquarters
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#CBD5E1]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  NO.12B/7 KAMARAJAR STREET, VINAYAGAPURAM, KOLATHUR, CHENNAI PINCODE: 600099
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="tel:8907608896" className="text-white font-bold hover:text-[#38BDF8] transition-colors">
                    8907608896
                  </a>
                  <span className="text-white/30">/</span>
                  <a href="tel:9894344714" className="text-white font-bold hover:text-[#38BDF8] transition-colors">
                    9894344714
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} LEVIX bio science pvt ltd. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Chennai, Tamil Nadu, India • cGMP Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
