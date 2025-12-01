import React from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative bg-transparent border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left: Info */}
        <div className="p-12 lg:p-24 bg-white relative overflow-hidden">
           <div className="relative z-10">
            <span className="text-falke-red font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                Contato
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Vamos conversar?
            </h3>
            <p className="text-gray-700 mb-12 text-sm max-w-md leading-relaxed">
              Solicite um orçamento ou agende uma visita técnica. Nossa equipe de engenharia está pronta para analisar seu projeto.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-sm text-gray-600 group-hover:text-falke-red group-hover:border-falke-red transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Telefone / Whatsapp</p>
                  <p className="text-black font-medium">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-sm text-gray-600 group-hover:text-falke-red group-hover:border-falke-red transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">E-mail</p>
                  <p className="text-black font-medium">contato@falkesolucoes.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-sm text-gray-600 group-hover:text-falke-red group-hover:border-falke-red transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Localização</p>
                  <p className="text-black font-medium">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-12 lg:p-24 bg-gray-50 flex flex-col justify-center">
          <form className="space-y-6 max-w-lg w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input type="text" className="w-full bg-white border border-black/10 text-black text-sm px-4 py-3 focus:outline-none focus:border-falke-red transition-colors placeholder-transparent peer" placeholder="Nome" id="name" required />
                <label htmlFor="name" className="absolute left-4 top-3 text-gray-700 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-falke-red">Nome</label>
              </div>
              <div className="relative">
                <input type="tel" className="w-full bg-white border border-black/10 text-black text-sm px-4 py-3 focus:outline-none focus:border-falke-red transition-colors placeholder-transparent peer" placeholder="Telefone" id="phone" required />
                <label htmlFor="phone" className="absolute left-4 top-3 text-gray-700 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-falke-red">Telefone</label>
              </div>
            </div>

            <div className="relative">
              <input type="email" className="w-full bg-white border border-black/10 text-black text-sm px-4 py-3 focus:outline-none focus:border-falke-red transition-colors placeholder-transparent peer" placeholder="Email" id="email" required />
              <label htmlFor="email" className="absolute left-4 top-3 text-gray-700 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-falke-red">Email</label>
            </div>

            <div className="relative">
              <textarea rows={4} className="w-full bg-white border border-black/10 text-black text-sm px-4 py-3 focus:outline-none focus:border-falke-red transition-colors placeholder-transparent peer resize-none" placeholder="Mensagem" id="message" required></textarea>
              <label htmlFor="message" className="absolute left-4 top-3 text-gray-700 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-falke-red">Mensagem</label>
            </div>

            <button className="w-full bg-white text-black font-bold text-xs uppercase tracking-[0.2em] py-4 hover:bg-falke-red hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              Enviar Mensagem <ArrowRight size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
