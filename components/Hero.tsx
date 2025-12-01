import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-[80vh] md:h-[70vh] min-h-[520px] flex items-center bg-transparent overflow-hidden">
      
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/smarthouse.png"
          alt="Smart Home"
          className="w-full h-full object-cover object-center opacity-45 scale-[1.03] animate-[slowZoom_30s_infinite_alternate]"
        />
        {/* Mixed Overlay for readability & distribution */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-falke-red/10 via-transparent to-transparent"></div>
      </div>

      {/* Speed Lines / Lightning Effect Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/5 to-transparent skew-x-12 blur-3xl"></div>
         <div className="absolute -bottom-20 -left-20 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-falke-red/50 to-transparent rotate-45"></div>
      </div>

      {/* Technical Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 flex justify-center">
        <div
          className="h-full w-full max-w-[1920px]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full pt-16">
        <div className="max-w-4xl border-l-2 border-falke-red/80 pl-8 md:pl-12 py-6 relative backdrop-blur-sm bg-black/25">
            
            {/* Tagline Badge */}
            <div className="flex items-center gap-3 mb-8 animate-[fadeIn_0.5s_ease-out]">
                <div className="px-3 py-1 bg-white/5 border border-white/10 flex items-center gap-2 rounded-sm">
                    <Zap size={12} className="text-falke-red fill-falke-red" />
                    <span className="text-[10px] font-bold text-gray-300 tracking-[0.25em] uppercase">
                        Engenharia & Automação v2.4
                    </span>
                </div>
            </div>

            {/* Main Title - Single Line */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05] tracking-tight md:whitespace-nowrap animate-[slideRight_0.7s_ease-out]">
              POTÊNCIA
              <span className="relative inline-block ml-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                INTELIGENTE
                <span className="text-falke-red">.</span>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-200 mb-10 max-w-lg leading-relaxed font-light animate-[slideRight_0.9s_ease-out]">
              Transformamos infraestrutura elétrica em sistemas vivos. 
              <span className="text-white font-medium"> Projetos, Laudos e Smart Homes</span> com excelência e tecnologia de ponta.
            </p>
            
            {/* Modern Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-[slideRight_1.1s_ease-out]">
              <a 
                  href="#services" 
                  className="group relative px-8 py-4 bg-falke-red text-white font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 rounded-sm overflow-hidden hover:shadow-[0_0_30px_rgba(214,0,28,0.2)]"
              >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                  Nossas Soluções
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                  href="#contact" 
                  className="group px-8 py-4 bg-transparent border border-white/40 hover:border-white text-white font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 rounded-sm hover:bg-white/10"
              >
                  Fale Conosco
              </a>
            </div>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-[12vw] md:w-[14vw] xl:w-[22vw] 2xl:w-[26vw] bg-gradient-to-r from-black/60 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-[12vw] md:w-[14vw] xl:w-[22vw] 2xl:w-[26vw] bg-gradient-to-l from-black/60 to-transparent z-0 pointer-events-none"></div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-falke-red via-red-900 to-transparent"></div>
      </div>

      <style>{`
        @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        @keyframes slideRight {
            0% { opacity: 0; transform: translateX(-30px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
