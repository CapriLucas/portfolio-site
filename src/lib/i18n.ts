import { Dictionary } from './types';

export const defaultLocale = 'en';
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries = {
  en: () => import('../locales/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const dictionaryLoader = dictionaries[locale];
  if (!dictionaryLoader) {
    return dictionaries[defaultLocale]();
  }
  return dictionaryLoader();
};
