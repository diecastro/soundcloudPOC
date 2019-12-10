'use strict';

const soundCloudRouter = require('express').Router();
const soundCloudController = require('../controllers/soundCloudController');

soundCloudRouter.route('/getUser').post(soundCloudController.getUser);
soundCloudRouter.route('/getSongs').get(soundCloudController.getSongs);

module.exports = soundCloudRouter;
