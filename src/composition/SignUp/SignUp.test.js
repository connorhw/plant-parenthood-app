import React from 'react';
import { render } from '@testing-library/react';
import SignUp from './SignUp';
import { BrowserRouter } from 'react-router-dom';

test('renders SignUp component successfully', () => {
  render(
  <BrowserRouter>
    <SignUp/>
  </BrowserRouter>
  );
});