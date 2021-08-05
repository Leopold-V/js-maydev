import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderBar } from '../components/HeaderBar';
import { userType } from '../app/types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser, noUser } from '../slices/userSlice';
import store from '../app/store';

const user: userType = {
  avatar: 'https://avatars.githubusercontent.com/u/58780217?v=4',
  bio: 'Cool',
  dev_profile: '',
  email: 'leopold12d12@gmail.com',
  location: 'France',
  score: 2,
  tags: [],
  userId: '7Rh5lL56AHMFRlZ3pEGnLcxBlUl2',
  username: 'Joe',
  website_url: 'https://dev.to/leopold',
};

describe('Headerbar works correctly', () => {
  it('renders with no user login', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HeaderBar />
        </BrowserRouter>
      </Provider>
    );
    store.dispatch(noUser());
    const text = await screen.findByText('Login');
    expect(text).toBeInTheDocument();
  });
  it('renders with user login', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HeaderBar />
        </BrowserRouter>
      </Provider>
    );
    store.dispatch(loadUser(user));
    const text = await screen.findByText('New question');
    expect(text).toBeInTheDocument();
  });
});
