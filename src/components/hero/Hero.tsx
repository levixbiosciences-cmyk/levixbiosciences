import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Microscope,
  CheckCircle2,
  Dna,
  Activity,
  Zap,
} from 'lucide-react';

import { MolecularParticles } from './MolecularParticles';
import { LevixLogo } from '../common/LevixLogo';

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick = () => {
    document
      .getElementById('formulations')
      ?.scrollIntoView({ behavior: 'smooth' });
  },

  onContactClick = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  },
}) => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[85vh]
        lg:min-h-[88vh]
        flex
        items-center
        overflow-hidden
        bg-white
        text-[#17121F]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#FCFAFE] to-[#F3EAF9]" />

      {/* Purple glow */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#7137A5]/10
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Gold glow */}
      <div
        className="
          absolute
          bottom-0
          left-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#D49B24]/8
          blur-[100px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MOLECULAR PARTICLES
          Keep your existing component
      ===================================================== */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <MolecularParticles />
      </div>

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
          bg-[linear-gradient(to_right,#7137A5_1px,transparent_1px),linear-gradient(to_bottom,#7137A5_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* =====================================================
          DECORATIVE DNA
      ===================================================== */}

      <div
        className="
          absolute
          right-[-100px]
          top-[15%]
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-[#7137A5]/10
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-[-50px]
          top-[22%]
          w-[320px]
          h-[320px]
          rounded-full
          border
          border-[#D49B24]/10
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
          w-full
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-10
            items-center
          "
        >

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="lg:col-span-7">

            {/* -------------------------------------------------
                BRAND BADGE
            ------------------------------------------------- */}

            <div
              className="
                inline-flex
                items-center
                gap-2.5
                px-4
                py-2
                rounded-full
                bg-white
                border
                border-[#D49B24]/40
                shadow-sm
                mb-7
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#7137A5]
                "
              />

              <span
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-[#7137A5]
                "
              >
                Welcome to Levix Biosciences
              </span>
            </div>

            {/* -------------------------------------------------
                MAIN HEADING
            ------------------------------------------------- */}

            <div className="space-y-4">

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  font-serif
                  font-bold
                  tracking-tight
                  leading-[1.05]
                  text-[#17121F]
                "
              >
                Science you trust,

                <span
                  className="
                    block
                    text-[#7137A5]
                    mt-2
                  "
                >
                  Health you feel.
                </span>
              </h1>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  pt-1
                "
              >
                <span
                  className="
                    w-8
                    h-[2px]
                    bg-[#D49B24]
                  "
                />

                <p
                  className="
                    text-xs
                    sm:text-sm
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#796C80]
                  "
                >
                  LEVIX Biosciences Pvt Ltd
                </p>
              </div>

            </div>

            {/* -------------------------------------------------
                DESCRIPTION
            ------------------------------------------------- */}

            <p
              className="
                mt-7
                text-sm
                sm:text-base
                lg:text-lg
                text-[#625A68]
                max-w-2xl
                leading-8
              "
            >
              We are committed to delivering quality pharmaceutical
              formulations through scientific innovation, rigorous
              quality standards, and a strong focus on better health.
            </p>

            {/* -------------------------------------------------
                ACTION BUTTONS
            ------------------------------------------------- */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                gap-4
                mt-9
              "
            >

              {/* PRIMARY */}
              <button
                onClick={onExploreClick}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-3.5
                  rounded-full
                  bg-[#7137A5]
                  text-white
                  text-sm
                  font-bold
                  shadow-lg
                  shadow-[#7137A5]/20
                  hover:bg-[#5D278C]
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                  group
                "
                id="hero-explore-btn"
              >
                <span>
                  Explore Formulations
                </span>

                <ArrowRight
                  className="
                    w-4
                    h-4
                    group-hover:translate-x-1
                    transition-transform
                  "
                />
              </button>

              {/* SECONDARY */}
              <button
                onClick={onContactClick}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-3.5
                  rounded-full
                  bg-white
                  text-[#7137A5]
                  border
                  border-[#D9C5E6]
                  text-sm
                  font-bold
                  hover:bg-[#F8F2FB]
                  hover:border-[#7137A5]/40
                  transition-all
                  duration-300
                "
                id="hero-contact-btn"
              >
                <span>
                  Get in Touch
                </span>

                <ArrowRight
                  className="w-4 h-4"
                />
              </button>

            </div>

            {/* =================================================
                TRUST BADGES
            ================================================= */}

            <div
              className="
                mt-10
                pt-6
                border-t
                border-[#EEE6F2]
              "
            >

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-4
                  gap-5
                "
              >

                {/* QUALITY */}
                <div className="flex items-center gap-2.5">

                  <div
                    className="
                      w-9
                      h-9
                      shrink-0
                      rounded-full
                      bg-[#F5EDF9]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ShieldCheck
                      className="w-4 h-4 text-[#7137A5]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#342B3B]">
                      Quality
                    </p>

                    <p className="text-[10px] text-[#8B808F]">
                      Assured
                    </p>
                  </div>

                </div>

                {/* RESEARCH */}
                <div className="flex items-center gap-2.5">

                  <div
                    className="
                      w-9
                      h-9
                      shrink-0
                      rounded-full
                      bg-[#F5EDF9]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Microscope
                      className="w-4 h-4 text-[#7137A5]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#342B3B]">
                      Research
                    </p>

                    <p className="text-[10px] text-[#8B808F]">
                      Driven
                    </p>
                  </div>

                </div>

                {/* STANDARDS */}
                <div className="flex items-center gap-2.5">

                  <div
                    className="
                      w-9
                      h-9
                      shrink-0
                      rounded-full
                      bg-[#FFF8E9]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Award
                      className="w-4 h-4 text-[#B47B13]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#342B3B]">
                      Standards
                    </p>

                    <p className="text-[10px] text-[#8B808F]">
                      Excellence
                    </p>
                  </div>

                </div>

                {/* HEALTH */}
                <div className="flex items-center gap-2.5">

                  <div
                    className="
                      w-9
                      h-9
                      shrink-0
                      rounded-full
                      bg-[#F5EDF9]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Zap
                      className="w-4 h-4 text-[#7137A5]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#342B3B]">
                      Healthcare TEsting
                    </p>

                    <p className="text-[10px] text-[#8B808F]">
                      Focused
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div
            className="
              lg:col-span-5
              relative
              flex
              items-center
              justify-center
              min-h-[420px]
            "
          >
          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM GOLD ACCENT
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[3px]
          bg-gradient-to-r
          from-transparent
          via-[#D49B24]
          to-transparent
          opacity-50
        "
      />

    </section>
  );
};