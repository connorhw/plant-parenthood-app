import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

test('renders Nav component successfully', () => {
  render(
    <BrowserRouter>
        <Nav />
    </BrowserRouter>
  );
});

