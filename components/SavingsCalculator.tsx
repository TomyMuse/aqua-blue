
import React, { useState, useEffect } from 'react';
import { Calculator, X, ChevronUp, TrendingUp, Droplets, ArrowRight, Scale, Truck, Check, Ban } from 'lucide-react';
import { CONTACT_INFO } from '../constants.tsx';

interface SavingsCalculatorProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ isOpen, onToggle }) => {
  const [bottles, setBottles] = useState(8); 
  const [isBounce, setIsBounce] = useState(false);

  // Constants
  const BOTTLE_PRICE = 7000;
  const SERVICE_PRICE = 25000;
  const BOTTLE_LITERS = 20;

  // Calculations
  const currentMonthlyCost = bottles * BOTTLE_PRICE;
  const monthlySavings = currentMonthlyCost - SERVICE_PRICE;
  const annualSavings = monthlySavings * 12;
  const isSaving = monthlySavings > 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setIsBounce(true);
        setTimeout(() => setIsBounce(false), 1000);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <div className={`fixed z-40 transition-all duration-500 ease-in-out ${isOpen ? 'bottom-0 md:bottom-6 left-0 md:left-6 right-0 md:right-auto w-full md:w-[420px]' : 'bottom-6 left-6'}`}>
      
      {/* Expanded State */}
      {isOpen && (
        <div className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-t-3xl md:rounded-3xl overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-slate-900 p-5 flex justify-between items-center relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-sky-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Calculator className="w-5 h-5 text-sky-400" />
                Calculadora de Ahorro
              </h3>
              <p className="text-slate-400 text-xs mt-1">Descubrí cuánto estás perdiendo por mes</p>
            </div>
            <button 
              onClick={() => onToggle(false)}
              className="relative z-10 text-slate-400 hover:text-white transition-colors bg-white/10 p-1.5 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 md:p-6 space-y-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Tu consumo actual
                </label>
                <span className="text-xl font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  {bottles} <span className="text-sm font-semibold text-slate-500">bidones/mes</span>
                </span>
              </div>
              
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1"
                value={bottles} 
                onChange={(e) => setBottles(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500 hover:accent-sky-400 transition-all"
              />
            </div>

            {/* Comparison Cards (The Problem vs The Solution) */}
            <div className="grid grid-cols-2 gap-3">
              {/* Card Roja: El Problema */}
              <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex flex-col justify-between">
                <div>
                    <p className="text-[10px] text-red-600 font-black uppercase tracking-widest mb-1">Lo que pagás hoy</p>
                    <p className="text-xl font-black text-red-700">
                    ${currentMonthlyCost.toLocaleString('es-AR')}
                    </p>
                </div>
                <p className="text-[9px] text-red-400 mt-2 font-medium leading-tight">
                    Incluye precio variable, esperas y logística.
                </p>
              </div>
              
              {/* Card Azul: La Solución */}
              <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 relative overflow-hidden flex flex-col justify-between">
                <div>
                    <p className="text-[10px] text-sky-700 font-black uppercase tracking-widest mb-1">Costo Aqua Blue</p>
                    <p className="text-xl font-black text-sky-600">
                    ${SERVICE_PRICE.toLocaleString('es-AR')}
                    </p>
                </div>
                <div className="absolute top-2 right-2">
                    <Check className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-[9px] text-sky-500 mt-2 font-medium leading-tight">
                    Precio fijo mensual. <br/> Consumo ilimitado.
                </p>
              </div>
            </div>

            {/* Result Section (The Savings Hero) */}
            <div className={`p-5 rounded-2xl border-2 transition-colors duration-500 shadow-sm ${isSaving ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200'}`}>
              {isSaving ? (
                <>
                   <div className="flex items-center gap-2 mb-3">
                     <TrendingUp className="w-5 h-5 text-green-600" />
                     <span className="font-bold text-green-700 text-xs uppercase tracking-widest">Ahorro Total Proyectado</span>
                   </div>
                   
                   <div className="text-center space-y-1 mb-4">
                      <p className="text-4xl md:text-5xl font-black text-green-600 tracking-tight">
                        ${annualSavings.toLocaleString('es-AR')}
                      </p>
                      <p className="text-green-600/80 font-bold text-sm uppercase tracking-wide">
                        Te ahorrás por año
                      </p>
                   </div>
                   
                   <div className="bg-white/60 rounded-lg p-2 text-center border border-green-100">
                     <p className="text-xs text-green-800 font-medium">
                       Estás gastando <strong>${monthlySavings.toLocaleString('es-AR')}</strong> extra todos los meses.
                     </p>
                   </div>
                </>
              ) : (
                <div className="text-center space-y-3 py-2">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                        <Droplets className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-800 font-black text-lg">Priorizá tu Calidad de Vida</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed px-2">
                        Quizás el costo es similar, pero con Aqua Blue ganás <strong>agua ilimitada</strong> para cocinar, beber y lavar frutas sin racionar bidones.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Shock Visual Comparison */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Bidones</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Truck className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            <span>Logística Pesada</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Scale className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            <span>Carga Manual</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Ban className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            <span>Agua Limitada</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-2 border-b border-sky-100 pb-1">Aqua Blue</p>
                        <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                            <span>Cero Logística</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                            <span>Siempre Disponible</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                            <span>Canilla Libre</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div>
                <a 
                  href="#planes"
                  onClick={(e) => {
                    e.preventDefault();
                    onToggle(false);
                    const element = document.getElementById('planes');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center justify-center space-x-2 group hover:-translate-y-1"
                >
                <span>Quiero dejar de usar bidones</span>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex justify-center gap-4 mt-3">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                        <Check className="w-3 h-3 text-green-500" /> Sin compromiso
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                        <Check className="w-3 h-3 text-green-500" /> Instalación rápida
                    </span>
                </div>
            </div>

          </div>
        </div>
      )}

      {/* Minimized State (Button) */}
      {!isOpen && (
        <button 
          onClick={() => onToggle(true)}
          className={`md:hidden bg-sky-600 text-white hover:bg-sky-500 border-2 border-white/20 shadow-[0_8px_30px_rgb(14,165,233,0.4)] px-6 py-4 rounded-full font-bold flex items-center space-x-4 transition-all hover:scale-105 active:scale-95 group ${isBounce ? 'animate-bounce' : ''}`}
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors backdrop-blur-sm">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-bold text-sky-100 uppercase tracking-widest leading-none mb-1">Calculadora</span>
            <span className="text-base font-black text-white leading-none">¿Estás perdiendo plata?</span>
          </div>
          <ChevronUp className="w-5 h-5 text-sky-200 group-hover:text-white animate-pulse" />
        </button>
      )}
    </div>
  );
};

export default SavingsCalculator;
