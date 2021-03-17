import { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import TranslationProviderContext from './context';
import { populateResources, replaceParams } from './utils';
import { PopulateResources, TranslationFileName } from './types';

const TranslationProvider: React.FC = ({ children }) => {
  const [resources, setResources] = useState<PopulateResources>(null);

  const loadResources = useCallback(async () => {
    if (!resources) {
      setResources(await populateResources());
    }
  }, [resources]);

  useEffect(() => {
    loadResources();
  }, [loadResources]);

  return <TranslationProviderContext.Provider value={{ resources }}>{children}</TranslationProviderContext.Provider>;
};

export const useTranslation = (space: TranslationFileName = 'common') => {
  const { resources } = useContext(TranslationProviderContext);

  const { locale, defaultLocale } = useRouter();

  const t = (key: string, params?: Record<string, string>) => {
    const str = resources[locale || defaultLocale][space][key];

    return params ? replaceParams(str, params) : str;
  };

  return { t };
};

export default TranslationProvider;
