import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
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
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#0066CC] active:bg-[#0052CC] text-white text-xs font-bold font-mono flex items-center justify-center gap-1.5 shadow touch-target"
          aria-label="Call 8807608896"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>8807608896</span>
        </a>

        <a
          href={`tel:${companyInfo.contact.headquarters.phone2}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-white/10 active:bg-white/20 text-[#38BDF8] border border-white/15 text-xs font-bold font-mono flex items-center justify-center gap-1.5 touch-target"
          aria-label="Call 8807608896"
        >
          <Phone className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>8807608896</span>
        </a>

        <a
          href="https://wa.me/918807608896?text=Hello%20LEVIX%20Bio%20Science,%20I%20would%20like%20to%20inquire%20about%20your%20formulations."
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow touch-target"
          aria-label="Chat with LEVIX Bio Science on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
