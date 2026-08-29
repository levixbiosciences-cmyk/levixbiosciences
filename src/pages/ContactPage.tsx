import React, { useState } from 'react';
import {
  Building2, Mail, Phone, Clock, MapPin, Send,
  CheckCircle2, AlertCircle, ShieldAlert, MessageSquare
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Clinical / Medical Inquiry',
    category: 'Institutional Partnership',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full pt-28 pb-20 bg-[#F7F9F8]">

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 relative overflow-hidden -mt-28 mb-16 subtle-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#B9D8D6] text-xs font-mono uppercase">
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Manrope']">
              Contact NovaThera <br />
              <span className="text-[#B9D8D6]">Life Sciences.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B9D8D6]/85 leading-relaxed">
              Connect with our corporate headquarters, medical affairs desk, institutional distribution division, or pharmacovigilance team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-[#0B1F33] font-['Manrope'] mb-2">
              Send a Verified Ingestion Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#66737F] mb-6">
              Our medical affairs and customer support teams respond within 24 business hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#087F8C]/20 border border-[#087F8C] text-[#087F8C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F33] font-['Manrope']">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-[#66737F] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#0B1F33] font-semibold">{formData.name}</span>. Your inquiry regarding <span className="text-[#087F8C] font-semibold">{formData.subject}</span> has been logged under Ticket #NT-{Math.floor(100000 + Math.random() * 900000)}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#087F8C] text-white text-xs font-semibold hover:bg-[#0E9AA6] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0B1F33] font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Verma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0B1F33] font-semibold mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0B1F33] font-semibold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98000 00000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#0B1F33] font-semibold mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:bg-white focus:outline-none"
                    >
                      <option value="Institutional Partnership">Institutional &amp; Hospital Supply</option>
                      <option value="Medical Inquiry">Medical Science &amp; Monograph</option>
                      <option value="Clinical Trial">Clinical Trial Collaboration</option>
                      <option value="Distributor Inquiry">Export / Distribution Rights</option>
                      <option value="General">General Corporate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#0B1F33] font-semibold mb-1.5">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brief description of your query"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#0B1F33] font-semibold mb-1.5">
                    Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about requirements, patient volumes, or institutional credentials..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#17212B] focus:border-[#087F8C] focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#087F8C]/20 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Routing to Medical Desk...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Official Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Contact Info & Medical Affairs Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Global HQ Info */}
            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#0B1F33] font-['Manrope'] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#087F8C]" />
                <span>Global Corporate Headquarters</span>
              </h3>

              <div className="space-y-3 text-xs text-[#66737F]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                  <p>{companyInfo.contact.headquarters.address}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#087F8C] shrink-0" />
                  <p className="font-mono text-[#0B1F33] font-semibold">{companyInfo.contact.headquarters.phone}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#087F8C] shrink-0" />
                  <p className="font-mono text-[#087F8C]">{companyInfo.contact.headquarters.email}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#087F8C] shrink-0" />
                  <p>{companyInfo.contact.headquarters.hours}</p>
                </div>
              </div>
            </div>

            {/* Medical Affairs Desk */}
            <div className="p-6 rounded-3xl bg-[#0B1F33] text-white border border-[#B9D8D6]/20 space-y-3">
              <span className="text-xs font-mono uppercase text-[#087F8C]">
                CLINICAL LIAISON DESK
              </span>
              <h4 className="text-base font-bold font-['Manrope'] text-white">
                Medical &amp; Scientific Affairs
              </h4>
              <p className="text-xs text-[#B9D8D6]/80 leading-relaxed">
                Dedicated desk for clinicians, investigators, and academic research queries.
              </p>
              <div className="pt-2 text-xs font-mono text-[#0E9AA6]">
                medical.affairs@novathera-lifesciences.com
              </div>
            </div>

            {/* Pharmacovigilance Alert Box */}
            <div className="p-6 rounded-3xl bg-[#FEF2F2] border border-red-200 space-y-2">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm font-['Manrope']">
                <ShieldAlert className="w-5 h-5" />
                <span>Adverse Event Reporting (PV)</span>
              </div>
              <p className="text-xs text-red-900 leading-relaxed">
                If you are reporting an adverse event or product safety concern, please contact our 24/7 Pharmacovigilance desk immediately at:
              </p>
              <p className="text-xs font-mono font-bold text-red-700">
                pv.safety@novathera-lifesciences.com | +91 22 8900 1199
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
