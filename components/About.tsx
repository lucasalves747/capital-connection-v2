import React from 'react';
import { Network, Brain, TrendingUp, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const experiences = [
    {
      icon: <Network className="w-8 h-8 text-cyan-600" />,
      title: "Networking Qualificado",
      desc: "Conecte-se com empresários que jogam em alto nível e buscam expansão real."
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-600" />,
      title: "Conteúdo Objetivo",
      desc: "Mentalidade, posicionamento e gestão sem enrolação. Direto ao ponto."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-600" />,
      title: "Códigos Empresariais",
      desc: "Orientações aplicáveis à realidade do seu negócio para gerar resultados."
    },
    {
      icon: <Search className="w-8 h-8 text-cyan-600" />,
      title: "Clareza Estratégica",
      desc: "Entenda sua fase atual e defina com precisão os próximos passos."
    }
  ];

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(3, 26, 87, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(3, 17, 51, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container mx-auto px-4 relative">

        {/* TEXTO — entrada em cascata */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-cyan-600 font-bold tracking-widest uppercase text-sm"
          >
            O Conceito
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-3 mb-8"
          >
            Sobre o Capital Connection
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-gray-600 text-lg leading-relaxed space-y-6"
          >
            <p>
              O <strong className="text-gray-900">Capital Connection</strong> é uma experiência empresarial que reúne empresários, empreendedores e profissionais estratégicos em um ambiente cuidadosamente selecionado para gerar conexões de alto nível, clareza empresarial e direcionamento prático.
            </p>

            <p className="text-xl text-gray-800 font-light italic border-l-4 border-cyan-500 pl-6 inline-block my-4 bg-white/60">
              "Aqui, o foco não é volume de pessoas. É nível de conversa, visão e acesso."
            </p>

            <p>
              O evento nasce da evolução do Jantar de Negócios, mantendo o mesmo espírito de conexão e transformação, agora com mais foco, intensidade e objetividade.
            </p>
          </motion.div>
        </motion.div>

        {/* EXPERIÊNCIA */}
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-display font-bold text-gray-900">
              A Experiência
            </h3>
            <p className="text-gray-600 mt-2">
              Direto, elegante e estratégico.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-white p-8 rounded-xl border border-gray-200
                           hover:border-cyan-500 hover:shadow-lg
                           transition-all duration-300 group"
              >
                <div className="mb-6 bg-cyan-50 p-3 rounded-md w-fit group-hover:bg-cyan-100 transition-colors">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-10 text-center text-gray-500 font-light"
          >
            Tudo acontece de forma fluida, sem excessos e sem distrações.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
