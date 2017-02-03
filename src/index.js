/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import configureStore from './store/configureStore';
import App from './containers/App';  // eslint-disable-line import/no-named-as-default

const store = configureStore({});

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
