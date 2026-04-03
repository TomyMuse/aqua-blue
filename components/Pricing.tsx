
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { PLANS } from '../constants.tsx';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="planes" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3 h-3" />
            <span>Suscripción Mensual</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-brand font-black text-slate-900 leading-tight">
            Elegí tu Plan Ideal
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Sin contratos forzosos a largo plazo. Pagás mes a mes y disfrutás de agua pura ilimitada.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-10 border transition-all duration-300 flex flex-col ${plan.recommended 
                ? 'border-sky-500 shadow-[0_20px_60px_-15px_rgba(14,165,233,0.3)] scale-100 md:scale-105 z-10 ring-4 ring-sky-500/10' 
                : 'border-slate-200 shadow-xl hover:shadow-2xl hover:border-sky-200'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Más Elegido
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900 tracking-tight">
                  ${plan.price.toLocaleString('es-AR')}
                </span>
                <span className="text-slate-400 font-bold uppercase text-sm">/mes</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`p-1 rounded-full mt-0.5 ${plan.recommended ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-600'}`}>
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-4 rounded-xl font-black text-lg transition-all active:scale-95 shadow-lg ${
                  plan.recommended
                    ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-red-500/25'
                    : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                }`}
              >
                Suscribirme Ahora
              </button>
              
              <p className="text-center text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-widest">
                Cancelá cuando quieras
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
