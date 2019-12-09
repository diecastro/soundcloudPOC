'use strict';

const serverConfig = require('./config/app').server,
  logger = require('./utils/logger'),
  packageJson = require('../package.json');

let serverApp;

global.logger = logger;
global.log = logger.log;

const app = require('./app.js');
serverApp = app();

const server = serverApp.listen(serverConfig.port, () => {

  global.appVersion = packageJson.version;
  logger.info(
    serverConfig.name + ' 🌎  is listening at http://%s:%s',
    serverConfig.host,
    serverConfig.port
  );

});

process.on('uncaughtException', err => {
  let exceptionMessage = err instanceof Error ? err.stack : err.toString();
  exceptionMessage =
    '!!!!!!!!!!!!!! Uncaught Exception !!!!!!!!!!!!!! - ERROR: ' +
    exceptionMessage;
  logger.error(exceptionMessage);
});

return server;
