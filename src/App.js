import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}

export default App;
