import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import MainPage from '../components/Main';
import routes from '../constants/routes';

const appRoutePrefix = routes.home;

export default (
  <div>
    <IndexRoute component={MainPage}/>
    <Route path={appRoutePrefix} component={MainPage}/>
    <Redirect from='*' to={appRoutePrefix + routes.fourZeroFour}/>
  </div>

);
