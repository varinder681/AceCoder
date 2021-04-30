import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import register from './serviceWorker'

import store from './store'
import App from './App';
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

register();