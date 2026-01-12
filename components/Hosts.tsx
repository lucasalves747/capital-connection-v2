import React from 'react';
import bgHosts from '@/assets/neon_tubes.png'; // ajuste o nome se necessário

export const Hosts: React.FC = () => {
  return (
    <section
      className="relative py-20 bg-fixed  overflow-hidden"
      style={{
        backgroundImage: `url(${bgHosts})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay escuro para leitura */}
      <div className="absolute inset-0 bg-[#0B0F19]/40"></div>

      {/* Gradiente lateral */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/60 to-transparent"></div>

     <div className="container mx-auto px-4 relative z-10">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-center">
      Quem Conduz o <span className="text-cyan-500">Capital Connection</span>
    </h2>

    <div className="bg-black p-8 md:p-10 rounded-2xl border-l-4 border-cyan-500 backdrop-blur-sm shadow-xl">
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        O Capital Connection é conduzido por empresários com mais de{' '}
        <span className="text-white font-bold">
          25 anos de experiência
        </span>{' '}
        no mundo corporativo, atuação direta em consultoria empresarial e
        desenvolvimento de empresários.
      </p>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Os anfitriões fazem parte de um ecossistema empresarial global, com
        participação ativa na{' '}
        <span className="text-white font-bold">
          Plataforma Global de Miami
        </span>
        , ao lado de sócios internacionais.
      </p>

      <p className="text-xl text-white font-display uppercase tracking-wide">
        Aqui, não se compartilha teoria. Se compartilha vivência, decisões e
        construção real.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};
