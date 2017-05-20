import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';

const Routes = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
        </div>
      </div>
    </Router>
  </Provider>
);

export default Routes;
