import * as types from '../constants/actionTypes';

export function setData(data) {
  return {
    type: types.SET_DATA,
    data
  };
}
