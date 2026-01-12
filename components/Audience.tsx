import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Audience: React.FC = () => {
  const target = [
    "Já está no jogo dos negócios",
    "Busca crescimento com mais estratégia e menos desgaste",
    "Valoriza ambientes com empresários de alto nível",
    "Quer ampliar visão, conexões e capacidade de decisão",
    "Entende que empresas crescem quando empresários crescem"
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-brand-dark to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm mb-2 block">Perfil</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Para quem é o <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Capital Connection?</span>
            </h2>
            
            <ul className="space-y-6">
              {target.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                  <span className="text-lg text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-4 bg-red-900/10 border border-red-900/30 rounded-lg flex items-center gap-4">
              <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              <p className="text-red-200 font-medium">
                Não é um evento para curiosos. É um ambiente para quem decide.
              </p>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
               alt="Meeting" 
               className="relative z-10 rounded-xl shadow-2xl border border-gray-700 grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>

        </div>
      </div>
    </section>
  );
};