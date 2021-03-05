import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';

import TranslationProvider from '@providers/TranslationProvider';
import CssReset from '@styles/CssReset';
import GoblinSquireStyle from '@styles/GoblinSquireStyle';
import theme from '@theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  console.log(theme);

  return (
    <TranslationProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <CssReset />
        <GoblinSquireStyle />
      </ThemeProvider>
    </TranslationProvider>
  );
};

export default MyApp;
