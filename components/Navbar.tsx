
import React, { useState, useEffect } from 'react';
import { Droplet, Menu, X, Calculator } from 'lucide-react';
import { CONTACT_INFO } from '../constants.tsx';

interface NavbarProps {
  onOpenCalculator: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Si es un enlace interno (empieza con #), usamos scroll suave
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const id = targetId.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
    // Si es externo, dejamos que el navegador maneje el enlace normalmente
  };

  const navLinks: { name: string; href: string; isExternal?: boolean }[] = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Características', href: '#caracteristicas' },
    { name: 'Producto', href: '#producto' },
    { name: 'Contacto', href: CONTACT_INFO.whatsappLink, isExternal: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm border-b border-sky-100/50' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={(e) => handleNavClick(e as any, '#inicio')}>
          <div className="relative">
            <Droplet className="w-8 h-8 text-sky-500 transition-transform duration-300 group-hover:scale-110" fill="currentColor" />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-sky-300 rounded-full animate-pulse shadow-sm"></div>
          </div>
          <span className="text-2xl font-brand font-extrabold tracking-tight text-slate-900">
            AQUA <span className="text-sky-500">BLUE</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              onClick={(e) => !link.isExternal && handleNavClick(e, link.href)}
              className="text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:text-sky-600 text-slate-600 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          {/* Combined CTA Button (Opens Calculator) */}
          <button 
            onClick={onOpenCalculator}
            className="bg-slate-900 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 active:scale-95 shadow-lg shadow-slate-200/50 hover:shadow-sky-200 text-xs tracking-[0.15em] uppercase flex items-center gap-2 group"
          >
            <Calculator className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
            <span>Hacé tu cotización ahora</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 p-2">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-8 px-6 space-y-5 animate-in fade-in slide-in-from-top-4 duration-300 border-b border-slate-200 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              onClick={(e) => !link.isExternal ? handleNavClick(e, link.href) : setIsMobileMenuOpen(false)}
              className="block text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#planes"
            onClick={(e) => handleNavClick(e, '#planes')}
            className="block w-full bg-slate-900 text-white py-4 rounded-xl font-bold shadow-lg uppercase tracking-widest text-xs text-center"
          >
            Pedir Presupuesto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
