/* eslint-disable prefer-const */
'use client'

import React, { useEffect } from 'react';
import Header from './modules/Header';
import Form from './modules/Form';
import Footer from './modules/Footer';


function Home() {

  useEffect(() => {
    // Função para criar partículas interativas
    const canvas = document.getElementById('interactive-bg') as HTMLCanvasElement | null;

    
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    
    if (!ctx) return;

    const particles: { x: number; y: number; size: number; color: string; speedX: number; speedY: number }[] = [];
    const colors = ['#e94560', '#22c55e', '#2563eb', '#facc15']; // Cores das partículas
    let mouse = { x: 0, y: 0 };

    // Atualiza o tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Gera partículas
    const generateParticles = (count: number) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
        });
      }
    };

    // Atualiza a posição das partículas
    const updateParticles = () => {
      for (let particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Mantém as partículas dentro da tela
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Interação com o mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          particle.x -= dx / 10;
          particle.y -= dy / 10;
        }
      }
    };

    // Renderiza as partículas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }
    };

    // Animação
    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    // Detecta o movimento do mouse
    const trackMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Inicializa
    window.addEventListener('mousemove', trackMouse);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    generateParticles(100);
    animate();

    return () => {
      window.removeEventListener('mousemove', trackMouse);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);







  return (
    <div>
      <canvas id="interactive-bg"></canvas>
      <Header />   
      <main className="container mx-auto p-6">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Alcance o Melhor de Si com o FitTech Tracker</h1>
          <p className="text-lg text-gray-600 mb-6">
            Descubra como o <strong>FitTech Tracker</strong>, o dispositivo de saúde e fitness mais inovador do mercado, pode transformar sua rotina, melhorar sua qualidade de vida e te ajudar a atingir seus objetivos de forma simples e prática.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Com **monitoramento de saúde em tempo real**, **sugestões personalizadas de exercícios** e uma interface intuitiva, o <strong>FitTech Tracker</strong> é a solução ideal para quem quer <strong>cuidar da saúde</strong>, aumentar a performance física e economizar tempo.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">
            Por que você precisa do FitTech Tracker?
          </h2>
          <ul className="text-left text-gray-400 mb-6 max-w-3xl mx-auto list-disc px-8">
            <li>🏃 <strong>Monitoramento inteligente:</strong> Controle frequência cardíaca, passos e calorias com precisão.</li>
            <li>🧘 <strong>Bem-estar personalizado:</strong> Receba insights para melhorar sua saúde e reduzir o estresse.</li>
            <li>⏱️ <strong>Economize tempo:</strong> Planeje treinos e refeições de forma prática com nossa integração de aplicativos.</li>
          </ul>
          <p className="text-lg text-gray-600 mb-6 font-semibold">
            Junte-se a milhares de pessoas que já transformaram suas vidas com o <strong>FitTech Tracker</strong>. Faça parte da revolução fitness agora mesmo!
          </p>
          <h2 className="text-xl font-bold text-gray-300 mb-4">
            Cadastre-se para receber <strong>10% de desconto exclusivo</strong> na sua primeira compra.
          </h2>
          <p className="text-lg text-gray-500 mb-6">
            Insira seu nome e e-mail no formulário abaixo para aproveitar essa oferta incrível e descobrir como o <strong>FitTech Tracker</strong> pode te ajudar a atingir suas metas!
          </p>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  )
}


export default Home;