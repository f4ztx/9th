'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(resourcesToBackend((language: string) => {
    return language === 'en' ? enTranslations : esTranslations;
  }))
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },

    defaultNS: 'common',

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    react: {
      useSuspense: false,
    },
  });

export default i18next;
