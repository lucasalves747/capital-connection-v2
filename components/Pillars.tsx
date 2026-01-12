import React from 'react';
import { Lightbulb, Users, BarChart3, Globe } from 'lucide-react';
import { Button } from './Button';

export const Pillars: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Os Pilares do Capital Connection
              </h2>
              <p className="text-gray-400">
                Uma estrutura desenhada para sustentar seu crescimento.
              </p>
           </div>
           <div className="hidden md:block">
              <Button variant="outline">Garantir Minha Vaga</Button>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="flex gap-6 items-start p-6 bg-brand-dark rounded-xl border border-gray-800">
            <div className="shrink-0">
               <div className="p-4 bg-purple-900/20 rounded-full text-purple-400">
                 <Lightbulb size={32} />
               </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Mentalidade do Empresário</h3>
              <p className="text-gray-400 mb-2">Empresas fortes são construídas por empresários fortes.</p>
              <p className="text-gray-500 text-sm">Aqui, você amplia sua consciência, postura e visão estratégica.</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex gap-6 items-start p-6 bg-brand-dark rounded-xl border border-gray-800">
            <div className="shrink-0">
               <div className="p-4 bg-cyan-900/20 rounded-full text-cyan-400">
                 <Users size={32} />
               </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Conexão de Alto Nível</h3>
              <p className="text-gray-400 mb-2">Networking com empresários que jogam em outro nível.</p>
              <p className="text-gray-500 text-sm">Conexões que fazem sentido hoje e no futuro.</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex gap-6 items-start p-6 bg-brand-dark rounded-xl border border-gray-800">
            <div className="shrink-0">
               <div className="p-4 bg-emerald-900/20 rounded-full text-emerald-400">
                 <BarChart3 size={32} />
               </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Códigos de Negócio</h3>
              <p className="text-gray-400 mb-2">Orientações práticas sobre gestão, decisão e posicionamento.</p>
              <p className="text-gray-500 text-sm">Trabalhar mais não é estratégia. Pensar melhor é.</p>
            </div>
          </div>

           {/* Pillar 4 */}
           <div className="flex gap-6 items-start p-6 bg-brand-dark rounded-xl border border-gray-800">
            <div className="shrink-0">
               <div className="p-4 bg-blue-900/20 rounded-full text-blue-400">
                 <Globe size={32} />
               </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ambiente e Acesso</h3>
              <p className="text-gray-400 mb-2">Um ecossistema empresarial conectado a uma plataforma global.</p>
              <p className="text-gray-500 text-sm">Empresários que atuam em diferentes níveis de mercado.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:hidden w-full">
            <Button fullWidth variant="outline">Garantir Minha Vaga</Button>
        </div>
      </div>
    </section>
  );
};