import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import UnderConstruction from './UnderConstruction';

let container: HTMLDivElement = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without a name', () => {
  act(() => {
    render(<UnderConstruction />, container);
  });
  expect(container.textContent).toBe(
    'This page is currently under construction.'
  );
});

it('renders with a name', () => {
  const testTitle = 'Gabby';
  act(() => {
    render(<UnderConstruction title={testTitle} />, container);
  });
  expect(container.textContent).toBe(
    `${testTitle}This page is currently under construction.`
  );
});

it('renders an image', () => {
  act(() => {
    render(<UnderConstruction />, container);
  });
  const childImg = container.getElementsByTagName('img')[0];
  expect(childImg).toBeDefined();
});
