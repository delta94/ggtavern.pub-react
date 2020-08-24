import React from 'react';
import NavbarComponent from 'app/core/NavbarComponent';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './theme';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import firebase from 'firebase';

import { AppRoutes } from './app.routes';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'gg-tavern.firebaseapp.com',
  projectId: 'gg-tavern',
  databaseURL: 'https://gg-tavern.firebaseio.com',
  storageBucket: 'gg-tavern.appspot.com',
  messagingSenderId: '770177405846',
  appId: '1:770177405846:web:e3b9b6dcc4b1808be3c3b7',
};
firebase.initializeApp(firebaseConfig);

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
