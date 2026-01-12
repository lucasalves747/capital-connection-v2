import React from 'react';
import { Clock, MapPin, Calendar, Users, Coffee } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Info: React.FC = () => {
  // 🔗 Pegando parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  const local =
    params.get('local') || 'Ambientes empresariais selecionados';

  const dataEvento =
    params.get('data') || 'Calendário mensal';

  return (
    <section className="py-12 bg-gray-900 border-t border-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* TÍTULO */}
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-10 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Formato e Informações
        </motion.h2>

        {/* CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {[
            {
              icon: <Clock className="w-10 h-10 text-cyan-500 mb-4" />,
              title: 'Duração',
              text: '3 horas de imersão'
            },
            {
              icon: <Coffee className="w-10 h-10 text-cyan-500 mb-4" />,
              title: 'Início',
              text: 'Coffee Break de recepção'
            },
            {
              icon: <MapPin className="w-10 h-10 text-cyan-500 mb-4" />,
              title: 'Local',
              text: local
            },
            {
              icon: <Calendar className="w-10 h-10 text-cyan-500 mb-4" />,
              title: 'Datas',
              text: dataEvento
            },
            {
              icon: <Users className="w-10 h-10 text-cyan-500 mb-4" />,
              title: 'Vagas',
              text: 'Limitadas (Elite)'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-center text-center p-6 bg-brand-dark rounded-lg border border-gray-800"
            >
              {item.icon}
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl text-center border border-gray-700 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              O crescimento nos negócios está ligado às decisões que você toma.
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              O Capital Connection não é um evento social. É um ambiente estratégico
              para quem quer acelerar, expandir visão e jogar em outro nível.
            </p>
            <Button>Quero Acelerar Meu Negócio Agora</Button>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};
