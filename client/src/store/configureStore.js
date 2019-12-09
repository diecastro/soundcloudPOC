import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import api from '../middleware/api';
import soundcloudSiteReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';

const configureStore = () => {
  const logger = createLogger({});
  const reactRouterMiddleware = routerMiddleware(browserHistory);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = composeEnhancers(applyMiddleware(thunk, api, logger, reactRouterMiddleware));
  const store = createStore(soundcloudSiteReducer, middlewares);

  return store;
};

export default configureStore;
