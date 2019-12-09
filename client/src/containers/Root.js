import React, { Component } from 'react';
import LabelUtil from '../utils/LabelUtil';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import '../styles/main.scss';
import 'babel-polyfill';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export default class Root extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {store, history} = this.props;

    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <MuiThemeProvider theme={LabelUtil.getTheme()}>
          <Provider store={store}>
            <div className='root'>
              <Router
                onUpdate={() => window.scrollTo(0, 0)}
                history={history}
                routes={routes}
              />
            </div>
          </Provider>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
