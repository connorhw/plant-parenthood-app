import React from 'react';
import { render } from '@testing-library/react';
import PlantPage from './PlantPage';
import { BrowserRouter } from 'react-router-dom';

test('renders PlantPage component successfully', () => {
  render(
    <BrowserRouter>
        <PlantPage />
    </BrowserRouter>
  );
});