import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './app/store';
import { Router } from './app/Router';
import { auth } from './app/firebase';

import { loadUser, noUser, loadAllUsers } from './slices/userSlice';
import { fetchQuestions } from './actions/question.actions';

import { PageLayout } from './components/PageLayout';
import userServices from './services/user.services';

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userResult: any) => {
      if (userResult) {
        (async () => {
          const user = await userServices.getOneUser(userResult.uid);
          const users = await userServices.getAllUsers();
          store.dispatch(loadUser(user));
          store.dispatch(loadAllUsers(users));
        })();
      } else {
        store.dispatch(noUser());
      }
    });
    store.dispatch(fetchQuestions());
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
