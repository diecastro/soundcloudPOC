'use strict';

const soundCloudRouter = require('express').Router();
const soundCloudController = require('../controllers/soundCloudController');

soundCloudRouter.route('/getUser').get(soundCloudController.getUser);
soundCloudRouter.route('/getSongs').get(soundCloudController.getSongs);

module.exports = soundCloudRouter;
