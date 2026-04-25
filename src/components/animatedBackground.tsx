import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    let particles: any[] = [];
    let animationFrameId: number;
    let frame = 0;

    const isMobile = () => window.innerWidth < 768;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = isMobile() ? 35 : 80;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.8 + 0.6,
        a: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.008
      }));
    };

    const getThemeColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      return {
        bg1: isDark ? '#040810' : '#f0f4fc',
        bg2: isDark ? '#060c18' : '#e6ecf8',
        particleColor: isDark ? 'rgba(99,179,237,' : 'rgba(30,80,160,',
        lineColor: isDark ? 'rgba(99,179,237,' : 'rgba(30,80,160,',
        meshColor1: isDark ? 'rgba(79,163,232,0.04)' : 'rgba(30,80,160,0.04)',
        meshColor2: isDark ? 'rgba(167,139,250,0.03)' : 'rgba(100,70,180,0.03)'
      };
    };

    const draw = () => {
      frame++;
      const c = getThemeColors();
      
      // Gradient background
      const grad = ctx.createRadialGradient(W * 0.4, H * 0.3, 0, W * 0.5, H * 0.5, W * 0.8);
      grad.addColorStop(0, c.bg2);
      grad.addColorStop(1, c.bg1);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Soft mesh blobs
      const t = frame * 0.003;
      const blobs = [
        { x: W * 0.2 + Math.sin(t * 0.7) * W * 0.06, y: H * 0.3 + Math.cos(t * 0.5) * H * 0.08, r: W * 0.25, col: c.meshColor1 },
        { x: W * 0.75 + Math.cos(t * 0.4) * W * 0.05, y: H * 0.6 + Math.sin(t * 0.6) * H * 0.07, r: W * 0.22, col: c.meshColor2 },
        { x: W * 0.5 + Math.sin(t * 0.3) * W * 0.08, y: H * 0.8 + Math.cos(t * 0.8) * H * 0.05, r: W * 0.18, col: c.meshColor1 },
      ];
      blobs.forEach(b => {
        const g2 = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g2.addColorStop(0, b.col);
        g2.addColorStop(1, 'transparent');
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, W, H);
      });

      // Update & draw particles
      const maxDist = isMobile() ? 100 : 140;
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
        p.pulse += p.pulseSpeed;
        const alpha = p.a * (0.7 + Math.sin(p.pulse) * 0.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = c.particleColor + alpha + ')';
        ctx.fill();

        // Connect nearby
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const lineA = (1 - dist / maxDist) * 0.07 * alpha;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = c.lineColor + lineA + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-70"
    />
  );
};

export default AnimatedBackground;
