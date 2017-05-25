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
import SingleBookView from './components/Books/SingleBookView';

const Routes = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/books" component={Books} />
          <Route path="/books/:id" component={SingleBookView} />
        </div>
      </div>
    </Router>
  </Provider>
);

export default Routes;
