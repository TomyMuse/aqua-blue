
import React from 'react';
import { FEATURES } from '../constants.tsx';

const Features: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-32 relative z-10 bg-white/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-5xl font-brand font-black text-slate-900 leading-tight">
            Por qué elegir un <br /> <span className="text-sky-600">Dispenser sin Bidón.</span>
          </h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Pasar de un sistema tradicional a un <strong>dispenser de agua conectado a la red</strong> elimina la logística de almacenamiento y garantiza agua fresca las 24 horas mediante sistemas de ultrafiltración <strong className="text-slate-900">Aqua Blue</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <article 
              key={feature.id} 
              className="group p-12 glass rounded-[3rem] hover:bg-white transition-all duration-700 hover:shadow-2xl border-white/60 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-white mb-10 shadow-xl transition-all group-hover:bg-sky-600 group-hover:-translate-y-2">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
