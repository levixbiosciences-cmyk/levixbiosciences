import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MapPin, ChevronRight, ShoppingBag } from 'lucide-react';
import { LevixLogo } from '../common/LevixLogo';
import { companyInfo } from '../../data/company';

interface NavbarProps {
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection = 'home', 
  onSectionClick,
  cartCount = 0,
  onOpenCart
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Formulations', id: 'formulations' },
    { label: 'Quality Standards', id: 'quality' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    setMobileMenuOpen(false);
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
    <>
      {/* 1. Top Direct Contact & Company Utility Bar */}
      <div className="bg-[#060B14] text-[#CBD5E1] border-b border-white/10 text-xs py-2 px-4 sm:px-6 lg:px-8 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left Company Identity */}
          <div className="flex items-center gap-2.5 text-[11px] font-mono">
            <span className="inline-flex items-center gap-1.5 text-[#38BDF8] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>LEVIX BIO SCIENCE PVT LTD</span>
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline text-[#94A3B8] italic">
              &quot;Science you trust, health you feel.&quot;
            </span>
          </div>

          {/* Right Address & Phone Numbers */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] font-mono">
            <span className="hidden lg:inline-flex items-center gap-1 text-[#CBD5E1]">
              <MapPin className="w-3 h-3 text-[#0066CC]" />
              <span>Kolathur, Chennai - 600099</span>
            </span>
            <span className="hidden lg:inline text-white/20">|</span>
            <div className="flex items-center gap-2">
              <span className="text-[#94A3B8]">Tel:</span>
              <a 
                href={`tel:${companyInfo.contact.headquarters.phone1}`}
                className="font-bold text-[#38BDF8] hover:text-white transition-colors flex items-center gap-1"
                title="Call Primary Line 8907608896"
              >
                <Phone className="w-3 h-3 text-[#0066CC]" />
                <span>8907608896</span>
              </a>
              <span className="text-white/30">/</span>
              <a 
                href={`tel:${companyInfo.contact.headquarters.phone2}`}
                className="font-bold text-[#CBD5E1] hover:text-white transition-colors"
                title="Call Support Line 9894344714"
              >
                <span>9894344714</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Modern Floating Glassmorphic Main Navigation Bar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#CBD5E1]/80 py-2.5 shadow-md shadow-[#0B1324]/5'
            : 'bg-white border-b border-[#E2E8F0] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded-xl"
              id="navbar-logo-btn"
              aria-label="LEVIX Bio Science Home"
            >
              <LevixLogo variant="horizontal" size="md" />
            </button>

            {/* Desktop Navigation Links with Modern Hover & Active Pill State */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#F1F5F9]/80 p-1.5 rounded-full border border-[#CBD5E1]/60">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`text-xs font-bold transition-all px-4 py-2 rounded-full focus:outline-none ${
                      isActive
                        ? 'bg-[#0066CC] text-white shadow-sm'
                        : 'text-[#475569] hover:text-[#0066CC] hover:bg-white/80'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Shopping Cart Button */}
              {onOpenCart && (
                <button
                  onClick={onOpenCart}
                  className="relative p-2.5 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0B1324] border border-[#CBD5E1] transition-all flex items-center justify-center touch-target"
                  aria-label="Open order cart"
                  title="View Cart"
                >
                  <ShoppingBag className="w-4 h-4 text-[#0066CC]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#0066CC] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-in zoom-in-50">
                      {cartCount}
                    </span>
                  )}
                </button>
              )}

              {/* Clean Contact Button */}
              <div className="hidden sm:block">
                <button
                  onClick={() => handleNav('contact')}
                  className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#0066CC] to-[#0A84FF] hover:from-[#0052CC] hover:to-[#0066CC] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md shadow-[#0066CC]/20 hover:shadow-lg hover:scale-[1.02] group focus:outline-none"
                  id="navbar-contact-cta-btn"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Mobile Header Hamburger Toggle (< 1024px) */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 rounded-xl bg-[#0B1324] text-white hover:bg-[#0066CC] transition-colors focus:outline-none touch-target"
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                  id="mobile-menu-toggle"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Fullscreen Animated Glassmorphism Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[59px] bottom-0 bg-[#0B1324]/98 backdrop-blur-2xl border-t border-white/10 z-50 overflow-y-auto p-5 flex flex-col justify-between animate-in fade-in slide-in-from-top-3 duration-200">
            
            <div className="space-y-5">
              {/* Brand Tagline Header */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-1">
                <div className="text-white font-extrabold text-base font-['Manrope']">
                  LEVIX bio science pvt ltd
                </div>
                <p className="text-xs text-[#38BDF8] italic">
                  &quot;Science you trust, health you feel.&quot;
                </p>
                <div className="flex items-start gap-1.5 text-[11px] text-[#94A3B8] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>Kolathur, Chennai - 600099</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1.5">
                <div className="px-2 py-1 text-[10px] uppercase tracking-widest text-[#38BDF8] font-mono font-bold text-left">
                  Menu
                </div>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between touch-target ${
                        isActive
                          ? 'bg-[#0066CC] text-white shadow-md'
                          : 'text-[#E2E8F0] hover:bg-white/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#64748B]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Bottom CTA */}
            <div className="pt-4 border-t border-white/10 space-y-3 text-center">
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0066CC] to-[#0A84FF] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg touch-target"
              >
                <span>Contact Chennai Office</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-[#94A3B8]">
                © {new Date().getFullYear()} LEVIX bio science pvt ltd • Chennai, India
              </div>
            </div>

          </div>
        )}
      </header>
    </>
  );
};
