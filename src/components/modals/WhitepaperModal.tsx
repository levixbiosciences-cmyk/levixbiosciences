import React from 'react';
import { X, FileText, Download, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ScientificPaper } from '../../types';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  paper: ScientificPaper | null;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose, paper }) => {
  if (!isOpen || !paper) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071521]/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-[#0B1F33] border border-[#B9D8D6]/20 rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#087F8C]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#0E9AA6] tracking-wider">
                Peer-Reviewed Clinical Study
              </span>
              <h3 className="text-base sm:text-lg font-bold font-['Manrope'] line-clamp-1">
                {paper.title}
              </h3>
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
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 rounded-2xl bg-[#071521] border border-white/10 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-mono text-[#087F8C] font-semibold">{paper.journal}</span>
              <span className="text-[#66737F] font-mono">Published {paper.year}</span>
            </div>
            <p className="text-xs text-[#B9D8D6]">
              <span className="text-[#66737F]">Authors: </span>{paper.authors}
            </p>
            <p className="text-[11px] font-mono text-[#66737F]">
              DOI: {paper.doi}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#087F8C]">
              Abstract &amp; Primary Outcomes
            </h4>
            <p className="text-sm text-[#B9D8D6]/90 leading-relaxed bg-white/[0.03] p-4 rounded-2xl border border-white/5">
              {paper.abstract}
            </p>
          </div>

          <div className="space-y-2 text-xs text-[#66737F] border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#087F8C]" />
              <span>Conducted under ICH-GCP ethics committee guidelines. Demo clinical evaluation dossier.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#071521] border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-xs text-[#66737F]">Category: {paper.category}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                alert(`Downloading Clinical Dossier: ${paper.doi} (Demo PDF)`);
              }}
              className="px-4 py-2 rounded-xl bg-[#087F8C] hover:bg-[#0E9AA6] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Summary</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
