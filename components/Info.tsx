import React from 'react';
import { Clock, MapPin, Calendar, Users, Coffee } from 'lucide-react';
import { Button } from './Button';

export const Info: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-8 uppercase">
          Formato e Informações
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-brand-dark rounded-lg border border-gray-800">
            <Clock className="w-10 h-10 text-cyan-500 mb-4" />
            <h4 className="text-white font-bold mb-2">Duração</h4>
            <p className="text-gray-400 text-sm">3,5 horas de imersão</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-brand-dark rounded-lg border border-gray-800">
            <Coffee className="w-10 h-10 text-cyan-500 mb-4" />
            <h4 className="text-white font-bold mb-2">Início</h4>
            <p className="text-gray-400 text-sm">Coffee Break de recepção</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-brand-dark rounded-lg border border-gray-800">
            <MapPin className="w-10 h-10 text-cyan-500 mb-4" />
            <h4 className="text-white font-bold mb-2">Local</h4>
            <p className="text-gray-400 text-sm">Ambientes empresariais selecionados</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-brand-dark rounded-lg border border-gray-800">
            <Calendar className="w-10 h-10 text-cyan-500 mb-4" />
            <h4 className="text-white font-bold mb-2">Datas</h4>
            <p className="text-gray-400 text-sm">Calendário mensal</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-brand-dark rounded-lg border border-gray-800">
            <Users className="w-10 h-10 text-cyan-500 mb-4" />
            <h4 className="text-white font-bold mb-2">Vagas</h4>
            <p className="text-gray-400 text-sm">Limitadas (Elite)</p>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl text-center border border-gray-700 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              O crescimento nos negócios está ligado às decisões que você toma.
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              O Capital Connection não é um evento social. É um ambiente estratégico para quem quer acelerar, expandir visão e jogar em outro nível.
            </p>
            <Button>Quero Acelerar Meu Negócio Agora</Button>
          </div>
           {/* Decorative sheen */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};