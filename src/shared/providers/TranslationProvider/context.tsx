import { createContext } from 'react';

import { TranslationProviderContextType } from './types';

export default createContext<TranslationProviderContextType>(null as TranslationProviderContextType);
