
import React from 'react';
import { Camera, CheckCircle2 } from 'lucide-react';

const InstallationGallery: React.FC = () => {
  return (
    <section id="instalaciones" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Camera className="w-3 h-3" />
              <span>Instalaciones Reales</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-brand font-black text-slate-900 leading-tight">
              Nuestros Equipos <br />
              <span className="text-sky-500">en Acción.</span>
            </h2>
            
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Así se ve un dispenser <strong className="text-slate-900">Aqua Blue</strong> instalado. Diseño compacto, elegante y funcional que se adapta a cualquier rincón de tu hogar u oficina.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                'Conexión discreta a la red de agua',
                'Ocupa el mínimo espacio',
                'Estética moderna y profesional',
                'Sin bidones a la vista'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-sky-500/5 rounded-[3rem] blur-2xl -z-10 group-hover:bg-sky-500/10 transition-colors duration-700"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="https://i.postimg.cc/jqMFsKwz/Generated-Image-April-03-2026-3-03AM.png" 
                alt="Instalación real de dispenser Aqua Blue" 
                className="w-full h-auto object-cover aspect-[3/4] md:aspect-auto"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-sky-600 mb-1">Ubicación Real</p>
                    <p className="text-sm font-bold text-slate-900">Instalación en Oficina</p>
                  </div>
                  <div className="bg-sky-500 text-white p-2 rounded-xl">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstallationGallery;
