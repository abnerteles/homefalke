import React from 'react';
import { ShieldCheck, Ruler, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm border border-black/10 bg-white/90 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-8 md:p-12">
          
          {/* Text Content */}
          <div>
            <div className="inline-block px-3 py-1 mb-6 border border-falke-red/30 rounded-full">
                <span className="text-falke-red text-xs font-bold uppercase tracking-widest">Sobre a Falke</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Excelência em <br/>
              <span className="text-gray-700">Engenharia Integrada.</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 text-sm leading-relaxed mb-10">
              <p>
                A Falke Soluções Integradas atua no mercado unindo a robustez da engenharia elétrica tradicional com a inovação da automação moderna. Nossa abordagem é técnica, precisa e focada em resultados de longo prazo.
              </p>
              <p>
                De grandes infraestruturas industriais a residências inteligentes de alto padrão, garantimos que cada watt de energia seja gerenciado com eficiência e segurança absoluta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 border border-black/10 bg-white hover:border-falke-red/50 transition-colors">
                    <Ruler className="text-falke-red mb-3" size={24} />
                    <h4 className="text-black font-bold text-sm uppercase mb-1">Projetos Executivos</h4>
                    <p className="text-xs text-gray-600">Detalhamento técnico completo conforme normas.</p>
                </div>
                <div className="p-4 border border-black/10 bg-white hover:border-falke-red/50 transition-colors">
                    <Lightbulb className="text-falke-red mb-3" size={24} />
                    <h4 className="text-black font-bold text-sm uppercase mb-1">Inovação</h4>
                    <p className="text-xs text-gray-600">Automação de ponta para controle total.</p>
                </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative z-10 border border-black/10 p-2 bg-white shadow-md">
               <img 
                 src="/eletricista.png" 
                 alt="Eletricista"
                 className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-10 -right-10 w-2/3 h-2/3 bg-falke-red/10 -z-0"></div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-10 bg-white border border-black/10 p-6 shadow-xl flex items-center gap-4">
                <ShieldCheck size={32} className="text-falke-red" />
                <div>
                  <p className="text-black font-bold text-sm">CREA Ativo</p>
                  <p className="text-gray-600 text-xs">Certificação Garantida</p>
                </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};
