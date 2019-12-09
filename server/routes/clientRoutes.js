'use strict';

const express = require('express'),
  config = require('./../config/app'),
  client = require('./client'),
  router = express.Router(),
  path = require('path');

const staticDir = path.resolve(__dirname, '../../../client/dist');

router.use(express.static(staticDir));

router.get('/api/*', (request, response) => {
  response
    .status(config.status.notFound)
    .send({message: config.error.notFound});
});

router.get('*', client.index);

module.exports = router;
