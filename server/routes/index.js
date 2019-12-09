'use strict';

const soundCloudRouter = require('./soundcloudRoutes');

module.exports = app =>{
  app.use('/api/',soundCloudRouter)
};
