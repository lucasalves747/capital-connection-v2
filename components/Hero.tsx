import React from 'react';
import { MapPin, Calendar, Clock, Coffee } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import heroImage from "@/assets/heroimg.jpg"

export const Hero: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const local = params.get('local') || 'LOCAL A DEFINIR';
  const dataEvento = params.get('data') || 'Data a definir';

  return (
    <section className="relative min-h-screen bg-brand-dark flex items-start lg:items-center">


      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#00A3FF 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-24 grid lg:grid-cols-12 gap-14 items-start lg:items-center">


        {/* CONTEÚDO */}
        <motion.div
          className="lg:col-span-7 space-y-7 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {/* LOCAL */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-block mx-auto lg:mx-0 px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase"
          >
            {local}
          </motion.div>

          {/* TÍTULO MOBILE (IMAGEM) */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="block lg:hidden max-w-xs mx-auto"
          >
            <div className="relative max-w-xs mx-auto">
              <img
                src={heroImage}
                alt="Capital Connection"
                className="w-full h-auto object-contain relative z-10"
                style={{
                  WebkitMaskImage:
                    'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                  maskImage:
                    'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                }}
              />

              {/* Glow */}
              <div className="absolute inset-0 blur-2xl bg-cyan-500/10 rounded-full" />
            </div>



          </motion.div>

          {/* TÍTULO DESKTOP */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="hidden lg:block text-6xl xl:text-7xl font-display font-bold uppercase leading-none tracking-tight text-white"
          >
            Capital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Connection
            </span>
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light border-l-4 border-cyan-500 pl-4"
          >
            Destrave seu próximo nível empresarial. Conecte-se com quem realmente decide.
          </motion.p>

          {/* DESCRIÇÃO */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            Um encontro empresarial exclusivo para líderes que entendem que crescimento
            não é sobre esforço excessivo — é sobre estar no ambiente certo.
          </motion.p>

          {/* INFO */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 pt-4"
          >
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <MapPin className="text-cyan-400 w-5 h-5" />
              <span>Ambiente empresarial selecionado</span>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Coffee className="text-cyan-400 w-5 h-5" />
              <span>Coffee Break de recepção</span>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Clock className="text-cyan-400 w-5 h-5" />
              <span>Experiência imersiva de 3h</span>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Calendar className="text-cyan-400 w-5 h-5" />
              <span>{dataEvento}</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="pt-6 flex justify-center lg:justify-start"
          >
            <Button>Quero Acelerar Meu Negócio</Button>
          </motion.div>
        </motion.div>

        {/* IMAGEM DESKTOP */}
        <motion.div
          className="lg:col-span-5 hidden lg:block relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-cyan-900/20">
            <img
              src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/6965381fcc991f3a34a6f05b.png"
              alt="Capital Connection"
              className="w-full h-auto"
            />
          </div>

          <div className="absolute -top-10 -right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-blue-600/10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
