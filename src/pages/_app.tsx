import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import TranslationProvider from '@providers/TranslationProvider';

const theme = extendTheme({
  fonts: {
    body: 'Roboto',
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={theme}>
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  </ChakraProvider>
);

export default MyApp;
