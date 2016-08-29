/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TraceAndWritePage from './TraceAndWritePage';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <TraceAndWritePage />
  </Provider>,
  document.getElementById('content')
);
