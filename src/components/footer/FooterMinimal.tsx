import React from 'react';
import {
  Phone,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Instagram,
  Facebook,
  Lock,
  Play,
} from 'lucide-react';
import { LevixLogo } from '../common/LevixLogo';
import { companyInfo } from '../../data/company';
import { NeuralSignalNetwork } from '../common/NeuralSignalNetwork';

interface FooterMinimalProps {
  onSectionClick?: (sectionId: string) => void;
  onOpenAdmin?: () => void;
}

export const FooterMinimal: React.FC<FooterMinimalProps> = ({
  onSectionClick,
  onOpenAdmin,
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

      {/* Animated Neural Network Impulses on Dark */}
      <NeuralSignalNetwork variant="dark" opacity={0.32} />

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

            {/* Small trust badge & Social Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#D49B24]" />
                <span className="text-[10px] uppercase tracking-[0.14em] font-bold text-white/70">
                  Quality • Precision • Trust
                </span>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/levixbiosciences?utm_source=qr&stkn=MXhuMGhmZGc3cnIxZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LEVIX Instagram Profile"
                  title="Follow LEVIX on Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61594677755313&rdid=U33oyTRcd7zH1q6S&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1K7oBs2FK5%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LEVIX Facebook Profile"
                  title="Follow LEVIX on Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-sm"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
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
                  NO.1471/1B KAMARAJAR STREET,
                  VINAYAGAPURAM, KOLATHUR,
                  CHENNAI, (T.N.)-600099
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">

                <div className="w-8 h-8 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-[#D49B24]" />
                </div>

                <div className="flex items-center gap-2 font-mono">
                  <a
                    href="tel:+918870889620"
                    className="text-white font-bold hover:text-[#D49B24] transition-colors"
                  >
                    +91 8870889620
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

              {/* GSTIN Registration */}
              <div className="flex items-center gap-3 pt-1">

                <div className="w-8 h-8 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-[#D49B24]">GST</span>
                </div>

                <div className="text-[11px] text-white/70 font-mono">
                  <span className="text-[#D49B24] font-bold">GSTIN: </span>
                  <span className="text-white font-medium select-all">33AAHCL0903B1Z9</span>
                </div>

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

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-[10px] sm:text-[11px]">

            <ShieldCheck className="w-3.5 h-3.5 text-[#D49B24]" />

            <span className="text-white/50">
              Chennai, Tamil Nadu, India
            </span>

            <span className="text-white/20">
              •
            </span>

            <span className="text-white/70 font-mono">
              GST: <strong className="text-white">33AAHCL0903B1Z9</strong>
            </span>

            <span className="text-white/20">
              •
            </span>

            <span className="text-[#D49B24] font-semibold">
              ISO 9001:2015 Certified
            </span>

            {onOpenAdmin && (
              <>
                <span className="text-white/20">•</span>
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-[#D8B4FE] transition-colors border border-white/10 text-[10px] font-mono cursor-pointer"
                  title="Open Doctor Prescription & Order Admin Storage Vault"
                >
                  <Lock className="w-3 h-3 text-[#D8B4FE]" />
                  <span>Admin Storage</span>
                </button>
              </>
            )}

            <span className="text-white/20">•</span>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('replay-intro'))}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-cyan-300 transition-colors border border-white/10 text-[10px] font-mono cursor-pointer"
              title="Watch LEVIX Introduction Video"
            >
              <Play className="w-2.5 h-2.5 text-cyan-400 fill-cyan-400" />
              <span>Replay Video Intro</span>
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
};