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
  beforeEach(() => {
    /*const user = {
            avatar: "",
            bio: "Cool",
            dev_profile: "",
            email: "leopold12d12@gmail.com",
            location: "France",
            score: 2,
            tags: [],
            userId: "7Rh5lL56AHMFRlZ3pEGnLcxBlUl2",
            username: "Joe",
            website_url: "https://dev.to/leopold" 
        };*/
  });

  test('login', () => {
    renderWithRouter(<App />);
    setTimeout(() => {
      fireEvent.click(screen.getByText('Login'));
      expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    }, 0);
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
