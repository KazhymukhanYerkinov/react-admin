import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { BrowserRouter, HashRouter } from 'react-router-dom';

  

ReactDOM.render(
  <HashRouter basename = {process.env.PUBLIC_URL}>
    <Provider store = {store}>
      <App />
    </Provider>
  </HashRouter>,

  document.getElementById('root')
);


serviceWorker.unregister();
