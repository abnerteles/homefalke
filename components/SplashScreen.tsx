import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    const btnTimer = setTimeout(() => {
      setCtaVisible(true);
    }, 2100);
    return () => clearTimeout(btnTimer);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setBgVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0">
        <img 
          src="/fundo_splash.png" 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1600px] transition-opacity duration-[1600ms] ease-out"
          style={{ opacity: bgVisible ? 0.28 : 0, filter: 'grayscale(0.1) contrast(1.05)' }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-start gap-0 mb-8">
            <img 
              src="/logo_icone.png" 
              alt="Falke - Ícone Falcão" 
              className="h-[96px] w-auto md:h-[120px] object-contain"
              style={{ opacity: 0, transform: 'translateX(8px) translateY(-46px)', animation: 'fadeOnly 1.5s ease-out 1.2s forwards', zIndex: 1 }}
            />
            <div className="flex flex-col items-center">
              <img 
                src="/logo_name.png" 
                alt="Falke - Logotipo" 
                className="h-[60px] w-auto md:h-[75px] object-contain -ml-20 md:-ml-28"
                style={{ animation: 'fadeIn 0.7s ease-out both' }}
              />
              {ctaVisible ? (
                <button
                  onClick={() => {
                    setBgVisible(false);
                    setShow(false);
                    setTimeout(() => onFinish(), 700);
                  }}
                  className="mt-4 px-6 py-3 bg-falke-red text-white font-bold text-xs uppercase tracking-widest rounded-sm border border-falke-red hover:bg-falke-darkRed transition-colors -ml-24 md:-ml-32"
                  style={{ animation: 'fadeIn 1.8s ease-out 0.2s both' }}
                >
                  Entrar na Home
                </button>
              ) : (
                <p className="mt-4 text-falke-grey text-sm font-medium tracking-widest uppercase animate-pulse">Carregando</p>
              )}
            </div>
        </div>
        
        {/* Barra de carregamento estilizada */}
        

        
      </div>

      <style>{`
        @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOnly {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
