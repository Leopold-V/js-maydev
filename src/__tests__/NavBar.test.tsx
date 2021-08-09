import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('navbar is working', () => {

  it('go to about page', () => {
    render(<App />);
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
  });

  it('go to faq page', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Faq'));
    expect(screen.getByText(/Faq page/i)).toBeInTheDocument();
  });


  it('go to login page', async () => {
    render(<App />);
    const login = await screen.findByText('Login');
    fireEvent.click(login);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
});
