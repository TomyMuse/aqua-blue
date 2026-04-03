
import React from 'react';
import { Mail, Phone, Instagram, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-sky-600 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-brand font-extrabold mb-6">Contactanos</h2>
              <p className="text-sky-100 mb-10 leading-relaxed">
                ¿Tenés dudas sobre la instalación en tu red doméstica? Estamos para asesorarte por cualquiera de nuestros canales.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase text-sky-200">WhatsApp</p>
                    <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase text-sky-200">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-semibold hover:underline break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase text-sky-200">Instagram</p>
                    <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                      @{CONTACT_INFO.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <p className="text-sky-200 text-xs font-bold uppercase tracking-widest mb-4">Sello de Calidad</p>
              <div className="flex space-x-4">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold">AB</div>
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold">ECO</div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 p-12 bg-white">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">WhatsApp de contacto</label>
                <input 
                  type="tel" 
                  placeholder="Tu número"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Consulta por Dispenser a Red</label>
                <textarea 
                  rows={4}
                  placeholder="Hola! Me interesa un dispenser para mi casa/oficina..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-sky-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl shadow-sky-600/20 flex items-center justify-center space-x-3 transition-transform active:scale-95">
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
