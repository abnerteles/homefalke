import React, { useEffect, useRef } from 'react';
import { Wifi, Zap, FileText, Factory, Home, MousePointer2 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Home strokeWidth={1.5} />,
      title: "Smart Home",
      desc: "Automação residencial completa: iluminação, clima e segurança."
    },
    {
      icon: <Zap strokeWidth={1.5} />,
      title: "Padrão Enel",
      desc: "Ligações novas, aumento de carga e adequação técnica."
    },
    {
      icon: <FileText strokeWidth={1.5} />,
      title: "Projetos & Laudos",
      desc: "Emissão de ART, projetos executivos e laudos NBR-5410."
    },
    {
      icon: <Factory strokeWidth={1.5} />,
      title: "Industrial",
      desc: "Infraestrutura pesada, cabines primárias e SPDA."
    },
    {
      icon: <Wifi strokeWidth={1.5} />,
      title: "Conectividade",
      desc: "Cabeamento estruturado e redes Wi-Fi mesh corporativas."
    },
    {
      icon: <MousePointer2 strokeWidth={1.5} />,
      title: "Manutenção",
      desc: "Gestão preventiva e corretiva para condomínios."
    }
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-28 bg-transparent text-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 rounded-sm bg-white/80 backdrop-blur-sm border border-black/10 shadow-md px-6 md:px-8 py-6 md:flex justify-between items-end">
            <div>
                <span className="text-falke-red font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
                    Nossas Áreas
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                    Soluções Técnicas
                </h2>
            </div>
            <p className="hidden md:block text-gray-700 text-sm max-w-sm text-right">
                Abrangemos todo o ciclo da engenharia elétrica, do projeto inicial à manutenção contínua.
            </p>
        </div>

        <div className="relative rounded-sm border border-black/10 bg-white/90 shadow-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className="group relative bg-white p-8 border border-black/10 rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 opacity-0 translate-y-8"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-falke-red transition-all duration-300 group-hover:w-full"></div>
              
              <div className="mb-6 text-gray-600 group-hover:text-falke-red transition-colors duration-300">
                 {React.cloneElement(service.icon as React.ReactElement, { size: 40 })}
              </div>
              
              <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wide">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {service.desc}
              </p>

              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-falke-red">Detalhes +</span>
              </div>
            </div>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
};
