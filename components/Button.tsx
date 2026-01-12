import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  ...props
}) => {
  // 🔗 CTA GLOBAL DA URL
  const params = new URLSearchParams(window.location.search);
  const urlCTA = params.get('cta');

  // 👉 prioridade:
  // 1️⃣ href passado no componente
  // 2️⃣ cta da URL
  const finalLink = href || urlCTA;

  // 👉 Se tiver link (URL ou href), vira <a>
  if (finalLink) {
    return (
      <a
        href={finalLink}
        className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white
                   bg-gradient-to-r from-cyan-400 to-blue-600
                   hover:from-cyan-500 hover:to-blue-700
                   transition-all duration-300 shadow-lg shadow-cyan-900/30"
      >
        {children}
      </a>
    );
  }

  // 👉 Caso contrário, vira botão normal
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white
                 bg-gradient-to-r from-cyan-400 to-blue-600
                 hover:from-cyan-500 hover:to-blue-700
                 transition-all duration-300 shadow-lg shadow-cyan-900/30"
    >
      {children}
    </button>
  );
};
