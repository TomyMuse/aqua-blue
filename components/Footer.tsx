
import React from 'react';
import { Droplet, Instagram, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Droplet className="text-sky-500 w-8 h-8" fill="currentColor" />
              <span className="text-2xl font-brand font-extrabold tracking-tight uppercase">
                AQUA <span className="text-sky-500">BLUE</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Dispenser de agua fría y caliente a red. La solución definitiva <strong>sin bidones</strong> para Argentina. Más económico y más higiénico.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-sky-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-green-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="p-3 bg-white/5 rounded-full hover:bg-slate-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto Directo</h4>
            <ul className="space-y-4 text-slate-400">
              <li>WA: {CONTACT_INFO.whatsapp}</li>
              <li className="break-all">{CONTACT_INFO.email}</li>
              <li>@{CONTACT_INFO.instagram}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Nuestra Propuesta</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Instalación Profesional</li>
              <li>Abono Mensual Fijo</li>
              <li>Mantenimiento Incluido</li>
              <li>Filtros de Red</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Aqua Blue Eco. Agua Pura Infinita.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
