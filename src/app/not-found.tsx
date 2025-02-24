'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center py-40">
      <div className="container">
        <div className="max-w-[800px] mx-auto">
          <div className="relative group">
            {/* Card Shadow/Border */}
            <div className="absolute -left-3 top-3 w-full h-full border-2 border-[#2A3C50]/20 bg-[#2A3C50]/5 transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
            
            {/* Main Card */}
            <div className="relative bg-[#F1EEF3] border-2 border-[#2A3C50]/20 p-12 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
              <div className="text-center space-y-6">
                <h1 className="font-['Roboto_Condensed'] font-bold text-8xl text-brand-navy/90">
                  404
                </h1>
                <h2 className="font-['Roboto_Condensed'] font-bold text-3xl text-brand-navy/80">
                  {t('notFound.title') || 'Página no encontrada'}
                </h2>
                <p className="font-['Roboto_Mono'] text-brand-navy/60 max-w-[500px] mx-auto">
                  {t('notFound.description') || 'La página que estás buscando puede haber sido eliminada, su nombre ha cambiado o no está disponible temporalmente.'}
                </p>
                <div className="pt-6">
                  <Link href="/" className="relative group inline-flex">
                    {/* Button Shadow/Border */}
                    <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#2A3C50]/20 bg-[#2A3C50]/5 transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                    
                    {/* Main Button */}
                    <div className="relative bg-[#F1EEF3] border-2 border-[#2A3C50]/20 px-6 py-3 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 flex items-center gap-2">
                      <Home className="w-4 h-4 text-brand-navy/40 group-hover:text-brand-purple transition-colors" />
                      <span className="font-['Roboto_Mono'] text-sm text-brand-navy/90">
                        {t('notFound.returnHome') || 'Volver al inicio'}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}