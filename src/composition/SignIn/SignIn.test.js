import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './SignIn';
import { BrowserRouter } from 'react-router-dom'

test('renders SignIn component successfully', () => {
    render(
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
        );
      });