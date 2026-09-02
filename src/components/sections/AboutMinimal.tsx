import React from 'react';
import {
  ShieldCheck,
  Dna,
  Microscope,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface AboutMinimalProps {
  onContactClick?: () => void;
}

export const AboutMinimal: React.FC<AboutMinimalProps> = ({
  onContactClick,
}) => {
  const pillars = [
    {
      icon: <Dna className="w-6 h-6 text-[#7137A5]" />,
      title: 'Translational Cellular Science',
      description:
        'Our formulations are designed around verified physiological pathways, optimizing cellular uptake and targeted bioavailability.',
    },
    {
      icon: <Microscope className="w-6 h-6 text-[#7137A5]" />,
      title: 'Bioavailability Optimization',
      description:
        'We utilize advanced lipid carriers, stereoisomer matrices, and microemulsifying delivery systems for superior absorption.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#7137A5]" />,
      title: '100% Quality & Purity Testing',
      description:
        'Every production batch undergoes strict HPLC/GC-MS chromatography testing aligned with compendial monographs.',
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        text-[#17121F]
        py-20
        sm:py-24
        lg:py-28
        border-b
        border-[#EEE6F2]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#7137A5]/5
          blur-[100px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#D49B24]/5
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Subtle dot pattern */}
      <div
        className="
          absolute
          top-20
          left-8
          w-32
          h-32
          opacity-30
          pointer-events-none
          bg-[radial-gradient(#7137A5_1.5px,transparent_1.5px)]
          [background-size:14px_14px]
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="max-w-4xl mb-14 sm:mb-16">

          {/* Label */}
          <div
            className="
              inline-flex
              items-center
              gap-2.5
              px-4
              py-2
              rounded-full
              bg-[#F7F0FA]
              border
              border-[#E3D2EC]
              text-[#7137A5]
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              mb-5
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-[#D49B24]
              "
            />

            <span>
              About Levix
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-serif
              font-bold
              text-[#17121F]
              tracking-tight
              leading-[1.08]
            "
          >
            Science You Trust,

            <span
              className="
                block
                text-[#7137A5]
                mt-2
              "
            >
              Health You Feel.
            </span>
          </h2>

          {/* Gold divider */}
          <div
            className="
              flex
              items-center
              gap-3
              mt-6
            "
          >
            <span className="w-10 h-[2px] bg-[#D49B24]" />

            <span className="w-1.5 h-1.5 rounded-full bg-[#D49B24]" />

            <span className="w-16 h-px bg-[#E8DCCB]" />
          </div>

          {/* Description */}
          <p
            className="
              text-sm
              sm:text-base
              lg:text-lg
              text-[#625A68]
              mt-6
              leading-8
              max-w-3xl
            "
          >
            <strong className="text-[#34283B]">
              LEVIX bio science pvt ltd
            </strong>{' '}
            is a dedicated healthcare and specialized formulations company
            based in Kolathur, Chennai. We blend pharmaceutical rigor with
            modern bioactive delivery platforms to provide healthcare
            professionals and patients with formulations that deliver
            measurable clinical results.
          </p>

        </div>

        {/* =====================================================
            THREE CORE PILLARS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            sm:gap-7
            mb-14
          "
        >

          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                p-6
                sm:p-8
                rounded-[28px]
                bg-white
                border
                border-[#EEE5F2]
                shadow-[0_12px_40px_rgba(61,30,80,0.06)]
                hover:-translate-y-1.5
                hover:border-[#D8BFE5]
                hover:shadow-[0_20px_50px_rgba(61,30,80,0.10)]
                transition-all
                duration-300
              "
            >

              {/* Top accent */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-[3px]
                  bg-gradient-to-r
                  from-[#7137A5]
                  via-[#D49B24]
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />

              {/* Number */}
              <div
                className="
                  absolute
                  top-5
                  right-6
                  text-5xl
                  font-serif
                  font-bold
                  text-[#7137A5]/[0.06]
                "
              >
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className="
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#F6EFF9]
                  border
                  border-[#E8D9EF]
                  flex
                  items-center
                  justify-center
                  mb-6
                  group-hover:bg-[#7137A5]
                  group-hover:border-[#7137A5]
                  group-hover:scale-105
                  transition-all
                  duration-300
                "
              >
                {React.cloneElement(pillar.icon, {
                  className:
                    'w-6 h-6 text-[#7137A5] group-hover:text-white transition-colors',
                })}
              </div>

              {/* Title */}
              <h3
                className="
                  relative
                  text-lg
                  sm:text-xl
                  font-bold
                  text-[#302637]
                  font-['Manrope']
                  leading-snug
                  mb-3
                "
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p
                className="
                  relative
                  text-xs
                  sm:text-sm
                  text-[#756B7B]
                  leading-7
                "
              >
                {pillar.description}
              </p>

              {/* Bottom indicator */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  mt-6
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  font-bold
                  text-[#7137A5]
                "
              >
                <CheckCircle2 className="w-3.5 h-3.5" />

                <span>
                  Science Driven
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* =====================================================
            CORPORATE TRUST STRIP
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            bg-[#32164F]
            text-white
            shadow-[0_20px_60px_rgba(50,22,79,0.18)]
          "
        >

          {/* Background glow */}
          <div
            className="
              absolute
              -right-20
              -top-32
              w-80
              h-80
              rounded-full
              bg-[#7137A5]
              opacity-40
              blur-[70px]
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              -left-20
              -bottom-32
              w-72
              h-72
              rounded-full
              bg-[#D49B24]
              opacity-10
              blur-[70px]
              pointer-events-none
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              p-7
              sm:p-9
              lg:p-10
              flex
              flex-col
              lg:flex-row
              items-start
              lg:items-center
              justify-between
              gap-8
            "
          >

            {/* LEFT */}
            <div className="max-w-3xl">

              {/* Label */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.18em]
                  text-[#E3BC58]
                  font-bold
                  mb-3
                "
              >

                <Award className="w-4 h-4" />

                <span>
                  Chennai Headquarters & Production Rigor
                </span>

              </div>

              {/* Heading */}
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-serif
                  font-bold
                  text-white
                  leading-tight
                "
              >
                Compliant with cGMP & ISO
                <span className="text-[#DAB45E]">
                  {' '}Analytical Standards
                </span>
              </h3>

              {/* Description */}
              <p
                className="
                  text-xs
                  sm:text-sm
                  text-white/65
                  mt-3
                  leading-6
                  max-w-2xl
                "
              >
                Registered corporate facility located at Kolathur,
                Chennai. Available for institutional partnerships
                & inquiries.
              </p>

              {/* Trust points */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                  mt-5
                "
              >

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-[#DAB45E]"
                  />

                  <span className="text-xs text-white/75">
                    Quality Focused
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-[#DAB45E]"
                  />

                  <span className="text-xs text-white/75">
                    Research Driven
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-[#DAB45E]"
                  />

                  <span className="text-xs text-white/75">
                    Healthcare Focused
                  </span>
                </div>

              </div>

            </div>

            {/* RIGHT CTA */}
            <button
              onClick={onContactClick}
              className="
                shrink-0
                px-6
                sm:px-7
                py-3.5
                rounded-full
                bg-white
                text-[#7137A5]
                text-xs
                sm:text-sm
                font-bold
                shadow-lg
                hover:bg-[#FFFDF8]
                hover:-translate-y-0.5
                transition-all
                flex
                items-center
                gap-2.5
                whitespace-nowrap
                group
              "
            >

              <span>
                Contact Chennai Office
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

          </div>

        </div>

      </div>

    </section>
  );
};