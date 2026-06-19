import React, { useEffect, useRef } from 'react';

export const InteractiveBackground = ({ children, className = '' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    };

    let mouse = {
      x: null,
      y: null,
      radius: 220 // Radio extendido para mayor alcance táctil y visual
    };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseOut);

    class Particle {
      constructor(x, y, directionX, directionY, size, baseColor) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.baseColor = baseColor;
        this.angle = Math.random() * 360; // Para el efecto respiración individual
        this.spinSpeed = Math.random() * 0.02 + 0.01;
        this.baseSpeedX = directionX;
        this.baseSpeedY = directionY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        
        // Efecto breathing: la opacidad ondula de forma independiente
        // CONTROL DE OPACIDAD: Modifica el 0.5 (amplitud) y 0.45 (opacidad mínima) para ajustar el brillo base
        const pulse = Math.abs(Math.sin(this.angle)) * 0.4 + 0.45;
        ctx.fillStyle = `rgba(255, 255, 255, ${pulse})`;
        ctx.fill();

        // Destello premium sutil (Glow) en nodos ligeramente más grandes
        if (this.size > 1.2) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#2d61e0';
        } else {
          ctx.shadowBlur = 0;
        }
      }

      update() {
        // Rebotes físicos suaves contra bordes del canvas
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Interacción física avanzada: magnetismo gravitacional hacia el mouse
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Fuerza de atracción proporcional a la cercanía
            let force = (mouse.radius - distance) / mouse.radius;
            let attractionX = (dx / distance) * force * 0.6;
            let attractionY = (dy / distance) * force * 0.6;

            // Suavizado cinético (Inercia)
            this.directionX += attractionX;
            this.directionY += attractionY;
          } else {
            // Desaceleración suave para retornar a la velocidad de deriva estándar
            this.directionX += (this.baseSpeedX - this.directionX) * 0.05;
            this.directionY += (this.baseSpeedY - this.directionY) * 0.05;
          }
        } else {
          this.directionX += (this.baseSpeedX - this.directionX) * 0.02;
          this.directionY += (this.baseSpeedY - this.directionY) * 0.02;
        }

        // Limitar velocidades máximas para mantener la elegancia premium institucional
        const maxSpeed = 1.2;
        this.directionX = Math.max(Math.min(this.directionX, maxSpeed), -maxSpeed);
        this.directionY = Math.max(Math.min(this.directionY, maxSpeed), -maxSpeed);

        this.x += this.directionX;
        this.y += this.directionY;
        this.angle += this.spinSpeed;

        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      numberOfParticles = Math.min(numberOfParticles, 110); 

      for (let i = 0; i < numberOfParticles; i++) {

        let size = (Math.random() * 1.8) + 0.8;

        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        
        // Movimiento de deriva orgánico e imperceptible
        let directionX = (Math.random() * 0.3) - 0.15;
        let directionY = (Math.random() * 0.3) - 0.15;

        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connectNodes();
    };

    const connectNodes = () => {
      ctx.shadowBlur = 0; // Desactivar glow para las líneas optimizando GPU
      
      for (let a = 0; a < particlesArray.length; a++) {
        // 1. Enlaces e interconexión sináptica entre nodos cercanos
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 130) {
            let opacityValue = (1 - (distance / 130)) * 0.18;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        // 2. Haces de luz hacia el puntero (Azul Institucional WeProm #2d61e0)
        if (mouse.x !== null && mouse.y !== null) {
          let dxMouse = mouse.x - particlesArray[a].x;
          let dyMouse = mouse.y - particlesArray[a].y;
          let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          
          if (distanceMouse < mouse.radius) {
            let proximityFactor = 1 - (distanceMouse / mouse.radius);
            ctx.beginPath();
            // Degradado de color sutil que intensifica el azul corporativo al acercarse
            // Iluminación dinámica por hardware: Genera un destello de luz neon en el puntero
            ctx.shadowBlur = proximityFactor * 12;
            ctx.shadowColor = '#2d61e0';
            
            ctx.strokeStyle = `rgba(45, 97, 224, ${proximityFactor * 0.85})`;
            ctx.lineWidth = 0.8 + (proximityFactor * 0.7);
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            
            // Apagar inmediatamente el blur para que no afecte el rendimiento de otros renderizados
            ctx.shadowBlur = 0;
          }
        }
      }
    };

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        // Combina el fondo oscuro corporativo con un degradado radial profundo para simular viñeta y luces de estudio
        background: 'radial-gradient(circle at 50% 50%, #2d61e0 -60%, #0b0f19 70%, #05070b 100%)'
      }}
    >
        
      {/* CAPA 1: Auroras fluidas estéticas en el trasfondo */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#2d61e0]/15 rounded-full blur-[130px] mix-blend-screen animate-fluid-slow pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#081b3f]/50 rounded-full blur-[150px] mix-blend-screen animate-fluid-slow pointer-events-none z-0" style={{ animationDelay: '-5s', animationDuration: '25s' }}></div>

      {/* CAPA 2: RED NEURONAL DINÁMICA (Canvas de alto rendimiento) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ width: '100%', height: '100%' }}
      />

      {/* CAPA 3: Interfaz y Contenido (children) */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};