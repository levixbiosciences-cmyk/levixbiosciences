import React, { useState } from 'react';
import { X, Dna, Activity, Zap, CheckCircle2, Layers, ArrowRight, Shield } from 'lucide-react';

interface MechanismModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MechanismModal: React.FC<MechanismModalProps> = ({ isOpen, onClose }) => {
  const [selectedPathway, setSelectedPathway] = useState<'neuro' | 'cardio' | 'metabolic' | 'renal'>('neuro');

  if (!isOpen) return null;

  const pathways = {
    neuro: {
      name: 'Kennedy Phospholipid Pathway (LMPDS™)',
      target: 'Cortical Neurons & Blood-Brain Barrier Endothelium',
      activeAgents: 'Liposomal Citicoline Sodium + Phosphatidylserine',
      gain: '+380% Cerebral Uptake',
      description: 'Phosphorylated choline intermediates cross the blood-brain barrier via specialized neutral amino/lipid carriers. Inside the neuronal cytosol, CTP-phosphocholine cytidylyltransferase catalyzes the rate-limiting conversion into CDP-choline, directly restoring damaged phospholipid bilayers.',
      steps: [
        'Gastric acid protection via lipid-matrix phosphosome encapsulation.',
        'Carrier-mediated endothelial transcytosis across cerebral capillary tight junctions.',
        'Enzymatic incorporation into neuronal membrane phosphatidylcholine & sphingomyelin.',
        'Simultaneous stimulation of acetylcholine neurotransmitter pool turnover.'
      ]
    },
    cardio: {
      name: 'Endothelial eNOS & MGP Carboxylation (SMEDDS™)',
      target: 'Vascular Endothelial Intima & Tunica Media',
      activeAgents: 'Water-Dispersible Ubiquinol + All-Trans MK-7',
      gain: '+420% Area-Under-Curve',
      description: 'Upon contact with gastric fluid, SMEDDS pre-concentrate spontaneously self-emulsifies into sub-50nm micelles. Ubiquinol enters cardiomyocyte inner mitochondrial membranes to sustain ATP synthase flux, while MK-7 carboxylates Matrix Gla Protein, clearing calcium deposits from arterial walls.',
      steps: [
        'Spontaneous nano-micelle self-emulsification bypassing bile-salt dependency.',
        'Upregulation of endothelial nitric oxide synthase (eNOS) dimer coupling.',
        'Carboxylation of Matrix Gla Protein preventing smooth muscle calcification.',
        'Protection of circulating LDL subfractions from oxidative modification.'
      ]
    },
    metabolic: {
      name: 'Transketolase & AGE-RAGE Interception',
      target: 'Peripheral Nerve Axons & Podocyte Glomeruli',
      activeAgents: 'Stabilized Sodium R-Alpha Lipoate + Lipophilic Benfotiamine',
      gain: '5x Tissue Thiamine Pyrophosphate',
      description: 'High intracellular glucose flux overwhelms standard glycolysis, diverting fructose-6-phosphate into damaging hexosamine and polyol pathways. Benfotiamine activates transketolase, safely shunting glucose metabolites into the non-oxidative pentose phosphate cycle.',
      steps: [
        'Lipophilic benfotiamine passes smoothly through nerve perineurial sheaths.',
        'Activation of thiamine-dependent transketolase enzyme in endothelial cells.',
        'Direct suppression of protein kinase C (PKC) beta-isoform activation.',
        'Neutralization of advanced glycation end-products (AGEs) and ROS.'
      ]
    },
    renal: {
      name: 'Enteric Gut-Kidney Nitrogenous Cleanser',
      target: 'Colonic Mucosal Barrier & Renal Tubulointerstitium',
      activeAgents: 'Targeted Enteric Probiotic Consortium + Taurine-NAC',
      gain: '-14.8% Serum Urea Nitrogen',
      description: 'Delayed-release enteric DRcaps™ release urease-active probiotic strains specifically in the alkaline distal ileum and cecum. As circulating nitrogenous wastes diffuse into the bowel lumen, bacterial enzymes metabolize urea and creatinine before they can re-enter renal microcirculation.',
      steps: [
        'pH-triggered enteric release protecting bacterial viability from stomach acid.',
        'Enzymatic breakdown of urea, uric acid, and creatinine across the colonic wall.',
        'Restoration of intra-renal glutathione pools in proximal tubular cells.',
        'Reduction of renal tubular oxidative hyperfiltration stress.'
      ]
    }
  };

  const current = pathways[selectedPathway];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071521]/80 backdrop-blur-md">
      <div 
        className="w-full max-w-3xl bg-[#0B1F33] border border-[#B9D8D6]/20 rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#087F8C]/20 border border-[#087F8C]/40 text-[#087F8C]">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Manrope']">
                Scientific Mechanism of Action Visualizer
              </h3>
              <p className="text-xs text-[#B9D8D6]">
                Targeted Cellular Pathways &amp; Delivery Biokinetics
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
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Pathway Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'neuro', label: 'Neurology (LMPDS™)' },
              { id: 'cardio', label: 'Cardio-Vascular (SMEDDS)' },
              { id: 'metabolic', label: 'Metabolic & AGEs' },
              { id: 'renal', label: 'Renal Gut-Kidney' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedPathway(tab.id as any)}
                className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-center ${
                  selectedPathway === tab.id
                    ? 'bg-[#087F8C] text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-[#B9D8D6] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Mechanism Deep Dive Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#071521] to-[#0E2842] border border-white/10 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-[#0E9AA6] uppercase tracking-wider">
                  Target: {current.target}
                </span>
                <h4 className="text-xl font-bold text-white font-['Manrope'] mt-0.5">
                  {current.name}
                </h4>
              </div>
              <span className="self-start sm:self-auto text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#087F8C]/20 border border-[#087F8C] text-[#B9D8D6]">
                {current.gain}
              </span>
            </div>

            <p className="text-sm text-[#B9D8D6]/90 leading-relaxed">
              {current.description}
            </p>

            {/* Step-by-Step Bio-Mechanism */}
            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-mono uppercase text-[#087F8C] font-semibold">
                Pharmacokinetic Cascade Sequence
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.steps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-start gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#087F8C] px-1.5 py-0.5 rounded bg-black/20">
                      0{idx + 1}
                    </span>
                    <p className="text-xs text-white/90 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-[#B9D8D6] flex items-center justify-between">
              <div>
                <span className="text-[#66737F] font-mono">Active Formulation Matrix: </span>
                <span className="font-semibold text-white">{current.activeAgents}</span>
              </div>
              <Shield className="w-4 h-4 text-[#087F8C]" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#071521] border-t border-white/10 flex items-center justify-between shrink-0 text-xs text-[#66737F]">
          <span>NovaThera Cellular Pharmacology Unit</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Close Visualizer
          </button>
        </div>
      </div>
    </div>
  );
};
