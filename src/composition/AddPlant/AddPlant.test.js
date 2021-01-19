import React from 'react';
import { render } from '@testing-library/react';
import AddPlant from './AddPlant';
import { BrowserRouter } from 'react-router-dom';

test('renders AddPlant component successfully', () => {
  render(
      <BrowserRouter>
        <AddPlant/>
      </BrowserRouter>
    );
});