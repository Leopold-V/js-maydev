import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('renders without crashing', () => {
  const app = render(<App />);
  //const text = screen.getByText('Home');
  expect(app).toMatchSnapshot();
});