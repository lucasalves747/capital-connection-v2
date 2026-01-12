import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-brand-dark/90 backdrop-blur-md border-t border-cyan-900/50 shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div className="hidden md:block">
            <p className="text-white font-bold uppercase text-sm">Vagas limitadas para a próxima edição</p>
        </div>
        <div className="w-full md:w-auto">
             <Button fullWidth className="py-3 text-sm md:text-base">Inscreva-se Agora</Button>
        </div>
      </div>
    </div>
  );
};