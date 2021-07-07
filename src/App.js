import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SimpleCart from './components/SimpleCart/SimpleCart';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <SimpleCart />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/products/:productId' component={ProductDetailsPage} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
