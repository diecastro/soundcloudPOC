import messages from '../constants/messages';
import moment from 'moment';

const serialize = function (data) {

  return Object.keys(data).map(function (keyName) {
    return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName]);
  }).join('&');
};

function callApi(endpoint, method, body) {
  let dateString = moment().format('ddd, DD MMM YYYY HH:mm:ss Z');

  body = typeof body === 'object' ? JSON.stringify(body) : body;
  let config = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'requestDate': dateString,
    }
  };

  if (method !== 'GET') {
    config.body = body ? serialize({payload: body}) : null;
  }

  return fetch(serverBaseUrl + endpoint, config)
    .then(response => {
      if (response.status === 204 || response.status === 403) {
        return response.text().then(payload => ({payload, response}));
      } else if (response.status === 400) {
        return response.json().then(payload => {
          return {payload: {message: payload.message}, response: response};
        });
      } else if (response.status === 413) {
        return {payload: {message: messages.tooLarge.message}, response: response};
      } else {
        return response.json().then(payload => ({payload, response}));
      }
    }).then(({payload, response}) => {
      if (!response.ok) {
        try {
          let errorPayload = JSON.parse(payload);
          return Promise.reject(errorPayload);
        } catch (err) {
          return Promise.reject(payload);
        }
      }
      return payload;
    }).catch(err => {
      try {
        let error = JSON.parse(err);
        return Promise.reject(error);
      } catch (e) {
        return Promise.reject(err);
      }
    });
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {

  const callAPI = action[CALL_API];

  // So the middleware doesn't get applied to every single action
  if (!action[CALL_API]) {
    return next(action);
  }

  let {endpoint, method, types, body} = callAPI;

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({type: requestType}));

  return callApi(endpoint, method, body).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'There was an error'
    }))
  );
}
