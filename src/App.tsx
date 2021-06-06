import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './app/store';
import { Router } from './app/Router';

import { PageLayout } from './components/PageLayout';
import { UserProvider } from './context/UserProvider';
import { useEffect } from 'react';
import { getAllQuestions } from './services/question.services';

function App() {

  useEffect(() => {
    getAllQuestions();
  }, [])

  return (
    <Provider store={store}>
      <UserProvider>
        <BrowserRouter>
          <PageLayout>
            <Router />
          </PageLayout>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
}

export default App;
