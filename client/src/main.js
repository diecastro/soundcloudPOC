import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import './styles/main.scss';
import 'babel-polyfill';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);
let rootElement = document.getElementById('app');

render(<Root store={store} history={history}/>, rootElement);
