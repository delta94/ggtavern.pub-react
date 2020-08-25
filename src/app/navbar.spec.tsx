import React from 'react';
import { render } from '@testing-library/react';
import { NavbarComponent } from './navbar.component';
import { MemoryRouter } from 'react-router-dom';

it('renders', () => {
  render(
    <>
      <MemoryRouter>
        <NavbarComponent />
      </MemoryRouter>
    </>
  );
});
