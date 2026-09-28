import React, { useEffect, useRef } from 'react';

interface DendriteBranch {
  points: { x: number; y: number }[];
  thickness: number;
  length: number;
  subBranches: DendriteBranch[];
}

interface SynapticSparks {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  size: number;
}

interface AxonConnection {
  targetIdx: number;
  cpX: number; // Bézier curve control point
  cpY: number;
  length: number;
  synapseSize: number;
}

interface BiologicalNeuron {
  x: number;
  y: number;
  radius: number;
  somaPoints: { angle: number; dist: number }[]; // Organic irregular soma membrane
  dendrites: DendriteBranch[];
  axons: AxonConnection[];
  energy: number; // 0 to 1 depolarization flash
  restingPotentialPhase: number;
  color: string;
  glowColor: string;
  lastFired: number;
}

interface ActionPotentialPulse {
  fromIdx: number;
  toIdx: number;
  cpX: number;
  cpY: number;
  progress: number; // 0 to 1
  speed: number;
  coreColor: string;
  haloColor: string;
  intensity: number;
}

interface NeuralSignalNetworkProps {
  opacity?: number;
  className?: string;
  variant?: 'dark' | 'light';
  biasPosition?: 'right' | 'center' | 'full';
  fixed?: boolean;
}

export const NeuralSignalNetwork: React.FC<NeuralSignalNetworkProps> = ({
  opacity = 0.38,
  className = '',
  variant = 'light',
  biasPosition = 'full',
  fixed = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Palette calibrated for biological nerve action potential
    const isLight = variant === 'light';
    const primaryNerveColor = isLight ? 'rgba(113, 55, 165, 0.45)' : 'rgba(192, 132, 252, 0.55)';
    const axonFiberColor = isLight ? 'rgba(113, 55, 165, 0.22)' : 'rgba(168, 85, 247, 0.3)';
    const sparkColors = isLight
      ? ['#7137A5', '#9333EA', '#D49B24', '#0284C7', '#A855F7']
      : ['#C084FC', '#38BDF8', '#FCD34D', '#F472B6', '#E9D5FF'];

    let neurons: BiologicalNeuron[] = [];
    let pulses: ActionPotentialPulse[] = [];
    let synapticSparks: SynapticSparks[] = [];
    let lastSpontaneousDepolarization = Date.now();

    // Helper: generate recursive organic dendritic branch
    const generateDendrite = (
      startX: number,
      startY: number,
      angle: number,
      depth: number,
      baseLength: number
    ): DendriteBranch => {
      const points: { x: number; y: number }[] = [{ x: startX, y: startY }];
      const segments = 4;
      const segLength = baseLength / segments;
      let currX = startX;
      let currY = startY;
      let currAngle = angle;

      for (let s = 1; s <= segments; s++) {
        // Natural biological wandering
        currAngle += (Math.random() - 0.5) * 0.38;
        currX += Math.cos(currAngle) * segLength;
        currY += Math.sin(currAngle) * segLength;
        points.push({ x: currX, y: currY });
      }

      const subBranches: DendriteBranch[] = [];
      if (depth > 1) {
        // Branch into 1 or 2 sub-dendrites
        const subCount = Math.random() > 0.4 ? 2 : 1;
        for (let b = 0; b < subCount; b++) {
          const splitAngle = currAngle + (b === 0 ? -1 : 1) * (0.35 + Math.random() * 0.4);
          subBranches.push(
            generateDendrite(currX, currY, splitAngle, depth - 1, baseLength * 0.62)
          );
        }
      }

      return {
        points,
        thickness: Math.max(0.6, depth * 0.9),
        length: baseLength,
        subBranches,
      };
    };

    const initNetwork = () => {
      neurons = [];
      pulses = [];
      synapticSparks = [];

      width = canvas.width = fixed ? window.innerWidth : (canvas.parentElement?.clientWidth || window.innerWidth);
      height = canvas.height = fixed ? window.innerHeight : (canvas.parentElement?.clientHeight || window.innerHeight);

      // Neuron population based on screen area
      const neuronCount = Math.min(Math.max(Math.floor((width * height) / 38000), 16), 34);

      for (let i = 0; i < neuronCount; i++) {
        let x = Math.random() * width;
        if (biasPosition === 'right') {
          x = Math.random() > 0.35 ? width * 0.45 + Math.random() * (width * 0.52) : Math.random() * width;
        }
        const y = Math.random() * height;
        const radius = Math.random() * 5 + 6.5;

        // Create organic multipolar soma shape (irregular perimeter)
        const somaPoints: { angle: number; dist: number }[] = [];
        const lobes = 6 + Math.floor(Math.random() * 4);
        for (let l = 0; l < lobes; l++) {
          const ang = (l / lobes) * Math.PI * 2;
          const dist = radius * (0.8 + Math.random() * 0.45);
          somaPoints.push({ angle: ang, dist });
        }

        // Generate dendritic arborization trees radiating outward
        const dendrites: DendriteBranch[] = [];
        const dendriteCount = 3 + Math.floor(Math.random() * 4);
        for (let d = 0; d < dendriteCount; d++) {
          const mainAngle = (d / dendriteCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
          const rootX = x + Math.cos(mainAngle) * (radius * 0.9);
          const rootY = y + Math.sin(mainAngle) * (radius * 0.9);
          const branchLength = radius * (3.8 + Math.random() * 4.2);
          dendrites.push(generateDendrite(rootX, rootY, mainAngle, 3, branchLength));
        }

        neurons.push({
          x,
          y,
          radius,
          somaPoints,
          dendrites,
          axons: [],
          energy: 0,
          restingPotentialPhase: Math.random() * Math.PI * 2,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          glowColor: isLight ? 'rgba(113, 55, 165, 0.7)' : 'rgba(56, 189, 248, 0.8)',
          lastFired: 0,
        });
      }

      // Establish physiological axonal pathways (curved synaptic conduits between neurons)
      for (let i = 0; i < neurons.length; i++) {
        for (let j = 0; j < neurons.length; j++) {
          if (i === j) continue;
          const n1 = neurons[i];
          const n2 = neurons[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect neurons within plausible axonal reach
          if (dist > 70 && dist < 320 && n1.axons.length < 3) {
            // Check if reverse already exists
            const existing = n1.axons.some((a) => a.targetIdx === j);
            if (!existing) {
              // Calculate curved Bézier control point with organic lateral sag
              const midX = (n1.x + n2.x) / 2;
              const midY = (n1.y + n2.y) / 2;
              const perpX = -dy / dist;
              const perpY = dx / dist;
              const curveMagnitude = (Math.random() - 0.5) * Math.min(dist * 0.38, 90);

              n1.axons.push({
                targetIdx: j,
                cpX: midX + perpX * curveMagnitude,
                cpY: midY + perpY * curveMagnitude,
                length: dist,
                synapseSize: Math.random() * 1.5 + 2.5,
              });
            }
          }
        }
      }
    };

    const handleResize = () => {
      initNetwork();
    };

    window.addEventListener('resize', handleResize);
    initNetwork();

    // Trigger an Action Potential wave down an axon
    const fireActionPotential = (fromIdx: number, targetIdx: number, axon: AxonConnection) => {
      const fromNeuron = neurons[fromIdx];
      if (!fromNeuron) return;

      fromNeuron.energy = 1.0;
      fromNeuron.lastFired = Date.now();

      pulses.push({
        fromIdx,
        toIdx: targetIdx,
        cpX: axon.cpX,
        cpY: axon.cpY,
        progress: 0,
        // Conduction velocity scaled by axon length
        speed: Math.max(0.009, Math.min(0.022, 4.2 / axon.length)),
        coreColor: '#FFFFFF',
        haloColor: fromNeuron.color,
        intensity: 1.0,
      });
    };

    // Trigger spontaneous pacemaker firing in a random neuron
    const triggerSpontaneousFiring = () => {
      if (neurons.length === 0) return;
      const readyNeurons = neurons.filter((n) => Date.now() - n.lastFired > 1400 && n.axons.length > 0);
      const chosen = readyNeurons.length > 0
        ? readyNeurons[Math.floor(Math.random() * readyNeurons.length)]
        : neurons[Math.floor(Math.random() * neurons.length)];

      if (chosen && chosen.axons.length > 0) {
        const fromIdx = neurons.indexOf(chosen);
        const axon = chosen.axons[Math.floor(Math.random() * chosen.axons.length)];
        fireActionPotential(fromIdx, axon.targetIdx, axon);
      }
    };

    // Spawn 2-3 initial impulses
    for (let k = 0; k < 3; k++) {
      triggerSpontaneousFiring();
    }

    // Helper: Draw dendritic arborization tree
    const drawDendriteBranch = (branch: DendriteBranch, somaEnergy: number) => {
      if (branch.points.length < 2) return;

      ctx.beginPath();
      ctx.moveTo(branch.points[0].x, branch.points[0].y);

      for (let p = 1; p < branch.points.length - 1; p++) {
        const xc = (branch.points[p].x + branch.points[p + 1].x) / 2;
        const yc = (branch.points[p].y + branch.points[p + 1].y) / 2;
        ctx.quadraticCurveTo(branch.points[p].x, branch.points[p].y, xc, yc);
      }
      ctx.lineTo(
        branch.points[branch.points.length - 1].x,
        branch.points[branch.points.length - 1].y
      );

      const alpha = isLight
        ? 0.16 + somaEnergy * 0.35
        : 0.22 + somaEnergy * 0.45;
      ctx.strokeStyle = isLight
        ? `rgba(113, 55, 165, ${alpha})`
        : `rgba(192, 132, 252, ${alpha})`;
      ctx.lineWidth = branch.thickness;
      ctx.stroke();

      // Draw tiny dendritic spines (receptor boutons)
      if (branch.subBranches.length === 0 && branch.points.length > 2) {
        const tip = branch.points[branch.points.length - 1];
        ctx.beginPath();
        ctx.arc(tip.x, tip.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? 'rgba(212, 155, 36, 0.45)' : 'rgba(56, 189, 248, 0.55)';
        ctx.fill();
      }

      // Recurse sub-branches
      for (const sub of branch.subBranches) {
        drawDendriteBranch(sub, somaEnergy);
      }
    };

    // Main Bio-Electrical Nerve Simulation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      // Pacemaker spontaneous action potentials (every 400-600ms)
      if (now - lastSpontaneousDepolarization > 480 && pulses.length < 12) {
        triggerSpontaneousFiring();
        lastSpontaneousDepolarization = now;
      }

      // ========================================================
      // 1. DRAW AXONS (CURVED BÉZIER NERVE CONDUITS)
      // ========================================================
      for (let i = 0; i < neurons.length; i++) {
        const n1 = neurons[i];

        for (const axon of n1.axons) {
          const n2 = neurons[axon.targetIdx];
          if (!n2) continue;

          // Main biological axon sheath (smooth curved Bézier conduit)
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.quadraticCurveTo(axon.cpX, axon.cpY, n2.x, n2.y);
          ctx.strokeStyle = axonFiberColor;
          ctx.lineWidth = 1.1;
          ctx.stroke();

          // Axon sheath inner myelin guide line
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.quadraticCurveTo(axon.cpX, axon.cpY, n2.x, n2.y);
          ctx.strokeStyle = isLight ? 'rgba(212, 155, 36, 0.12)' : 'rgba(56, 189, 248, 0.16)';
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Synaptic Bouton (bulbous terminal at receptor site)
          ctx.beginPath();
          ctx.arc(n2.x, n2.y, axon.synapseSize, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? 'rgba(113, 55, 165, 0.25)' : 'rgba(192, 132, 252, 0.35)';
          ctx.fill();
        }
      }

      // ========================================================
      // 2. UPDATE & DRAW TRAVERSING ACTION POTENTIAL IMPULSES
      // ========================================================
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        const from = neurons[pulse.fromIdx];
        const to = neurons[pulse.toIdx];

        if (!from || !to) {
          pulses.splice(p, 1);
          continue;
        }

        // Bézier position formula: B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
        const t = Math.min(1, pulse.progress);
        const invT = 1 - t;
        const curX = invT * invT * from.x + 2 * invT * t * pulse.cpX + t * t * to.x;
        const curY = invT * invT * from.y + 2 * invT * t * pulse.cpY + t * t * to.y;

        // Tail position for electrical conduction wake
        const tailT = Math.max(0, t - 0.16);
        const invTailT = 1 - tailT;
        const tailX = invTailT * invTailT * from.x + 2 * invTailT * tailT * pulse.cpX + tailT * tailT * to.x;
        const tailY = invTailT * invTailT * from.y + 2 * invTailT * tailT * pulse.cpY + tailT * tailT * to.y;

        // A. Draw Luminous Action Potential Impulse Tail
        const grad = ctx.createLinearGradient(tailX, tailY, curX, curY);
        if (isLight) {
          grad.addColorStop(0, 'rgba(113, 55, 165, 0)');
          grad.addColorStop(0.4, 'rgba(147, 51, 234, 0.45)');
          grad.addColorStop(0.8, pulse.haloColor);
          grad.addColorStop(1, '#FFFFFF');
        } else {
          grad.addColorStop(0, 'rgba(192, 132, 252, 0)');
          grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.5)');
          grad.addColorStop(0.9, pulse.haloColor);
          grad.addColorStop(1, '#FFFFFF');
        }

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.quadraticCurveTo(
          pulse.cpX,
          pulse.cpY,
          curX,
          curY
        );
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.4;
        ctx.stroke();

        // B. White-Hot Electrical Pulse Head (Action Potential depolarization wavefront)
        ctx.beginPath();
        ctx.arc(curX, curY, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = pulse.haloColor;
        ctx.shadowBlur = isLight ? 10 : 16;
        ctx.fill();

        // Corona glow
        ctx.beginPath();
        ctx.arc(curX, curY, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? 'rgba(147, 51, 234, 0.35)' : 'rgba(56, 189, 248, 0.45)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // C. Arrival at Synapse (Excitatory Synaptic Transmission)
        if (pulse.progress >= 1) {
          // Trigger postsynaptic excitation flash in recipient neuron
          to.energy = 1.0;

          // Spawn burst of neurotransmitter / synaptic sparks
          const sparkCount = 6 + Math.floor(Math.random() * 5);
          for (let s = 0; s < sparkCount; s++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = 0.8 + Math.random() * 1.8;
            synapticSparks.push({
              x: to.x,
              y: to.y,
              vx: Math.cos(angle) * velocity,
              vy: Math.sin(angle) * velocity,
              alpha: 1.0,
              decay: 0.04 + Math.random() * 0.03,
              color: isLight ? '#D49B24' : '#38BDF8',
              size: Math.random() * 1.6 + 1.2,
            });
          }

          // CASCADING REFLEX: Recipient neuron fires forward along its own axons!
          if (to.axons.length > 0 && Math.random() < 0.65 && pulses.length < 14) {
            const nextAxon = to.axons[Math.floor(Math.random() * to.axons.length)];
            setTimeout(() => {
              fireActionPotential(pulse.toIdx, nextAxon.targetIdx, nextAxon);
            }, 60 + Math.random() * 50); // Physiological synaptic delay (~70ms)
          }

          pulses.splice(p, 1);
        }
      }

      // ========================================================
      // 3. UPDATE & DRAW SYNAPTIC TRANSMISSION SPARKS
      // ========================================================
      for (let s = synapticSparks.length - 1; s >= 0; s--) {
        const spark = synapticSparks[s];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.94;
        spark.vy *= 0.94;
        spark.alpha -= spark.decay;

        if (spark.alpha <= 0) {
          synapticSparks.splice(s, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.globalAlpha = spark.alpha * opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // ========================================================
      // 4. DRAW NEURONS (SOMA, NUCLEUS, DENDRITIC TREES)
      // ========================================================
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];

        // Physiological membrane breathing
        n.restingPotentialPhase += 0.025;
        const breath = Math.sin(n.restingPotentialPhase) * 0.6;
        const currentRadius = n.radius + breath + n.energy * 2.8;

        // Energy dissipation after depolarization
        if (n.energy > 0) {
          n.energy *= 0.92;
          if (n.energy < 0.01) n.energy = 0;
        }

        // A. Draw Dendritic Arborization
        for (const dendrite of n.dendrites) {
          drawDendriteBranch(dendrite, n.energy);
        }

        // B. Depolarization Flash Glow (Synaptic Activation Halo)
        if (n.energy > 0.04) {
          const haloGrad = ctx.createRadialGradient(
            n.x,
            n.y,
            currentRadius * 0.5,
            n.x,
            n.y,
            currentRadius * 4.5
          );

          if (isLight) {
            haloGrad.addColorStop(0, `rgba(147, 51, 234, ${n.energy * 0.55})`);
            haloGrad.addColorStop(0.6, `rgba(212, 155, 36, ${n.energy * 0.25})`);
            haloGrad.addColorStop(1, 'rgba(113, 55, 165, 0)');
          } else {
            haloGrad.addColorStop(0, `rgba(56, 189, 248, ${n.energy * 0.7})`);
            haloGrad.addColorStop(0.6, `rgba(252, 211, 77, ${n.energy * 0.3})`);
            haloGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
          }

          ctx.beginPath();
          ctx.arc(n.x, n.y, currentRadius * 4.5, 0, Math.PI * 2);
          ctx.fillStyle = haloGrad;
          ctx.fill();
        }

        // C. Draw Multipolar Organic Soma (Cell Body)
        ctx.beginPath();
        const p0 = n.somaPoints[0];
        const startRad = (p0.dist / n.radius) * currentRadius;
        ctx.moveTo(n.x + Math.cos(p0.angle) * startRad, n.y + Math.sin(p0.angle) * startRad);

        for (let pt = 1; pt < n.somaPoints.length; pt++) {
          const p = n.somaPoints[pt];
          const rad = (p.dist / n.radius) * currentRadius;
          ctx.lineTo(n.x + Math.cos(p.angle) * rad, n.y + Math.sin(p.angle) * rad);
        }
        ctx.closePath();

        // Soma Fill: Bio-electric luminescence when depolarizing
        if (n.energy > 0.1) {
          ctx.fillStyle = isLight ? '#7137A5' : '#FFFFFF';
          ctx.shadowColor = n.color;
          ctx.shadowBlur = 14;
        } else {
          ctx.fillStyle = isLight ? 'rgba(113, 55, 165, 0.55)' : 'rgba(192, 132, 252, 0.65)';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // D. Neuron Nucleus (Cell Core)
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(1.8, currentRadius * 0.38), 0, Math.PI * 2);
        ctx.fillStyle = n.energy > 0.1
          ? (isLight ? '#FFFFFF' : '#38BDF8')
          : (isLight ? '#D49B24' : '#FCD34D');
        ctx.fill();

        // E. Cell Membrane Outline
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 1.15, 0, Math.PI * 2);
        ctx.strokeStyle = isLight
          ? `rgba(113, 55, 165, ${0.2 + n.energy * 0.4})`
          : `rgba(192, 132, 252, ${0.25 + n.energy * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, biasPosition, fixed, opacity]);

  return (
    <div
      className={`${fixed ? 'fixed' : 'absolute'} inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
