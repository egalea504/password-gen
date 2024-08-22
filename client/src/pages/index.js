// used MUI landing page template to start the base for website
// light/dark mode in components AppAppBar from toggleColorMode component

import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';

export default function Home() {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const defaultTheme = createTheme(
    {
      palette: {
        primary: {
          main: '#FFFF',
        },
        secondary: {
          main: '#0000',
        },
      },
    }
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
    </ThemeProvider>
  );
}