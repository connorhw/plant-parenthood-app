import React from 'react';
import { render } from '@testing-library/react';
import AddNewPlant from './AppNewPlant';
import { BrowserRouter } from 'react-router-dom';

test('renders AddNewPlant component successfully', () => {
  render(
      <BrowserRouter>
        <AddNewPlant/>
      </BrowserRouter>
    );
});