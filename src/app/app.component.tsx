import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './theme';
import { createBrowserHistory } from 'history';

import { Router } from 'react-router-dom';
import { NavbarComponent } from 'app/navbar.component';
import { AppRoutes } from './app.routes';
import { SnackbarProvider } from 'notistack';

export default function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={2}>
        <Router history={history}>
          <NavbarComponent />
          <AppRoutes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
