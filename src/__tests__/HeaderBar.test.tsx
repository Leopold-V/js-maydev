import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderBar } from '../components/HeaderBar';
import { userType } from '../app/types';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { loadUser } from '../slices/userSlice';

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

const mockStore = configureStore();
const store = mockStore({
  user: {
    isAuthenticated: true,
    user: null,
    users: null,
    loading: false,
    loadingData: false,
    loadingUsers: false,
    error: '',
  },
  notifications: {
    notifications: [],
    loading: false,
    error: '',
  },
});

describe('Headerbar works correctly', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HeaderBar />
      </BrowserRouter>
    </Provider>
  );

  it('renders with no user login', () => {
    const text = screen.getByText('Login');
    expect(text).toBeInTheDocument();
  });
  it('renders with user login', () => {
    store.dispatch(loadUser(user));
    const text = screen.getByText('New question');
    expect(text).toMatchSnapshot();
  });
});
