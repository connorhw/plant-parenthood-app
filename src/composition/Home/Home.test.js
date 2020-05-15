import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

test('renders Home component successfully', () => {
  render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
  );
});