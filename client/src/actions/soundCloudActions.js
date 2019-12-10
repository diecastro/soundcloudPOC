import actionTypes from '../constants/actionTypes';
import { CALL_API } from '../middleware/api';

export function getUser(user) {
  const endpoint = 'getUser';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      method: 'POST',
      types: [actionTypes.getUserRequest, actionTypes.getUserSuccess, actionTypes.getUserFailure],
      body: user
    }
  };
}
