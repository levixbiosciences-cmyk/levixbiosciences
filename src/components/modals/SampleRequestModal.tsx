import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Send, Building2, User, Mail, Phone, Shield } from 'lucide-react';
import { products } from '../../data/products';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProductSlug?: string;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({
  isOpen,
  onClose,
  defaultProductSlug
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    profession: 'Physician / Medical Specialist',
    productSlug: defaultProductSlug || 'neurovia',
    requestType: 'Clinical Dossier & Physician Monograph',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071521]/80 backdrop-blur-md">
      <div 
        className="w-full max-w-xl bg-[#0B1F33] border border-[#B9D8D6]/20 rounded-3xl shadow-2xl overflow-hidden text-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#087F8C]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-['Manrope']">
                Healthcare Professional Request
              </h3>
              <p className="text-xs text-[#B9D8D6]">
                Scientific Dossiers &amp; Clinical Sample Program
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#66737F] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#087F8C]/20 border border-[#087F8C] text-[#087F8C] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-['Manrope']">
                Request Registered Successfully
              </h4>
              <p className="text-sm text-[#B9D8D6]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. A NovaThera Medical Science Liaison will review your credentials and transmit the requested documentation to <span className="text-[#087F8C] font-mono">{formData.email}</span> within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#087F8C] text-white text-xs font-semibold hover:bg-[#0E9AA6] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Full Name &amp; Designation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. A. Sharma, MD"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@hospital.org"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Hospital / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apollo Hospitals / AIIMS"
                    value={formData.institution}
                    onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Product / Molecule of Interest
                  </label>
                  <select
                    value={formData.productSlug}
                    onChange={e => setFormData({ ...formData, productSlug: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071521] border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  >
                    {products.map(p => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                    <option value="all">Entire Therapeutic Portfolio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Request Type
                  </label>
                  <select
                    value={formData.requestType}
                    onChange={e => setFormData({ ...formData, requestType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071521] border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  >
                    <option value="Clinical Dossier">Clinical Dossier &amp; Monograph</option>
                    <option value="Physician Samples">Physician Trial Evaluation Samples</option>
                    <option value="Investigator Study">Investigator-Initiated Study Query</option>
                    <option value="Institutional Supply">Institutional Hospital Supply</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                  Clinical Inquiry Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify patient demographic or clinical queries..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                />
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2 text-xs text-[#66737F]">
                <Shield className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span>
                  NovaThera strictly complies with international medical compliance regulations. Information is supplied for registered medical practitioners and institutional buyers.
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#087F8C]/20 disabled:opacity-50"
              >
                {loading ? (
                  <span>Transmitting Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Institutional Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
