'use strict';

const config = require('../config/app'),
  applicationVersion = require('../../package');

module.exports.index = (request, response) => {

  let js = '/bundle.js';
  let css = '/bundle.css';

  if (process.env.NODE_ENV === 'production') {
    js = `/bundle${global.appFullCommit}.js`;
    css = `/bundle${global.appFullCommit}.css`;
  }

  const agentId = request.query.agentId ? request.query.agentId : config.agentId;

  response.status(config.status.ok).render('index', {
    applicationVersion: applicationVersion.version,
    agentId: agentId,
    productionEnvironment: JSON.stringify(process.env.NODE_ENV === 'production'),
    js,
    css
  });

};
