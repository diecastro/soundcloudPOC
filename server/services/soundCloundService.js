'use strict';
const requestHelper = require('./helpers/requestHelper');


module.exports.getUserId = async (user) => {
  const artistInfo = await requestHelper.get(`/users/${user.user}`);
  const songs = await requestHelper.get(`/users/${artistInfo.id}/tracks`);
  return {artistInfo, songs};
};

module.exports.getSongs = (userId) => {
  return requestHelper.get('/users/18425/tracks');
};
