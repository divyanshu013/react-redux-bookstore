import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const Hot = require('./Routes').default
    ReactDOM.render(
      <Hot />,
      document.getElementById('root')
    )
  })
}
