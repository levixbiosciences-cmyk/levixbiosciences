import React, { useEffect, useRef } from 'react';

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  pulsePhase: number;
  energy: number; // Flash intensity when signal arrives
  color: string;
  connections: number[];
}

interface ActionPotential {
  fromIndex: number;
  toIndex: number;
  progress: number; // 0 to 1
  speed: number;
  color: string;
  size: number;
}

interface NeuralSignalNetworkProps {
  opacity?: number;
  className?: string;
  variant?: 'dark' | 'light';
  biasPosition?: 'right' | 'center' | 'full';
}

export const NeuralSignalNetwork: React.FC<NeuralSignalNetworkProps> = ({
  opacity = 0.35,
  className = '',
  variant = 'dark',
  biasPosition = 'full',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNetwork();
    };

    window.addEventListener('resize', handleResize);

    // Color palettes tuned for light vs dark backgrounds
    const colors =
      variant === 'light'
        ? [
            '#7137A5', // Royal purple
            '#9333EA', // Vivid violet
            '#D49B24', // Pharma amber/gold
            '#0284C7', // Deep neuro cyan
            '#8B5CF6', // Electric violet
          ]
        : [
            '#C084FC', // Light purple
            '#38BDF8', // Cyan neural spark
            '#FCD34D', // Gold synaptic flash
            '#E879F9', // Magenta
            '#93C5FD', // Soft electric blue
          ];

    let neurons: Neuron[] = [];
    let signals: ActionPotential[] = [];
    let lastSignalSpawn = Date.now();

    const initNetwork = () => {
      neurons = [];
      signals = [];

      // Calculate neuron count based on screen area
      const count = Math.min(Math.max(Math.floor((width * height) / 19000), 24), 52);

      for (let i = 0; i < count; i++) {
        let x = Math.random() * width;
        if (biasPosition === 'right') {
          // Bias 70% of neurons to the right half
          x = Math.random() > 0.3 ? width * 0.4 + Math.random() * (width * 0.6) : Math.random() * width;
        }

        const y = Math.random() * height;

        neurons.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          baseRadius: variant === 'light' ? Math.random() * 2.0 + 1.6 : Math.random() * 2.2 + 1.8,
          pulsePhase: Math.random() * Math.PI * 2,
          energy: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          connections: [],
        });
      }

      // Pre-calculate synaptic connections between nearby neurons
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180 && neurons[i].connections.length < 4 && neurons[j].connections.length < 4) {
            neurons[i].connections.push(j);
            neurons[j].connections.push(i);
          }
        }
      }
    };

    initNetwork();

    const spawnSignal = (fromIdx?: number) => {
      if (neurons.length < 2) return;
      const startIdx =
        fromIdx !== undefined && fromIdx >= 0 && fromIdx < neurons.length
          ? fromIdx
          : Math.floor(Math.random() * neurons.length);

      const neuron = neurons[startIdx];
      if (!neuron || neuron.connections.length === 0) return;

      const targetIdx = neuron.connections[Math.floor(Math.random() * neuron.connections.length)];

      const sigColor =
        variant === 'light'
          ? Math.random() > 0.5 ? '#7137A5' : '#D49B24'
          : Math.random() > 0.5 ? '#38BDF8' : '#FCD34D';

      signals.push({
        fromIndex: startIdx,
        toIndex: targetIdx,
        progress: 0,
        speed: 0.007 + Math.random() * 0.011,
        color: sigColor,
        size: variant === 'light' ? Math.random() * 1.2 + 1.8 : Math.random() * 1.5 + 2.2,
      });
    };

    // Initial signals
    for (let k = 0; k < 5; k++) {
      spawnSignal();
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Periodically spawn new action potentials
      const now = Date.now();
      if (now - lastSignalSpawn > 320 && signals.length < 16) {
        spawnSignal();
        lastSignalSpawn = now;
      }

      // 1. Draw Axons (Neural connections)
      for (let i = 0; i < neurons.length; i++) {
        const n1 = neurons[i];

        for (const targetIdx of n1.connections) {
          if (targetIdx > i) {
            const n2 = neurons[targetIdx];
            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 210) {
              const maxDistRatio = 1 - dist / 210;
              const lineAlpha =
                variant === 'light'
                  ? maxDistRatio * 0.16
                  : maxDistRatio * 0.22;

              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle =
                variant === 'light'
                  ? `rgba(113, 55, 165, ${lineAlpha})`
                  : `rgba(192, 132, 252, ${lineAlpha})`;
              ctx.lineWidth = 0.9;
              ctx.stroke();

              // Secondary subtle cyan/gold guide filament
              if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.strokeStyle =
                  variant === 'light'
                    ? `rgba(212, 155, 36, ${lineAlpha * 0.6})`
                    : `rgba(56, 189, 248, ${lineAlpha * 0.6})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }

      // 2. Update and Draw Traveling Action Potentials (Nerve Signals)
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        const from = neurons[sig.fromIndex];
        const to = neurons[sig.toIndex];

        if (!from || !to) {
          signals.splice(s, 1);
          continue;
        }

        const curX = from.x + (to.x - from.x) * sig.progress;
        const curY = from.y + (to.y - from.y) * sig.progress;

        const tailProgress = Math.max(0, sig.progress - 0.12);
        const tailX = from.x + (to.x - from.x) * tailProgress;
        const tailY = from.y + (to.y - from.y) * tailProgress;

        // Draw electrical signal trail
        const grad = ctx.createLinearGradient(tailX, tailY, curX, curY);
        if (variant === 'light') {
          grad.addColorStop(0, 'rgba(113, 55, 165, 0)');
          grad.addColorStop(0.5, 'rgba(113, 55, 165, 0.4)');
          grad.addColorStop(1, sig.color);
        } else {
          grad.addColorStop(0, 'rgba(168, 85, 247, 0)');
          grad.addColorStop(0.6, sig.color === '#38BDF8' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(252, 211, 77, 0.4)');
          grad.addColorStop(1, sig.color);
        }

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(curX, curY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = sig.size;
        ctx.stroke();

        // Draw glowing signal pulse tip
        ctx.beginPath();
        ctx.arc(curX, curY, sig.size * 1.25, 0, Math.PI * 2);
        ctx.fillStyle = variant === 'light' ? '#7137A5' : '#FFFFFF';
        ctx.shadowColor = sig.color;
        ctx.shadowBlur = variant === 'light' ? 6 : 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Signal arrived at synaptic target
        if (sig.progress >= 1) {
          to.energy = 1.0;
          if (Math.random() < 0.42 && signals.length < 18) {
            spawnSignal(sig.toIndex);
          }
          signals.splice(s, 1);
        }
      }

      // 3. Update & Draw Neurons (Soma and Synapses)
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 15 || n.x > width - 15) n.vx *= -1;
        if (n.y < 15 || n.y > height - 15) n.vy *= -1;

        n.pulsePhase += 0.03;
        const breathing = Math.sin(n.pulsePhase) * 0.5;
        const currentRadius = Math.max(1, n.baseRadius + breathing + n.energy * 2.2);

        if (n.energy > 0) {
          n.energy *= 0.91;
          if (n.energy < 0.02) n.energy = 0;
        }

        // Draw outer glowing halo when synapse activates
        if (n.energy > 0.05) {
          const haloGrad = ctx.createRadialGradient(
            n.x,
            n.y,
            currentRadius * 0.5,
            n.x,
            n.y,
            currentRadius * 4.2
          );

          if (variant === 'light') {
            haloGrad.addColorStop(0, `rgba(113, 55, 165, ${n.energy * 0.45})`);
            haloGrad.addColorStop(1, 'rgba(113, 55, 165, 0)');
          } else {
            haloGrad.addColorStop(0, `rgba(56, 189, 248, ${n.energy * 0.6})`);
            haloGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
          }

          ctx.beginPath();
          ctx.arc(n.x, n.y, currentRadius * 4.2, 0, Math.PI * 2);
          ctx.fillStyle = haloGrad;
          ctx.fill();
        }

        // Draw Neuron Soma (core)
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle =
          n.energy > 0.1
            ? variant === 'light' ? '#4A1D75' : '#FFFFFF'
            : n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = n.energy > 0.1 ? 12 : 5;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Small dendrite ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 1.7, 0, Math.PI * 2);
        ctx.strokeStyle =
          variant === 'light'
            ? `rgba(113, 55, 165, ${0.12 + n.energy * 0.3})`
            : `rgba(192, 132, 252, ${0.15 + n.energy * 0.4})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, biasPosition]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
