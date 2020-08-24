import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Contact, Love, Memoriam } from 'app/components';
import { NotFoundComponent } from 'app/notFound.component';
import { UnderConstruction } from 'app/shared/components/underConstruction.component';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/memoriam'>
        <Memoriam />
      </Route>
      <Route path='/food'>
        <UnderConstruction title='Food Menu' />
      </Route>
      <Route path='/games'>
        <UnderConstruction title='Game Menu' />
      </Route>
      <Route path='/'>
        <Love />
      </Route>
      <Route path='*'>
        <NotFoundComponent />
      </Route>
    </Switch>
  );
};
