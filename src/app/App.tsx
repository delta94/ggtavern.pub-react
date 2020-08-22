import React from 'react';
import UnderConstruction from 'app/shared/components/UnderConstruction';
import NavbarComponent from 'app/core/NavbarComponent';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './theme';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router history={history}>
        <NavbarComponent />
        <Route path='/home'>
          <UnderConstruction title='Grinning Goblin Gaming Tavern'></UnderConstruction>
        </Route>
        <Route path='/about'>
          <UnderConstruction title='About Us'></UnderConstruction>
        </Route>
        <Redirect exact path='/' to='/home' />
      </Router>
    </ThemeProvider>
  );
}

export default App;
