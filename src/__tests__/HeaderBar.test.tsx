import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderBar } from '../components/HeaderBar';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser, noUser } from '../slices/userSlice';
import store from '../app/store';
import user from './utils/user';


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
