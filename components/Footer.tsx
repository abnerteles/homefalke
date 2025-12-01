import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
             <div className="bg-white p-2 inline-block rounded-sm mb-6">
                 <img 
                    src="/logo.png" 
                    alt="Falke Logo" 
                    className="h-10 w-auto object-contain"
                />
             </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Excelência em engenharia elétrica e automação. Transformando projetos complexos em realidade funcional e segura.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Navegação</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-medium">
              <li><a href="#home" className="hover:text-falke-red transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-falke-red transition-colors">A Empresa</a></li>
              <li><a href="#services" className="hover:text-falke-red transition-colors">Soluções</a></li>
              <li><a href="#contact" className="hover:text-falke-red transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Serviços</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-medium">
              <li>Smart Home</li>
              <li>Regularização Enel</li>
              <li>Projetos Elétricos</li>
              <li>Laudos Técnicos</li>
              <li>Manutenção Industrial</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Social</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-falke-red hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-falke-red hover:text-white transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-falke-red hover:text-white transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {currentYear} Falke Soluções. Todos os direitos reservados.</p>
          <a href="#home" className="mt-4 md:mt-0 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider font-bold">
            Topo <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};
