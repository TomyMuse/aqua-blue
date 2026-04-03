
import React from 'react';
import { SPECS } from '../constants.tsx';
import { ShieldCheck, Activity, Clock, Droplets, Zap } from 'lucide-react';

const ProductDetail: React.FC = () => {
  return (
    <section id="producto" className="py-32 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <div className="lg:w-1/2 space-y-14">
            <div className="space-y-6">
              <h2 className="text-5xl font-brand font-black text-slate-900 leading-tight">
                Diseño que Refleja <br /> <span className="text-sky-600">Pureza Absoluta.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Nuestros dispensers Aqua Blue combinan una estética moderna con la tecnología de filtrado más avanzada del mercado. Olvidate de la logística de bidones y disfrutá de agua fresca siempre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="flex space-x-5 group">
                  <div className="p-4 bg-sky-50 rounded-2xl h-fit border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Filtrado Profesional</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Elimina sedimentos, cloro y sabores desagradables al instante.</p>
                  </div>
               </div>

               <div className="flex space-x-5 group">
                  <div className="p-4 bg-sky-50 rounded-2xl h-fit border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Eficiencia Energética</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Tecnología de bajo consumo para agua fría y caliente.</p>
                  </div>
               </div>

               <div className="flex space-x-5 group">
                  <div className="p-4 bg-sky-50 rounded-2xl h-fit border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Máxima Higiene</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Circuito cerrado que impide la contaminación externa.</p>
                  </div>
               </div>

               <div className="flex space-x-5 group">
                  <div className="p-4 bg-sky-50 rounded-2xl h-fit border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Larga Vida Útil</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Materiales robustos diseñados para uso intensivo.</p>
                  </div>
               </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Especificaciones</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {SPECS.map((spec, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{spec.label}</p>
                    <p className="font-semibold text-slate-700">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:w-1/2 relative flex justify-center">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-100/50 rounded-full blur-[80px] -z-10"></div>
             <img 
              src="https://i.postimg.cc/jR5CB7j3/Chat-GPT-Image-1-feb-2026-13-18-22.png" 
              alt="Dispenser de agua purificada frio calor sin bidon diseño moderno y estético" 
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
