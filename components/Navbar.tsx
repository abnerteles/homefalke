import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'A Empresa', href: '#about' },
    { label: 'Soluções', href: '#services' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/85 backdrop-blur-md py-4 border-b border-black/10' : 'bg-white/60 backdrop-blur-md py-6 border-b border-black/5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Container */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Falke Soluções Integradas" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="relative text-xs font-bold text-gray-700 hover:text-black uppercase tracking-widest transition-colors py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-falke-red to-transparent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
             <a 
              href="https://wa.me/"
              className="group relative flex items-center gap-2 px-6 py-2 overflow-hidden border border-falke-red/50 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm hover:border-falke-red bg-falke-red/10 hover:bg-falke-red"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              <Phone size={14} className="group-hover:rotate-12 transition-transform" />
              <span>Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-falke-red p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-black/10 shadow-2xl animate-[fadeIn_0.3s_ease-out]">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-black border-l-2 border-transparent hover:border-falke-red pl-4 hover:pl-6 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-4 bg-falke-red text-white text-center font-bold uppercase text-sm tracking-widest rounded-sm hover:bg-falke-darkRed transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </nav>
  );
};
