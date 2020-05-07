import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing'
import { BrowserRouter } from 'react-router-dom';

test('renders Landing component successfully', () => {
  render(
    <BrowserRouter>
        <Landing /> 
    </BrowserRouter>
  );
});

