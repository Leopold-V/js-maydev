import React from 'react';
import {
  act,
  cleanup,
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from '../utils/routing';
import thunk from 'redux-thunk';

describe('routing', () => {
  test('login', async () => {
    renderWithRouter(<App />);
    const login = await screen.findByText('Login');
    fireEvent.click(login);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  test('faq', () => {
    renderWithRouter(<App />);
    fireEvent.click(screen.getByText('Faq'));
    expect(screen.getByText(/Faq page/i)).toBeInTheDocument();
  });

  test('about', () => {
    renderWithRouter(<App />);
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
  });
});
