import React from 'react';

export const Features: React.FC = () => {
  const stats = [
    { value: "15", suffix: " ANOS", label: "De Experiência" },
    { value: "1.5", suffix: " K", label: "Projetos Entregues" },
    { value: "100", suffix: "%", label: "Conformidade Técnica" },
    { value: "24", suffix: " H", label: "Suporte Dedicado" }
  ];

  return (
    <section className="bg-white border-y border-black/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
          {stats.map((stat, index) => (
            <div key={index} className="py-12 px-6 flex flex-col items-center justify-center text-center group hover:bg-black/5 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-falke-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl md:text-5xl font-black text-black tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-gray-500 transition-all duration-300">
                    {stat.value}
                  </span>
                <span className="text-sm font-bold text-falke-red">{stat.suffix}</span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-600 uppercase tracking-[0.2em] font-medium group-hover:text-gray-800 transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
