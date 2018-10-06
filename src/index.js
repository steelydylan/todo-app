import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import React from 'react';
import App from './containers/';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';


const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);