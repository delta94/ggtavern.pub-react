import React from 'react';
import NavbarComponent from 'app/core/NavbarComponent';
import { Contact, Love, Memoriam } from 'app/components';
import NotFoundComponent from 'app/NotFoundComponent';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './theme';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router history={history}>
        <NavbarComponent />
        <Switch>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/memoriam'>
            <Memoriam></Memoriam>
          </Route>
          <Route path='/'>
            <Love></Love>
          </Route>
          <Route path='*'>
            <NotFoundComponent></NotFoundComponent>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
