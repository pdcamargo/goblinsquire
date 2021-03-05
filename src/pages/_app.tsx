import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import TranslationProvider from '@providers/TranslationProvider';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS>
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  </ChakraProvider>
);

export default MyApp;
