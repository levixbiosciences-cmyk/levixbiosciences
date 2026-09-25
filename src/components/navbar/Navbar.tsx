import React, { useState, useEffect } from 'react';
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
  Youtube,
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
                  8870889620
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
                8807608896
              </a>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              <a
                href="mailto:info@levixbiosciences.com"
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

                info@levixbiosciences.com
              </a>

              <span className="hidden md:block text-white/20">
                |
              </span>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-2">

                <a
                  href="#"
                  aria-label="LinkedIn"
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
                  "
                >
                  <Linkedin size={12} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
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
                  "
                >
                  <Facebook size={12} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
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
                  "
                >
                  <Instagram size={12} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
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
                  "
                >
                  <Youtube size={12} />
                </a>

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
                  8870889620
                </a>

                <span>/</span>

                <a
                  href={`tel:${companyInfo.contact.headquarters.phone2}`}
                  className="font-semibold"
                >
                  8807608896
                </a>
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

      </header>
    </>
  );
};