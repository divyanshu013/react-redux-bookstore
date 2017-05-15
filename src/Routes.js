import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/books" component={Books} />
    </div>
  </Router>
);

export default Routes;
