import React from 'react';
import NavbarComponent from 'app/core/NavbarComponent';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './theme';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { AppRoutes } from './app.routes';

export default function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router history={history}>
        <NavbarComponent />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}
