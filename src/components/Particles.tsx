import { useEffect, useRef } from 'react';

interface ParticlesProps {
  count?: number;
  colors?: string[];
}

export default function Particles({ count = 20, colors = ['rgba(16, 185, 129, 0.4)', 'rgba(14, 165, 233, 0.3)', 'rgba(52, 211, 153, 0.3)'] }: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 8 + 3;
      const x = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;
      const color = colors[Math.floor(Math.random() * colors.length)];

      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        bottom: -20px;
        background: ${color};
        animation: particleFloat ${duration}s ${delay}s linear infinite;
        box-shadow: 0 0 ${size * 2}px ${color};
      `;
      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, [count, colors]);

  return <div ref={containerRef} className="particles-container" />;
}
