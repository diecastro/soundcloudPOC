import actionTypes from '../constants/actionTypes';
import { CALL_API } from '../middleware/api';

export function getUser(user) {
  const endpoint = 'getUser';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      method: 'GET',
      types: [actionTypes.getUserRequest, actionTypes.getUserSuccess, actionTypes.getUserFailure]
    }
  };
}

export function getSongs(userId) {
  const endpoint = 'getSongs';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      method: 'GET',
      types: [actionTypes.getSongsRequest, actionTypes.getSongsSuccess, actionTypes.getSongsFailure]
    }
  };
}
