import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Building2,
} from 'lucide-react';
import { companyInfo } from '../../data/company';

interface ContactMinimalProps {
  prefilledProduct?: string;
}

export const ContactMinimal: React.FC<ContactMinimalProps> = ({
  prefilledProduct = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: prefilledProduct
      ? `Inquiry regarding formulation: ${prefilledProduct}`
      : '',
  });

  const fullAddress =
    'NO.12B/7 KAMARAJAR STREET, VINAYAGAPURAM, KOLATHUR, CHENNAI PINCODE: 600099';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) return;

    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FAF8FC] py-16 sm:py-24 text-[#17121F]"
    >
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#7137A5]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#D49B24]/5 blur-3xl pointer-events-none" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#7137A5 0.7px, transparent 0.7px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7137A5]/10 border border-[#7137A5]/20 text-[#7137A5] text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D49B24]" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#32164F] tracking-tight leading-tight font-['Manrope']">
            Contact Chennai
            <span className="block text-[#7137A5]">
              Headquarters
            </span>
          </h2>

          <div className="flex items-center gap-3 mt-5">
            <span className="w-12 h-[2px] bg-[#D49B24]" />
            <span className="w-3 h-[2px] bg-[#D49B24]/40" />
          </div>

          <p className="text-sm sm:text-base text-[#756B7B] mt-5 leading-relaxed">
            Reach out to{' '}
            <strong className="text-[#32164F]">
              LEVIX bio science pvt ltd
            </strong>{' '}
            for physician inquiries, distributor supply, product monographs,
            or institutional partnership.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-start">

          {/* =========================================================
              LEFT COLUMN
          ========================================================== */}
          <div className="lg:col-span-6 space-y-6">

            {/* Address Card */}
            <div className="group relative p-6 sm:p-8 rounded-[1.75rem] bg-white border border-[#EEE6F2] shadow-[0_10px_35px_rgba(50,22,79,0.05)] hover:shadow-[0_18px_45px_rgba(50,22,79,0.09)] transition-all duration-300">

              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D49B24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#F5EFF9] border border-[#E9DDF0] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#7137A5]" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#32164F] font-['Manrope']">
                      Registered Corporate Address
                    </h3>

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#7137A5] mt-0.5">
                      LEVIX BIO SCIENCE PVT LTD
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2.5 rounded-xl bg-[#F8F5FA] hover:bg-[#F5EFF9] text-[#756B7B] hover:text-[#7137A5] transition-colors flex items-center gap-1.5 text-xs font-semibold touch-target"
                  title="Copy Full Address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-bold text-[11px]">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Address */}
              <div className="mt-5 p-5 rounded-2xl bg-[#FAF8FC] border border-[#EEE6F2]">

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-[#7137A5]/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#7137A5]" />
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-[#32164F] leading-relaxed pt-1">
                    {fullAddress}
                  </p>
                </div>

                <div className="pt-4 mt-4 flex flex-wrap items-center gap-3 border-t border-[#EEE6F2] text-[11px]">
                  <a
                    href="https://maps.google.com/?q=Kamarajar+Street+Vinayagapuram+Kolathur+Chennai+600099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7137A5] font-bold hover:text-[#32164F] transition-colors flex items-center gap-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <span className="text-[#D8CDD9]">•</span>

                  <span className="text-[#756B7B]">
                    Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative p-6 sm:p-8 rounded-[1.75rem] bg-white border border-[#EEE6F2] shadow-[0_10px_35px_rgba(50,22,79,0.05)] hover:shadow-[0_18px_45px_rgba(50,22,79,0.09)] transition-all duration-300">

              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#7137A5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#F5EFF9] border border-[#E9DDF0] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#7137A5]" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#32164F] font-['Manrope']">
                    Direct Phone Support
                  </h3>

                  <p className="text-[11px] text-[#756B7B]">
                    Instant click-to-call for immediate inquiry
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">

                {/* Primary Line */}
                <div className="p-4 rounded-2xl bg-[#F5EFF9] border border-[#E9DDF0] flex flex-col justify-between gap-4">

                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#7137A5] font-bold block">
                      Primary Line
                    </span>

                    <a
                      href="tel:8870889620 "
                      className="text-lg font-bold font-mono text-[#32164F] hover:text-[#7137A5] transition-colors block mt-1"
                    >
                      8870889620
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="tel:8870889620 "
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#7137A5] hover:bg-[#5D278C] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all touch-target"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href="https://wa.me/918870889620 ?text=Hello%20LEVIX%20Bio%20Science,%20I%20would%20like%20to%20inquire%20about%20your%20formulations."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-sm transition-all touch-target"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Support Desk */}
                <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#EEE6F2] flex flex-col justify-between gap-4">

                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#756B7B] font-bold block">
                      Support Desk
                    </span>

                    <a
                      href="tel:8807608896"
                      className="text-lg font-bold font-mono text-[#32164F] hover:text-[#7137A5] transition-colors block mt-1"
                    >
                      8807608896
                    </a>
                  </div>

                  <a
                    href="tel:8807608896"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#32164F] hover:bg-[#7137A5] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-all touch-target"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D49B24]" />
                    <span>Call Support</span>
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-5 mt-5 border-t border-[#EEE6F2] flex items-center gap-2 text-xs text-[#756B7B]">
                <Clock className="w-3.5 h-3.5 text-[#D49B24]" />
                <span>
                  Mon - Sat: 9:00 AM - 6:30 PM IST • Direct Chennai Desk
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN — INQUIRY FORM
          ========================================================== */}
          <div className="lg:col-span-6">

            <div className="relative overflow-hidden p-6 sm:p-8 rounded-[1.75rem] bg-white border border-[#EEE6F2] shadow-[0_12px_40px_rgba(50,22,79,0.07)]">

              {/* Form decorative glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[#7137A5]/5 blur-3xl pointer-events-none" />

              <div className="relative space-y-6">

                {/* Form Header */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#32164F] flex items-center justify-center">
                    <Send className="w-5 h-5 text-[#D49B24]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#32164F] font-['Manrope']">
                      Send Direct Message
                    </h3>

                    <p className="text-xs text-[#756B7B] mt-1">
                      Submit your details and our team will get back to you promptly.
                    </p>
                  </div>
                </div>

                {formSubmitted ? (

                  /* =====================================================
                     SUCCESS STATE
                  ====================================================== */
                  <div className="p-7 rounded-2xl bg-[#F5EFF9] border border-[#E9DDF0] text-center space-y-4 animate-in fade-in duration-300">

                    <div className="relative w-14 h-14 rounded-full bg-[#7137A5] text-white mx-auto flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-7 h-7" />

                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#D49B24]" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#32164F] font-['Manrope']">
                        Inquiry Received Successfully
                      </h4>

                      <p className="text-xs text-[#756B7B] leading-relaxed mt-2">
                        Thank you,{' '}
                        <strong className="text-[#32164F]">
                          {formData.name}
                        </strong>
                        . Our Chennai medical desk has received your request
                        and will call you at{' '}
                        <strong className="text-[#32164F]">
                          {formData.phone}
                        </strong>{' '}
                        shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          message: '',
                        });
                      }}
                      className="mt-2 text-xs text-[#7137A5] font-bold hover:text-[#32164F] hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </div>

                ) : (

                  /* =====================================================
                     FORM
                  ====================================================== */
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#32164F] mb-1.5 font-['Manrope']">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Kumar / Pharmacist"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8FC] border border-[#E5DCE9] text-xs sm:text-sm text-[#32164F] placeholder:text-[#A69CAA] focus:outline-none focus:border-[#7137A5] focus:ring-2 focus:ring-[#7137A5]/10 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      <div>
                        <label className="block text-xs font-bold text-[#32164F] mb-1.5 font-['Manrope']">
                          Phone Number *
                        </label>

                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8FC] border border-[#E5DCE9] text-xs sm:text-sm text-[#32164F] placeholder:text-[#A69CAA] focus:outline-none focus:border-[#7137A5] focus:ring-2 focus:ring-[#7137A5]/10 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#32164F] mb-1.5 font-['Manrope']">
                          Email Address (Optional)
                        </label>

                        <input
                          type="email"
                          placeholder="e.g. doctor@hospital.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8FC] border border-[#E5DCE9] text-xs sm:text-sm text-[#32164F] placeholder:text-[#A69CAA] focus:outline-none focus:border-[#7137A5] focus:ring-2 focus:ring-[#7137A5]/10 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-[#32164F] mb-1.5 font-['Manrope']">
                        Message / Formulation Requirement
                      </label>

                      <textarea
                        rows={4}
                        placeholder="Please specify any product inquiries, bulk institutional requirements, or questions..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8FC] border border-[#E5DCE9] text-xs sm:text-sm text-[#32164F] placeholder:text-[#A69CAA] focus:outline-none focus:border-[#7137A5] focus:ring-2 focus:ring-[#7137A5]/10 focus:bg-white resize-none transition-all"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group w-full py-3.5 px-6 rounded-xl bg-[#7137A5] hover:bg-[#5D278C] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 touch-target"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

                      <span>
                        Submit Inquiry to Chennai Desk
                      </span>
                    </button>

                    {/* Direct assistance */}
                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#756B7B]">
                      <span>Direct assistance also available at</span>

                      <strong className="text-[#32164F]">
                        8870889620
                      </strong>

                      <span>/</span>

                      <strong className="text-[#32164F]">
                        8807608896
                      </strong>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Strip */}
        <div className="mt-8 rounded-3xl bg-[#32164F] px-6 py-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-[#D49B24]" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Need assistance with a formulation?
                </p>

                <p className="text-[11px] text-white/55 mt-0.5">
                  Our team is available for product and institutional inquiries.
                </p>
              </div>
            </div>

            <a
              href="tel:8870889620 "
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#32164F] text-xs font-bold hover:bg-[#F5EFF9] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Talk to Our Team
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};