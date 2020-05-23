import React from 'react';
import { render } from '@testing-library/react';
import Favorites from './Favorites';
import { BrowserRouter } from 'react-router-dom';

test('renders Favorites component successfully', () => {
  render(
    <BrowserRouter>
        <Favorites/>
    </BrowserRouter>
  );
});