import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  MapPin,
  ChevronRight,
  ShoppingBag,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Clock,
} from 'lucide-react';
import LevixLogo from '../common/Levix.jpeg';
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
  onOpenCart,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [socialNotice, setSocialNotice] = useState<{ platform: string; message: string } | null>(null);
  const noticeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleComingSoon = (platform: string) => {
    if (noticeTimeoutRef.current) {
      clearTimeout(noticeTimeoutRef.current);
    }
    setSocialNotice({
      platform,
      message: 'Coming Soon — Our social media page is currently being updated. Please check back soon.',
    });
    noticeTimeoutRef.current = setTimeout(() => {
      setSocialNotice(null);
    }, 4500);
  };

  useEffect(() => {
    return () => {
      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    { label: 'Services', id: 'services' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    setMobileMenuOpen(false);

    if (onSectionClick) {
      onSectionClick(id);
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* =========================================================
          TOP CONTACT BAR
      ========================================================= */}
      <div
        className="
          relative
          z-[60]
          bg-[#32164F]
          text-white
          border-b
          border-white/10
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-2.5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              text-[11px]
              sm:text-xs
            "
          >
            {/* LEFT */}
            <div className="flex items-center gap-3">

              <div className="hidden sm:flex items-center gap-2">
                <MapPin
                  size={13}
                  className="text-[#E0B44C]"
                />

                <span className="text-white/90">
                  Kolathur, Chennai - 600099
                </span>
              </div>

              <span className="hidden sm:block text-white/20">
                |
              </span>

              <a
                href={`tel:${companyInfo.contact.headquarters.phone1}`}
                className="
                  flex
                  items-center
                  gap-1.5
                  text-white/90
                  hover:text-[#E8C76A]
                  transition-colors
                "
              >
                <Phone
                  size={12}
                  className="text-[#E0B44C]"
                />

                <span>
                  +91 8870889620
                </span>
              </a>

              <span className="text-white/30">
                /
              </span>

              <a
                href={`tel:${companyInfo.contact.headquarters.phone2}`}
                className="
                  text-white/90
                  hover:text-[#E8C76A]
                  transition-colors
                "
              >
                +91 8807608896
              </a>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              <a
                href="mailto:levixbiosciences@gmail.com"
                className="
                  hidden
                  md:flex
                  items-center
                  gap-1.5
                  text-white/80
                  hover:text-white
                  transition-colors
                "
              >
                <Mail
                  size={12}
                  className="text-[#E0B44C]"
                />

                levixbiosciences@gmail.com
              </a>

              <span className="hidden md:block text-white/20">
                |
              </span>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-2">

                {/* Facebook (Direct Link) */}
                <a
                  href="https://www.facebook.com/profile.php?id=61594677755313&rdid=U33oyTRcd7zH1q6S&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1K7oBs2FK5%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  title="Follow LEVIX on Facebook"
                  className="
                    w-6
                    h-6
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#E0B44C]
                    hover:text-[#32164F]
                    transition-all
                    cursor-pointer
                    text-white
                  "
                >
                  <Facebook size={12} />
                </a>

                {/* Instagram (Coming Soon) */}
                <button
                  type="button"
                  onClick={() => handleComingSoon('Instagram')}
                  aria-label="Instagram"
                  title="Instagram — Coming Soon"
                  className="
                    w-6
                    h-6
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#E0B44C]
                    hover:text-[#32164F]
                    transition-all
                    cursor-pointer
                    text-white
                  "
                >
                  <Instagram size={12} />
                </button>

                {/* LinkedIn (Coming Soon) */}
                <button
                  type="button"
                  onClick={() => handleComingSoon('LinkedIn')}
                  aria-label="LinkedIn"
                  title="LinkedIn — Coming Soon"
                  className="
                    w-6
                    h-6
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#E0B44C]
                    hover:text-[#32164F]
                    transition-all
                    cursor-pointer
                    text-white
                  "
                >
                  <Linkedin size={12} />
                </button>

                {/* Twitter / X (Coming Soon) */}
                <button
                  type="button"
                  onClick={() => handleComingSoon('Twitter / X')}
                  aria-label="Twitter / X"
                  title="Twitter / X — Coming Soon"
                  className="
                    w-6
                    h-6
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#E0B44C]
                    hover:text-[#32164F]
                    transition-all
                    cursor-pointer
                    text-white
                  "
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}
      <header
        className={`
          sticky
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300
          ${scrolled
            ? `
                bg-white/95
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(55,25,75,0.08)]
                border-b
                border-[#EEE6F4]
                py-2
              `
            : `
                bg-white
                border-b
                border-[#F0EBF4]
                py-3
              `
          }
        `}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between gap-5">

            {/* =================================================
                LOGO
            ================================================= */}
            <button
              onClick={() => handleNav('home')}
              className="
    flex items-center shrink-0
    rounded-xl
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#7137A5]
  "
              aria-label="LEVIX Biosciences Home"
            >
              <img
                src={LevixLogo}
                alt="LEVIX Biosciences"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <nav
              className="
                hidden
                lg:flex
                items-center
                gap-1
                bg-[#FAF8FC]
                border
                border-[#EEE6F4]
                rounded-full
                p-1.5
              "
            >

              {navItems.map((item) => {

                const isActive =
                  activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`
                      relative
                      px-4
                      xl:px-5
                      py-2.5
                      rounded-full
                      text-xs
                      xl:text-sm
                      font-semibold
                      transition-all
                      duration-200
                      ${isActive
                        ? `
                            bg-[#7137A5]
                            text-white
                            shadow-md
                            shadow-[#7137A5]/20
                          `
                        : `
                            text-[#514758]
                            hover:text-[#7137A5]
                            hover:bg-white
                          `
                      }
                    `}
                  >
                    {item.label}

                    {/* GOLD ACTIVE LINE */}
                    {isActive && (
                      <span
                        className="
                          absolute
                          bottom-0.5
                          left-1/2
                          -translate-x-1/2
                          w-5
                          h-[2px]
                          bg-[#E0B44C]
                          rounded-full
                        "
                      />
                    )}
                  </button>
                );
              })}

            </nav>

            {/* =================================================
                RIGHT ACTIONS
            ================================================= */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* CART */}
              {onOpenCart && (
                <button
                  onClick={onOpenCart}
                  className="
                    relative
                    w-10
                    h-10
                    rounded-full
                    bg-[#FAF8FC]
                    border
                    border-[#E8DFF0]
                    flex
                    items-center
                    justify-center
                    text-[#7137A5]
                    hover:bg-[#F3EAF8]
                    hover:border-[#D9C2E7]
                    transition-all
                  "
                  aria-label="Open order cart"
                  title="View Cart"
                >
                  <ShoppingBag size={17} />

                  {cartCount > 0 && (
                    <span
                      className="
                        absolute
                        -top-1
                        -right-1
                        min-w-[19px]
                        h-[19px]
                        px-1
                        rounded-full
                        bg-[#D49B24]
                        text-white
                        text-[9px]
                        font-bold
                        flex
                        items-center
                        justify-center
                        shadow-sm
                      "
                    >
                      {cartCount}
                    </span>
                  )}
                </button>
              )}

              {/* CONTACT CTA */}
              <button
                onClick={() => handleNav('contact')}
                className="
                  hidden
                  sm:inline-flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  bg-[#7137A5]
                  hover:bg-[#5D278C]
                  text-white
                  text-xs
                  font-bold
                  shadow-lg
                  shadow-[#7137A5]/20
                  transition-all
                  hover:-translate-y-0.5
                  group
                "
              >
                <span>
                  Get In Touch
                </span>

                <ArrowRight
                  size={15}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />
              </button>

              {/* MOBILE MENU */}
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="
                  lg:hidden
                  w-10
                  h-10
                  rounded-xl
                  bg-[#32164F]
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-[#7137A5]
                  transition-colors
                "
                aria-label={
                  mobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>

            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        {mobileMenuOpen && (
          <div
            className="
              lg:hidden
              absolute
              top-full
              left-0
              right-0
              bg-white
              border-t
              border-[#EEE6F4]
              shadow-[0_20px_40px_rgba(45,20,60,0.12)]
              animate-in
              fade-in
              slide-in-from-top-2
              duration-200
            "
          >

            <div className="p-5">

              {/* MOBILE BRAND CARD */}
              <div
                className="
                  rounded-2xl
                  p-5
                  mb-5
                  bg-gradient-to-br
                  from-[#32164F]
                  to-[#7137A5]
                  text-white
                  relative
                  overflow-hidden
                "
              >

                {/* Decorative circle */}
                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    w-32
                    h-32
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <p className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#E0B44C]
                  font-bold
                  mb-2
                ">
                  LEVIX BIOSCIENCES
                </p>

                <p className="
                  font-serif
                  italic
                  text-lg
                ">
                  Science you trust,
                  <br />
                  Health you feel.
                </p>

                <div className="
                  flex
                  items-center
                  gap-2
                  mt-4
                  text-xs
                  text-white/70
                ">
                  <MapPin
                    size={13}
                    className="text-[#E0B44C]"
                  />

                  Kolathur, Chennai - 600099
                </div>

              </div>

              {/* MENU TITLE */}
              <div className="
                px-2
                mb-2
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#9A8EA3]
                font-bold
              ">
                Navigation
              </div>

              {/* MOBILE LINKS */}
              <div className="space-y-1">

                {navItems.map((item) => {

                  const isActive =
                    activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`
                        w-full
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        rounded-xl
                        text-sm
                        font-semibold
                        transition-all
                        ${isActive
                          ? `
                              bg-[#7137A5]
                              text-white
                              shadow-md
                            `
                          : `
                              text-[#514758]
                              hover:bg-[#F7F1FA]
                              hover:text-[#7137A5]
                            `
                        }
                      `}
                    >

                      <span>
                        {item.label}
                      </span>

                      <ChevronRight
                        size={17}
                        className={
                          isActive
                            ? 'text-[#E0B44C]'
                            : 'text-[#A89BAF]'
                        }
                      />

                    </button>
                  );
                })}

              </div>

              {/* MOBILE CONTACT */}
              <button
                onClick={() => handleNav('contact')}
                className="
                  w-full
                  mt-5
                  py-3.5
                  rounded-xl
                  bg-[#7137A5]
                  text-white
                  font-bold
                  text-sm
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
                  shadow-[#7137A5]/20
                "
              >
                Contact Us

                <ArrowRight size={17} />
              </button>

              {/* MOBILE PHONE */}
              <div className="
                mt-5
                pt-5
                border-t
                border-[#EEE6F4]
                flex
                items-center
                justify-center
                gap-2
                text-xs
                text-[#77717C]
              ">
                <Phone
                  size={13}
                  className="text-[#7137A5]"
                />

                <a
                  href={`tel:${companyInfo.contact.headquarters.phone1}`}
                  className="font-semibold"
                >
                  +91 8870889620
                </a>

                <span>/</span>

                <a
                  href={`tel:${companyInfo.contact.headquarters.phone2}`}
                  className="font-semibold"
                >
                  +91 8807608896
                </a>
              </div>

              {/* MOBILE SOCIAL ICONS */}
              <div className="mt-4 pt-3 border-t border-[#EEE6F4] flex items-center justify-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61594677755313&rdid=U33oyTRcd7zH1q6S&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1K7oBs2FK5%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="w-8 h-8 rounded-full bg-[#FAF6FC] border border-[#E9DCF2] flex items-center justify-center text-[#7137A5] hover:bg-[#7137A5] hover:text-white transition-all shadow-sm"
                >
                  <Facebook size={14} />
                </a>

                <button
                  type="button"
                  onClick={() => handleComingSoon('Instagram')}
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-[#FAF6FC] border border-[#E9DCF2] flex items-center justify-center text-[#7137A5] hover:bg-[#7137A5] hover:text-white transition-all shadow-sm cursor-pointer"
                >
                  <Instagram size={14} />
                </button>

                <button
                  type="button"
                  onClick={() => handleComingSoon('LinkedIn')}
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-[#FAF6FC] border border-[#E9DCF2] flex items-center justify-center text-[#7137A5] hover:bg-[#7137A5] hover:text-white transition-all shadow-sm cursor-pointer"
                >
                  <Linkedin size={14} />
                </button>

                <button
                  type="button"
                  onClick={() => handleComingSoon('Twitter / X')}
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-full bg-[#FAF6FC] border border-[#E9DCF2] flex items-center justify-center text-[#7137A5] hover:bg-[#7137A5] hover:text-white transition-all shadow-sm cursor-pointer"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>

              {/* TAGLINE */}
              <p className="
                text-center
                text-[10px]
                text-[#A89BAF]
                mt-4
              ">
                © {new Date().getFullYear()} LEVIX Biosciences Pvt Ltd
              </p>

            </div>
          </div>
        )}

        {/* =======================================================
            COMING SOON TOAST NOTIFICATION
        ======================================================= */}
        {socialNotice && (
          <div className="fixed top-14 sm:top-16 right-4 sm:right-8 z-50 max-w-sm w-[92vw] sm:w-[380px] bg-[#2E124B]/95 backdrop-blur-xl border border-[#E0B44C]/60 text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] rounded-2xl p-4 animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 shrink-0 rounded-xl bg-[#E0B44C]/20 border border-[#E0B44C]/40 flex items-center justify-center text-[#E0B44C] mt-0.5">
                <Clock size={16} />
              </div>
              <div className="flex-1 pr-1">
                <p className="text-[11px] font-bold text-[#E0B44C] uppercase tracking-wider">
                  {socialNotice.platform}
                </p>
                <p className="text-xs text-white/90 mt-0.5 leading-relaxed font-medium">
                  {socialNotice.message}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSocialNotice(null)}
                className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Dismiss message"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        )}

      </header>
    </>
  );
};