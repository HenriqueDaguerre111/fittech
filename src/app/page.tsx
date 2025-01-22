'use client'

import React, { useEffect } from 'react';
import Header from './modules/Header';
import Form from './modules/Form';
import Footer from './modules/Footer';


function Home() {
  return (
    <div>
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