'use client';
import { useEffect, useState, useRef } from 'react';
import { animate, useMotionValue, useTransform, motion } from 'motion/react';

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-noise opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.55)_100%)]"></div>
      <div className="relative z-20 w-full max-w-[1100px] p-[clamp(1.2rem,3vw,3rem)]">
        {children}
      </div>
    </motion.div>
  );
}

export function Blob({ className, style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <div 
      className={`absolute rounded-full blur-[90px] ${className}`}
      style={style}
    />
  );
}

export function AnimatedCounter({ value, suffix = '', prefix = '', className = '' }: { value: number, suffix?: string, prefix?: string, className?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return (
    <span className={className}>
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export function AnimatedBar({ value, color1, color2, delay = 0 }: { value: number, color1: string, color2: string, delay?: number }) {
  return (
    <motion.div
      initial={{ height: "0%" }}
      animate={{ height: `${value}%` }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="w-full rounded-t-[5px]"
      style={{ background: `linear-gradient(180deg, ${color1}, ${color2})` }}
    />
  );
}

export function AnimatedHorizontalBar({ value, color1, color2, delay = 0 }: { value: number, color1: string, color2: string, delay?: number }) {
  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="h-full rounded-[11px]"
      style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }}
    />
  );
}

export function RadarChart() {
  return (
    <svg viewBox="0 0 300 300" className="w-[260px] h-[260px]">
      <defs>
        <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9d5cff" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#ff4f8b" stopOpacity="0.15"/>
        </linearGradient>
      </defs>
      <polygon points="150,50 238,110 210,210 90,210 62,110" fill="none" stroke="rgba(157,92,255,0.12)" strokeWidth="0.8"/>
      <polygon points="150,70 218,118 196,198 104,198 82,118" fill="none" stroke="rgba(157,92,255,0.1)" strokeWidth="0.6"/>
      <polygon points="150,90 198,126 182,186 118,186 102,126" fill="none" stroke="rgba(157,92,255,0.08)" strokeWidth="0.6"/>
      <polygon points="150,110 178,134 168,174 132,174 122,134" fill="none" stroke="rgba(157,92,255,0.06)" strokeWidth="0.5"/>
      <line x1="150" y1="150" x2="150" y2="50" stroke="rgba(157,92,255,0.2)" strokeWidth="0.8"/>
      <line x1="150" y1="150" x2="238" y2="110" stroke="rgba(157,92,255,0.2)" strokeWidth="0.8"/>
      <line x1="150" y1="150" x2="210" y2="210" stroke="rgba(157,92,255,0.2)" strokeWidth="0.8"/>
      <line x1="150" y1="150" x2="90" y2="210" stroke="rgba(157,92,255,0.2)" strokeWidth="0.8"/>
      <line x1="150" y1="150" x2="62" y2="110" stroke="rgba(157,92,255,0.2)" strokeWidth="0.8"/>
      
      <motion.polygon 
        points="150,60 218,79 189,189 117,183 117,95"
        fill="url(#rg1)" stroke="#9d5cff" strokeWidth="2"
        initial={{ strokeDasharray: 800, strokeDashoffset: 800 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      />
      <motion.g 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <circle cx="150" cy="60" r="4" fill="#9d5cff"/>
        <circle cx="218" cy="79" r="4" fill="#ff4f8b"/>
        <circle cx="189" cy="189" r="4" fill="#ffb84f"/>
        <circle cx="117" cy="183" r="4" fill="#9d5cff"/>
        <circle cx="117" cy="95" r="4" fill="#ff4f8b"/>
      </motion.g>
      <text x="150" y="42" textAnchor="middle" fill="#f1f0ff" fontSize="9.28" fontWeight="700">Combo Power</text>
      <text x="252" y="106" textAnchor="start" fill="#f1f0ff" fontSize="9.28" fontWeight="700">Removal</text>
      <text x="220" y="222" textAnchor="start" fill="#f1f0ff" fontSize="9.28" fontWeight="700">Card Draw</text>
      <text x="82" y="222" textAnchor="end" fill="#f1f0ff" fontSize="9.28" fontWeight="700">Tempo</text>
      <text x="52" y="106" textAnchor="end" fill="#f1f0ff" fontSize="9.28" fontWeight="700">Aggro Defense</text>
    </svg>
  );
}

export function DonutChart() {
  return (
    <svg width="180" height="180" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9d5cff"/>
          <stop offset="100%" stopColor="#7b3de0"/>
        </linearGradient>
        <linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4f8b"/>
          <stop offset="100%" stopColor="#cc2e6b"/>
        </linearGradient>
        <linearGradient id="dg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb84f"/>
          <stop offset="100%" stopColor="#cc8a20"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(157,92,255,0.1)" strokeWidth="18"/>
      
      <motion.circle 
        cx="60" cy="60" r="40" fill="none" stroke="url(#dg1)" strokeWidth="18" 
        transform="rotate(-90 60 60)" 
        strokeDasharray="251.3" 
        initial={{ strokeDashoffset: 251.3 }}
        animate={{ strokeDashoffset: 251.3 - (0.47 * 251.3) }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      />
      <motion.circle 
        cx="60" cy="60" r="40" fill="none" stroke="url(#dg2)" strokeWidth="18" 
        transform="rotate(79.5 60 60)" 
        strokeDasharray="118 251.3" 
        initial={{ strokeDashoffset: 251.3 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        style={{ opacity: 0.85 }}
      />
      <motion.circle 
        cx="60" cy="60" r="40" fill="none" stroke="url(#dg3)" strokeWidth="18" 
        transform="rotate(251 60 60)" 
        strokeDasharray="16.6 251.3" 
        initial={{ strokeDashoffset: 251.3 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
        style={{ opacity: 0.85 }}
      />
      <text x="60" y="56" textAnchor="middle" fill="#f1f0ff" fontSize="15.2" fontWeight="900" fontFamily="Inter">30</text>
      <text x="60" y="68" textAnchor="middle" fill="#6b6490" fontSize="7.2" letterSpacing="1">CARDS</text>
    </svg>
  );
}

export function ParticleCanvas({ interactive = true, count = 55 }: { interactive?: boolean, count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let mx = -1000, my = -1000;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2.5 + 0.8,
      alpha: Math.random() * 0.35 + 0.1
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const handleMouseLeave = () => { mx = -1000; my = -1000; };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        if (interactive) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120 * 2;
            p.vx += (dx / dist) * force * 0.1;
            p.vy += (dy / dist) * force * 0.1;
          }
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(157, 92, 255, ${p.alpha})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [interactive, count]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full pointer-events-none" />;
}

export function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[99] pointer-events-none transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(157,92,255,0.06), transparent 40%)`
      }}
    />
  );
}

export function HeatmapCell({ title, desc, gradient, shadow }: { title: string, desc: string, gradient: string, shadow?: string }) {
  return (
    <div 
      className="group relative flex flex-col items-center justify-center p-1.5 text-center rounded-lg cursor-default transition-all duration-200 hover:scale-[1.04] hover:z-10 min-h-[40px]"
      style={{ background: gradient, boxShadow: shadow }}
    >
      <span className="text-[0.72rem] font-bold text-text">{title}</span>
      <div className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 bg-[#1a1230] border border-accent-1/40 px-2.5 py-1.5 rounded-lg text-[0.65rem] whitespace-nowrap z-[999] text-text pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        {desc}
      </div>
    </div>
  );
}
