'use strict';

const processResponseWith = require('./helpers/processResponse');
const soundCloudService = require('../services/soundCloundService');

module.exports.getUser = (req, res) => {
  const params = {
    user: req.body.payload
  };
  processResponseWith(res, soundCloudService.getUserId, params);
};

module.exports.getSongs = (req, res) => {
  const params = {
    userId: req.body.payload
  };
  processResponseWith(res, soundCloudService.getSongs, params);
};
