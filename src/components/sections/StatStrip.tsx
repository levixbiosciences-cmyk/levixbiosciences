import React, { useEffect, useState, useRef } from 'react';
import { companyStats } from '../../data/company';

export const StatStrip: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-[#17212B] border-y border-[#E5E7EB] relative z-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
          {companyStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center group cursor-default ${idx > 0 ? 'sm:pl-8 lg:pl-10' : ''} ${idx % 2 !== 0 ? 'pt-6 sm:pt-0' : ''}`}
            >
              <div className="text-[#66737F] text-xs font-bold font-mono mb-2 group-hover:text-[#087F8C] transition-colors">
                0{idx + 1}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#0B1F33] tracking-tight font-['Manrope'] group-hover:text-[#087F8C] transition-colors">
                  {stat.value}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#087F8C]">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-base font-bold text-[#0B1F33] mt-1 font-['Manrope']">
                {stat.label}
              </p>
              <p className="text-xs text-[#66737F] mt-1 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
