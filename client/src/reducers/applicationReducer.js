import actionTypes from '../constants/actionTypes';

const applicationReducer = (
  state = {
    isFetching: false,
    data: null,
    error: false
  }, action) => {
  switch (action.type) {
    case actionTypes.getUserRequest:
      return {...state, isFetching: true, data: null};
    case actionTypes.getUserSuccess:
      return {...state, isFetching: false, data: action.response.data};
    case actionTypes.getUserFailure:
      return {...state, isFetching: false, error: true};
    default :
      return state;
  }
};
export default applicationReducer;
