
import React, { useState } from 'react';
import { X, CreditCard, Lock, ArrowRight, ShieldCheck, MapPin, User, Phone, CheckCircle2 } from 'lucide-react';
import { PLANS, CONTACT_INFO } from '../constants.tsx';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: string | null;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose, planId }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'mercadopago' // 'mercadopago' | 'transfer' | 'card'
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen || !planId) return null;

  const selectedPlan = PLANS.find(p => p.id === planId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simular proceso de red
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Construir mensaje de WhatsApp
    const methodText = formData.paymentMethod === 'mercadopago' 
      ? 'Link de Mercado Pago' 
      : formData.paymentMethod === 'transfer' 
        ? 'Efectivo o Transferencia' 
        : 'Tarjeta de Débito/Crédito';
    
    const message = `Hola Aqua Blue! 👋 Quiero suscribirme al *${selectedPlan?.name}* ($${selectedPlan?.price}/mes).
    
📋 *Mis Datos:*
Nombre: ${formData.name}
Dirección: ${formData.address}
Teléfono: ${formData.phone}

💳 *Método de pago preferido:* ${methodText}

¿Me podrían enviar el link de pago para coordinar la instalación? Gracias!`;

    const whatsappUrl = `${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(message)}`;
    
    setIsProcessing(false);
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Finalizar Suscripción</h3>
            <p className="text-sm text-slate-500">Estás contratando: <strong className="text-sky-600">{selectedPlan?.name}</strong></p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Price Summary */}
            <div className="bg-sky-50 rounded-2xl p-4 flex justify-between items-center border border-sky-100">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white">
                   <ShieldCheck className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase text-sky-700 tracking-wider">Total Mensual</p>
                   <p className="text-2xl font-black text-slate-900">${selectedPlan?.price.toLocaleString('es-AR')}</p>
                 </div>
               </div>
               <div className="text-right">
                 <p className="text-[10px] text-slate-500 font-semibold uppercase">Instalación</p>
                 <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">BONIFICADA</span>
               </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <User className="w-4 h-4 text-slate-400" />
                Datos de Instalación
              </h4>
              
              <div className="space-y-3">
                <input 
                  required
                  type="text" 
                  placeholder="Nombre Completo"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input 
                      required
                      type="text" 
                      placeholder="Dirección y Altura"
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 pl-10 text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input 
                      required
                      type="tel" 
                      placeholder="Teléfono / WhatsApp"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 pl-10 text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-slate-400" />
                Forma de Pago
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${formData.paymentMethod === 'mercadopago' ? 'border-sky-500 bg-sky-50 ring-1 ring-sky-500' : 'border-slate-200 hover:border-slate-300'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="mercadopago" 
                    checked={formData.paymentMethod === 'mercadopago'}
                    onChange={() => setFormData({...formData, paymentMethod: 'mercadopago'})}
                    className="hidden" 
                  />
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white">
                    {formData.paymentMethod === 'mercadopago' && <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />}
                  </div>
                  <span className="font-bold text-sm text-slate-700">Mercado Pago</span>
                </label>

                <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${formData.paymentMethod === 'transfer' ? 'border-sky-500 bg-sky-50 ring-1 ring-sky-500' : 'border-slate-200 hover:border-slate-300'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="transfer" 
                    checked={formData.paymentMethod === 'transfer'}
                    onChange={() => setFormData({...formData, paymentMethod: 'transfer'})}
                    className="hidden" 
                  />
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white">
                    {formData.paymentMethod === 'transfer' && <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />}
                  </div>
                  <span className="font-bold text-sm text-slate-700">Efectivo / Transferencia</span>
                </label>

                <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${formData.paymentMethod === 'card' ? 'border-sky-500 bg-sky-50 ring-1 ring-sky-500' : 'border-slate-200 hover:border-slate-300'} sm:col-span-2`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="card" 
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({...formData, paymentMethod: 'card'})}
                    className="hidden" 
                  />
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-white">
                    {formData.paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />}
                  </div>
                  <span className="font-bold text-sm text-slate-700">Tarjeta Débito/Crédito</span>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <span>Confirmar Suscripción</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 text-slate-400">
                <ShieldCheck className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Suscripción Protegida y Segura</span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
