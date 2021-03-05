import { availableFiles, availableLanguages } from './utils';

export type AvailableTranslationFile = typeof availableFiles;
export type TranslationFileName = AvailableTranslationFile[number];

export type AvailableLanguages = typeof availableLanguages;
export type LanguagesName = AvailableLanguages[number];

export type PopulateResources = {
  [key in LanguagesName]: {
    [key in TranslationFileName]: Record<string, string>;
  };
};

export type TranslationProviderContextType = {
  resources: PopulateResources;
};
