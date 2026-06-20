// src/components/InteractiveLightBackground.jsx
import React, { useEffect, useRef } from 'react';

export const InteractiveLightBackground = ({ children, className = '' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];

    // --- PARÁMETROS DE CONTROL PREMIUM (Modifica aquí) ---
    const CONFIG = {
      divisorDensidad: 18000, // Número más alto = menos partículas en pantalla
      maxParticulas: 60,      // Límite estricto para proteger los 60fps
      opacidadBase: 0.52,     // Opacidad base de los nodos (0 a 1)
      opacidadLineas: 0.48,   // Opacidad de los enlaces sinápticos
      opacidadMouse: 0.55     // Opacidad de los haces de luz hacia el cursor
    };

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    };

    let mouse = {
      x: null,
      y: null,
      radius: 200
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
      constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.angle = Math.random() * 360;
        this.spinSpeed = Math.random() * 0.02 + 0.01;
        this.baseSpeedX = directionX;
        this.baseSpeedY = directionY;
        // Color azul de la paleta: usamos #2d61e0 con opacidad variable
        this.color = `rgba(45, 97, 224, 0.15)`; // base sutil
      }

      draw() {
        // Pulso dinámico elegante
        const pulse = Math.abs(Math.sin(this.angle)) * 0.3 + 0.7;
        const alpha = CONFIG.opacidadBase * pulse;

        // Si la partícula es grande (>2px), simulamos GLOW sin usar shadowBlur (Optimizado para GPU)
        if (this.size > 2) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2, false);
          ctx.fillStyle = `rgba(45, 97, 224, ${alpha * 0.3})`; // Halo exterior suave
          ctx.fill();
        }

        // Nodo Central
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(45, 97, 224, ${alpha})`;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Interacción con el mouse (atracción suave)
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            let attractionX = (dx / distance) * force * 0.5;
            let attractionY = (dy / distance) * force * 0.5;
            this.directionX += attractionX;
            this.directionY += attractionY;
          } else {
            this.directionX += (this.baseSpeedX - this.directionX) * 0.05;
            this.directionY += (this.baseSpeedY - this.directionY) * 0.05;
          }
        } else {
          this.directionX += (this.baseSpeedX - this.directionX) * 0.02;
          this.directionY += (this.baseSpeedY - this.directionY) * 0.02;
        }

        const maxSpeed = 0.8; // más lento para elegancia
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
      let numberOfParticles = (canvas.height * canvas.width) / CONFIG.divisorDensidad;
      numberOfParticles = Math.min(numberOfParticles, CONFIG.maxParticulas);

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2.5) + 0.8;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.2) - 0.1;
        let directionY = (Math.random() * 0.2) - 0.1;
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
      // BUCLE 1: Enlaces sinápticos entre nodos cercanos
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            let proximityFactor = 1 - (distance / 120);
            ctx.strokeStyle = `rgba(45, 97, 224, ${proximityFactor * CONFIG.opacidadLineas})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }

      // BUCLE 2: Hilos interactivos hacia el Cursor (Aislado para fluidez de 60 FPS)
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particlesArray.length; i++) {
          let dxMouse = mouse.x - particlesArray[i].x;
          let dyMouse = mouse.y - particlesArray[i].y;
          let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distanceMouse < mouse.radius) {
            let proximityFactor = 1 - (distanceMouse / mouse.radius);
            ctx.strokeStyle = `rgba(45, 97, 224, ${proximityFactor * CONFIG.opacidadMouse})`;
            ctx.lineWidth = 0.4 + (proximityFactor * 0.4);
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
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
      style={{ background: 'white' }} // Fondo blanco puro
    >
      {/* Degradado sutil para dar profundidad (opcional) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-transparent opacity-50" />
      </div>

      {/* Canvas con partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};