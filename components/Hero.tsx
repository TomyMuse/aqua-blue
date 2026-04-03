
import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FluidParticlesBackground } from './ui/fluid-particles-background.tsx';
import { CONTACT_INFO } from '../constants.tsx';

interface HeroProps {
  scrollProgress: number;
}

const Hero: React.FC<HeroProps> = ({ scrollProgress }) => {
  const handleScrollToDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('caracteristicas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen">
      <header className="sr-only">
        <h1>Aqua Blue: Dispenser de agua fría y caliente a red - SIN BIDONES</h1>
      </header>
      <FluidParticlesBackground className="min-h-screen">
        <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen pt-24 pb-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 xl:gap-16 items-center w-full">
            
            <div className="space-y-10 max-w-2xl text-left">
              <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-xl px-5 py-2.5 rounded-full border border-sky-100 shadow-sm animate-in fade-in slide-in-from-left-4 duration-700">
                <ShieldCheck className="w-5 h-5 text-sky-500" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500">Tecnología Aqua Blue Eco</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-brand font-extrabold leading-[1.05] tracking-tight text-slate-900 animate-in fade-in slide-in-from-left-6 duration-1000">
                  Agua Fría y Caliente <br />
                  <span className="text-sky-500 drop-shadow-sm">Calidad Premium.</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-medium animate-in fade-in slide-in-from-left-8 duration-1000 delay-150">
                  Filtro conectado a la <strong>red de agua doméstica</strong>. La solución más económica, higiénica y moderna para tu día a día.
                </p>
              </div>

              <div className="flex flex-col space-y-3 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
                {['Agua potable en todo momento', 'Instalación profesional a red', 'Más económico e higiénico'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400" />
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <a 
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-sky-200 hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <span>Pedir presupuesto</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#caracteristicas"
                  onClick={handleScrollToDetails}
                  className="bg-white/70 hover:bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-slate-200 backdrop-blur-sm flex items-center justify-center text-center cursor-pointer"
                >
                  Ver Detalles
                </a>
              </div>
            </div>

            <div className="relative flex justify-center items-center lg:justify-end">
              <div className="absolute w-[140%] h-[140%] bg-sky-200/30 rounded-full blur-[140px] -z-10 animate-pulse"></div>
              
              <div className="relative z-10 animate-dispenser-3d w-full max-w-[620px] lg:scale-110 xl:scale-125 transition-transform duration-1000">
                <div className="relative group p-4">
                  <div className="rounded-[3rem] transition-all duration-700">
                    <img 
                      src="https://i.postimg.cc/jR5CB7j3/Chat-GPT-Image-1-feb-2026-13-18-22.png" 
                      alt="Dispenser de agua Aqua Blue - Frío Calor a Red" 
                      className="w-full h-auto object-contain transform transition-transform duration-1000 group-hover:scale-105 drop-shadow-[0_40px_70px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </FluidParticlesBackground>
    </section>
  );
};

export default Hero;
