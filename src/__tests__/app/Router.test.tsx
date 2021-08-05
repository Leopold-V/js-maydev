import React from 'react';
import {
  screen,
} from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from '../utils/routing';
import store from '../../app/store';
import { noUser } from '../../slices/userSlice';

describe('routing', () => {
  it('renders login', async () => {
    renderWithRouter(<App />, { route: '/login'});
    store.dispatch(noUser());
    const text = await screen.findByText('Sign In');
    expect(text).toBeInTheDocument();
  });

  it('renders faq', () => {
    renderWithRouter(<App />, { route: '/faq'});
    expect(screen.getByText(/Faq page/i)).toBeInTheDocument();
  });

  it('renders about', () => {
    renderWithRouter(<App />, { route: '/about' });
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
  });
});