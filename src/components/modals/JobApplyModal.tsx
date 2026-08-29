import React, { useState } from 'react';
import { X, Briefcase, CheckCircle2, Send, Upload, FileText, User, Mail, Phone, MapPin } from 'lucide-react';
import { JobOpening } from '../../types';

interface JobApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobOpening | null;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({ isOpen, onClose, job }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceYears: '4-6 Years',
    currentCompany: '',
    noticePeriod: '30 Days',
    linkedIn: '',
    coverNote: ''
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen || !job) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFileName(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071521]/80 backdrop-blur-md">
      <div 
        className="w-full max-w-xl bg-[#0B1F33] border border-[#B9D8D6]/20 rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#087F8C]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-['Manrope']">
                Apply for Position
              </h3>
              <p className="text-xs text-[#B9D8D6]">
                {job.title}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#66737F] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#087F8C]/20 border border-[#087F8C] text-[#087F8C] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-['Manrope']">
                Application Submitted Successfully
              </h4>
              <p className="text-sm text-[#B9D8D6]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your application for <span className="text-[#087F8C] font-semibold">{job.title}</span> has been received by our Talent Acquisition &amp; Scientific Review board.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-[#087F8C] text-white text-xs font-semibold hover:bg-[#0E9AA6] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs text-[#B9D8D6]">
                <span>Dept: {job.department}</span>
                <span>Location: {job.location}</span>
                <span className="font-mono text-[#087F8C]">{job.employmentType}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Kavita Deshpande"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 90000 00000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                    Total Relevant Experience *
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={e => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071521] border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                  >
                    <option value="1-3 Years">1 - 3 Years</option>
                    <option value="4-6 Years">4 - 6 Years</option>
                    <option value="7-10 Years">7 - 10 Years</option>
                    <option value="10+ Years">10+ Years / Lead Level</option>
                  </select>
                </div>
              </div>

              {/* Resume Upload Simulator */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                  Curriculum Vitae / Resume (PDF, DOCX) *
                </label>
                <div className="relative border-2 border-dashed border-white/20 hover:border-[#087F8C] rounded-2xl p-4 text-center cursor-pointer transition-colors bg-white/[0.02]">
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <Upload className="w-5 h-5 text-[#087F8C]" />
                    <p className="text-xs text-white font-medium">
                      {fileName ? (
                        <span className="text-[#0E9AA6] font-semibold">{fileName}</span>
                      ) : (
                        'Click or drag CV file to upload'
                      )}
                    </p>
                    <p className="text-[10px] text-[#66737F]">Max 10MB • Confidential HR Transmission</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#B9D8D6] mb-1.5">
                  Scientific Background / Cover Statement (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Summarize your therapeutic domain expertise or formulation background..."
                  value={formData.coverNote}
                  onChange={e => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#087F8C] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#087F8C]/20 disabled:opacity-50"
              >
                {loading ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Candidate Application</span>
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
