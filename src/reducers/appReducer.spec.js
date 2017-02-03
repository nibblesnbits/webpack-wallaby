import { expect } from 'chai';
import appReducer from './appReducer';
import * as actions from '../actions/dataActions';

describe('App Reducer', () => {

  it ('should set data on setData()', () => {
    const initialState = {
      data: undefined
    };

    const action = actions.setData('test');

    const newState = appReducer(initialState, action);

    expect(newState.data).to.equal('test');
  });

  it ('should not modify state on unmatched action', () => {
    const initialState = {
      data: undefined
    };

    const action = {
      type: 'test',
      data: 'test',
    };

    const newState = appReducer(initialState, action);

    expect(newState).to.deep.equal(initialState);
  });
});
