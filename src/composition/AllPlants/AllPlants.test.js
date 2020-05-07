import React from 'react';
import { render } from '@testing-library/react';
import AllPlants from './AllPlants';
import { BrowserRouter } from 'react-router-dom';

test('renders AllPlants component successfully', () => {
  render(
    <BrowserRouter>
        <AllPlants />
    </BrowserRouter>
  );
});