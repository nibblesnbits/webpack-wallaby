import { expect } from 'chai';
import appReducer from './appReducer';
import * as actions from '../actions/dataActions';

describe('App Reducer', () => {

  it ('should add message on showMessage()', () => {
    const initialState = {
      data: undefined
    };

    const action = actions.setData('test');

    const newState = appReducer(initialState, action);

    expect(newState.data).to.equal('test');
  });
});
