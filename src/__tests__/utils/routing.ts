import { render } from '@testing-library/react';
import { ReactElement } from 'react-markdown';
import { BrowserRouter, MemoryRouter, useHistory } from 'react-router-dom';

export const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Home page', route);
  return render(ui, { wrapper: MemoryRouter });
};