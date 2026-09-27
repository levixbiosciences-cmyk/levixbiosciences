import React from 'react';
import { Phone, MessageSquare, Mail } from 'lucide-react';
import { companyInfo } from '../../data/company';

export const FloatingQuickCall: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B1324]/95 backdrop-blur-md border-t border-white/15 p-2 px-3 shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${companyInfo.contact.headquarters.phone1}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#7137A5] active:bg-[#5D278C] text-white text-xs font-bold font-mono flex items-center justify-center gap-1.5 shadow touch-target"
          aria-label={`Call ${companyInfo.contact.headquarters.phone1}`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{companyInfo.contact.headquarters.phone1}</span>
        </a>

        <a
          href="mailto:levixbiosciences@gmail.com?subject=Formulation%20Inquiry%20-%20LEVIX%20Biosciences"
          className="flex-1 py-2.5 px-2 rounded-xl bg-white/10 active:bg-white/20 text-[#D49B24] border border-white/15 text-xs font-bold flex items-center justify-center gap-1.5 touch-target"
          aria-label="Email levixbiosciences@gmail.com for inquiry"
        >
          <Mail className="w-3.5 h-3.5 text-[#D49B24]" />
          <span>Email Inquiry</span>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=918870889620&text=Hello%20LEVIX%20Biosciences,%20I%20would%20like%20to%20make%20an%20inquiry%20and%20request%20pricing%20quotes%20for%20your%20formulations."
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow touch-target"
          aria-label="Chat with LEVIX Biosciences on WhatsApp for inquiry & quotes"
          title="WhatsApp Inquiry & Quotes"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
        </a>
      </div>
    </aside>
  );
};
