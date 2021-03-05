import { useRouter } from 'next/router';

import TranslationProviderContext from './context';
import { populateResources, replaceParams } from './utils';
import { TranslationFileName } from './types';

const resources = populateResources();

const TranslationProvider: React.FC = ({ children }) => {
  return <TranslationProviderContext.Provider value={{ resources }}>{children}</TranslationProviderContext.Provider>;
};

export const useTranslation = (space: TranslationFileName = 'common') => {
  const { locale, defaultLocale } = useRouter();

  const t = (key: string, params?: Record<string, string>) => {
    const str = resources[locale || defaultLocale][space][key];

    return params ? replaceParams(str, params) : str;
  };

  return { t };
};

export default TranslationProvider;
