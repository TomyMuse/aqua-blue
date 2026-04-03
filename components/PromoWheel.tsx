
import React, { useState, useEffect, useRef } from 'react';
import { X, Timer, Trophy, MessageCircle, ArrowRight, Zap, Droplets, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../constants.tsx';

interface PromoWheelProps {
  isOpen: boolean;
  onClose: () => void;
}

const slices = [
  { percent: 20, color: '#38bdf8', label: '20%' },
  { percent: 40, color: '#0284c7', label: '40%' },
  { percent: 60, color: '#1e293b', label: '60%' },
  { percent: 80, color: '#0ea5e9', label: '80%' },
  { percent: 100, color: '#f59e0b', label: '100%' }, 
];

const PromoWheel: React.FC<PromoWheelProps> = ({ isOpen, onClose }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); 
  const [isPointerTicking, setIsPointerTicking] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isOpen && !timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setIsPointerTicking(true);
        setTimeout(() => setIsPointerTicking(false), 50);
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isSpinning]);

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    // Giramos al menos 10 vueltas + un ángulo aleatorio
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalRotation = rotation + (360 * 10) + extraDegrees;
    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      
      const actualDegrees = (totalRotation % 360);
      // Calculamos qué tajada quedó bajo el puntero (arriba = 270 grados en el sistema SVG estándar o simplemente compensar)
      // Cada tajada es de 72 grados. La tajada 0 empieza en 0 deg.
      // Ajuste para que el puntero (top) sea el punto de referencia:
      const sliceIndex = Math.floor(((360 - actualDegrees) % 360) / 72);
      setResult(slices[sliceIndex].percent);
    }, 4000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Helper para crear los paths del SVG de la ruleta
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] w-full max-w-lg overflow-hidden relative border border-white/20">
        
        {/* Barra de Urgencia */}
        <div className="bg-slate-900 p-4 flex items-center justify-between px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent"></div>
          <div className="flex items-center gap-3 relative z-10">
            <Timer className="w-4 h-4 text-amber-500 animate-pulse" />
            <span className="text-[11px] font-black text-white uppercase tracking-[0.15em]">
              Vence en: <span className="text-amber-400 font-mono">{formatTime(timeLeft)}</span>
            </span>
          </div>
          <div className="flex-1 mx-6 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000 shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
              style={{ width: `${(timeLeft / 600) * 100}%` }}
            ></div>
          </div>
          <button onClick={onClose} className="relative z-10 text-slate-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 text-center space-y-6 relative">
          {!hasSpun ? (
            <>
              <div className="space-y-2 animate-in slide-in-from-top-4 duration-500">
                <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-100 mb-2">
                  <Sparkles className="w-3 h-3" />
                  Regalo de Bienvenida
                </div>
                <h2 className="text-3xl md:text-4xl font-brand font-black text-slate-900 leading-tight">
                  ¡Girá la Ruleta <br /> y <span className="text-sky-500">Ahorrá!</span>
                </h2>
                <p className="text-slate-500 text-sm font-medium px-4 leading-relaxed">
                  Premiamos tu interés con beneficios exclusivos para tu hogar.
                </p>
              </div>

              {/* Contenedor de la Ruleta SVG */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto my-8">
                {/* Puntero Físico Superior */}
                <div className={`absolute top-[-12px] left-1/2 -translate-x-1/2 z-40 transition-transform duration-75 origin-top ${isPointerTicking ? 'rotate-12' : 'rotate-0'}`}>
                  <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                    <path d="M20 50L0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10L20 50Z" fill="#0f172a"/>
                    <circle cx="20" cy="12" r="3" fill="#38bdf8"/>
                  </svg>
                </div>

                {/* Sombra de Fondo */}
                <div className="absolute inset-[-10px] bg-slate-100 rounded-full -z-10 shadow-inner"></div>

                <div 
                  className="w-full h-full relative transition-transform duration-[4000ms] cubic-bezier(0.15, 0, 0.1, 1)"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                    {slices.map((slice, i) => {
                      const startPercent = i / slices.length;
                      const endPercent = (i + 1) / slices.length;
                      const [startX, startY] = getCoordinatesForPercent(startPercent);
                      const [endX, endY] = getCoordinatesForPercent(endPercent);
                      const largeArcFlag = endPercent - startPercent > 0.5 ? 1 : 0;
                      
                      // Cálculo para la posición del texto (mitad del arco)
                      const midPercent = (startPercent + endPercent) / 2;
                      const textRadius = 32; // Distancia del centro al texto
                      const textX = 50 + Math.cos(2 * Math.PI * midPercent) * textRadius;
                      const textY = 50 + Math.sin(2 * Math.PI * midPercent) * textRadius;
                      const textRotation = midPercent * 360 + 90;

                      return (
                        <g key={i}>
                          <path
                            d={`M 50 50 L ${50 + startX * 50} ${50 + startY * 50} A 50 50 0 ${largeArcFlag} 1 ${50 + endX * 50} ${50 + endY * 50} Z`}
                            fill={slice.color}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="0.5"
                          />
                          <text
                            x={textX}
                            y={textY}
                            fill="white"
                            fontSize="7"
                            fontWeight="900"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                            style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.5))' }}
                          >
                            {slice.label}
                          </text>
                        </g>
                      );
                    })}
                    {/* Brillo circular interno */}
                    <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                  </svg>

                  {/* Eje Central Hub */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center z-30 border-[6px] border-slate-50 relative">
                       <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-slate-100"></div>
                       <Droplets className="w-8 h-8 text-sky-500 relative z-10" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <button 
                  onClick={spinWheel}
                  disabled={isSpinning}
                  className={`group relative w-full overflow-hidden py-5 rounded-[1.5rem] font-black text-xl transition-all shadow-xl active:scale-95 ${isSpinning ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-black hover:-translate-y-1'}`}
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSpinning ? 'GIRANDO...' : '¡GIRAR AHORA!'}
                    {!isSpinning && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
                
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Solo quedan 3 cupones para Buenos Aires
                </p>
              </div>
            </>
          ) : (
            <div className="py-6 space-y-8 animate-in zoom-in-95 fade-in duration-700">
               <div className="relative">
                 <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 border-[8px] border-white shadow-2xl relative">
                    <Trophy className="w-14 h-14 text-white" />
                    <div className="absolute -top-2 -right-2 bg-amber-500 text-white p-2 rounded-full border-4 border-white animate-bounce">
                      <Zap className="w-5 h-5 fill-current" />
                    </div>
                 </div>
                 
                 <div className="space-y-3">
                    <h3 className="text-3xl font-brand font-black text-slate-900 uppercase tracking-tight">
                      ¡ESPECTACULAR!
                    </h3>
                    <div className="text-7xl font-black text-sky-600 bg-sky-50 inline-block px-10 py-6 rounded-[2rem] border-2 border-sky-100 shadow-sm my-2 relative">
                      {result}% <span className="text-2xl font-bold align-top mt-2 inline-block">OFF</span>
                    </div>
                    <p className="text-slate-600 font-medium text-lg max-w-xs mx-auto">
                      Ganaste un beneficio de <strong>{result}%</strong> en tu primer mes de Aqua Blue.
                    </p>
                 </div>
               </div>

               <div className="space-y-4 pt-4">
                 <a 
                   href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`¡Hola! Acabo de ganar un ${result}% de descuento en mi primer mes con la ruleta Aqua Blue. Quiero activarlo.`)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-2xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3 hover:-translate-y-1"
                 >
                   <MessageCircle className="w-6 h-6" />
                   ¡RECLAMAR MI DESCUENTO!
                 </a>
                 <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                   Código único generado con éxito
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default PromoWheel;
