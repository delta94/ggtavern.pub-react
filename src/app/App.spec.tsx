import React from 'react';
import { render } from '@testing-library/react';
import App from './app.component';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

test('renders', () => {
  act(() => {
    render(<App />, container);
  });
});
