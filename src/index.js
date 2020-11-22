import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './js/nonFeature/_helpers/store';

import App from './router/AppRouter';

//setup fake backend

// import configureFakeBackend from './js/nonFeature/_helpers';
// configureFakeBackend();

const wrapper = document.getElementById('container');
wrapper
  ? ReactDOM.render(
    <Provider store={store}>
        <App />
      </Provider>,
      wrapper,
    )
  : false;
