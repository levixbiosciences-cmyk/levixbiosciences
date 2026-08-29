import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, HeartHandshake, CheckCircle2, Building2 } from 'lucide-react';
import { jobOpenings, careerCulture } from '../data/careers';
import { JobOpening, PageRoute } from '../types';

interface CareersPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenJobModal: (job: JobOpening) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate, onOpenJobModal }) => {
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', 'R&D / Discovery', 'Clinical Affairs', 'Regulatory & QA', 'Commercial & Strategy', 'Medical Affairs'];

  const filteredJobs = selectedDept === 'All'
    ? jobOpenings
    : jobOpenings.filter(j => j.department === selectedDept);

  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden -mt-28 mb-16 subtle-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#B9D8D6] text-xs font-mono uppercase">
              <span>JOIN OUR SCIENTIFIC TEAM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Manrope']">
              Build the Future of <br />
              <span className="text-[#B9D8D6]">Translational Healthcare.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B9D8D6]/85 leading-relaxed">
              At NovaThera, we combine academic research rigor with pharmaceutical execution speed. Discover how your expertise can transform chronic disease management.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {careerCulture.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-3"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="text-base font-bold text-[#0B1F33] font-['Manrope']">
                {item.title}
              </h3>
              <p className="text-xs text-[#66737F] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#087F8C]">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-['Manrope'] mt-1">
              Active Career Openings
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${selectedDept === dept
                    ? 'bg-[#0B1F33] text-white shadow-xs'
                    : 'bg-white hover:bg-[#EAF5F7] text-[#66737F] border border-[#E2E8F0]'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#EAF5F7] text-[#087F8C] font-semibold">
                    {job.department}
                  </span>
                  <span className="text-xs text-[#66737F] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {job.location}
                  </span>
                  <span className="text-xs text-[#66737F] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {job.employmentType}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {job.experienceLevel}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1F33] font-['Manrope']">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66737F] leading-relaxed mt-1">
                    {job.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[#17212B]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                <button
                  onClick={() => onOpenJobModal(job)}
                  className="px-6 py-3 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General CV Submission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#0B1F33] text-white border border-[#B9D8D6]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-['Manrope']">Don&apos;t See Your Exact Specialty?</h3>
            <p className="text-xs sm:text-sm text-[#B9D8D6]/80 mt-1">
              We are constantly seeking brilliant clinical scientists, formulation chemists, and medical liaisons.
            </p>
          </div>
          <button
            onClick={() => onOpenJobModal(jobOpenings[0])}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors whitespace-nowrap"
          >
            Submit General Talent Profile
          </button>
        </div>
      </section>

    </div>
  );
};
