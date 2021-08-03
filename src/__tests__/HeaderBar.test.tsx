import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderBar } from '../components/HeaderBar';
import { notificationType, userType } from '../app/types';
import * as redux from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue(null)

describe('Headerbar works correctly', () => {
  const user: userType = {
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
};
  const loading = false;
  const notifications: notificationType[] = [];

  const useSelector = jest.fn();

  it('renders without crashing', () => {
    render(<BrowserRouter><HeaderBar /></BrowserRouter>);
    const text = screen.getByText('Mdev');
    expect(text).toBeInTheDocument();
  });
})
