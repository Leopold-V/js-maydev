import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { loadUser, noUser } from './slices/userSlice';

import store from './app/store';
import { Router } from './app/Router';
import { auth } from './app/firebase';

import { PageLayout } from './components/PageLayout';
import { useEffect } from 'react';
import { fetchQuestions } from './actions/question.actions';

function App() {

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userResult: any) => {
      if (userResult) {
        store.dispatch(loadUser({user: userResult}));
      } else {
        store.dispatch(noUser());
      }
    });
    store.dispatch(fetchQuestions())
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageLayout>
          <Router />
        </PageLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
