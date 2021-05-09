import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import { GlobalStyle } from '../src/theme/GlobalStyle';
import { theme } from '../src/theme/Theme';
import store from '../store';
import Layout from '../components/Layout';

function LizenaApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NTW5S2R' });
}, []);
  return <>
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
    </Provider>
  </>
}

export default LizenaApp;
