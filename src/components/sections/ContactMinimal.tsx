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
    'NO.1471/1B KAMARAJAR STREET, VINAYAGAPURAM, KOLATHUR, CHENNAI, (T.N.)-600099';
  const targetEmail = 'levixbiosciences@gmail.com';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailLinks = () => {
    const subject = encodeURIComponent(
      `Direct Inquiry: ${formData.name || 'New Client'} (${formData.phone || 'No phone'}) - LEVIX Biosciences`
    );
    const body = encodeURIComponent(
      `Dear LEVIX Biosciences Team,\n\nI am contacting you via the website direct message desk regarding product formulations and pricing quotes.\n\n• Full Name: ${formData.name}\n• Phone Number: ${formData.phone}\n• Email Address: ${formData.email || 'Not specified'}\n\n• Formulation Requirement / Inquiry Details:\n${formData.message || 'General inquiry regarding formulations and institutional quotes.'}\n\n---\nTransmitted to: ${targetEmail}\nLEVIX Biosciences Pvt. Ltd. (Chennai Desk)`
    );

    const mailto = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
    const whatsapp = `https://api.whatsapp.com/send/?phone=918870889620&text=${encodeURIComponent(
      `Hello LEVIX Biosciences, I am submitting an inquiry:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email || 'N/A'}\n• Requirement: ${formData.message || 'Formulation quotes and inquiry'}`
    )}`;

    return { mailto, gmailWeb, whatsapp };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) return;

    const { mailto, gmailWeb } = generateMailLinks();
    
    // Automatically open Gmail compose in a new tab (works reliably on laptops)
    window.open(gmailWeb, '_blank', 'noopener,noreferrer');

    // Also attempt system mail client as fallback
    setTimeout(() => {
      try {
        window.location.href = mailto;
      } catch (err) {
        console.error('Mail trigger error:', err);
      }
    }, 400);

    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent py-16 sm:py-24 text-[#17121F]"
    >
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
              LEVIX Biosciences Pvt Ltd
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

                <div className="pt-4 mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#EEE6F2] text-[11px]">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://maps.google.com/?q=NO.1471/1B+Kamarajar+Street+Vinayagapuram+Kolathur+Chennai+600099"
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

                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#32164F] bg-[#FAF5FD] px-2.5 py-1 rounded-lg border border-[#E9DCF2]">
                    <span className="font-bold text-[#D49B24]">GSTIN:</span>
                    <span className="font-semibold select-all">33AAHCL0903B1Z9</span>
                  </div>
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
                    Instant WhatsApp &amp; voice support for product inquiries &amp; pricing quotes
                  </p>
                </div>
              </div>

              {/* Quotation highlight banner */}
              <div className="mt-4 p-3 rounded-xl bg-[#FAF8FC] border border-[#EEE6F2] flex items-center gap-2.5 text-xs text-[#7137A5]">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="italic font-medium leading-relaxed">
                  &ldquo;Science You Trust, Health You Feel.&rdquo; &mdash; Instant formulation inquiries, doctor samples &amp; institutional quotes via WhatsApp.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">

                {/* Primary Line - +91 8870889620 */}
                <div className="p-4 rounded-2xl bg-[#F5EFF9] border border-[#E9DDF0] flex flex-col justify-between gap-4">

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#7137A5] font-bold block">
                        Primary Line &amp; WhatsApp
                      </span>
                      <span className="text-[9px] font-bold text-[#25D366] bg-[#25D366]/15 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                        Inquiry &amp; Quotes
                      </span>
                    </div>

                    <a
                      href="https://api.whatsapp.com/send?phone=918870889620&text=Hello%20LEVIX%20Biosciences,%20I%20would%20like%20to%20make%20an%20inquiry%20and%20request%20pricing%20quotes%20for%20your%20formulations."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold font-mono text-[#32164F] hover:text-[#25D366] transition-colors block mt-1"
                      title="Click to chat on WhatsApp for inquiries & quotes"
                    >
                      +91 8870889620
                    </a>
                    <p className="text-[10px] text-[#756B7B] mt-0.5">
                      Tap number or button to chat on WhatsApp
                    </p>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=918870889620&text=Hello%20LEVIX%20Biosciences,%20I%20would%20like%20to%20make%20an%20inquiry%20and%20request%20pricing%20quotes%20for%20your%20formulations."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all touch-target"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp Inquiry &amp; Quotes</span>
                    </a>

                    <a
                      href="tel:+918870889620"
                      className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#F5EFF9] text-[#7137A5] border border-[#E9DDF0] text-[11px] font-bold text-center flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call +91 8870889620</span>
                    </a>
                  </div>
                </div>

                {/* Corporate Email Desk */}
                <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#EEE6F2] flex flex-col justify-between gap-4">

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#756B7B] font-bold block">
                        Corporate Email Desk
                      </span>
                      <span className="text-[9px] font-bold text-[#7137A5] bg-[#7137A5]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Mail className="w-2.5 h-2.5" />
                        Email Inquiry
                      </span>
                    </div>

                    <div className="mt-3 p-3 rounded-xl bg-white border border-[#EEDBFA]/80 shadow-xs">
                      <p className="text-xs sm:text-[13px] text-[#4F3E5A] italic leading-relaxed font-medium">
                        &ldquo;Direct email desk for formulations, institutional orders &amp; quotes.&rdquo;
                      </p>
                    </div>

                    <p className="text-[10px] text-[#756B7B] mt-2">
                      Reach our Chennai corporate desk for product catalogs &amp; institutional supply.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=levixbiosciences@gmail.com&su=Formulation%20Inquiry%20%26%20Quotes%20-%20LEVIX%20Biosciences&body=Dear%20LEVIX%20Biosciences%20Team,%0A%0AI%20am%20reaching%20out%20to%20inquire%20about%20your%20formulations,%20product%20details,%20and%20institutional%20pricing%20quotes.%0A%0A•%20Name:%20%0A•%20Phone:%20%0A•%20Requirement:%20%0A%0AThank%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#32164F] hover:bg-[#7137A5] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-all touch-target"
                    >
                      <Mail className="w-4 h-4 text-[#D49B24]" />
                      <span>Email for Inquiry &amp; Quotes</span>
                    </a>

                    <a
                      href="mailto:levixbiosciences@gmail.com?subject=Formulation%20Inquiry%20%26%20Quotes%20-%20LEVIX%20Biosciences&body=Dear%20LEVIX%20Biosciences%20Team,%0A%0AI%20am%20reaching%20out%20to%20inquire%20about%20your%20formulations,%20product%20details,%20and%20institutional%20pricing%20quotes.%0A%0A•%20Name:%20%0A•%20Phone:%20%0A•%20Requirement:%20%0A%0AThank%20you."
                      className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#F5EFF9] text-[#7137A5] border border-[#EEE6F2] text-[11px] font-bold text-center flex items-center justify-center gap-1.5 transition-all"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Open Default Mail Client</span>
                    </a>
                  </div>
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
                    <Mail className="w-5 h-5 text-[#D49B24]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-[#32164F] font-['Manrope']">
                        Send Direct Message
                      </h3>
                      <span className="text-[10px] font-bold text-[#7137A5] bg-[#7137A5]/10 border border-[#7137A5]/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Mail className="w-2.5 h-2.5" />
                        <span>Direct Email</span>
                      </span>
                    </div>

                    <p className="text-xs text-[#756B7B] mt-1">
                      Directly routed to <strong className="text-[#7137A5]">levixbiosciences@gmail.com</strong> &amp; Chennai desk.
                    </p>
                  </div>
                </div>

                {formSubmitted ? (

                  /* =====================================================
                     SUCCESS STATE (EMAIL LAUNCH & CONFIRMATION)
                  ====================================================== */
                  <div className="p-7 rounded-2xl bg-[#F5EFF9] border border-[#E9DDF0] text-center space-y-4 animate-in fade-in duration-300">

                    <div className="relative w-14 h-14 rounded-full bg-[#7137A5] text-white mx-auto flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-7 h-7" />
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#D49B24]" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#32164F] font-['Manrope']">
                        Inquiry Ready for levixbiosciences@gmail.com
                      </h4>

                      <p className="text-xs text-[#756B7B] leading-relaxed mt-2 max-w-md mx-auto">
                        Thank you, <strong className="text-[#32164F]">{formData.name}</strong>. Your mail client was opened to transmit your inquiry to <strong className="text-[#7137A5]">levixbiosciences@gmail.com</strong>. You can also send directly via Gmail Web or WhatsApp below:
                      </p>
                    </div>

                    {/* Direct dispatch links */}
                    <div className="space-y-2 max-w-sm mx-auto pt-2">
                      <a
                        href={generateMailLinks().gmailWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#EA4335] hover:bg-[#D93025] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all touch-target"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open &amp; Send in Gmail Web</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                      </a>

                      <a
                        href={generateMailLinks().mailto}
                        className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF8FC] text-[#32164F] border border-[#E5DCE9] text-xs font-bold flex items-center justify-center gap-2 transition-all touch-target"
                      >
                        <Mail className="w-4 h-4 text-[#7137A5]" />
                        <span>Re-launch Default Email Client</span>
                      </a>

                      <a
                        href={generateMailLinks().whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all touch-target"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>Also Send via WhatsApp (+91 8870889620)</span>
                      </a>
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
                      className="mt-3 text-xs text-[#7137A5] font-bold hover:text-[#32164F] hover:underline"
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

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group w-full py-3.5 px-6 rounded-xl bg-[#7137A5] hover:bg-[#5D278C] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 touch-target"
                    >
                      <Mail className="w-4 h-4 text-[#D49B24] group-hover:scale-110 transition-transform" />

                      <span>
                        Submit Message to levixbiosciences@gmail.com
                      </span>
                    </button>

                    {/* Direct assistance */}
                    <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#756B7B]">
                      <span>WhatsApp inquiries &amp; quotes:</span>

                      <a
                        href="https://api.whatsapp.com/send/?phone=918870889620&text=Hello%20LEVIX%20Biosciences,%20I%20would%20like%20to%20make%20an%20inquiry%20and%20request%20pricing%20quotes%20for%20your%20formulations."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#25D366] hover:underline flex items-center gap-1 font-mono"
                      >
                        <MessageSquare className="w-3 h-3 fill-current" />
                        +91 8870889620
                      </a>

                      <span>•</span>

                      <span>Email:</span>
                      <a
                        href="mailto:levixbiosciences@gmail.com?subject=Formulation%20Inquiry%20-%20LEVIX%20Biosciences"
                        className="font-bold text-[#7137A5] hover:underline flex items-center gap-1"
                        title="Email levixbiosciences@gmail.com"
                      >
                        <Mail className="w-3 h-3" />
                        levixbiosciences@gmail.com
                      </a>
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
                  Need assistance or immediate pricing quotes?
                </p>

                <p className="text-[11px] text-white/55 mt-0.5">
                  &ldquo;Science You Trust, Health You Feel.&rdquo; &bull; Inquire directly on WhatsApp or call our Chennai desk.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://api.whatsapp.com/send?phone=918870889620&text=Hello%20LEVIX%20Biosciences,%20I%20would%20like%20to%20make%20an%20inquiry%20and%20request%20pricing%20quotes%20for%20your%20formulations."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Get Quotes via WhatsApp</span>
              </a>

              <a
                href="tel:+918870889620"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#32164F] text-xs font-bold hover:bg-[#F5EFF9] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 8870889620</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};