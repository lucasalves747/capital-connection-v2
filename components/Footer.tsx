import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">Capital Connection</h2>
        <p className="text-gray-500 text-sm mb-6">Miami Beach - FL</p>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Capital Connection. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};