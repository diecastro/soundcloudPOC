'use strict';
const requestHelper = require('./helpers/requestHelper');


module.exports.getUserId = (user) => {
  return requestHelper.get('/users/anthonyattalla');
};

module.exports.getSongs = (userId) => {
  return requestHelper.get('/users/18425/tracks');
};
