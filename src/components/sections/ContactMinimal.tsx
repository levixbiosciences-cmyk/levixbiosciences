import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Clock, Send, 
  CheckCircle2, Copy, Check, ExternalLink, MessageSquare, Building2 
} from 'lucide-react';
import { companyInfo } from '../../data/company';

interface ContactMinimalProps {
  prefilledProduct?: string;
}

export const ContactMinimal: React.FC<ContactMinimalProps> = ({ prefilledProduct = '' }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: prefilledProduct ? `Inquiry regarding formulation: ${prefilledProduct}` : '',
  });

  const fullAddress = "NO.12B/7 KAMARAJAR STREET, VINAYAGAPURAM, KOLATHUR, CHENNAI PINCODE: 600099";

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
    <section id="contact" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#0B1324] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066CC]/10 border border-[#0066CC]/20 text-[#0066CC] text-xs font-mono font-bold uppercase mb-2">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1324] tracking-tight font-['Manrope']">
            Contact Chennai Headquarters
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
            Reach out to <strong>LEVIX bio science pvt ltd</strong> for physician inquiries, distributor supply, product monographs, or institutional partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Direct Contact Hub Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Chennai Registered Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#CBD5E1] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0066CC]/10 border border-[#0066CC]/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1324] font-['Manrope']">
                      Registered Corporate Address
                    </h3>
                    <p className="text-[11px] font-mono text-[#0066CC]">LEVIX BIO SCIENCE PVT LTD</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569] hover:text-[#0066CC] transition-colors flex items-center gap-1.5 text-xs font-semibold touch-target"
                  title="Copy Full Address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-bold text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Exact Address formatted with prominence */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#0F172A] leading-relaxed">
                    NO.12B/7 KAMARAJAR STREET, VINAYAGAPURAM, KOLATHUR, CHENNAI PINCODE: 600099
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-[#E2E8F0] text-[11px]">
                  <a
                    href="https://maps.google.com/?q=Kamarajar+Street+Vinayagapuram+Kolathur+Chennai+600099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0066CC] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[#94A3B8]">•</span>
                  <span className="text-[#64748B]">Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers Cards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#CBD5E1] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0066CC]/10 border border-[#0066CC]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#0066CC]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1324] font-['Manrope']">
                    Direct Phone Support
                  </h3>
                  <p className="text-[11px] text-[#64748B]">Instant click-to-call for immediate inquiry</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {/* Phone 1 */}
                <div className="p-4 rounded-2xl bg-[#0066CC]/5 border border-[#0066CC]/20 space-y-2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0066CC] font-bold block">
                      Primary Line
                    </span>
                    <a
                      href="tel:8907608896"
                      className="text-lg font-bold font-mono text-[#0B1324] hover:text-[#0066CC] transition-colors block mt-0.5"
                    >
                      8907608896
                    </a>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <a
                      href="tel:8907608896"
                      className="flex-1 py-2 px-3 rounded-xl bg-[#0066CC] hover:bg-[#0052CC] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow touch-target"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/918907608896?text=Hello%20LEVIX%20Bio%20Science,%20I%20would%20like%20to%20inquire%20about%20your%20formulations."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center shadow touch-target"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] font-bold block">
                      Support Desk
                    </span>
                    <a
                      href="tel:9894344714"
                      className="text-lg font-bold font-mono text-[#0B1324] hover:text-[#0066CC] transition-colors block mt-0.5"
                    >
                      9894344714
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href="tel:9894344714"
                      className="w-full py-2 px-3 rounded-xl bg-[#0B1324] hover:bg-[#0066CC] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow touch-target transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Call Support</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours & Response */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#64748B]">
                <Clock className="w-3.5 h-3.5 text-[#0066CC]" />
                <span>Mon - Sat: 9:00 AM - 6:30 PM IST • Direct Chennai Desk</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Instant Inquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#CBD5E1] shadow-sm space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#0B1324] font-['Manrope']">
                  Send Direct Message
                </h3>
                <p className="text-xs text-[#64748B]">
                  Submit your details and our team will get back to you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#0066CC]/10 border border-[#0066CC]/20 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white mx-auto flex items-center justify-center shadow">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0B1324] font-['Manrope']">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our Chennai medical desk has received your request and will call you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="mt-2 text-xs text-[#0066CC] font-bold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1324] mb-1.5 font-['Manrope']">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Kumar / Pharmacist"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#0066CC] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1324] mb-1.5 font-['Manrope']">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#0066CC] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1324] mb-1.5 font-['Manrope']">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. doctor@hospital.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#0066CC] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1324] mb-1.5 font-['Manrope']">
                      Message / Formulation Requirement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please specify any product inquiries, bulk institutional requirements, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#0066CC] focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#0066CC] to-[#0A84FF] hover:from-[#0052CC] hover:to-[#0066CC] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 touch-target"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Chennai Desk</span>
                  </button>

                  <p className="text-[11px] text-[#64748B] text-center">
                    Direct assistance also available at <strong className="text-[#0B1324]">8907608896</strong> / <strong className="text-[#0B1324]">9894344714</strong>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
