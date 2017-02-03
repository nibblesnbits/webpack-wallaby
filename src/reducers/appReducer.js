import * as types from '../constants/actionTypes';

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
