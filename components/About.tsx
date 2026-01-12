import React from 'react';
import { Network, Brain, TrendingUp, Search } from 'lucide-react';

export const About: React.FC = () => {
  const experiences = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: "Networking Qualificado",
      desc: "Conecte-se com empresários que jogam em alto nível e buscam expansão real."
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Conteúdo Objetivo",
      desc: "Mentalidade, posicionamento e gestão sem enrolação. Direto ao ponto."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "Códigos Empresariais",
      desc: "Orientações aplicáveis à realidade do seu negócio para gerar resultados."
    },
    {
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      title: "Clareza Estratégica",
      desc: "Entenda sua fase atual e defina com precisão os próximos passos."
    }
  ];

  return (
    <section className="py-12 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        
        {/* About Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm">O Conceito</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-8">
            Sobre o Capital Connection
          </h2>
          <div className="text-gray-400 text-lg leading-relaxed space-y-6">
            <p>
              O <strong className="text-white">Capital Connection</strong> é uma experiência empresarial que reúne empresários, empreendedores e profissionais estratégicos em um ambiente cuidadosamente selecionado para gerar conexões de alto nível, clareza empresarial e direcionamento prático.
            </p>
            <p className="text-xl text-gray-200 font-light italic border-l-2 border-cyan-500 pl-6 inline-block my-4">
              "Aqui, o foco não é volume de pessoas. É nível de conversa, visão e acesso."
            </p>
            <p>
              O evento nasce da evolução do Jantar de Negócios, mantendo o mesmo espírito de conexão e transformação, agora com mais foco, intensidade e objetividade.
            </p>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold text-white">A Experiência</h3>
            <p className="text-gray-400 mt-2">Direto, elegante e estratégico.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((item, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-colors duration-300 group">
                <div className="mb-6 bg-gray-800 p-3 rounded-md w-fit group-hover:bg-cyan-900/20 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-gray-400 font-light">
            Tudo acontece de forma fluida, sem excessos e sem distrações.
          </div>
        </div>

      </div>
    </section>
  );
};