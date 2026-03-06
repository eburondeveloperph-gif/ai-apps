import React from 'react';

export const Card = ({ children, className = '' }: any) => (
  <div className={`bg-[#2c2c2e] rounded-2xl p-4 md:p-6 border border-white/5 shadow-lg ${className}`}>
    {children}
  </div>
);

export const Input = ({ className = '', ...props }: any) => (
  <input className={`bg-[#1c1c1e] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors w-full ${className}`} {...props} />
);

export const TextArea = ({ className = '', ...props }: any) => (
  <textarea className={`bg-[#1c1c1e] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors w-full resize-none ${className}`} {...props} />
);

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-[#3a3a3c] hover:bg-[#4a4a4c] text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };
  return (
    <button className={`rounded-xl px-4 py-2.5 font-medium transition-colors flex items-center justify-center gap-2 ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Modal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2c2c2e] rounded-2xl p-6 border border-white/10 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button variant="secondary" onClick={onClose} className="!p-2 rounded-full">X</Button>
        </div>
        {children}
      </div>
    </div>
  );
};
