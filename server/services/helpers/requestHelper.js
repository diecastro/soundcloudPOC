'use strict';
const agent = require('superagent'),
  config = require('../../config/app'),
  logger = require('../../utils/logger');
const protocol = 'https:';
const host = 'api.soundcloud.com';
const clientId='pToAEVYicMm3OkPBnOlGCHfEBFrYx1fz';

module.exports.get = (url) => new Promise((resolve, reject) => {
  const requestUrl = `${protocol}//${host}${url}?client_id=${clientId}`;

  agent.get(requestUrl)
    .set({'Content-Type': 'application/json'})
    .set('Accept', 'application/json')
    .end((err, res) => {

      if (err) {
        let error = err.message || JSON.stringify(err);
        logger.error('Failed to get from merchant enrollment api: % ', error);
        logger.error('Failed to get endpoint %s', requestUrl);

        reject({
          status: config.status.gatewayTimeout,
          error: error
        });
      } else if (res.body && res.body.error) {
        logger.error('Failed to get endpoint %s', requestUrl);
        reject({
          status: config.status.notFound,
          error: config.error.notFound + res.body.error
        });
      } else {
        if (res.body && res.body.name && res.body.name === 'PayAnywhere api key') {
          delete res.body['name'];
        }
        resolve(res.body);
      }
    });
});
