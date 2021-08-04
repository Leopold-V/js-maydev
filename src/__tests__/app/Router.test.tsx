import React from 'react';
import {
  fireEvent,
  screen,
} from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from '../utils/routing';

describe('routing', () => {
  it('login', async () => {
    renderWithRouter(<App />, { route: '/login'});
    expect(await screen.findByText('Sign In')).toBeInTheDocument();
  });

  it('faq', () => {
    renderWithRouter(<App />, { route: '/faq'});
    expect(screen.getByText(/Faq page/i)).toBeInTheDocument();
  });

  it('about', () => {
    renderWithRouter(<App />, { route: '/about' });
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
  });
});
