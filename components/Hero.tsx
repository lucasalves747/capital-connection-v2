import React from 'react';
import { MapPin, Calendar, Clock, Coffee } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  // 🔗 Lendo parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  const local =
    params.get('local') || 'LOCAL A DEFINIR';

  const dataEvento =
    params.get('data') || 'Data a definir';

  const ctaLink =
    params.get('cta') || '#';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-16 pb-8 lg:pt-0 lg:pb-0">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
          alt="Business Environment" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#00A3FF 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Conteúdo */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* LOCAL DINÂMICO */}
          <div className="inline-block px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/30 text-cyan-400 text-sm font-semibold tracking-wider mb-4 uppercase">
            {local}
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase leading-none tracking-tighter text-white">
            Capital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Connection
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light border-l-4 border-cyan-500 pl-4">
            Destrave Seu Próximo Nível Empresarial. Conecte-se com a elite do mercado.
          </h2>

          <p className="text-gray-400 max-w-xl text-lg">
            O Capital Connection é um encontro empresarial exclusivo, criado para quem entende que crescimento não é sobre trabalhar mais — é sobre estar no ambiente certo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300 py-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400 w-5 h-5" />
              <span>Ambiente empresarial selecionado</span>
            </div>

            <div className="flex items-center gap-3">
              <Coffee className="text-cyan-400 w-5 h-5" />
              <span>Coffee Break de recepção</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-cyan-400 w-5 h-5" />
              <span>Experiência imersiva de 3h</span>
            </div>

            {/* DATA DINÂMICA */}
            <div className="flex items-center gap-3">
              <Calendar className="text-cyan-400 w-5 h-5" />
              <span>{dataEvento}</span>
            </div>
          </div>

          {/* BOTÃO COM LINK DA URL */}
          <div className="pt-4">
           
              <Button>Quero Acelerar Meu Negócio</Button>
            
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative z-10 rounded-lg overflow-hidden border border-gray-800 shadow-2xl shadow-cyan-900/20">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
              alt="Empresário Visionário" 
              className="w-full h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="absolute -top-10 -right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-blue-600/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
