import { Router } from './app/Router';
import { HeaderBar } from './components/HeaderBar';

function App() {
  return (
    <div className='bg-background text-primary'>
      <Router>
        <HeaderBar />
      </Router>
    </div>
  );
}

export default App;
