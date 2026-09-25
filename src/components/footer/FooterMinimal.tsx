import React from 'react';
import {
  Phone,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { LevixLogo } from '../common/LevixLogo';
import { companyInfo } from '../../data/company';

interface FooterMinimalProps {
  onSectionClick?: (sectionId: string) => void;
}

export const FooterMinimal: React.FC<FooterMinimalProps> = ({
  onSectionClick,
}) => {
  const handleNav = (id: string) => {
    if (onSectionClick) {
      onSectionClick(id);
    } else {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#32164F] text-white pt-14 pb-24 sm:pb-10 text-left">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#7137A5]/25 blur-[110px] pointer-events-none" />

      <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#D49B24]/10 blur-[120px] pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#FFFFFF 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================================
            MAIN FOOTER GRID
        ========================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-white/10">

          {/* =====================================================
              BRAND
          ====================================================== */}

          <div className="md:col-span-5 space-y-5">

            {/* Logo */}
            <div className="inline-flex bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <LevixLogo
                variant="horizontal"
                size="md"
              />
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#D49B24]" />

              <p className="text-xs sm:text-sm text-[#D49B24] italic font-semibold">
                &quot;Science you trust, health you feel.&quot;
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-md">
              LEVIX bio science pvt ltd develops differentiated,
              evidence-informed pharmaceutical and therapeutic formulations
              engineered with high cellular bioavailability.
            </p>

            {/* Small trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#D49B24]" />

              <span className="text-[10px] uppercase tracking-[0.14em] font-bold text-white/70">
                Quality • Precision • Trust
              </span>
            </div>
          </div>

          {/* =====================================================
              QUICK NAVIGATION
          ====================================================== */}

          <div className="md:col-span-3 space-y-4">

            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#D49B24]">
              Quick Navigation
            </h4>

            <div className="w-8 h-[2px] bg-[#D49B24]" />

            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60">
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
                    className="group flex items-center gap-2 hover:text-white transition-colors focus:outline-none"
                  >
                    <span className="w-5 h-5 rounded-md bg-white/5 group-hover:bg-[#7137A5] flex items-center justify-center transition-all">
                      <ChevronRight className="w-3 h-3 text-[#D49B24] group-hover:text-white transition-colors" />
                    </span>

                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div className="md:col-span-4 space-y-4">

            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#D49B24]">
              Chennai Headquarters
            </h4>

            <div className="w-8 h-[2px] bg-[#D49B24]" />

            <div className="space-y-4 text-xs sm:text-sm text-white/60">

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#D49B24]" />
                </div>

                <span className="leading-relaxed pt-1">
                  NO.12B/7 KAMARAJAR STREET,
                  VINAYAGAPURAM, KOLATHUR,
                  CHENNAI PINCODE: 600099
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">

                <div className="w-8 h-8 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-[#D49B24]" />
                </div>

                <div className="flex items-center gap-2 font-mono">

                  <a
                    href="tel:8807608896"
                    className="text-white font-bold hover:text-[#D49B24] transition-colors"
                  >
                    8807608896
                  </a>

                  <span className="text-white/20">
                    /
                  </span>

                  <a
                    href="tel:9894344714"
                    className="text-white font-bold hover:text-[#D49B24] transition-colors"
                  >
                    9894344714
                  </a>

                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 pt-1">

                <div className="w-8 h-8 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D49B24]" />
                </div>

                <span className="text-[11px] text-white/50">
                  Mon - Sat: 9:00 AM - 6:30 PM IST
                </span>

              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">

          <p className="text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} LEVIX bio science pvt ltd.
            All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">

            <ShieldCheck className="w-3.5 h-3.5 text-[#D49B24]" />

            <span className="text-white/50">
              Chennai, Tamil Nadu, India
            </span>

            <span className="text-white/20">
              •
            </span>

            <span className="text-[#D49B24] font-semibold">
              cGMP Compliant
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};