import type { AppProps } from 'next/app';

import '../styles.css';
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '@/themes';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
