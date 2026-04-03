
import React from 'react';
import { ShieldCheck, Settings, Zap, Thermometer, Droplets, Banknote } from 'lucide-react';
import { Feature, ProductSpec } from './types';

export const CONTACT_INFO = {
  whatsapp: "1141813071",
  whatsappLink: "https://wa.me/541141813071",
  email: "aqua.blue.contacto1015@gmail.com",
  instagram: "aqua.blue.eco",
  instagramLink: "https://instagram.com/aqua.blue.eco"
};

export const PLANS = [
  {
    id: 'hogar',
    name: 'Plan Hogar',
    price: 25000,
    description: 'La solución perfecta para familias. Agua pura ilimitada sin preocupaciones.',
    features: [
      'Agua Fría y Caliente Ilimitada',
      'Instalación 100% Bonificada',
      'Mantenimiento Semestral Incluido',
      'Servicio Técnico 24hs',
      'Garantía de Pureza'
    ],
    recommended: true
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'red-domestica',
    title: 'Conexión Directa a Red',
    description: 'Filtro conectado directamente a la red de agua doméstica. Olvidate de cargar bidones pesados.',
    icon: <Droplets className="w-8 h-8" />
  },
  {
    id: 'temperatura',
    title: 'Fría y Caliente 24/7',
    description: 'Agua fría y caliente en todo momento, ideal para infusiones o refrescarse al instante.',
    icon: <Thermometer className="w-8 h-8" />
  },
  {
    id: 'economia',
    title: 'Más Económico',
    description: 'Ahorrá significativamente eliminando el costo recurrente de la compra y logística de bidones.',
    icon: <Banknote className="w-8 h-8" />
  },
  {
    id: 'higiene',
    title: 'Máxima Higiene',
    description: 'Sistemas cerrados que evitan la contaminación del agua por manipulación de envases.',
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

export const SPECS: ProductSpec[] = [
  { label: 'Sistema', value: 'Conexión Directa (Sin Bidones)' },
  { label: 'Agua Caliente', value: 'Ideal para Mate y Té' },
  { label: 'Agua Fría', value: 'Refrigeración por Compresor' },
  { label: 'Instalación', value: 'En Red de Agua Doméstica' },
  { label: 'Higiene', value: 'Filtro Carbón Activado' },
  { label: 'Ahorro', value: '100% Libre de Bidones' },
];
