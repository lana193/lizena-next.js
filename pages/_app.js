import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { GlobalStyle } from '../src/theme/GlobalStyle';
import { theme } from '../src/theme/Theme';
import store from '../store';
import Layout from '../components/Layout';

function LizenaApp({ Component, pageProps }) {
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
